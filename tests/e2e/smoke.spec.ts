import { test, expect } from '@playwright/test';

const routes = ['/', '/irpf/', '/pension/', '/coche/', '/finiquito/', '/paro/', '/vivienda/'];

test.describe('rutas públicas', () => {
  for (const route of routes) {
    test(`${route} carga su contenido principal`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
    });
  }
});
