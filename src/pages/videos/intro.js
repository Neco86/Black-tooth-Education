import React,{ PureComponent,Fragment } from 'react'
import { Comment as Comments } from '../news/style'
import { connect } from 'react-redux'
class Intro extends PureComponent{
render(){
        const { about } =this.props;
         return(
                <Comments>
                {
                    <Fragment>
                        <img src={about.get('photo')} alt=""/>
                        <span className='name'>{about.get('name')}</span>
                        <div className='comment'>
                            {about.get('comment')}
                        </div>
                    </Fragment>
                }
                </Comments>
        )
   
}
}

const mapStateToProps=(state)=>{
    return {
        about:state.getIn(['videos','about'])
    }
    }
export default connect(mapStateToProps,null)(Intro);