import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


const PokeDetail = ({route}) => {
  
  const {name,url} = route.params;

  const [pokeDetail, setPokeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const consutaDetalleApi =async ()=>{
      try{
        
        const response = await fetch(url);
        const resultado = await response.json();
       
        setPokeDetail(resultado);
        
      }catch(error){
        console.log('errorPokeDetail:',error);
      }
    }
    consutaDetalleApi();
  },[])

  useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },500)
    },[pokeDetail])

  return (
    
    <View>      
          {!loading &&  
              <>    
              <Text>{name}</Text>
           
            {pokeDetail.sprites&& <Image source={{uri: pokeDetail.sprites.front_default }}
            style={{width: 300, height: 300}} />}

            <View>
              <Text>Tipos: </Text>
              {pokeDetail.types&& pokeDetail.types.map((item,index)=>(
                <Text key={index}>{item.type.name}</Text>
                ))}
            </View>
                
              </>
          }
    </View>
  )
}

const styles = StyleSheet.create({}) 

export default PokeDetail