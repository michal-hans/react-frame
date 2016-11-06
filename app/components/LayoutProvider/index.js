/**
*
* LayoutProvider
*
*/

import React from 'react';


class LayoutProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { header, main, sidebar } = this.props.config;
    const selectedLayout = this.props.layout || 'block';
    let layouts = {};

    layouts.block =
      <div>
        <h1>Layout #1</h1>
        <header>{header}</header>
        <section>{main}</section>
        <aside>{sidebar}</aside>
      </div>;

    layouts.inline =
      <div>
        <h1>Layout #2</h1>
        <span>{header}</span>
        <span>{sidebar}</span>
        <span>{main}</span>
      </div>;

    console.log(this.props);

    return (layouts[selectedLayout]);
  }
}

export default LayoutProvider;
