import styled from 'styled-components'
export const SearchWrapper = styled.div`
    .am-search-cancel{
        color:#cc99ff;
    }
`
export const TabWrapper = styled.div`
    .am-tabs-default-bar-tab-active{
        color:#cc99ff;
    }
    .am-tabs-default-bar-underline{
        border:1px #cc99ff solid;
    }
`
export const NewsItemWrapper = styled.div`
    width:100%
    height:100px;
    margin-bottom:10px;
    padding:10px 15px;
    background-color:white;
    overflow:hidden;
    display:flex;
    .dec,.img{
        flex:1;
    }
    .dec{
        padding-top:10px;
        padding-right:10px;
        font-size:16px;
        line-height:18px;
    }
    .img{
        img{
            width:100%;
            height:100%;
        }
    }
`
export const VideoWrapper = styled.div`
    width:100%
    height:180px;
    background-color:white;
    margin-bottom:10px;
    .video{
        width:100%
        height:140px;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        i{
            font-size:54px;
            color:#8a8a8a;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-27px;
            margin-top:-27px;
        }
    }
    .bottom{
        width:100%
        height:40px;
        .left{
            // background-color:pink;
            height:100%;
            width:50%;
            float:left;
            img{
                width:32px;
                height:32px;
                border-radius:50%;
                margin:4px 10px 0 10px;
            }
            .name{
                position:relative;
                top:-10px;
            }
        }
        .right{
            // background-color:yellow;            
            height:100%;
            width:50%;
            float:left;
            padding-right:2px;
            span{
                float:right;
                font-size:16px;
                line-height:40px;
                margin-right:6px;
            }
        }

    }
`
export const TryItemWrapper=styled.div`
    height:110px;
    background-color:white;
    padding:15px;
    margin-bottom:10px;
    .title{
        font-size:16px;
        margin:10px;
    }
    .left{
        float:left;
        width:40%;
        img{
            width:32px;
            height:32px;
            border-radius:50%;
            margin:10px;
        }
        span{
            position:relative;
            top:-20px;
        }
    }
    .right{
        float:left;
        width:60%;
        position:relative;
        top:15px;
        span{
            display:inline-block;
            padding:6px;
            border-radius:10px;
            color:#cc99ff
            border:1px solid #cc99ff;
            &.yes{
                margin-right:10px;
            }
        }
    }
`
export const ClassItemWrapper = styled.div`
    height:55px;
    width:100%;
    background-color:white;
    div{
        float:left;
        width:50%;
    }
    .title{
        font-size:18px;
        line-height:55px;
        padding-left:15px;
    }
    .button{
        line-height:55px;
        padding:5px;
        font-size:12px;
        border-radius:10px;
        color:#cc99ff
        border:1px solid #cc99ff;
        &.first{
            margin-right:14px;
        }
}
`
export const UserWrapper=styled.div`
    height:90px;
    padding:25px 15px;
    background-color:white;
    margin-bottom:15px;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
        margin-right:15px;
    }
    span{
        position:relative;
        top:-18px;
    }
`
export const Tab2Wrapper = styled.div`
    height:100%;
    overflow:hidden;
    padding-top:55px;
    .am-tabs-default-bar-tab-active{
        color:#cc99ff;
    }
    .am-tabs-default-bar-underline{
        border:1px solid #cc99ff;
    }
    .am-tabs-default-bar-left .am-tabs-default-bar-content, .am-tabs-default-bar-right .am-tabs-default-bar-content{
        height:300px;
    }
`
export const ClassItem = styled.div`
    height:35px;
    width:100px;
    float:left;
    margin:15px;
    line-height:35px;
    text-align:center;
    background-color:#f9f9f9;
`