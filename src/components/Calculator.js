import React from 'react';
import { connect } from 'react-redux';

import { opToExpression, numToExpression } from '../actions/currentExpression';
import { addHistoryItem } from '../actions/history';

const operations = ['+', '-', '*', '/', '=']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calculator = ({
  expression,
  operationToExpression,
  numberToExpression,
  addHistoryItem
}) => <fieldset>
  <legend>Calculator</legend>
  <input disabled="true" value={expression} />
  <br />
  <br />
  {operations.map((op, index) => (
    <button style={{marginLeft: "3px"}} onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={index}> {op} </button>)
    )}
  <br />
  <br />
  {numbers.map(num => <button style={{marginLeft: "3px"}} onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
</fieldset>;

const mapStateToProps = state => ({
  expression: state.currentExpression,
});

const mapDispatchToProps = (dispatch) => ({
  operationToExpression: op => dispatch(opToExpression(op)),
  numberToExpression: num => dispatch(numToExpression(num)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);