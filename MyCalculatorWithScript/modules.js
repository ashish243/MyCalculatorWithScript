
// Created By Aashish Sharma

const PRESS_NUM = 'PRESS_NUM';
const ENTER = 'ENTER';
const OPERATION = 'OPERATION';
const CLEAR = 'CLEAR';


// action
export const pressNum = n => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

export const operation = op => ({
  type: OPERATION,
  payload: op,
});

export const clear = () => ({
  type: CLEAR,
});



const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);
  if (op === '+') {
    return b + a;
  } else if (op === '-') {
    return b - a;
  } else if (op === 'X') {
    return b * a;
  } else if (op === '/') {
    return b / a;
  }

  return 0;
};

const initialState = { stack: [], inputState: 'replace' };


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case CLEAR:
      return initialState;
    case OPERATION:
      return {
          stack: [`${doOperation(state.stack[0], state.stack[1], payload)}`, ...state.stack.slice(2)],
          inputState: 'push',
      };
    case ENTER:
      return {
        stack: ['', ...state.stack],
        inputState: 'replace',
      };
    case PRESS_NUM:
      if (state.inputState === 'append') {
        return {
          stack: [(state.stack[0] || '') + payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      } else if (state.inputState === 'replace') {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      } else if (state.inputState === 'push') {
        return {
          stack: [payload, ...state.stack],
          inputState: 'append',
        };
      }
      break;
    default:
      return state;
  }
};
