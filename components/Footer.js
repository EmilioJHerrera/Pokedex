import React from 'react'
import { StyleSheet, Text, View, FlatList,Button, Pressable } from 'react-native';


const Footer = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.adornos}>HECHO</Text>
        <Text style={styles.adornos}>EMILIO</Text>
        <Text style={styles.adornos}>HERRERA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
adornos:{
    backgroundColor:'gray',
    color:'gray',
    marginHorizontal: '5%',
    borderRadius:10,
    borderColor:'black',
    borderWidth:2,
},
container: {
    paddingVertical: '5%',
    backgroundColor: '#F61952',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
},
});
export default Footer