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

    render() {
      this.el.innerHTML = TemplateEngine(this._template, this.data);
    }

    get _template() {
      return document.querySelector("#form-tmpl").innerHTML;
    }

    _initEvents() {
      document.forms[0].elements.submit.addEventListener("click", this._toggleButtonEvents);
    }

    _toggleButtonEvents(event) {
      let inputsHidden = this.parentNode.firstChild.classList.contains("hidden");

      if (inputsHidden ) {
        Form.prototype._showFormFields(event);
      } else {
        Form.prototype._submitForm(event);
        Form.prototype._hideFormFields(event);
      }

      event.preventDefault();
    }

    _showFormFields(event) {
      event.preventDefault();
      event.target.parentNode.firstChild.classList.toggle("hidden");
    }

    _submitForm(event) {
      let elements = event.target.form,
        href = elements.href.value,
        anchor = elements.anchor.value;

      menu.addItem({
        href,
        anchor
      });

      Form.prototype.cleanForm(event.target.parentNode);
    }

    _hideFormFields(event) {
      event.target.parentNode.firstChild.classList.toggle("hidden");
    }

    cleanForm(form) {
      console.log("cleanForm:", form.elements);
      form.elements.href.value = "";
      form.elements.anchor.value = "";
      form.classList.remove("active-form");
    }


  }

  // export
  window.Form = Form;
}());
