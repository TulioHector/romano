"use client"
import dynamic from 'next/dynamic';
import { Component } from 'react';

const Home = dynamic(() => import('./post/page'));

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMounted: false,
    };
  }

  async componentDidMount() {
    this.setState({ hasMounted: true, });
  }

  render() {
    return this.state.hasMounted && (
      <>
        <Home />
      </>
    )
  }
}

export default HomePage;