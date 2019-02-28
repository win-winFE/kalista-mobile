import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'core-js';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './index.less';

require('./favicon.ico');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('content')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const AppRoot = require('./components/Root').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <AppRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('content')
    );
  });
}
