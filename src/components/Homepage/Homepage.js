import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/friends';
import FriendDescription from '../FriendDescription/FriendDescription';
import FriendList from '../FriendList/FriendList';
import './Homepage.css';

const Homepage = () => {

    const first10 = fakeData.slice(0, 15);
    
    const [friends, setFriends] = useState(first10);

    const [selectFriends, setSelectFriends] = useState([]);

    const handleFriends = (friends) => {
        const newFriends = [...selectFriends, friends];
        setSelectFriends(newFriends);
    }

    return (
        <div className="homepage">
            <div className="friendDescription">
                {
                    friends.map(friend => <FriendDescription  key={friend.id}  friends = {friend} handleFriends={handleFriends}></FriendDescription> )
                }
            </div>

            <div className="friendList">
                <FriendList selectFriends = {selectFriends}></FriendList>
            </div>
        </div>
    );
};

export default Homepage;