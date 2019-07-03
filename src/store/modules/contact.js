import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'contact/CHANGE_INPUT';
const TOGGLE = 'contact/TOGGLE';
const CREATE = 'contact/CREATE';
const REMOVE = 'contact/REMOVE';
const EDIT = 'contact/EDIT';

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const create = createAction(CREATE, text => ({ text, id : id++ }));
export const remove = createAction(REMOVE, id => id);
export const edit = createAction(EDIT, (id, text) => ({id, text}));

const initialState = {
  input : '',
  list : [{
    id: 0,
    name: '홍길동',
    phone: '010-0000-0000',
    entered : false,
  },{
    id: 1,
    name: '김길동',
    phone: '010-0000-0001',
    entered : false,
  },{
    id: 2,
    name: '정길동',
    phone: '010-0000-0002',
    entered : false,
  },],
}

export default handleActions (
  {
    [CHANGE_INPUT] : (state, action) => ({
      ...state,
      input : action.payload,
    }),
    [TOGGLE] : (state, action) => ({
      ...state,
      list : state.list.map(
        item => item.id === action.payload
        ? { ...item, entered : !item.entered}
        : item
      )
    }),
    [CREATE] : (state, action) => ({
      ...state,
      list : state.list.concat({
        id : action.payload.id,
        ...action.payload.text,
        entered : false,
      }),
    }),
    [REMOVE] : (state, action) => ({
      ...state,
      list : state.list.filter(
        item => item.id !== action.payload
      )
    }),
    [EDIT] : (state, action) => ({
      ...state,
      list : state.list.map(
        item => item.id === action.payload.id
        ? { ...item, ...action.payload.text,}
        : item
      )
    }),
  },
  initialState
);
