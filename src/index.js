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
    if (!FormValidation.checkEmpty(email)) {
      if (constraint.test(email.value)) {
        email.setCustomValidity('');
        error.textContent = '';
      } else {
        email.setCustomValidity('Email is not in correct format');
        error.textContent = 'Email is not in correct format';
      }
    }
    this.clearSubmit();
  }

  validateCountry() {
    const { country } = this.form;
    const error = FormValidation.getErrorDiv(country);
    let maybe = false;
    let exact = false;
    let possibleCountry;
    if (!FormValidation.checkEmpty(country)) {
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
    const constraintFirst = /^\d+$/;
    const constraintSecond = /^\d{5,7}$/;
    const { zipcode } = this.form;
    const error = FormValidation.getErrorDiv(zipcode);

    if (!FormValidation.checkEmpty(zipcode)) {
      if (constraintFirst.test(zipcode.value)) {
        if (constraintSecond.test(zipcode.value)) {
          zipcode.setCustomValidity('');
          error.textContent = '';
        } else {
          zipcode.setCustomValidity('Zipcode must be 5 to 7 digits');
          error.textContent = 'Zipcode must be 5 to 7 digits';
        }
      } else {
        zipcode.setCustomValidity('Zipcode must digits only');
        error.textContent = 'Zipcode must digits only';
      }
    }

    this.clearSubmit();
  }

  validatePwd() {
    const constraint = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    const { password } = this.form;
    const passwordConfirm = this.form['password-confirm'];
    const error = FormValidation.getErrorDiv(password);

    if (!FormValidation.checkEmpty(password)) {
      if (!constraint.test(password.value)) {
        password.setCustomValidity('');
        error.textContent = '';
      } else {
        password.setCustomValidity('Password must be eight characters minimum, and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
        error.textContent = 'Password must be eight characters minimum, and include at least one lowercase letter, one uppercase letter, one digit, and one special character';
      }
      if (passwordConfirm.value.length) {
        this.validatePwdConfirm();
      }
    }

    this.clearSubmit();
  }

  validatePwdConfirm() {
    const passwordConfirm = this.form['password-confirm'];
    const { password } = this.form;
    const error = FormValidation.getErrorDiv(passwordConfirm);

    if (!FormValidation.checkEmpty(passwordConfirm)) {
      if (passwordConfirm.value === password.value) {
        passwordConfirm.setCustomValidity('');
        error.textContent = '';
      } else {
        passwordConfirm.setCustomValidity('Passwords don\'t match');
        error.textContent = 'Passwords don\'t match';
      }
    }

    this.clearSubmit();
  }

  static checkEmpty(input) {
    const error = FormValidation.getErrorDiv(input);
    if (input.value.length === 0) {
      input.setCustomValidity('Field can\'t be empty');
      error.textContent = 'Field can\'t be empty';
      return true;
    }
    return false;
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
    this.form.password.addEventListener('focusout', this.validatePwd.bind(this));
    this.form['password-confirm'].addEventListener('focusout', this.validatePwdConfirm.bind(this));
    Object.values(this.form)
      .filter((value) => value.tagName === 'INPUT')
      .forEach((input) => {
        input.addEventListener('focusin', this.clearSubmit.bind(this));
      });
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }
}

const formValidator = new FormValidation();
