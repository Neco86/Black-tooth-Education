import React,{ PureComponent } from 'react'
import { Tabs } from 'antd-mobile'
import { Tab2Wrapper,ClassItem } from './style'
class Tab2 extends PureComponent{
render(){
    const tabs = [
      { title: '小学' },
      { title: '初中' },
      { title: '高中' },
    ];
         return(
            <Tab2Wrapper>
                <Tabs tabs={tabs}
                  initalPage={'t1'}
                  tabBarPosition="left"
                  tabDirection="vertical"
                >
                  <div style={{height: '100%',width: '100%', backgroundColor: '#fff' }}>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                  </div>
                  <div style={{height: '100%',width: '100%', backgroundColor: '#fff' }}>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                  </div>
                  <div style={{height: '100%',width: '100%', backgroundColor: '#fff' }}>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                    <ClassItem>数学</ClassItem>
                  </div>
                </Tabs>
            </Tab2Wrapper>
        )
   
}
}
export default Tab2;