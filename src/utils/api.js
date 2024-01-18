const baseUrl = 'http://localhost:3001';
const baseHeaders = { "Content-Type": "application/json" };

function request(url, options) {
  return fetch(url, options).then(handleResponse);
}

export function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getItems() {
  return request(`${baseUrl}/items`);
}

export function addItem({name, weather, imageUrl}) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    })
  });
}

export function deleteItem(itemId) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: baseHeaders,
  });
}