import React,{ PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import { SearchBar } from 'antd-mobile';
import { SearchWrapper } from '../home/components/style'
import { Wrapper,ClassItem } from './style'
/*this.props.match.params.type*/
class Classify extends PureComponent{
render(){
        const searchResult=[
        {
          key:'1',
          imgSrc:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
          title:'小学一年级数学',
          cost:'学费XXX元/课'
        },
        {
          key:'2',
          imgSrc:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
          title:'小学一年级语文',
          cost:'学费XXX元/课'
        }
        ];
        // const searchResult=[]
         return(
            <Wrapper>
              <SearchWrapper>
                  <SearchBar placeholder="Search" maxLength={8} value={this.props.match.params.type}/>
              </SearchWrapper>
              <div className='title'>相关课程</div>
               {searchResult.map((item,index) => {
                return item.title.indexOf(this.props.match.params.type.slice(0,2))!==-1&&item.title.indexOf(this.props.match.params.type.slice(2,4))!==-1?
                <ClassItem key={index} onClick={()=>{this.props.history.push('/home/classDetail/小学数学'+item.key)}}>
                  <img src={item.imgSrc} alt=""/>
                  <div className="des">
                      <div className='title'>{item.title}</div>
                      <div className='cost'>{item.cost}</div>
                  </div>
                </ClassItem>:null}
                )}
               {searchResult.length===0?
                <ClassItem>
                  <div className='none'>
                    暂无相关课程
                  </div>
                </ClassItem>
                :null}
            </Wrapper>
        )
   
}
}
export default withRouter(Classify);