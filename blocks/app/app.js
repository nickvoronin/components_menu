(function () {
	"use strict";
	let Menu = window.Menu;
	let Form = window.Form;
	window.menu = new Menu({
		el: document.querySelector(".js-menu"),
		data: {
			title: "SINGLE PAGE APPLICATION",
			items:  [
				{
					href: "https://vk.com/",
					anchor: "vk.com"
				},
				{
					href: "https://ok.ru/",
					anchor: "ok.ru"
				},
				{
					href: "https://yahoo.com/",
					anchor: "yahoo.com"
				},
				{
					href: "https://vk.com/",
					anchor: "vk.com"
				},
				{
					href: "https://ok.ru/",
					anchor: "ok.ru"
				},
				{
					href: "https://yahoo.com/",
					anchor: "yahoo.com"
				}
			]
		}
	});
	window.form = new Form({
		el: document.querySelector(".js-form"),
		action: "menu.pickItem();"
	});
	// pickItem(item) {
	// 	this.trigger("pick", {
	// 		href: item.getAttribute("href"),
	// 		anchor: item.textContent
	// 	});
	// }

	menu.el.addEventListener("pick", function () {

	});

})();
