fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
  .then((resolve) => resolve.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  })
  .catch((err) => {
    console.log(err);
  });

function displayData(data) {
  const main = document.getElementsByClassName("container");
  const table = document.getElementById("table");
  let copyData = ``;
  data.forEach((item) => {
    copyData += `
        <tr>
        <td  id="img-data"><img src="${item.image}" alt="image"></td>
        <td id="name">${item.name}</td>
        <td id="symbol">${item.symbol.toUpperCase()}</td>
        <td id="price">$${item.current_price}</td>
        <td id="volume">$${item.total_volume}</td>
        <td id="percent">${item.price_change_percentage_24h}%</td>
        <td id="market">Mkt Cap: $${item.market_cap}</td>
        </tr>
        `;
  });
  table.innerHTML = copyData;
}
