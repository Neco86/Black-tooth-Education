import React,{ PureComponent } from 'react'
import ClassItem from './components/ClassItem'
import { Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from '../class/store'
import { Redirect } from 'react-router-dom'
class Page3 extends PureComponent{
    render(){
        const { tabBarPage,addClass,handleAddClass,handleManageClass,manage } = this.props;
             return addClass?<Redirect to='/home/addClass'/>:
             manage?<Redirect to='/home/manageClass'/>:
             (
                <div>
                    <ClassItem title='小学一年级数学' itemKey='1'/>
                    <ClassItem title='小学一年级数学' itemKey='2'/>
                    <ClassItem title='小学一年级数学' itemKey='3'/>
                    <ClassItem title='小学一年级数学' itemKey='4'/>
                    <ClassItem title='小学一年级数学' itemKey='5'/>
                    {tabBarPage==='greenTab'?
                    <div>
                        <Button className="manage" onClick={()=>{handleManageClass()}}>
                            <i className="iconfont">&#xe604;</i>
                        </Button>
                        <Button className='add' onClick={()=>{handleAddClass()}}>
                            <i className="iconfont">&#xe74a;</i>
                        </Button>
                    </div>
                    :null}
                </div>
            )
       
    }
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleAddClass(){
                    dispatch(actionCreators.handleAddClass())
                },
                handleManageClass(){
                    dispatch(actionCreators.handleManageClass())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        tabBarPage:state.getIn(['home','tabBarPage']),
        addClass:state.getIn(['class','addClass']),
        manage:state.getIn(['class','manage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page3);