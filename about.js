import React,{ Component}  from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default class aboutScreen extends Component {
    render(){

   
    return (
   
      <View style={styles.container}>
       
  <ScrollView Style={styles.scrollView}>
 
  <Text style={{fontWeight: 'bold' },{fontSize:20} }>BWM:$69000</Text>
  <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car1.png')}
      />
      <Text style={{fontWeight: 'bold' },{fontSize:20} }>Audi SUV:$67000</Text>
      <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car2.png')}
      />
      <Text style={{fontWeight: 'bold' },{fontSize:20} }>Benzi:$76000</Text>
       <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car3.png')}
      />
      <Text style={{fontWeight: 'bold' },{fontSize:20} }>BWM SUV:$69000</Text>
       <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car4.png')}
      />
       <Text style={{fontWeight: 'bold' },{fontSize:20} }>Sedan:$39000</Text>
       <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car5.png')}
      />
       <Text style={{fontWeight: 'bold' },{fontSize:20} }>Hyundai:$49000</Text>
       <Image
      style={{width:530, height: 190 }}
      source={require('./assets/car6.png')}
      />
       </ScrollView>
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      marginHorizontal: 5,
    },
  });