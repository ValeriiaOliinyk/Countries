import debounce from 'lodash.debounce';
import './styles.css';
import './js/notifications';
import templates from './templates/countries.hbs';
import listTmp from './templates/list.hbs';
import refs from './js/refs';
import showMessage from './js/notifications';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updatemarkup';

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value;
    refs.container.innerHTML = '';
    if (!refs.input.value) {
      return;
    }
    fetchCountries(inputValue).then(data => {
      if (data.length > 10) {
        showMessage();
      }

      if (data.length >= 2 && data.length <= 10) {
        updateMarkup(listTmp, data);
      }

      if (data.length === 1) {
        updateMarkup(templates, data);
      }
    });
  }, 500),
);
