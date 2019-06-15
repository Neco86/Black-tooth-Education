import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    apply:false,
    buy:false,
    bought:false,
    scored:false,
    scoreType:''
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.HANDLEAPPLY:
            return state.set('apply',true)
        case actionTypes.HANDLECANCELAPPLY:
            return state.set('apply',false)
        case actionTypes.HANDLEBACK:
            return state.merge({'apply':false,'buy':false})
        case actionTypes.HANDLEBUY:
            return state.set('buy',true)
        case actionTypes.HANDLEBOUGHT:
            return state.set('bought',true)
        case actionTypes.HANDLEBACKHOME:
            return state.merge({'buy':false,'bought':false})
        case actionTypes.HANDLESCORE:
            return state.set('scored',true)
        case actionTypes.HANDLESCOREBACK:
            return state.merge({'scored':false,'scoreType':''})
        case actionTypes.HANDLETYPE1:
            return state.set('scoreType','type1')
        case actionTypes.HANDLETYPE2:
            return state.set('scoreType','type2')
        case actionTypes.HANDLETYPE3:
            return state.set('scoreType','type3')
        default: 
            return state
    }
}