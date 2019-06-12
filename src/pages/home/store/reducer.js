import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tabPage:0,//0 1
    tabBarPage:"yellowTab"//blueTab redTab greenTab yellowTab
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETBLUETAB:
            return state.set('tabBarPage','blueTab')
        case actionTypes.SETREDTAB:
            return state.set('tabBarPage','redTab')
        case actionTypes.SETGREENTAB:
            return state.set('tabBarPage','greenTab')
        case actionTypes.SETYELLOWTAB:
            return state.set('tabBarPage','yellowTab')
        default: 
            return state
    }
}