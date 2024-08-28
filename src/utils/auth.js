import { request } from "./api.js";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.projectdev.net"
    : "http://localhost:3001";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function signup({ name, password, email, avatar }) {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, password, email, avatar }),
  });
}

function signin(email, password) {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers,
    body: JSON.stringify({ password, email }),
  });
}

export { signup, signin };
