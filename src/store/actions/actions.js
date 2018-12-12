export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => ({
   type: INCREMENT
});

export const decrement = () => ({
   type: DECREMENT
});

export const add = value => ({
   type: ADD,
   val: value
});

export const subtract = value => ({
   type: ADD,
   val: value
});

export const storeResult = res => ({
   type: STORE_RESULT,
   result: res
});

export const deleteResult = resElId => ({
   type: DELETE_RESULT,
   resElId: resElId
});
