import { expect, test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const baseUrl = process.env.LANDING_QA_URL ?? 'http://localhost:4177';
const screenshotDir = resolve(process.cwd(), 'qa-screenshots');
const requiredText = [
  'Solicitar demo',
  'Ver funcionalidades',
  'Solución',
  'Funcionalidades',
  'Contacto',
];
const landingCases = [
  {
    name: 'ISO SMART AI',
    path: '/inicio',
    slug: 'inicio',
    required: ['Gestión ISO inteligente, ordenada y digital'],
  },
  {
    name: 'ISO Smart MedSupplier',
    path: '/medsupplier',
    slug: 'medsupplier',
    required: [
      'Cumplimiento documental y riesgo trazable para proveedores médicos',
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
