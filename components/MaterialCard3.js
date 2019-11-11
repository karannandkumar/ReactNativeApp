import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Dimensions } from "react-native";


export default class MaterialCard3 extends Component {
  render() {
   
    return (
      <View style={[styles.container, this.props.style]}>
       <TouchableOpacity
        
        style={styles.button}  onPress={() => this.props.navigate('Acipage')}
      >
        <View style={styles.headerStyle}>
          <Image
            source={require("../assets/images/ACI_Logo_01.png")}
            style={styles.leftImage}
          />
          <View style={styles.headerContent}>
            <Text style={styles.textStyle}>Research Assistant</Text>
            <Text style={styles.noteTextStyle}>
              Affective&amp;Cognitive Institute {"\n"}2018-2019
            </Text>
          </View>
        </View>
      </TouchableOpacity>
        <Image
          source={require("../assets/images/20191026_002240.jpg")}
          resizeMode="cover"
          style={styles.cardItemImagePlace}
        />

        <View style={styles.body}>
          <Text style={styles.bodyText}>
           
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
  button: {
    height: 89,
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
    width: 78,
    height: 49,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    justifyContent: "center",
    paddingLeft: 16
  },
  textStyle: {
    width: 166,
    height: 20,
    color: "#000",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 20
  },
  noteTextStyle: {
    width: 204,
    height: 16,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: width,
    height: 500,
    backgroundColor: "#ccc",
    minHeight: 210,
    borderColor: "#000000",
    borderWidth: 0
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
  }
});
