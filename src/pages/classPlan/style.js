import styled from 'styled-components'
export const ButtonWrapper = styled.div`
    text-align:center;
`
export const Button = styled.div`
    display:inline-block;
    width:70px;
    height:30px;
    background-color:white;
    border:1px solid #9966ff;
    margin:20px auto;
    border-radius:5px;
    line-height:30px;
    color:#9966ff;
    text-align:center;
    margin-left:-10px;
    &.delete{
        margin-left:20px;
        border:1px solid #d9001b;
        color:#d9001b;
    }
`
export const Tab2Wrapper = styled.div`
    overflow:hidden;
    height:${(props)=>props.h};
    .am-tabs-default-bar-tab-active{
        color:#cc99ff;
    }
    .am-tabs-default-bar-underline{
        border:1px solid #cc99ff;
    }
    .am-tabs-default-bar-left .am-tabs-default-bar-content, .am-tabs-default-bar-right .am-tabs-default-bar-content{
        height:${(props)=>props.h};
    }
    .detail{
        height: ${(props)=>props.h};
        width: 100%;
        backgroundColor: #fff; 
    }
`