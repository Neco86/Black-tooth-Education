import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,AddressWrapper,AgeWrapper,IntroWrapper,Button } from './style'
import { InputItem,PickerView,TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom'
class groupRegister extends PureComponent{
render(){
        const province = [
          {
            label: '北京',
            value: '01',
            children: [
              {
                label: '东城区',
                value: '01-1',
              },
              {
                label: '西城区',
                value: '01-2',
              },
              {
                label: '崇文区',
                value: '01-3',
              },
              {
                label: '宣武区',
                value: '01-4',
              },
            ],
          },
          {
            label: '浙江',
            value: '02',
            children: [
              {
                label: '杭州',
                value: '02-1',
                children: [
                  {
                    label: '西湖区',
                    value: '02-1-1',
                  },
                  {
                    label: '上城区',
                    value: '02-1-2',
                  },
                  {
                    label: '江干区',
                    value: '02-1-3',
                  },
                  {
                    label: '下城区',
                    value: '02-1-4',
                  },
                ],
              },
              {
                label: '宁波',
                value: '02-2',
                children: [
                  {
                    label: 'xx区',
                    value: '02-2-1',
                  },
                  {
                    label: 'yy区',
                    value: '02-2-2',
                  },
                ],
              },
              {
                label: '温州',
                value: '02-3',
              },
              {
                label: '嘉兴',
                value: '02-4',
              },
              {
                label: '湖州',
                value: '02-5',
              },
              {
                label: '绍兴',
                value: '02-6',
              },
            ],
          },
        ];
         return(
            <>
                <NavBar title='教育机构注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem>标识码:</InputItem>
                    <InputItem>教育领域:</InputItem>
                    <AddressWrapper>
                        <div className='address'>店面地址:</div>
                        <div className='province'>
                            <PickerView
                              data={province}
                              value={['02', '02-1', '02-1-1']}
                            />
                        </div>
                    </AddressWrapper>
                    <InputItem>详细地址:</InputItem>
                    <InputItem>联系方式:</InputItem>
                    <AgeWrapper>
                        <div className='age'>教育适龄:</div>
                        <div className='ageChoose'>
                            <InputItem className='input'/>
                            <span/>
                            <InputItem className='input'/>
                        </div>
                    </AgeWrapper>
                    <IntroWrapper>
                        <div className='title'>简介:</div>
                        <div className='jianjie'>
                            <TextareaItem  rows={3} className='input'/>
                        </div>
                    </IntroWrapper>
                    <Link to='/register/next/group'>
                      <Button className='next'>下一步</Button>
                    </Link>
                </RegisterWrapper>
            </>
        )
   
}
}
export default groupRegister