// import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    news:{
        newsTitle:'习近平抵达莫斯科开始对俄罗斯联邦进行国事访问',
        newsSrc:'新华社新闻 06/05 18:24',
        newsItem:['新华社莫斯科6月5日电（记者 栾海 李志晖）国家主席习近平5日乘专机抵达莫斯科，开始对俄罗斯联邦进行国事访问。','当地时间中午12时，习近平乘坐的专机抵达莫斯科伏努科沃专机机场。习近平步出舱门，俄罗斯政府高级官员在舷梯旁热情迎接。'],
        commentCount:1,
        comment:[{photo:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1887225900.jpg',name:'发布者',comment:'习近平代表中国政府和中国人民，向俄罗斯政府和人民致以诚挚问候和良好祝愿。习近平强调，今年，中俄两国将迎来建交70周年的历史性时刻。在双方共同努力下，中俄全面战略协作伙伴关系进入历史最好时期，成为当今世界大国、邻国和睦相处、合作共赢的典范。两国政治互信牢固，高层交往和各领域合作机制完备，在国际事务中开展密切协作，为维护地区及世界和平稳定和国际公平正义发挥了积极的建设性作用。'}]
    }
})

export default (state=defaultState,action)=>{
    switch (action.type){
        // case actionTypes.LOGIN_CHANGE_USERNAME:
        //     return state.set('username',action.data)
        default: 
            return state
    }
}