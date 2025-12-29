
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import AboutScreen from './screen/AboutScreen';
import { Text } from 'react-native';
import ScrollViewExampleScreen from './screen/ScrollViewExampleScreen';

export default function App() {
   const stack =createNativeStackNavigator()
    
  return ( 
  <NavigationContainer>

   <stack.Navigator initialRouteName='Home'>
   
   <stack.Screen name='Home' component={HomeScreen} options={{
     headerRight:()=>(
    <Text> Back </Text>
    ),title:"DashBoard"
   }}/>
   <stack.Screen name='Details' component={DetailsScreen}/>
   <stack.Screen name='About' component={AboutScreen}/>
   <stack.Screen name='ScrollView' component={ScrollViewExampleScreen}/>

   </stack.Navigator>

  </NavigationContainer>
    
  )
}

  

