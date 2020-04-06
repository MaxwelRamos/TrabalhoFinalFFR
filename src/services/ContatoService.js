export class ContatoService {

  static efetuarLigacao(contatosResult) {
    (async function () {

      const TotalVoice = require("totalvoice-node");
      const client = new TotalVoice(contatosResult.chaveApi);

      for (const c of contatosResult.contato) {
        const telDestino =
        {
          nome: c.name,
          telephone: c.telefone
        }

        const message = contatosResult.mensagem;
        const options = {
          velocidade: 2,
          tipo_voz: contatosResult.tipoVoz == "Homem" ? "br-Ricardo" : "br-Vitoria",
          reposta_usuario: true
        };

        client.tts.enviar(telDestino.telephone, message, options).then((response) => {
          alert(`Em instantes, o Senhor(a) ${telDestino.nome} será avisado!`);
        }).catch(() => {
          alert(`O Senhor(a) ${telDestino.nome} não foi avisado. Verifique o telefone digitado e/ou chave API informada!`);
        });
      }
    })();
  }
}


