import React, { Component } from "react";
import { StyleSheet, View, Text,  ScrollView, } from "react-native";
import Experience from '../screens/Experience';
import Aci from '../screens/Aci';
import Acipage from '../screens/Acipage';
import StudioM from '../screens/StudioM';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const Rootss = createStackNavigator ({
  Experience:Experience,
  Aci:Aci,
  Acipage:Acipage,
  StudioM:StudioM
})
class ExperienceScreens extends Component {
  render() {
    return (
<Rootss />
    );
  }
}
const ExperienceScreen = createAppContainer(Rootss);
export default ExperienceScreen;

ExperienceScreen.navigationOptions = {
  header: null,
};

