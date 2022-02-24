import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button, Pressable } from 'react-native';
import PokeDetail from './PokeDetail';

const Poke = ({navigation}) => {
  
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
  
    return (
    <View>
        <Text>Poke</Text>
        <FlatList
            data={poke}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
                <Pressable onPress={()=> navigation.navigate("Detail", {
                    name: item.name,
                    url:item.url
                    })}>
                    <Text>{item.name}</Text>
                    
                </Pressable>
            )}
        />

    </View>
  )
}

const styles = StyleSheet.create({});

export default Poke