import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class MaterialCardWithImageAndTitle1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>Research Assistant</Text>
            <Text style={styles.subtitleStyle}>
              Affective &amp; Cognitive Institute
            </Text>
          </View>
          <Image
            source={require("../assets/images/ACI_Logo_01.png")}
            style={styles.cardItemImagePlace}
          />
        </View>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    width: 219,
    height: 36,
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    width: 188,
    height: 16,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 113,
    height: 61,
    backgroundColor: "#ccc",
    margin: 16
  }
});
