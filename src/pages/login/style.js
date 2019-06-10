import styled from 'styled-components'
export const Wrapper = styled.div`
    overflow:hidden;
    height:100%;
    background:linear-gradient(#9933CC,#66CCFF);
    text-align:center;
    img{
        width:250px;
        margin-top:120px;
    }
    i{
        color:white;
        font-size:80px;
        display:inline-block;
        margin-top:70px;
        margin-bottom:35px;
    }
`
export const Button = styled.div`
    width:140px;
    height:40px;
    background-color:#9966ff;
    margin:20px auto;
    border:#9966ff;
    border-radius:5px;
    line-height:40px;
    color:white;
    text-align:center;
    &.register{
        width:180px;
        margin-bottom:50px;
    }
    &.login{
        margin-top:60px;
        width:180px;
    }
    &.next{
        margin-bottom:0;
        position:absolute;
        margin-left:-70px;
        bottom:20px;
        left:50%;
    }
`
export const ButtonWrapper = styled.div`
    overflow:hidden;
    margin-top:120px;
    a{
        text-decoration:none;
    }
    &.register{
        margin-top:150px;
    }
`
export const Back = styled.div`
    width:100px;
    height:30px;
    background-color:#99ccff;
    border:#9966ff;
    border-radius:5px;
    line-height:30px;
    color:white;
    position:absolute;
    right:40px;
    bottom:30px;
`
export const Input = styled.input`
    height:20px;
    width:220px;
    padding:10px;
    background-color:#e8e8e8;
    border:none;
    border-radius:15px;
    display:block;
    margin:25px auto;
    outline:none;
`
export const InputWrapper = styled.div`
    margin-top:70px;
`
export const RegisterWrapper = styled.div`
    overflow:hidden;
    .am-list-item .am-input-label.am-input-label-5{
        font-size:14px;
        width:60px;
    }
    .am-list-item .am-input-control input{
        font-size:14px;
        border-radius:5px;
        border:none;
        outline:none;
        background-color:#f9f9f9;
        padding-left:10px;
    } 
    .am-list-item:not(:last-child) .am-list-line {
        border-bottom:none;
    }
    .am-list-line::after{
        background-color:white !important;
    }
`
export const AddressWrapper = styled.div`
    width:100%;
    display:flex;
    font-size:14px;
    overflow:hidden;
    background-color:white;
    height:140px;
    .address{
        display:inline-block;
        padding-left:15px;
        line-height:140px;
    }
    .province{
        display:inline-block;
        height:140px;
        flex:1; 
        margin-right:15px; 
        position:relative;
        top:-50px; 
    }
`
export const AgeWrapper = styled.div`
    width:100%;
    display:flex;
    font-size:14px;
    overflow:hidden;
    background-color:white;
    .am-list-item.am-input-item{
        padding-left:0;
    }
    .age{
        display:inline-block;
        padding-left:15px;
        line-height:44px;
    }
    span{
        display:inline-block;
        width:20px;
        height:1px;
        background-color:black;
        position:relative;
        top:22px;
        left:-10px;
    }
    .ageChoose{
        display:inline-block;
        height:44px;
        flex:1; 
        overflow:hidden;
        display:flex;
        .input{
            flex:1;
            height:24px;
        }
    }
`
export const IntroWrapper = styled.div`
    width:100%;
    display:flex;
    padding:10px 0;
    font-size:14px;
    overflow:hidden;
    background-color:white;
    .title{
        display:inline-block;
        padding-left:15px;
        line-height:44px;
        width:65px;
    }
    .jianjie{
        display:inline-block;
        height:70px;
        flex:1; 
        margin-right:15px;  
        overflow:hidden;
        display:flex;
        .input{
            background-color:#f9f9f9;
            flex:1;
            border-radius:5px;
        }
        .am-textarea-control textarea{
            margin-top:20px;
            font-size:14px;
        }
    }
`
export const SexWrapper=styled.div`
    width:100%;
    display:flex;
    font-size:14px;
    overflow:hidden;
    background-color:white;
    height:40px;
    .sex{
        display:inline-block;
        padding-left:15px;
        line-height:40px;
    }
    .choose{
        display:inline-block;
        height:40px;
        flex:1;
        padding-left:30px; 
        margin-right:15px; 
        padding-top:8px;
        overflow:hidden;
        display:flex;
        select{
            height:24px;
            margin-left:4px;
            border-radius:5px;
            background-color:#f9f9f9;
            flex:1;
            border:none;
            color:#c9c9c9;
        }
    }
`
export const RegisterSucc=styled.div`
    color:white;
    font-weight: bold;
    line-height: 20px;
`