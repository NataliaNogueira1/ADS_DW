const input = document.getElementById("input");

function filtroNome() {
  const nome = input.value.toLowerCase();

  $.getJSON("data.json", (response) => {
    const produtosFiltrados = response.filter(function(produto) {
      return produto.title.toLowerCase().includes(nome);
    });

    document.getElementById("catalogo").innerHTML = "";
    document.getElementById("total-produtos").innerText = produtosFiltrados.length;

    for (let c of produtosFiltrados) {
      document.getElementById("catalogo").innerHTML += `
        <div class="col">
          <div class="card h-100 mx-auto d-flex" style="width: 15rem;">
            <img src="${c.image}" class="card-img-top" alt="Imagem de um ${c.title}">
            <div class="card-body pt-2">
              <h5 class="card-title" style="height: 7rem;">${c.title}</h5>
            </div>
            <div class="card-body">
              <p class="card-text h4 text-success">R$${c.price}</p>
            </div>
            <div class="card-body pt-0">
              <a href="#" class="btn blue-600 text-white">Comprar</a>
            </div>
          </div>
        </div>
      `;
    }
  });

  const paginacao = document.querySelector(".pagination");
  paginacao.style.display = "none";

}


const produtosPorPagina = 8;
let paginaAtual = 1;
let produtos = [];

function exibirPagina(pagina) {
  const inicio = (pagina - 1) * produtosPorPagina;
  const fim = inicio + produtosPorPagina;
  const produtosPagina = produtos.slice(inicio, fim);

  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  for (let c of produtosPagina) {
    catalogo.innerHTML += `
      <div class="col">
        <div class="card h-100 mx-auto d-flex" style="width: 15rem;">
          <img src="${c.image}" class="card-img-top" alt="Imagem de um ${c.title}">
          <div class="card-body pt-2">
            <h5 class="card-title" style="height: 7rem;">${c.title}</h5>
          </div>
          <div class="card-body">
            <p class="card-text h4 text-success">R$${c.price}</p>
          </div>
          <div class="card-body pt-0">
            <a href="#" class="btn blue-600 text-white">Comprar</a>
          </div>
        </div>
      </div>
    `;
  }
}

function atualizarPaginacao() {
  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);
  const paginacao = document.querySelector(".pagination");
  paginacao.innerHTML = "";

  paginacao.innerHTML += `
    <li class="page-item ${paginaAtual === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="${paginaAtual - 1}">Anterior</a>
    </li>
  `;

  // Página atual
  for (let i = 1; i <= totalPaginas; i++) {
    paginacao.innerHTML += `
      <li class="page-item ${paginaAtual === i ? 'active' : ''}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;
  }

  paginacao.innerHTML += `
    <li class="page-item ${paginaAtual === totalPaginas ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="${paginaAtual + 1}">Próxima</a>
    </li>
  `;

  document.querySelectorAll(".page-link").forEach(link => {
    link.addEventListener("click", (eventoClique) => {
      eventoClique.preventDefault();
      const page = parseInt(link.getAttribute("data-page"));
      if (!isNaN(page) && page >= 1 && page <= totalPaginas) {
        paginaAtual = page;
        exibirPagina(paginaAtual);
        atualizarPaginacao();
      }
    });
  });
}

$.getJSON("data.json", (response) => {
  produtos = response;
  document.getElementById("total-produtos").innerText = produtos.length;
  exibirPagina(paginaAtual);
  atualizarPaginacao();
});

// ORIGINAL, SEM PAGINAÇÃO
// $.getJSON("data.json", (response) => {
//   let total = 0;
//   for (var produto of response) {
//     total = total + 1;
//   }
//   document.getElementById("total-produtos").innerHTML += total;

//   for (let c of response) {
//     document.getElementById("catalogo").innerHTML += `
//                         <div class="col">
//                           <div class="card h-100 mx-auto d-flex" style="width: 15rem;">
//                             <img src="${c.image}" class="card-img-top" alt="Imagem de um ${c.title}">
//                             <div class="card-body pt-2">
//                               <h5 class="card-title" style="height: 7rem;">${c.title}</h5>
//                             </div>
//                             <div class="card-body">
//                               <p class="card-text h4 text-success">R$${c.price}</p>
//                             </div>
//                             <div class="card-body pt-0">
//                               <a href="#" class="btn blue-600 text-white">Comprar</a>
//                             </div>
//                           </div>
//                         </div>
//               `;
//   }
// });
