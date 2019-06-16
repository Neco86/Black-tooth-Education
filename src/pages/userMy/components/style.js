import styled from 'styled-components'
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
        margin-top:10px;
    }
    .title{
        font-size:16px;
    }
    .cost{
        padding:8px 8px;
        color:#77d21c;
        margin:12px 0;
    }
    .left{
        width:50px;
        height:100%;
        position:relative;
    }
    display:flex;
    .right{
        flex:1;
    }
`
export const Circle = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    border:1px solid black;
    position:absolute;
    top:50%;
    margin-top:-5px;
    left:15px;
`

export const Bottom = styled.div`
    height:50px;
    width:100%;
    background-color:white;
    position:absolute;
    bottom:0;
    padding:20px 10px;
    box-sizing:border-box;
    .left{
        width:50px;
        height:100%;
        position:relative;
    }
    display:flex;
    .right{
        flex:1;
        text-align:right;
        margin-top:-10px;
    }
`
export const Button = styled.div`
    width:55px;
    height:30px;
    border:1px solid #cc99ff;
    color:#cc99ff;
    display:inline-block;
    line-height:30px;
    border-radius:5px;
    text-align:center;
`
export const TotalMoneyWrapper = styled.div`
    height:180px;
    width:100%;
    background-color:white;
    text-align:center;
    box-sizing:border-box;
    padding:40px 0;
    span{
        display:inline-block;
        margin-top:15px;
        font-size:30px;
    }
`
export const Button2 = styled.div`
    width:180px;
    height:40px;
    border-radius:5px;
    background-color:#c9f;
    color:white;
    line-height:40px;
    text-align:center;
    margin:5px;
`