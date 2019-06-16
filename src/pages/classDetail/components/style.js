import styled from 'styled-components'
export const SchemaWrapper = styled.div`
   height:100%;
   width:100%;
   box-sizing:border-box;
   position:fixed;
   top:0;
   left:0;
   background:white;
   text-align:left;
   .empty{
    text-align:center;
    margin-top:100px;
   }
`
export const TabsWrapper = styled.div`
  height:${(props)=>props.length};
  .am-tabs-vertical .am-tabs-tab-bar-wrap{
    height:100%;
  }
  .am-tabs-default-bar-tab-active{
    color:#cc99ff;
  }
  .am-tabs-default-bar-underline{
    border:1px solid #cc99ff;
  }
  .tabsItem{
    width:100%;
    height:100%;
    background:white;
    div{
      padding:20px;
    }
  }
`