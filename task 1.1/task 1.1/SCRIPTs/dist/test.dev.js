"use strict";

var win;

function openWindow() {
  win = open("hhh.html", "", "width=250,height=250");
}

function closeWindow() {
  win.close();
}

var interval = win.setInterval();

function moveWindowDiagonal() {
  interval = win.setInterval(function () {
    win.moveBy(20, 20);
    win.focus();
  }, 1000);
  win.focus();
}

function moveWindowReverse() {
  interval.close();
  interval = win.setInterval(function () {
    win.moveBy(-20, -20);
    win.focus();
  }, 1000);
  win.focus();
}