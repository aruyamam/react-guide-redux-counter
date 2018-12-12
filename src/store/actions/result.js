import { STORE_RESULT, DELETE_RESULT } from './actionsTypes';

export const saveResult = res => ({
   type: STORE_RESULT,
   result: res
});

export const storeResult = res => {
   return dispatch =>
      setTimeout(() => {
         dispatch(saveResult(res));
      }, 2000);
};

export const deleteResult = resElId => ({
   type: DELETE_RESULT,
   resElId: resElId
});
