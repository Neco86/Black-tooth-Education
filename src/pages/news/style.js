import styled from 'styled-components'
export const NewsTitle = styled.div`
    height:70px;
    background-color:white;
    padding:15px 20px;
    padding-top:60px;
    h1{
        font-size:22px;
    }
`
export const NewsSrc = styled.div`
    height:20px;
    background-color:white;
    color:#858585;
    padding-left:20px;
`
export const NewsItem = styled.div`
    background-color:white;
    padding:30px 20px;
    p{
        text-indent:2em;
        line-height:16px;
    } 
`
export const Comment = styled.div`
    padding:15px 20px;
    background-color:white;
    margin-top:5px;
    .commentTitle{
        font-size:16px;
        margin:10px 0;
    }
    img{
        width:25px;
        height:25px;
        border-radius:50%;
    }
    .name{
        position:relative;
        top:-8px;
        left:5px;
    }
    .comment{
        margin:5px 0;
        font-size:13px;
    }
    margin-bottom:45px;
`
export const Bottom = styled.div`
    height:25px;
    width:100%;
    position:fixed;
    bottom:0;
    padding:10px 20px;
    background-color:white;
    input{
        border:none;
        border-radius:20px;
        height:22px;
        background-color:#f6f6f6;
        padding:2px;
        padding-left:10px;
        width:78%;
    }
    .iconfont{
        margin-left:10px;
    }
`