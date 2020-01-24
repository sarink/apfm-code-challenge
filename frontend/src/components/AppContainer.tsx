import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';

import { APP_LOCATION } from 'config/appConfig';
import { App } from 'components/App';
import { AppThemeProvider } from 'components/AppThemeProvider';

const AppContainer: React.FC = (props) => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </BrowserRouter>
  );
};

const MaybeHotAppContainer = APP_LOCATION === 'local' ? hot(AppContainer) : AppContainer;

export { MaybeHotAppContainer as AppContainer };
