(()=>{"use strict";let e=1,t={};const d=e=>{const{value:d,id:n}=e.target;t[n]=d},n=(e,t="",d="")=>{if(void 0===e)return!1;const n=document.createElement(e);return n.className=t,n.innerHTML=d,n},o=t=>{e=t},i=()=>JSON.parse(localStorage.getItem("groups")||"[]");class a{constructor({title:e,description:t}){this.title=String(e),this.description=String(t)}save(){const e=i();e.push(this.getAsObject()),localStorage.setItem("groups",JSON.stringify(e))}getAsObject(){const{title:e,description:t}=this;return{title:e,description:t}}}const l=["Deadline","Tasks"],r=()=>{const e=n("div","home"),t=document.createElement("form");["Title","Description","submit"].map((e=>{const d=n("input",void 0,e);return d.type=e,d.placeholder=e,d.id=`${e}GroupField`,t.appendChild(d),!0})),t.id="newGroupForm";const d=(({callToAction:e,id:t,modalBody:d})=>{const o=n("button","btn btn-success",e);o.type="button";const i=document.createAttribute("data-toggle");i.value="modal",o.setAttributeNode(i);const a=document.createAttribute("data-target");a.value=`#${t}Modal`,o.setAttributeNode(a),d=n("div","modal-body",d);const l=n("div","modal-header",`\n  <h5 class="modal-title" id="exampleModalLabel">${e}</h5>\n  <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n  </button>\n  `),r=n("div","modal-content"),c=n("div","modal-dialog"),s=document.createAttribute("role");s.value="document",c.setAttributeNode(s),r.appendChild(l),r.appendChild(d),c.appendChild(r);const u=n("div","modal fade",c.outerHTML);u.id=`${t}Modal`;const p=document.createAttribute("tabindex");p.value="-1",u.setAttributeNode(p);const m=document.createAttribute("role");m.value="dialog",u.setAttributeNode(m);const h=document.createAttribute("aria-labelledby");h.value="exampleModalLabel",u.setAttributeNode(h);const v=document.createAttribute("aria-hidden");return v.value="true",u.setAttributeNode(v),document.getElementById("content").appendChild(u),o})({callToAction:"New Group",id:"newGroup",modalBody:t.outerHTML}),o=n("div","row");i().map((e=>{const t=n("div","card-body");t.innerHTML=`<strong>${e.title}</strong>`;const d=n("div","card",t.outerHTML),i=n("div","col-3",d.outerHTML);return o.appendChild(i),!0})),e.appendChild(d),e.appendChild(o),document.getElementById("content").appendChild(e)},c=()=>{switch(document.getElementById("content").innerHTML="",(()=>{const e=n("nav","nav");l.map((t=>{const d=n("a","nav-link active",t);return d.href="#",d.id=t.toLocaleLowerCase(),e.appendChild(d),!0})),document.getElementById("content").appendChild(e)})(),document.getElementById("deadline").addEventListener("click",(()=>{o(1),c()})),document.getElementById("tasks").addEventListener("click",(()=>{o(2),c()})),e){case 1:r();break;case 2:(()=>{const e=n("div","home"),t=n("div","home-title"),d=n("h1",void 0,"Welcome To Our Menu"),o=n("p",void 0,"<strong>Delicious food made by Dominicans served at your doorstep.</strong>"),i=document.createElement("ul");["Fresh food","Made at order","Fast service","Nice guys"].map((e=>{const t=n("li",void 0,e);return i.appendChild(t),!0})),t.appendChild(d),t.appendChild(o),t.appendChild(i),e.appendChild(t),document.getElementById("content").appendChild(e)})();break;case 3:(()=>{const e=n("div","home"),t=n("div","home-title"),d=n("h1",void 0,"Contact Us"),o=n("p",void 0,"<strong>Delicious food made by Dominicans served at your doorstep.</strong>"),i=document.createElement("form");["email","text","submit"].map((e=>{const t=n("input",void 0,e);return t.type=e,t.placeholder=e,i.appendChild(t),!0})),t.appendChild(d),t.appendChild(o),t.appendChild(i),e.appendChild(t),document.getElementById("content").appendChild(e)})();break;default:r()}};c();const s=document.getElementById("newGroupForm"),{childNodes:u}=s;for(const e in u)"input"==u[e].localName&&u[e].addEventListener("input",d);s.addEventListener("submit",(e=>{e.preventDefault();const{TitleGroupField:d,DescriptionGroupField:n}=t;new a({title:d,description:n}).save(),window.location.reload()}))})();