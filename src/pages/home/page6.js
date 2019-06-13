import React,{ PureComponent } from 'react'
import { Page6Header,Time,ClassItem } from './style'
import { Picker,List } from 'antd-mobile';

class Page6 extends PureComponent{
    getTime(){
        return "2019/6/5(今日)"
    }
    render(){
        const seasons = [
          [
            {
              label: '2019',
              value: '2019',
            },
            {
              label: '2018',
              value: '2018',
            },
          ],
          [
            {
              label: '6',
              value: '6',
            },
            {
              label: '5',
              value: '5',
            },
          ],
          [
            {
              label: '5',
              value: '5',
            },
            {
              label: '4',
              value: '4',
            },
          ]
        ];
             return(
                <div>
                    <Page6Header>
                        <Picker
                          data={seasons}
                          title="选择日期"
                          cascade={false}
                          extra={this.getTime()}
                          onChange={v => this.setState({ sValue: v })}
                          onOk={v => this.setState({ sValue: v })}
                        >
                          <List.Item arrow="horizontal">日历</List.Item>
                        </Picker>
                    </Page6Header>
                    <Time>
                        {/*<div className='time'>{this.getTime()}</div>*/}
                        <div className="class">共有<span>1</span>节课</div>
                    </Time>
                    <ClassItem>
                        <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg" alt=""/>
                        <div className="des">
                            <div className='title'>小学一年级数学</div>
                            <div className='time'>时间:8:00-10:00</div>
                            <div className='place'>地点:XXX</div>
                        </div>
                    </ClassItem>
                </div>
            )
       
    }
}
export default Page6