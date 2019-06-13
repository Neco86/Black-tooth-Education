import React,{ PureComponent } from 'react'
import { Wrapper } from '../../common/style'
import { connect } from 'react-redux'
// import { actionCreators } from './store'
import Tab2 from './tab'
class ClassPan extends PureComponent{
render(){
    const { history,addClassBack } = this.props;
         return(
            <div>
                <Wrapper>
                    <i className='iconfont' onClick={()=>{addClassBack(history)}}>&#xe646;</i>
                    <span>课程安排详情</span>
                </Wrapper>
                <Tab2/>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                    history.push('/home')
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
        // addClass:state.getIn(['class','addClass']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassPan);