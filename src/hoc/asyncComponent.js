import React, { Component } from 'react';

export default async function asyncComponent(importComponent) {
  return class extends Component {
    state = { component: null }

    componentDidMount() {
      const cmp = await importComponent();
      this.setState({ component: cmp.default });
    }

    render() {
      const Comp = this.state.component;
      return <Comp {...this.props} /> || null;
    }
  }
}
