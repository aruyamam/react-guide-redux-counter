import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions';

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
            <button onClick={() => onStoreResult(ctr)}>Store Result</button>
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
   ctr: state.ctr.counter,
   storeResults: state.res.results
});

const mapDispatchToProps = dispatch => ({
   onIncrementCounter: () => dispatch(actionCreator.increment()),
   onDecrementCounter: () => dispatch(actionCreator.decrement()),
   onAddCounter: () => dispatch(actionCreator.add(5)),
   onSubtractCounter: () => dispatch(actionCreator.subtract(-5)),
   onStoreResult: result => dispatch(actionCreator.storeResult(result)),
   onDeleteResult: id => dispatch(actionCreator.deleteResult(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Coutner);
