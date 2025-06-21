import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts=(reqData)=>async(dispatch)=>{
    
    dispatch({type:FIND_PRODUCT_REQUEST})
    
       const{
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        maxDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize
       }=reqData;   

   try{
       const {data}= await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&maxDiscount=${maxDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
           
         console.log("Products fetched successfully:", data);   
       dispatch({type:FIND_PRODUCT_SUCCESS,payload:data})     
    }
    catch(error){
        console.error("Error fetching products:", error);
       dispatch({
           type:FIND_PRODUCT_BY_ID_SUCCESS,
           payload:error.message
       })
    }
}



export const findProductsById=(reqData)=>async(dispatch)=>{
    
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
       const{ productId}=reqData;   
    try{
        const {data}=await api.get(`/api/products/${productId}`)

        console.log("Product fetched successfully:", data);

       dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})     
    }
    catch(error){
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

