(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{384:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("d4cc0356",content,!0,{sourceMap:!1})},417:function(t,e,n){"use strict";n(384)},418:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".fade-enter-active,.fade-leave-active{transition:all .5s ease;visibility:visible;opacity:1;position:absolute}.fade-enter,.fade-leave-to{opacity:.3}",""]),o.locals={},t.exports=o},470:function(t,e,n){"use strict";n.r(e);n(61);var o={props:{position:{type:String}},data:function(){return{images:["/Images/c1/sectionTwo/g1/woman1.jpg","/Images/c1/sectionTwo/g1/woman2.jpg","/Images/c1/sectionTwo/g1/woman3.jpg","/Images/c1/sectionTwo/g1/woman4.jpg","/Images/c1/sectionTwo/g1/woman5.jpg","/Images/c1/sectionTwo/g1/woman6.jpg"],currentNumber:this.position,timer:null}},mounted:function(){this.startRotation()},methods:{startRotation:function(){this.timer=setInterval(this.next,6e3)},stopRotation:function(){clearTimeout(this.timer),this.timer=null},next:function(){this.currentNumber<5?this.currentNumber+=1:this.currentNumber=0}},computed:{currentImage:function(){return this.images[Math.abs(this.currentNumber)%this.images.length]}}},r=(n(417),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative items-center justify-center w-20 h-32"},[n("transition-group",{attrs:{name:"fade",tag:"div"}},t._l([t.currentNumber],(function(e){return n("div",{key:e},[n("img",{staticClass:"object-cover",attrs:{src:t.images[t.currentNumber],alt:""}})])})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);