import React, {Component} from "react";

const ChannelsPanel = (props) => {
    
    const channelId = (id) => {
        props.selectChannel(id)
    }

    return (
        <div className="chanels-panel" >
            {/* <div class="toggle-button" onClick={this.props.hidePanel}></div> */}
            <h6>Wybierz kanał</h6> 
            <ul>
                {props.channelList.map(names => 
                    <li key={names.id} onClick={() => channelId(names.id)}>{names.name}</li>
                )}
            </ul>
        </div>        
    )    
}

export default ChannelsPanel;