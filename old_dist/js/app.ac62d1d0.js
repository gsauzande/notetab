(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)r=a[d],o[r]&&f.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},1:function(t,e){},"175f":function(t,e,n){"use strict";var i=n("416c"),o=n.n(i);o.a},2019:function(t,e,n){},2253:function(t,e,n){},"416c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.settingsComponent?n("drawer",[n(t.settingsComponent,{tag:"component"})],1):t._e(),n("sidebar",{on:{settingsClick:t.handleClick}}),n("text-editor",{on:{typing:t.toggleText}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showText,expression:"showText"}],staticClass:"saving"},[t._v("Saving...")])],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("div",{ref:"myText",class:t.currentFont||"",attrs:{contenteditable:"true"},on:{keyup:t.onKeyUp}})])},a=[],c=n("0a0d"),l=n.n(c),u=(n("6b54"),n("2f62")),d={name:"TextEditor",mounted:function(){this.$refs.myText.focus()},data:function(){return{filename:"writend_".concat(l()().toString())}},computed:Object(u["b"])(["currentFont","text","currentFilename"]),methods:{onKeyUp:function(){this.$store.dispatch("setText",this.$refs.myText.innerHTML),localStorage.removeItem(this.filename),localStorage.setItem(this.filename,this.$refs.myText.innerHTML),this.$emit("typing")}}},f=d,m=(n("9956"),n("2877")),p=Object(m["a"])(f,r,a,!1,null,"cc51ef56",null),h=p.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("modals-container"),t._m(0),i("div",{staticClass:"settings-option",class:{highlight:t.isHighlighted("fonts")},attrs:{id:"fonts"},on:{click:function(e){return t.handleClick("Fonts")}}},[i("img",{staticClass:"settings-option-icon",attrs:{src:n("c435")}})]),i("div",{staticClass:"settings-option",class:{highlight:t.isHighlighted("markdown-export")},attrs:{id:"markdown-export"},on:{click:t.onMarkdownClick}},[i("img",{staticClass:"settings-option-icon",attrs:{src:n("c564")}})])],1)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:n("a73c"),alt:"writend logo"}})])}],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-container"},[n("v-dialog",{staticStyle:{color:"#000000"}}),n("div",{staticClass:"title"},[t._v("Markdown export")]),n("br"),n("div",{staticClass:"controls"},[n("a",{ref:"downloadLink",staticClass:"button",attrs:{href:t.downloadUrl,download:t.downloadFilename},on:{click:t.saveMarkdown}},[t._v("Save")]),n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.markdown,expression:"markdown",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"button",attrs:{href:"javascript:void(0)"}},[t._v("Copy")])]),n("div",{staticClass:"text"},[t._v(t._s(t.markdown))])],1)},b=[],C=n("cebc"),w=n("8baf"),x={name:"MarkdownModal",data:function(){return{turndown:new w["a"],markdown:"",downloadUrl:"javascript:void(0)",downloadFilename:"writend_".concat(l()(),".md")}},computed:Object(C["a"])({},Object(u["b"])(["text"])),created:function(){this.markdown=this.turndown.turndown(this.text);var t=new Blob([this.markdown],{type:"text/markdown"});this.downloadUrl=URL.createObjectURL(t)},methods:{saveMarkdown:function(){},onCopy:function(){this.$modal.show("dialog",{title:"Copied!",text:"The text has been copied to your clipboard",buttons:[{title:"Close"}]})},onError:function(t){console.error(t),this.$modal.show("dialog",{title:"Error!",text:"Failed to copy text. Please try again or copy manually",buttons:[{title:"Close"}]})}}},F=x,k=(n("ddb3"),Object(m["a"])(F,A,b,!1,null,"18b189b4",null)),_=k.exports,y={name:"Sidebar",components:{MarkdownModal:_},data:function(){return{selectedSetting:null}},computed:{},methods:{isHighlighted:function(t){return this.selectedSetting?t===this.selectedSetting.toLowerCase():""},onMarkdownClick:function(t){this.$modal.show(_,{},{height:"auto",top:"20vh"})},handleClick:function(t){this.selectedSetting===t?(this.selectedSetting=null,this.$emit("settingsClick",null)):(this.selectedSetting=t,this.$emit("settingsClick",t))}}},T=y,E=(n("fde2"),Object(m["a"])(T,g,v,!1,null,"0b926bd9",null)),S=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer"},[n("Box",{staticClass:"box",attrs:{pose:t.isVisible?"visible":"hidden"}}),t._t("default")],2)},O=[],M=n("95d1"),U={name:"Drawer",data:function(){return{isVisible:!1}},props:{currentSettingsComponent:{type:Object,default:null}},components:{Box:M["a"].div({visible:{opacity:1},hidden:{opacity:0}})}},$=U,I=(n("7570"),Object(m["a"])($,j,O,!1,null,"5c2deeac",null)),N=I.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("div",{staticClass:"drawer-title"},[t._v("Fonts")]),i("div",{staticClass:"fonts-container"},[i("div",{staticClass:"font righteous",on:{click:function(e){return t.changeFont("righteous")}}},[t._v("\n      writend\n      "),t.isCurrentFont("righteous")?i("img",{staticClass:"checkmark-img",attrs:{src:n("8f85")}}):t._e()]),i("div",{staticClass:"font open-sans",on:{click:function(e){return t.changeFont("open-sans")}}},[t._v("\n      writend\n      "),t.isCurrentFont("open-sans")?i("img",{staticClass:"checkmark-img",attrs:{src:n("8f85")}}):t._e()]),i("div",{staticClass:"font pacifico",on:{click:function(e){return t.changeFont("pacifico")}}},[t._v("\n      writend\n      "),t.isCurrentFont("pacifico")?i("img",{staticClass:"checkmark-img",attrs:{src:n("8f85")}}):t._e()]),i("div",{staticClass:"font traveling-typewriter",on:{click:function(e){return t.changeFont("traveling-typewriter")}}},[t._v("\n      writend\n      "),t.isCurrentFont("traveling-typewriter")?i("img",{staticClass:"checkmark-img",attrs:{src:n("8f85")}}):t._e()]),i("div",{staticClass:"font ubuntu",on:{click:function(e){return t.changeFont("ubuntu")}}},[t._v("\n      writend\n      "),t.isCurrentFont("ubuntu")?i("img",{staticClass:"checkmark-img",attrs:{src:n("8f85")}}):t._e()])])])},D=[],R={name:"Fonts",computed:Object(u["b"])(["currentFont"]),methods:{changeFont:function(t){t===this.currentFont?this.$store.dispatch("setCurrentFont",""):this.$store.dispatch("setCurrentFont",t)},isCurrentFont:function(t){return this.currentFont===t}}},H=R,L=(n("ac97"),Object(m["a"])(H,B,D,!1,null,"6304e6df",null)),Y=L.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("v-dialog"),i("div",{staticClass:"drawer-title"},[t._v("Saved Files")]),i("div",{staticClass:"fonts-container"},t._l(t.savedFiles,function(e,o){return i("div",{key:o,staticClass:"file"},[i("span",{staticClass:"filename",on:{click:function(n){return t.loadSavedFile(e)}}},[t._v(t._s(e))]),i("img",{staticClass:"action-img",attrs:{src:n("801c")},on:{click:function(n){return t.deleteFile(e)}}})])}),0)],1)},X=[],K=(n("6762"),n("2fdb"),n("a4bb")),Q=n.n(K),J={name:"SavedFiles",data:function(){return{savedFiles:Q()(localStorage).filter(function(t){return t.includes("writend")})}},computed:Object(u["b"])(["currentFilename"]),methods:{loadSavedFile:function(t){this.$store.dispatch("setCurrentFilename",t),this.$store.dispatch("setText",localStorage.getItem(t))},deleteFile:function(t){var e=this;this.$modal.show("dialog",{title:"Deleting File",text:"Are you sure you want to delete ".concat(t,"?"),buttons:[{title:"Yes",handler:function(){localStorage.removeItem(t),e.savedFiles=e.savedFiles.filter(function(e){return e!==t}),e.$modal.hide("dialog")}},{title:"Close"}]})},isCurrentFile:function(t){return this.currentFilename===t}}},V=J,G=(n("175f"),Object(m["a"])(V,P,X,!1,null,"790a248b",null)),W=G.exports,Z={name:"app",components:{TextEditor:h,Sidebar:S,Drawer:N,Fonts:Y,SavedFiles:W},data:function(){return{showText:!1,settingsComponent:null}},methods:{handleClick:function(t){this.settingsComponent?this.settingsComponent=null:this.settingsComponent=t},toggleText:function(){var t=this;this.showText=!this.showText,setTimeout(function(){t.showText=!t.showText},1e3)}}},q=Z,z=(n("034f"),Object(m["a"])(q,o,s,!1,null,null,null)),tt=z.exports,et=n("1881"),nt=n.n(et),it=n("4eb5"),ot=n.n(it);i["a"].use(ot.a),i["a"].use(u["a"]);var st=new u["a"].Store({state:{text:"",currentFont:"",currentFilename:""},actions:{setText:function(t,e){t.commit("SET_TEXT",e)},setCurrentFont:function(t,e){t.commit("SET_CURRENT_FONT",e)},setCurrentFilename:function(t,e){t.commit("SET_CURRENT_FILENAME",e)}},mutations:{SET_TEXT:function(t,e){t.text=e},SET_CURRENT_FONT:function(t,e){t.currentFont=e},SET_CURRENT_FILENAME:function(t,e){t.currentFilename=e}}});i["a"].config.productionTip=!1,i["a"].use(nt.a,{dynamic:!0,dialog:!0}),new i["a"]({render:function(t){return t(tt)},store:st}).$mount("#app")},"64a9":function(t,e,n){},"6d0b":function(t,e,n){},7570:function(t,e,n){"use strict";var i=n("6d0b"),o=n.n(i);o.a},"801c":function(t,e,n){t.exports=n.p+"img/remove-file.0afbb9ae.png"},"8f85":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBAoBLC4iHIl+AAABH0lEQVRo3u2XPQ7CMAxGPwYqUEcEYuQUnAZxJDhKWYEFJkYkxIy4STp0KFWbnyaxPeCvY5W+l7SNHUCj0Wi4U2CHtRx+igoGX2wk8UZKocWLKHTx7Ap9PKtCgdMA3sDgKYs3qOjxw4vfXBfMFa94xSv+NzNsk/GuXc+DL3GDwVFq9g3eJClkwccrZMPHKWTFj1dI+vHOloGHYHzClw8AD+vgMIVEPLDEy/oA/4vIsuu5FSbU+HiFrHv+eIXsJWecAknFC1cgK7hhCqT13q9A3m64FQqObmeFtxXysd655my2XKtAPPs4BZJWM1yBrNMNU7ijpMGHKZDi/QrkeLcCC96uwIYfVmDF9xXY8V0FEXyrIIYHgAX29Od7jUbzb6kBjcoJn22szbkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDQtMDlUMjM6NDQ6NDYrMDI6MDBIBJbjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA0LTA5VDIzOjQ0OjQ2KzAyOjAwOVkuXwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},9956:function(t,e,n){"use strict";var i=n("f407"),o=n.n(i);o.a},a73c:function(t,e,n){t.exports=n.p+"img/app_logo_big.a5a7bea2.png"},ac97:function(t,e,n){"use strict";var i=n("2019"),o=n.n(i);o.a},c0aa:function(t,e,n){},c435:function(t,e,n){t.exports=n.p+"img/typographic-button.0bc5aff4.png"},c564:function(t,e,n){t.exports=n.p+"img/md_small.f5f4b4e2.png"},ddb3:function(t,e,n){"use strict";var i=n("2253"),o=n.n(i);o.a},f407:function(t,e,n){},fde2:function(t,e,n){"use strict";var i=n("c0aa"),o=n.n(i);o.a}});
//# sourceMappingURL=app.ac62d1d0.js.map