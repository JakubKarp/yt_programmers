import React, {Component} from "react";

class ChannelsPanel extends Component{
    
    channelId = (id) => {
        this.props.selectChannel(id)
    }

    render(){
        const allNames = (
            <ul>
            {this.props.channelList.map(names => 
               {return <li key={names.id} onClick={() => this.channelId(names.id)}>{names.name}</li>}
               )} 
            </ul>   
        );

        return(
            <div className="chanels-panel col-md-4" >
                {/* <div class="toggle-button" onClick={this.props.hidePanel}></div> */}
                <h6>Wybierz kanał</h6> 
                {allNames}
            </div>
            
        )
    }
}

export default ChannelsPanel;