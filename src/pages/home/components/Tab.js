import React,{ PureComponent } from 'react'
import { Tabs,  Badge } from 'antd-mobile'
import { TabWrapper } from './style'
import News from '../news'
import Video from '../video'
import { connect } from 'react-redux'
class Tab extends PureComponent{
render(){
    const tabs = [
      { title: <Badge>新闻</Badge> },
      { title: <Badge>视频</Badge> }
    ];
    const { tabPage } = this.props;
         return(
            <TabWrapper>
                <Tabs tabs={tabs}
                  initialPage={tabPage}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <News/>
                  <Video/>
                </Tabs>
            </TabWrapper>
        )
   
}
}
const mapStateToProps=(state)=>{
    return {
        tabPage:state.getIn(['home','tabPage']),

    }
}
export default connect(mapStateToProps,null)(Tab);