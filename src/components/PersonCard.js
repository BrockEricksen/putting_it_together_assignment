import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ getAge, setAge ] = useState(props.initialAge);
    const { firstName, lastName, age, hairColor } = props;
    return(
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { getAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={(e) => setAge(getAge + 1)}> Birthday Button for { props.firstName }  { props.lastName } </button>
        </div>
    )
}

export default PersonCard;