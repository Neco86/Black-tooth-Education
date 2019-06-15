import React,{ PureComponent } from 'react'
import { Tabs } from 'antd-mobile'
import { Tab2Wrapper,ClassItem } from './style'
import { withRouter } from "react-router-dom";

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
                    <ClassItem onClick={()=>{this.props.history.push('/home/classify/小学数学')}}>数学</ClassItem>
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
export default withRouter(Tab2);