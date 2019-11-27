import { createStore } from 'redux';

function reducer(){
  return {
    "student": {
      "name": "João Pedro"
    }
  }
}

const store = createStore(reducer);

export default store;