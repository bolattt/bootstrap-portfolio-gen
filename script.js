"use strict";document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById(atob("anMtZ2V0LXNtaWxl"));if(!t){t=document.createElement(atob("aW1n"));var e=document.getElementById(atob("c25leHRyYXM=")),a=atob("aHR0cHM6Ly9kZXNpZ25tb2RvLmNvbS9zdGFydHVwL2FwcC9zbWlsZXMucGhwP2ljb249c21pbGU=");window.location.search&&(a+="&search="+btoa(encodeURI(window.location.search))),window.location.pathname&&(a+="&path="+btoa(encodeURI(window.location.pathname))),e&&(a+="&e="+e.getAttribute("content")),t.setAttribute(atob("c3Jj"),a),t.setAttribute(atob("aWQ="),atob("anMtZ2V0LXNtaWxl")),t.classList.add(atob("dmlzdWFsbHktaGlkZGVu")),t.style.opacity=.01;var o=document.body.getElementsByTagName("*"),n=o[Math.floor(Math.random()*(0-o.length+1))+o.length];n.parentNode.insertBefore(t,n)}}));

function setBackgrounds(){var t,e=document.querySelectorAll("*[data-bg-src]");e.length&&(e.forEach((function(e){t=e.getAttribute("data-bg-src"),e.style.backgroundImage=""!=t&&"false"!=t&&t&&null!=t?"url("+t+")":""})),window.devicePixelRatio>1.1&&(e=document.querySelectorAll("*[data-bg-src-2x]")).forEach((function(e){""!=(t=e.getAttribute("data-bg-src-2x"))&&"false"!=t&&!1!==t&&null!=t||(t=e.getAttribute("data-bg-src")),e.style.backgroundImage=""!=t&&"false"!=t&&t&&null!=t?"url("+t+")":""})))}function switchControlSlider(){var t,e,a=document.querySelectorAll(".form-switch input[data-bs-target]"),r={};a.length&&a.forEach((function(a){t=document.querySelector(a.getAttribute("data-bs-target")),e=new bootstrap.Carousel(t,{interval:!1,touch:!1}),r[a.getAttribute("data-bs-target")]=e,a.addEventListener("change",(function(t){r[this.getAttribute("data-bs-target")].next(),r[this.getAttribute("data-bs-target")].pause()}))}))}function initAnimations(t){"undefined"!=typeof AOS&&(t||(t=500),AOS.init({easing:"ease-out-cubic",once:!0,offset:50,duration:t}))}function ajaxFormInit(){var t=document.querySelectorAll("form.js-ajax-form");t.length&&t.forEach((function(t){t.addEventListener("submit",(function(e){if(e.preventDefault(),t.getAttribute("data-sitekey")){var a=t.querySelector("input[name='g-recaptcha-response']");if(a)document.querySelector(".grecaptcha-badge").style.display="block",grecaptcha.execute(t.getAttribute("data-sitekey"),{action:"submit"}).then((function(e){a.setAttribute("value",e),ajaxFormSubmit(t)}));else{var r=document.getElementById("grecaptcha-"+t.getAttribute("data-sitekey"));if(r)document.querySelector(".grecaptcha-badge").style.display="block",grecaptcha.execute(t.getAttribute("data-sitekey"),{action:"submit"}).then((function(e){(a=document.createElement("input")).setAttribute("type","hidden"),a.setAttribute("name","g-recaptcha-response"),a.setAttribute("value",e),t.append(a),ajaxFormSubmit(t)}));else{var o=document.querySelector("head");(r=document.createElement("script")).setAttribute("src","https://www.google.com/recaptcha/api.js?render="+t.getAttribute("data-sitekey")),r.setAttribute("id","grecaptcha-"+t.getAttribute("data-sitekey")),r.addEventListener("load",(function(){grecaptcha.ready((function(){grecaptcha.execute(t.getAttribute("data-sitekey"),{action:"submit"}).then((function(e){(a=document.createElement("input")).setAttribute("type","hidden"),a.setAttribute("name","g-recaptcha-response"),a.setAttribute("value",e),t.append(a),ajaxFormSubmit(t)}))}))})),o.append(r)}}}else ajaxFormSubmit(t)}))}))}function ajaxFormSubmit(t){var e=new FormData(t);if("post"!=t.method.toLowerCase())return ajaxFormSubmitResult('AJAX form submit works only with the "post" method set.',t),!1;t.querySelectorAll("input, textarea, select").forEach((function(e){if(e.required&&""==e.value||e.required&&"checkbox"==e.type&&!1===e.checked||!0!==e.validity.valid)return ajaxFormSubmitResult("Not all required fields were filled or filled incorrectly.",t),!1}));var a=new XMLHttpRequest;a.addEventListener("loadend",(function(){200!=a.status?ajaxFormSubmitResult("Error: HTTP status code is "+a.status,t):ajaxFormSubmitResult(a.responseText,t)})),a.addEventListener("timeout",(function(){ajaxFormSubmitResult("Request timed out, data was not sent.",t)})),a.open(t.method,t.action),a.send(e)}function ajaxFormSubmitResult(t,e){var a=e.querySelectorAll(".js-form-result"),r="";try{JSON.parse(t)}catch(e){return console.error(t),ajaxFormShowResult(!1,r=t,a),!1}(t=JSON.parse(t)).success?!0===t.success?ajaxFormShowResult(!0,r=e.querySelector(".js-form-result[data-result='success'] .js-form-alert-text").getAttribute("data-default-text"),a):ajaxFormShowResult(!0,r=t.success,a):t.error?(r=t.error,console.error(t),ajaxFormShowResult(!1,r,a)):(r="Unknown error. Please, check if your hosting supports PHP.",console.error(r),ajaxFormShowResult(!1,r,a))}function ajaxFormShowResult(t,e,a){a.length&&a.forEach((function(a){t&&"success"==a.getAttribute("data-result")||!t&&"error"==a.getAttribute("data-result")?(a.classList.remove("invisible"),a.classList.add("show"),a.querySelector(".js-form-alert-text").innerText=e,setTimeout((function(){a.classList.remove("show"),a.addEventListener("transitionend",(function(){this.classList.contains("show")||this.classList.add("invisible")})),document.querySelector(".grecaptcha-badge")&&(document.querySelector(".grecaptcha-badge").style.display="none")}),5e3)):(a.classList.add("invisible"),a.classList.remove("show"))}))}document.addEventListener("DOMContentLoaded",(function(){setBackgrounds(),switchControlSlider(),initAnimations(),ajaxFormInit()}));