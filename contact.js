import React,{ Component}  from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class contactScreen extends Component {
    render(){

   
    return (
     <View style={styles.container}>
       <Text style={{fontWeight: 'bold'},{alignItems:'center'},{fontSize:20}}>
 Our email: 12345@mail.com
  {'\n'}
  <Text style={{fontWeight: 'bold' },{fontSize:20} }>Our addrerss: 123 humber college blvd</Text>
  {'\n'}
  <Text style={{fontWeight: 'bold' },{fontSize:20} }>Our phone number: (123)456789</Text>
</Text>
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
    }
  });