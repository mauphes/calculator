(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),i=(a(15),a(7)),o=a(3),u=a(4),s=a(5),d=a(8),m=a(6),p=a(9),h=(a(17),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){a.setState(Object(o.a)({},e,t.target.value))},a.addProduct=function(){var e,t=a.state,n=t.products,r=t.name,c=t.price;r?c||(e="\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"):e="\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",e?a.setState({error:e}):(n.push({name:r,price:parseInt(c,10)}),a.setState({products:n,name:"",price:"",error:""},a.calcDiscount))},a.calcDiscount=function(){var e=a.state,t=e.products,n=e.allowDiscount,r=n;if(n&&t.length){var c=t.map(function(e){return e.price}),l=c.reduce(function(e,t){return e+t},0),o=n/l,u=Math.max.apply(Math,Object(i.a)(c)),s=!1;t=t.map(function(e){var t=e.price-e.price*o;if(s||e.price!==u){var a=Math.ceil(t);r+=a,e.discountPrice=a}else e.expensive=!0,s=!0;return e});for(var d=0;d<t.length;d++){var m=t[d];m.expensive&&(delete m.expensive,m.discountPrice=l-r)}a.setState({products:t})}},a.state={products:[],error:"",name:"",price:"",discount:null,allowDiscount:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.products,n=t.name,c=t.price,l=t.discount,i=t.error;return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"field_in_row"},r.a.createElement("label",{htmlFor:"productName"},"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement("input",{type:"text",id:"productName",value:n,onChange:this.handleChange.bind(this,"name")})),r.a.createElement("div",{className:"field_in_row"},r.a.createElement("label",{htmlFor:"productPrice"},"\u0426\u0435\u043d\u0430"),r.a.createElement("input",{type:"text",id:"productPrice",value:c,onChange:this.handleChange.bind(this,"price")})),r.a.createElement("div",{className:"field_in_row"},r.a.createElement("button",{onClick:this.addProduct},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),i&&r.a.createElement("div",{className:"error"},i)),r.a.createElement("hr",null),r.a.createElement("h3",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement("td",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("td",null,"\u0426\u0435\u043d\u0430 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439"))),r.a.createElement("tbody",null,a.map(function(e,t){var a=e.name,n=e.price,c=e.discountPrice;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c))}))),r.a.createElement("div",{className:"discountBlock"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443 ",r.a.createElement("input",{type:"text",value:l||"",onChange:this.handleChange.bind(this,"discount")})," \u0440\u0443\u0431\u043b\u0435\u0439 \xa0",r.a.createElement("button",{onClick:function(){return e.setState({allowDiscount:parseInt(l,10)},e.calcDiscount)}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.61f7e97c.chunk.js.map