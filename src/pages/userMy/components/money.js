import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../../common/navbar'
import { TotalMoneyWrapper,Button2 } from './style'

class Money extends PureComponent{
render(){
         return(
            <div>
                <NavBar title='余额' to='/home'/>
                <TotalMoneyWrapper>
                    <div>总余额</div>
                    <div>
                        <span className='iconfont'>&#xe64b;</span>
                        <span style={{marginLeft:'15px'}}>0.00</span>
                    </div>
                </TotalMoneyWrapper>
                <Button2 style={{position:'relative',left:'50%',marginLeft:'-90px',marginTop:'20px'}}>充值</Button2>
                <Button2 style={{position:'relative',left:'50%',marginLeft:'-90px'}}>付费记录</Button2>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                    history.push('/home')
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
        // addClass:state.getIn(['class','addClass']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Money);