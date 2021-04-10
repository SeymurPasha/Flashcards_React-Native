
import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Heading =  () => {

return (
<View style = {styles.header}>
<Text style = {styles.text}>
 İstədiyiniz səviyəni seçin
</Text>
</View>
 );
};

const styles = StyleSheet.create({
  header : {
  alignItems:'center'
  },
  text: {
    alignContent:'center',
    color:'white',
    fontSize:25
  }
});



export default Heading;
