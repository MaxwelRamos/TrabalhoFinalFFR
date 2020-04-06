export const ADD_CONTATO = "ADD_CONTATO";
export const REM_CONTATO = "REM_CONTATO";
export const REM_TODOS = "REM_TODOS";
export const ORD_NAME = "ORD_NAME";
export const SET_MENSAGEM = "SET_MENSAGEM";
export const SET_CHAVEAPI = "SET_CHAVEAPI";
export const SET_TIPOVOZ = "SET_TIPOVOZ";

export const addContato = contatoAdd => ({
    type: ADD_CONTATO,
    payload: contatoAdd
});

export const remContato = (contatoRem) => ({
    type: REM_CONTATO,
    payload: contatoRem
});

export const remTodos = () => ({
    type: REM_TODOS
});

export const ordName  = () => ({
    type: ORD_NAME
});

export const setMensagem = mensagem => ({
    type: SET_MENSAGEM,
    payload: mensagem
});

export const setChaveAPI = chaveApi => ({
    type: SET_CHAVEAPI,
    payload: chaveApi
});

export const setTipoVoz = tipoVoz => ({
    type: SET_TIPOVOZ,
    payload: tipoVoz
});