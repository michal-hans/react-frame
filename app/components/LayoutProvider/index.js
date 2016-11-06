/**
*
* LayoutProvider
*
*/

import React from 'react';


class LayoutProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { header, main, sidebar } = this.props.config;

    return (
      <div className="Layout">
        <h1>Layout Provider</h1>
        <header className="Layout-Header">{header}</header>
        <section className="Layout-Main">{main}</section>
        <aside className="Layout-Sidebar">{sidebar}</aside>
      </div>
    );
  }
}

export default LayoutProvider;
