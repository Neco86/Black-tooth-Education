import React,{ PureComponent } from 'react'
import { Wrapper } from '../../common/style'
import { connect } from 'react-redux'
// import { actionCreators } from './store'
import { InputItem,PickerView,TextareaItem } from 'antd-mobile';
import { RegisterWrapper,AddressWrapper,IntroWrapper } from '../login/style'
import { province } from '../login/province'
import { Button,ButtonWrapper } from './style'
class ChangeClass extends PureComponent{
render(){
    const { history,addClassBack } = this.props;
         return(
            <div>
                <Wrapper>
                    <i className='iconfont' onClick={()=>{addClassBack(history)}}>&#xe646;</i>
                    <span>课程信息修改</span>
                </Wrapper>
                <RegisterWrapper>
                    <InputItem placeholder='xxxxx'>课程名称:</InputItem>
                    <InputItem placeholder='xxx'>课程类型:</InputItem>
                    <AddressWrapper>
                        <div className='address'>店面地址:</div>
                        <div className='province'>
                            <PickerView
                              data={province}
                            />
                        </div>
                    </AddressWrapper>
                    <InputItem>具体地址:</InputItem>
                    <InputItem>缴费金额:</InputItem>
                    <InputItem>缴费周期:</InputItem>
                    <IntroWrapper>
                        <div className='title'>简介:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input'/>
                        </div>
                    </IntroWrapper>
                </RegisterWrapper>
                <ButtonWrapper>
                    <Button>完成添加</Button>
                    <Button className='delete'>删除课程</Button>
                </ButtonWrapper>
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
export default connect(mapStateToProps,mapDispatchToProps)(ChangeClass);