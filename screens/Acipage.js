import React, {Component} from 'react';
import {WebView} from 'react-native';

export default function MyWebScreen() {
  return (
   
      <WebView
        source={{uri: 'https://affective-lab.org/'}}
        style={{marginTop: 20}}
      />
    );
  }
  MyWebScreen.navigationOptions = {
    title: 'Affective & Conginitive Institute',
    
  };