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
    // background-color:pink;
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