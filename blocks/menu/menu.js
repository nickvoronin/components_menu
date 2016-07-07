(function() {
	"use strict";

	/**
	 * @class Menu
	 * Компонента "Меню"
	 */
	class Menu {

		/**
		 * @constructor
		 * @param  {Object} opts
		 * @param  {HTMLElement} opts.el
		 */
		constructor (opts) {
			this.el = opts.el;
			this.data = opts.data;

			this.render();

			this.list = this.el.querySelector(".menu__list");
			this.title = this.el.querySelector(".menu__title");

			this._initEvents();
		}

		get _template () {
			return document.querySelector("#menu").innerHTML;
		}

		/**
		 * Рисуем меню
		 */
		render () {
			this.el.innerHTML = TemplateEngine(this._template, this.data);
		}

		/**
		* Удаления элемента меню
		* @param  {HTMLElement} item
		*/
		removeItem(item) {
			let index = parseInt(item.parentNode.dataset.index, 10);

			this.trigger("remove", {
				index
			});

			this.data.items.splice(index, 1);
			this.render();
		}

		/**
		* Выбор элемента меню
		* @param  {HTMLElement} item
		*/
		pickItem(item) {
			this.trigger("pick", {
				href: item.getAttribute("href"),
				anchor: item.textContent
			});
		}


		/**
		* Выбор элемента меню
		* @param  {HTMLElement} item
		*/
		addItem(item) {
			this.trigger("add", {
				href: item.href,
				anchor: item.anchor
			});

			this.data.items.push(item);
			this.render();
		}

		/**
		* Развешиваем события
		*/
		_initEvents() {
			this.el.addEventListener("click", this._onClick.bind(this));
		}

		/**
		* Клик в любую область меню
		* @param  {Event} event
		*/
		_onClick(event) {
			event.preventDefault();
			let item = event.target;

			switch (item.dataset.action) {
					case "remove":
						this.removeItem(item);
						break;

					case "pick":
						this.pickItem(item);
						break;
			}
		}

		/**
		* Сказать миру о случившемся
		* @param {string} name тип события
		* @param {Object} data объект события
		*/
		trigger (name, data) {

			let widgetEvent = new CustomEvent(name, {
				bubbles: true,
				detail: data
			});

			this.el.dispatchEvent(widgetEvent);

			console.log(name, data);
		}

	}

	// Export
	window.Menu = Menu;
})(window);
