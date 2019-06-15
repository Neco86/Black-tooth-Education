import React,{ PureComponent } from 'react'
import User from './components/User'
import  { Item } from './style'
import { withRouter } from "react-router-dom";

class Page4 extends PureComponent{
    render(){
             return(
                <div>
                    <User
                        photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                        name="用户名"
                    />
                    <Item onClick={()=>{this.props.history.push('/home/myPub')}}>
                        公告
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                    <Item onClick={()=>{this.props.history.push('/home/myChange')}}>
                        修改信息
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                </div>
            )
       
    }
}
export default withRouter(Page4)