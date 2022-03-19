import React from 'react';

// class vale me .. this.props.etc pehle 
// ab functinal component me , props.data..etc direct no need of this keyword

// props is a object


const User = (props)=>{

    // console.log(props);
    // console.log(props.data);
    // console.log(props.data.name);

    const {data} = props;

    return (
        
        <div>
            <h1>User Component</h1>
            <h4>{ data.name }</h4>
            <h4>{ data.age }</h4>
        </div>

    )
}

export default User;