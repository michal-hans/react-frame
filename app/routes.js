// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import React from 'react';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        let importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('components/Navigation')
        ])

        importModules.then((modules) => {
          cb(null, {
            main: modules[0].default,
            header: () => (<h2>HomePage</h2>),
            sidebar: modules[1].default,
            layoutName: 'block'
          })
        })
        importModules.catch(errorLoading);
      },
    }, {
      path: '/layout',
      name: 'layout',
      getComponents(nextState, cb) {
        let importModules = Promise.all([
          System.import('components/Navigation'),
          System.import('components/ModuleB'),
          System.import('components/ModuleC')
        ])

        importModules.then((modules) => {
          cb(null, {
            main: modules[0].default,
            header: modules[1].default,
            sidebar: modules[2].default,
            layoutName: 'inline'
          })
        })
        importModules.catch(errorLoading);
        ;
      }
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
