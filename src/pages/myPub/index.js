import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { Wrapper,Button,Delete,DeleteItem } from './style'
import { TextareaItem } from 'antd-mobile';
import { connect } from 'react-redux'
import { actionCreators } from './store'
class MyPub extends PureComponent{
render(){
        const { pub,edit,editPub,editFinish,changePub,addPub,
            deletePub,showDelete,deleteWin,hideDelete } = this.props;
         return(
            <div>
                <NavBar title='公告' to='/home'/>
                {pub===''&&!edit?
                <div>
                    <Wrapper>
                        <i className='iconfont'>&#xe602;</i>
                        <div>暂无公告</div>
                    </Wrapper>
                    <Button onClick={()=>{addPub()}}>编辑公告</Button>
                </div>
                :
                <div>
                    <TextareaItem  
                    className='input' 
                    value={pub} 
                    disabled={!edit} 
                    autoFocus={!edit}
                    onChange={(e)=>{changePub(e)}}/>
                    <Button onClick={()=>{showDelete()}}>删除公告</Button>
                    {!edit?<Button onClick={()=>{editPub()}}>修改公告</Button>:
                    <Button onClick={()=>{editFinish(pub)}}>确认修改</Button>}
                </div>}
                {deleteWin?
                    <div>
                        <Delete onClick={()=>{hideDelete()}}/>
                        <DeleteItem>
                            <div className='iconfont' onClick={()=>{hideDelete()}}>&#xe65a;</div>
                            <div className='sure'>确认删除公告吗</div>
                            <div className='button' onClick={()=>{deletePub()}}>确认</div>
                        </DeleteItem>
                    </div>
                :null}
            </div>
        )
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            editPub(){
               dispatch(actionCreators.editPub())
              },
            editFinish(data){
                dispatch(actionCreators.editFinish(data))
                // console.log(data);
            },
            changePub(e){
                dispatch(actionCreators.changePub(e))
                // console.log(e)
            },
            addPub(){
                dispatch(actionCreators.addPub())
            },
            deletePub(){
                dispatch(actionCreators.deletePub())
            },
            showDelete(){
                dispatch(actionCreators.showDelete())
            },
            hideDelete(){
                dispatch(actionCreators.hideDelete())
            }
        }
}
const mapStateToProps=(state)=>{
    return {
        pub:state.getIn(['myPub','pub']),
        edit:state.getIn(['myPub','edit']),
        deleteWin:state.getIn(['myPub','delete']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPub);