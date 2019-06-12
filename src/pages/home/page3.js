import React,{ PureComponent } from 'react'
import ClassItem from './components/ClassItem'
import { Button } from './style'
import { connect } from 'react-redux'
class Page3 extends PureComponent{
    render(){
        const { tabBarPage } = this.props;
             return(
                <div>
                    <ClassItem title='小学一年级数学'/>
                    <ClassItem title='小学一年级数学'/>
                    <ClassItem title='小学一年级数学'/>
                    <ClassItem title='小学一年级数学'/>
                    <ClassItem title='小学一年级数学'/>
                    {tabBarPage==='greenTab'?
                    <div>
                        <Button className="manage">
                            <i className="iconfont">&#xe604;</i>
                        </Button>
                        <Button className='add'>
                            <i className="iconfont">&#xe74a;</i>
                        </Button>
                    </div>
                    :null}
                </div>
            )
       
    }
}
const mapStateToProps=(state)=>{
    return {
        tabBarPage:state.getIn(['home','tabBarPage']),

    }
}
export default connect(mapStateToProps,null)(Page3);