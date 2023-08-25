/**
 * @jest-environment jsdom
*/

import PopupWidget from '../popupWidget';

test('click 1st time', () => {
  document.body.innerHTML = `
        <div class="container">
            <button type="button" class="button" data-title="Title" data-content="Super shiny content about everything">
                Click to toggle popover
            </button>
        </div>`;

  const button = document.querySelector('.button');
  const popupWidget = new PopupWidget('.button', '.container');
  popupWidget.bindToDOM();
  button.click();
  const popup = document.querySelector('.popup');

  expect(popup !== null).toBe(true);
});

test('click 2nd tine', () => {
  document.body.innerHTML = `
        <div class="container">
            <button type="button" class="button" data-title="Title" data-content="Super shiny content about everything">
                Click to toggle popover
            </button>
        </div>`;

  const button = document.querySelector('.button');
  const popupWidget = new PopupWidget('.button', '.container');
  popupWidget.bindToDOM();
  button.click();
  button.click();
  const popup = document.querySelector('.popup');

  expect(popup).toBeNull();
});
