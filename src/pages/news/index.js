import React,{ PureComponent,Fragment } from 'react'
import { Wrapper } from '../../common/style'
import { connect } from 'react-redux'
import { actionCreators }   from './store'
import { NewsTitle,NewsSrc,NewsItem,Comment,Bottom } from './style'
class News extends PureComponent{
render(){
    const { handleBackNews,history,news } = this.props;
         return(
            <div>  
                <Wrapper style={{position:'fixed'}}>
                    <i className='iconfont' onClick={()=>{handleBackNews(history)}}>&#xe646;</i>
                    <span>返回</span>
                </Wrapper>
                <NewsTitle>
                    <h1>
                        {news.get('newsTitle')}
                    </h1>
                </NewsTitle>
                <NewsSrc>
                    {news.get('newsSrc')}
                </NewsSrc>
                <NewsItem>
                     {news.get('newsItem').map((item,index) => {return <div key={index}><p>{item}</p><br/></div>})}
                </NewsItem>
                <Comment>
                    <div className='commentTitle'>全部评论(<span>{news.get('commentCount')}</span>)</div>
                    {news.get('comment').map((item,index)=>{
                        return <Fragment key={index}>
                        <img src={item.get('photo')} alt=""/>
                        <span className='name'>{item.get('name')}</span>
                        <div className='comment'>
                            {item.get('comment')}
                        </div>
                        </Fragment>
                    })}
                </Comment>
                <Bottom>
                    <input type='text' placeholder='我来说两句'/>
                    <i className='iconfont'>&#xe606;</i>
                </Bottom>
                {/*this.props.match.params.itemKey*/}
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleBackNews(history){
            dispatch(actionCreators.handleBackNews())
            history.push('/home')
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        news:state.getIn(['news','news'])
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(News);