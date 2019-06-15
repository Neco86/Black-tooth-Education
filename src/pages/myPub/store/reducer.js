import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    pub:'xxxxx',
    edit:false,
    delete:false
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.EDITPUB:
            return state.set('edit',true)
        case actionTypes.CHANGEPUB:
            return state.set('pub',action.data)
        case actionTypes.EDITFINISH:
            return state.merge({pub:action.data,edit:false})
        case actionTypes.ADDPUB:
            return state.set('edit',true)
        case actionTypes.DELETEPUB:
            return state.merge({pub:'',edit:false,delete:false})
        case actionTypes.SHOWDELETE:
            return state.set('delete',true)
        case actionTypes.HIDEDELETE:
            return state.set('delete',false)
        default: 
            return state
    }
}