import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex; 
    flex-direction:column;
`
export const SearchWrapper = styled.div`
    overflow:hidden;
    height:45px;
    width:100%;
    background-color:#efeff4;
    z-index:1;
`
export const TabBarWrapper = styled.div`
    overflow:hidden;
    width:100%;
    position:absolute;
    flex:1;
`
export const Item = styled.div`
    height:35px;
    line-height:35px;
    padding:10px;
    padding-top:0;
    font-size:15px;
    margin-bottom:2px;
    background-color:white;
    color:#595959;
    i{
        float:right;
        transform:rotate(180deg);
    }
`
export const Button = styled.div`
    color:#cd99ff;
    position:fixed;
    right:30px;
    i{
        font-size:50px;
    }
    &.manage{
        bottom:140px;
    }
    &.add{
        bottom:80px;
    }
`  
export const Header=styled.div`
    height:55px;
    width:100%;
    text-align:center;
    line-height:55px;
    font-size:20px;
    background-color:#cc99ff;
    color:white;
    position:absolute;
`
export const Page6Header=styled.div`
    height:35px;
    width:100%;
    line-height:35px;
    font-size:14px;
    text-align:center;
    background-color:white;
    margin-bottom:5px;
`
export const Time = styled.div`
    height:65px;
    width:100%;
    background-color:white;
    margin-bottom:5px;
    padding:10px 15px;
    .time{
        font-size:16px;
    }
    .class{
        margin-top:10px;
        font-size:14px;
        span{
            margin:2px;
            font-size:18px;
        }
    }
`
export const ClassItem = styled.div`
    height:120px;
    width:100%;
    background-color:white;
    padding:20px 10px; 
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
    .time,.place{
        color:#77d21c;
        margin:12px 0;
    }
`
export const ItemList = styled.div`
    height:75px;
    width:100%;
    padding:10px;
    background-color:white;
    margin-bottom:5px;
    margin-top:-10px;
    .item{
        width:25%;
        height:100%;
        float:left;
        overflow:hidden;
        div{
            text-align:center;
        }
        .iconfont{
            margin:8px;
            font-size:18px;
        }
    }
`
export const UserWrapper = styled.div`
    position:relative;
    .shop{
        position:absolute;
        right:25px;
        top:40px;
        .iconfont{
            font-size:18px;
            margin-right:10px;
        }
    }
`
