import React,{ PureComponent } from 'react'
import { UserWrapper } from './style'

class User extends PureComponent{
render(){
         return(
            <UserWrapper>
                <img src={this.props.photoPic} alt=""/>
                <span>{this.props.name}</span>
            </UserWrapper>
        )
   
}
}
export default User