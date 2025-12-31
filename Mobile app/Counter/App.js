import { store } from "./Redux/store"
import CounterApp from "./Component/CounterApp"
import { Provider } from "react-redux"

export default function App() {
  return(
 
 
      <Provider store={store}>
    
    <CounterApp/>
    
  </Provider>
  )
}




