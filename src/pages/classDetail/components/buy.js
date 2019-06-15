import React,{ PureComponent } from 'react'
import { OpacityWrapper,Sure,Button } from '../style'
import Bought from './bought'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Buy extends PureComponent{
render(){
    const { handleBack,bought,handleBought } = this.props;
         return(
            <div>
              <OpacityWrapper onClick={()=>{handleBack()}}/>
              <Sure>
                <img src='https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg' alt=''/>
                <span style={{marginRight:'15px'}}>用户名</span>
                <span>正在使用</span>
                <span>余额</span>
                <span>购买</span>
                <i className='iconfont' style={{float:'right'}} onClick={()=>{handleBack()}}>&#xe65a;</i>
                <div style={{height:'1px',width:'100%',backgroundColor:'#c9c9c9'}}/>
                <div>小学一年级数学 [XXX机构]</div>
                <div className='cost'>¥300</div>
                <div style={{textAlign:'center'}}>
                  <Button 
                  style={{textAlign:'center',backgroundColor:'#cc99ff',color:'white'}}
                  onClick={()=>{handleBought()}}
                  >确认支付</Button>                      
                </div>
              </Sure>
              {bought?<Bought/>:null}
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleBack(){
                  dispatch(actionCreators.handleBack())
                },
                handleBought(){
                  dispatch(actionCreators.handleBought())
                },
            }
}
const mapStateToProps=(state)=>{
    return {
        bought:state.getIn(['classDetail','bought'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Buy);