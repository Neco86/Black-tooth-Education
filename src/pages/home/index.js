import React,{ PureComponent } from 'react'
import TabBars from './components/TabBars'
import { HomeWrapper,TabBarWrapper } from './style'
class Home extends PureComponent{
render(){
         return(
            <HomeWrapper>
                <TabBarWrapper>
                    <TabBars/>
                </TabBarWrapper>
            </HomeWrapper>
        )
   
}
}
export default Home