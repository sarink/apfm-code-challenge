import './commands';
import { clientBaseUrl } from 'helpers/clientRoutes';

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Using import here no longer works. for reasons unkown
require('./commands');

// Cypress will, apparently, not intercept `fetch` calls (only xhrs)
// Nullify `window.fetch` to trick it into using a polyfill, which will fallback to xhrs
Cypress.on('window:before:load', (win) => {
  (win as any).fetch = null;
});

// Set the base url so `cy.visit` works nicely
Cypress.config('baseUrl', `${clientBaseUrl}/#`);
