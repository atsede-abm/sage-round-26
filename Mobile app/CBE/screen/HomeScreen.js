import { Text, View,Button } from "react-native";




export default function HomeScreen({navigation}){
    return <View>
        <Text> Home Page </Text>
        <Button title='Detail' onPress={()=>
        {navigation.navigate('Details')

        }}/>  

         <Button title='About' onPress={()=>
        {navigation.navigate('About')}}/>

         <Button title='Scroll' onPress={()=>
        {navigation.navigate('ScrollView')}}/>
          
          <Button title='Flat List' onPress={()=>
        {navigation.navigate('FlatList')}}/>
       
        <Button title='Fetch' onPress={()=>
        {navigation.navigate('Fetch')}}/>

         <Button title='Photo' onPress={()=>
        {navigation.navigate('Photo')}}/>
    </View>
}