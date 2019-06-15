import styled from 'styled-components'
export const ItemWrapper = styled.div`
    padding:15px 25px;
    background-color:white;
    margin-bottom:1px;
    .title{
        padding-bottom:15px;
    }
    .des span{
        color:#797979;
        margin-right:5px;
        &.iconfont{
            display:inline-block;
            float:right;
            color:#cc99ff;
        }
    }
`
export const ButtonWrapper = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:55px;
    text-align:center;
    background-color:white;
    overflow:hidden;
`
export const Button = styled.div`
    display:inline-block;
    height:30px;
    width:100px;
    line-height:30px;
    border:1px solid #cc99ff;
    color:#cc99ff;
    margin:12px 20px;
    border-radius:5px;
`