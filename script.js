"use strict";
// task 1
function fetchPromise() {
  fetch("https://web-app-papatomatoe.herokuapp.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
  fetch("https://web-app-papatomatoe.herokuapp.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
  fetch("https://web-app-papatomatoe.herokuapp.com/sections")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
async function fetchAsync() {
  let response = await fetch("https://web-app-papatomatoe.herokuapp.com/posts");
  let posts = await response.json();
  console.log(posts);
  response = await fetch("https://web-app-papatomatoe.herokuapp.com/posts/1");
  posts = await response.json();
  console.log(posts);
  response = await fetch("https://web-app-papatomatoe.herokuapp.com/sections");
  posts = await response.json();
  console.log(posts);
}
fetchPromise();
fetchAsync();

//task 2

//task 3
async function saveLocalStorage() {
  let response = await fetch("https://web-app-papatomatoe.herokuapp.com/posts");
  let posts = await response.text();
  localStorage.setItem("Posts", posts);
}
saveLocalStorage();
const Posts = localStorage.getItem("Posts");
console.log(Posts);
