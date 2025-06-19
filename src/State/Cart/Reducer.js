import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAILURE, REMOVE_ITEM_FROM_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
cart:null,

loading: false,
error: null,
cartItems:[]
}

export const cartReducer = (state =initialState , action) => {
    switch(action.type){
       
        case GET_CART_REQUEST:
            case ADD_ITEM_TO_CART_REQUEST:
               case REMOVE_ITEM_FROM_CART_REQUEST:
                  case UPDATE_CART_ITEM_REQUEST:
                       return {...state, loading:true, error:null } 
        
        
        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                cartItem:[...state.cartItems,action.payloads.cartItem],
                
            }
            
        case ADD_ITEM_TO_CART_FAILURE:
            return{...state,loading:false, error:action.payloads} 
        
        case GET_CART_SUCCESS:
            return{
                ...state,
                loading:true,
                error:null,
                cartItems:action.payloads.cartItems,
                cart:action.payloads
            }

        case GET_CART_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payloads
            }

       case REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                cartItems: state.cartItems.filter(item => item.id !== action.payloads)
            }

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading:false,
                cartItem: state.cartItems.map(item=> 
                    item.id===action.payload.id? action.payload : item
                )
            }    

        case REMOVE_ITEM_FROM_CART_FAILURE:
           case UPDATE_CART_ITEM_FAILURE:
               return{
                ...state,
                loading:false,
                error:action.payloads
               }          

        default:
            return state; 


                       
                       
    }
}