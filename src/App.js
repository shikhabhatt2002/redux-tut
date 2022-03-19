import logo from './logo.svg';
import './App.css';
// import Home from './components/Home'; // no home container
import HomeContainer from './containers/HomeContainer'; // yahan import home container ko kiya hai


//---------- Props passing Ex---------------------------------------------
// import User from './User';

// function App() {
//   return (
//     <div className="App">
//      <User data={{ name:'anil sidhu', age:26} }></User>
//     </div>
//   );
// }
//------------------------------------------------------------------------



//------------------------------------------------------------------------
/*
  direct yahan se pass nhi karenge
  yahan se props,  container me bhejenge aur aage pass krenge
  App-->HomeContainer
*/
//------------------------------------------------------------




function App()
{
    return (
      <div className="App">
        <HomeContainer/>
      </div>
    )
}




export default App;
