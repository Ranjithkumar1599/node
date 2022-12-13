import {createStore} from "redux";
import rootReducer from "../reducer";


export default function configureStore(intalstate){

    return createStore(rootReducer);
}


