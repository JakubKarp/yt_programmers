import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const videosChannelList = (props) => {
        //const fourVideos = props.videos.slice(1,5);
        

    return (
        <ul className="video-list">
            {props.videos.map((video) => 
                <VideoListItem 
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video} 
                />
            )}                    
        </ul>        
    );
}    


export default videosChannelList