const baseUrl = "http://localhost:3001";
const baseHeaders = { 
  Accept: "application/json",
  "Content-Type": "application/json"
};

function request(url, options) {
  return fetch(url, options).then(handleResponse);
}

export function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function addCardLike(cardId, token) {
  return request(`${baseUrl}/cards/${cardId}/likes`, {
    method: "PUT",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addClothingItem({ name, weather, imageUrl }, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
}

export function deleteItem(itemId, token) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getClothingItems() {
  return request(`${baseUrl}/items`);
}

export function getUserInfo(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function removeCardLike(cardId, token) {
  return request(`${baseUrl}/cards/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}