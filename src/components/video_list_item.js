import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className = "list-group-item">
      <div className = "video-list media">
        <div className = "media-left">
          <img 
            // 03
            // onVideoSelect is now passed on to the VideoListItem component
            // when clicked, onVideoSelect function is called with the value (video) that was clicked
            onClick={() => onVideoSelect(video)} 
            className = "media-object" src={imageUrl}/>
        </div>

        <div className = "media-body">
          <div className = "media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;