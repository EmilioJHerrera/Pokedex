import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button, Pressable } from 'react-native';
import PokeDetail from './PokeDetail';

import { useFonts } from 'expo-font';

const Poke = ({navigation}) => {
    const [loaded] = useFonts({
        bitIn: require('../assets/fonts/8-bitArcadeIn.ttf'),
        bitOut: require('../assets/fonts/8-bitArcadeOut.ttf'),
    });
    


    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(true);
    

    
    useEffect(()=>{
        const consultaApi = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
                const resultado = await response.json();
                setPoke(resultado.results);
            } catch (error) {
                console.log('error',error);
            }
        }
        consultaApi();
    },[])

    
if(!loaded){
    return null;
}
  
    return (
        <View style={styles.container}>
        
        
        <View style={styles.containerScreen}>
        <FlatList
            style={styles.screen}
            data={poke}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
                <Pressable
                style={styles.itemList} 
                onPress={()=> navigation.navigate("Detail", {
                    name: item.name,
                    url:item.url
                    })}>
                    <Text style={{fontFamily:'bitIn', fontSize: 30, marginLeft: '2%'}}>{item.name}</Text>
                    
                </Pressable>
            )}
        />
        </View>

        <View>
 {/* puede ser unos botones de adorno o funcionales */}
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F61952',
    },
    containerScreen:{
        padding:10,
        backgroundColor: '#C9C4C0',
        margin:'10%',
        borderRadius:10,
        
    },
    screen:{
        backgroundColor: '#15F301',
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
    itemList:{
        paddingVertical: '5%',
        borderBottomWidth: 1,
        
    },
    
});

export default Poke