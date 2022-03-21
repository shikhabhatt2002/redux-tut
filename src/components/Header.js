// rfce/rfc direct

import React from 'react';


function Header(props) // props added, getting addToCart from HomeConatiner, taki isko hum button click pe call kar skein
{
    // console.log("Home", props);
    console.log("Header: ", props.data);

    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{ props.data.length} </span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7ov9nKwOFNjh1uDYUEzZaVE5sLqyMwhU2g&usqp=CAU" />
    
            </div>
           
        </div>


    )
}

export default Header;
