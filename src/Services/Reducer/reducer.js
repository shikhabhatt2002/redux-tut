/*
    Action se jo data milta hai, usko store ke andar push karta hai

    // iss BUTTON, Add To Cart pe click krne pe hum Action Call karenge , jahan hum API/Component ka data bhejna ho, Action bhejega data reducer ko
    // reducer iss data ko filter out krke, ki KAUNSE VALE OBJECT KE ANDAR MUJHKO DATA PUSH KARNA HAI, ADD_TO_CArt ya REmove jo bhi karna hai
    // usko store ke andar bhej dega aur store se hume data dikh jayega

    --> Index.js ke andar hum ROOT REDUCER banayenge--
    --> reducer.js ke andar bhi REDUCER rakhenge

  
    WORK 1)   
    Intial State define krni hoti hai- Ki initial store ke andar uski kya value rehne vali hai
    ki jo humara object hai ya store hai vo BLANK rhne vala hai ya ARRAY rehne vala hai
    WORK 2)
    ek Component banega, Uske andar kuch switch cases lagenge iss type ke basis pe, jo hum action se bhejte hain, add karna hai to kya rahega , remove krna hai to kya rahega
*/

import { ADD_TO_CART } from "../Constants/constants"


const initialState={
    // array isliye maybe aage aur items bhi hon
    cardData: []
}

// iske andar  2 parameters hote hain
// ab action jo parameter hai vo, Action se Reducer me kaise pahunchega vo define hoti hai CONTAINER me
// action apne aap CALL hote hai, humo EXTERALLY karne ki jarurat nhi
export default function cardItems(state=initialState, action)
{
    switch(action.type){
        // case 'ADD_TO_CART': // constas se use krenge reducer me bhi
        case ADD_TO_CART: 
            return { // this bracket only
                ...state, // jo state ka anadr pehle DATA tha
                cardData: action.data // ye actione ke andar 2 cheezin thi because type & data
            }
            break; // impo har case ke baad
        default:
            return state // jab kuch na map kare// iska dur dur tak no relation with component state

    }
}