import React,{ PureComponent } from 'react'
import User from './components/User'
import  { Item } from './style'
class Page4 extends PureComponent{
    render(){
             return(
                <div>
                    <User
                        photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                        name="用户名"
                    />
                    <Item>
                        公告
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                    <Item>
                        修改信息
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                </div>
            )
       
    }
}
export default Page4