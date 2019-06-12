import React,{ PureComponent } from 'react'
import { NewsItemWrapper } from './style'
import { withRouter } from "react-router-dom";

class NewsItem extends PureComponent{
render(){
        const { dec,img,itemKey }=this.props;
         return(
            <NewsItemWrapper onClick={()=>{this.props.history.push('/home/news/'+itemKey)}}>
                <div className="dec">
                    {dec}
                </div>
                <div className='img'>
                    <img src={img} alt=""/>
                </div>
            </NewsItemWrapper>
        )
   
}
}
export default withRouter(NewsItem);