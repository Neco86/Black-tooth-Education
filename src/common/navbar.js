import React,{ PureComponent } from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

class NavBar extends PureComponent{
render(){
         return(
            <Wrapper>
                <Link to={this.props.to}>
                    <i className='iconfont'>&#xe646;</i>
                </Link>
                <span>{this.props.title}</span>
            </Wrapper>
        )
   
}
}
export default NavBar