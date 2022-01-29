"use strict";
const url = "https://api.github.com/users";
const getUser = (user) => {
  const userItem = document.createElement("li");
  const userImg = document.createElement("img");
  const userLink = document.createElement("a");
  const userRepos = document.createElement("a");
  userLink.innerText = user.login;
  userRepos.innerText = "Repositories";
  userImg.setAttribute("src", user.avatar_url);
  userImg.setAttribute("alt", user.login);
  userImg.setAttribute("width", 100);
  userImg.setAttribute("heght", 100);
  userLink.setAttribute("href", user.html_url);
  userLink.setAttribute("target", "_blank");
  userLink.setAttribute("rel", "noopener norefferer");
  userRepos.setAttribute("href", user.html_url + "?tab=repositories");
  userRepos.setAttribute("target", "_blank");
  userRepos.setAttribute("rel", "noopener norefferer");
  userRepos.classList.add("user__repos");
  userItem.classList.add("user");
  userLink.classList.add("user__link");
  document.querySelector(".users").append(userItem);
  userItem.append(userImg);
  userItem.append(userLink);
  userItem.append(userRepos);
};
const createUsers = async (url) => {
  try {
    let response = await fetch(url);
    let users = await response.json();
    for (let i = 0; i <= users.length - 1; i++) {
      getUser(users[i]);
    }
  } catch (error) {
    console.error(error);
  }
};
createUsers(url);
