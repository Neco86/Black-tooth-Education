import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tabPage:0,
    video:{
        videoSrc:''
    },
    markCount:3,
    mark:[
    {
        photo:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
        name:'发布者',
        comment:"新华社莫斯科6月5日电（记者 栾海 李志晖）国家主席习近平5日乘专机抵达莫斯科，开始对俄罗斯联邦进行国事访问。当地时间中午12时，习近平乘坐的专机抵达莫斯科伏努科沃专机机场。习近平步出舱门，俄罗斯政府高级官员在舷梯旁热情迎接。"
    },
    {
        photo:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
        name:'发布者',
        comment:"新华社莫斯科6月5日电（记者 栾海 李志晖）国家主席习近平5日乘专机抵达莫斯科，开始对俄罗斯联邦进行国事访问。当地时间中午12时，习近平乘坐的专机抵达莫斯科伏努科沃专机机场。习近平步出舱门，俄罗斯政府高级官员在舷梯旁热情迎接。"
    },
    {
        photo:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
        name:'发布者',
        comment:"新华社莫斯科6月5日电（记者 栾海 李志晖）国家主席习近平5日乘专机抵达莫斯科，开始对俄罗斯联邦进行国事访问。当地时间中午12时，习近平乘坐的专机抵达莫斯科伏努科沃专机机场。习近平步出舱门，俄罗斯政府高级官员在舷梯旁热情迎接。"
    }
    ],
    about:{
        photo:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',
        name:'发布者',
        comment:"新华社莫斯科6月5日电（记者 栾海 李志晖）国家主席习近平5日乘专机抵达莫斯科，开始对俄罗斯联邦进行国事访问。当地时间中午12时，习近平乘坐的专机抵达莫斯科伏努科沃专机机场。习近平步出舱门，俄罗斯政府高级官员在舷梯旁热情迎接。"
    }
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGEFIRST:
            return state.set('tabPage',0)
        case actionTypes.CHANGESECOND:
            return state.set('tabPage',1)
        default: 
            return state
    }
}