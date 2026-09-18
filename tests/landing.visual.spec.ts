import { expect, test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const baseUrl = process.env.LANDING_QA_URL ?? 'http://localhost:4177';
const screenshotDir = resolve(process.cwd(), 'qa-screenshots');
const requiredText = [
  'Funcionalidades',
  'Contacto',
];
const landingCases = [
  {
    name: 'ISO SMART AI',
    path: '/inicio',
    slug: 'inicio',
    required: ['Controla tu gestión ISO sin depender de Excel', 'Agendar demo'],
  },
  {
    name: 'ISO Smart MedSupplier',
    path: '/medsupplier',
    slug: 'medsupplier',
    required: [
      'Cumplimiento documental y riesgo trazable para proveedores médicos',
      'Solicitar demo',
      'OK',
      'Pendiente',
      'Vencido',
      'Riesgo',
    ],
  },
];

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

async function validateLanding(page: import('@playwright/test').Page, path: string, productText: string[]) {
  await page.goto(new URL(path, baseUrl).toString(), { waitUntil: 'networkidle' });

  for (const text of [...requiredText, ...productText]) {
    const visibleMatches = await page.getByText(text).evaluateAll((elements) =>
      elements.filter((element) => {
        const style = window.getComputedStyle(element);
        return (
          style.visibility !== 'hidden' &&
          style.display !== 'none' &&
          element.getClientRects().length > 0
        );
      }).length,
    );

    expect(visibleMatches, `Expected at least one visible "${text}" match`).toBeGreaterThan(0);
  }

  const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(hasHorizontalScroll, 'Expected no horizontal scroll').toBe(false);
}

test('ISO SMART AI conversion flow is usable on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  let submittedPayload: Record<string, unknown> | undefined;
  await page.route('**/api/demo-requests/', async (route) => {
    submittedPayload = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, created: true, status: 'new' }),
    });
  });
  await page.goto(new URL('/', baseUrl).toString(), { waitUntil: 'networkidle' });

  const menuButton = page.getByRole('button', { name: 'Abrir menú' });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Navegación móvil' }).getByRole('link', { name: 'Contacto' }).click();
  await expect(page.locator('#contacto')).toBeInViewport();

  await expect(page.getByLabel('Nombre')).toBeVisible();
  await expect(page.getByLabel('Correo de trabajo')).toHaveAttribute('type', 'email');
  await expect(page.getByLabel('Organización')).toHaveAttribute('required', '');
  await expect(page.getByLabel('Prioridad principal')).toHaveAttribute('required', '');
  await page.getByLabel('Nombre').fill('Ana Calidad');
  await page.getByLabel('Correo de trabajo').fill('ana@example.com');
  await page.getByLabel('Organización').fill('Example Quality');
  await page.getByLabel('Prioridad principal').selectOption('audit_readiness');
  await page.getByLabel(/Acepto que Smart3AI/).check();
  await page.getByRole('button', { name: 'Solicitar demo' }).click();
  await expect(page.getByRole('status')).toContainText('Solicitud recibida');
  expect(submittedPayload?.product).toBe('ISO_SMART');
  expect(submittedPayload?.consent).toBe(true);
});

for (const landing of landingCases) {
  test.describe(`${landing.name} landing visual QA`, () => {
    test('desktop 1440x1200 screenshot', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1200 });
      await validateLanding(page, landing.path, landing.required);
      await page.screenshot({
        path: resolve(screenshotDir, `${landing.slug}-desktop-1440x1200.png`),
        fullPage: true,
      });
    });

    test('mobile 390x1200 screenshot', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 1200 });
      await validateLanding(page, landing.path, landing.required);
      await page.screenshot({
        path: resolve(screenshotDir, `${landing.slug}-mobile-390x1200.png`),
        fullPage: true,
      });
    });
  });
}
