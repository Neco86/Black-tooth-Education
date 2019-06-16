import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../../common/navbar'
import { ClassItem,Button } from './style'

class Try extends PureComponent{
render(){
        const course=[
        {
          key:'1',
          imgSrc:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
          title:'小学一年级数学'
        },
        {
          key:'2',
          imgSrc:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
          title:'小学一年级语文'
        }
        ];
         return(
            <div>
                <NavBar title='我的试听' to='/home'/>
                {course.map((item,index) => ( 
                <ClassItem key={index} style={{paddingLeft:'20px'}}>
                    <div>
                        <img src={item.imgSrc} alt=""/>
                        <div className="des">
                          <div className='title'>{item.title}</div>
                          <Button style={{marginTop:'10px'}}>去评价</Button>
                        </div>
                    </div>
                  
                </ClassItem>)
                )}
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
export default connect(mapStateToProps,mapDispatchToProps)(Try);