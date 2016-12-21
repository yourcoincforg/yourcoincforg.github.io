import {config} from 'config'

exports.onRouteUpdate = (state, page, pages) => {

  if (window.location.pathname.indexOf('freebitcoin') > 0 ) {
    window.addEventListener('load', (event) => {
      console.log('loaded');
      ACPuzzle.create(config.smkey, 'acwidget', { lang: 'en', size: 'standard' });
    }, true);
  }
};
