import React,{ PureComponent } from 'react'
import { TryItemWrapper } from './style'

class TryItem extends PureComponent{
render(){
         return(
            <TryItemWrapper>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="left">
                    <img src={this.props.photoPic} alt=""/>
                    <span>{this.props.name}</span>
                </div>
                <div className='right'>
                    <span className="yes">同意申请</span>
                    <span>拒绝申请</span>
                </div>
            </TryItemWrapper>
        )
   
}
}
export default TryItem