import {connect} from 'react-redux'
import { addFruit,clearFruit } from '../redux/action'
import { useState } from 'react'

const AddFruit = ({AddMyFruit,ClearMyfruit})=>{
    const [myFruit,setMyFruit] = useState({id:0,fruit:"",quantity:0});


    return(
        <div className="flex justify-center">
        <div className="m-5 p-3 w-96 h-56 border-yellow-500 bg-green-300">

            <h1>Add Fruits to Cart</h1>

                <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left">ID :</label>
                <input className="rounded mt-3" name="id" onChange={(e)=>setMyFruit({...myFruit,id:e.target.value})}/><br/>

                <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >FRUIT :</label>
                <input className="rounded mt-3"  name="fruit" onChange={(e)=>setMyFruit({...myFruit,fruit:e.target.value})}/><br/>

                <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >QUANTITY :</label>
                <input className="rounded mt-3"  name="quantity" onChange={(e)=>setMyFruit({...myFruit,quantity:e.target.value})}/><br/>

            <button className="bg-blue-700 mt-3" onClick={()=>AddMyFruit(myFruit.id,myFruit.fruit,myFruit.quantity)}>SUBMIT</button>
            


        </div>
        </div>
    )
}



const mapDispatchToProps = (dispatch)=>{
    return {
        AddMyFruit : function(id,fruit,quantity){
            dispatch(addFruit(id,fruit,quantity))
        
        },
        ClearMyfruit : function(){
            dispatch(clearFruit())
            
        }
           
        

    }
}


export default connect(null,mapDispatchToProps)(AddFruit)