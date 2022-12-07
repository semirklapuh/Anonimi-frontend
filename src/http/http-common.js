import axios from "axios";

const URL =
  "http://ec2-34-254-191-235.eu-west-1.compute.amazonaws.com:8000/api/v1";

let token = localStorage.getItem("user") || "";

console.log(token);
export default axios.create({
  baseURL: URL,
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
  mode: "cors",
});
