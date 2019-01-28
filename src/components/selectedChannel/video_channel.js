import React, { Fragment } from 'react';

const VideoChannel = ({whichChanel}) => {
    if (!whichChanel) {
        return <div>Loading</div>;
    }

    const chanelId = whichChanel.snippet.resourceId.videoId;
    //console.log(chanelId);
    const publishingDate = Date.parse(whichChanel.snippet.publishedAt);
    let daysFromPublishingDate = Math.floor((Date.now() - publishingDate)/86400000);
    
    const url = `https://www.youtube.com/embed/${chanelId}`;
    
    // miniatura src={whichChanel.snippet.thumbnails.medium.url}
    return (
        <div className="mainVideo">
            <div className="mainVideo-channelTitle">
                <div>Kanał: {whichChanel.snippet.channelTitle}</div>
            </div>    
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
           <div className="mainVideo-details">
                <div className="mainVideo-details-title">Najnowszy odcinek: {whichChanel.snippet.title}</div>
                <div className="mainVideo-details-days">Dni od daty publikacji: {daysFromPublishingDate}</div>
                
                {/* <div>{whichChanel.snippet.description}</div>
                <div>{whichChanel.snippet.channelId}</div>
                <div>{whichChanel.snippet.publishedAt}</div> */}
                
            </div>
            
        </div>
    )
};

export default VideoChannel