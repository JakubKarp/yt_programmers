import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideosChannelList extends Component{
        //const fourVideos = props.videos.slice(1,5);

        //teraz dzięki shouldComponentUpdate() lista po prawej nie renderuje się po każdym kliknięciu na nią. 
        //jeśli jednak chcesz zdejmować z niej kliknięte wideo - wtedy będzie musiała się renderować
        //w videos idzie info, który kanał jest wybrany, a więc być może jednka nie trzbe aprzeładowytwać kanału, tylko włącząć i wyłączać kliknięte filmy
        //więc pradoopodobnie będzie moło to zostać, o ile video nie będzie niosło informacji, co wyłacząc, ale może lepiej to rodzielić
        shouldComponentUpdate(nextProps, nextState) {
            return nextProps.videos != this.props.videos
        }
        
        componentWillUpdate() {
            console.log("lista po prawej willupdate"); 
        }

        render() {

        return (
            <ul className="video-list">
                {this.props.videos.map((video) => 
                    <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.etag}
                        video={video} 
                    />
                )}                    
            </ul>        
        );
    }    

}    


export default VideosChannelList
// const videosChannelList = (props) => {
//         //const fourVideos = props.videos.slice(1,5);
        

//     return (
//         <ul className="video-list">
//             {props.videos.map((video) => 
//                 <VideoListItem 
//                     onVideoSelect={props.onVideoSelect}
//                     key={video.etag}
//                     video={video} 
//                 />
//             )}                    
//         </ul>        
//     );
// }    


// export default videosChannelList