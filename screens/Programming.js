import React, { Component } from "react";
import { StyleSheet, View ,ScrollView } from "react-native";
import MaterialCardWithImageAndTitle from "../components/skills/MaterialCardWithImageAndTitle";
import MaterialCardWithImageAndTitle5 from "../components/skills/MaterialCardWithImageAndTitle5";
import MaterialCardWithImageAndTitle6 from "../components/skills/MaterialCardWithImageAndTitle6";
import MaterialCardWithImageAndTitle10 from "../components/skills/MaterialCardWithImageAndTitle10";
import MaterialCardWithImageAndTitle1 from "../components/skills/MaterialCardWithImageAndTitle1";
import MaterialCardWithImageAndTitle2 from "../components/skills/MaterialCardWithImageAndTitle2";
import MaterialCardWithImageAndTitle3 from "../components/skills/MaterialCardWithImageAndTitle3";
import MaterialCardWithImageAndTitle7 from "../components/skills/MaterialCardWithImageAndTitle7";
import MaterialCardWithImageAndTitle8 from "../components/skills/MaterialCardWithImageAndTitle8";
import MaterialCardWithImageAndTitle9 from "../components/skills/MaterialCardWithImageAndTitle9";
import { Dimensions } from "react-native";
export default class Programming extends Component {
  static navigationOptions = {
    title: 'Programming Skills',
  };
  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.materialCardWithImageAndTitleStackStack}>
          <View style={styles.materialCardWithImageAndTitleStack}>
            <MaterialCardWithImageAndTitle
              style={styles.materialCardWithImageAndTitle}
            />
            <MaterialCardWithImageAndTitle5
              style={styles.materialCardWithImageAndTitle5}
            />
            <MaterialCardWithImageAndTitle6
              style={styles.materialCardWithImageAndTitle6}
            />
            <MaterialCardWithImageAndTitle10
              style={styles.materialCardWithImageAndTitle10}
            />
          </View>
          <View style={styles.materialCardWithImageAndTitle1Stack}>
            <MaterialCardWithImageAndTitle1
              style={styles.materialCardWithImageAndTitle1}
            />
            <MaterialCardWithImageAndTitle2
              style={styles.materialCardWithImageAndTitle2}
            />
            <MaterialCardWithImageAndTitle3
              style={styles.materialCardWithImageAndTitle3}
            />
          </View>
          <View style={styles.materialCardWithImageAndTitle7Stack}>
            <MaterialCardWithImageAndTitle7
              style={styles.materialCardWithImageAndTitle7}
            />
            <MaterialCardWithImageAndTitle8
              style={styles.materialCardWithImageAndTitle8}
            />
            <MaterialCardWithImageAndTitle9
              style={styles.materialCardWithImageAndTitle9}
            />
          </View>
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
  materialCardWithImageAndTitle: {
    top: 332,
    left: 1,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle5: {
    top: 166,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle6: {
    top: 0,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle10: {
    top: 498,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitleStack: {
    top: 498,
    left: 0,
    width: width,
    height: 664,
    position: "absolute"
  },
  materialCardWithImageAndTitle1: {
    top: 166,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle2: {
    top: 332,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle3: {
    top: 0,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle1Stack: {
    top: 0,
    left: 0,
    width: width,
    height: 498,
    position: "absolute"
  },
  materialCardWithImageAndTitle7: {
    top: 0,
    left: 1,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle8: {
    top: 166,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle9: {
    top: 332,
    left: 0,
    width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle7Stack: {
    top: 1162,
    left: 0,
    width: width,
    height: 498,
    position: "absolute"
  },
  materialCardWithImageAndTitleStackStack: {
    width: width,
    height: 1660
  }
});
