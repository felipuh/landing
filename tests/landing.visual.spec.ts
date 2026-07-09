import { expect, test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const baseUrl = process.env.LANDING_QA_URL ?? 'http://localhost:4177/inicio';
const screenshotDir = resolve(process.cwd(), 'qa-screenshots');
const requiredText = [
  'Solicitar demo',
  'Ver funcionalidades',
  'Solución',
  'Funcionalidades',
  'Contacto',
];

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

async function validateLanding(page: import('@playwright/test').Page) {
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  for (const text of requiredText) {
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
}

test.describe('ISO SMART AI landing visual QA', () => {
  test('desktop 1440x1200 screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1200 });
    await validateLanding(page);
    await page.screenshot({
      path: resolve(screenshotDir, 'inicio-desktop-1440x1200.png'),
      fullPage: true,
    });
  });

  test('mobile 390x1200 screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 1200 });
    await validateLanding(page);
    await page.screenshot({
      path: resolve(screenshotDir, 'inicio-mobile-390x1200.png'),
      fullPage: true,
    });
  });
});
