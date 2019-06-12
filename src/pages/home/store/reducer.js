import * as actionTypes from './actionTypes'
import { BACKNEWS } from '../../news/store/actionTypes'
import { BACKVIDEOS } from '../../videos/store/actionTypes'
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
    ],
    videoItemList:[
        {key:1,
        videoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        photoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        name:"发布者1",
        like:123,
        comment:64},
        {key:2,
        videoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        photoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        name:"发布者2",
        like:123,
        comment:64},
        {key:3,
        videoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        photoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        name:"发布者3",
        like:123,
        comment:64},
        {key:4,
        videoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        photoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        name:"发布者4",
        like:123,
        comment:64},
        {key:5,
        videoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        photoPic:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg",
        name:"发布者5",
        like:123,
        comment:64}
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
        case BACKVIDEOS:
            return state.set('tabPage',1)
        default: 
            return state
    }
}