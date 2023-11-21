import { useState } from "react";

export default function Stats() {
  return (
    <>
      <div>
        <h2>User Details</h2>
        <p>Username: {userData.username}</p>
        <p>Name: {userData.name}</p>
        <p>Location: {userData.location}</p>
        <p>Bio: {userData.bio}</p>
        <p>Total photos: {userData.total_photos}</p>
        <p>Total followers: {userData.followers_count}</p>
      </div>
    </>
  );
}
