/*
    ROOT REDUCER ka kaam??

    ki Reactjs Redux Project ke andar ek he Store ho skta hai

    to abhi to vaise ek he Reducer banaya hai, vaise 20-25 ho skte hain , 
    to saare ke saare Reducer ek he Root Reducer me Merge Krne Padenge
    taki ek single store humara ban ske

*/

import {combineReducers} from 'redux' // must
import cardItems from './reducer' 
// import users from './reducers' abhi to hai nhi, pr aise baki reudcer import krte

// high level component
export default combineReducers({
    // cardItems, users aase likhte jo aur bhi hote
    cardItems
});