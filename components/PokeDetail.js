import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import { useFonts } from 'expo-font';

const PokeDetail = ({route}) => {
  
  const {name,url} = route.params;

  const [loaded] = useFonts({
    bitIn: require('../assets/fonts/8-bitArcadeIn.ttf'),
    bitOut: require('../assets/fonts/8-bitArcadeOut.ttf'),
});



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
   
    if(!loaded){
      return null;
  }
  return (
    
    <View style={styles.container}>      
          {!loading &&  
              <>    
              <Text style={{fontFamily:'bitIn', fontSize: 30, textAlign: 'center'}}>{name}</Text>
           
           <View style={styles.containerScreen}>

            <View style={styles.screen}>
            {pokeDetail.sprites&& <Image source={{uri: pokeDetail.sprites.front_default }}
            style={{width: 300, height: 300}} />}
           </View>
           </View>

            <View>
              <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>Type</Text>
            <View style={styles.types}>
              {pokeDetail.types&& pokeDetail.types.map((item,index)=>(
                <Text style={styles.typeList} key={index}>{item.type.name}</Text>
                ))}
            </View>
            </View>

                
              </>
          }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F61952',
},
containerScreen:{
  flex:1,  
  padding:10,
    backgroundColor: '#C9C4C0',
    margin:'10%',
    borderRadius:10,
},
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  backgroundColor: '#15F301',
    marginHorizontal: '5%',
    marginVertical: '5%',
},
types:{
  flexDirection:'row',
  
  justifyContent:'center',
},
typeList:{
  marginHorizontal: '5%',
  backgroundColor:'black',
  color:'white',
  paddingHorizontal: '5%',
  paddingVertical: '2%',



},
}) 

export default PokeDetail