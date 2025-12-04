export function iniciarDashboard() {
  const opcoes = document.querySelectorAll(".opcao");
  const secoes = document.querySelectorAll("section");
  secoes[0].classList.add("ativo");
  opcoes[0].classList.add("selecionado");

  function mostrarSection(index) {
    secoes.forEach((item) => item.classList.remove("ativo"));
    secoes[index].classList.add("ativo");
  }

  function marcarOpcaoSelecionada(index) {
    opcoes.forEach((item) => item.classList.remove("selecionado"));
    opcoes[index].classList.add("selecionado");
  }

  opcoes.forEach((item, index) => {
    item.addEventListener("click", () => {
      mostrarSection(index);
      marcarOpcaoSelecionada(index);
    });
  });
}

iniciarDashboard();
