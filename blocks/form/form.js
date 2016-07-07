(function () {
  /**
   * @class Form
   * Компонента Form
   */
  class Form {
    /**
     * @constructor
     * @param {Oject} options
     * @param {HTMLElement} options.el
     */
    constructor(options) {
      this.el = options.el;
      this.data = options.data;

      this.render();
      this._initEvents();
    }

    get _template() {
      return document.querySelector("#form-tmpl").innerHTML;
    }

    render() {
      this.el.innerHTML = TemplateEngine(this._template, this.data);
    }

    cleanForm(form) {
      console.log("cleanForm:", form.elements);
      form.elements.href.value = "";
      form.elements.anchor.value = "";
      form.classList.remove("active-form");
  }

    _initEvents() {
      document.forms[0].elements.submit.addEventListener("click", this._onSubmit);
    }

    _onSubmit(event) {
      let elements = event.target.form,
        href = elements.href.value,
        anchor = elements.anchor.value;
      event.preventDefault();

      menu.addItem({
        href,
        anchor
      });

      Form.prototype.cleanForm(this.form);
    }
  }

  // export
  window.Form = Form;
}());
