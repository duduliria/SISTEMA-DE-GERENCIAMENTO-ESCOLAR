export function iniciarTurma() {
  const botaoNovaTurma = document.querySelector("#btn-nova-turma");
  const modal = document.querySelector(".modal-container");
  const botaoCancelar = document.querySelector(".btn-cancelar");

  function abrirModalNovaTurma(e) {
    e.preventDefault();
    modal.classList.add("ativo");
  }

  function fecharModal() {
    modal.classList.remove("ativo");
  }

  botaoNovaTurma.addEventListener("click", abrirModalNovaTurma);
  botaoCancelar.addEventListener("click", fecharModal);

  window.addEventListener("keyup", (e) => {
    const esc = e.key;
    if (esc === "Escape") modal.classList.remove("ativo");
  });
}

iniciarTurma();
