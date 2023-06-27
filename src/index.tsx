import ReactDOM from 'react-dom';
import i18n from 'i18next';

import App from './components/app/App';
import { I18nextProvider } from 'react-i18next';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    ru: {
      translation: require('./locales/ru.json'),
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
