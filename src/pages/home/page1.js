import React,{ PureComponent } from 'react'
import Tab from './components/Tab'
import Search from './components/Search'
import { SearchWrapper } from './style'
class Page1 extends PureComponent{
    render(){
             return(
                <div>
                    <SearchWrapper>
                        <Search/>
                    </SearchWrapper>
                    <Tab/>
                </div>
            )
       
    }
}
export default Page1