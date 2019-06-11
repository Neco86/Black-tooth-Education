import React,{ PureComponent } from 'react'
import { VideoWrapper } from './style'
class VideoItem extends PureComponent{
render(){
         return(
            <VideoWrapper>
                <div className='video'>
                    <img src={this.props.videoPic} alt=""/>
                    <i className="iconfont">&#xe640;</i>
                </div>
                <div className='bottom'>
                    <div className="left">
                        <img src={this.props.photoPic} alt=""/>
                        <span className='name'>{this.props.name}</span>
                    </div>
                    <div className='right'>
                        <span>{this.props.comment}</span>
                        <span className='iconfont'>&#xe607;</span>
                        <span>{this.props.like}</span>
                        <span className='iconfont'>&#xe64d;</span>
                    </div>
                </div>
            </VideoWrapper>
        )
   
}
}
export default VideoItem