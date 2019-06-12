import React,{ PureComponent } from 'react'
import { Header } from './style'
import Tab2 from './components/Tab2'
class Page5 extends PureComponent{
    render(){
             return(
                <div style={{backgroundColor:'white',height:'100%'}}>
                    <Header style={{zIndex:2}}>分类</Header>
                    <Tab2 style={{zIndex:1}}/>
                </div>
            )
       
    }
}
export default Page5