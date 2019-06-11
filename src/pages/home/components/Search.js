import React,{ PureComponent } from 'react'
import { SearchBar } from 'antd-mobile';
import { SearchWrapper } from './style'
class Search extends PureComponent{
render(){
         return(
            <SearchWrapper>
                <SearchBar placeholder="Search" maxLength={8}/>
            </SearchWrapper>
        )
   
}
}
export default Search