import React,{ PureComponent } from 'react'
import VideoItem from './components/VideoItem'
import { connect } from 'react-redux'
class Video extends PureComponent{
    render(){
            const { videoItemList } = this.props;
             return(
                <div>
                    {videoItemList.map((item,index) => {
                        return <VideoItem 
                                videoPic={item.get('videoPic')} 
                                photoPic={item.get('photoPic')}
                                name={item.get('name')}
                                like={item.get('like')}
                                comment={item.get('comment')}
                                itemKey={item.get('key')}
                                key={item.get('key')}
                                />
                    })}
                </div>
            )
       
    }
}
const mapStateToProps=(state)=>{
    return {
        videoItemList:state.getIn(['home','videoItemList'])
    }
    }
export default connect(mapStateToProps,null)(Video);