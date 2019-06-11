import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { InputItem,TextareaItem } from 'antd-mobile';
import { RegisterWrapper,SexWrapper,AgeWrapper,IntroWrapper,Button } from './style'
import { Link } from 'react-router-dom'
import { actionCreators }   from './store'
import { connect } from 'react-redux'
class teacherRegister extends PureComponent{
render(){
        const { name,changeName,sex,changeSex,age,changeAge,jyly,changeJyly,cjnx,changeCjnx,
                jysll,changeJysll,jyslh,changeJyslh,sfzh,changeSfzh,jj,changeJj} = this.props;
         return(
            <div>
                <NavBar title='个人教师注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem placeholder='请输入姓名' value={name} onChange={(e)=>changeName(e)}>姓名:</InputItem>
                    <SexWrapper>
                        <div className='sex'>性别:</div>
                        <div className='choose'>
                            <select onChange={(e)=>{changeSex(e)}} value={sex}>
                              <option value ="male" >男</option>
                              <option value ="female">女</option>
                            </select>
                        </div>
                    </SexWrapper>
                    <InputItem placeholder='请输入您的年龄' value={age} onChange={(e)=>{changeAge(e)}}>年龄:</InputItem>
                    <InputItem value={jyly} onChange={(e)=>{changeJyly(e)}}>教育领域:</InputItem>
                    <InputItem value={cjnx} onChange={(e)=>{changeCjnx(e)}}>从教年限:</InputItem>
                    <AgeWrapper>
                        <div className='age'>教育适龄:</div>
                        <div className='ageChoose'>
                            <InputItem className='input' value={jysll} onChange={(e)=>{changeJysll(e)}}/>
                            <span/>
                            <InputItem className='input' value={jyslh} onChange={(e)=>{changeJyslh(e)}}/>
                        </div>
                    </AgeWrapper>
                    <InputItem placeholder='请输入您的真实身份证号' value={sfzh} onChange={(e)=>{changeSfzh(e)}}>身份证号:</InputItem>
                    <IntroWrapper>
                        <div className='title'>简介:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input'value={jj} onChange={(e)=>{changeJj(e)}}/>
                        </div>
                    </IntroWrapper>
                    <Link to='/register/next/teacher'>
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
            changeSex(e){
              dispatch(actionCreators.changeSex(e.target.value))
            },
            changeAge(e){
              dispatch(actionCreators.changeAge(e))
            },
            changeJyly(e){
              dispatch(actionCreators.changeJyly(e))
            },
            changeCjnx(e){
              dispatch(actionCreators.changeCjnx(e))
            },
            changeJysll(e){
              dispatch(actionCreators.changeJysll(e))
            },
            changeJyslh(e){
              dispatch(actionCreators.changeJyslh(e))
            },
            changeSfzh(e){
              dispatch(actionCreators.changeSfzh(e))
            },
            changeJj(e){
              dispatch(actionCreators.changeJj(e))
            },
        }
}
const mapStateToProps=(state)=>{
    return {
        name:state.getIn(['login','name']),
        sex:state.getIn(['login','sex']),
        age:state.getIn(['login','age']),
        jyly:state.getIn(['login','jyly']),
        cjnx:state.getIn(['login','cjnx']),
        jysll:state.getIn(['login','jysll']),
        jyslh:state.getIn(['login','jyslh']),
        sfzh:state.getIn(['login','sfzh']),
        jj:state.getIn(['login','jj']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(teacherRegister);