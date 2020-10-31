import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp216165790Reducer from '../features/SignUp216165790/redux/reducers'
import SignIn2165777Reducer from '../features/SignIn2165777/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp216165790: SignUp216165790Reducer,
SignIn2165777: SignIn2165777Reducer,

});