let p = [];

for (let i = 1; i <= 168; i++) {
  const [total, setTotal] = useState(0);
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  let url = `https://pokeapi.co/api/v2/pokemon/${i}?limit=${limit}&skip=${offset}`;
  $.getJSON(url, (response) => {
    p = response;
    document.getElementById("pokemons").innerHTML += `
        <tr>
                <th scope="row">${p.id}</th>
                <td>${p.name}</td>
                <td><img src="${p.sprites.front_default}"></td>
                <td>${p.height}</td>
                <td>${p.weight}</td>
        </tr>
        `;
  });
}
