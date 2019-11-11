import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView,Button,TouchableOpacity,Image ,Dimensions} from "react-native";
import MaterialCard3 from "../components/MaterialCard3";
import MaterialCard31 from "../components/MaterialCard31";
import MaterialCard33 from "../components/MaterialCard33";
import MaterialCardWithContentAndActionButtons from "../components/MaterialCardWithContentAndActionButtons";
export default class Experience extends Component {
    static navigationOptions = {
        title: 'Experience',
       

      };
  render() {
    const {navigate} = this.props.navigation;
    return (
       
      <ScrollView style={styles.container}>
     
        <View style={styles.textStack}>
          <Text style={styles.text} />
         
         
          <MaterialCard3 style={styles.materialCard3} navigate={navigate}  />
        
        </View>
        <Button 
        title="My Projects..." 
        onPress={() => navigate('Aci')}
      />
        <MaterialCard31 style={styles.materialCard31} navigate={navigate}/>
        <MaterialCard33 style={styles.materialCard33} />
        <MaterialCardWithContentAndActionButtons
          style={styles.materialCardWithContentAndActionButtons}
        />
       
      </ScrollView>
    );
  }
}

var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    top: 36,
    left: 98,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialCard3: {
    top: 0,
    width: width,
    height: 556,
    position: "absolute",
    left: 0
  },
  textStack: {
    width: width,
    height: 546,
   
  },
  materialCard31: {
 width: width,
    height: 510,
    marginTop:2,
   
   
  },
  materialCard33: {
 width: width,
    height: 480,

    
   
   
  },
  materialCardWithContentAndActionButtons: {
 width: width,
    height: 540,
   
  },
  button: {
    width:width-10,
    height: 89,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#050',
  },
});
