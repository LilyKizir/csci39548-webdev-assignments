import { useState } from "react";

export default function userData() {
  return (
    <>
      <div>
        <ul>
          <li>Total Downloads: {stats.downloads}</li>
          <li>Downloads in the last 30 days: {stats.downloadsLastThirty}</li>
          <li>Total Likes: {stats.likes}</li>
          <li>Total Views: {stats.views}</li>
          <li>Views in the last 30 days: {stats.viewsLastThirty}</li>
        </ul>
      </div>
    </>
  );
}
