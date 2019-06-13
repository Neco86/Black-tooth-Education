import React,{ PureComponent } from 'react'
import { Tabs,  Badge } from 'antd-mobile'
import { TabWrapper } from '../style'
import Intro from '../intro'
import Comment from '../comment'
import { connect } from 'react-redux'
import { actionCreators }   from '../store'
import { Bottom } from '../../news/style'
class Tab extends PureComponent{
render(){
    const { tabPage,changeFirst,changeSecond,markCount } = this.props;
    const tabs = [
      { title: <Badge>简介</Badge> },
      { title: <Badge>评论(<span>{markCount}</span>)</Badge> }
    ];
         return(
            <TabWrapper>
                <Tabs tabs={tabs}
                  initialPage={tabPage}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { index===0?changeFirst():changeSecond() }}
                >
                  <Intro/>
                  <Comment/>
                </Tabs>
                {tabPage===1?
                <Bottom>
                    <input type='text' placeholder='我来说两句'/>
                    <i className='iconfont'>&#xe607;</i>
                </Bottom>
                :null}
            </TabWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            changeFirst(){
               dispatch(actionCreators.changeFirst())
              },
            changeSecond(){
              dispatch(actionCreators.changeSecond())
            }
    }
}
const mapStateToProps=(state)=>{
    return {
        tabPage:state.getIn(['videos','tabPage']),
        markCount:state.getIn(['videos','markCount'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tab);