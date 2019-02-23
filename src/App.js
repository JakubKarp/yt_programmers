import React, { Component } from 'react';
//import logo from './logo.svg';
import channelGetters from './roots/my_axios_module';
import API_KEY from './roots/yt_key'
import channelListId from './roots/channels';
import SelectedChanel from './components/selectedChannel/selected_channel'
import AllChannelsPanel from './components/chanels_panel';
import './style.scss'




class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            //selectedChanel: null, 
            lastVideos: [],
            lastVideo: null,
            toggleChannelsPanel: true,
            language: 1
            
        }
        this.searchLastVidoes(channelListId[1][0].id) 
        console.log(channelListId);
        
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

    handleVideoSelect = (lastVideo) => {
        this.setState({lastVideo})
    }

    handleToggleChannelsPanel = () => {
        this.setState({
            toggleChannelsPanel: !this.state.toggleChannelsPanel
        });
    }


    changeOnEnglishHadler = () => {
        //console.log(this.state.language);
        this.setState({language: 1})         
    }

    changeOnPolishHandler = () => {
        //console.log(this.state.language);
        this.setState({language: 0}) 
    }

    render() {
        return (
            <div className="container">
                <SelectedChanel
                    whichChanel={this.state.lastVideo}
                    onVideoSelect={this.handleVideoSelect}
                    videos={this.state.lastVideos}
                />
                 
                <div className="toggle-panel" 
                    onClick={this.handleToggleChannelsPanel}
                />   
                     
                {this.state.toggleChannelsPanel && 
                <AllChannelsPanel 
                    hidePanel={this.handleToggleChannelsPanel}  
                    channelList={channelListId[this.state.language]}
                    selectChannel={this.handleSelectChanel}
                    language={this.state.language}
                    polish={this.changeOnPolishHandler}
                    english={this.changeOnEnglishHadler}    
                />}
                
            </div>
        );
    }
}

export default App;
