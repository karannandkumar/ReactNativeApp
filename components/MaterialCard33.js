import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
export default class MaterialCard33 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.cardItem1Style}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../assets/images/unnamed.jpg")}
              style={styles.leftImage}
            />
            <View style={styles.headerContent}>
              <Text style={styles.textStyle}>Backend Developer</Text>
              <Text style={styles.noteTextStyle}>
                Sharewise {"\n"}Sep 2018 - Feb 2019
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/8.png")}
          resizeMode="cover"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            A group project made as a part of M.Sc Communication and Media
            Engineering at Offenburg University of Applied Sciences, Germany.
            {"\n"}The application makes it easy for users to split money by
            simply making a group, adding items or settling items.
          </Text>
        </View>
       
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
  cardItem1Style: {
    height: 95,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    justifyContent: "center",
    paddingLeft: 16,
    paddingTop: 20,
   
  },
  textStyle: {
    color: "#000",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 20
  },
  noteTextStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  cardItemImagePlace: {
    width:width,
    height:250,
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  body: {
    padding: 16,
    backgroundColor: '#fff',
  },
  bodyText: {
    color: "#000",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    
  },
  actionBody: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: '#cfcfcf',
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    marginLeft: 8,
    padding: 8
  },
  actionText2: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  text2: {
    color: "#424242",
    fontSize: 14,
    lineHeight: 20
  }
});
