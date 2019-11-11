import React, { Component } from "react";
import { StyleSheet, View, Text,  ScrollView, } from "react-native";
import Skills from '../screens/Skills';
import Programming from '../screens/Programming';
import Design from '../screens/Design';
import Software from '../screens/Software';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const Rootss = createStackNavigator ({
  Skills:Skills,
  Programming:Programming,
  Design:Design,
  Software:Software  ,


})
class SkillsScreens extends Component {
  render() {
    return (
<Rootss />
    );
  }
}
const SkillsScreen = createAppContainer(Rootss);
export default SkillsScreen;

SkillsScreen.navigationOptions = {
  header: null,
};

