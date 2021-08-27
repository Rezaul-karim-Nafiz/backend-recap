import React from 'react';

const Event = (props) => {
    const {name, pic} = props.data
    return (
        <div>
            <h1>{name}</h1>
            <img style={{width: '300px'}} src={pic} alt="picItem"/>
        </div>
    );
};

export default Event;