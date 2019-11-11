import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions ,
  Animated,
  ImageBackground
} from 'react-native';
import AnimationTypingText from '../components/AnimationTypingText';
import FadeInView from '../components/FadeInView';

import { Video } from 'expo-av';
 

 

export default function HomeScreen() {
  return (
    <ImageBackground source={require("../assets/images/bg2.jpg")} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
      <View style={styles.sideContainerb}>
      <AnimationTypingText
          text="Karan Nandkumar" textSize={20} color = '#000' typingAnimationDuration= {300} blinkingCursorAnimationDuration= {10000}
        />
       </View>
     
       <View style={styles.sideContainer}>
 
       <View style={styles.sideContainera}>
       <ImageBackground source={require("../assets/images/my.jpg")} style={{width:(width*0.5)-60, height: 200,marginTop:10,borderRadius:200,}}  imageStyle={{ height: 200, borderRadius: 200 }}>
       <Video
  source={ require('../assets/images/Karan4.mp4')}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
 
  style={{   width: (width*0.5)-60, height: 190,marginTop:10,borderRadius:100,paddingBottom:5}}
/>
</ImageBackground>
</View>
</View>

        <View style={styles.sideContainerc}>
        <FadeInView>
        <Video
  source={ require('../assets/images/karan.mp4')}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: width-8, marginLeft:5, height: 265 , borderRadius:110,marginRight:5}}
/>
</FadeInView>
</View>

          
      
         



     


 
{/*
<View style={styles.sideContainer}>
<View style={styles.Date}>
<Text style={styles.india}>Date of Birth </Text>
<Text style ={styles.bigtext}>3rd July 1993 </Text>
</View>
<View style={styles.Nation}>
<Text style={styles.india}>Languages known </Text>
<Text style ={styles.bigtext}>English, German, Hindi </Text>
<Image source={ require('../assets/images/flag.gif')} style={styles.sideImage} />
</View>
<View style={styles.Phone}>
<Text style={styles.india}>Phone Number</Text>
<Text style ={styles.bigtext}>+49 17663214796 </Text>
</View>

</View>
*/}


      </ScrollView>
     
    </View>
    </ImageBackground>
 
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',

 
};


var width = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
  fontFamily:'roboto-regular',
    flex: 1,

  },

 
  bg:{
    
    flex: 1,
    resizeMode: 'cover',
  },

 Video:{
    marginRight:5,
    marginTop:30
      },

  block:{
    width:5,
    height:10
  },
  sideImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginTop: 3,
    borderRadius:50,
    marginLeft:10,
    
  },

gif:{
  width: (width*0.5)-30, height: 220,marginTop:10,borderRadius:220,
},


  getStartedContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 50,
    marginBottom: 10,
  },
  sideContainer: {
    justifyContent:'center',
    alignItems: 'center',
  },
  sideContainera: {
    width: (width*0.5), height: 210, borderRadius:110,
    justifyContent:'center',
    alignItems: 'center',

    marginBottom:15 ,
backgroundColor:'#000',

    
    
  },

  sideContainerb: {

    alignItems: 'center',
    justifyContent:'center',
   width: width, height: 50, borderRadius:40,
 marginLeft:10,paddingRight:10
    
  },

  sideContainerc: {
    alignItems: 'center',
    flex: 1, flexDirection: 'column',  
    width: width-8, marginLeft:5, height: 285 , borderRadius:70,
    backgroundColor: '#000',  
  },
  india:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: '#788cff',
    fontWeight: 'bold',
    fontFamily:'roboto-regular',
    
  },
  bigtext:{
    fontSize :25 ,
    fontFamily:'roboto-regular',
    color: '#000'
  },
  midtext:{
    fontSize :15 ,
    color: '#000',
    fontFamily:'roboto-regular',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
 
});
