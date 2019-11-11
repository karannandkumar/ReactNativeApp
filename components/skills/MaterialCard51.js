import React, { Component } from "react";
import { StyleSheet, View, Image, Text,ImageBackground } from "react-native";
import MaterialButtonPrimary1 from "./MaterialButtonPrimary1";
import { Dimensions } from "react-native";

export default class MaterialCard51 extends Component {
  
  render() {
    return (
      
      <View style={[styles.container, this.props.style]}>
        <ImageBackground source={require("../../assets/images/bg2.jpg")} style={{width: '100%', height: '100%'}}>
        <Image
          source={require("../../assets/images/Poster1Final.png")}
          resizeMode="stretch"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Design &amp; 3D Modeling Skills</Text>
          <Text style={styles.subtitleStyle} />
        </View>
        <View style={styles.actionBody}>
   
</View>
</ImageBackground>
      </View>
      
    );
  }
}

var width = Dimensions.get('window').width;
var buttonwidth=width-4;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    width: width,
    height:210,
    backgroundColor: "#ccc",
    minHeight: 200
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  actionBody: {
    height: 46,
    flexDirection: "row",
    padding: 8
  },
  actionButton3: {
    height: 36,
    padding: 8,
    marginBottom: 16
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  },
  materialButtonPrimary1: {
    top: 304,
    left: 5,
    width: width,
    height: 36,
    position: "absolute"
  }
});
