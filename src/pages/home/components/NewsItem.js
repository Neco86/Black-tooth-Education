import React,{ PureComponent } from 'react'
import { NewsItemWrapper } from './style'

class NewsItem extends PureComponent{
render(){
         return(
            <NewsItemWrapper>
                <div className="dec">
                    {this.props.dec}
                </div>
                <div className='img'>
                    <img src={this.props.img} alt=""/>
                </div>
            </NewsItemWrapper>
        )
   
}
}
export default NewsItem