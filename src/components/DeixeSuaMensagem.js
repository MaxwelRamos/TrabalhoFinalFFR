import React from "react";
import { useDispatch } from "react-redux";
import { setMensagem } from '../actions/contatoAction';
import { useSelector } from "react-redux";
import { Textarea } from '../visual/txtarea'


export const DeixeSuaMensagem = () => {
  const dispatch = useDispatch();
  const contatosResult = useSelector(state => state.contatoAdd);

  return (
    <div>
      <Textarea rows="15"  value={contatosResult.mensagem} onChange={event => dispatch(setMensagem({ mensagem: event.target.value }))} placeholder="Ex: Todos contra o corona vírus, a vida em primeiro lugar! Proteja-se, fique em casa." required="required" />
    </div>
  );
};
