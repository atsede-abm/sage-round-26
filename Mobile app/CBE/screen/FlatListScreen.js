import { FlatList, View,Text } from "react-native";
import{countries} from"./data/largeCauntries"

export default function FlatListScreen(){
    return(
        <FlatList
        data={countries}
        keyExtractor={(c)=>c.name}
        renderItem={({item})=>(
           
           <View style={{padding: 10,borderBottomWidth: 1,borderBottomColor:'#a58080ff'}}>
                <Text>{item.name}</Text>
                 
            </View>
        )}
        
        />
    )
}