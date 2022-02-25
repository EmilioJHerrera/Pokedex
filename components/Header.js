import React from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>

        {/* <Text>HEader</Text> */}
        <Text style={styles.blue}> </Text>

        <View style={styles.container3}>

        <Text style={[styles.rojo, styles.redondo]}> </Text>
        <Text style={[styles.amarillo, styles.redondo]}> </Text>
        <Text style={[styles.verde, styles.redondo]}> </Text>
        </View>

        

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#F61952',
        flexDirection: 'row',
        paddingVertical: '5%',
    },
    container3:{
        flexDirection: 'row',
        //alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    redondo:{
        marginHorizontal: '5%',
        height:30,
        width:30,
        borderRadius: 15,
        borderWidth:2,
    },
    blue:{
        backgroundColor:'#02F0F2',
        marginHorizontal: '5%',
        height:50,
        width:50,
        borderRadius: 25,
        borderWidth:10,
    },
    rojo:{
        backgroundColor:'red',
        
    },
    amarillo:{
        backgroundColor:'yellow',

    },
    verde:{
        backgroundColor:'green',
    },
    


});
export default Header