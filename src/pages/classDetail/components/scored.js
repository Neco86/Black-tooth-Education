import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { OpacityWrapper,Score,ScoreItem,TjButton } from '../style'
import { actionCreators } from '../store'
import PicPicker from '../components/picPicker'
import { TextareaItem } from 'antd-mobile';

class Scored extends PureComponent{
render(){
        const { handleScoreBack,handleType1,handleType2,handleType3,scoreType } =this.props;
         return(
            <div>
                  <OpacityWrapper onClick={()=>{handleScoreBack()}}/>
                  <Score>
                    <ScoreItem onClick={()=>{handleType1()}}>星级评价</ScoreItem>
                    <ScoreItem onClick={()=>{handleType2()}}>贴图</ScoreItem>
                    <ScoreItem onClick={()=>{handleType3()}}>写评价</ScoreItem>
                  </Score>
                  {scoreType==='type1'?
                  <Score className='scoreType'>
                    <div className='title'>您对此次试听是否满意</div>
                    <div className='starWrapper'>
                        <span className='dec'>课程</span>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe630;</i>
                        <i className='iconfont star'>&#xe630;</i>
                    </div>
                    <div className='starWrapper'>
                        <span className='dec'>教室</span>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe630;</i>
                        <i className='iconfont star'>&#xe630;</i>
                    </div>
                    <div className='starWrapper'>
                        <span className='dec'>机构</span>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe6b0;</i>
                        <i className='iconfont star'>&#xe630;</i>
                        <i className='iconfont star'>&#xe630;</i>
                    </div>
                    <TjButton>提交</TjButton>
                  </Score>
                  :null}
                  {scoreType==='type2'?
                  <Score>
                    <PicPicker/>
                    <TjButton>提交</TjButton>
                  </Score>
                  :null}
                  {scoreType==='type3'?
                  <Score>
                      <TextareaItem
                        placeholder="请输入您的宝贵评价"
                        ref={el => this.autoFocusInst = el}
                        rows={5}
                        style={{border:'1px solid #cc99ff',borderRadius:'5px',width:'95%',fontSize:'16px'}}
                      />
                    <TjButton>提交</TjButton>
                  </Score>:
                  null}
                </div>
        )
   
    }
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleScoreBack(){
                  dispatch(actionCreators.handleScoreBack())
                },
                handleType1(){
                  dispatch(actionCreators.handleType1())
                },
                handleType2(){
                  dispatch(actionCreators.handleType2())
                },
                handleType3(){
                  dispatch(actionCreators.handleType3())
                }
            }
}
const mapStateToProps=(state)=>{
    return {
        scoreType:state.getIn(['classDetail','scoreType']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Scored);