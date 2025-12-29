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

    </View>
}