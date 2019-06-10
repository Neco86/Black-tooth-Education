import React,{ PureComponent } from 'react'
import Logo from '../../statics/logo.png'
import { Wrapper,ButtonWrapper,Button } from './style'
import { Link } from 'react-router-dom'

class Enter extends PureComponent{
render(){
         return(
            <Wrapper>
                <img src={Logo} alt=""/>
                <ButtonWrapper>
                    <Link to='/register'>
                        <Button>注册</Button>
                    </Link>
                    <Link to='/login'>
                        <Button>登录</Button>
                    </Link>
                </ButtonWrapper>
            </Wrapper>
        )
   
}
}
export default Enter