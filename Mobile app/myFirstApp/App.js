import { View,Text,Image,TextInput,Button,ActivityIndicator, Switch,ScrollView} from "react-native-web"

import { useState } from "react"
import Card from'./Card'

export default function App(){
    const [x,setX] = useState(0)
    const[ison,setIsOn]=useState(false)
    return <ScrollView>
    <View style={{alignItems:'center'}}>
          <Text style={{
            justifyContent:'center',
            textAlign:'center',margin:10,
            fontSize:20}}> Hiiii</Text>
            <Text style={{color:'blue',
              fontSize:20
            }}> Styled Text</Text>
            <Text style={{textAlign:'center'}}> the value of X is: {x}</Text>
          <Text style={{
            justifyContent:'center',
            textAlign:'center'}} > Welcome</Text>
            <Switch style={{ justifyContent:'center',}} 
            value={ison}onValueChange={setIsOn}/>
          <Image
          source={{uri:"https://tse2.mm.bing.net/th/id/OIP.cs6mBMHprPT1tSXS-Q7ELgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",}}
          style={{width: 600,height:500}}/>
          <TextInput
          placeholder="enter your name"
          style={{borderWidth:2,padding:10,margin:10}}
          />
          <Button title='Submit' onPress={()=>{
            setX(5)
          }}/>
          <ActivityIndicator size='large' color="black" />
          <View style={{flex:1 , flexDirection:'row',margin:5,justifyContent:'space-evenly'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}></ScrollView>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
  </View>
               </View>
               </ScrollView>
}
