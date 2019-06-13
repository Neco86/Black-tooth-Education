import React,{ PureComponent } from 'react'
import { InputItem,TextareaItem } from 'antd-mobile';
import { RegisterWrapper,IntroWrapper } from '../login/style'
import { Button,ButtonWrapper } from './style'

class Detail extends PureComponent{
render(){
         return(
            <div>
                <RegisterWrapper>
                    <InputItem placeholder='xxxxx'>时间:</InputItem>
                    <InputItem placeholder='xxxxx'>地点:</InputItem>
                    <InputItem placeholder='xxxxx'>教师:</InputItem>
                    <IntroWrapper>
                        <div className='title'>作业:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input'/>
                        </div>
                    </IntroWrapper>
                </RegisterWrapper>
                <ButtonWrapper>
                    <Button>确认</Button>
                    <Button className='delete'>删除</Button>
                </ButtonWrapper>
            </div>
        )
   
}
}

export default Detail;