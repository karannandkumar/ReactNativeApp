import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class MaterialCard32 extends Component {
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
              <Text style={styles.noteTextStyle}>Sharewise</Text>
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
            Sharewise is a group project made as a part of M.Sc Communication
            and Media Engineering at Offenburg University of Applied Sciences,
            Germany. Sharewise being the name of our Android application
            developed explains the purpose of this project: “Share your things
            Wisely” and now in a more secure way.
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
        <Text style={styles.text2}>Sharewise</Text>
      </View>
    );
  }
}

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
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#9fdbf5',
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
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 258,
    height: 269,
    flex: 1,
    backgroundColor: '#9fdbf5',
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    color: "#424242",
    fontSize: 14,
    lineHeight: 20
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
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
    top: 36,
    left: 72,
    color: "#121212",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});
