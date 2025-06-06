$.getJSON("data.json", (response) => {
  let total = 0;
  for (var produto of response) {
    total = total + 1;
  }
  document.getElementById("total-produtos").innerHTML += total;

  for (let c of response) {
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
