import axios from "axios";

const URL =
  "http://ec2-3-251-69-127.eu-west-1.compute.amazonaws.com:8000/api/v1";

const ngrok = "https://272e-217-75-204-126.eu.ngrok.io/api/v1"

let token = localStorage.getItem("user") || "";

console.log(token);

export default axios.create({
  baseURL: ngrok,
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
  mode: "cors",
});
