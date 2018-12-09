import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

class Coutner extends Component {
   state = {
      counter: 0,
      results: []
   };

   render() {
      const {
         ctr,
         storeResults,
         onIncrementCounter,
         onDecrementCounter,
         onAddCounter,
         onSubtractCounter,
         onStoreResult,
         onDeleteResult
      } = this.props;

      return (
         <div>
            <CounterOutput value={ctr} />
            <CounterControl label="Increment" clicked={onIncrementCounter} />
            <CounterControl label="Decrement" clicked={onDecrementCounter} />
            <CounterControl label="Add 5" clicked={onAddCounter} />
            <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
            <hr />
            <button onClick={onStoreResult}>Store Result</button>
            <ul>
               {storeResults.map(strResult => (
                  <li
                     key={strResult.id}
                     onClick={() => {
                        onDeleteResult(strResult.id);
                     }}
                  >
                     {strResult.value}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   ctr: state.counter,
   storeResults: state.results
});

const mapDispatchToProps = dispatch => ({
   onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
   onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
   onAddCounter: () => dispatch({ type: 'ADD', val: 5 }),
   onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 5 }),
   onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
   onDeleteResult: id => dispatch({ type: 'DELETE_RESULT', resultElId: id })
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Coutner);
