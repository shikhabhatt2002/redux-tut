// copied from HomeContainer.js, chaneg Home to Header

import {connect} from 'react-redux';
import Header from '../components/Header';
// import {addToCart} from '../Services/Actions/actions'; // no need of action as well

// import it in App

const mapStateToProps = state =>({
    data : state.cardItems 
})


const mapDispatchToProps = dispatch=> ({ // takes function
    // no need, as function Home se trigger hoga
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);

