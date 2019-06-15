import React,{ PureComponent } from 'react'
import { Wrapper,RegisterSucc } from '../login/style'
import { ErrorWrapper,Wrapper as NavBarWrapper }  from '../../common/style'

class MyChangeNext extends PureComponent{
render(){
        const { history } = this.props;
        return(
            <ErrorWrapper>
                <NavBarWrapper>
                    <i className='iconfont' onClick={()=>{history.push('/home')}}>&#xe646;</i>
                    <span>返回</span>
                </NavBarWrapper>
                <Wrapper>
                    <i className='iconfont'>&#xe657;</i>
                    <RegisterSucc>
                        
                            <div>修改成功</div>
                    </RegisterSucc>    
                </Wrapper>
            </ErrorWrapper>
            )
}
}

export default MyChangeNext;