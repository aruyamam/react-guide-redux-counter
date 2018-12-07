import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

class Coutner extends Component {
   state = {
      counter: 0
   };

   counterChangeHandler = (action, value) => {
      switch (action) {
         case 'inc':
            this.setState(prevState => ({
               counter: prevState.counter + 1
            }));
            break;

         case 'dec':
            this.setState(prevState => ({
               counter: prevState.counter - 1
            }));
            break;

         case 'add':
            this.setState(prevState => ({
               counter: prevState.counter + value
            }));
            break;

         case 'sub':
            this.setState(prevState => ({
               counter: prevState.counter - value
            }));
            break;

         default:
      }
   };

   render() {
      const { ctr, onIncrementCounter } = this.props;

      return (
         <div>
            <CounterOutput value={ctr} />
            <CounterControl label="Increment" clicked={onIncrementCounter} />
            <CounterControl
               label="Decrement"
               clicked={() => this.counterChangeHandler('dec')}
            />
            <CounterControl
               label="Add 5"
               clicked={() => this.counterChangeHandler('add', 5)}
            />
            <CounterControl
               label="Subtract 5"
               clicked={() => this.counterChangeHandler('sub', 5)}
            />
         </div>
      );
   }
}

const mapStateToProps = state => ({
   ctr: state.counter
});

const mapDispatchToProps = dispatch => ({
   onIncrementCounter: () => dispatch({ type: 'INCREMENT' })
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Coutner);
