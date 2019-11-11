import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView,Image } from "react-native";
import MaterialCard51 from "../components/MaterialCard51";
import MaterialCard52 from "../components/MaterialCard52";
import { Dimensions } from "react-native";



export default class Aci extends Component {
  static navigationOptions = {
    title: 'My Projects with ACI',
    headerStyle: {

  
    },
  };
  render() {
    return (
      <ScrollView style={styles.container}>   
        <MaterialCard51 style={styles.materialCard51} />
     
        <Text style={styles.text}>
          A comparison study was done to observe the strengths and weakness for
          navigating a hearing visually impaired individual with a head-mounted
          device having three actuators and a vest having six actuators.{"\n"}
          Twenty participants took part in the study and were asked to navigate
          through two paths having four laps with both the head-mounted device
          and the vest. Deaf blindness was simulated by covering their eyes and
          ears. Upon completion, each participant was asked to fill out a
          questionnaire. The total time, mean, Standard deviation and t-test
          were calculated.{"\n"}
          </Text>

          <Image
          source={require("../assets/images/embeded1.png")}
          style={styles.cardItemImagePlace}
        />
           <Image
          source={require("../assets/images/embeded.png")}
          style={styles.cardItemImagePlace}
        />
       
         <Text style={styles.text}>

           {"\n"}Many studies previously done by the Affective
          &amp; Cognitive Institute for the SUITCYES project has been related to
          a vest. The vest was inspired by Wilko Heuten, Niels Henze, Susanne
          Boll, Martin Pielot paper on Tactile Wayfinder: A Non-Visual
          Support System for Wayfinding. The vest was created to integrate
          aspects of both HCI and gamification into the assistive technology.
          A comparison study was done to
          observe the strengths and weakness for navigating a hearing visually
          impaired individual with a head-mounted device having three actuators
          and a vest having six actuators.
        </Text>
       
        <MaterialCard52 style={styles.materialCard52} />
        <Text style={styles.text2}>
          Worked on a Web-Application (Gratitude) using PHP, MySQL, javascript,
          HTML, CSS, jquery.{"\n"}The apps aims to create social opportunities
          and improve users&#39; social skills through a quest-based gamified
          system in order to motivate them to start conversations and develop
          empathy. {"\n"}
        </Text>
        <Image
          source={require("../assets/images/embeded4.png")}
          style={styles.cardItemImagePlace}
        />
        <Text style={styles.text2}>
        Other expected features are the addition of experience points, levels and progression
bars systems to help users keep track of their performance within the app use. Levels are
related to the earned experience points and the time spent practicing within the system,
therefore, the more a person accomplishes the quests, the higher will be his level.
Progression bars are common elements in video games, mainly in the RPG genres in which
characters have to gain experience (used to measure how much experience a character
currently has) through the repetition of some practices in order to improve skills. {"\n"}
</Text>
<Image
          source={require("../assets/images/embeded5.png")}
          style={styles.cardItemImagePlace}
        />
        <Text style={styles.text2}>
 In the case
of Gratitude users will start at the level 1 and their progression bar increases as they interact
with other users and complete tasks at the Task Center  to increase their social level progress as a self-monitoring form to promote
psychological growth and enable progress evaluation.{"\n"}
</Text>

      </ScrollView>
    );
  }
}
var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  materialCard51: {
    width: width,
    height: 330,
    marginTop: 4,
    backgroundColor: '#cfcfcf',
  },
 
  text: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "justify",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    
  },
  cardItemImagePlace: {
    width:width,
    height:280,
    backgroundColor: "#ccc",
    minHeight: 280
  },
  materialCard52: {
    width: width,
    height: 350,
    marginTop: 38,
    marginLeft: 1,
    backgroundColor: '#cfcfcf',
  },
  text2: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 16,
    marginLeft: 16,
   
  }
});
