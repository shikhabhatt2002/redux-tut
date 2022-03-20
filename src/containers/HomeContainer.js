
// yaha pe home import kiya, taki aane vale time pe hum component and redux ko map kar skein
// asse he har component ko use krenge
// pehle container  pe jayega phir jahan use krna hai, "App" vahan jayega

// VERY IMPORTANT FILE ,, to connect react and redux
/*
    STEPS:

    1) connect redux and react
    2) import react-redux .action and component
    3) use mapStateToProps
    4) use mapDispatchToProps


    react-redux se default component milta hai "connect" aur baki components action se nikalenge
    phir connectme 2 parameters pass krenge (mapStateToProps, mapDispatchToProps)
    
    -- ek data send ke liye kaam aata hai aur ek data get karne ke liye--

    mapDispatchToProps -- jab hum COMPONENT se Data ... Redux Store Me save karenge , tb ye function use krenge
    
        ab ye data kahin aur bhi use hora hoga, third components

    mapStateToProps -- tb iss data ko vapis se send krne ke liye hum use krte hai ye

*/

import {connect} from 'react-redux';
import Home from '../components/Home';
import {addToCart} from '../Services/Actions/actions';

const mapStateToProps = state =>({

    // abhi ke liye hum kuch state define kar nhi rahe, as bcoz iski hume jarurat hai bhi nhi
})


const mapDispatchToProps = dispatch=> ( { // takes function

    // ek FUNCTION banayenge jo call hoga huamre react vale component se
    // iske andar kuch data aayega
    addToCartHandler: data => dispatch(addtoCart(data)) // react component se call karenge addToCartHandler jo data lega aur ek dispatch ke andar ek function likhenge (ACTION)  call  karege jisme data pass krdenge

})


// export default Home; // export home kiya hai, naki home container
// ab aise call nhi karenge connect ke through call karenge
export default connect(mapStateToProps, mapDispatchToProps)(Home);

