import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

class Coutner extends Component {
   state = {
      counter: 0
   };

   render() {
      const {
         ctr,
         onIncrementCounter,
         onDecrementCounter,
         onAddCounter,
         onSubtractCounter
      } = this.props;

      return (
         <div>
            <CounterOutput value={ctr} />
            <CounterControl label="Increment" clicked={onIncrementCounter} />
            <CounterControl label="Decrement" clicked={onDecrementCounter} />
            <CounterControl label="Add 5" clicked={onAddCounter} />
            <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
         </div>
      );
   }
}

const mapStateToProps = state => ({
   ctr: state.counter
});

const mapDispatchToProps = dispatch => ({
   onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
   onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
   onAddCounter: () => dispatch({ type: 'ADD', val: 5 }),
   onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 5 })
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Coutner);
