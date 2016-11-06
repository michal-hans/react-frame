/**
*
* ModuleA
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ModuleA extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default ModuleA;
