import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Poke from '../components/Poke';
import PokeDetail from '../components/PokeDetail';


const Stack = createNativeStackNavigator();


const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Poke} />
            <Stack.Screen name="Detail" component={PokeDetail}>
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    )


export default Navigator;