"use strict";

let time = 17476;
const timer = document.getElementById("timer");
const navs = document.querySelectorAll(".tab__navs");
const tabs = document.querySelectorAll(".catalog__card__item__tabs__tab");

const prices = {
  exPrice: "250.00",
  newPrice: "160.00",
};

const setPrices = () => {
  const { exPrice, newPrice } = prices;
  const exPriceHtml = document.querySelector("#ex-price span");
  const newPriceHtml = document.querySelector("#new-price span");
  exPriceHtml.textContent = exPrice;
  newPriceHtml.textContent = newPrice;
};

const updateTimer = () => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  time--;
};
setInterval(updateTimer, 1000);

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const tabNum = nav.getAttribute("data-tab");
    activateTab(tabNum);
  });
});

const activateTab = (num) => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.getAttribute("data-tab-content") === num) {
      tab.classList.add("active");
    }
  });

  navs.forEach((nav) => {
    nav.classList.remove("active");
    if (nav.getAttribute("data-tab") === num) {
      nav.classList.add("active");
    }
  });
};

document.addEventListener("DOMContentLoaded", setPrices);
