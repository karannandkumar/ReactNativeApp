import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet ,Dimensions} from 'react-native';
import posed from 'react-native-pose';


export default class Videozoom extends Component
{
    render() {
    const Box = posed.div({
        left: { x: -100 },
        right: { x: 100 }
      })
    
      const Component = ({ position }) =>
        <Box pose={position} />
    }
  
}

