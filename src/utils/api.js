console.log('NODE_ENV:', process.env.NODE_ENV);
const baseUrl = process.env.NODE_ENV === "production"
  ? "https://api.wtwr.projectdev.net"
  : "http://localhost:3001";
  
console.log('baseUrl:', baseUrl);
const baseHeaders = { 
  Accept: "application/json",
  "Content-Type": "application/json"
};

export function request(url, options) {
  return fetch(url, options).then(handleResponse);
}

export function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function addCardLike(cardId, token) {
  return request(`${baseUrl}/items/${cardId}/likes`, {
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

export function editProfile({ name, avatarUrl }) {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatarUrl: avatarUrl,
    }),
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
  return request(`${baseUrl}/items/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}