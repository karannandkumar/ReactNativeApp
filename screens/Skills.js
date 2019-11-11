import React, { Component } from "react";
import { StyleSheet,ScrollView ,View,Button,ImageBackground } from "react-native";
import MaterialCard5 from "../components/skills/MaterialCard5";
import MaterialCard51 from "../components/skills/MaterialCard51";
import MaterialCard52 from "../components/skills/MaterialCard52";
import { Dimensions } from "react-native";
import MaterialButtonPrimary1 from "../components/skills/MaterialButtonPrimary1";

export default class Skills extends Component {
  static navigationOptions = {
    title: 'Skills',
   
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
     
        <View style={styles.materialCard5Stack}>
      
          <MaterialCard5 style={styles.materialCard5}  />
          <View style={styles.view1}>
          <Button style={styles.Button1} 
        title="See all..." 
        onPress={() => navigate('Programming')}
      />
      </View>
         
          <MaterialCard51 style={styles.materialCard51} />
          <View style={styles.view2}>
          <Button style={styles.Button2} 
        title="See all..." 
        onPress={() => navigate('Design')}
      />
      </View>

          
          <MaterialCard52 style={styles.materialCard52} />
          <View style={styles.view3}>
          <Button style={styles.Button3} 
        title="See all..." 
        onPress={() => navigate('Software')}
      />
      </View>

 
        </View>
       
     
     
      </ScrollView>
    );
  }
}
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var buttonwidth=width-4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  materialCard5: {
    top: 0,
    width: width,
    height: 350,
    justifyContent: "center",
    position: "relative",
 
  },
 
  materialCard51: {
     top:0,
    width: width,
    height: 350,
    justifyContent: "center",
    position: "relative",
 
   
  },
  materialCard52: {

    top: 0,
    width: width,
    height: 350,
    justifyContent: "center",
    position: "relative",
 
  },
  materialCard5Stack: {
    width: width,
    height: 1052,
    
   
  },
Button1:{
  backgroundColor: '#4e2b87',
},
Button2:{
  backgroundColor: '#4e2b87',
},
Button3:{
  backgroundColor: '#4e2b87',
},
  view1:{
    top: 290,
   
    justifyContent: "center",
    left: 5,
    right:5,
    position: "absolute",
    
   },
  view2:{
     top: 640,
     right:5,
     justifyContent: "center",
     position: "absolute",
     left: 5,
    
   },
  view3:{
     top: 995,
     right:5,
     left: 5,
     justifyContent: "center",
     position: "absolute",
    
   }

});
