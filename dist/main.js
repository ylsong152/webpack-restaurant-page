(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Welcome to our tavern!",t.appendChild(n);const d=document.createElement("img");d.src="../images/Tavern-background.jpeg",d.classList.add("homepage-img"),t.appendChild(d);const c=document.createElement("h2");c.textContent="Top Review",t.appendChild(c);const a=document.createElement("img");a.src="../images/homepage-thumbsup.jpeg",a.classList.add("homepage-img2"),t.appendChild(a);const o=document.createElement("p");o.textContent="Best tavern in town!",t.appendChild(o),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),d=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");c.setAttribute("id","home-btn"),a.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),d.classList.add("div-container"),c.classList.add("tab"),a.classList.add("tab"),o.classList.add("tab"),c.textContent="Home",a.textContent="Menu",o.textContent="Contact",n.appendChild(d),d.appendChild(c),d.appendChild(a),d.appendChild(o),c.addEventListener("click",(()=>{t(),e()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const d=document.createElement("ul"),c=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li"),i=document.createElement("li");c.textContent="Juicy Burger",a.textContent="Fish and Chips",o.textContent="Chicken Pot Pie",i.textContent="BEER!",d.appendChild(c),d.appendChild(a),d.appendChild(o),d.appendChild(i),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Contact Us";const d=document.createElement("div"),c=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("p"),i=document.createElement("p"),l=document.createElement("p"),m=document.createElement("img");m.src="../images/Contact-pic.jpg",m.height="200",a.textContent="The Drunken Ogre",o.textContent="1111-111-1111",i.textContent="thedrunkenogre@fakemail.com",l.textContent="420 Main Street, Ogre Avenue",d.classList.add("contact-div"),c.classList.add("contact-details"),c.appendChild(a),c.appendChild(o),c.appendChild(i),c.appendChild(l),d.appendChild(c),d.appendChild(m),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()}))})(),e()})();