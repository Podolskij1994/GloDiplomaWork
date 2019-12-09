!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var o=function(e,t,n){var o=e.clientWidth,i=r(e.children),l=i.reduce((function(e,t){return e+t.clientWidth}),0)/i.length,c=i.length,a=(o-c*l)/(c+1),s=a+l,u=e.parentElement.clientWidth,d=[],p=1,f=document.querySelector(t),m=document.querySelector(n);for(d[0]=u;s<=o;)s>u&&(d[p]=s,p++),s+=a+l;p=0,m.addEventListener("click",(function(){++p>=d.length-1&&(p=d.length-1);var t=d[p]-u;e.style.transform="translateX(-".concat(t,"px)")})),f.addEventListener("click",(function(){--p<0&&(p=0);var t=d[p]-u;e.style.transform="translateX(-".concat(t,"px)")}))},i=function(e,t,n,r){var o=document.querySelectorAll(e),i=(document.querySelector(t),document.querySelector(n)),l=document.querySelector(r),c=0,a=function(){o.forEach((function(e,t){e.classList.contains("podolskij-active")&&(c=t)}))},s=function(e,t){e[t].classList.remove("podolskij-active")},u=function(e,t){e[t].classList.add("podolskij-active")};i.addEventListener("click",(function(e){a(),s(o,c),--c<0&&(c=o.length-1),u(o,c)})),l.addEventListener("click",(function(e){a(),s(o,c),++c>=o.length&&(c=0),u(o,c)}))};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.main,r=t.wrap,o=t.next,i=t.prev,l=t.position,c=void 0===l?0:l,a=t.slidesToShow,s=void 0===a?5:a,u=t.responsive,d=void 0===u?[]:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.next=document.querySelector(o),this.prev=document.querySelector(i),this.slidesToShow=s,this.slides=this.wrap.children,this.options={position:c,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=d}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.addPodolskijClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responseInit()}},{key:"addPodolskijClass",value:function(){this.main.classList.add("podolskij-slider"),this.wrap.classList.add("podolskij-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var r,o=this.slides[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)r.value.classList.add("podolskij-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n        .podolskij-slider {\n        overflow: hidden !important;\n        }\n        .podolskij-slider__wrap{\n        display: flex !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n        }\n        .podolskij-slider__item{\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: auto 0 !important;\n        display: flex !important;\n        align-items: center !important;\n        justify-content: space-around !important;\n        }\n    "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){var e=this;this.prev.addEventListener("click",(function(){return e.prevSlider()})),this.next.addEventListener("click",(function(){return e.nextSlider()}))}},{key:"prevSlider",value:function(){this.options.position>0&&(--this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.widthSlide*this.options.position,"%)"))}},{key:"nextSlider",value:function(){this.options.position<this.slides.length-this.slidesToShow&&(++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.widthSlide*this.options.position,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="podolskij-slider__prev",this.next.className="podolskij-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next),document.getElementById("sliderCarousel-style").textContent+="\n        .podolskij-slider__prev,\n        .podolskij-slider__next{\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n        }\n        .podolskij-slider__next {\n        border-left-color: #19b5fe;\n        }\n        .podolskij-slider__prev {\n        border-right-color: #19b5fe;\n        }\n    "}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),r=this.responsive.map((function(e){return e.slideToShow})),o=function(){var o=document.documentElement.clientWidth,i=0;n.forEach((function(t,n){o<t&&(i++,e.slidesToShow=r[n])})),0===i&&(e.slidesToShow=t),e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};o(),window.addEventListener("resize",o)}}])&&l(t.prototype,n),r&&l(t,r),e}(),a=function(e,t,n,r){var o=document.querySelector(e),i=document.querySelector(t),l=document.querySelector(n),c=l.querySelectorAll(r),a=c[0].clientWidth+2*c[0].offsetLeft,s=-1;o.addEventListener("click",(function(){return u()})),i.addEventListener("click",(function(){return d()}));var u=function(){if(s>-1){--s,m();var e=-a*s;l.style.transform="translateX(".concat(e,"px)")}},d=function(){if(s<c.length-2){++s,m();var e=-a*s;l.style.transform="translateX(".concat(e,"px)")}},p=function(e){e.style.opacity=.5},f=function(e){e.style.opacity=0},m=function(){document.documentElement.clientWidth>764?(c[s]&&p(c[s]),c[s+2]&&p(c[s+2])):(c[s]&&f(c[s]),c[s+2]&&f(c[s+2])),c[s+1]&&(c[s+1].style.opacity=1),c[s-1]&&f(c[s-1])};document.documentElement.clientWidth<=764&&f(c[1])},s=function(){var e=document.querySelector(".accordion"),t=document.querySelectorAll("h2"),n=0;e.addEventListener("click",(function(e){var r=e.target;r.matches(".title_block")&&(t[n].classList.remove("msg-active"),n=r.dataset.number,t[n].classList.add("msg-active"))}))},u=function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord");e.addEventListener("click",(function(e){var n=this,r=this.style.transform;r=r?"":"rotateX(180deg)",n.style.transform=r;t.style.top=r?"25px":"0";t.querySelector("a").style.opacity=r?"1":"0"}))},d=function(){var e=document.querySelectorAll(".button_wide"),t=document.querySelector(".popup-consultation");e.forEach((function(e){return e.addEventListener("click",(function(){return showModal(".popup-consultation")}))})),t.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-consultation")}))},p=function(){var e=document.querySelector(".transparency-slider-wrap"),t=document.querySelector(".popup-transparency"),n=t.querySelectorAll(".popup-transparency-slider__slide");e.addEventListener("click",(function(e){var t=e.target;t.matches(".transparency-item__img")&&(showModal(".popup-transparency"),n[+t.dataset.number].classList.add("podolskij-active"))})),t.querySelector(".close").addEventListener("click",(function(e){unShowModal(".popup-transparency"),n.forEach((function(e){return e.classList.remove("podolskij-active")}))}))},f=function(){var e,t,n,r=document.getElementById("formula");r.addEventListener("mouseover",(function(r){var o=r.target;if(o.closest(".formula-item__icon-inner-text")){e=+o.textContent;var i=".formula-item-popup-0".concat(e);t=document.querySelectorAll(i)[0],n=document.querySelector("".concat(i,"-before")),t.getBoundingClientRect().top<10&&(n.style.transform="rotate(180deg)",n.style.top="-10px",t.style.top="110px"),showModal(i)}})),r.addEventListener("mouseout",(function(r){var o=r.target;if(o.closest(".formula-item__icon-inner-text")){e=+o.textContent;var i=".formula-item-popup-0".concat(e);t=document.querySelector(i),n=document.querySelector("".concat(i,"-before")),unShowModal(i),setTimeout((function(){n.style.transform="",n.style.top="",t.style.top=""}),300)}}))},m=function(e){var t=document.querySelector(".popup-thank"),n=document.querySelector(e),r=(document.createElement("div"),n.querySelectorAll("input")),o=function(e){if(200!==e.status)throw new Error("status network not 200");showModal(".popup-thank"),r.forEach((function(e){return e.value=""}))},i=function(e){console.error(e)};n.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(n),r={},c=!0,a=!1,s=void 0;try{for(var u,d=t.entries()[Symbol.iterator]();!(c=(u=d.next()).done);c=!0){var p=u.value;r[p[0]]=p[1]}}catch(e){a=!0,s=e}finally{try{c||null==d.return||d.return()}finally{if(a)throw s}}l(r).then(o).catch(i)}));var l=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};t.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-thank")}))};var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelector(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,c=r.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||o.charAt(l):e}));-1!=(l=c.indexOf("_"))&&(c=c.slice(0,l));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}n.addEventListener("input",r),n.addEventListener("focus",r),n.addEventListener("blur",r)},v=function(){var e=document.querySelector(".popup-dialog-menu"),t=document.querySelector(".menu__icon"),n=document.querySelector(".button-footer"),r=document.querySelector(".popup-menu"),o=document.querySelector(".popup-repair-types");t.addEventListener("click",(function(t){e.style.transform="translate3d(0, 0, 0)"}));n.addEventListener("click",(function(){var t=c();!function e(){window.scrollBy(0,-100),window.scrollY>0&&requestAnimationFrame(e)}(),e.style.transform=t}));console.log("Событие"),fetch("../db/db.json").then((function(e){if(200!==e.status)throw new Error("Status network not 200");return e.json()})).then((function(e){l(e)})).catch((function(e){return console.error(e)}));var i=0,l=function(e){var t=o.querySelector(".nav-list-popup-repair"),n=o.querySelector(".popup-repair-types-content__head-title"),r=document.querySelector("tbody"),l=!0,c=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var d=s.value,p=document.createElement("button");i++,p.classList="button_o popup-repair-types-nav__item",p.textContent=d.title,t.appendChild(p),p.dataset.number=i;var f=!0,m=!1,y=void 0;try{for(var v,h=d.priceList[Symbol.iterator]();!(f=(v=h.next()).done);f=!0){var S=v.value,b=[],g=document.createElement("tr");g.classList="mobile-row",r.appendChild(g),g.dataset.number=i,1!=i&&(g.style.display="none");for(var _=0;_<=4;_++)b[_]=document.createElement("td");b[0].classList="repair-types-name",b[1].classList="mobile-col-title tablet-hide desktop-hide",b[2].classList="mobile-col-title tablet-hide desktop-hide",b[3].classList="repair-types-value",b[4].classList="repair-types-value",b[0].textContent=S.typeService,b[1].textContent="Ед.измерения",b[2].textContent="Цена за ед.",b[3].textContent=S.units,b[4].textContent=S.cost;for(var w=0;w<=4;w++)g.appendChild(b[w])}}catch(e){m=!0,y=e}finally{try{f||null==h.return||h.return()}finally{if(m)throw y}}}}catch(e){c=!0,a=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw a}}t.addEventListener("click",(function(e){var t=e.target;if(t.matches(".popup-repair-types-nav__item")){var r=o.querySelectorAll(".mobile-row"),i=t.dataset.number;n.textContent=t.textContent;var l=!0,c=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var d=s.value;d.dataset.number===i?d.style.display="":d.style.display="none"}}catch(e){c=!0,a=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw a}}}}))};r.addEventListener("click",(function(t){var n=c(),r=t.target;if(r.closest(".close-menu")&&(e.style.transform=n),r.matches(".move-link")){t.preventDefault();var o=document.querySelector(r.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,i=50;o>=window.scrollY?function e(){window.scrollBy(0,i),o-window.scrollY>100?requestAnimationFrame(e):window.scrollBy(0,o-window.scrollY)}():(i=-i,function e(){window.scrollBy(0,i),window.scrollY-o>100?requestAnimationFrame(e):window.scrollBy(0,-(window.scrollY-o))}()),e.style.transform=n}r.closest(".show-repair")&&(showModal(".popup-repair-types"),e.style.transform=n)})),document.querySelector(".show-repair-modal").addEventListener("click",(function(){var t=c();showModal(".popup-repair-types"),e.style.transform=t}));var c=function(){return window.innerWidth<576?"translate3d(0, -100vh, 0)":"translate3d(645px, 0, 0)"};o.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-repair-types")}))};function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var S=function(){var e=document.getElementById("designs"),t=document.querySelector(".nav-list-designs"),n=t.querySelectorAll(".designs-nav__item"),r=e.querySelectorAll(".preview-block"),o=e.querySelector(".designs-slider"),i=h(o.children),l=e.querySelector(".slider-counter-content__current"),c=e.querySelector(".slider-counter-content__total"),a=e.querySelector(".link-list-designs"),s=document.querySelector(".popup-design"),u=s.querySelector(".nav-list"),d=s.querySelector(".popup-design-slider"),p=h(d.children),f=s.querySelector(".slider-counter-content__total"),m=s.querySelector(".slider-counter-content__current"),y=s.querySelectorAll(".popup-design-text"),v=1,S=3;a.addEventListener("click",(function(){return showModal(".popup-design")})),s.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-design")}));t.addEventListener("click",(function(t){var a=t.target;v=+a.dataset.number,a.matches(".designs-nav__item")&&(n.forEach((function(e,t){e.classList.contains("active")&&(e.classList.remove("active"),r[t].classList.remove("visible"))})),a.classList.add("active"),r[v].classList.add("visible"),o.insertAdjacentElement("afterbegin",i[v]),c.textContent=r[v].childElementCount,S=+e.querySelector(".designs-slider").children[0].children[0].dataset.number+1,l.textContent=S)}));u.addEventListener("click",(function(e){var t=e.target;if(t.matches(".button_o")){for(var r=0;r<5;r++)t===u.children[r]&&(v=r),u.children[r].classList.contains("active")&&u.children[r].classList.remove("active");n.forEach((function(e,t){e.classList.contains("active")&&(e.classList.remove("active"),u.children[t].classList.remove("active"))})),y.forEach((function(e){e.classList.contains("visible-content-block")&&(e.classList.remove("visible-content-block"),console.log(e))})),t.classList.add("active"),console.log(y,v),y[v].classList.add("visible-content-block"),d.insertAdjacentElement("afterbegin",p[v]),f.textContent=p[v].childElementCount,m.textContent=+p[v].children[0].dataset.number+1}}));var b=function(e,t,n,r){var o,i,l=0,c=function(){l=+o[0].dataset.number},a=function(e,t){e.forEach((function(e){+e.dataset.number===t&&(i.insertAdjacentElement("afterbegin",e),u(+e.dataset.number+1))}))},s=function(e,t){e.forEach((function(e){+e.dataset.number===t&&(i.insertAdjacentElement("afterbegin",e),u(+e.dataset.number+1))}))},u=function(t){e.textContent=t};t.addEventListener("click",(function(e){i=r.children[0],o=h(r.children[0].children),c(),a(o,l),--l<0&&(l=o.length-1),s(o,l)})),n.addEventListener("click",(function(e){i=r.children[0],o=h(r.children[0].children),c(),a(o,l),++l>=o.length&&(l=0),s(o,l)}))};b(l,document.querySelector("#design_left"),document.querySelector("#design_right"),o),b(m,document.querySelector("#popup_design_left"),document.querySelector("#popup_design_right"),d),e.addEventListener("click",(function(t){var n=t.target,r=0;if(n.matches(".preview-block__item-inner")){var o=n.parentNode.parentNode,i=o.querySelectorAll(".preview-block__item"),c=e.querySelector(".designs-slider").children[0],a=h(c.children);+o.dataset.number,r=+n.parentNode.dataset.number,a.forEach((function(e){r===+e.dataset.number&&c.insertAdjacentElement("afterbegin",e)})),i.forEach((function(e){var t=e.querySelector(".preview-block__item-inner");t.classList.contains("preview_active")&&t.classList.remove("preview_active")})),n.classList.add("preview_active"),l.textContent=r+1}}))};function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(){for(var e=document.getElementById("repair-types"),t=e.querySelector(".repair-types-tab"),n=t.querySelectorAll(".repair-types-nav__item"),r=e.querySelector(".repair-types-slider"),o=e.querySelector(".slider-counter-content__current"),i=e.querySelector(".slider-counter-content__total"),l=(t.querySelector(".nav-list-repair"),[]),c=0;c<=4;c++)l[c]=e.querySelector(".types-repair".concat(c+1));t.addEventListener("click",(function(e){var t=e.target;if(t.matches(".repair-types-nav__item")){var c=t.dataset.number-1;n.forEach((function(e){return e.classList.remove("active")})),n[c].classList.add("active"),r.insertAdjacentElement("afterbegin",l[c]),i.textContent=r.firstChild.children.length,o.textContent=+r.children[0].children[0].dataset.number+1}}));!function(){var e,t,n=document.querySelector("#repair-types-arrow_left"),i=document.querySelector("#repair-types-arrow_right"),l=0,c=function(){l=+e[0].dataset.number},a=function(e,n){e.forEach((function(e){+e.dataset.number===n&&(t.insertAdjacentElement("afterbegin",e),u(+e.dataset.number+1))}))},s=function(e,n){e.forEach((function(e){+e.dataset.number===n&&(t.insertAdjacentElement("afterbegin",e),u(+e.dataset.number+1))}))},u=function(e){o.textContent=e};n.addEventListener("click",(function(n){t=r.children[0],e=b(r.children[0].children),c(),a(e,l),--l<0&&(l=e.length-1),s(e,l)})),i.addEventListener("click",(function(n){t=r.children[0],e=b(r.children[0].children),c(),a(e,l),++l>=e.length&&(l=0),s(e,l)}))}(),document.documentElement.clientWidth<=1024&&getResponseTabs(document.getElementById("repair-types").querySelector(".nav-list-repair"),"#nav-arrow-repair-left_base","#nav-arrow-repair-right_base")},_=function(){var e=document.querySelectorAll(".link-privacy"),t=document.querySelector(".popup-privacy");e.forEach((function(e){return e.addEventListener("click",(function(){return showModal(".popup-privacy")}))})),t.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-privacy")}))},w=function(){var e=document.getElementById("portfolio"),t=e.querySelector(".portfolio-slider"),n=e.querySelectorAll(".portfolio-slider__slide"),r=e.querySelectorAll(".portfolio-slider__slide-frame"),o=document.querySelector(".popup-portfolio"),i=o.querySelector(".popup-portfolio-slider"),l=i.querySelectorAll(".popup-portfolio-slider__slide"),c=o.querySelector(".slider-counter-content__current"),a=o.querySelectorAll(".popup-portfolio-text"),s=document.querySelector("#portfolio-arrow_left"),u=document.querySelector("#portfolio-arrow_right"),d=document.getElementById("popup_portfolio_right"),p=document.getElementById("popup_portfolio_left");e.addEventListener("click",(function(e){var t,n=e.target;document.documentElement.clientWidth>1024&&n.matches(".portfolio-slider__slide-frame")&&(r.forEach((function(e,r){e===n&&(t=r-10)})),showModal(".popup-portfolio"),a.forEach((function(e){return e.style.display=""})),a[t].style.display="block",c.textContent=t+1)})),o.querySelector(".close").addEventListener("click",(function(){return unShowModal(".popup-portfolio")}));p.addEventListener("click",(function(e){var t=+c.textContent;a[t-1].style.display="",1===t?t=10:t--,i.insertAdjacentElement("afterbegin",l[t-1]),c.textContent=t,a[t-1].style.display="block"})),d.addEventListener("click",(function(e){var t=+c.textContent;a[t-1].style.display="",10===t?t=1:t++,i.insertAdjacentElement("afterbegin",l[t-1]),c.textContent=t,a[t-1].style.display="block"}));!function(){var e=+n[0].clientWidth,r=0,o=2,i=2,l=-1;document.documentElement.clientWidth<=1024&&(o=3,n[2].style.opacity=0,i=1,l=1),document.documentElement.clientWidth<=900&&(o=4,n[1].style.opacity=0,i=0,l=3),s.addEventListener("click",(function(){return c()})),u.addEventListener("click",(function(){return a()}));var c=function(){document.documentElement.clientWidth>=576&&r>0&&(u.style.display="flex",u.style.opacity="1",r--,t.style.transform="translateX(-".concat(+r*+e,"px)"),console.log(r+o-l),n[r+o-l].style.opacity="0",n[r].style.opacity="1",0===r&&(s.style.display="none"))},a=function(){document.documentElement.clientWidth>=576&&r<o&&(s.style.display="flex",r++,t.style.transform="translateX(-".concat(+r*+e,"px)"),n[i+r].style.opacity="1",n[r-1].style.opacity="0",r===o&&(u.style.display="none"))}}();!function(e,t,n,r,o){var i=document.querySelectorAll(e),l=document.querySelector(t),c=document.querySelector(n),a=document.querySelector(r),s=document.querySelectorAll(o)[1],u=0;c.addEventListener("click",(function(e){--u<0&&(u=i.length-1-10),l.insertAdjacentElement("afterbegin",i[u]),s.textContent=u+1})),a.addEventListener("click",(function(e){++u>=i.length-10&&(u=0),l.insertAdjacentElement("afterbegin",i[u]),s.textContent=u+1}))}(".portfolio-slider__slide-frame",".portfolio-slider-mobile","#portfolio-arrow-mobile_left","#portfolio-arrow-mobile_right",".slider-counter-content__current")},E=function(){var e,t,n,r=document.getElementById("problems").querySelectorAll(".svg-wrap"),o=document.querySelector(".problems-slider"),i=o.querySelectorAll(".problems-item"),l=document.getElementById("problems-arrow_left"),c=document.getElementById("problems-arrow_right"),a=0;r.forEach((function(r){return r.addEventListener("mouseenter",(function(o){e=+r.dataset.number+1;var i=".problems-item-popup-".concat(e);t=document.querySelectorAll(i)[0],n=document.querySelector("".concat(i,"-before")),t.getBoundingClientRect().top<10&&(n.style.transform="rotate(180deg)",n.style.top="-10px",t.style.top="110px"),showModal(i)}))})),r.forEach((function(r){return r.addEventListener("mouseleave",(function(o){e=+r.dataset.number+1;var i=".problems-item-popup-".concat(e);t=document.querySelector(i),n=document.querySelector("".concat(i,"-before")),unShowModal(i),setTimeout((function(){n.style.transform="",n.style.top="",t.style.top=""}),300)}))})),l.addEventListener("click",(function(e){--a<0&&(a=i.length-1),o.insertAdjacentElement("afterbegin",i[a]),i[a].classList.add("active-item")})),c.addEventListener("click",(function(e){++a>i.length-1&&(a=0),o.insertAdjacentElement("afterbegin",i[a]),i[a].classList.add("active-item")}))},q=function(){var e=document.querySelector("#scheme"),t=e.querySelector(".nav-list"),n=t.children,r=e.querySelectorAll(".scheme-description-block"),o=e.querySelectorAll(".scheme-slider__slide"),i=e.querySelector(".scheme-slider"),l=0;t.addEventListener("click",(function(e){var t=e.target;t.matches(".scheme-nav__item")&&(n[l].classList.remove("active"),r[l].classList.remove("visible-content-block"),l=t.dataset.number,i.insertAdjacentElement("afterbegin",o[l]),n[l].classList.add("active"),r[l].classList.add("visible-content-block"))}))};i(".popup-transparency-slider__slide",".popup-transparency-slider-wrap","#transparency_left","#transparency_right"),window.outerWidth<=1090&&i(".transparency-item",".transparency-slider-wrap","#transparency-arrow_left","#transparency-arrow_right"),document.documentElement.clientWidth<=1024&&o(document.getElementById("repair-types").querySelector(".nav-list-repair"),"#nav-arrow-repair-left_base","#nav-arrow-repair-right_base"),o(document.querySelector(".nav-list-designs"),"#nav-arrow-designs_left","#nav-arrow-designs_right"),u(),v(),s(),f(),d(),_(),q();for(var k=1;k<=6;k++)m("#feedback".concat(k));p();for(var L=1;L<=6;L++)y("#feedback-input".concat(L));E(),new c({main:".partners__wrapper",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right",slidesToShow:3,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init(),i(".reviews-slider__slide",".reviews-slider","#reviews-arrow_left","#reviews-arrow_right"),o(document.getElementById("scheme-list"),"#nav-arrow-scheme_left","#nav-arrow-scheme_right"),g(),a("#formula-arrow_left","#formula-arrow_right",".formula-slider ",".formula-slider__slide"),S(),w()}]);