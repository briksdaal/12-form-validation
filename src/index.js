import { getNames } from 'country-list';
import './style.css';

class FormValidation {
  constructor() {
    this.form = document.querySelector('#contact-form');
    this.submitMsg = document.querySelector('.submit-msg');
    this.setEventListeners();
  }

  static countries = getNames();

  static getErrorDiv(input) {
    return input.parentNode.querySelector('.error');
  }

  validateEmail() {
    const constraint = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const { email } = this.form;
    const error = FormValidation.getErrorDiv(email);
    if (constraint.test(email.value)) {
      email.setCustomValidity('');
      error.textContent = '';
    } else {
      email.setCustomValidity('Email is not in correct format');
      error.textContent = 'Email is not in correct format';
    }
    this.clearSubmit();
  }

  validateCountry() {
    const { country } = this.form;
    const error = FormValidation.getErrorDiv(country);
    let maybe = false;
    let exact = false;
    let possibleCountry;
    FormValidation.countries.forEach((countryItem) => {
      if (!maybe && countryItem.toLowerCase().includes(country.value.toLowerCase())) {
        possibleCountry = countryItem;
        maybe = true;
        if (countryItem.toLowerCase() === country.value.toLowerCase()) {
          exact = true;
        }
      }
    });
    if (exact) {
      country.setCustomValidity('');
      error.textContent = '';
      country.value = possibleCountry;
      delete error.dataset.correction;
    } else if (maybe) {
      country.setCustomValidity(`Did you mean ${possibleCountry}?`);
      error.textContent = `Did you mean ${possibleCountry}?`;
      error.dataset.correction = possibleCountry;
    } else {
      country.setCustomValidity('Doesn\'t seem to be a real country');
      error.textContent = 'Doesn\'t seem to be a real country';
      delete error.dataset.correction;
    }

    this.clearSubmit();
  }

  updateCountry() {
    const { country } = this.form;
    const error = FormValidation.getErrorDiv(country);

    if (error.dataset.correction) {
      country.value = error.dataset.correction;
      this.validateCountry();
    }
  }

  validateZip() {
    this.clearSubmit();
  }

  validatePwd() {
    this.clearSubmit();
  }

  validatePwdConfirm() {
    this.clearSubmit();
  }

  clearSubmit() {
    if (this.form.checkValidity()) {
      this.submitMsg.classList.remove('error');
      this.submitMsg.textContent = '';
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.validateEmail();
    this.validateCountry();
    this.validateZip();
    this.validatePwd();
    this.validatePwdConfirm();

    this.clearSubmit();
    if (this.form.checkValidity()) {
      this.submitMsg.textContent = 'Everything looks good ✋';
    } else {
      this.submitMsg.classList.add('error');
      this.submitMsg.textContent = 'Please fix errors and submit again';
    }
  }

  setEventListeners() {
    this.form.email.addEventListener('focusout', this.validateEmail.bind(this));
    this.form.country.addEventListener('focusout', this.validateCountry.bind(this));
    FormValidation.getErrorDiv(this.form.country).addEventListener('click', this.updateCountry.bind(this));
    this.form.zipcode.addEventListener('focusout', this.validateZip.bind(this));
    this.form.password.addEventListener('input', this.validatePwd.bind(this));
    this.form['password-confirm'].addEventListener('input', this.validatePwdConfirm.bind(this));
    Object.values(this.form)
      .filter((value) => value.tagName === 'INPUT')
      .forEach((input) => {
        input.addEventListener('focusin', this.clearSubmit.bind(this));
      });
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }
}

const formValidator = new FormValidation();
