let lista = document.getElementById("lista");
let input = document.getElementById("tarefa");

function adicionarTarefa() {
  if (input.value === "") {
    alert("Digite uma tarefa!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = input.value;

  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.className = "remover";

  botaoRemover.onclick = function () {
    lista.removeChild(li);
  };

  li.appendChild(botaoRemover);
  lista.appendChild(li);

  input.value = "";
}
