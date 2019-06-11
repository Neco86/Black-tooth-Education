import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,SexWrapper,AddressWrapper,Button } from './style'
import { InputItem,PickerView } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { province } from './province'
import { actionCreators }   from './store'
import { connect } from 'react-redux'
class studentRegister extends PureComponent{
render(){
        const { name,changeName,sex,changeSex,parentName,changeParentName,
              xkyx,changeXkyx,skdz,changeSkdz
         } = this.props;
         return(
            <div>
                <NavBar title='学生家长注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem placeholder='请输入姓名' value={name} onChange={(e)=>{changeName(e)}}>孩子姓名:</InputItem>
                    <SexWrapper>
                        <div className='sex'>性别:</div>
                        <div className='choose'>
                            <select value={sex} onChange={(e)=>{changeSex(e)}}>
                              <option value ="male" >男</option>
                              <option value ="female">女</option>
                            </select>
                        </div>
                    </SexWrapper>
                    <InputItem placeholder='请输入您的姓名' value={parentName} onChange={(e)=>{changeParentName(e)}}>家长姓名:</InputItem>
                    <InputItem placeholder='请输入选课意向' value={xkyx} onChange={(e)=>{changeXkyx(e)}}>选课意向:</InputItem>
                    <AddressWrapper>
                        <div className='address'>上课地址:</div>
                        <div className='province'>
                            <PickerView
                              data={province}
                              value={skdz}
                              onChange={(e)=>{changeSkdz(e)}}
                            />
                        </div>
                    </AddressWrapper>
                    <Link to='/register/next/student'>
                      <Button className='next'>下一步</Button>
                    </Link>
                </RegisterWrapper>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            changeName(e){
               dispatch(actionCreators.changeName(e))
              },
            changeAge(e){
              dispatch(actionCreators.changeAge(e))
            },
            changeSex(e){
              dispatch(actionCreators.changeSex(e.target.value))
            },
            changeParentName(e){
              dispatch(actionCreators.changeParentName(e))
            },
            changeXkyx(e){
              dispatch(actionCreators.changeXkyx(e))
            },
            changeSkdz(e){
              dispatch(actionCreators.changeDmdz(e))
            },
        }
}
const mapStateToProps=(state)=>{
    return {
        name:state.getIn(['login','name']),
        age:state.getIn(['login','age']),
        sex:state.getIn(['login','sex']),
        parentName:state.getIn(['login','parentName']),
        xkyx:state.getIn(['login','xkyx']),
        skdz:state.getIn(['login','dmdz']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(studentRegister);