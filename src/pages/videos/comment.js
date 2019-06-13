import React,{ PureComponent,Fragment } from 'react'
import { Comment as Comments } from '../news/style'
import { connect } from 'react-redux'
class Comment extends PureComponent{
render(){
        const { mark } =this.props;
         return(
                <Comments>
                    {mark.map((item,index)=>{
                        return <Fragment key={index}>
                        <img src={item.get('photo')} alt=""/>
                        <span className='name'>{item.get('name')}</span>
                        <div className='comment'>
                            {item.get('comment')}
                        </div>
                        </Fragment>
                    })}
                </Comments>
        )
   
}
}

const mapStateToProps=(state)=>{
    return {
        mark:state.getIn(['videos','mark'])
    }
    }
export default connect(mapStateToProps,null)(Comment);