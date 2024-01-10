import { ADD_FRUIT, DELETE_FRUIT } from "./actionType";
const initialState =

{
    cart : []
} ;


export const fruitReducer = (state=initialState,action) =>{
        switch (action.type) {
            case ADD_FRUIT:
                return {...state,cart:[...state.cart,action.payload]}

            case DELETE_FRUIT:
                return {...state,cart:[...state.cart.filter(item => item.id !== action.payload)]}
                

            default:
             return  state;
        }
}