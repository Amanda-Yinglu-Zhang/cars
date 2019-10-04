import React,{ Component}  from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';



export default class homeScreen extends Component {
  
    render(){

   
    return (
     
      <View style={styles.container}>
         
       <Text style={{fontWeight: 'bold'},{alignItems:'center'},{fontSize:20}}>
  Welcome to our website!
  {'\n'}
  <Text style={{fontWeight: 'bold' },{fontSize:20} }>We can offer you the best price!</Text>
  We can offer you the best price!
  {'\n'}
</Text>

      <Image
      style={{width:530, height: 150 }}
      source={require('./assets/car.png')}
      />
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
      fontSize: 20,
      fontWeight: 'bold',
    },
   
  });