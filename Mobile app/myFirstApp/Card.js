import {View,Text,Image} from 'react-native'
import { Button } from 'react-native-web'

export default function Card(){

    return <View>
     
        <Image 
        source= {require("./image.png")}
        style={{ margin:'10',width: 200, hieght: 200 }}/>
           <Text> 
             Buy Now
             </Text>
    </View>
}