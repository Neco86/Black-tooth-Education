import React,{ PureComponent } from 'react'
import User from './components/User'
import  { Item,ItemList,UserWrapper } from './style'
import { withRouter } from 'react-router-dom'

class Page7 extends PureComponent{
    render(){
        const { history } = this.props;
             return(
                <div>
                    <UserWrapper>
                        <User
                        photoPic="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"
                        name="用户名"
                        />
                        <div className="shop" onClick={()=>{history.push('/home/my/shop')}}>
                            <i className='iconfont'>&#xe608;</i>
                            <span>购物车</span>
                        </div>
                    </UserWrapper>
                    <ItemList>
                        <div className='item' onClick={()=>{history.push('/home/my/course')}}>
                            <div className='iconfont'>&#xe62c;</div>
                            <div>
                                我的课程
                            </div>
                        </div>
                        <div className='item' onClick={()=>{history.push('/home/my/try')}}>
                            <div className='iconfont'>&#xe603;</div>
                            <div>
                                我的试听
                            </div>
                        </div>
                        <div className='item' onClick={()=>{history.push('/home/my/money')}}>
                            <div className='iconfont'>&#xe64b;</div>
                            <div>
                                余额
                            </div>
                        </div><div className='item' onClick={()=>{history.push('/home/my/comment')}}>
                            <div className='iconfont'>&#xe607;</div>
                            <div>
                                我的评价
                            </div>
                        </div>
                    </ItemList>
                    <Item>
                        修改个人信息
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                    <Item>
                        设置
                        <i className='iconfont'>&#xe646;</i>
                    </Item>
                </div>
            )
       
    }
}
export default withRouter(Page7)