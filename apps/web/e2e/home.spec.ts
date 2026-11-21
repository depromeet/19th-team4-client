import { expect, test } from '@playwright/test';

test('홈 화면에 제목이 보인다', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: '19th Team4' })).toBeVisible();
  await expect(page.getByText('12,000원')).toBeVisible();
});
