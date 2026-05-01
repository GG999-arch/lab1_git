import { test, expect } from 'vitest';

test('Крок 4: Додавання завдання', async () => {
  // Заходимо на сайт, який розгорне Vite
  await page.goto('http://localhost:5173/');

  // Пишемо в інпут і тиснемо кнопку
  await page.locator('#taskInput').fill('Здати лабу');
  await page.locator('#addBtn').click();

  // Перевіряємо, чи з'явився текст у списку
  await expect(page.locator('#taskList')).toContainText('Здати лабу');
});