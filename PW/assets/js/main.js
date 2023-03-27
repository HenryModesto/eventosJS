class Evento {
    constructor(nome) {
        this.nome = nome
    }

    alertaAtivacao() {
        Swal.fire({
            title: 'O evento' + this.nome + ' foi ativado com sucesso!',
            positon: 'top',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function exibeMensagemAtivacao(nomeEvento) {
    new Evento(nomeEvento).alertaAtivacao()
}

/*
    CRIAR UMA CAIXA DE ALERTA COISA BOA D+
    OBSERVAR SOBREPOSICAO DE EVENTOS KEY'S
*/