import React, { Component } from 'react';

import Slideshow from 'react-native-image-slider-show';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {url: require('../assets/images/ess1.jpg')},
        {url: require('../assets/images/ess2.jpg')},
        {url: require('../assets/images/ess3.jpg')},
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
    <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        height = {300}
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}
