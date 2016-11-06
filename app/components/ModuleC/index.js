/**
*
* ModuleC
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const style = {
  color: 'red'
}

class ModuleC extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span style={style}>
        <FormattedMessage {...messages.header} />
      </span>

    );
  }
}

export default ModuleC;
