import refs from './refs';

function updateMarkup(template, articles) {
  const markup = template(articles);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
