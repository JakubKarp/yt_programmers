import React, { Component } from 'react';
import VideoChannel from './video_channel';
import VideosChannelList from './video_list';

const selectedChannel = (props) => {
    return (
        <div className="selectedChannelContainer">
            <VideoChannel 
                whichChanel={props.whichChanel} 
            />
            <VideosChannelList 
                onVideoSelect={props.onVideoSelect}
                videos={props.videos} 
            />
        </div>
    )
}

export default selectedChannel;