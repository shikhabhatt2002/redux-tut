// rfce/rfc direct

import React from 'react';


function Home(props) // props added, getting addToCart from HomeConatiner, taki isko hum button click pe call kar skein
{
    // console.log("Home", props);
    console.log("Home:", props.data);

    return (
        <div>
        {/*  EARLIER DIRECT YAHAN SE HE PASS KRRE THE, ab EK NEW COMPONENT BANAKE SHOW KARENGE DATA, Make Header & HeaderContainer */}
            {/* <div className="add-to-cart">
                <span className="cart-count">{ props.data.length} </span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7ov9nKwOFNjh1uDYUEzZaVE5sLqyMwhU2g&usqp=CAU" />
    
            </div> */}





            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://mpng.subpng.com/20180618/fsk/kisspng-smartphone-android-gsm-unlocked-telephone-mobile-phone-repair-5b281de08e3054.7431874615293557445825.jpg"   />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={ ()=> 
                                props.addToCartHandler( {price:1000, name:'I Phone'})  
                                }>Add To Cart</button>
                    <button className="remove-cart-btn" onClick={ ()=> 
                                props.removeToCartHandler( {})  
                                }>Remove To Cart</button>
                </div>
            </div>
        </div>


    )
}

export default Home;
