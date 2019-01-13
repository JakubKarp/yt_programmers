import React, { Component } from 'react';
//import logo from './logo.svg';
import channelGetters from './roots/my_axios_module';
import API_KEY from './roots/yt_key'
import channelListId from './roots/channels';
import VideoChannel from './components/video_channel';
import VideosChannelList from './components/video_list';
import AllChannelsPanel from './components/chanels_panel';
import './style.scss'




class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            selectedChanel: null, 
            lastVideos: [],
            lastVideo: null,
            toggleChannelsPanel: true,
            
        }
        this.searchLastVidoes(channelListId[5].id);
    }
   
    searchLastVidoes(channelId) {
        console.log(channelId)
        var uploads = '';
        channelGetters.channelUploadsGetter({key: API_KEY, channelId: channelId}, contentDetails => {
            //console.log(contentDetails)      
            uploads = contentDetails[0].contentDetails.relatedPlaylists.uploads;
            //console.log(uploads)
            channelGetters.channelAllVideosGetter({key: API_KEY, channelUploads: uploads}, lastVideos => {
                //console.log(lastVideos);
                this.setState({ 
                   lastVideos: lastVideos,                   
                   lastVideo: lastVideos[0],
                });
            })
        });
    }
    
    handleSelectChanel = (channelId) => {
        this.searchLastVidoes(channelId)
    }

    handleToggleChannelsPanel = () => {
        this.setState({
            toggleChannelsPanel: !this.state.toggleChannelsPanel
        });
    }

    render() {
        return (
            <div className="container">
                <VideoChannel whichChanel={this.state.lastVideo} />
                <VideosChannelList 
                    onVideoSelect={lastVideo => this.setState({lastVideo})}
                    videos={this.state.lastVideos} 
                /> 
                <div className="toggle-panel" 
                    onClick={this.handleToggleChannelsPanel}
                />   
                     
                {this.state.toggleChannelsPanel && 
                <AllChannelsPanel 
                    hidePanel={this.handleToggleChannelsPanel}  
                    channelList={channelListId}
                    selectChannel={this.handleSelectChanel}    
                />}
                
            </div>
        );
    }
}

export default App;
