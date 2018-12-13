import { STORE_RESULT, DELETE_RESULT } from './actionsTypes';

export const saveResult = res => ({
   type: STORE_RESULT,
   result: res
});

export const storeResult = res => {
   return (dispatch, getState) =>
      setTimeout(() => {
         // const oldCounter = getState().ctr.counter;
         // console.log(oldCounter);
         dispatch(saveResult(res));
      }, 2000);
};

export const deleteResult = resElId => ({
   type: DELETE_RESULT,
   resElId: resElId
});
