import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
export default class MaterialCardWithContentAndActionButtons extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.cardItem1Style}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../assets/images/Screenshot_20191026-003704_Facebook.jpg")}
              style={styles.leftImage}
            />
            <View style={styles.headerContent}>
              <Text style={styles.textStyle}>Mechatronics Engineer</Text>
              <Text style={styles.noteTextStyle}>
                Unmanned Aerial Vehicle, with a payload{"\n"}capability for a
                competition organized by Boeing and A.H.S (American Helicopter
                Society)
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/Untitled.png")}
          style={styles.cardItemImagePlace}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Responsibilities included : {"\n"}1.Programming ARM Microcontroller for
            the UAV{"\n"}2.Battery analysis and calibration of Motors and its
            compatibility.
          </Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>ACTION 2</Text>
          </TouchableOpacity>
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
    height: 126,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
   
  },
  leftImage: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    justifyContent: "center",
    paddingLeft: 16
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
    lineHeight: 16,
    marginRight:16,
  },
  cardItemImagePlace: {
    width:width,
    height:300,
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 300
  },
  body: {
    padding: 16,
    backgroundColor: '#fff',
  },
  bodyText: {
    color: "#000",
    fontSize: 14,
    lineHeight: 20,
    
  },
  actionBody: {
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
    padding: 8
  },
  actionText2: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  }
});
