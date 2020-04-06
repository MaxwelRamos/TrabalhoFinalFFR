import { useSelector } from "react-redux";
export const useValidacoes = (props) => {
    const contatosResult = useSelector(state => state.contatoAdd);

    var mensagem = "";
    if (props.funcao == "AdicionarContato") {
        if (props.name.trim() == '')
            mensagem = 'Preencha o nome.';
        else if (props.telefone.trim() == '')
            mensagem = 'Preencha o telefone.';
    }
    else
        if (props.funcao == "EfetuarLigacao") {
            if (contatosResult.contato.length == 0)
                mensagem = 'Nenhum contato foi adicionado.';
            else if (contatosResult.mensagem.trim() == '')
                mensagem = 'Preencha a mensagem.';
            // else if (contatosResult.chaveApi.trim() == '')
            //     mensagem = 'Preencha a chave API.';
        }

    return mensagem;
}
export default useValidacoes;