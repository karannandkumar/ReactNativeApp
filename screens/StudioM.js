import React, {Component} from 'react';
import {WebView} from 'react-native';

export default function MyWebScreen() {
  return (
   
      <WebView
        source={{uri: 'https://studio-m.mi.hs-offenburg.de/blog/'}}
        style={{marginTop: 20}}
      />
    );
  }
  MyWebScreen.navigationOptions = {
    title: 'StudioM',
    
  };