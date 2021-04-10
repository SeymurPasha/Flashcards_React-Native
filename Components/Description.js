
import React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Description =  () => {

return (
  <View>
   <Text style = {styles.description}>
    Bu program təminatı ingilis dilindəki sözləri öyrənmək üçün nəzərdə tutulub.Program 3000-nə yaxın ən sıx istifadə olunan sözləri əhatə edir. Söz biliyinizi yoxlamag üçün və öyrəndiyiniz sözlərin siyahısını yadda saxlamag üçün, test hissəsində cavabları yazın və sonra təsdiqləyin.Qeyd etmək lazımdır ki, dil öyrənmək prosesi təkcə söz oyrənməkdən ibarət deyil və bu program sizə ingilis dilində səlis danışmaq təminatı vermir.
    </Text>
  </View>
 );
};

const styles = StyleSheet.create({
    description: {
        marginTop:20,
        textAlign:'justify',
        padding:15,
        color:'white',
        fontSize:wp('5%')
        }
});



export default Description;
