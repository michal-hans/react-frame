/**
*
* AppLogo
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function AppLogo() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default AppLogo;
