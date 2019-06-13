import React,{ PureComponent } from 'react'
import { Tabs } from 'antd-mobile'
import { Tab2Wrapper } from './style'
import Detail from './detail'
class Tab2 extends PureComponent{
render(){
    const tabs = [
      { title: '第一次课' },
      { title: '第二次课' },
      { title: '第三次课' },
      { title: '添加' },
    ];
         return(
            <Tab2Wrapper h='400px'>
                <Tabs tabs={tabs}
                  initalPage={'t1'}
                  tabBarPosition="left"
                  tabDirection="vertical"
                >
                  <div className='detail'>
                    <Detail/>
                  </div>
                  <div className='detail'>
                    <Detail/>
                  </div>
                  <div className='detail'>
                    <Detail/>
                  </div>
                  <div className='detail'>
                    <Detail/>
                  </div>
                </Tabs>
            </Tab2Wrapper>
        )
   
}
}
export default Tab2;