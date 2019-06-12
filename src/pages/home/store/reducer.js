import * as actionTypes from './actionTypes'
import { BACKNEWS } from '../../news/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tabPage:0,//0 1
    tabBarPage:"blueTab",//blueTab redTab greenTab yellowTab
    newsItemList:[
        {key:1,
        dec:"1 5G前线|华为手机产品线总裁亲测5G速率:下载超1Gbps",
        img:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"},
        {key:2,
        dec:"2 5G前线|华为手机产品线总裁亲测5G速率:下载超1Gbps",
        img:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"},
        {key:3,
        dec:"3 5G前线|华为手机产品线总裁亲测5G速率:下载超1Gbps",
        img:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"},
        {key:4,
        dec:"4 5G前线|华为手机产品线总裁亲测5G速率:下载超1Gbps",
        img:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"},
        {key:5,
        dec:"5 5G前线|华为手机产品线总裁亲测5G速率:下载超1Gbps",
        img:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg"}
    ]
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
        case BACKNEWS:
            return state.set('tabPage',0)
        default: 
            return state
    }
}