/**
 * @jest-environment jsdom
 */

import Widget from './Widget.js';

test('whether class can actually create widget', () => {
  new Widget();
  const widgetWindow = document.querySelector('.widget-window');
  expect(widgetWindow).toBeTruthy();
});
