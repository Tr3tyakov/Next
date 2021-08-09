import * as UserActionCreators from './userActions';
import * as UserAsyncActionCreators from './userAsyncAction';
export default {
  ...UserActionCreators,
  ...UserAsyncActionCreators,
};
