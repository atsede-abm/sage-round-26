
import{View,Button,TextInput,Text}from'react-native'
import { useState } from 'react'

export default function App(){
  const[name,setName]=useState()
  return <View style={{alignItems:'center'}}>
   <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          style={{borderWidth:2,padding:5,margin:5}}
          />
          <TextInput
             placeholder="Age"
          style={{borderWidth:2,padding:5,margin:5}}
          />
          <Button title='Submit'
          onPress={()=>{
            alert(name)
          }}
          />  
          <Text> Name from field:{name}</Text>
  </View>
}