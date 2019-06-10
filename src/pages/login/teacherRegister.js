import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { InputItem,TextareaItem } from 'antd-mobile';
import { RegisterWrapper,SexWrapper,AgeWrapper,IntroWrapper,Button } from './style'
import { Link } from 'react-router-dom'
class teacherRegister extends PureComponent{
render(){
         return(
            <>
                <NavBar title='个人教师注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem placeholder='请输入姓名'>姓名:</InputItem>
                    <SexWrapper>
                        <div className='sex'>性别:</div>
                        <div className='choose'>
                            <select>
                              <option value ="male" >男</option>
                              <option value ="female">女</option>
                            </select>
                        </div>
                    </SexWrapper>
                    <InputItem placeholder='请输入您的年龄'>年龄:</InputItem>
                    <InputItem>教育领域:</InputItem>
                    <InputItem>从教年限:</InputItem>
                    <AgeWrapper>
                        <div className='age'>教育适龄:</div>
                        <div className='ageChoose'>
                            <InputItem className='input'/>
                            <span/>
                            <InputItem className='input'/>
                        </div>
                    </AgeWrapper>
                    <InputItem placeholder='请输入您的真实身份证号'>身份证号:</InputItem>
                    <IntroWrapper>
                        <div className='title'>简介:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input'/>
                        </div>
                    </IntroWrapper>
                    <Link to='/register/next/teacher'>
                      <Button className='next'>下一步</Button>
                    </Link>
                </RegisterWrapper>
                
            </>
        )
   
}
}
export default teacherRegister