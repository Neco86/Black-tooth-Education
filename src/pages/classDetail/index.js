import React,{ PureComponent } from 'react'
import Info from './components/info'
import Apply from './components/apply'

class ClassDetail extends PureComponent{
render(){
        const {apply } = this.props;
         return !apply?
            <Apply item={this.props.match.params.itemKey.slice(0,4)}/>
              :
            <Info/>
       }  
}
export default ClassDetail;