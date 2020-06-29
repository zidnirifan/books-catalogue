﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.querySelector("footer .container").classList.add("text-center");
document.querySelector("ul.navbar-nav").classList = "navbar-nav ml-auto";

const hoverStyle = `<style>
    .books-title:hover,
    .text-muted:hover {
    font-weight: bold !important;
    }

    img.card-img-top.poster-book:hover {
    -webkit-filter: brightness(50%) !important;
    -moz-filter: brightness(50%) !important;
    -ms-filter: brightness(50%) !important;
    filter: brightness(30%) !important;
    }
    </style>`;

document.querySelector("head").appendChild(hoverStyle);
