import React,{ PureComponent } from 'react'
import { ClassItemWrapper } from './style'

class ClassItem extends PureComponent{
render(){
         return(
            <ClassItemWrapper>
                <div>
                    <span className='title'>{this.props.title}</span>
                </div>
                <div>
                    <span className='button first'>信息修改</span>
                    <span className='button'>课程安排</span>
                </div>
            </ClassItemWrapper>
        )
   
}
}
export default ClassItem