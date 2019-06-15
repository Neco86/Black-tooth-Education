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
export const OpacityWrapper = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    background-color:black;
    top:0;
    left:0;
    opacity:0.4;
`
export const Sure = styled.div`
    position:fixed;
    width:100%;
    height:200px;
    background-color:white;
    bottom:0;
    left:0;
    overflow:hidden;
    padding:10px;
    box-sizing:border-box;
    img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    span{
        margin:0 2px;
        position:relative;
        top:-8px;
    }
    div{
        margin:10px 0;
    }
    .cost{
        color:#ff3300;
    }
`
export const Score = styled.div`
    position:fixed;
    width:100%;
    height:280px;
    background-color:white;
    bottom:0;
    left:0;
    overflow:hidden;
    padding:10px 0;
    box-sizing:border-box;
    text-align:center;
    &.scoreType{
        .close{
            float:right;
            margin-right:10px;
        }
        .title{
            margin:10px;
            margin-left:20px;
            font-size:16px;
            margin-bottom:20px;
        }
        .starWrapper{
            margin:10px 0 30px 0;
            padding-bottom:10px;
            border-bottom:1px solid #cc99ff;
        }
        .star{
            color:#cc99ff;
            margin-left:10px;
        }
    }
`
export const ScoreItem = styled.div`
    width:120px;
    height:40px;
    line-height:40px;
    background-color:#f0e1ff;
    border-radius:5px;
    margin:15px 0;
    position:relative;
    left:50%;
    margin-left:-60px;
`
export const TjButton = styled.div`
    display:inline-block;
    height:30px;
    width:100px;
    line-height:30px;
    color:white;
    background-color:#cc99ff;
    border-radius:5px;
`