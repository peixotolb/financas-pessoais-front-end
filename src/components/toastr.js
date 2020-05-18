import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  export function mostrarMensagem(titulo, mensagem, tipo){
    toastr[tipo](mensagem, titulo)
  }

  export function mensagemErro(mensagemErro){
      mostrarMensagem('Erro', mensagemErro, 'error')
  }

  export function mensagemSucesso(mensagemErro){
    mostrarMensagem('Sucesso', mensagemErro, 'success')
}

export function mensagemAlerta(mensagemErro){
    mostrarMensagem('Atencao', mensagemErro, 'warning')
}

export function mensagemInformacao(mensagemErro){
    mostrarMensagem('Informação', mensagemErro, 'info')
}
