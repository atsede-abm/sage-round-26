import { ScrollView,View,Text } from "react-native";
import { africaCountries } from "./data/africaCountries";


export default function ScrollViewExampleScreen(){

    return <ScrollView>{
     
      africaCountries.map((c)=>(

     <View>

       <Text> {c.country} </Text>
       <Text> {c.capital} </Text>
</View>
         ))
        }
    </ScrollView>
}