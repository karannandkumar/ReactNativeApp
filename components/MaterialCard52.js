import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Dimensions } from "react-native";
export default class MaterialCard52 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
       
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Gratitude App</Text>
          <Text style={styles.subtitleStyle}>Full Stack Developer</Text>
        </View>
        <Image
          source={require("../assets/images/gratitude.png")}
          style={styles.cardItemImagePlace}
        />
      </View>
    );
  }
}
var width = Dimensions.get('window').width;
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
    marginTop:10,
    width:width,
    height:250,
    backgroundColor: "#ccc",
    minHeight: 250
  },
  bodyContent: {
    height: 82,
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
  }
});
