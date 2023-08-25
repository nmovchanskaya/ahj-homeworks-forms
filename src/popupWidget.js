export default class PopupWidget {
  constructor(butName, containerName) {
    this.buttonName = butName;
    this.containerName = containerName;

    this.onClick = this.onClick.bind(this);
  }

  bindToDOM() {
    this.button = document.querySelector(this.buttonName);
    this.container = document.querySelector(this.containerName);

    this.button.addEventListener('click', this.onClick);
  }

  getPopupMarkup(title, content) {
    return `
            <div class="popup">
                <div class="popup__title">
                    ${title}
                </div>
                <div class="popup__content">
                    ${content}
                </div>
            </div>
        `;
  }

  onClick(e) {
    e.preventDefault();

    // search for popup
    // if we have - remove it
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.parentElement.remove();
    } else {
      // if no - create popup
      const div = document.createElement('div');
      div.className = 'popup__container';
      div.innerHTML = this.getPopupMarkup(this.button.dataset.title, this.button.dataset.content);
      this.container.insertBefore(div, null);

      this.setPopupPosition('.popup');
    }
  }

  setPopupPosition(popupElemName) {
    const popup = this.container.querySelector(popupElemName);
    const { left, top } = this.button.getBoundingClientRect();
    popup.style.left = `${left + this.button.offsetWidth / 2 - popup.offsetWidth / 2}px`;
    popup.style.top = `${top - popup.offsetHeight - 10}px`;
  }
}
