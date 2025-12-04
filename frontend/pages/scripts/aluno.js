export function iniciarAluno() {
  const botaoNovoAluno = document.querySelector("#btn-novo-aluno");
  const modal = document.querySelector(".modal-container");
  const botaoCancelar = document.querySelector(".btn-cancelar");

  function abrirModalAluno(e) {
    e.preventDefault();
    modal.classList.add("ativo");
  }

  function fecharModal() {
    modal.classList.remove("ativo");
  }

  botaoNovoAluno.addEventListener("click", abrirModalAluno);
  botaoCancelar.addEventListener("click", fecharModal);

  window.addEventListener("keyup", (e) => {
    const esc = e.key;
    if (esc === "Escape") modal.classList.remove("ativo");
  });
}

iniciarAluno();
