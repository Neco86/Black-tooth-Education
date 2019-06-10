import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,SexWrapper,AddressWrapper,Button } from './style'
import { InputItem,PickerView } from 'antd-mobile';
import { Link } from 'react-router-dom'
class studentRegister extends PureComponent{
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
                <NavBar title='学生家长注册' to='/register'/>
                <RegisterWrapper>
                    <InputItem placeholder='请输入姓名'>孩子姓名:</InputItem>
                    <SexWrapper>
                        <div className='sex'>性别:</div>
                        <div className='choose'>
                            <select>
                              <option value ="male" >男</option>
                              <option value ="female">女</option>
                            </select>
                        </div>
                    </SexWrapper>
                    <InputItem placeholder='请输入您的姓名'>家长姓名:</InputItem>
                    <InputItem placeholder='请输入选课意向'>选课意向:</InputItem>
                    <AddressWrapper>
                        <div className='address'>上课地址:</div>
                        <div className='province'>
                            <PickerView
                              data={province}
                              value={['02', '02-1', '02-1-1']}
                            />
                        </div>
                    </AddressWrapper>
                    <Link to='/register/next/student'>
                      <Button className='next'>下一步</Button>
                    </Link>
                </RegisterWrapper>
            </>
        )
   
}
}
export default studentRegister