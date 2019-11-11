import React, { Component } from "react";
import { StyleSheet, View ,ScrollView } from "react-native";
import MaterialCardWithImageAndTitle16 from "../components/skills/MaterialCardWithImageAndTitle16";
import MaterialCardWithImageAndTitle17 from "../components/skills/MaterialCardWithImageAndTitle17";
import MaterialCardWithImageAndTitle18 from "../components/skills/MaterialCardWithImageAndTitle18";
import MaterialCardWithImageAndTitle19 from "../components/skills/MaterialCardWithImageAndTitle19";
import MaterialCardWithImageAndTitle20 from "../components/skills/MaterialCardWithImageAndTitle20";
import MaterialCardWithImageAndTitle21 from "../components/skills/MaterialCardWithImageAndTitle21";
import MaterialCardWithImageAndTitle22 from "../components/skills/MaterialCardWithImageAndTitle22";
import { Dimensions } from "react-native";
export default class Untitled extends Component {
  static navigationOptions = {
    title: 'Other Software Skills',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.materialCardWithImageAndTitle16Stack}>
          <MaterialCardWithImageAndTitle16
            style={styles.materialCardWithImageAndTitle16}
          />
          <MaterialCardWithImageAndTitle17
            style={styles.materialCardWithImageAndTitle17}
          />
          <MaterialCardWithImageAndTitle18
            style={styles.materialCardWithImageAndTitle18}
          />
          <MaterialCardWithImageAndTitle19
            style={styles.materialCardWithImageAndTitle19}
          />
        </View>
        <View style={styles.materialCardWithImageAndTitle20Stack}>
          <MaterialCardWithImageAndTitle20
            style={styles.materialCardWithImageAndTitle20}
          />
          <MaterialCardWithImageAndTitle21
            style={styles.materialCardWithImageAndTitle21}
          />
          <MaterialCardWithImageAndTitle22
            style={styles.materialCardWithImageAndTitle22}
          />
        </View>
      </ScrollView>
    );
  }
}
var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithImageAndTitle16: {
    top: 0,
    left: 1,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle17: {
    top: 162,
    left: 1,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle18: {
    top: 328,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle19: {
    top: 494,
    left: 1,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle16Stack: {
    width: width,
    height: 660,
    marginTop: 4
  },
  materialCardWithImageAndTitle20: {
    top: 0,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle21: {
    top: 166,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle22: {
    top: 332,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle20Stack: {
       width: width,
    height: 498,
    marginTop: 1,
    marginLeft: 1
  }
});
