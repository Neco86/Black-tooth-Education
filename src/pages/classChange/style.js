import styled from 'styled-components'
export const ButtonWrapper = styled.div`
    text-align:center;
`
export const Button = styled.div`
    display:inline-block;
    width:125px;
    height:30px;
    background-color:#9966ff;
    margin:20px auto;
    border:#9966ff;
    border-radius:5px;
    line-height:30px;
    color:white;
    text-align:center;
    margin-left:-3px;
    &.delete{
        margin-left:6px;
        background-color:#d9001b;
    }
`