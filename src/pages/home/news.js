import React,{ PureComponent } from 'react'
import NewsItem from './components/NewsItem'
import { connect } from 'react-redux'
class News extends PureComponent{
    render(){
        const { newsItemList } = this.props;
             return(
                <div>
                    {newsItemList.map((item,index) => {
                        return <NewsItem 
                                dec={item.get('dec')} 
                                img={item.get('img')}
                                itemKey={item.get('key')}
                                key={item.get('key')}
                                />
                    })}
                </div>
            )
       
    }
}
const mapStateToProps=(state)=>{
    return {
        newsItemList:state.getIn(['home','newsItemList'])
    }
    }
export default connect(mapStateToProps,null)(News);