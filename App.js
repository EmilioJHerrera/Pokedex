
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Poke from './components/Poke';
import Navigator from './navigation/Natigator';



export default function App() {
 

  
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      
      <Header/>
      <Navigator/>   
      <Footer/>
      {/* <Poke/>    */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
