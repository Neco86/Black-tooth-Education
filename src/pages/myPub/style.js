import styled from 'styled-components'
export const Wrapper = styled.div`
    text-align:center;
    padding:20px 0;
    background-color:white;
    color:#cc99ff;
    i{
        font-size:45px;
    }
    div{
        font-size:16px;
        margin-top:5px;
    }
`
export const Button = styled.div`
    padding:5px;
    background-color:white;
    border:1px solid #cc99ff;
    color:#cc99ff;
    width:75px;
    height:25px;
    margin-right:25px;
    margin-top:20px;
    float:right;
    border-radius:15px;
    font-size:14px;
    line-height:25px;
    text-align:center;
`
export const Delete = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:black;
    opacity:0.4;
`
export const DeleteItem = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:220px;
    background-color:white;
    text-align:center;
    .iconfont{
        float:right;
        margin:8px;
        font-size:20px;
    }
    .sure{
        margin-top:78px;
        margin-bottom:40px;
        font-size:16px;
    }
    .button{
        width:145px;
        height:30px;
        display:inline-block;
        background-color:#cc99ff;
        line-height:30px;
        color:white;
        border-radius:15px;
    }
`