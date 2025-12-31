
import { increment,decrement,reset } from "../Redux/Slice/CounterSlice";
import { useSelector,useDispatch } from "react-redux";
import { View,Text,Button } from "react-native";

export default function CounterApp() {
    const counterFromStore=useSelector((state)=>state.counter.value)
   const dispatch=useDispatch()

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{counterFromStore}</Text>

            <Button title='Add ' onPress={() => {
               dispatch(increment())
            }} />
            <Button title='Subtract ' onPress={() => {
               dispatch(decrement())
            }} />
            <Button title='Reset' onPress={() => {
               dispatch(reset()) 
            }} />
        </View>
    )
}