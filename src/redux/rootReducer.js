import { combineReducers } from "redux";
import loginReducer from "./loginReduxSaga/login.reducer";
import FormReducer from "./orgRegReduxSaga/orgReg.reducers";
import ImageUploadReducer from "./imageUploadReduxSaga/imageUpload.reducer";
import SetupReducers from "./accountSetupReduxSaga/setup.reducers";
import VerifyAccReducer from "./verifyAccountReduxSaga/verifyAcc.reducers";
import AdminFormReducer from "./adminRegReduxSaga/adminReg.reducers";
import RetrivePasswordReducer from "./retrievePassReduxSaga/retrivePass.reducer";
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  FormReducer: FormReducer,
  ImageUploadReducer: ImageUploadReducer,
  SetupReducers: SetupReducers,
  VerifyAccReducer: VerifyAccReducer,
  AdminFormReducer: AdminFormReducer,
  RetrivePasswordReducer: RetrivePasswordReducer
});
export default rootReducer;
