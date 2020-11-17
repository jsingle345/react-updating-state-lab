// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor () {
        super()

        this.state = {
            errors: [], 
            user: null, 
            settings: {
                bitrate: 8, 
                video: {
                    resolution: '1080p'
                }
            }
        } 
     }

     handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
     }

     handleResolution = () => {
         this.setState({
             settings: {
                 ...this.state.settings,
                 video: {
                     resolution: '720p'
                 }
             }
         })
     }
        render(){
            console.log(this.state)
            return(
                <div>
                  <button className="bitrate" onClick={this.handleBitrateClick} >Increase BitRate</button>
                    <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>  
                </div>
                
            )
        }
}