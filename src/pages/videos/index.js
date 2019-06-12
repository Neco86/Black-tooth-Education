import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Wrapper } from '../../common/style'
import { actionCreators }   from './store'
import { Video } from './style'
import Tab from './components/Tab'
class Videos extends PureComponent{
render(){
    const { handleBackVideos,history,video } = this.props;
         return(
            <div>
                <Wrapper style={{position:'fixed'}}>
                    <i className='iconfont' onClick={()=>{handleBackVideos(history)}}>&#xe646;</i>
                    <span>返回</span>
                </Wrapper> 
                <Video>
                    <video src={video.get('videoSrc')}/>
                </Video> 
                <Tab/>
                {/*this.props.match.params.itemKey*/}
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleBackVideos(history){
            dispatch(actionCreators.handleBackVideos())
            history.push('/home')
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        video:state.getIn(['videos','video'])
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Videos);