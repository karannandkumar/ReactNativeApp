import React, { Component } from "react";
import { StyleSheet, View,ScrollView  } from "react-native";
import MaterialCardWithImageAndTitle11 from "../components/skills/MaterialCardWithImageAndTitle11";
import MaterialCardWithImageAndTitle12 from "../components/skills/MaterialCardWithImageAndTitle12";
import MaterialCardWithImageAndTitle13 from "../components/skills/MaterialCardWithImageAndTitle13";
import MaterialCardWithImageAndTitle14 from "../components/skills/MaterialCardWithImageAndTitle14";
import { Dimensions } from "react-native";
export default class Design extends Component {
  static navigationOptions = {
    title: 'Design Skills',
  };
  render() {
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.materialCardWithImageAndTitle11Stack}>
          <MaterialCardWithImageAndTitle11
            style={styles.materialCardWithImageAndTitle11}
          />
          <MaterialCardWithImageAndTitle12
            style={styles.materialCardWithImageAndTitle12}
          />
          <MaterialCardWithImageAndTitle13
            style={styles.materialCardWithImageAndTitle13}
          />
          <MaterialCardWithImageAndTitle14
            style={styles.materialCardWithImageAndTitle14}
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
  materialCardWithImageAndTitle11: {
    top: 0,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle12: {
    top: 166,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle13: {
    top: 332,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle14: {
    top: 498,
    left: 0,
       width: width,
    height: 166,
    position: "absolute"
  },
  materialCardWithImageAndTitle11Stack: {
       width: width,
    height: 664,
    marginTop: 4,
    marginLeft: 4
  }
});
