import { ADD_FRUIT, DELETE_FRUIT } from "./actionType";


export const addFruit = (id,fruit,quantity) =>{
            return {
                type: ADD_FRUIT,
                payload : {id:id,fruit:fruit,quantity:quantity}
            }

}
export const deleteFruit = (id) =>{
    return {
        type: DELETE_FRUIT,
        payload : id
        }
    }