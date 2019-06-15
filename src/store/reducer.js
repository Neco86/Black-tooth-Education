import { combineReducers }  from 'redux-immutable'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as newsReducer } from '../pages/news/store'
import { reducer as videosReducer } from '../pages/videos/store'
import { reducer as classReducer } from '../pages/class/store'
import { reducer as myPubReducer } from '../pages/myPub/store'

const reducer = combineReducers({
    login:loginReducer,
    home:homeReducer,
    news:newsReducer,
    videos:videosReducer,
    class:classReducer,
    myPub:myPubReducer
})
export default reducer