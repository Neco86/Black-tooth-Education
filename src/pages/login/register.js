import React,{ PureComponent } from 'react'
import { Wrapper,Button,ButtonWrapper,Back } from './style' 
import { Link } from 'react-router-dom'

class Register extends PureComponent{
render(){
         return(
            <Wrapper className='register'>
                <ButtonWrapper className='register'>
                    <Link to='/register/group'>
                        <Button className='register'>教育机构</Button>
                    </Link>
                    <Link to='/register/teacher'>
                        <Button className='register'>个人教师</Button>
                    </Link>
                    <Link to='/register/student'>
                        <Button className='register'>学生家长</Button>
                    </Link>
                </ButtonWrapper>
                <Link to='/'>
                    <Back>取消注册</Back>
                </Link>
            </Wrapper>
        )
   
}
}
export default Register