(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/Myself1.ee9feef4.jpeg"},62:function(e,t,a){e.exports=a.p+"static/media/flask3.eebb1b33.png"},66:function(e,t,a){e.exports=a(99)},71:function(e,t,a){},72:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=(a(71),a(7)),s=a(12),o=a(9),m=a(8),u=a(10),d=a(16),h=a(65),b=a(28),E=a(27),p=a(22),f=(a(72),a(20)),g=a(18),v=a(39),k=a(41);var y=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(f.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},l.a.createElement("a",{href:"https://github.com/weeshengchu",className:"github social"},l.a.createElement(v.a,{icon:k.a,size:"2x"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/wee-sheng-chu-557321119/",className:"linkedin social"},l.a.createElement(v.a,{icon:k.b,size:"2x"}))," "),l.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"\xa9weeshengchu 2020"))))},w=a(59);var N=function(e){return l.a.createElement(w.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center py-5"},l.a.createElement(g.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))};var j=function(e){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(g.a,{md:8},e.children)))},S=a(60);var C=function(e){return l.a.createElement("div",null,l.a.createElement(N,{title:e.title}),l.a.createElement(j,null,l.a.createElement("p",null,"I graduated in May 2019 from Nanyang Technological University with a degree in Mechanical engineering."),l.a.createElement("p",null,"Following that, I joined FDM Group as a Software developer trainee. The training included the following subjects:"),l.a.createElement(S.a,{bordered:!0,size:"sm-1"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Professional Skills"),l.a.createElement("td",null,"SQL"),l.a.createElement("td",null,"Excel/VBA"),l.a.createElement("td",null,"UNIX")),l.a.createElement("tr",null,l.a.createElement("td",null,"Financial Industry Awareness"),l.a.createElement("td",null,"Web Application Design"),l.a.createElement("td",null,"OOD (Java)"),l.a.createElement("td",null,"Web Development in Java (Servlets, JSPs)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Spring Framework"),l.a.createElement("td",null,"Group software development project")))),l.a.createElement("p",null,"After my training, I was placed with BNP Paribas as a DevOps to work on an Angular 8 and Spring Boot technology stack.")))},x=a(25),O=a(15),T=a(31),A=a(61),F=a.n(A),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(x.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0}),F.a.post("http://localhost:3030/api/email",a.state).then((function(e){e.data.success?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),a.setState({disabled:!1,emailSent:!1})}))},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,{title:this.props.title}),l.a.createElement(j,null,l.a.createElement(O.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"full-name"},"Full name"),l.a.createElement(O.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(O.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(O.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(T.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),M=a(26),B=a(44);var D=function(e){var t=Object(B.b)({opacity:1,from:{opacity:0}});return l.a.createElement(B.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement(T.a,{variant:"info",href:e.link,target:"_blank",rel:"noopener noreferrer"},"Live Demo"))};var L=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(D,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},G=a(33),J=a.n(G),H=a(62),P=a.n(H),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(M.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:n})},a.makeItems=function(e){return e.map((function(e){return l.a.createElement(L,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})}))},a.state={items:[{id:0,title:"Myself",subTitle:"The cookbook for developers",imgSrc:J.a,link:"https://github.com/weeshengchu",selected:!1},{id:1,title:"Flask Blog",subTitle:"testing",imgSrc:P.a,link:"https://flaskblogprojectapp.herokuapp.com/",selected:!1},{id:2,title:"Myself",subTitle:"A social network for developers",imgSrc:J.a,link:"https://github.com/weeshengchu",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var W=function(e){return l.a.createElement("div",null,l.a.createElement(N,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(U,null))},z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={title:"Alan CHU",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Stay Curious",subTitle:"projects that make a difference",text:"Checkout my latest projects below"},about:{title:"About Me!"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null,"Alan CHU"),l.a.createElement(b.a.Toggle,{className:"border-bottom","aira-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(h.a,{className:"ml-auto"},l.a.createElement(E.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(E.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(E.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(p.a,{path:"/",exact:!0,render:function(){return l.a.createElement(W,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(p.a,{path:"/about",exact:!0,render:function(){return l.a.createElement(C,{title:e.state.about.title})}}),l.a.createElement(p.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(I,{title:e.state.contact.title})}}),l.a.createElement(y,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98);c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.928f14e0.chunk.js.map