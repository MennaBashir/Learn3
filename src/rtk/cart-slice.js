import {createSlice} from "@reduxjs/toolkit";
export const cartReducer=createSlice({
    initialState:[],
    name:"cartReducer",
    reducers:{
        addToChart:(state,action)=>{
           const findProduct=state.find((product)=>product.id===action.payload.id);
           if(findProduct){
               findProduct.quantity +=1;
           }
           else{
               const Productadd={...action.payload,quantity:1}
               state.push(Productadd); 
           }
        },
        deleteFromChart:(state,action)=>{
            return state.filter((p)=>p.id !== action.payload.id)
        },
        clear:(state,action)=>{
            return [];
        },
    }
})

export const {addToChart,deleteFromChart,clear}=cartReducer.actions;
export default cartReducer.reducer;
