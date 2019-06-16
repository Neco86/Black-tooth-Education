import React,{ PureComponent } from 'react'
import { Wrapper } from './style'
import Shop from './components/shop'
import Course from './components/course'
import Try from './components/try'
import Money from './components/money'
import Comment from './components/comment'

class UserMy extends PureComponent{
render(){
    const { type } = this.props.match.params;
    
         return(
            <Wrapper>
                { type==='shop'?<Shop/>:null}
                { type==='course'?<Course/>:null}
                { type==='try'?<Try/>:null}
                { type==='money'?<Money/>:null}
                { type==='comment'?<Comment/>:null}

            </Wrapper>
        )
   
}
}
export default UserMy;