import { createStore } from 'redux';
import reducer from './reducer'

// 创建store时，需要把reducer传给store（小本本）
const store = createStore(reducer);

export default store;