import React, {Component} from "react";

class ChannelsPanel extends Component {
    

    //dzięki metodzie poniżej panel z kanałami nie renderuje się po każdym kliknięciu w pojedyncze 
    //wideo na liście wyświetlonych wideo danego kanału
     shouldComponentUpdate(nextProps, nextState) {
        return nextProps.channelList != this.props.channelList        
    }

    componentWillUpdate() {
        console.log("panel willupdate"); 
    }



    render() {
        const channelId = (id) => {
            this.props.selectChannel(id)
        }
        const activeLanguage = {
            color: "inherit"
        }
                
        return (
            <div className="channels-panel" >
                {/* <div class="toggle-button" onClick={this.props.hidePanel}></div> */}
                <h3>Wybierz kanał</h3>
                <h6 onClick={this.props.polish} style={Object.assign( {} , this.props.language === 0 && activeLanguage)} >Polski</h6> 
                <h6 onClick={this.props.english} style={Object.assign( {} , this.props.language === 1 && activeLanguage)} >Angielski</h6>
                <ul>
                    {this.props.channelList.map(names => 
                        <li key={names.id} onClick={() => channelId(names.id)}>{names.name}</li>
                        
                    )}
                    
                </ul>
            </div>        
        )   
    }

     
}

export default ChannelsPanel;