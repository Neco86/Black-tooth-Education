import styled from 'styled-components'
export const Wrapper = styled.div`
    .title{
        padding:5px 8px;
        color:#b6b6b6;
    }
`
export const ClassItem = styled.div`
    height:120px;
    width:100%;
    background-color:white;
    padding:20px 10px; 
    box-sizing:border-box;
    img{
        width:150px;
        height:75px;
        display:block;
        float:left;
        margin-right:10px;
    }
    .des{
        float:left;
    }
    .title{
        font-size:16px;
    }
    .cost{
        padding:8px 8px;
        color:#77d21c;
        margin:12px 0;
    }
    .none{
        text-align:center;
        line-height:80px;
        color:#797979;
    }
`