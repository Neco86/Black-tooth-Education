import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../../common/navbar'
import { ClassItem,Bottom,Circle,Button } from './style'
class Shop extends PureComponent{
render(){
    const course=[
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
         return(
            <div>
                <NavBar title='购物车' to='/home'/>
                {course.map((item,index) => ( 
                <ClassItem key={index}>
                    <div className='left'>
                        <Circle/>
                    </div>
                    <div className='right'>
                        <img src={item.imgSrc} alt="" style={{width:'120px'}}/>
                        <div className="des">
                          <div className='title'>{item.title}</div>
                          <div className='cost'>{item.cost}</div>
                        </div>
                    </div>
                  
                </ClassItem>)
                )}
                <Bottom>
                    <div className='left'>
                        <Circle/>
                        <span style={{position:'relative',left:'40px'}}>全选</span>
                    </div>
                    <div className='right'>
                        <span>合计:</span>
                        <span style={{color:'#f30',margin:'0 5px'}}>¥0</span>
                        <Button style={{marginLeft:'15px'}}>结算</Button>
                    </div>
                </Bottom>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                    history.push('/home')
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
        // addClass:state.getIn(['class','addClass']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);