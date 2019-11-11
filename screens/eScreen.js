import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';


export default function ExperienceScreen() {
    return (
    <ScrollView style={styles.container}>
   
   
<View style={styles.sideContainer}>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>HTML</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={5000}
  color={'green'}
  fullColor={'blue'}
  value={'80%'}
/>

</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>CSS</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={8000}
  color={'red'}
  fullColor={'orange'}
  value={'80%'}
/>
</View>
<View style={styles.boxwheel}>
<View>
  <Text style={styles.india}>Javascript</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={7000}
  color={'pink'}
  fullColor={'green'}
  value={'90%'}
/>
</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>PHP</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={88}
  animateFromValue={0}
  duration={8000}
  color={'orange'}
  fullColor={'red'}
  value={'80%'}
/>
</View>
</View>



<View style={styles.sideContainer}>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>MySQL</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={5000}
  color={'#1d4fb3'}
  fullColor={'#fa441b'}
  value={'80%'}
/>

</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Photoshop</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={6000}
  color={'#6e57f7'}
  fullColor={'#01457d'}
  value={'80%'}
/>
</View>
<View style={styles.boxwheel}>
<View>
  <Text style={styles.india}>Illustrator</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={7000}
  color={'#4f3002'}
  fullColor={'#d98302'}
  value={'90%'}
/>
</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Git</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={80}
  animateFromValue={0}
  duration={4000}
  color={'#5a5c5e'}
  fullColor={'#d0d6db'}
  value={'80%'}
/>
</View>
</View>



<View style={styles.sideContainer1}>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Reactjs</Text> 
</View>
<AnimatedProgressWheel 
size={90} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={5000}
  color={'white'}
  fullColor={'#70bfff'}
  value={'80%'}
/>

</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>ReactNative</Text> 
</View>
<AnimatedProgressWheel 
size={90} 
width={10} 
  progress={95}
  animateFromValue={0}
  duration={6000}
  color={'white'}
  fullColor={'#2671ad'}
  value={'80%'}
/>
</View>

</View>


<View style={styles.sideContainer}>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Sketchup</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={5000}
  color={'white'}
  fullColor={'red'}
  value={'80%'}
/>

</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Restful Api</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={75}
  animateFromValue={0}
  duration={8000}
  color={'red'}
  fullColor={'purple'}
  value={'80%'}
/>
</View>
<View style={styles.boxwheel}>
<View>
  <Text style={styles.india}>Scrum</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={7000}
  color={'pink'}
  fullColor={'green'}
  value={'90%'}
/>
</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Java</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={88}
  animateFromValue={0}
  duration={8000}
  color={'orange'}
  fullColor={'green'}
  value={'80%'}
/>
</View>
</View>



<View style={styles.sideContainer}>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Embedded C</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={99}
  animateFromValue={0}
  duration={5000}
  color={'#1d4fb3'}
  fullColor={'#fa441b'}
  value={'80%'}
/>

</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}></Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={6000}
  color={'#6e57f7'}
  fullColor={'#01457d'}
  value={'80%'}
/>
</View>
<View style={styles.boxwheel}>
<View>
  <Text style={styles.india}>Illustrators</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={90}
  animateFromValue={0}
  duration={7000}
  color={'#4f3002'}
  fullColor={'#d98302'}
  value={'90%'}
/>
</View>
<View style={styles.boxwheel}>
<View >
  <Text style={styles.india}>Git</Text> 
</View>
<AnimatedProgressWheel 
size={50} 
width={10} 
  progress={80}
  animateFromValue={0}
  duration={4000}
  color={'#5a5c5e'}
  fullColor={'#d0d6db'}
  value={'80%'}
/>
</View>
</View>







  </ScrollView>
    );
}
ExperienceScreen.navigationOptions = {
    title: 'Experience',
    
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      color:'#fff'
    },
    sideContainer: {
        textAlign:'center',
        alignItems: 'center',
        marginTop: 15,
        flex: 1, flexDirection: 'row'
      },
      sideContainer1: {
        textAlign:'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft:45,
        marginBottom:20,
        flex: 1, flexDirection: 'row'
      },
      box:{
        alignItems: 'center',
          marginTop:30,
          marginLeft:30,
          marginBottom:2,
      },
      boxwheel:{
        alignItems: 'center',
        textAlign:'center',
        marginLeft:30
    },
    india:{
     
        color: '#fff'
      },
});