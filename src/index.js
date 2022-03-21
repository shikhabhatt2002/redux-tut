import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// *** IMPORTANT *** -----------------------------
// Agar DEFAULT ko import krre hain to 1) koi bhi name 2) no need of Curly braces
// agar Default nhi hai, vahan bahut saare component hain to 1) Vhi Same name se import karna padega 2) Need a Curly braces
// WRONG -- import {rootReducer} from './Services/Reducer/index';
// CORRECT -- import rootReducer from './Services/Reducer/index';
//-----------------------------------------------


// redux ke liye -----------------------
import {createStore} from 'redux'; // helpful for creating store
import {Provider} from 'react-redux'; // Provider, ye React app jo niche hai usko wrapp karega, react ke upar lgra hai to react -redux se nikalanege
// jo react ka data hoga usko puri application ke andar FLOW karayega
import rootReducer from './Services/Reducer/index';
// how will create store with this reducer
const store = createStore(rootReducer);
//-------------------------------------

/* console, store ka andar aa kya raha hai? 
// Action->HomeContainer->Home->action/Reducer->HomeContainer get->Home appne app through connect in HomeContainer
// now can use this anywhere m
FLOW
pehle "Action" ka function... laye hum "Home" me Through "Home Conatiner" se phir "Home" pe "Action" vale function ko call kiya phir vo "Reducer" me bhi APNE APP chala gya Button Click pe, phir "HomeContainer" me dusra function hai usme get krke ye "Home" me apne app update vagera hojayega


1) INDEX.js- console.log("Store Data :", store ); // theek chalra hai sb kuch milgya
2) HomeContainer(yahan action pass krdiye the/ Connector) -- addToCart vala milna chahiye as props in Home, taki yahan Button Click pe Call kar skein isko
3) Home -- ab hum chahte hain humara Action call ho jab hum Button Click karein.. will add onClick on button here.. props.Function_Name( all specified data)
4) action call krdiya onButton click in home component.. to Action me Console krke dekh lenge ek baar
5) ye Cheex Reducer ke andar bhi jani chahiye, ab Reducer me call krenge... NO Need To Import Anything in Recuder, sb Apne app ho isme
6) Ab ye data to send krdiya ab agar get karna hai.. to HomeContainer me jo pehle rakha tha.. mapStateToProps usme ye data save krlenge, ye Connect ke Through HOME me aajeyga apneapp Updated
7) ab isko kahin bhi use karna hai to kar skte
      Add data/Show in Cart
      get 1 item in cart, make some style for cart items, push multiple item in cart, show multiple count in cart
    
  Small chaneg in return of the reducer file
  // baar baar click krne pe ek he cart aara
  // jab ki hume baar baar click krne pe usme increment krna hai
8) ab bas normal span lo, HOME me, span ke nadar count ya data show kara do
*/


/*
  FOR NEW COMPONENT-
    step 1) add Component in Component folder
    step 2) add ComponentContainer in Container Folder
    step 3) Add it in App.js


  FOR NEW ACTION/FUNCTION-
    step 1) add the button or anything jispe click se function call hoga
    step 2) add new action, see data required? noy in case of erase
    step 3) add reducer ( what need to be done on this function call)

        constants vagera add krna instead of hard coding


  and for WRAPPER
    1) Provider, 2) CreateStore , 3) RootReducer import karna hai bas..

*/




/*
    Steps: IMPORTANT

 Complete Redux Flow

    1) Make Redux WRAPPER in index file
    2) What is Provider
    3) Make Store
    4) Check Data Flow in Console
    5) Call Action on Button Click 

*/


ReactDOM.render(
  // Provider wrapper of redux on react app
  // action se reducer me data jata hai, reducer se store me data jata hai, idhar root reducer ka data put karenge
  // first import 
  // 2 things are done here
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
