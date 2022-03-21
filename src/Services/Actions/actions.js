/*
    action kam karta kya hai?

    *** React se Data Send krta hai Store (Redux ka) ke Andar ***

    ho skta hai data component se aara ho ya API se aara ho

    then reducer usko tarike se handle karta hai
*/


// jab hum "Add To Cart" button pe click krenge tab ye function chalenge
// this action functin returns 2 things, ek to data jo receive kiya vhi, aur ek type uska
// type is very important, ye data kisse asscociated hai kis component se? add to cart se ya delete cart se etc




// yahan type me ADD_TO_CART string kyun nhi krte??
// kyunki jo ye type yahan action me define kiya hai, reducer me bhi same type chahiye hoga
// to spelliing vagera na galt ho jayeye, isliye constants ke andar 1 baar he likhenge..


import {ADD_TO_CART, REMOVE_TO_CART} from '../Constants/constants';

export const addToCart = (data)=> {
    
    console.log("action: ", data);
    return {
        // type:'ADD_TO_CART' ... earlier
        type: ADD_TO_CART,
        data: data
    }
}


// // Action function 2
// // type should be different for diffrent actions functions
export const removeToCart = ()=> {
    return {
        type: REMOVE_TO_CART,
        // no need of data
    }
}

