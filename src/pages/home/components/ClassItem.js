import React,{ PureComponent } from 'react'
import { ClassItemWrapper } from './style'
import { withRouter } from "react-router-dom";

class ClassItem extends PureComponent{
render(){
         return(
            <ClassItemWrapper>
                <div>
                    <span className='title'>{this.props.title}</span>
                </div>
                <div>
                    <span className='button first' onClick={()=>{
                        this.props.history.push('/home/classChange/'+this.props.itemKey);}}>信息修改</span>
                    <span className='button' onClick={()=>{
                        this.props.history.push('/home/classPlan/'+this.props.itemKey);}}>课程安排</span>
                </div>
            </ClassItemWrapper>
        )
   
}
}
export default withRouter(ClassItem);