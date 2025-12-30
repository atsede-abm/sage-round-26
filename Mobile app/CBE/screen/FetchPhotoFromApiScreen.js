import { useState,useEffect } from "react"
import { View,Text,FlatList } from "react-native-web"

export default function FetchPhotoFromApiScreen(){

   const [photo,setPhoto] =useState()

   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then(Photo=>setPhoto(Photo))
    },[])



    return(
        <FlatList
                   photo={photo}
                    keyExtractor={(photo)=> photo.id}
                    renderItem={({item})=>(
                        <View style={{marginBottom:5,borderBottomWidth:1}}>
                            <Text>photo.id:{item.id}</Text>
                            <Text>Title:{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    )}
                         />

    )
}