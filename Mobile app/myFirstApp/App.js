import { View,Text,Image,TextInput,Button,ActivityIndicator, Switch} from "react-native-web"

import { useState } from "react"

export default function App(){
    const [x,setX] = useState(0)
    return <View>
          <Text style={{flex:1,
            justifyContent:'center',
            textAlign:'center',margin:10}}> Hiiii</Text>
            <Text style={{textAlign:'center'}}> the value of X is: X</Text>
          <Text style={{flex:1,
            justifyContent:'center',
            textAlign:'center'}} > Welcome</Text>
          <Image
          source={{uri:"https://tse2.mm.bing.net/th/id/OIP.cs6mBMHprPT1tSXS-Q7ELgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",}}
          style={{width: 600,height:500}}/>
          <TextInput
          placeholder="enter your name"
          style={{borderWidth:2,padding:10,margin:10}}
          />
          <Button title='Submit' onPress={()=>{
            alert 
          }}/>
          <ActivityIndicator size='large' color="red" />
          <Switch/>
            
               </View>
}
