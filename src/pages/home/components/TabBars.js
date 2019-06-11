import React,{ Component } from 'react'
import { TabBar } from 'antd-mobile';
import Page1  from '../page1'
import Page2 from '../page2'
import Page3 from '../page3'
import Page4 from '../page4'
class TabBars extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'yellowTab',
          hidden: false,
          fullScreen: true,
        };
    }
    renderContent(pageText) {
        return (
          pageText==='page1'?<Page1/>:
          pageText==='page2'?<Page2/>:
          pageText==='page3'?<Page3/>:
          pageText==='page4'?<Page4/>:null
        );
      }
    render(){
             return(
                <>
                   <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                        <TabBar
                          unselectedTintColor="#949494"
                          tintColor="#cc99ff"
                          barTintColor="white"
                        >
                          <TabBar.Item
                            title="首页"
                            key="page1"
                            icon={
                                <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe61a;</i> 
                            }
                            selectedIcon={
                              <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe61a;</i> 
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'blueTab',
                              });
                            }}
                          >
                            {this.renderContent('page1')}
                          </TabBar.Item>
                          <TabBar.Item
                            icon={
                                <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe603;</i> 
                            }
                            selectedIcon={
                              <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe603;</i> 
                            }
                            title="试听申请"
                            key="page2"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'redTab',
                              });
                            }}
                          >
                            {this.renderContent('page2')}
                          </TabBar.Item>
                          <TabBar.Item
                            icon={
                                <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe62c;</i> 
                            }
                            selectedIcon={
                              <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe62c;</i> 
                            }
                            title="课程"
                            key="page3"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'greenTab',
                              });
                            }}
                          >
                            {this.renderContent('page3')}
                          </TabBar.Item>
                          <TabBar.Item
                            icon={
                                <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe629;</i> 
                            }
                            selectedIcon={
                              <i 
                                className='iconfont' 
                                style={{
                                    display:'inline-block',
                                    width:'22px',
                                    height:'22px'
                                }}
                                >&#xe629;</i> 
                            }
                            title="我的"
                            key="page4"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'yellowTab',
                              });
                            }}
                          >
                            {this.renderContent('page4')}
                          </TabBar.Item>
                        </TabBar>
                      </div>
                </>
            )
   
}
}
export default TabBars