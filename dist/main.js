(()=>{"use strict";var t={d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{e$:()=>c,Eg:()=>l,hc:()=>s,il:()=>k,dA:()=>d,wp:()=>b,lt:()=>i,$$:()=>u,pb:()=>r,zJ:()=>o,Jv:()=>m,qD:()=>p});let e=[];class a{constructor(t,e){this.taskName=t,this.dueTime=e}}let n=document.querySelector("[data-task-list]");const d=document.querySelector("main"),c=document.querySelector("[data-add-task-button]"),o=document.querySelector("[data-task-list]"),s=document.createElement("div"),l=document.createElement("div"),i=document.createElement("button"),u=document.createElement("button"),r=document.createElement("input"),k=document.querySelector("#inbox-button"),m=document.querySelector("#today-button"),p=document.querySelector("#week-button"),b=document.querySelector("#month-button");c.addEventListener("click",(()=>{console.log("Add task button has been clicked"),c.style.display="none",r.value="",s.classList.add("add-task-popup-div"),l.classList.add("add-task-popup-buttons-div"),r.classList.add("task-input"),i.classList.add("task-add-confirm-button"),u.classList.add("task-cancel-confirm-button"),i.textContent="Add",u.textContent="Cancel",d.append(s),s.append(r,l),l.append(i,u)})),i.addEventListener("click",(t=>{console.log("Add task confirm button has been clicked"),c.style.display="flex",d.removeChild(s),s.replaceChildren(),0!==r.value.length?(function(){const t=document.createElement("button"),e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h2"),d=document.createElement("div"),c=document.createElement("p"),s=document.createElement("input");t.classList.add("task-button"),e.classList.add("task-button-left-div"),a.classList.add("task-check-button"),n.classList.add("task-title-h2"),d.classList.add("task-button-right-div"),c.classList.add("task-date-p"),s.classList.add("task-date-input"),t.dataset.taskButton="",e.dataset.taskButtonLeftDiv="",a.dataset.taskCheckButton="",n.dataset.taskTitleH2="",d.dataset.taskButtonRightDiv="",c.dataset.taskDateP="",s.dataset.taskDateInput="",s.type="date",n.textContent=r.value,c.textContent="No Date",o.append(t),t.append(e,d),e.append(a,n),d.append(c,s)}(),e.push(new a(r.value)),console.log(e),function(){const t=document.querySelector("[data-task-button]:last-of-type");t.querySelector("[data-task-check-button]").addEventListener("click",(()=>{t.replaceChildren(),n.removeChild(t)}))}(),function(){const t=document.querySelector("[data-task-button]:last-of-type").querySelector("[data-task-date-p]");t.addEventListener("click",(()=>{t.style.display="none"}))}()):alert("Task name can't be empty!")})),u.addEventListener("click",(t=>{console.log("Cancel task confirm button has been clicked"),c.style.display="flex",d.removeChild(s),s.replaceChildren()})),k.addEventListener("click",(t=>{console.log("Inbox tab has been clicked")})),m.addEventListener("click",(t=>{console.log("Today tab has been clicked")})),p.addEventListener("click",(t=>{console.log("Week tab has been clicked")})),b.addEventListener("click",(t=>{console.log("Month tab has been clicked")}))})();