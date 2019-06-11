import React,{ PureComponent } from 'react'
import { Wrapper,Button,ButtonWrapper,Back } from './style' 
import { Link } from 'react-router-dom'
import { actionCreators }   from './store'
import { connect } from 'react-redux'
class Register extends PureComponent{
render(){
         const { history,handleGroupClick,handleTeacherClick,handleStudentClick } = this.props;
         return(
            <Wrapper className='register'>
                <ButtonWrapper className='register'>
                        <Button className='register' onClick={()=>{handleGroupClick(history)}}>教育机构</Button>
                        <Button className='register' onClick={()=>{handleTeacherClick(history)}}>个人教师</Button>
                        <Button className='register' onClick={()=>handleStudentClick(history)}>学生家长</Button>
                </ButtonWrapper>
                <Link to='/'>
                    <Back>取消注册</Back>
                </Link>
            </Wrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            handleGroupClick(history){
                dispatch(actionCreators.groupRegister())
                history.push('/register/group')
            },
            handleTeacherClick(history){
                dispatch(actionCreators.teacherRegister())
                history.push('register/teacher')
            },
            handleStudentClick(history){
                dispatch(actionCreators.studentRegister())
                history.push('register/student')
            }
        }
}
export default connect(null,mapDispatchToProps)(Register); 