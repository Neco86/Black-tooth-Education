import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,Button } from './style'
import { InputItem } from 'antd-mobile';
import { Link } from 'react-router-dom'
class Next extends PureComponent{
render(){
         return(
            <>
                <NavBar title='返回' to={'/register/'+this.props.match.params.type}/>
                <RegisterWrapper>
                    <InputItem>用户名:</InputItem>
                    <InputItem type='password'>密码:</InputItem>
                    <InputItem type='password'>确认密码:</InputItem>
                    <InputItem placeholder='请输入手机号'>手机号:</InputItem>
                    <Link to={'/register/finish/'+this.props.match.params.type}>
                        <Button>完成注册</Button>
                    </Link>
                </RegisterWrapper>
            </>
        )
   
}
}
export default Next