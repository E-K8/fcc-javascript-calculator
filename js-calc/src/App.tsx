import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');
  const [expression, setExpression] = useState('');
  const et = expression.trim();

  const isOperator = (symbol: string) => {
    return /[*/+-]/.test(symbol);
  };

  const buttonPress = (symbol: string) => {
    if (symbol === 'clear') {
      setAnswer('0');
      setExpression('');
    } else if (symbol === 'negative') {
      if (answer === '') return;
      setAnswer(
        answer.toString().charAt(0) === '-' ? answer.slice(1) : '-' + answer
      );
    } else if (symbol === 'percentage') {
      if (answer === '') return;
      setAnswer((parseFloat(answer) / 100).toString());
    } else if (isOperator(symbol)) {
      setExpression(et + ' ' + symbol + ' ');
    } else if (symbol === '=') {
      calculate();
    } else if (symbol === '0') {
      if (expression.charAt(0) !== '0') {
        setExpression(expression + symbol);
      }
    } else if (symbol === '.') {
      // split by operators and get last number
      const lastNumber = expression.split(/[-+/*]/g).pop();

      // if the last number already has a decimal, don't add another
      if (lastNumber?.includes('.')) return;
      setExpression(expression + symbol);
    }
  };

  const calculate = () => {};

  return (
    <>
      <div className='container'>
        <h1>JavaScript Calculator</h1>
        <div id='calculator'>
          <div id='display' style={{ textAlign: 'right' }}>
            <div id='answer'>{answer}</div>
            <div id='expression'>{expression}</div>
          </div>

          <button
            id='clear'
            onClick={() => buttonPress('clear')}
            className='light-gray'
          >
            C
          </button>
          <button
            id='negative'
            onClick={() => buttonPress('negative')}
            className='light-gray'
          >
            +/-
          </button>
          <button
            id='percentage'
            onClick={() => buttonPress('percentage')}
            className='light-gray'
          >
            %
          </button>
          <button
            id='divide'
            onClick={() => buttonPress('/')}
            className='yellow'
          >
            /
          </button>
          <button
            id='seven'
            onClick={() => buttonPress('7')}
            className='dark-gray'
          >
            7
          </button>
          <button
            id='eight'
            onClick={() => buttonPress('8')}
            className='dark-gray'
          >
            8
          </button>
          <button
            id='nine'
            onClick={() => buttonPress('9')}
            className='dark-gray'
          >
            9
          </button>
          <button
            id='multiply'
            onClick={() => buttonPress('*')}
            className='yellow'
          >
            *
          </button>
          <button
            id='four'
            onClick={() => buttonPress('4')}
            className='dark-gray'
          >
            4
          </button>
          <button
            id='five'
            onClick={() => buttonPress('5')}
            className='dark-gray'
          >
            5
          </button>
          <button
            id='six'
            onClick={() => buttonPress('6')}
            className='dark-gray'
          >
            6
          </button>
          <button
            id='subtract'
            onClick={() => buttonPress('-')}
            className='yellow'
          >
            -
          </button>
          <button
            id='one'
            onClick={() => buttonPress('1')}
            className='dark-gray'
          >
            1
          </button>
          <button
            id='two'
            onClick={() => buttonPress('2')}
            className='dark-gray'
          >
            2
          </button>
          <button
            id='three'
            onClick={() => buttonPress('3')}
            className='dark-gray'
          >
            3
          </button>
          <button id='add' onClick={() => buttonPress('+')} className='yellow'>
            +
          </button>
          <button
            id='zero'
            onClick={() => buttonPress('0')}
            className='dark-gray'
          >
            0
          </button>
          <button
            id='decimal'
            onClick={() => buttonPress('.')}
            className='dark-gray'
          >
            .
          </button>
          <button
            id='equals'
            onClick={() => buttonPress('=')}
            className='yellow'
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
