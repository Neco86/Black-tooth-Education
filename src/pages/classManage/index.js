import React,{ PureComponent } from 'react'
import { Wrapper } from '../../common/style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Page6 from '../home/page6'

class ManageClass extends PureComponent{
render(){
    const { history,classManageBack } = this.props;
         return(
            <div>
                <Wrapper>
                    <i className='iconfont' onClick={()=>{classManageBack(history)}}>&#xe646;</i>
                    <span>课程表</span>
                </Wrapper>
                <Page6/>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                classManageBack(history){
                    dispatch(actionCreators.classManageBack())
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
export default connect(mapStateToProps,mapDispatchToProps)(ManageClass);