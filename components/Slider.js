import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';

export default class Slider extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: '',
          caption: '',
          url: require('../assets/images/1903-Karan_Study-01.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('../assets/images/1903-Karan_Study-02.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('../assets/images/1903-Karan_Study-04.jpg'),
        },
        {
          title: '',
          caption: '',
          url: require('../assets/images/1901-EasterEggHunt_study-blog-01.jpg'),
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
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
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}