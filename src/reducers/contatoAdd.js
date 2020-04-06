import {
  ADD_CONTATO,
  REM_CONTATO,
  REM_TODOS,
  ORD_NAME,
  SET_MENSAGEM,
  SET_CHAVEAPI,
  SET_TIPOVOZ
} from "../actions/contatoAction";

const initialState = {
  mensagem: "",
  chaveApi: "",
  tipoVoz: "Homem",
  contato: []
};

export const contatoAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTATO:
      return {
        ...state,
        contato: state.contato.concat(action.payload)
      };
    case REM_CONTATO:
      return {
        ...state,
        contato: state.contato.filter(contato => {
          return (contato.name != action.payload.name)
        })
      };
    case REM_TODOS:
      return {
        ...state,
        contato: []
      };
    case ORD_NAME:
      return {
        ...state,
        contato: state.contato.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
      };
    case SET_MENSAGEM:
      return {
        ...state,
        mensagem: action.payload.mensagem
      };
    case SET_CHAVEAPI:
      return {
        ...state,
        chaveApi: action.payload.chaveApi
      };
    case SET_TIPOVOZ:
      return {
        ...state,
        tipoVoz: action.payload.tipoVoz
      };
    default:
      return state;
  }
};