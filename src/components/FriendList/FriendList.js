import React from 'react';
import './FriendList.css';

const FriendList = (props) => {

    const selectFriends = props.selectFriends;

    const totalSalary = selectFriends.reduce( (sum, friend) => sum + friend.salary, 0)

    return (
        <div>
            <div>
                <h1>Total Friend : {selectFriends.length} </h1>
                <p>Friend's Total Salary : ${totalSalary} </p>
                <hr/>
            </div>
            <div>
                {
                    selectFriends.map(friend => 
                        <div className="friends"> 
                            <img className="side-image" src={friend.img}></img>
                            <h3 style={{paddingRight: '10px'}}>{friend.name} Added </h3>
                        </div>                       
                    ) 
                }
            </div>
        </div>
    );
};

export default FriendList;