import React, {Component} from 'react';
import {WebView} from 'react-native';

export default function MyWebScreen() {
  return (
   
      <WebView
        source={{uri: 'https://www.linkedin.com/in/karan-nandkumar-05bb88104/'}}
        style={{marginTop: 20}}
      />
    );
  }
  MyWebScreen.navigationOptions = {
    title: 'Linkedin',
    
  };