import React from 'react';
import { useSelector } from 'react-redux';
import { selectImageStats } from './RandomImageStatsSlice';

function RandomStats() {
  const stats = useSelector(selectImageStats);

  return (
    <div>
      <h2>Image Statistics</h2>
      <ul>
        <li>Total Downloads: {stats.downloads}</li>
        <li>Downloads in the last 30 days: {stats.downloadsLastThirty}</li>
        <li>Total Likes: {stats.likes}</li>
        <li>Total Views: {stats.views}</li>
        <li>Views in the last 30 days: {stats.viewsLastThirty}</li>
      </ul>
    </div>
  );
}

export default RandomStats;
