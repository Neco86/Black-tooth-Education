import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,AddressWrapper,AgeWrapper,IntroWrapper,Button } from './style'
import { InputItem,PickerView,TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { actionCreators }   from './store'
import { connect } from 'react-redux'
import { province } from './province'
class groupRegister extends PureComponent{
render(){
        const { bzm,jyly,dmdz,xxdz,lxfs,jysll,jyslh,jj,
                changeBzm,changeJyly,changeDmdz,changeXxdz,changeLxfs,changeJysll,changeJyslh,changeJj
         } =this.props;
         return(
            <div>
                <NavBar title='教育机构注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem value={bzm} onChange={(e)=>{changeBzm(e)}}>标识码:</InputItem>
                    <InputItem value={jyly} onChange={(e)=>{changeJyly(e)}}>教育领域:</InputItem>
                    <AddressWrapper>
                        <div className='address'>店面地址:</div>
                        <div className='province'>
                            <PickerView
                              data={province}
                              value={dmdz}
                              onChange={(e)=>{changeDmdz(e)}}
                            />
                        </div>
                    </AddressWrapper>
                    <InputItem value={xxdz} onChange={(e)=>{changeXxdz(e)}}>详细地址:</InputItem>
                    <InputItem value={lxfs} onChange={(e)=>{changeLxfs(e)}}>联系方式:</InputItem>
                    <AgeWrapper>
                        <div className='age'>教育适龄:</div>
                        <div className='ageChoose'>
                            <InputItem className='input'value={jysll} onChange={(e)=>{changeJysll(e)}}/>
                            <span/>
                            <InputItem className='input' value={jyslh} onChange={(e)=>{changeJyslh(e)}}/>
                        </div>
                    </AgeWrapper>
                    <IntroWrapper>
                        <div className='title'>简介:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input' value={jj} onChange={(e)=>{changeJj(e)}}/>
                        </div>
                    </IntroWrapper>
                    <Link to='/register/next/group'>
                      <Button className='next'>下一步</Button>
                    </Link>
                </RegisterWrapper>
            </div>
        )
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            changeBzm(e){
               dispatch(actionCreators.changeBzm(e))
              },
            changeJyly(e){
              dispatch(actionCreators.changeJyly(e))
            },
            changeDmdz(e){
              dispatch(actionCreators.changeDmdz(e))
            },
            changeXxdz(e){
              dispatch(actionCreators.changeXxdz(e))
            },
            changeLxfs(e){
              dispatch(actionCreators.changeLxfs(e))
            },
            changeJysll(e){
              dispatch(actionCreators.changeJysll(e))
            },
            changeJyslh(e){
              dispatch(actionCreators.changeJyslh(e))
            },
            changeJj(e){
              dispatch(actionCreators.changeJj(e))
            },
        }
}
const mapStateToProps=(state)=>{
    return {
        bzm:state.getIn(['login','bzm']),
        jyly:state.getIn(['login','jyly']),
        dmdz:state.getIn(['login','dmdz']),
        xxdz:state.getIn(['login','xxdz']),
        lxfs:state.getIn(['login','lxfs']),
        jysll:state.getIn(['login','jysll']),
        jyslh:state.getIn(['login','jyslh']),
        jj:state.getIn(['login','jj']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(groupRegister);