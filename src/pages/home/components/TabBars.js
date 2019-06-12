import React,{ Component } from 'react'
import { TabBar } from 'antd-mobile';
import Page1  from '../page1'
import Page2 from '../page2'
import Page3 from '../page3'
import Page4 from '../page4'
import { connect } from 'react-redux'
import { actionCreators }   from '../store'
class TabBars extends Component{
    renderContent(pageText) {
        return (
          pageText==='page1'?<Page1/>:
          pageText==='page2'?<Page2/>:
          pageText==='page3'?<Page3/>:
          pageText==='page4'?<Page4/>:null
        );
      }
    render(){
      const { selectedTab,setBlueTab,setRedTab,setGreenTab,setYellowTab } =this.props;
             return(
                <div>
                   <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
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
                            selected={selectedTab === 'blueTab'}
                            onPress={() => {setBlueTab()}}
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
                            selected={selectedTab === 'redTab'}
                            onPress={() => {
                            setRedTab()
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
                            selected={selectedTab === 'greenTab'}
                            onPress={() => {
                              setGreenTab()
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
                            selected={selectedTab === 'yellowTab'}
                            onPress={() => {
                              setYellowTab()
                            }}
                          >
                            {this.renderContent('page4')}
                          </TabBar.Item>
                        </TabBar>
                      </div>
                </div>
            )
   
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
            setBlueTab(){
              dispatch(actionCreators.setBlueTab())
              },
            setRedTab(){
              dispatch(actionCreators.setRedTab())
              },
            setGreenTab(){
              dispatch(actionCreators.setGreenTab())
              },
            setYellowTab(){
              dispatch(actionCreators.setYellowTab())
              },
        }
}
const mapStateToProps=(state)=>{
    return {
        selectedTab:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TabBars);