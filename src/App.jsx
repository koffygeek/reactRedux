import './App.css'
import {legacy_createStore as createStore} from "redux"
// import { addFruit,deleteFruit,addQuantityFruit,updateQuantityFruit } from './redux/action'
import { fruitReducer } from './redux/reducer'
import { Provider } from 'react-redux'
import Cart from './component/Cart'
import AddFruit from './component/AddFruit'



// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]


// Store Creation

const store = createStore(fruitReducer);

// store.dispatch({type:ADD_FRUIT,payload:{id:1,fruit:'🍉',quantity:2}})
// store.dispatch({type:ADD_FRUIT,payload:{id:2,fruit:'🍑',quantity:8}})
// store.dispatch({type:ADD_FRUIT,payload:{id:3,fruit:'🍐',quantity:5}})
// store.dispatch({type:ADD_FRUIT,payload:{id:4,fruit:'🍒',quantity:9}})

// const unsubscribe = store.subscribe(()=>console.log(store.getState()))
// store.dispatch(addFruit(1,'🍐',3))
// store.dispatch(addFruit(2,'🍑',6))
// store.dispatch(addFruit(3,'🍒',7))
// store.dispatch(deleteFruit(2))
// store.dispatch(addQuantityFruit(1))
// store.dispatch(updateQuantityFruit(2,1000))

// console.log(store.getState())






function App() {

  return (
    
      <Provider store={store}>
      <Cart />
      <AddFruit/>
      </Provider>
      
    
  )
}

export default App
