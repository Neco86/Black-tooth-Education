import React,{ PureComponent } from 'react'
import { Page6Header,Time,ClassItem } from './style'

class Page6 extends PureComponent{
    getTime(){
        return "今天(6月5号)"
    }
    render(){
             return(
                <div>
                    <Page6Header>日历</Page6Header>
                    <Time>
                        <div className='time'>{this.getTime()}</div>
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