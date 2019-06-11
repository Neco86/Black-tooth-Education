import React,{ PureComponent } from 'react'
import { Tabs,  Badge } from 'antd-mobile'
import { TabWrapper } from './style'
import News from '../news'
import Video from '../video'
class Tab extends PureComponent{
render(){
    const tabs = [
      { title: <Badge>新闻</Badge> },
      { title: <Badge>视频</Badge> }
    ];
         return(
            <TabWrapper>
                <Tabs tabs={tabs}
                  initialPage={0}
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
export default Tab