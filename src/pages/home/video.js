import React,{ PureComponent } from 'react'
import VideoItem from './components/VideoItem'
class Video extends PureComponent{
    render(){
             return(
                <>
                    <VideoItem 
                    videoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    name="发布者"
                    like='123'
                    comment='64'
                    />
                    <VideoItem 
                    videoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    name="发布者"
                    like='123'
                    comment='64'
                    />
                    <VideoItem 
                    videoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    name="发布者"
                    like='123'
                    comment='64'
                    />
                    <VideoItem 
                    videoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                    name="发布者"
                    like='123'
                    comment='64'
                    />
                </>
            )
       
    }
}
export default Video