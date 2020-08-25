import React from 'react';
import './FriendDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus, faPhone, faEnvelope, faUser, faDollarSign, faChild, faAddressCard} from '@fortawesome/free-solid-svg-icons'


const FriendDescription = (props) => {

    const {name, age, email, phone, salary, address, img} = props.friends;

    // console.log(props.friends[0].name);

    
    return (
        <div className="friendStyle">            
            
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
                <h1 ><FontAwesomeIcon icon={faUser} />   {name} </h1>
                <p>Age :     <FontAwesomeIcon icon={faChild} />  {age} </p>
                <p>Email :   <FontAwesomeIcon icon={faEnvelope} />   {email} </p>
                <p>Phone :   <FontAwesomeIcon icon={faPhone} />   {phone} </p>
                <p>Salary :  <FontAwesomeIcon icon={faDollarSign} />   {salary} </p>
                <p>Home Town : <FontAwesomeIcon icon={faAddressCard} /> {address.city} , {address.country} </p>
                <button className='addButton' onClick={() => props.handleFriends(props.friends)}>  <FontAwesomeIcon icon={faPlus} />  &nbsp; Add Friend  <FontAwesomeIcon icon={faUserPlus} /> </button>
                
            </div>
            
        </div>
    );
};

export default FriendDescription;