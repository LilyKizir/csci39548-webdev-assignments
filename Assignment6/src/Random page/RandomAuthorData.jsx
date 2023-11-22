import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from './RandomUserDataSlice';

function RandomAuthorData() {
  const userData = useSelector(selectUserData);

  return (
    <div>
      <h2>Author Data</h2>
      <p>Username: {userData.username}</p>
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <p>Total photos: {userData.total_photos}</p>
      <p>Total followers: {userData.followers_count}</p>
    </div>
  );
}

export default RandomAuthorData;
