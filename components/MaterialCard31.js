import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
export default class MaterialCard31 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
         <TouchableOpacity
        
        style={styles.button}  onPress={() => this.props.navigate('StudioM')}
      >
        <View style={styles.cardItem1Style}>
          <View style={styles.headerStyle}>
            <Image
              source={require("../assets/images/Studio-MLogo.png")}
              
              style={styles.leftImage}
            />
            <View style={styles.headerContent}>
              <Text style={styles.textStyle}>Technical Intern</Text>
              <Text style={styles.noteTextStyle}>
                Studio M{"\n"}April - July 2018
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/GeschichteBild.jpg")}
          resizeMode="cover"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Designing the complete backend of the Studio M website{"\n"}•
            Planning the initial structure{"\n"}• Creating complete architecture
            of Studio M{"\n"}• Easy to use &#39;Delete file system&#39; {"\n"}•
            Complete working and installation of Linux on windows.{"\n"}•
            Installation and working of ISPConfig3.
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
    paddingTop:20,
    
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
    height: 31,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  body: {
    padding: 16,
    backgroundColor: '#fff',
  },
  bodyText: {
    color: "#424242",
    fontSize: 14,
    lineHeight: 20,
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
  }
});
