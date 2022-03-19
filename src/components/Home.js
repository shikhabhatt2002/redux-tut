// rfce/rfc direct

import React from 'react';


function Home()
{
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7ov9nKwOFNjh1uDYUEzZaVE5sLqyMwhU2g&usqp=CAU" />
    
            </div>
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
                   <button>Add To Cart</button>
                </div>
            </div>
        </div>


    )
}

export default Home;
