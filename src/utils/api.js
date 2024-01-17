const baseUrl = 'http://localhost:3001';
const baseHeaders = { "Content-Type": "application/json" };

function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(handleResponse);
}

export function addItem({name, weather, imageUrl}) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    })
  }).then(handleResponse);
}

export function deleteItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  }).then(handleResponse);
}