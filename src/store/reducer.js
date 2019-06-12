import { combineReducers }  from 'redux-immutable'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as newsReducer } from '../pages/news/store'

const reducer = combineReducers({
    login:loginReducer,
    home:homeReducer,
    news:newsReducer
})
export default reducer