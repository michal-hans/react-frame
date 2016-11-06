/**
*
* ModuleB
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ModuleB extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <FormattedMessage {...messages.header} />
    );
  }
}

export default ModuleB;
