(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Jonathan","image":"/img/jonathan.png"},{"id":2,"name":"Joseph","image":"/img/joseph.jpg"},{"id":3,"name":"Jotaro","image":"/img/jotaro.png"},{"id":4,"name":"Josuke_4","image":"/img/josuke_4.jpg"},{"id":5,"name":"Giorno","image":"/img/giorno.jpg"},{"id":6,"name":"Jolyne","image":"/img/jolyne.jpg"},{"id":7,"name":"Johnny","image":"/img/johnny.jpg"},{"id":8,"name":"Josuke_8","image":"/img/josuke_8.jpg"},{"id":9,"name":"DIO","image":"/img/DIO.png"},{"id":10,"name":"Speedwagon","image":"/img/speedwagon.png"},{"id":11,"name":"Gyro","image":"/img/gyro.png"},{"id":12,"name":"Weather Report","image":"/img/weather_report.png"}]')},,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),l=t.n(r),s=(t(20),t(5)),i=t(6),m=t(8),o=t(7),d=t(9),u=t(27),g=t(28),h=t(29);t(21);var E=function(e){return c.a.createElement("nav",{className:"navbar nav navbar-static-top"},c.a.createElement("div",null,c.a.createElement("li",{className:"navbar-left"},"Click an image to begin!")),c.a.createElement("div",null,c.a.createElement("li",{className:"navbar-center"},null===e.success?"":e.success?"You guessed correctly!":"You guessed incorrectly!")),c.a.createElement("div",null,c.a.createElement("li",{className:"navbar-right"},"Score: ",e.currentScore," | Top Score: ",e.topScore)))},p=(t(22),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"},"JoJo's Bizarre Clicky-Game"),c.a.createElement("h3",{className:"text-center"},"Click on an image to earn points, but don't click on any more than once!"))}}]),a}(n.Component));t(23);var k=function(e){return c.a.createElement("img",{onClick:e.handler,alt:e.name,src:e.src,id:e.id})},N=t(13),f=[],y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={currentScore:0,topScore:0,clickedArray:[],success:null},t.randomizeJoJos=function(){for(var e,a,t=(f=N).length;0!==t;)a=Math.floor(Math.random()*t),e=f[t-=1],f[t]=f[a],f[a]=e},t.handleButtonClick=function(e){var a=e.target.id;if(-1===t.state.clickedArray.indexOf(a)){var n=t.state.clickedArray;n.push(a),t.state.currentScore===t.state.topScore?(t.setState({topScore:t.state.topScore+1,currentScore:t.state.currentScore+1,clickedArray:n,success:!0}),console.log(t.state.success)):(t.setState({currentScore:t.state.currentScore+1,clickedArray:n,success:!0}),console.log(t.state.success))}else t.setState({currentScore:0,clickedArray:[],success:!1}),console.log(t.state.success);t.randomizeJoJos()},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.randomizeJoJos()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,{currentScore:this.state.currentScore,topScore:this.state.topScore,success:this.state.success}),c.a.createElement(p,null),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(g.a,{className:""},c.a.createElement(h.a,{className:"col-2"}),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[0].image,name:f[0].name,id:f[0].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[1].image,name:f[1].name,id:f[1].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[2].image,name:f[2].name,id:f[2].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[3].image,name:f[3].name,id:f[3].id})),c.a.createElement(h.a,{className:"col-2"})),c.a.createElement(g.a,{className:""},c.a.createElement(h.a,{className:"col-2"}),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[4].image,name:f[4].name,id:f[4].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[5].image,name:f[5].name,id:f[5].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[6].image,name:f[6].name,id:f[6].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[7].image,name:f[7].name,id:f[7].id})),c.a.createElement(h.a,{className:"col-2"})),c.a.createElement(g.a,{className:""},c.a.createElement(h.a,{className:"col-2"}),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[8].image,name:f[8].name,id:f[8].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[9].image,name:f[9].name,id:f[9].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[10].image,name:f[10].name,id:f[10].id})),c.a.createElement(h.a,{className:"col-2"},c.a.createElement(k,{handler:this.handleButtonClick,src:f[11].image,name:f[11].name,id:f[11].id})),c.a.createElement(h.a,{className:"col-2"}))))}}]),a}(n.Component);t(24);var S=function(){return c.a.createElement(y,null)};l.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.beba6932.chunk.js.map