/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));

(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 240) {
          menu_id.css('width', options.menuWidth);
        }

        // Add Touch Area
        var dragTarget = $('<div class="drag-target"></div>');
        $('body').append(dragTarget);

        if (options.edge == 'left') {
          menu_id.css('left', -1 * (options.menuWidth + 10));
          dragTarget.css({'left': 0}); // Add Touch Area
        }
        else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
            .css('right', -1 * (options.menuWidth + 10))
            .css('left', '');
          dragTarget.css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu_id.css('left', 0);
            }
          }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').css('opacity') !== 0 && menuOut) {
                removeMenu(true);
              }
              else {
                menu_id.removeAttr('style');
                menu_id.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left')
                menu_id.css('left', -1 * (options.menuWidth + 10));
              else
                menu_id.css('right', -1 * (options.menuWidth + 10));
            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;

          // Reenable scrolling
          $('body').css('overflow', '');

          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            dragTarget.css({width: '', right: '', left: '0'});
            menu_id.velocity(
              {left: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            dragTarget.css({width: '', right: '0', left: ''});
            menu_id.velocity(
              {right: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }
              });
          }
        }



        // Touch Event
        var panning = false;
        var menuOut = false;

        dragTarget.on('click', function(){
          removeMenu();
        });

        dragTarget.hammer({
          prevent_default: false
        }).bind('pan', function(e) {

          if (e.gesture.pointerType == "touch") {

            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;

            // Disable Scrolling
            $('body').css('overflow', 'hidden');

            // If overlay does not exist, create one and if it is clicked, close menu
            if ($('#sidenav-overlay').length === 0) {
              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0).click( function(){
                removeMenu();
              });
              $('body').append(overlay);
            }

            // Keep within boundaries
            if (options.edge === 'left') {
              if (x > options.menuWidth) { x = options.menuWidth; }
              else if (x < 0) { x = 0; }
            }

            if (options.edge === 'left') {
              // Left Direction
              if (x < (options.menuWidth / 2)) { menuOut = false; }
              // Right Direction
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }

              menu_id.css('left', (x - options.menuWidth));
            }
            else {
              // Left Direction
              if (x < (window.innerWidth - options.menuWidth / 2)) {
                menuOut = true;
              }
              // Right Direction
              else if (x >= (window.innerWidth - options.menuWidth / 2)) {
               menuOut = false;
             }
              var rightPos = -1 *(x - options.menuWidth / 2);
              if (rightPos > 0) {
                rightPos = 0;
              }

              menu_id.css('right', rightPos);
            }




            // Percentage overlay
            var overlayPerc;
            if (options.edge === 'left') {
              overlayPerc = x / options.menuWidth;
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
            else {
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
          }

        }).bind('panend', function(e) {

          if (e.gesture.pointerType == "touch") {
            var velocityX = e.gesture.velocityX;
            panning = false;
            if (options.edge === 'left') {
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                dragTarget.css({width: '50%', right: 0, left: ''});
              }
              else if (!menuOut || velocityX > 0.3) {
                // Enable Scrolling
                $('body').css('overflow', '');
                // Slide menu closed
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                dragTarget.css({width: '10px', right: '', left: 0});
              }
            }
            else {
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                dragTarget.css({width: '50%', right: '', left: 0});
              }
              else if (!menuOut || velocityX < -0.3) {
                // Enable Scrolling
                $('body').css('overflow', '');
                // Slide menu closed
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                dragTarget.css({width: '10px', right: 0, left: ''});
              }
            }

          }
        });

          $this.click(function() {
            if (menuOut === true) {
              menuOut = false;
              panning = false;
              removeMenu();
            }
            else {

              // Disable Scrolling
              $('body').css('overflow', 'hidden');
              // Push current drag target on top of DOM tree
              $('body').append(dragTarget);
              
              if (options.edge === 'left') {
                dragTarget.css({width: '50%', right: 0, left: ''});
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }
              else {
                dragTarget.css({width: '50%', right: '', left: 0});
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                menu_id.css('left','');
              }

              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0)
              .click(function(){
                menuOut = false;
                panning = false;
                removeMenu();
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  } });

              });
              $('body').append(overlay);
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  menuOut = true;
                  panning = false;
                }
              });
            }

            return false;
          });
      });


    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


    $.fn.sideNav = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );
      }
    }; // Plugin end
}( jQuery ));

// CHANGELOG

// 04.11.16 Katie Garcia
// Modified LeanModal to have autoplay option
// Modified LeanModal to pause video on close

(function($) {
    var _stack = 0,
    _lastID = 0,
    _generateID = function() {
      _lastID++;
      return 'materialize-lean-overlay-' + _lastID;
    };

  $.fn.extend({
    openModal: function(options) {

      $('body').css('overflow', 'hidden');

      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        playOnOpen: undefined,
        starting_top: '4%'
      },
      overlayID = _generateID(),
      $modal = $(this),
      $overlay = $('<div class="lean-overlay"></div>'),
      lStack = (++_stack);

      // Store a reference of the overlay
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);

      $("body").append($overlay);

      // Override defaults
      options = $.extend(defaults, options);

      if (options.dismissible) {
        $overlay.click(function() {
          $modal.closeModal(options);
        });
        // Return on ESC
        $(document).on('keyup.leanModal' + overlayID, function(e) {
          if (e.keyCode === 27) {   // ESC key
            $modal.closeModal(options);
          }
        });
      }

      //Trigger events
      $modal.trigger( "modalOpened" );

      //Add close button functionality
      $modal.find(".modal-close").on('click.close', function(e) {
        $modal.closeModal(options);
      });

      //Set display
      $overlay.css({ display : "block", opacity : 0 });

      $modal.css({
        display : "block",
        opacity: 0
      });

      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);

      //Play video, if desired
      if(options.playOnOpen){
        var wistiaId = $modal.find('.wistia_embed').first().attr('id');

        if(wistiaId){ //if wistia embeded video
          var video = Wistia.api(wistiaId);
          video.play();
        } else { // try iframe video
          var iFrame = $modal.find('iframe[src*="youtube.com"]').first();         
  
          if (iFrame.length > 0){
            var currSrc = $(iFrame).attr( 'src');
            if (currSrc.indexOf("autoplay=0") > -1) {
              currSrc = currSrc.replace("autoplay=0", "autoplay=1");
              $(iFrame).attr('src', currSrc);
            } else if (currSrc.indexOf("?") > -1) {
              currSrc = currSrc + "&autoplay=1";
              $(iFrame).attr('src', currSrc);
            } else {
              currSrc = currSrc + "?autoplay=1";
              $(iFrame).attr('src', currSrc);
            }
          }
        }
      }//playOnOpen


      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "0", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
      else {
        $.Velocity.hook($modal, "scaleX", 0.7);
        $modal.css({ top: options.starting_top });
        $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
    }
  });

  $.fn.extend({
    closeModal: function(options) {
      var defaults = {
        out_duration: 250,
        complete: undefined
      },
      $modal = $(this),
      overlayID = $modal.data('overlay-id'),
      $overlay = $('#' + overlayID);

      options = $.extend(defaults, options);

      //Trigger events
      $modal.trigger( "modalClosed" );

      // Disable scrolling
      $('body').css('overflow', '');

      //Listen for close event
      $modal.find('.modal-close').off('click.close');
      $(document).off('keyup.leanModal' + overlayID);

      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});

      //if video modal, pause video on close
      var iFrame = $modal.find('iframe[src*="youtube.com"]').first();     
      if(iFrame){
        var currSrc = $(iFrame).attr( 'src');
        if (currSrc) {
          if (currSrc.indexOf("autoplay=1") > -1) {
            currSrc = currSrc.replace("autoplay=1", "autoplay=0");
            $(iFrame).attr('src', currSrc);
          }
        }
      }//if iframe

      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "-100%", opacity: 0}, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $overlay.css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $overlay.remove();
            _stack--;
          }
        });
      }
      else {
        $modal.velocity(
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {
          duration: options.out_duration,
          complete:
            function() {

              $(this).css('display', 'none');
              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete();
              }
              $overlay.remove();
              _stack--;
            }
          }
        );
      }
    }
  });

  $.fn.extend({
    leanModal: function(option) {
      return this.each(function() {

        var defaults = {
          starting_top: '4%'
        },
        // Override defaults
        options = $.extend(defaults, option);

        // Close Handlers
        $(this).click(function(e) {
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          $(modal_id).openModal(options);
          e.preventDefault();
        }); // done set on click
      }); // done return
    }
  });
})(jQuery);
/**! hopscotch - v0.2.5
*
* Copyright 2015 LinkedIn Corp. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function(context, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  } else {
    var namespace = 'hopscotch';
    // Browser globals
    if (context[namespace]) {
      // Hopscotch already exists.
      return;
    }
    context[namespace] = factory();
  }
}(this, (function() {
  var Hopscotch,
      HopscotchBubble,
      HopscotchCalloutManager,
      HopscotchI18N,
      customI18N,
      customRenderer,
      customEscape,
      templateToUse = 'bubble_default',
      Sizzle = window.Sizzle || null,
      utils,
      callbacks,
      helpers,
      winLoadHandler,
      defaultOpts,
      winHopscotch,
      undefinedStr      = 'undefined',
      waitingToStart    = false, // is a tour waiting for the document to finish
                                 // loading so that it can start?
      hasJquery         = (typeof jQuery !== undefinedStr),
      hasSessionStorage = false,
      isStorageWritable = false,
      document          = window.document,
      validIdRegEx      = /^[a-zA-Z]+[a-zA-Z0-9_-]*$/,
      rtlMatches        = {
        left: 'right',
        right: 'left'
      };

  // If cookies are disabled, accessing sessionStorage can throw an error.
  // sessionStorage could also throw an error in Safari on write (even though it exists).
  // So, we'll try writing to sessionStorage to verify it's available.
  try {
    if(typeof window.sessionStorage !== undefinedStr){
      hasSessionStorage = true;
      sessionStorage.setItem('hopscotch.test.storage', 'ok');
      sessionStorage.removeItem('hopscotch.test.storage');
      isStorageWritable = true;
    }
  } catch (err) {}

  defaultOpts       = {
    smoothScroll:    true,
    scrollDuration:  1000,
    scrollTopMargin: 200,
    showCloseButton: true,
    showPrevButton:  false,
    showNextButton:  true,
    bubbleWidth:     280,
    bubblePadding:   15,
    arrowWidth:      20,
    skipIfNoElement: true,
    isRtl:           false,
    cookieName:      'hopscotch.tour.state'
  };

  if (!Array.isArray) {
    Array.isArray = function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  /**
   * Called when the page is done loading.
   *
   * @private
   */
  winLoadHandler = function() {
    if (waitingToStart) {
      winHopscotch.startTour();
    }
  };

  /**
   * utils
   * =====
   * A set of utility functions, mostly for standardizing to manipulate
   * and extract information from the DOM. Basically these are things I
   * would normally use jQuery for, but I don't want to require it for
   * this framework.
   *
   * @private
   */
  utils = {
    /**
     * addClass
     * ========
     * Adds one or more classes to a DOM element.
     *
     * @private
     */
    addClass: function(domEl, classToAdd) {
      var domClasses,
          classToAddArr,
          setClass,
          i,
          len;

      if (!domEl.className) {
        domEl.className = classToAdd;
      }
      else {
        classToAddArr = classToAdd.split(/\s+/);
        domClasses = ' ' + domEl.className + ' ';
        for (i = 0, len = classToAddArr.length; i < len; ++i) {
          if (domClasses.indexOf(' ' + classToAddArr[i] + ' ') < 0) {
            domClasses += classToAddArr[i] + ' ';
          }
        }
        domEl.className = domClasses.replace(/^\s+|\s+$/g,'');
      }
    },

    /**
     * removeClass
     * ===========
     * Remove one or more classes from a DOM element.
     *
     * @private
     */
    removeClass: function(domEl, classToRemove) {
      var domClasses,
          classToRemoveArr,
          currClass,
          i,
          len;

      classToRemoveArr = classToRemove.split(/\s+/);
      domClasses = ' ' + domEl.className + ' ';
      for (i = 0, len = classToRemoveArr.length; i < len; ++i) {
        domClasses = domClasses.replace(' ' + classToRemoveArr[i] + ' ', ' ');
      }
      domEl.className = domClasses.replace(/^\s+|\s+$/g,'');
    },

    /**
     * hasClass
     * ========
     * Determine if a given DOM element has a class.
     */
    hasClass: function(domEl, classToCheck){
      var classes;

      if(!domEl.className){ return false; }
      classes = ' ' + domEl.className + ' ';
      return (classes.indexOf(' ' + classToCheck + ' ') !== -1);
    },

    /**
     * @private
     */
    getPixelValue: function(val) {
      var valType = typeof val;
      if (valType === 'number') { return val; }
      if (valType === 'string') { return parseInt(val, 10); }
      return 0;
    },

    /**
     * Inspired by Python... returns val if it's defined, otherwise returns the default.
     *
     * @private
     */
    valOrDefault: function(val, valDefault) {
      return typeof val !== undefinedStr ? val : valDefault;
    },

    /**
     * Invokes a single callback represented by an array.
     * Example input: ["my_fn", "arg1", 2, "arg3"]
     * @private
     */
    invokeCallbackArrayHelper: function(arr) {
      // Logic for a single callback
      var fn;
      if (Array.isArray(arr)) {
        fn = helpers[arr[0]];
        if (typeof fn === 'function') {
          return fn.apply(this, arr.slice(1));
        }
      }
    },

    /**
     * Invokes one or more callbacks. Array should have at most one level of nesting.
     * Example input:
     * ["my_fn", "arg1", 2, "arg3"]
     * [["my_fn_1", "arg1", "arg2"], ["my_fn_2", "arg2-1", "arg2-2"]]
     * [["my_fn_1", "arg1", "arg2"], function() { ... }]
     * @private
     */
    invokeCallbackArray: function(arr) {
      var i, len;

      if (Array.isArray(arr)) {
        if (typeof arr[0] === 'string') {
          // Assume there are no nested arrays. This is the one and only callback.
          return utils.invokeCallbackArrayHelper(arr);
        }
        else { // assume an array
          for (i = 0, len = arr.length; i < len; ++i) {
            utils.invokeCallback(arr[i]);
          }
        }
      }
    },

    /**
     * Helper function for invoking a callback, whether defined as a function literal
     * or an array that references a registered helper function.
     * @private
     */
    invokeCallback: function(cb) {
      if (typeof cb === 'function') {
        return cb();
      }
      if (typeof cb === 'string' && helpers[cb]) { // name of a helper
        return helpers[cb]();
      }
      else { // assuming array
        return utils.invokeCallbackArray(cb);
      }
    },

    /**
     * If stepCb (the step-specific helper callback) is passed in, then invoke
     * it first. Then invoke tour-wide helper.
     *
     * @private
     */
    invokeEventCallbacks: function(evtType, stepCb) {
      var cbArr = callbacks[evtType],
          callback,
          fn,
          i,
          len;

      if (stepCb) {
        return this.invokeCallback(stepCb);
      }

      for (i=0, len=cbArr.length; i<len; ++i) {
        this.invokeCallback(cbArr[i].cb);
      }
    },

    /**
     * @private
     */
    getScrollTop: function() {
      var scrollTop;
      if (typeof window.pageYOffset !== undefinedStr) {
        scrollTop = window.pageYOffset;
      }
      else {
        // Most likely IE <=8, which doesn't support pageYOffset
        scrollTop = document.documentElement.scrollTop;
      }
      return scrollTop;
    },

    /**
     * @private
     */
    getScrollLeft: function() {
      var scrollLeft;
      if (typeof window.pageXOffset !== undefinedStr) {
        scrollLeft = window.pageXOffset;
      }
      else {
        // Most likely IE <=8, which doesn't support pageXOffset
        scrollLeft = document.documentElement.scrollLeft;
      }
      return scrollLeft;
    },

    /**
     * @private
     */
    getWindowHeight: function() {
      return window.innerHeight || document.documentElement.clientHeight;
    },

    /**
     * @private
     */
    addEvtListener: function(el, evtName, fn) {
      if(el) {
        return el.addEventListener ? el.addEventListener(evtName, fn, false) : el.attachEvent('on' + evtName, fn);
      }
    },

    /**
     * @private
     */
    removeEvtListener: function(el, evtName, fn) {
      if(el) {
        return el.removeEventListener ? el.removeEventListener(evtName, fn, false) : el.detachEvent('on' + evtName, fn);
      }
    },

    documentIsReady: function() {
      return document.readyState === 'complete';
    },

    /**
     * @private
     */
    evtPreventDefault: function(evt) {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      else if (event) {
        event.returnValue = false;
      }
    },

    /**
     * @private
     */
    extend: function(obj1, obj2) {
      var prop;
      for (prop in obj2) {
        if (obj2.hasOwnProperty(prop)) {
          obj1[prop] = obj2[prop];
        }
      }
    },

    /**
     * Helper function to get a single target DOM element. We will try to
     * locate the DOM element through several ways, in the following order:
     *
     * 1) Passing the string into document.querySelector
     * 2) Passing the string to jQuery, if it exists
     * 3) Passing the string to Sizzle, if it exists
     * 4) Calling document.getElementById if it is a plain id
     *
     * Default case is to assume the string is a plain id and call
     * document.getElementById on it.
     *
     * @private
     */
    getStepTargetHelper: function(target){
      var result = document.getElementById(target);

      //Backwards compatibility: assume the string is an id
      if (result) {
        return result;
      }
      if (hasJquery) {
        result = jQuery(target);
        return result.length ? result[0] : null;
      }
      if (Sizzle) {
        result = new Sizzle(target);
        return result.length ? result[0] : null;
      }
      if (document.querySelector) {
        try {
          return document.querySelector(target);
        } catch (err) {}
      }
      // Regex test for id. Following the HTML 4 spec for valid id formats.
      // (http://www.w3.org/TR/html4/types.html#type-id)
      if (/^#[a-zA-Z][\w-_:.]*$/.test(target)) {
        return document.getElementById(target.substring(1));
      }

      return null;
    },

    /**
     * Given a step, returns the target DOM element associated with it. It is
     * recommended to only assign one target per step. However, there are
     * some use cases which require multiple step targets to be supplied. In
     * this event, we will use the first target in the array that we can
     * locate on the page. See the comments for getStepTargetHelper for more
     * information.
     *
     * @private
     */
    getStepTarget: function(step) {
      var queriedTarget;

      if (!step || !step.target) {
        return null;
      }

      if (typeof step.target === 'string') {
        //Just one target to test. Check and return its results.
        return utils.getStepTargetHelper(step.target);
      }
      else if (Array.isArray(step.target)) {
        // Multiple items to check. Check each and return the first success.
        // Assuming they are all strings.
        var i,
            len;

        for (i = 0, len = step.target.length; i < len; i++){
          if (typeof step.target[i] === 'string') {
            queriedTarget = utils.getStepTargetHelper(step.target[i]);

            if (queriedTarget) {
              return queriedTarget;
            }
          }
        }
        return null;
      }

      // Assume that the step.target is a DOM element
      return step.target;
    },

    /**
     * Convenience method for getting an i18n string. Returns custom i18n value
     * or the default i18n value if no custom value exists.
     *
     * @private
     */
    getI18NString: function(key) {
      return customI18N[key] || HopscotchI18N[key];
    },

    // Tour session persistence for multi-page tours. Uses HTML5 sessionStorage if available, then
    // falls back to using cookies.
    //
    // The following cookie-related logic is borrowed from:
    // http://www.quirksmode.org/js/cookies.html

    /**
     * @private
     */
    setState: function(name,value,days) {
      var expires = '',
          date;

      if (hasSessionStorage && isStorageWritable) {
        try{
          sessionStorage.setItem(name, value);
        }
        catch(err){
          isStorageWritable = false;
          this.setState(name, value, days);
        }
      }
      else {
        if(hasSessionStorage){
          //Clear out existing sessionStorage key so the new value we set to cookie gets read.
          //(If we're here, we've run into an error while trying to write to sessionStorage).
          sessionStorage.removeItem(name);
        }
        if (days) {
          date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          expires = '; expires='+date.toGMTString();
        }
        document.cookie = name+'='+value+expires+'; path=/';
      }
    },

    /**
     * @private
     */
    getState: function(name) {
      var nameEQ = name + '=',
          ca = document.cookie.split(';'),
          i,
          c,
          state;

      //return value from session storage if we have it
      if (hasSessionStorage) {
        state = sessionStorage.getItem(name);
        if(state){
          return state;
        }
      }

      //else, try cookies
      for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)===' ') {c = c.substring(1,c.length);}
        if (c.indexOf(nameEQ) === 0) {
          state = c.substring(nameEQ.length,c.length);
          break;
        }
      }

      return state;
    },

    /**
     * @private
     */
    clearState: function(name) {
      if (hasSessionStorage) {
        sessionStorage.removeItem(name);
      }
      else {
        this.setState(name,'',-1);
      }
    },

    /**
     * Originally called it orientation, but placement is more intuitive.
     * Allowing both for now for backwards compatibility.
     * @private
     */
    normalizePlacement: function(step) {
      if (!step.placement && step.orientation) {
        step.placement = step.orientation;
      }
    },

    /**
     * If step is right-to-left enabled, flip the placement and xOffset, but only once.
     * @private
     */
    flipPlacement: function(step){
      if(step.isRtl && !step._isFlipped){
        var props = ['orientation', 'placement'], prop, i;
        if(step.xOffset){
          step.xOffset = -1 * this.getPixelValue(step.xOffset);
        }
        for(i in props){
          prop = props[i];
          if(step.hasOwnProperty(prop) && rtlMatches.hasOwnProperty(step[prop])) {
            step[prop] = rtlMatches[step[prop]];
          }
        }
        step._isFlipped = true;
      }
    }
  };

  utils.addEvtListener(window, 'load', winLoadHandler);

  callbacks = {
    next:  [],
    prev:  [],
    start: [],
    end:   [],
    show:  [],
    error: [],
    close: []
  };

  /**
   * helpers
   * =======
   * A map of functions to be used as callback listeners. Functions are
   * added to and removed from the map using the functions
   * Hopscotch.registerHelper() and Hopscotch.unregisterHelper().
   */
  helpers = {};

  HopscotchI18N = {
    stepNums: null,
    nextBtn: 'Next',
    prevBtn: 'Back',
    doneBtn: 'Done',
    skipBtn: 'Skip',
    closeTooltip: 'Close'
  };

  customI18N = {}; // Developer's custom i18n strings goes here.

  /**
   * HopscotchBubble
   *
   * @class The HopscotchBubble class represents the view of a bubble. This class is also used for Hopscotch callouts.
   */
  HopscotchBubble = function(opt) {
    this.init(opt);
  };

  HopscotchBubble.prototype = {
    isShowing: false,

    currStep: undefined,

    /**
     * setPosition
     *
     * Sets the position of the bubble using the bounding rectangle of the
     * target element and the orientation and offset information specified by
     * the JSON.
     */
    setPosition: function(step) {
      var bubbleBoundingHeight,
          bubbleBoundingWidth,
          boundingRect,
          top,
          left,
          arrowOffset,
          verticalLeftPosition,
          targetEl     = utils.getStepTarget(step),
          el           = this.element,
          arrowEl      = this.arrowEl,
          arrowPos     = step.isRtl ? 'right' : 'left';

      utils.flipPlacement(step);
      utils.normalizePlacement(step);

      bubbleBoundingWidth = el.offsetWidth;
      bubbleBoundingHeight = el.offsetHeight;
      utils.removeClass(el, 'fade-in-down fade-in-up fade-in-left fade-in-right');

      // SET POSITION
      boundingRect = targetEl.getBoundingClientRect();

      verticalLeftPosition = step.isRtl ? boundingRect.right - bubbleBoundingWidth : boundingRect.left;

      if (step.placement === 'top') {
        top = (boundingRect.top - bubbleBoundingHeight) - this.opt.arrowWidth;
        left = verticalLeftPosition;
      }
      else if (step.placement === 'bottom') {
        top = boundingRect.bottom + this.opt.arrowWidth;
        left = verticalLeftPosition;
      }
      else if (step.placement === 'left') {
        top = boundingRect.top;
        left = boundingRect.left - bubbleBoundingWidth - this.opt.arrowWidth;
      }
      else if (step.placement === 'right') {
        top = boundingRect.top;
        left = boundingRect.right + this.opt.arrowWidth;
      }
      else {
        throw new Error('Bubble placement failed because step.placement is invalid or undefined!');
      }

      // SET (OR RESET) ARROW OFFSETS
      if (step.arrowOffset !== 'center') {
        arrowOffset = utils.getPixelValue(step.arrowOffset);
      }
      else {
        arrowOffset = step.arrowOffset;
      }
      if (!arrowOffset) {
        arrowEl.style.top = '';
        arrowEl.style[arrowPos] = '';
      }
      else if (step.placement === 'top' || step.placement === 'bottom') {
        arrowEl.style.top = '';
        if (arrowOffset === 'center') {
          arrowEl.style[arrowPos] = Math.floor((bubbleBoundingWidth / 2) - arrowEl.offsetWidth/2) + 'px';
        }
        else {
          // Numeric pixel value
          arrowEl.style[arrowPos] = arrowOffset + 'px';
        }
      }
      else if (step.placement === 'left' || step.placement === 'right') {
        arrowEl.style[arrowPos] = '';
        if (arrowOffset === 'center') {
          arrowEl.style.top = Math.floor((bubbleBoundingHeight / 2) - arrowEl.offsetHeight/2) + 'px';
        }
        else {
          // Numeric pixel value
          arrowEl.style.top = arrowOffset + 'px';
        }
      }

      // HORIZONTAL OFFSET
      if (step.xOffset === 'center') {
        left = (boundingRect.left + targetEl.offsetWidth/2) - (bubbleBoundingWidth / 2);
      }
      else {
        left += utils.getPixelValue(step.xOffset);
      }
      // VERTICAL OFFSET
      if (step.yOffset === 'center') {
        top = (boundingRect.top + targetEl.offsetHeight/2) - (bubbleBoundingHeight / 2);
      }
      else {
        top += utils.getPixelValue(step.yOffset);
      }

      // ADJUST TOP FOR SCROLL POSITION
      if (!step.fixedElement) {
        top += utils.getScrollTop();
        left += utils.getScrollLeft();
      }

      // ACCOUNT FOR FIXED POSITION ELEMENTS
      el.style.position = (step.fixedElement ? 'fixed' : 'absolute');

      el.style.top = top + 'px';
      el.style.left = left + 'px';
    },

    /**
     * Renders the bubble according to the step JSON.
     *
     * @param {Object} step Information defining how the bubble should look.
     * @param {Number} idx The index of the step in the tour. Not used for callouts.
     * @param {Function} callback Function to be invoked after rendering is finished.
     */
    render: function(step, idx, callback) {
      var el = this.element,
          tourSpecificRenderer,
          customTourData,
          unsafe,
          currTour,
          totalSteps,
          totalStepsI18n,
          nextBtnText,
          isLast,
          opts;

      // Cache current step information.
      if (step) {
        this.currStep = step;
      }
      else if (this.currStep) {
        step = this.currStep;
      }

      // Check current tour for total number of steps and custom render data
      if(this.opt.isTourBubble){
        currTour = winHopscotch.getCurrTour();
        if(currTour){
          customTourData = currTour.customData;
          tourSpecificRenderer = currTour.customRenderer;
          step.isRtl = step.hasOwnProperty('isRtl') ? step.isRtl :
            (currTour.hasOwnProperty('isRtl') ? currTour.isRtl : this.opt.isRtl);
          unsafe = currTour.unsafe;
          if(Array.isArray(currTour.steps)){
            totalSteps = currTour.steps.length;
            totalStepsI18n = this._getStepI18nNum(this._getStepNum(totalSteps - 1));
            isLast = (this._getStepNum(idx) === this._getStepNum(totalSteps - 1));
          }
        }
      }else{
        customTourData = step.customData;
        tourSpecificRenderer = step.customRenderer;
        unsafe = step.unsafe;
        step.isRtl = step.hasOwnProperty('isRtl') ? step.isRtl : this.opt.isRtl;
      }

      // Determine label for next button
      if(isLast){
        nextBtnText = utils.getI18NString('doneBtn');
      } else if(step.showSkip) {
        nextBtnText = utils.getI18NString('skipBtn');
      } else {
        nextBtnText = utils.getI18NString('nextBtn');
      }

      utils.flipPlacement(step);
      utils.normalizePlacement(step);

      this.placement = step.placement;

      // Setup the configuration options we want to pass along to the template
      opts = {
        i18n: {
          prevBtn: utils.getI18NString('prevBtn'),
          nextBtn: nextBtnText,
          closeTooltip: utils.getI18NString('closeTooltip'),
          stepNum: this._getStepI18nNum(this._getStepNum(idx)),
          numSteps: totalStepsI18n
        },
        buttons:{
          showPrev: (utils.valOrDefault(step.showPrevButton, this.opt.showPrevButton) && (this._getStepNum(idx) > 0)),
          showNext: utils.valOrDefault(step.showNextButton, this.opt.showNextButton),
          showCTA: utils.valOrDefault((step.showCTAButton && step.ctaLabel), false),
          ctaLabel: step.ctaLabel,
          showClose: utils.valOrDefault(this.opt.showCloseButton, true)
        },
        step:{
          num: idx,
          isLast: utils.valOrDefault(isLast, false),
          title: (step.title || ''),
          content: (step.content || ''),
          isRtl: step.isRtl,
          placement: step.placement,
          padding: utils.valOrDefault(step.padding, this.opt.bubblePadding),
          width: utils.getPixelValue(step.width) || this.opt.bubbleWidth,
          customData: (step.customData || {})
        },
        tour:{
          isTour: this.opt.isTourBubble,
          numSteps: totalSteps,
          unsafe: utils.valOrDefault(unsafe, false),
          customData: (customTourData || {})
        }
      };

      // Render the bubble's content.
      // Use tour renderer if available, then the global customRenderer if defined.
      if(typeof tourSpecificRenderer === 'function'){
        el.innerHTML = tourSpecificRenderer(opts);
      }
      else if(typeof tourSpecificRenderer === 'string'){
        if(!winHopscotch.templates || (typeof winHopscotch.templates[tourSpecificRenderer] !== 'function')){
          throw new Error('Bubble rendering failed - template "' + tourSpecificRenderer + '" is not a function.');
        }
        el.innerHTML = winHopscotch.templates[tourSpecificRenderer](opts);
      }
      else if(customRenderer){
        el.innerHTML = customRenderer(opts);
      }
      else{
        if(!winHopscotch.templates || (typeof winHopscotch.templates[templateToUse] !== 'function')){
          throw new Error('Bubble rendering failed - template "' + templateToUse + '" is not a function.');
        }
        el.innerHTML = winHopscotch.templates[templateToUse](opts);
      }

      // Find arrow among new child elements.
      children = el.children;
      numChildren = children.length;
      for (i = 0; i < numChildren; i++){
        node = children[i];

        if(utils.hasClass(node, 'hopscotch-arrow')){
          this.arrowEl = node;
        }
      }

      // Set z-index and arrow placement
      el.style.zIndex = (typeof step.zindex === 'number') ? step.zindex : '';
      this._setArrow(step.placement);

      // Set bubble positioning
      // Make sure we're using visibility:hidden instead of display:none for height/width calculations.
      this.hide(false);
      this.setPosition(step);

      // only want to adjust window scroll for non-fixed elements
      if (callback) {
        callback(!step.fixedElement);
      }

      return this;
    },
    /**
     * Get step number considering steps that were skipped because their target wasn't found
     *
     * @private
     */
    _getStepNum: function(idx) {
      var skippedStepsCount = 0,
          stepIdx,
          skippedSteps = winHopscotch.getSkippedStepsIndexes(),
          i,
          len = skippedSteps.length;
      //count number of steps skipped before current step
      for(i = 0; i < len; i++) {
        stepIdx = skippedSteps[i];
        if(stepIdx<idx) {
          skippedStepsCount++;
        }
      }
      return idx - skippedStepsCount;
    },
    /**
     * Get the I18N step number for the current step.
     *
     * @private
     */
    _getStepI18nNum: function(idx) {
      var stepNumI18N = utils.getI18NString('stepNums');
      if (stepNumI18N && idx < stepNumI18N.length) {
        idx = stepNumI18N[idx];
      }
      else {
        idx = idx + 1;
      }
      return idx;
    },

    /**
     * Sets which side the arrow is on.
     *
     * @private
     */
    _setArrow: function(placement) {
      utils.removeClass(this.arrowEl, 'down up right left');

      // Whatever the orientation is, we want to arrow to appear
      // "opposite" of the orientation. E.g., a top orientation
      // requires a bottom arrow.
      if (placement === 'top') {
        utils.addClass(this.arrowEl, 'down');
      }
      else if (placement === 'bottom') {
        utils.addClass(this.arrowEl, 'up');
      }
      else if (placement === 'left') {
        utils.addClass(this.arrowEl, 'right');
      }
      else if (placement === 'right') {
        utils.addClass(this.arrowEl, 'left');
      }
    },

    /**
     * @private
     */
    _getArrowDirection: function() {
      if (this.placement === 'top') {
        return 'down';
      }
      if (this.placement === 'bottom') {
        return 'up';
      }
      if (this.placement === 'left') {
        return 'right';
      }
      if (this.placement === 'right') {
        return 'left';
      }
    },

    show: function() {
      var self      = this,
          fadeClass = 'fade-in-' + this._getArrowDirection(),
          fadeDur   = 1000;

      utils.removeClass(this.element, 'hide');
      utils.addClass(this.element, fadeClass);
      setTimeout(function() {
        utils.removeClass(self.element, 'invisible');
      }, 50);
      setTimeout(function() {
        utils.removeClass(self.element, fadeClass);
      }, fadeDur);
      this.isShowing = true;
      return this;
    },

    hide: function(remove) {
      var el = this.element;

      remove = utils.valOrDefault(remove, true);
      el.style.top = '';
      el.style.left = '';

      // display: none
      if (remove) {
        utils.addClass(el, 'hide');
        utils.removeClass(el, 'invisible');
      }
      // opacity: 0
      else {
        utils.removeClass(el, 'hide');
        utils.addClass(el, 'invisible');
      }
      utils.removeClass(el, 'animate fade-in-up fade-in-down fade-in-right fade-in-left');
      this.isShowing = false;
      return this;
    },

    destroy: function() {
      var el = this.element;

      if (el) {
        el.parentNode.removeChild(el);
      }
      utils.removeEvtListener(el, 'click', this.clickCb);
    },

    _handleBubbleClick: function(evt){
      var action;

      // Override evt for IE8 as IE8 doesn't pass event but binds it to window
      evt = evt || window.event; // get window.event if argument is falsy (in IE)

      // get srcElement if target is falsy (IE)
      var targetElement = evt.target || evt.srcElement;

      //Recursively look up the parent tree until we find a match
      //with one of the classes we're looking for, or the triggering element.
      function findMatchRecur(el){
        /* We're going to make the assumption that we're not binding
         * multiple event classes to the same element.
         * (next + previous = wait... err... what?)
         *
         * In the odd event we end up with an element with multiple
         * possible matches, the following priority order is applied:
         * hopscotch-cta, hopscotch-next, hopscotch-prev, hopscotch-close
         */
         if(el === evt.currentTarget){ return null; }
         if(utils.hasClass(el, 'hopscotch-cta')){ return 'cta'; }
         if(utils.hasClass(el, 'hopscotch-next')){ return 'next'; }
         if(utils.hasClass(el, 'hopscotch-prev')){ return 'prev'; }
         if(utils.hasClass(el, 'hopscotch-close')){ return 'close'; }
         /*else*/ return findMatchRecur(el.parentElement);
      }

      action = findMatchRecur(targetElement);

      //Now that we know what action we should take, let's take it.
      if (action === 'cta'){
        if (!this.opt.isTourBubble) {
          // This is a callout. Close the callout when CTA is clicked.
          winHopscotch.getCalloutManager().removeCallout(this.currStep.id);
        }
        // Call onCTA callback if one is provided
        if (this.currStep.onCTA) {
          utils.invokeCallback(this.currStep.onCTA);
        }
      }
      else if (action === 'next'){
        winHopscotch.nextStep(true);
      }
      else if (action === 'prev'){
        winHopscotch.prevStep(true);
      }
      else if (action === 'close'){
        if (this.opt.isTourBubble){
          var currStepNum   = winHopscotch.getCurrStepNum(),
              currTour      = winHopscotch.getCurrTour(),
              doEndCallback = (currStepNum === currTour.steps.length-1);

          utils.invokeEventCallbacks('close');

          winHopscotch.endTour(true, doEndCallback);
        } else {
          if (this.opt.onClose) {
            utils.invokeCallback(this.opt.onClose);
          }
          if (this.opt.id && !this.opt.isTourBubble) {
            // Remove via the HopscotchCalloutManager.
            // removeCallout() calls HopscotchBubble.destroy internally.
            winHopscotch.getCalloutManager().removeCallout(this.opt.id);
          }
          else {
            this.destroy();
          }
        }

        utils.evtPreventDefault(evt);
      }
      //Otherwise, do nothing. We didn't click on anything relevant.
    },

    init: function(initOpt) {
      var el              = document.createElement('div'),
          self            = this,
          resizeCooldown  = false, // for updating after window resize
          onWinResize,
          appendToBody,
          children,
          numChildren,
          node,
          i,
          currTour,
          opt;

      //Register DOM element for this bubble.
      this.element = el;

      //Merge bubble options with defaults.
      opt = {
        showPrevButton: defaultOpts.showPrevButton,
        showNextButton: defaultOpts.showNextButton,
        bubbleWidth:    defaultOpts.bubbleWidth,
        bubblePadding:  defaultOpts.bubblePadding,
        arrowWidth:     defaultOpts.arrowWidth,
        isRtl:          defaultOpts.isRtl,
        showNumber:     true,
        isTourBubble:   true
      };
      initOpt = (typeof initOpt === undefinedStr ? {} : initOpt);
      utils.extend(opt, initOpt);
      this.opt = opt;

      //Apply classes to bubble. Add "animated" for fade css animation
      el.className = 'hopscotch-bubble animated';
      if (!opt.isTourBubble) {
        utils.addClass(el, 'hopscotch-callout no-number');
      } else {
        currTour = winHopscotch.getCurrTour();
        if(currTour){
          utils.addClass(el, 'tour-' + currTour.id);
        }
      }

      /**
       * Not pretty, but IE8 doesn't support Function.bind(), so I'm
       * relying on closures to keep a handle of "this".
       * Reset position of bubble when window is resized
       *
       * @private
       */
      onWinResize = function() {
        if (resizeCooldown || !self.isShowing) {
          return;
        }

        resizeCooldown = true;
        setTimeout(function() {
          self.setPosition(self.currStep);
          resizeCooldown = false;
        }, 100);
      };

      //Add listener to reset bubble position on window resize
      utils.addEvtListener(window, 'resize', onWinResize);

      //Create our click callback handler and keep a
      //reference to it for later.
      this.clickCb = function(evt){
        self._handleBubbleClick(evt);
      };
      utils.addEvtListener(el, 'click', this.clickCb);

      //Hide the bubble by default
      this.hide();

      //Finally, append our new bubble to body once the DOM is ready.
      if (utils.documentIsReady()) {
        document.body.appendChild(el);
      }
      else {
        // Moz, webkit, Opera
        if (document.addEventListener) {
          appendToBody = function() {
            document.removeEventListener('DOMContentLoaded', appendToBody);
            window.removeEventListener('load', appendToBody);

            document.body.appendChild(el);
          };

          document.addEventListener('DOMContentLoaded', appendToBody, false);
        }
        // IE
        else {
          appendToBody = function() {
            if (document.readyState === 'complete') {
              document.detachEvent('onreadystatechange', appendToBody);
              window.detachEvent('onload', appendToBody);
              document.body.appendChild(el);
            }
          };

          document.attachEvent('onreadystatechange', appendToBody);
        }
        utils.addEvtListener(window, 'load', appendToBody);
      }
    }
  };

  /**
   * HopscotchCalloutManager
   *
   * @class Manages the creation and destruction of single callouts.
   * @constructor
   */
  HopscotchCalloutManager = function() {
    var callouts = {},
        calloutOpts = {};

    /**
     * createCallout
     *
     * Creates a standalone callout. This callout has the same API
     * as a Hopscotch tour bubble.
     *
     * @param {Object} opt The options for the callout. For the most
     * part, these are the same options as you would find in a tour
     * step.
     */
    this.createCallout = function(opt) {
      var callout;

      if (opt.id) {
        if(!validIdRegEx.test(opt.id)) {
          throw new Error('Callout ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.');
        }
        if (callouts[opt.id]) {
          throw new Error('Callout by that id already exists. Please choose a unique id.');
        }
        if (!utils.getStepTarget(opt)) {
          throw new Error('Must specify existing target element via \'target\' option.');
        }
        opt.showNextButton = opt.showPrevButton = false;
        opt.isTourBubble = false;
        callout = new HopscotchBubble(opt);
        callouts[opt.id] = callout;
        calloutOpts[opt.id] = opt;
        callout.render(opt, null, function() {
          callout.show();
          if (opt.onShow) {
            utils.invokeCallback(opt.onShow);
          }
        });
      }
      else {
        throw new Error('Must specify a callout id.');
      }
      return callout;
    };

    /**
     * getCallout
     *
     * Returns a callout by its id.
     *
     * @param {String} id The id of the callout to fetch.
     * @returns {Object} HopscotchBubble
     */
    this.getCallout = function(id) {
      return callouts[id];
    };

    /**
     * removeAllCallouts
     *
     * Removes all existing callouts.
     */
    this.removeAllCallouts = function() {
      var calloutId;

      for (calloutId in callouts) {
        if (callouts.hasOwnProperty(calloutId)) {
          this.removeCallout(calloutId);
        }
      }
    };

    /**
     * removeCallout
     *
     * Removes an existing callout by id.
     *
     * @param {String} id The id of the callout to remove.
     */
    this.removeCallout = function(id) {
      var callout = callouts[id];

      callouts[id] = null;
      calloutOpts[id] = null;
      if (!callout) { return; }

      callout.destroy();
    };

    /**
     * refreshCalloutPositions
     *
     * Refresh the positions for all callouts known by the
     * callout manager. Typically you'll use
     * hopscotch.refreshBubblePosition() to refresh ALL
     * bubbles instead of calling this directly.
     */
    this.refreshCalloutPositions = function(){
      var calloutId,
          callout,
          opts;

      for (calloutId in callouts) {
        if (callouts.hasOwnProperty(calloutId) && calloutOpts.hasOwnProperty(calloutId)) {
          callout = callouts[calloutId];
          opts = calloutOpts[calloutId];
          if(callout && opts){
            callout.setPosition(opts);
          }
        }
      }
    };
  };

  /**
   * Hopscotch
   *
   * @class Creates the Hopscotch object. Used to manage tour progress and configurations.
   * @constructor
   * @param {Object} initOptions Options to be passed to `configure()`.
   */
  Hopscotch = function(initOptions) {
    var self       = this, // for targetClickNextFn
        bubble,
        calloutMgr,
        opt,
        currTour,
        currStepNum,
        skippedSteps = {},
        cookieTourId,
        cookieTourStep,
        cookieSkippedSteps = [],
        _configure,

    /**
     * getBubble
     *
     * Singleton accessor function for retrieving or creating bubble object.
     *
     * @private
     * @param setOptions {Boolean} when true, transfers configuration options to the bubble
     * @returns {Object} HopscotchBubble
     */
    getBubble = function(setOptions) {
      if (!bubble || !bubble.element || !bubble.element.parentNode) {
        bubble = new HopscotchBubble(opt);
      }
      if (setOptions) {
        utils.extend(bubble.opt, {
          bubblePadding:   getOption('bubblePadding'),
          bubbleWidth:     getOption('bubbleWidth'),
          showNextButton:  getOption('showNextButton'),
          showPrevButton:  getOption('showPrevButton'),
          showCloseButton: getOption('showCloseButton'),
          arrowWidth:      getOption('arrowWidth'),
          isRtl:           getOption('isRtl')
        });
      }
      return bubble;
    },

    /**
     * Destroy the bubble currently associated with Hopscotch.
     * This is done when we end the current tour.
     *
     * @private
     */
    destroyBubble = function() {
      if(bubble){
        bubble.destroy();
        bubble = null;
      }
    },

    /**
     * Convenience method for getting an option. Returns custom config option
     * or the default config option if no custom value exists.
     *
     * @private
     * @param name {String} config option name
     * @returns {Object} config option value
     */
    getOption = function(name) {
      if (typeof opt === 'undefined') {
        return defaultOpts[name];
      }
      return utils.valOrDefault(opt[name], defaultOpts[name]);
    },

    /**
     * getCurrStep
     *
     * @private
     * @returns {Object} the step object corresponding to the current value of currStepNum
     */
    getCurrStep = function() {
      var step;

      if (!currTour || currStepNum < 0 || currStepNum >= currTour.steps.length) {
        step = null;
      }
      else {
        step = currTour.steps[currStepNum];
      }

      return step;
    },

    /**
     * Used for nextOnTargetClick
     *
     * @private
     */
    targetClickNextFn = function() {
      self.nextStep();
    },

    /**
     * adjustWindowScroll
     *
     * Checks if the bubble or target element is partially or completely
     * outside of the viewport. If it is, adjust the window scroll position
     * to bring it back into the viewport.
     *
     * @private
     * @param {Function} cb Callback to invoke after done scrolling.
     */
    adjustWindowScroll = function(cb) {
      var bubble         = getBubble(),

          // Calculate the bubble element top and bottom position
          bubbleEl       = bubble.element,
          bubbleTop      = utils.getPixelValue(bubbleEl.style.top),
          bubbleBottom   = bubbleTop + utils.getPixelValue(bubbleEl.offsetHeight),

          // Calculate the target element top and bottom position
          targetEl       = utils.getStepTarget(getCurrStep()),
          targetBounds   = targetEl.getBoundingClientRect(),
          targetElTop    = targetBounds.top + utils.getScrollTop(),
          targetElBottom = targetBounds.bottom + utils.getScrollTop(),

          // The higher of the two: bubble or target
          targetTop      = (bubbleTop < targetElTop) ? bubbleTop : targetElTop,
          // The lower of the two: bubble or target
          targetBottom   = (bubbleBottom > targetElBottom) ? bubbleBottom : targetElBottom,

          // Calculate the current viewport top and bottom
          windowTop      = utils.getScrollTop(),
          windowBottom   = windowTop + utils.getWindowHeight(),

          // This is our final target scroll value.
          scrollToVal    = targetTop - getOption('scrollTopMargin'),

          scrollEl,
          yuiAnim,
          yuiEase,
          direction,
          scrollIncr,
          scrollTimeout,
          scrollTimeoutFn;

      // Target and bubble are both visible in viewport
      if (targetTop >= windowTop && (targetTop <= windowTop + getOption('scrollTopMargin') || targetBottom <= windowBottom)) {
        if (cb) { cb(); } // HopscotchBubble.show
      }

      // Abrupt scroll to scroll target
      else if (!getOption('smoothScroll')) {
        window.scrollTo(0, scrollToVal);

        if (cb) { cb(); } // HopscotchBubble.show
      }

      // Smooth scroll to scroll target
      else {
        // Use YUI if it exists
        if (typeof YAHOO             !== undefinedStr &&
            typeof YAHOO.env         !== undefinedStr &&
            typeof YAHOO.env.ua      !== undefinedStr &&
            typeof YAHOO.util        !== undefinedStr &&
            typeof YAHOO.util.Scroll !== undefinedStr) {
          scrollEl = YAHOO.env.ua.webkit ? document.body : document.documentElement;
          yuiEase = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : undefined;
          yuiAnim = new YAHOO.util.Scroll(scrollEl, {
            scroll: { to: [0, scrollToVal] }
          }, getOption('scrollDuration')/1000, yuiEase);
          yuiAnim.onComplete.subscribe(cb);
          yuiAnim.animate();
        }

        // Use jQuery if it exists
        else if (hasJquery) {
          jQuery('body, html').animate({ scrollTop: scrollToVal }, getOption('scrollDuration'), cb);
        }

        // Use my crummy setInterval scroll solution if we're using plain, vanilla Javascript.
        else {
          if (scrollToVal < 0) {
            scrollToVal = 0;
          }

          // 48 * 10 == 480ms scroll duration
          // make it slightly less than CSS transition duration because of
          // setInterval overhead.
          // To increase or decrease duration, change the divisor of scrollIncr.
          direction = (windowTop > targetTop) ? -1 : 1; // -1 means scrolling up, 1 means down
          scrollIncr = Math.abs(windowTop - scrollToVal) / (getOption('scrollDuration')/10);
          scrollTimeoutFn = function() {
            var scrollTop = utils.getScrollTop(),
                scrollTarget = scrollTop + (direction * scrollIncr);

            if ((direction > 0 && scrollTarget >= scrollToVal) ||
                (direction < 0 && scrollTarget <= scrollToVal)) {
              // Overshot our target. Just manually set to equal the target
              // and clear the interval
              scrollTarget = scrollToVal;
              if (cb) { cb(); } // HopscotchBubble.show
              window.scrollTo(0, scrollTarget);
              return;
            }

            window.scrollTo(0, scrollTarget);

            if (utils.getScrollTop() === scrollTop) {
              // Couldn't scroll any further.
              if (cb) { cb(); } // HopscotchBubble.show
              return;
            }

            // If we reached this point, that means there's still more to scroll.
            setTimeout(scrollTimeoutFn, 10);
          };

          scrollTimeoutFn();
        }
      }
    },

    /**
     * goToStepWithTarget
     *
     * Helper function to increment the step number until a step is found where
     * the step target exists or until we reach the end/beginning of the tour.
     *
     * @private
     * @param {Number} direction Either 1 for incrementing or -1 for decrementing
     * @param {Function} cb The callback function to be invoked when the step has been found
     */
    goToStepWithTarget = function(direction, cb) {
      var target,
          step,
          goToStepFn;

      if (currStepNum + direction >= 0 &&
          currStepNum + direction < currTour.steps.length) {

        currStepNum += direction;
        step = getCurrStep();

        goToStepFn = function() {
          target = utils.getStepTarget(step);

          if (target) {
            //this step was previously skipped, but now its target exists,
            //remove this step from skipped steps set
            if(skippedSteps[currStepNum]) {
              delete skippedSteps[currStepNum];
            }
            // We're done! Return the step number via the callback.
            cb(currStepNum);
          }
          else {
            //mark this step as skipped, since its target wasn't found
            skippedSteps[currStepNum] = true;
            // Haven't found a valid target yet. Recursively call
            // goToStepWithTarget.
            utils.invokeEventCallbacks('error');
            goToStepWithTarget(direction, cb);
          }
        };

        if (step.delay) {
          setTimeout(goToStepFn, step.delay);
        }
        else {
          goToStepFn();
        }
      }
      else {
        cb(-1); // signal that we didn't find any step with a valid target
      }
    },

    /**
     * changeStep
     *
     * Helper function to change step by going forwards or backwards 1.
     * nextStep and prevStep are publicly accessible wrappers for this function.
     *
     * @private
     * @param {Boolean} doCallbacks Flag for invoking onNext or onPrev callbacks
     * @param {Number} direction Either 1 for "next" or -1 for "prev"
     */
    changeStep = function(doCallbacks, direction) {
      var bubble = getBubble(),
          self = this,
          step,
          origStep,
          wasMultiPage,
          changeStepCb;

      bubble.hide();

      doCallbacks = utils.valOrDefault(doCallbacks, true);

      step = getCurrStep();

      if (step.nextOnTargetClick) {
        // Detach the listener when tour is moving to a different step
        utils.removeEvtListener(utils.getStepTarget(step), 'click', targetClickNextFn);
      }

      origStep = step;
      if (direction > 0) {
        wasMultiPage = origStep.multipage;
      }
      else {
        wasMultiPage = (currStepNum > 0 && currTour.steps[currStepNum-1].multipage);
      }

      /**
       * Callback for goToStepWithTarget
       *
       * @private
       */
      changeStepCb = function(stepNum) {
        var doShowFollowingStep;

        if (stepNum === -1) {
          // Wasn't able to find a step with an existing element. End tour.
          return this.endTour(true);
        }

        if (doCallbacks) {
          if (direction > 0) {
            doShowFollowingStep = utils.invokeEventCallbacks('next', origStep.onNext);
          }
          else {
            doShowFollowingStep = utils.invokeEventCallbacks('prev', origStep.onPrev);
          }
        }

        // If the state of the tour is updated in a callback, assume the client
        // doesn't want to go to next step since they specifically updated.
        if (stepNum !== currStepNum) {
          return;
        }

        if (wasMultiPage) {
          // Update state for the next page
           setStateHelper();

          // Next step is on a different page, so no need to attempt to render it.
          return;
        }

        doShowFollowingStep = utils.valOrDefault(doShowFollowingStep, true);

        // If the onNext/onPrev callback returned false, halt the tour and
        // don't show the next step.
        if (doShowFollowingStep) {
          this.showStep(stepNum);
        }
        else {
          // Halt tour (but don't clear state)
          this.endTour(false);
        }
      };

      if (!wasMultiPage && getOption('skipIfNoElement')) {
        goToStepWithTarget(direction, function(stepNum) {
          changeStepCb.call(self, stepNum);
        });
      }
      else if (currStepNum + direction >= 0 && currStepNum + direction < currTour.steps.length) {
        // only try incrementing once, and invoke error callback if no target is found
        currStepNum += direction;
        step = getCurrStep();
        if (!utils.getStepTarget(step) && !wasMultiPage) {
          utils.invokeEventCallbacks('error');
          return this.endTour(true, false);
        }
        changeStepCb.call(this, currStepNum);
      } else if (currStepNum + direction === currTour.steps.length) {
        return this.endTour();
      }

      return this;
    },

    /**
     * loadTour
     *
     * Loads, but does not display, tour.
     *
     * @private
     * @param tour The tour JSON object
     */
    loadTour = function(tour) {
      var tmpOpt = {},
          prop,
          tourState,
          tourStateValues;

      // Set tour-specific configurations
      for (prop in tour) {
        if (tour.hasOwnProperty(prop) &&
            prop !== 'id' &&
            prop !== 'steps') {
          tmpOpt[prop] = tour[prop];
        }
      }

      //this.resetDefaultOptions(); // reset all options so there are no surprises
      // TODO check number of config properties of tour
      _configure.call(this, tmpOpt, true);

      // Get existing tour state, if it exists.
      tourState = utils.getState(getOption('cookieName'));
      if (tourState) {
        tourStateValues     = tourState.split(':');
        cookieTourId        = tourStateValues[0]; // selecting tour is not supported by this framework.
        cookieTourStep      = tourStateValues[1];

        if(tourStateValues.length > 2) {
          cookieSkippedSteps = tourStateValues[2].split(',');
        }

        cookieTourStep    = parseInt(cookieTourStep, 10);
      }

      return this;
    },

    /**
     * Find the first step to show for a tour. (What is the first step with a
     * target on the page?)
     */
    findStartingStep = function(startStepNum, savedSkippedSteps, cb) {
      var step,
          target;

      currStepNum = startStepNum || 0;
      skippedSteps = savedSkippedSteps || {};
      step        = getCurrStep();
      target      = utils.getStepTarget(step);

      if (target) {
        // First step had an existing target.
        cb(currStepNum);
        return;
      }

      if (!target) {
        // Previous target doesn't exist either. The user may have just
        // clicked on a link that wasn't part of the tour. Another possibility is that
        // the user clicked on the correct link, but the target is just missing for
        // whatever reason. In either case, we should just advance until we find a step
        // that has a target on the page or end the tour if we can't find such a step.
        utils.invokeEventCallbacks('error');

        //this step was skipped, since its target does not exist
        skippedSteps[currStepNum] = true;

        if (getOption('skipIfNoElement')) {
          goToStepWithTarget(1, cb);
          return;
        }
        else {
          currStepNum = -1;
          cb(currStepNum);
        }
      }
    },

    showStepHelper = function(stepNum) {
      var step         = currTour.steps[stepNum],
          bubble       = getBubble(),
          targetEl     = utils.getStepTarget(step);

      function showBubble() {
        bubble.show();
        utils.invokeEventCallbacks('show', step.onShow);
      }

      if (currStepNum !== stepNum && getCurrStep().nextOnTargetClick) {
        // Detach the listener when tour is moving to a different step
        utils.removeEvtListener(utils.getStepTarget(getCurrStep()), 'click', targetClickNextFn);
      }

      // Update bubble for current step
      currStepNum = stepNum;

      bubble.hide(false);

      bubble.render(step, stepNum, function(adjustScroll) {
        // when done adjusting window scroll, call showBubble helper fn
        if (adjustScroll) {
          adjustWindowScroll(showBubble);
        }
        else {
          showBubble();
        }

        // If we want to advance to next step when user clicks on target.
        if (step.nextOnTargetClick) {
          utils.addEvtListener(targetEl, 'click', targetClickNextFn);
        }
      });

      setStateHelper();
    },

    setStateHelper = function() {
      var cookieVal = currTour.id + ':' + currStepNum,
        skipedStepIndexes = winHopscotch.getSkippedStepsIndexes();

      if(skipedStepIndexes && skipedStepIndexes.length > 0) {
        cookieVal += ':' + skipedStepIndexes.join(',');
      }

      utils.setState(getOption('cookieName'), cookieVal, 1);
    },

    /**
     * init
     *
     * Initializes the Hopscotch object.
     *
     * @private
     */
    init = function(initOptions) {
      if (initOptions) {
        //initOptions.cookieName = initOptions.cookieName || 'hopscotch.tour.state';
        this.configure(initOptions);
      }
    };

    /**
     * getCalloutManager
     *
     * Gets the callout manager.
     *
     * @returns {Object} HopscotchCalloutManager
     *
     */
    this.getCalloutManager = function() {
      if (typeof calloutMgr === undefinedStr) {
        calloutMgr = new HopscotchCalloutManager();
      }

      return calloutMgr;
    };

    /**
     * startTour
     *
     * Begins the tour.
     *
     * @param {Object} tour The tour JSON object
     * @stepNum {Number} stepNum __Optional__ The step number to start from
     * @returns {Object} Hopscotch
     *
     */
    this.startTour = function(tour, stepNum) {
      var bubble,
          currStepNum,
          skippedSteps = {},
          self = this;

      // loadTour if we are calling startTour directly. (When we call startTour
      // from window onLoad handler, we'll use currTour)
      if (!currTour) {
        
        // Sanity check! Is there a tour?
        if(!tour){
          throw new Error('Tour data is required for startTour.');
        }

        // Check validity of tour ID. If invalid, throw an error.
        if(!tour.id || !validIdRegEx.test(tour.id)) {
          throw new Error('Tour ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.');
        }

        currTour = tour;
        loadTour.call(this, tour);

      }

      if (typeof stepNum !== undefinedStr) {
        if (stepNum >= currTour.steps.length) {
          throw new Error('Specified step number out of bounds.');
        }
        currStepNum = stepNum;
      }

      // If document isn't ready, wait for it to finish loading.
      // (so that we can calculate positioning accurately)
      if (!utils.documentIsReady()) {
        waitingToStart = true;
        return this;
      }

      if (typeof currStepNum === "undefined" && currTour.id === cookieTourId && typeof cookieTourStep !== undefinedStr) {
        currStepNum = cookieTourStep;
        if(cookieSkippedSteps.length > 0){
          for(var i = 0, len = cookieSkippedSteps.length; i < len; i++) {
            skippedSteps[cookieSkippedSteps[i]] = true;
          }
        }
      }
      else if (!currStepNum) {
        currStepNum = 0;
      }

      // Find the current step we should begin the tour on, and then actually start the tour.
      findStartingStep(currStepNum, skippedSteps, function(stepNum) {
        var target = (stepNum !== -1) && utils.getStepTarget(currTour.steps[stepNum]);

        if (!target) {
          // Should we trigger onEnd callback? Let's err on the side of caution
          // and not trigger it. Don't want weird stuff happening on a page that
          // wasn't meant for the tour. Up to the developer to fix their tour.
          self.endTour(false, false);
          return;
        }

        utils.invokeEventCallbacks('start');

        bubble = getBubble();
        // TODO: do we still need this call to .hide()? No longer using opt.animate...
        // Leaving it in for now to play it safe
        bubble.hide(false); // make invisible for boundingRect calculations when opt.animate == true

        self.isActive = true;

        if (!utils.getStepTarget(getCurrStep())) {
          // First step element doesn't exist
          utils.invokeEventCallbacks('error');
          if (getOption('skipIfNoElement')) {
            self.nextStep(false);
          }
        }
        else {
          self.showStep(stepNum);
        }
      });

      return this;
    };

    /**
     * showStep
     *
     * Skips to a specific step and renders the corresponding bubble.
     *
     * @stepNum {Number} stepNum The step number to show
     * @returns {Object} Hopscotch
     */
    this.showStep = function(stepNum) {
      var step = currTour.steps[stepNum];
      if(!utils.getStepTarget(step)) {
        return;
      }

      if (step.delay) {
        setTimeout(function() {
          showStepHelper(stepNum);
        }, step.delay);
      }
      else {
        showStepHelper(stepNum);
      }
      return this;
    };

    /**
     * prevStep
     *
     * Jump to the previous step.
     *
     * @param {Boolean} doCallbacks Flag for invoking onPrev callback. Defaults to true.
     * @returns {Object} Hopscotch
     */
    this.prevStep = function(doCallbacks) {
      changeStep.call(this, doCallbacks, -1);
      return this;
    };

    /**
     * nextStep
     *
     * Jump to the next step.
     *
     * @param {Boolean} doCallbacks Flag for invoking onNext callback. Defaults to true.
     * @returns {Object} Hopscotch
     */
    this.nextStep = function(doCallbacks) {
      changeStep.call(this, doCallbacks, 1);
      return this;
    };

    /**
     * endTour
     *
     * Cancels out of an active tour.
     *
     * @param {Boolean} clearState Flag for clearing state. Defaults to true.
     * @param {Boolean} doCallbacks Flag for invoking 'onEnd' callbacks. Defaults to true.
     * @returns {Object} Hopscotch
     */
    this.endTour = function(clearState, doCallbacks) {
      var bubble     = getBubble(),
        currentStep;

      clearState     = utils.valOrDefault(clearState, true);
      doCallbacks    = utils.valOrDefault(doCallbacks, true);

      //remove event listener if current step had it added
      if(currTour) {
        currentStep = getCurrStep();
        if(currentStep && currentStep.nextOnTargetClick) {
          utils.removeEvtListener(utils.getStepTarget(currentStep), 'click', targetClickNextFn);
        }
      }

      currStepNum    = 0;
      cookieTourStep = undefined;

      bubble.hide();
      if (clearState) {
        utils.clearState(getOption('cookieName'));
      }
      if (this.isActive) {
        this.isActive = false;

        if (currTour && doCallbacks) {
          utils.invokeEventCallbacks('end');
        }
      }

      this.removeCallbacks(null, true);
      this.resetDefaultOptions();
      destroyBubble();

      currTour = null;

      return this;
    };

    /**
     * getCurrTour
     *
     * @return {Object} The currently loaded tour.
     */
    this.getCurrTour = function() {
      return currTour;
    };

    /**
     * getCurrTarget
     *
     * @return {Object} The currently visible target.
     */
    this.getCurrTarget = function() {
      return utils.getStepTarget(getCurrStep());
    };

    /**
     * getCurrStepNum
     *
     * @return {number} The current zero-based step number.
     */
    this.getCurrStepNum = function() {
      return currStepNum;
    };

    /**
     * getSkippedStepsIndexes
     *
     * @return {Array} Array of skipped step indexes
     */
    this.getSkippedStepsIndexes = function() {
      var skippedStepsIdxArray = [],
         stepIds;

      for(stepIds in skippedSteps){
        skippedStepsIdxArray.push(stepIds);
      }

      return skippedStepsIdxArray;
    };

    /**
     * refreshBubblePosition
     *
     * Tell hopscotch that the position of the current tour element changed
     * and the bubble therefore needs to be redrawn. Also refreshes position
     * of all Hopscotch Callouts on the page.
     *
     * @returns {Object} Hopscotch
     */
    this.refreshBubblePosition = function() {
      var currStep = getCurrStep();
      if(currStep){
        getBubble().setPosition(currStep);
      }
      this.getCalloutManager().refreshCalloutPositions();
      return this;
    };

    /**
     * listen
     *
     * Adds a callback for one of the event types. Valid event types are:
     *
     * @param {string} evtType "start", "end", "next", "prev", "show", "close", or "error"
     * @param {Function} cb The callback to add.
     * @param {Boolean} isTourCb Flag indicating callback is from a tour definition.
     *    For internal use only!
     * @returns {Object} Hopscotch
     */
    this.listen = function(evtType, cb, isTourCb) {
      if (evtType) {
        callbacks[evtType].push({ cb: cb, fromTour: isTourCb });
      }
      return this;
    };

    /**
     * unlisten
     *
     * Removes a callback for one of the event types, e.g. 'start', 'next', etc.
     *
     * @param {string} evtType "start", "end", "next", "prev", "show", "close", or "error"
     * @param {Function} cb The callback to remove.
     * @returns {Object} Hopscotch
     */
    this.unlisten = function(evtType, cb) {
      var evtCallbacks = callbacks[evtType],
          i,
          len;

      for (i = 0, len = evtCallbacks.length; i < len; ++i) {
        if (evtCallbacks[i] === cb) {
          evtCallbacks.splice(i, 1);
        }
      }
      return this;
    };

    /**
     * removeCallbacks
     *
     * Remove callbacks for hopscotch events. If tourOnly is set to true, only
     * removes callbacks specified by a tour (callbacks set by external calls
     * to hopscotch.configure or hopscotch.listen will not be removed). If
     * evtName is null or undefined, callbacks for all events will be removed.
     *
     * @param {string} evtName Optional Event name for which we should remove callbacks
     * @param {boolean} tourOnly Optional flag to indicate we should only remove callbacks added
     *    by a tour. Defaults to false.
     * @returns {Object} Hopscotch
     */
    this.removeCallbacks = function(evtName, tourOnly) {
      var cbArr,
          i,
          len,
          evt;

      // If evtName is null or undefined, remove callbacks for all events.
      for (evt in callbacks) {
        if (!evtName || evtName === evt) {
          if (tourOnly) {
            cbArr = callbacks[evt];
            for (i=0, len=cbArr.length; i < len; ++i) {
              if (cbArr[i].fromTour) {
                cbArr.splice(i--, 1);
                --len;
              }
            }
          }
          else {
            callbacks[evt] = [];
          }
        }
      }
      return this;
    };

    /**
     * registerHelper
     * ==============
     * Registers a helper function to be used as a callback function.
     *
     * @param {String} id The id of the function.
     * @param {Function} id The callback function.
     */
    this.registerHelper = function(id, fn) {
      if (typeof id === 'string' && typeof fn === 'function') {
        helpers[id] = fn;
      }
    };

    this.unregisterHelper = function(id) {
      helpers[id] = null;
    };

    this.invokeHelper = function(id) {
      var args = [],
          i,
          len;

      for (i = 1, len = arguments.length; i < len; ++i) {
        args.push(arguments[i]);
      }
      if (helpers[id]) {
        helpers[id].call(null, args);
      }
    };

    /**
     * setCookieName
     *
     * Sets the cookie name (or sessionStorage name, if supported) used for multi-page
     * tour persistence.
     *
     * @param {String} name The cookie name
     * @returns {Object} Hopscotch
     */
    this.setCookieName = function(name) {
      opt.cookieName = name;
      return this;
    };

    /**
     * resetDefaultOptions
     *
     * Resets all configuration options to default.
     *
     * @returns {Object} Hopscotch
     */
    this.resetDefaultOptions = function() {
      opt = {};
      return this;
    };

    /**
     * resetDefaultI18N
     *
     * Resets all i18n.
     *
     * @returns {Object} Hopscotch
     */
    this.resetDefaultI18N = function() {
      customI18N = {};
      return this;
    };

    /**
     * hasState
     *
     * Returns state from a previous tour run, if it exists.
     *
     * @returns {String} State of previous tour run, or empty string if none exists.
     */
    this.getState = function() {
      return utils.getState(getOption('cookieName'));
    };

    /**
     * _configure
     *
     * @see this.configure
     * @private
     * @param options
     * @param {Boolean} isTourOptions Should be set to true when setting options from a tour definition.
     */
    _configure = function(options, isTourOptions) {
      var bubble,
          events = ['next', 'prev', 'start', 'end', 'show', 'error', 'close'],
          eventPropName,
          callbackProp,
          i,
          len;

      if (!opt) {
        this.resetDefaultOptions();
      }

      utils.extend(opt, options);

      if (options) {
        utils.extend(customI18N, options.i18n);
      }

      for (i = 0, len = events.length; i < len; ++i) {
        // At this point, options[eventPropName] may have changed from an array
        // to a function.
        eventPropName = 'on' + events[i].charAt(0).toUpperCase() + events[i].substring(1);
        if (options[eventPropName]) {
          this.listen(events[i],
                      options[eventPropName],
                      isTourOptions);
        }
      }

      bubble = getBubble(true);

      return this;
    };

    /**
     * configure
     *
     * <pre>
     * VALID OPTIONS INCLUDE...
     *
     * - bubbleWidth:     Number   - Default bubble width. Defaults to 280.
     * - bubblePadding:   Number   - DEPRECATED. Default bubble padding. Defaults to 15.
     * - smoothScroll:    Boolean  - should the page scroll smoothly to the next
     *                               step? Defaults to TRUE.
     * - scrollDuration:  Number   - Duration of page scroll. Only relevant when
     *                               smoothScroll is set to true. Defaults to
     *                               1000ms.
     * - scrollTopMargin: NUMBER   - When the page scrolls, how much space should there
     *                               be between the bubble/targetElement and the top
     *                               of the viewport? Defaults to 200.
     * - showCloseButton: Boolean  - should the tour bubble show a close (X) button?
     *                               Defaults to TRUE.
     * - showPrevButton:  Boolean  - should the bubble have the Previous button?
     *                               Defaults to FALSE.
     * - showNextButton:  Boolean  - should the bubble have the Next button?
     *                               Defaults to TRUE.
     * - arrowWidth:      Number   - Default arrow width. (space between the bubble
     *                               and the targetEl) Used for bubble position
     *                               calculation. Only use this option if you are
     *                               using your own custom CSS. Defaults to 20.
     * - skipIfNoElement  Boolean  - If a specified target element is not found,
     *                               should we skip to the next step? Defaults to
     *                               TRUE.
     * - onNext:          Function - A callback to be invoked after every click on
     *                               a "Next" button.
     * - isRtl:           Boolean  - Set to true when instantiating in a right-to-left
     *                               language environment, or if mirrored positioning is
     *                               needed.
     *                               Defaults to FALSE.
     *
     * - i18n:            Object   - For i18n purposes. Allows you to change the
     *                               text of button labels and step numbers.
     * - i18n.stepNums:   Array\<String\> - Provide a list of strings to be shown as
     *                               the step number, based on index of array. Unicode
     *                               characters are supported. (e.g., ['&#x4e00;',
     *                               '&#x4e8c;', '&#x4e09;']) If there are more steps
     *                               than provided numbers, Arabic numerals
     *                               ('4', '5', '6', etc.) will be used as default.
     * // =========
     * // CALLBACKS
     * // =========
     * - onNext:          Function - Invoked after every click on a "Next" button.
     * - onPrev:          Function - Invoked after every click on a "Prev" button.
     * - onStart:         Function - Invoked when the tour is started.
     * - onEnd:           Function - Invoked when the tour ends.
     * - onClose:         Function - Invoked when the user closes the tour before finishing.
     * - onError:         Function - Invoked when the specified target element doesn't exist on the page.
     *
     * // ====
     * // I18N
     * // ====
     * i18n:              OBJECT      - For i18n purposes. Allows you to change the text
     *                                  of button labels and step numbers.
     * i18n.nextBtn:      STRING      - Label for next button
     * i18n.prevBtn:      STRING      - Label for prev button
     * i18n.doneBtn:      STRING      - Label for done button
     * i18n.skipBtn:      STRING      - Label for skip button
     * i18n.closeTooltip: STRING      - Text for close button tooltip
     * i18n.stepNums:   ARRAY<STRING> - Provide a list of strings to be shown as
     *                                  the step number, based on index of array. Unicode
     *                                  characters are supported. (e.g., ['&#x4e00;',
     *                                  '&#x4e8c;', '&#x4e09;']) If there are more steps
     *                                  than provided numbers, Arabic numerals
     *                                  ('4', '5', '6', etc.) will be used as default.
     * </pre>
     *
     * @example hopscotch.configure({ scrollDuration: 1000, scrollTopMargin: 150 });
     * @example
     * hopscotch.configure({
     *   scrollTopMargin: 150,
     *   onStart: function() {
     *     alert("Have fun!");
     *   },
     *   i18n: {
     *     nextBtn: 'Forward',
     *     prevBtn: 'Previous'
     *     closeTooltip: 'Quit'
     *   }
     * });
     *
     * @param {Object} options A hash of configuration options.
     * @returns {Object} Hopscotch
     */
    this.configure = function(options) {
      return _configure.call(this, options, false);
    };

    /**
     * Set the template that should be used for rendering Hopscotch bubbles.
     * If a string, it's assumed your template is available in the
     * hopscotch.templates namespace.
     *
     * @param {String|Function(obj)} The template to use for rendering.
     * @returns {Object} The Hopscotch object (for chaining).
     */
    this.setRenderer = function(render){
      var typeOfRender = typeof render;

      if(typeOfRender === 'string'){
        templateToUse = render;
        customRenderer = undefined;
      }
      else if(typeOfRender === 'function'){
        customRenderer = render;
      }
      return this;
    };

    /**
     * Sets the escaping method to be used by JST templates.
     *
     * @param {Function} - The escape method to use.
     * @returns {Object} The Hopscotch object (for chaining).
     */
    this.setEscaper = function(esc){
      if (typeof esc === 'function'){
        customEscape = esc;
      }
      return this;
    };

    init.call(this, initOptions);
  };

  winHopscotch = new Hopscotch();

// Template includes, placed inside a closure to ensure we don't
// end up declaring our shim globally.
(function(){
var _ = {};
/*
 * Adapted from the Underscore.js framework. Check it out at
 * https://github.com/jashkenas/underscore
 */
_.escape = function(str){
  if(customEscape){ return customEscape(str); }
  
  if(str == null) return '';
  return ('' + str).replace(new RegExp('[&<>"\']', 'g'), function(match){
    if(match == '&'){ return '&amp;' }
    if(match == '<'){ return '&lt;' }
    if(match == '>'){ return '&gt;' }
    if(match == '"'){ return '&quot;' }
    if(match == "'"){ return '&#x27;' }
  });
}
this["templates"] = this["templates"] || {};

this["templates"]["bubble_default"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  function optEscape(str, unsafe){
    if(unsafe){
      return _.escape(str);
    }
    return str;
  }
;
__p += '\n<div class="hopscotch-bubble-container" style="width: ' +
((__t = ( step.width )) == null ? '' : __t) +
'px; padding: ' +
((__t = ( step.padding )) == null ? '' : __t) +
'px;">\n  ';
 if(tour.isTour){ ;
__p += '<span class="hopscotch-bubble-number">' +
((__t = ( i18n.stepNum )) == null ? '' : __t) +
'</span>';
 } ;
__p += '\n  <div class="hopscotch-bubble-content">\n    ';
 if(step.title !== ''){ ;
__p += '<h3 class="hopscotch-title">' +
((__t = ( optEscape(step.title, tour.unsafe) )) == null ? '' : __t) +
'</h3>';
 } ;
__p += '\n    ';
 if(step.content  !== ''){ ;
__p += '<div class="hopscotch-content">' +
((__t = ( optEscape(step.content, tour.unsafe) )) == null ? '' : __t) +
'</div>';
 } ;
__p += '\n  </div>\n  <div class="hopscotch-actions">\n    ';
 if(buttons.showPrev){ ;
__p += '<button class="hopscotch-nav-button prev hopscotch-prev">' +
((__t = ( i18n.prevBtn )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n    ';
 if(buttons.showCTA){ ;
__p += '<button class="hopscotch-nav-button next hopscotch-cta">' +
((__t = ( buttons.ctaLabel )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n    ';
 if(buttons.showNext){ ;
__p += '<button class="hopscotch-nav-button next hopscotch-next">' +
((__t = ( i18n.nextBtn )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n  </div>\n  ';
 if(buttons.showClose){ ;
__p += '<button class="hopscotch-bubble-close hopscotch-close">' +
((__t = ( i18n.closeTooltip )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>';

}
return __p
};
}.call(winHopscotch));

  return winHopscotch;

})));
/**
 * @author Mario Harper
 * @description Global items for onboarding process stored here.
 */
'use strict';

var Onboarding = (function(){

	var onboarding = {
		init: init
	}

	return onboarding;

	//////////////////////

	function init(params){
		Onboarding.Nav.init({customerID: params.customerID});
	}

})();
/**
 * @author Mario Harper
 * @description Helper methods used in the onboarding module.
 */
'use strict'

var Onboarding = Onboarding || {};

Onboarding.Helpers = (function(){

  var helpers = {
    setCookie: setCookie,
    getCookie: getCookie
  }

  return helpers;

  ///////////////////  

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
  }
})();

/**
 * @author Mario Harper
 * @description Custom service used to talk to the onboarding database.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Service = (function(){
	
	var API_BASE = 'https://dcqqifyaug.execute-api.us-west-2.amazonaws.com/prod/progress';

	var service = {
		getProgress: getProgress,
		getValue: getValue,
		setValue: setValue
	};

	return service;

	/////////////////////////
	
	/**
	 * Gets all of the Onboarding Event items for the given user.
	 * @param  {String}   uid      Unique ID in the Onboarding table.
	 * @param  {Function} callback Executed after http request is made. Passes in data. 
	 * @return {N/A}
	 */
	function getProgress(uid, callback){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
		}

		xhttp.open("GET", API_BASE+"?customerID="+uid, true);
  	xhttp.send();
	}

	/**
	 * Gets specific Onboarding Event value for the given user.
	 * @param  {String}   uid      Unique ID in the Onboarding table.
	 * @param  {String}   key      Name of Event to look for in the table. 
	 * @param  {Function} callback Executed after http request. Passes in the data.
	 * @return {[type]}            
	 */
	function getValue(uid, key, callback){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
		}

		xhttp.open("GET", API_BASE+"/event?customerID="+uid+"&key="+key, true);
  	xhttp.send();
	}

	/**
	 * Sets specific Onboarding Event for the given user.
	 * @param {String}   uid      Unique ID in the Onboarding table.
	 * @param {String}   key      Name of the Onboarding Event.
	 * @param {Dyamic}   value    Value to set for the Event.
	 * @param {Function} callback [description]
	 */
	function setValue(uid, key, value, callback){
		var data = {
			"customerID": uid,
			"key": key,
			"value": value
		}

		var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
	  };
	  xhttp.open("POST", API_BASE+'/event', true);
	  xhttp.setRequestHeader("Content-type", "application/json");
	  xhttp.send(JSON.stringify(data));

	}

})();
/**
 * @author Mario Harper
 * @description Module for handling onboarding navigation pane.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Nav = (function(){

	// public
	var nav = {
		init: init,
		checkoffItem: checkoffItem
	}

	//private
	var _customerID;

	return nav;

	//////////////////////

	function init(params){
		_customerID = params.customerID || null;

	  $('.help-nav-launcher-button').click(function(){
	  	$('#help-nav .helper').attr("src", "");
	  	$('#help-nav .helper').attr("src", "https://d13yacurqjgara.cloudfront.net/users/291221/screenshots/1425333/helper.gif");
	    $('#help-nav').toggleClass('active');
	  });

	  $('#help-nav .close').click(function(){
	    $('#help-nav').toggleClass('active');
	  });

	  $('#help-nav li').click(function(){
	  	$('#help-nav li').removeClass('active');
    	$(this).addClass('active');
	    _subNav(this);
	  });

	  _setProgress();

	}

	/**
	 * Checks off an item in the side nav, also able to save the check to Onboarding database table.
	 * @param  {Object} element  DOM element to check off.
	 * @param  {[type]} save     Save to database?
	 */
	function checkoffItem(element, save){
		var helpListItem = $(element);
		if(helpListItem.attr('checked')) return;

		helpListItem.children('.check-box').append('<i class="material-icons">check_circle</i>');
		helpListItem.attr('checked', true);
		if(save === true){

			Onboarding.Service.setValue(_customerID, helpListItem.attr('data-onboarding-item'), true, function(data){
        console.log('Progress Saved');
      });
		}

	}

	/**
	 * Private function to load users current Onboarding Events progress in nav.
	 */
	function _setProgress(){
	  /* get the users current progress in onboarding */
  	Onboarding.Service.getProgress(_customerID, function(data){
  		//checkoff the completed onboarding items
  		if(data){
  			for(var i = 0, x = data.length; i < x; i++){
  				var item = document.querySelector('[data-onboarding-item='+data[i].Key+']');
  				Onboarding.Nav.checkoffItem(item);	
  			}
  		}
  	});
	}

	function _subNav(element) {

		var position = $(element).position();
		var width = $(element).outerWidth();
		var step = $(element).attr('data-onboarding-item');
		var currentOpen = $(element).hasClass('open');
		var anyOpen = $('#help-nav li').hasClass('open');

		if(currentOpen){
			closeSubNav(element, position, width);
		}
		else if(anyOpen){
			closeSubNav(element, position, width, openSubNav);
		}
		else {
			openSubNav(element, position, width);
		}

	}

	function closeSubNav(element, position, width, callback) {
		$('#help-nav li').removeClass('open');
		$( "#panel-subnav" ).animate({
			right: "-600px"
		}, 300, function() {
			$('#panel-subnav').css({
				top: position.top + "px",
				right: (position.right + width) + "px",
				height: "21px"
			});
			if(callback){
				callback(element, position, width);
			}
		});
	}

	function openSubNav(element, position, width) {
		$('#panel-subnav').css({
			top: position.top + "px",
			right: (position.right + width) + "px"
		}).show(0, function() {
			$('#help-nav li').removeClass('open');
  		$(element).addClass('open');
			$( "#panel-subnav" ).animate({
		    right: "360px"
		  }, 300, function() {
		    $('#panel-subnav').animate({
		    	height: "80vh",
		    	top: "100px"
		    }, 300);
		  });
		});
	}


})();
/**
 * @author Mario Harper
 * @description Module for  handling tour aspect of onboarding. 
 * 
 * Dependency on Hopscotch.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Tour = (function(){

	var tour = {
		startIntroTour: startIntroTour,
		startAddProductTour: startAddProductTour,
		startAddLogoTour: startAddLogoTour
	}

	return tour;

	/////////////////////////////

	function startIntroTour(){
    var tour = {
      id: "welcome",
      steps: [
        {
          title: "View Your Store",
          content: "View your online store at any time",
          target: document.querySelector('.storefront-toggle'),
          placement: "bottom",
          xOffset: -10,
          fixedElement: true,
          showCTAButton: true,
          ctaLabel: "Don't show me this again",
          onCTA: disableIntroTour
        },
        {
          title: "Getting Started Steps",
          content: "Not sure where to start? We've got some tasks you can get started on.",
          target: document.querySelector('.help-nav-launcher-button'),
          placement: "top",
          xOffset: -270,
          arrowOffset: 270,
          fixedElement: true
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}

  function disableIntroTour() {
    Onboarding.Helpers.setCookie('introTourDisabled', true, 30);
    hopscotch.endTour([true]);
  }

	function startAddProductTour(){
		var tour = {
      id: "addProduct",
      steps: [
        {
          title: 'Hover over "Inventory".',
          target: document.querySelector('#MainNav_Inventory'),
          placement: "bottom",
          xOffset: 8,
          onNext: function(){
          	document.querySelector('#MainNav_Inventory .SubMenuWrapper').style.display = "block";
          }
        },
        {
          title: 'Select "Products".',
          target: document.querySelector('#Inventory_SubNav_Products'),
          placement: "right"
        }
      ],
      onEnd: function(){
      	Onboarding.Nav.checkoffItem(document.querySelector('#help-add-product'), true);
      	document.querySelector('#MainNav_Inventory .SubMenuWrapper').style.display = "none";
      }
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}

	function startAddLogoTour(){
		var tour = {
      id: "addLogo",
      steps: [
        {
          title: 'Hover over "Design".',
          target: document.querySelector('#MainNav_Design'),
          placement: "bottom",
          xOffset: 8,
          onNext: function(){
          	document.querySelector('#MainNav_Design .SubMenuWrapper').style.display = "block";
          }
        },
        {
          title: 'Select "Logos".',
          target: document.querySelector('#Design_SubNav_Logos'),
          placement: "right"
        }
      ],
      onEnd: function(){
      	Onboarding.Nav.checkoffItem(document.querySelector('#help-add-logo'), true);
      	document.querySelector('#MainNav_Design .SubMenuWrapper').style.display = "none";
      }
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}
})();
(function(){
	'use strict';

	//window.adm_storeid = 'abc1234'; // TESTING

	// find the storeID, remove dashes
	var storeID = (window.adm_storeid || idFromURL(window.location.href) || null)
	if(!storeID){
		console.log("Store ID: Not found. Onboarding will not persist.");
	}else{
    storeID = storeID.replace(/-/g, ''); // remove dashes
  }

	console.log("Store ID:", storeID);

  insertHTML();

	// initialize onboarding
	Onboarding.init({
		customerID: storeID
	});

	if(!Onboarding.Helpers.getCookie('introTourDisabled')){
		Onboarding.Tour.startIntroTour(); 
	}

  $('.modal-trigger').leanModal();
  
})(); 

/**
 * Tries to get the ID of the store from the URL
 * @param  {String} url The URL to search through
 * @return {Int||NULL} The ID or NULL (if not found)
 */
function idFromURL(url){
	var id = url.split('.')[0];
	id = (id) ? id.split('v') : null;
	return (id.length > 1) ? id[1] : null;
} 

function insertHTML(){
  var iconsHTML = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
  // create the HTML for the module
  var navHTML = 
  '<div id="help-nav" class="card">' +
    '<div class="close right">' + 
      '<i class="material-icons">close</i>'+
    '</div>'+
    '<ul>'+
      '<li data-onboarding-item="watchVideo" id="help-intro-video" class="modal-trigger" href="#help-nav-modal" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Watch introduction video</span>'+
        '<span class="done-msg">You watched the introduction video<span>'+
      '</li>'+
      '<li data-onboarding-item="addProduct" id="help-add-product" onclick="Onboarding.Tour.startAddProductTour();">'+
        '<span class="check-box"></span>'+          
        '<span class="todo-msg">Add a product</span>'+
        '<span class="done-msg">You added a product</span>'+
      '</li>'+
      '<li data-onboarding-item="addLogo" id="help-add-logo" onclick="Onboarding.Tour.startAddLogoTour();">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Add your logo</span>'+
        '<span class="done-msg">You added your logo</span>'+
      '</li>'+
      '<li data-onboarding-item="addStoreInfo" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Add store info</span>'+
        '<span class="done-msg">Your store info is complete</span>'+
      '</li>'+
      '<li data-onboarding-item="sellOnSocialSetup" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Sell on social</span>'+
        '<span class="done-msg">You are waiting to sell on social</span>'+
      '</li>'+
      '<li data-onboarding-item="bookmarkStore" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Bookmark your store</span>'+
        '<span class="done-msg">Your store is bookmarked</span>'+
      '</li>'+
      '<li data-onboarding-item="selectPlan" onclick="Onboarding.Nav.checkoffItem(this, true);"> '+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Select a plan</span>'+
        '<span class="done-msg">You selected a plan</span>'+
        '<span class="todo-msg badge">6 days left in free trial</span>'+
        '<span class="done-msg badge">PRO</span>'+
      '</li>'+
    '</ul>'+
  '</div>';

  var navBtnHTML = 
  '<div class="help-nav-launcher-button">'+
    '<i class="material-icons">playlist_add_check</i>' +
  '</div>';

  var modalHTML = 
  '<div id="help-nav-modal" class="modal">'+
    '<i class="material-icons modal-action modal-close">close</i>'+
    '<div class="modal-content">'+
      '<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_s5ai57iv3r seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>'+
    '</div>'+
  '</div>';

  // append HTML to body
  $('head').append(iconsHTML);
  $('body').append(navHTML);
  $('body').append(navBtnHTML);
  $('body').append(modalHTML);
}

(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".red.lighten-2{background-color:#f69993 !important}.text-red.text-lighten-2{color:#f69993 !important}.border-red.border-lighten-2{border-color:#f69993 !important}.red.lighten-1{background-color:#fd7f77 !important}.text-red.text-lighten-1{color:#fd7f77 !important}.border-red.border-lighten-1{border-color:#fd7f77 !important}.red{background-color:#fe5f55 !important}.text-red{color:#fe5f55 !important}.border-red{border-color:#fe5f55 !important}.btn.red:hover,.red.btn-large:hover,.red.btn-small:hover{background-color:#fe3e32 !important}.btn.text-red:hover,.text-red.btn-large:hover,.text-red.btn-small:hover{color:#fe1709 !important}.btn.border-red:hover,.border-red.btn-large:hover,.border-red.btn-small:hover{border-color:#fe1709 !important}a.text-red:hover{color:#fe8f88 !important}.red.darken-1{background-color:#fe3f33 !important}.text-red.text-darken-1{color:#fe3f33 !important}.border-red.border-darken-1{border-color:#fe3f33 !important}.purple.lighten-2{background-color:#8b9bb5 !important}.text-purple.text-lighten-2{color:#8b9bb5 !important}.border-purple.border-lighten-2{border-color:#8b9bb5 !important}.purple.lighten-1{background-color:#556785 !important}.text-purple.text-lighten-1{color:#556785 !important}.border-purple.border-lighten-1{border-color:#556785 !important}.purple{background-color:#485870 !important}.text-purple{color:#485870 !important}.border-purple{border-color:#485870 !important}.btn.purple:hover,.purple.btn-large:hover,.purple.btn-small:hover{background-color:#3a475a !important}.btn.text-purple:hover,.text-purple.btn-large:hover,.text-purple.btn-small:hover{color:#2a3341 !important}.btn.border-purple:hover,.border-purple.btn-large:hover,.border-purple.btn-small:hover{border-color:#2a3341 !important}a.text-purple:hover{color:#5c708f !important}.purple.darken-1{background-color:#3b485b !important}.text-purple.text-darken-1{color:#3b485b !important}.border-purple.border-darken-1{border-color:#3b485b !important}.blue.lighten-2{background-color:#a7e4ef !important}.text-blue.text-lighten-2{color:#a7e4ef !important}.border-blue.border-lighten-2{border-color:#a7e4ef !important}.blue.lighten-1{background-color:#01738d !important}.text-blue.text-lighten-1{color:#01738d !important}.border-blue.border-lighten-1{border-color:#01738d !important}.blue{background-color:#01586b !important}.text-blue{color:#01586b !important}.border-blue{border-color:#01586b !important}.btn.blue:hover,.blue.btn-large:hover,.blue.btn-small:hover{background-color:#013b48 !important}.btn.text-blue:hover,.text-blue.btn-large:hover,.text-blue.btn-small:hover{color:#001a1f !important}.btn.border-blue:hover,.border-blue.btn-large:hover,.border-blue.btn-small:hover{border-color:#001a1f !important}a.text-blue:hover{color:#01829e !important}.blue.darken-1{background-color:#013c48 !important}.text-blue.text-darken-1{color:#013c48 !important}.border-blue.border-darken-1{border-color:#013c48 !important}.teal.lighten-2{background-color:#9becef !important}.text-teal.text-lighten-2{color:#9becef !important}.border-teal.border-lighten-2{border-color:#9becef !important}.teal.lighten-1{background-color:#03b5bd !important}.text-teal.text-lighten-1{color:#03b5bd !important}.border-teal.border-lighten-1{border-color:#03b5bd !important}.teal{background-color:#02868b !important}.text-teal{color:#02868b !important}.border-teal{border-color:#02868b !important}.btn.teal:hover,.teal.btn-large:hover,.teal.btn-small:hover{background-color:#016468 !important}.btn.text-teal:hover,.text-teal.btn-large:hover,.text-teal.btn-small:hover{color:#013d40 !important}.btn.border-teal:hover,.border-teal.btn-large:hover,.border-teal.btn-small:hover{border-color:#013d40 !important}a.text-teal:hover{color:#03b6bd !important}.teal.darken-1{background-color:#02666a !important}.text-teal.text-darken-1{color:#02666a !important}.border-teal.border-darken-1{border-color:#02666a !important}.turquoise.lighten-2{background-color:#b7ede9 !important}.text-turquoise.text-lighten-2{color:#b7ede9 !important}.border-turquoise.border-lighten-2{border-color:#b7ede9 !important}.turquoise.lighten-1{background-color:#73ddd5 !important}.text-turquoise.text-lighten-1{color:#73ddd5 !important}.border-turquoise.border-lighten-1{border-color:#73ddd5 !important}.turquoise{background-color:#4ad4c9 !important}.text-turquoise{color:#4ad4c9 !important}.border-turquoise{border-color:#4ad4c9 !important}.btn.turquoise:hover,.turquoise.btn-large:hover,.turquoise.btn-small:hover{background-color:#30cabe !important}.btn.text-turquoise:hover,.text-turquoise.btn-large:hover,.text-turquoise.btn-small:hover{color:#28a99f !important}.btn.border-turquoise:hover,.border-turquoise.btn-large:hover,.border-turquoise.btn-small:hover{border-color:#28a99f !important}a.text-turquoise:hover{color:#73ded5 !important}.turquoise.darken-1{background-color:#2dbdb1 !important}.text-turquoise.text-darken-1{color:#2dbdb1 !important}.border-turquoise.border-darken-1{border-color:#2dbdb1 !important}.green.lighten-2{background-color:#cdf5cf !important}.text-green.text-lighten-2{color:#cdf5cf !important}.border-green.border-lighten-2{border-color:#cdf5cf !important}.green.lighten-1{background-color:#b0f1b6 !important}.text-green.text-lighten-1{color:#b0f1b6 !important}.border-green.border-lighten-1{border-color:#b0f1b6 !important}.green{background-color:#a2eda9 !important}.text-green{color:#a2eda9 !important}.border-green{border-color:#a2eda9 !important}.btn.green:hover,.green.btn-large:hover,.green.btn-small:hover{background-color:#84e78d !important}.btn.text-green:hover,.text-green.btn-large:hover,.text-green.btn-small:hover{color:#62e16e !important}.btn.border-green:hover,.border-green.btn-large:hover,.border-green.btn-small:hover{border-color:#62e16e !important}a.text-green:hover{color:#cdf5d1 !important}.green.darken-1{background-color:#6be476 !important}.text-green.text-darken-1{color:#6be476 !important}.border-green.border-darken-1{border-color:#6be476 !important}.yellow.lighten-2{background-color:#ffdcb3 !important}.text-yellow.text-lighten-2{color:#ffdcb3 !important}.border-yellow.border-lighten-2{border-color:#ffdcb3 !important}.yellow.lighten-1{background-color:#ffcc94 !important}.text-yellow.text-lighten-1{color:#ffcc94 !important}.border-yellow.border-lighten-1{border-color:#ffcc94 !important}.yellow{background-color:#ffbf69 !important}.text-yellow{color:#ffbf69 !important}.border-yellow{border-color:#ffbf69 !important}.btn.yellow:hover,.yellow.btn-large:hover,.yellow.btn-small:hover{background-color:#ffb045 !important}.btn.text-yellow:hover,.text-yellow.btn-large:hover,.text-yellow.btn-small:hover{color:#ff9e1d !important}.btn.border-yellow:hover,.border-yellow.btn-large:hover,.border-yellow.btn-small:hover{border-color:#ff9e1d !important}a.text-yellow:hover{color:#ffd59c !important}.yellow.darken-1{background-color:#ffb05b !important}.text-yellow.text-darken-1{color:#ffb05b !important}.border-yellow.border-darken-1{border-color:#ffb05b !important}.grey.lighten-3{background-color:#f3f3f5 !important}.text-grey.text-lighten-3{color:#f3f3f5 !important}.border-grey.border-lighten-3{border-color:#f3f3f5 !important}.grey.lighten-2{background-color:#DDDEE0 !important}.text-grey.text-lighten-2{color:#DDDEE0 !important}.border-grey.border-lighten-2{border-color:#DDDEE0 !important}.grey.lighten-1{background-color:#8C9098 !important}.text-grey.text-lighten-1{color:#8C9098 !important}.border-grey.border-lighten-1{border-color:#8C9098 !important}.grey{background-color:#575d68 !important}.text-grey{color:#575d68 !important}.border-grey{border-color:#575d68 !important}.btn.grey:hover,.grey.btn-large:hover,.grey.btn-small:hover{background-color:#474c55 !important}.btn.text-grey:hover,.text-grey.btn-large:hover,.text-grey.btn-small:hover{color:#34383e !important}.btn.border-grey:hover,.border-grey.btn-large:hover,.border-grey.btn-small:hover{border-color:#34383e !important}a.text-grey:hover{color:#6e7684 !important}.grey.darken-1{background-color:#484C56 !important}.text-grey.text-darken-1{color:#484C56 !important}.border-grey.border-darken-1{border-color:#484C56 !important}.grey.darken-2{background-color:#303845 !important}.text-grey.text-darken-2{color:#303845 !important}.border-grey.border-darken-2{border-color:#303845 !important}.shades.black{background-color:#000 !important}.text-shades.text-black{color:#000 !important}.border-shades.border-black{border-color:#000 !important}.shades.white{background-color:#fff !important}.text-shades.text-white{color:#fff !important}.border-shades.border-white{border-color:#fff !important}.black{background-color:#000 !important}.text-black{color:#000 !important}.border-black{border-color:#000 !important}.btn.border-black,.border-black.btn-large,.border-black.btn-small{border-color:#000 !important}.btn.border-black:hover,.border-black.btn-large:hover,.border-black.btn-small:hover{border-color:rgba(0,0,0,0.3) !important}.btn.text-black,.text-black.btn-large,.text-black.btn-small{color:#000 !important}.btn.text-black:hover,.text-black.btn-large:hover,.text-black.btn-small:hover{color:#000 !important;opacity:1}.btn.black,.black.btn-large,.black.btn-small{background-color:#000 !important}.btn.black:hover,.black.btn-large:hover,.black.btn-small:hover{background-color:rgba(0,0,0,0.7) !important}.white{background-color:#fff !important}.text-white{color:#fff !important}.border-white{border-color:#fff !important}.btn.border-white,.border-white.btn-large,.border-white.btn-small{border-color:#fff !important}.btn.border-white:hover,.border-white.btn-large:hover,.border-white.btn-small:hover{border-color:rgba(255,255,255,0.3) !important}.btn.text-white,.text-white.btn-large,.text-white.btn-small{color:#fff !important}.btn.text-white:hover,.text-white.btn-large:hover,.text-white.btn-small:hover{color:#fff !important;opacity:1}.btn.white,.white.btn-large,.white.btn-small{background-color:#fff !important}.btn.white:hover,.white.btn-large:hover,.white.btn-small:hover{background-color:rgba(255,255,255,0.7) !important}.trans-white{background-color:rgba(255,255,255,0.85) !important}.text-trans-white{color:rgba(255,255,255,0.85) !important}.border-trans-white{border-color:rgba(255,255,255,0.85) !important}.transparent{background-color:transparent !important}.text-transparent{color:transparent !important}.border-transparent{border-color:transparent !important}.border,[class^=\"border-\"],[class*=' border-']{border-style:solid !important;border-width:1px !important}.border-none{border-width:0px 0px 0px 0px !important}.border-top{border-width:1px 0px 0px 0px !important}.border-right{border-width:0px 1px 0px 0px !important}.border-bottom{border-width:0px 0px 1px 0px !important}.border-left{border-width:0px 0px 0px 1px !important}/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}html input[type=\"button\"],button,input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ul{list-style-type:none}a{color:#02868b;text-decoration:none;-webkit-tap-highlight-color:transparent;-moz-transition:all .2s;-o-transition:all .2s;-webkit-transition:all .2s;transition:all .2s}a:hover{cursor:pointer}a:not(.btn):not(.btn-large):not(.btn-small):hover{color:#4ad4c9}.text-white a{color:#ffffff}.text-white a:hover{opacity:.7;color:#ffffff}.valign-wrapper{display:flex;align-items:center}.valign-wrapper .valign{display:block}ul{padding:0}ul li{list-style-type:none}ul.ul-basic{padding-left:40px}ul.ul-basic>li{list-style:disc outside}.clearfix{clear:both}.z-depth-0{box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn-floating,.dropdown-content,.collapsible,.side-nav{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.z-depth-1-half,.btn-floating:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)}.z-depth-4,.modal{box-shadow:0 16px 28px 0 rgba(0,0,0,0.22),0 25px 55px 0 rgba(0,0,0,0.21)}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,0.2),0 40px 77px 0 rgba(0,0,0,0.22)}.hoverable{transition:box-shadow .25s;box-shadow:0}.hoverable:hover{transition:box-shadow .25s;box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#DDDEE0}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px;border-radius:2px;text-align:center}.pagination li a{color:#444}.pagination li.active a{color:#fff}.pagination li.active{background-color:#fe5f55}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2.2rem;vertical-align:middle}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 1200px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax img{display:none;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;transform-origin:0 50%}@media only screen and (max-width: 992px){.center-on-small{text-align:center}}table,th,td{border:none}table{width:100%;display:table}table.bordered>thead>tr,table.bordered>tbody>tr{border-bottom:1px solid #d0d0d0}table.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}table.striped>tbody>tr>td{border-radius:0px}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:#f2f2f2}table.centered thead tr th,table.centered tbody tr td{text-align:center}thead,tbody{border-bottom:1px solid #d0d0d0}td,th{padding:10px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 1200px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar .circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#4ad4c9;color:#fff}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#4ad4c9}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#4ad4c9}.collapsible .collection{margin:0;border:none}span.badge{min-width:3rem;padding:0 6px;text-align:center;font-size:1rem;line-height:inherit;color:#484C56;position:absolute;right:15px;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#4ad4c9;border-radius:2px}span.badge.new:after{content:\" new\"}nav ul a span.badge{position:static;margin-left:4px;line-height:0}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#effbfa;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;background-color:inherit;top:0;left:0;bottom:0;background-color:#4ad4c9;transition:width .3s linear}.progress .indeterminate{background-color:#4ad4c9}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation-delay:1.15s}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.db,.display-block{display:block !important}.di,.display-inline{display:inline !important}.dib,.display-inline-block{display:inline-block !important}.full-width{width:100% !important}.full-height{height:100% !important}.max-width{max-width:100% !important}.width-auto{width:auto !important}.height-auto{height:auto !important}.center-block{margin:0 auto !important;float:none !important}.rtl{direction:rtl}.lrt{direction:ltr}.pos-r{position:relative !important}.pos-a{position:absolute !important}.pos-s{position:static !important}.abs-left-outside{position:absolute;right:100%}.abs-right-outside{position:absolute;left:100%}.abs-top-outside{position:absolute;bottom:100%}.abs-bottom-outside{position:absolute;top:100%}.abs-left-inside{position:absolute;left:0}.abs-right-inside{position:absolute;right:0}.abs-top-inside{position:absolute;top:0}.abs-bottom-inside{position:absolute;bottom:0}.abs-middle-top-inside{position:absolute;top:0;left:50%}.abs-middle-bottom-inside{position:absolute;bottom:0;left:50%}.abs-left-top-inside{position:absolute;top:0;left:0}.abs-left-middle-inside{position:absolute;top:50%;left:0}.abs-left-bottom-inside{position:absolute;bottom:0;left:0}.abs-right-top-inside{position:absolute;top:0;right:0}.abs-right-middle-inside{position:absolute;top:50%;right:0}.abs-right-bottom-inside{position:absolute;bottom:0;right:0}.abs-middle-top-outside{position:absolute;bottom:100%;left:50%}.abs-middle-bottom-outside{position:absolute;top:100%;left:50%}.abs-left-top-outside{position:absolute;bottom:100%;right:100%}.abs-left-middle-outside{position:absolute;top:50%;right:100%}.abs-left-bottom-outside{position:absolute;top:100%;right:100%}.abs-right-top-outside{position:absolute;bottom:100%;left:100%}.abs-right-middle-outside{position:absolute;top:50%;left:100%}.abs-right-bottom-outside{position:absolute;top:100%;left:100%}.vertical-align{vertical-align:middle}.vertical-align-top{vertical-align:top}.vertical-align-bottom{vertical-align:bottom}.hide{display:none !important}.show{display:block !important}.hide-on-xsmall,.hide-on-xsmall-and-down{display:block}@media only screen and (max-width: 600px){.hide-on-xsmall,.hide-on-xsmall-and-down{display:none !important}}.hide-on-small-and-down{display:block}@media only screen and (max-width: 992px){.hide-on-small-and-down{display:none !important}}.hide-on-small-and-up{display:block}@media only screen and (min-width: 601px){.hide-on-small-and-up{display:none !important}}.hide-on-small{display:block}@media only screen and (min-width: 601px) and (max-width: 992px){.hide-on-small{display:none !important}}.hide-on-medium-and-down{display:block}@media only screen and (max-width: 1200px){.hide-on-medium-and-down{display:none !important}}.hide-on-medium-and-up{display:block}@media only screen and (min-width: 993px){.hide-on-medium-and-up{display:none !important}}.hide-on-medium{display:block}@media only screen and (min-width: 993px) and (max-width: 1200px){.hide-on-medium{display:none !important}}.hide-on-large-and-down{display:block}@media only screen and (max-width: 1600px){.hide-on-large-and-down{display:none !important}}.hide-on-large-and-up{display:block}@media only screen and (min-width: 1201px){.hide-on-large-and-up{display:none !important}}.hide-on-large{display:block}@media only screen and (min-width: 1201px) and (max-width: 1600px){.hide-on-large{display:none !important}}.hide-on-xlarge-and-up,.hide-on-xlarge{display:block}@media only screen and (min-width: 1601px){.hide-on-xlarge-and-up,.hide-on-xlarge{display:none !important}}.show-on-xlarge,.show-on-xlarge-and-up{display:none}@media only screen and (min-width: 1601px){.show-on-xlarge,.show-on-xlarge-and-up{display:block !important}}.show-on-large-and-up{display:none}@media only screen and (min-width: 1201px){.show-on-large-and-up{display:block !important}}.show-on-large-and-down{display:none}@media only screen and (max-width: 1600px){.show-on-large-and-down{display:block !important}}.show-on-large{display:none}@media only screen and (min-width: 1201px) and (max-width: 1600px){.show-on-large{display:block !important}}.show-on-medium-and-up{display:none}@media only screen and (min-width: 993px){.show-on-medium-and-up{display:block !important}}.show-on-medium-and-down{display:none}@media only screen and (max-width: 1200px){.show-on-medium-and-down{display:block !important}}.show-on-medium{display:none}@media only screen and (min-width: 993px) and (max-width: 1200px){.show-on-medium{display:block !important}}.show-on-small-and-up{display:none}@media only screen and (min-width: 601px){.show-on-small-and-up{display:block !important}}.show-on-small-and-down{display:none}@media only screen and (max-width: 992px){.show-on-small-and-down{display:block !important}}.show-on-small{display:none}@media only screen and (min-width: 601px) and (max-width: 992px){.show-on-small{display:block !important}}.show-on-xsmall,.show-on-xsmall-and-down{display:none}@media only screen and (max-width: 600px){.show-on-xsmall,.show-on-xsmall-and-down{display:block !important}}.left{float:left !important}.right{float:right !important}.text-left,.left-align{text-align:left !important}.text-right,.right-align{text-align:right !important}.text-center,.center,.center-align{text-align:center !important}@media only screen and (min-width: 601px){.stext-left{text-align:left !important}.stext-right{text-align:right !important}.stext-center{text-align:center !important}}@media only screen and (min-width: 993px){.mtext-left{text-align:left !important}.mtext-right{text-align:right !important}.mtext-center{text-align:center !important}}@media only screen and (min-width: 1201px){.ltext-left{text-align:left !important}.ltext-right{text-align:right !important}.ltext-center{text-align:center !important}}@media only screen and (min-width: 1601px){.xltext-left{text-align:left !important}.xltext-right{text-align:right !important}.xltext-center{text-align:center !important}}.no-select,input[type=range],input[type=range]+.thumb{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}.margin-0{margin:0 !important}.margin-xs{margin:0.5rem !important}.margin-s{margin:1rem !important}.margin-m{margin:2rem !important}.margin-l{margin:3rem !important}.margin-xl{margin:5rem !important}.margin-bottom-0{margin-bottom:0 !important}.margin-bottom-xs{margin-bottom:0.5rem !important}.margin-bottom-s{margin-bottom:1rem !important}.margin-bottom-m{margin-bottom:2rem !important}.margin-bottom-l{margin-bottom:3rem !important}.margin-bottom-xl{margin-bottom:5rem !important}.margin-top-0{margin-top:0 !important}.margin-top-xs{margin-top:0.5rem !important}.margin-top-s{margin-top:1rem !important}.margin-top-m{margin-top:2rem !important}.margin-top-l{margin-top:3rem !important}.margin-top-xl{margin-top:5rem !important}.margin-left-0{margin-left:0 !important}.margin-left-xs{margin-left:0.5rem !important}.margin-left-s{margin-left:1rem !important}.margin-left-m{margin-left:2rem !important}.margin-left-l{margin-left:3rem !important}.margin-left-xl{margin-left:5rem !important}.margin-right-0{margin-right:0 !important}.margin-right-xs{margin-right:0.5rem !important}.margin-right-s{margin-right:1rem !important}.margin-right-m{margin-right:2rem !important}.margin-right-l{margin-right:3rem !important}.margin-right-xl{margin-right:5rem !important}.neg-margin-xs{margin:-0.5rem !important}.neg-margin-s{margin:-1rem !important}.neg-margin-m{margin:-2rem !important}.neg-margin-l{margin:-3rem !important}.neg-margin-xl{margin:-5rem !important}.neg-margin-bottom-xs{margin-bottom:-0.5rem !important}.neg-margin-bottom-s{margin-bottom:-1rem !important}.neg-margin-bottom-m{margin-bottom:-2rem !important}.neg-margin-bottom-l{margin-bottom:-3rem !important}.neg-margin-bottom-xl{margin-bottom:-5rem !important}.neg-margin-top-xs{margin-top:-0.5rem !important}.neg-margin-top-s{margin-top:-1rem !important}.neg-margin-top-m{margin-top:-2rem !important}.neg-margin-top-l{margin-top:-3rem !important}.neg-margin-top-xl{margin-top:-5rem !important}.neg-margin-left-xs{margin-left:-0.5rem !important}.neg-margin-left-s{margin-left:-1rem !important}.neg-margin-left-m{margin-left:-2rem !important}.neg-margin-left-l{margin-left:-3rem !important}.neg-margin-left-xl{margin-left:-5rem !important}.neg-margin-right-xs{margin-right:-0.5rem !important}.neg-margin-right-s{margin-right:-1rem !important}.neg-margin-right-m{margin-right:-2rem !important}.neg-margin-right-l{margin-right:-3rem !important}.neg-margin-right-xl{margin-right:-5rem !important}.padding-0{padding:0 !important}.padding-xs{padding:0.5rem !important}.padding-s{padding:1rem !important}.padding-m{padding:2rem !important}.padding-l{padding:3rem !important}.padding-xl{padding:5rem !important}.padding-bottom-0{padding-bottom:0 !important}.padding-bottom-xs{padding-bottom:0.5rem !important}.padding-bottom-s{padding-bottom:1rem !important}.padding-bottom-m{padding-bottom:2rem !important}.padding-bottom-l{padding-bottom:3rem !important}.padding-bottom-xl{padding-bottom:5rem !important}.padding-top-0{padding-top:0 !important}.padding-top-xs{padding-top:0.5rem !important}.padding-top-s{padding-top:1rem !important}.padding-top-m{padding-top:2rem !important}.padding-top-l{padding-top:3rem !important}.padding-top-xl{padding-top:5rem !important}.padding-left-0{padding-left:0 !important}.padding-left-xs{padding-left:0.5rem !important}.padding-left-s{padding-left:1rem !important}.padding-left-m{padding-left:2rem !important}.padding-left-l{padding-left:3rem !important}.padding-left-xl{padding-left:5rem !important}.padding-right-0{padding-right:0 !important}.padding-right-xs{padding-right:0.5rem !important}.padding-right-s{padding-right:1rem !important}.padding-right-m{padding-right:2rem !important}.padding-right-l{padding-right:3rem !important}.padding-right-xl{padding-right:5rem !important}@media only screen and (min-width: 601px){.smargin-0{margin:0 !important}.smargin-xs{margin:0.5rem !important}.smargin-s{margin:1rem !important}.smargin-m{margin:2rem !important}.smargin-l{margin:3rem !important}.smargin-xl{margin:5rem !important}.smargin-bottom-0{margin-bottom:0 !important}.smargin-bottom-xs{margin-bottom:0.5rem !important}.smargin-bottom-s{margin-bottom:1rem !important}.smargin-bottom-m{margin-bottom:2rem !important}.smargin-bottom-l{margin-bottom:3rem !important}.smargin-bottom-xl{margin-bottom:5rem !important}.smargin-top-0{margin-top:0 !important}.smargin-top-xs{margin-top:0.5rem !important}.smargin-top-s{margin-top:1rem !important}.smargin-top-m{margin-top:2rem !important}.smargin-top-l{margin-top:3rem !important}.smargin-top-xl{margin-top:5rem !important}.smargin-left-0{margin-left:0 !important}.smargin-left-xs{margin-left:0.5rem !important}.smargin-left-s{margin-left:1rem !important}.smargin-left-m{margin-left:2rem !important}.smargin-left-l{margin-left:3rem !important}.smargin-left-xl{margin-left:5rem !important}.smargin-right-0{margin-right:0 !important}.smargin-right-xs{margin-right:0.5rem !important}.smargin-right-s{margin-right:1rem !important}.smargin-right-m{margin-right:2rem !important}.smargin-right-l{margin-right:3rem !important}.smargin-right-xl{margin-right:5rem !important}.spadding-0{padding:0 !important}.spadding-xs{padding:0.5rem !important}.spadding-s{padding:1rem !important}.spadding-m{padding:2rem !important}.spadding-l{padding:3rem !important}.spadding-xl{padding:5rem !important}.spadding-bottom-0{padding-bottom:0 !important}.spadding-bottom-xs{padding-bottom:0.5rem !important}.spadding-bottom-s{padding-bottom:1rem !important}.spadding-bottom-m{padding-bottom:2rem !important}.spadding-bottom-l{padding-bottom:3rem !important}.spadding-bottom-xl{padding-bottom:5rem !important}.spadding-top-0{padding-top:0 !important}.spadding-top-xs{padding-top:0.5rem !important}.spadding-top-s{padding-top:1rem !important}.spadding-top-m{padding-top:2rem !important}.spadding-top-l{padding-top:3rem !important}.spadding-top-xl{padding-top:5rem !important}.spadding-left-0{padding-left:0 !important}.spadding-left-xs{padding-left:0.5rem !important}.spadding-left-s{padding-left:1rem !important}.spadding-left-m{padding-left:2rem !important}.spadding-left-l{padding-left:3rem !important}.spadding-left-xl{padding-left:5rem !important}.spadding-right-0{padding-right:0 !important}.spadding-right-xs{padding-right:0.5rem !important}.spadding-right-s{padding-right:1rem !important}.spadding-right-m{padding-right:2rem !important}.spadding-right-l{padding-right:3rem !important}.spadding-right-xl{padding-right:5rem !important}}@media only screen and (min-width: 993px){.mmargin-0{margin:0 !important}.mmargin-xs{margin:0.5rem !important}.mmargin-s{margin:1rem !important}.mmargin-m{margin:2rem !important}.mmargin-l{margin:3rem !important}.mmargin-xl{margin:5rem !important}.mmargin-bottom-0{margin-bottom:0 !important}.mmargin-bottom-xs{margin-bottom:0.5rem !important}.mmargin-bottom-s{margin-bottom:1rem !important}.mmargin-bottom-m{margin-bottom:2rem !important}.mmargin-bottom-l{margin-bottom:3rem !important}.mmargin-bottom-xl{margin-bottom:5rem !important}.mmargin-top-0{margin-top:0 !important}.mmargin-top-xs{margin-top:0.5rem !important}.mmargin-top-s{margin-top:1rem !important}.mmargin-top-m{margin-top:2rem !important}.mmargin-top-l{margin-top:3rem !important}.mmargin-top-xl{margin-top:5rem !important}.mmargin-left-0{margin-left:0 !important}.mmargin-left-xs{margin-left:0.5rem !important}.mmargin-left-s{margin-left:1rem !important}.mmargin-left-m{margin-left:2rem !important}.mmargin-left-l{margin-left:3rem !important}.mmargin-left-xl{margin-left:5rem !important}.mmargin-right-0{margin-right:0 !important}.mmargin-right-xs{margin-right:0.5rem !important}.mmargin-right-s{margin-right:1rem !important}.mmargin-right-m{margin-right:2rem !important}.mmargin-right-l{margin-right:3rem !important}.mmargin-right-xl{margin-right:5rem !important}.mpadding-0{padding:0 !important}.mpadding-xs{padding:0.5rem !important}.mpadding-s{padding:1rem !important}.mpadding-m{padding:2rem !important}.mpadding-l{padding:3rem !important}.mpadding-xl{padding:5rem !important}.mpadding-bottom-0{padding-bottom:0 !important}.mpadding-bottom-xs{padding-bottom:0.5rem !important}.mpadding-bottom-s{padding-bottom:1rem !important}.mpadding-bottom-m{padding-bottom:2rem !important}.mpadding-bottom-l{padding-bottom:3rem !important}.mpadding-bottom-xl{padding-bottom:5rem !important}.mpadding-top-0{padding-top:0 !important}.mpadding-top-xs{padding-top:0.5rem !important}.mpadding-top-s{padding-top:1rem !important}.mpadding-top-m{padding-top:2rem !important}.mpadding-top-l{padding-top:3rem !important}.mpadding-top-xl{padding-top:5rem !important}.mpadding-left-0{padding-left:0 !important}.mpadding-left-xs{padding-left:0.5rem !important}.mpadding-left-s{padding-left:1rem !important}.mpadding-left-m{padding-left:2rem !important}.mpadding-left-l{padding-left:3rem !important}.mpadding-left-xl{padding-left:5rem !important}.mpadding-right-0{padding-right:0 !important}.mpadding-right-xs{padding-right:0.5rem !important}.mpadding-right-s{padding-right:1rem !important}.mpadding-right-m{padding-right:2rem !important}.mpadding-right-l{padding-right:3rem !important}.mpadding-right-xl{padding-right:5rem !important}}@media only screen and (min-width: 1201px){.lmargin-0{margin:0 !important}.lmargin-xs{margin:0.5rem !important}.lmargin-s{margin:1rem !important}.lmargin-m{margin:2rem !important}.lmargin-l{margin:3rem !important}.lmargin-xl{margin:5rem !important}.lmargin-bottom-0{margin-bottom:0 !important}.lmargin-bottom-xs{margin-bottom:0.5rem !important}.lmargin-bottom-s{margin-bottom:1rem !important}.lmargin-bottom-m{margin-bottom:2rem !important}.lmargin-bottom-l{margin-bottom:3rem !important}.lmargin-bottom-xl{margin-bottom:5rem !important}.lmargin-top-0{margin-top:0 !important}.lmargin-top-xs{margin-top:0.5rem !important}.lmargin-top-s{margin-top:1rem !important}.lmargin-top-m{margin-top:2rem !important}.lmargin-top-l{margin-top:3rem !important}.lmargin-top-xl{margin-top:5rem !important}.lmargin-left-0{margin-left:0 !important}.lmargin-left-xs{margin-left:0.5rem !important}.lmargin-left-s{margin-left:1rem !important}.lmargin-left-m{margin-left:2rem !important}.lmargin-left-l{margin-left:3rem !important}.lmargin-left-xl{margin-left:5rem !important}.lmargin-right-0{margin-right:0 !important}.lmargin-right-xs{margin-right:0.5rem !important}.lmargin-right-s{margin-right:1rem !important}.lmargin-right-m{margin-right:2rem !important}.lmargin-right-l{margin-right:3rem !important}.lmargin-right-xl{margin-right:5rem !important}.lpadding-0{padding:0 !important}.lpadding-xs{padding:0.5rem !important}.lpadding-s{padding:1rem !important}.lpadding-m{padding:2rem !important}.lpadding-l{padding:3rem !important}.lpadding-xl{padding:5rem !important}.lpadding-bottom-0{padding-bottom:0 !important}.lpadding-bottom-xs{padding-bottom:0.5rem !important}.lpadding-bottom-s{padding-bottom:1rem !important}.lpadding-bottom-m{padding-bottom:2rem !important}.lpadding-bottom-l{padding-bottom:3rem !important}.lpadding-bottom-xl{padding-bottom:5rem !important}.lpadding-top-0{padding-top:0 !important}.lpadding-top-xs{padding-top:0.5rem !important}.lpadding-top-s{padding-top:1rem !important}.lpadding-top-m{padding-top:2rem !important}.lpadding-top-l{padding-top:3rem !important}.lpadding-top-xl{padding-top:5rem !important}.lpadding-left-0{padding-left:0 !important}.lpadding-left-xs{padding-left:0.5rem !important}.lpadding-left-s{padding-left:1rem !important}.lpadding-left-m{padding-left:2rem !important}.lpadding-left-l{padding-left:3rem !important}.lpadding-left-xl{padding-left:5rem !important}.lpadding-right-0{padding-right:0 !important}.lpadding-right-xs{padding-right:0.5rem !important}.lpadding-right-s{padding-right:1rem !important}.lpadding-right-m{padding-right:2rem !important}.lpadding-right-l{padding-right:3rem !important}.lpadding-right-xl{padding-right:5rem !important}}@media only screen and (min-width: 1601px){.xlmargin-0{margin:0 !important}.xlmargin-xs{margin:0.5rem !important}.xlmargin-s{margin:1rem !important}.xlmargin-m{margin:2rem !important}.xlmargin-l{margin:3rem !important}.xlmargin-xl{margin:5rem !important}.xlmargin-bottom-0{margin-bottom:0 !important}.xlmargin-bottom-xs{margin-bottom:0.5rem !important}.xlmargin-bottom-s{margin-bottom:1rem !important}.xlmargin-bottom-m{margin-bottom:2rem !important}.xlmargin-bottom-l{margin-bottom:3rem !important}.xlmargin-bottom-xl{margin-bottom:5rem !important}.xlmargin-top-0{margin-top:0 !important}.xlmargin-top-xs{margin-top:0.5rem !important}.xlmargin-top-s{margin-top:1rem !important}.xlmargin-top-m{margin-top:2rem !important}.xlmargin-top-l{margin-top:3rem !important}.xlmargin-top-xl{margin-top:5rem !important}.xlmargin-left-0{margin-left:0 !important}.xlmargin-left-xs{margin-left:0.5rem !important}.xlmargin-left-s{margin-left:1rem !important}.xlmargin-left-m{margin-left:2rem !important}.xlmargin-left-l{margin-left:3rem !important}.xlmargin-left-xl{margin-left:5rem !important}.xlmargin-right-0{margin-right:0 !important}.xlmargin-right-xs{margin-right:0.5rem !important}.xlmargin-right-s{margin-right:1rem !important}.xlmargin-right-m{margin-right:2rem !important}.xlmargin-right-l{margin-right:3rem !important}.xlmargin-right-xl{margin-right:5rem !important}.xlpadding-0{padding:0 !important}.xlpadding-xs{padding:0.5rem !important}.xlpadding-s{padding:1rem !important}.xlpadding-m{padding:2rem !important}.xlpadding-l{padding:3rem !important}.xlpadding-xl{padding:5rem !important}.xlpadding-bottom-0{padding-bottom:0 !important}.xlpadding-bottom-xs{padding-bottom:0.5rem !important}.xlpadding-bottom-s{padding-bottom:1rem !important}.xlpadding-bottom-m{padding-bottom:2rem !important}.xlpadding-bottom-l{padding-bottom:3rem !important}.xlpadding-bottom-xl{padding-bottom:5rem !important}.xlpadding-top-0{padding-top:0 !important}.xlpadding-top-xs{padding-top:0.5rem !important}.xlpadding-top-s{padding-top:1rem !important}.xlpadding-top-m{padding-top:2rem !important}.xlpadding-top-l{padding-top:3rem !important}.xlpadding-top-xl{padding-top:5rem !important}.xlpadding-left-0{padding-left:0 !important}.xlpadding-left-xs{padding-left:0.5rem !important}.xlpadding-left-s{padding-left:1rem !important}.xlpadding-left-m{padding-left:2rem !important}.xlpadding-left-l{padding-left:3rem !important}.xlpadding-left-xl{padding-left:5rem !important}.xlpadding-right-0{padding-right:0 !important}.xlpadding-right-xs{padding-right:0.5rem !important}.xlpadding-right-s{padding-right:1rem !important}.xlpadding-right-m{padding-right:2rem !important}.xlpadding-right-l{padding-right:3rem !important}.xlpadding-right-xl{padding-right:5rem !important}}dl{margin-top:0}dt,dd{line-height:1.4rem}dt{font-weight:bold}dd{margin-left:0}@media only screen and (min-width: 993px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}.material-icons{text-rendering:optimizeLegibility;font-feature-settings:'liga'}@font-face{font-family:\"Material-Design-Icons\";src:url(\"../font/material-design-icons/Material-Design-Icons.eot?#iefix\") format(\"embedded-opentype\"),url(\"../font/material-design-icons/Material-Design-Icons.woff2\") format(\"woff2\"),url(\"../font/material-design-icons/Material-Design-Icons.woff\") format(\"woff\"),url(\"../font/material-design-icons/Material-Design-Icons.ttf\") format(\"truetype\"),url(\"../font/material-design-icons/Material-Design-Icons.svg#Material-Design-Icons\") format(\"svg\");font-weight:normal;font-style:normal}[class^=\"mdi-\"],[class*=\"mdi-\"]{speak:none;display:inline-block;font-family:\"Material-Design-Icons\";font-style:normal;font-weight:normal;font-variant:normal;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0)}[class^=\"mdi-\"]:before,[class*=\"mdi-\"]:before{display:inline-block;speak:none;text-decoration:inherit}[class^=\"mdi-\"].pull-left,[class*=\"mdi-\"].pull-left{margin-right:.3em}[class^=\"mdi-\"].pull-right,[class*=\"mdi-\"].pull-right{margin-left:.3em}[class^=\"mdi-\"].mdi-lg:before,[class^=\"mdi-\"].mdi-lg:after,[class*=\"mdi-\"].mdi-lg:before,[class*=\"mdi-\"].mdi-lg:after{font-size:1.33333333em;line-height:0.75em;vertical-align:-15%}[class^=\"mdi-\"].mdi-2x:before,[class^=\"mdi-\"].mdi-2x:after,[class*=\"mdi-\"].mdi-2x:before,[class*=\"mdi-\"].mdi-2x:after{font-size:2em}[class^=\"mdi-\"].mdi-3x:before,[class^=\"mdi-\"].mdi-3x:after,[class*=\"mdi-\"].mdi-3x:before,[class*=\"mdi-\"].mdi-3x:after{font-size:3em}[class^=\"mdi-\"].mdi-4x:before,[class^=\"mdi-\"].mdi-4x:after,[class*=\"mdi-\"].mdi-4x:before,[class*=\"mdi-\"].mdi-4x:after{font-size:4em}[class^=\"mdi-\"].mdi-5x:before,[class^=\"mdi-\"].mdi-5x:after,[class*=\"mdi-\"].mdi-5x:before,[class*=\"mdi-\"].mdi-5x:after{font-size:5em}[class^=\"mdi-device-signal-cellular-\"]:after,[class^=\"mdi-device-battery-\"]:after,[class^=\"mdi-device-battery-charging-\"]:after,[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after,[class^=\"mdi-device-signal-wifi-\"]:after,[class^=\"mdi-device-signal-wifi-statusbar-not-connected\"]:after,.mdi-device-network-wifi:after{opacity:.3;position:absolute;left:0;top:0;z-index:1;display:inline-block;speak:none;text-decoration:inherit}[class^=\"mdi-device-signal-cellular-\"]:after{content:\"\\e758\"}[class^=\"mdi-device-battery-\"]:after{content:\"\\e735\"}[class^=\"mdi-device-battery-charging-\"]:after{content:\"\\e733\"}[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after{content:\"\\e75d\"}[class^=\"mdi-device-signal-wifi-\"]:after,.mdi-device-network-wifi:after{content:\"\\e765\"}[class^=\"mdi-device-signal-wifi-statusbasr-not-connected\"]:after{content:\"\\e8f7\"}.mdi-device-signal-cellular-off:after,.mdi-device-signal-cellular-null:after,.mdi-device-signal-cellular-no-sim:after,.mdi-device-signal-wifi-off:after,.mdi-device-signal-wifi-4-bar:after,.mdi-device-signal-cellular-4-bar:after,.mdi-device-battery-alert:after,.mdi-device-signal-cellular-connected-no-internet-4-bar:after,.mdi-device-battery-std:after,.mdi-device-battery-full .mdi-device-battery-unknown:after{content:\"\"}.mdi-fw{width:1.28571429em;text-align:center}.mdi-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.mdi-ul>li{position:relative}.mdi-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:0.14285714em;text-align:center}.mdi-li.mdi-lg{left:-1.85714286em}.mdi-border{padding:.2em .25em .15em;border:solid 0.08em #eeeeee;border-radius:.1em}.mdi-spin{-webkit-animation:mdi-spin 2s infinite linear;animation:mdi-spin 2s infinite linear;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%}.mdi-pulse{-webkit-animation:mdi-spin 1s steps(8) infinite;animation:mdi-spin 1s steps(8) infinite;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%}@-webkit-keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.mdi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.mdi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.mdi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.mdi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.mdi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .mdi-rotate-90,:root .mdi-rotate-180,:root .mdi-rotate-270,:root .mdi-flip-horizontal,:root .mdi-flip-vertical{filter:none}.mdi-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.mdi-stack-1x,.mdi-stack-2x{position:absolute;left:0;width:100%;text-align:center}.mdi-stack-1x{line-height:inherit}.mdi-stack-2x{font-size:2em}.mdi-inverse{color:#ffffff}.mdi-action-3d-rotation:before{content:\"\\e600\"}.mdi-action-accessibility:before{content:\"\\e601\"}.mdi-action-account-balance-wallet:before{content:\"\\e602\"}.mdi-action-account-balance:before{content:\"\\e603\"}.mdi-action-account-box:before{content:\"\\e604\"}.mdi-action-account-child:before{content:\"\\e605\"}.mdi-action-account-circle:before{content:\"\\e606\"}.mdi-action-add-shopping-cart:before{content:\"\\e607\"}.mdi-action-alarm-add:before{content:\"\\e608\"}.mdi-action-alarm-off:before{content:\"\\e609\"}.mdi-action-alarm-on:before{content:\"\\e60a\"}.mdi-action-alarm:before{content:\"\\e60b\"}.mdi-action-android:before{content:\"\\e60c\"}.mdi-action-announcement:before{content:\"\\e60d\"}.mdi-action-aspect-ratio:before{content:\"\\e60e\"}.mdi-action-assessment:before{content:\"\\e60f\"}.mdi-action-assignment-ind:before{content:\"\\e610\"}.mdi-action-assignment-late:before{content:\"\\e611\"}.mdi-action-assignment-return:before{content:\"\\e612\"}.mdi-action-assignment-returned:before{content:\"\\e613\"}.mdi-action-assignment-turned-in:before{content:\"\\e614\"}.mdi-action-assignment:before{content:\"\\e615\"}.mdi-action-autorenew:before{content:\"\\e616\"}.mdi-action-backup:before{content:\"\\e617\"}.mdi-action-book:before{content:\"\\e618\"}.mdi-action-bookmark-outline:before{content:\"\\e619\"}.mdi-action-bookmark:before{content:\"\\e61a\"}.mdi-action-bug-report:before{content:\"\\e61b\"}.mdi-action-cached:before{content:\"\\e61c\"}.mdi-action-check-circle:before{content:\"\\e61d\"}.mdi-action-class:before{content:\"\\e61e\"}.mdi-action-credit-card:before{content:\"\\e61f\"}.mdi-action-dashboard:before{content:\"\\e620\"}.mdi-action-delete:before{content:\"\\e621\"}.mdi-action-description:before{content:\"\\e622\"}.mdi-action-dns:before{content:\"\\e623\"}.mdi-action-done-all:before{content:\"\\e624\"}.mdi-action-done:before{content:\"\\e625\"}.mdi-action-event:before{content:\"\\e626\"}.mdi-action-exit-to-app:before{content:\"\\e627\"}.mdi-action-explore:before{content:\"\\e628\"}.mdi-action-extension:before{content:\"\\e629\"}.mdi-action-face-unlock:before{content:\"\\e62a\"}.mdi-action-favorite-outline:before{content:\"\\e62b\"}.mdi-action-favorite:before{content:\"\\e62c\"}.mdi-action-find-in-page:before{content:\"\\e62d\"}.mdi-action-find-replace:before{content:\"\\e62e\"}.mdi-action-flip-to-back:before{content:\"\\e62f\"}.mdi-action-flip-to-front:before{content:\"\\e630\"}.mdi-action-get-app:before{content:\"\\e631\"}.mdi-action-grade:before{content:\"\\e632\"}.mdi-action-group-work:before{content:\"\\e633\"}.mdi-action-help:before{content:\"\\e634\"}.mdi-action-highlight-remove:before{content:\"\\e635\"}.mdi-action-history:before{content:\"\\e636\"}.mdi-action-home:before{content:\"\\e637\"}.mdi-action-https:before{content:\"\\e638\"}.mdi-action-info-outline:before{content:\"\\e639\"}.mdi-action-info:before{content:\"\\e63a\"}.mdi-action-input:before{content:\"\\e63b\"}.mdi-action-invert-colors:before{content:\"\\e63c\"}.mdi-action-label-outline:before{content:\"\\e63d\"}.mdi-action-label:before{content:\"\\e63e\"}.mdi-action-language:before{content:\"\\e63f\"}.mdi-action-launch:before{content:\"\\e640\"}.mdi-action-list:before{content:\"\\e641\"}.mdi-action-lock-open:before{content:\"\\e642\"}.mdi-action-lock-outline:before{content:\"\\e643\"}.mdi-action-lock:before{content:\"\\e644\"}.mdi-action-loyalty:before{content:\"\\e645\"}.mdi-action-markunread-mailbox:before{content:\"\\e646\"}.mdi-action-note-add:before{content:\"\\e647\"}.mdi-action-open-in-browser:before{content:\"\\e648\"}.mdi-action-open-in-new:before{content:\"\\e649\"}.mdi-action-open-with:before{content:\"\\e64a\"}.mdi-action-pageview:before{content:\"\\e64b\"}.mdi-action-payment:before{content:\"\\e64c\"}.mdi-action-perm-camera-mic:before{content:\"\\e64d\"}.mdi-action-perm-contact-cal:before{content:\"\\e64e\"}.mdi-action-perm-data-setting:before{content:\"\\e64f\"}.mdi-action-perm-device-info:before{content:\"\\e650\"}.mdi-action-perm-identity:before{content:\"\\e651\"}.mdi-action-perm-media:before{content:\"\\e652\"}.mdi-action-perm-phone-msg:before{content:\"\\e653\"}.mdi-action-perm-scan-wifi:before{content:\"\\e654\"}.mdi-action-picture-in-picture:before{content:\"\\e655\"}.mdi-action-polymer:before{content:\"\\e656\"}.mdi-action-print:before{content:\"\\e657\"}.mdi-action-query-builder:before{content:\"\\e658\"}.mdi-action-question-answer:before{content:\"\\e659\"}.mdi-action-receipt:before{content:\"\\e65a\"}.mdi-action-redeem:before{content:\"\\e65b\"}.mdi-action-reorder:before{content:\"\\e65c\"}.mdi-action-report-problem:before{content:\"\\e65d\"}.mdi-action-restore:before{content:\"\\e65e\"}.mdi-action-room:before{content:\"\\e65f\"}.mdi-action-schedule:before{content:\"\\e660\"}.mdi-action-search:before{content:\"\\e661\"}.mdi-action-settings-applications:before{content:\"\\e662\"}.mdi-action-settings-backup-restore:before{content:\"\\e663\"}.mdi-action-settings-bluetooth:before{content:\"\\e664\"}.mdi-action-settings-cell:before{content:\"\\e665\"}.mdi-action-settings-display:before{content:\"\\e666\"}.mdi-action-settings-ethernet:before{content:\"\\e667\"}.mdi-action-settings-input-antenna:before{content:\"\\e668\"}.mdi-action-settings-input-component:before{content:\"\\e669\"}.mdi-action-settings-input-composite:before{content:\"\\e66a\"}.mdi-action-settings-input-hdmi:before{content:\"\\e66b\"}.mdi-action-settings-input-svideo:before{content:\"\\e66c\"}.mdi-action-settings-overscan:before{content:\"\\e66d\"}.mdi-action-settings-phone:before{content:\"\\e66e\"}.mdi-action-settings-power:before{content:\"\\e66f\"}.mdi-action-settings-remote:before{content:\"\\e670\"}.mdi-action-settings-voice:before{content:\"\\e671\"}.mdi-action-settings:before{content:\"\\e672\"}.mdi-action-shop-two:before{content:\"\\e673\"}.mdi-action-shop:before{content:\"\\e674\"}.mdi-action-shopping-basket:before{content:\"\\e675\"}.mdi-action-shopping-cart:before{content:\"\\e676\"}.mdi-action-speaker-notes:before{content:\"\\e677\"}.mdi-action-spellcheck:before{content:\"\\e678\"}.mdi-action-star-rate:before{content:\"\\e679\"}.mdi-action-stars:before{content:\"\\e67a\"}.mdi-action-store:before{content:\"\\e67b\"}.mdi-action-subject:before{content:\"\\e67c\"}.mdi-action-supervisor-account:before{content:\"\\e67d\"}.mdi-action-swap-horiz:before{content:\"\\e67e\"}.mdi-action-swap-vert-circle:before{content:\"\\e67f\"}.mdi-action-swap-vert:before{content:\"\\e680\"}.mdi-action-system-update-tv:before{content:\"\\e681\"}.mdi-action-tab-unselected:before{content:\"\\e682\"}.mdi-action-tab:before{content:\"\\e683\"}.mdi-action-theaters:before{content:\"\\e684\"}.mdi-action-thumb-down:before{content:\"\\e685\"}.mdi-action-thumb-up:before{content:\"\\e686\"}.mdi-action-thumbs-up-down:before{content:\"\\e687\"}.mdi-action-toc:before{content:\"\\e688\"}.mdi-action-today:before{content:\"\\e689\"}.mdi-action-track-changes:before{content:\"\\e68a\"}.mdi-action-translate:before{content:\"\\e68b\"}.mdi-action-trending-down:before{content:\"\\e68c\"}.mdi-action-trending-neutral:before{content:\"\\e68d\"}.mdi-action-trending-up:before{content:\"\\e68e\"}.mdi-action-turned-in-not:before{content:\"\\e68f\"}.mdi-action-turned-in:before{content:\"\\e690\"}.mdi-action-verified-user:before{content:\"\\e691\"}.mdi-action-view-agenda:before{content:\"\\e692\"}.mdi-action-view-array:before{content:\"\\e693\"}.mdi-action-view-carousel:before{content:\"\\e694\"}.mdi-action-view-column:before{content:\"\\e695\"}.mdi-action-view-day:before{content:\"\\e696\"}.mdi-action-view-headline:before{content:\"\\e697\"}.mdi-action-view-list:before{content:\"\\e698\"}.mdi-action-view-module:before{content:\"\\e699\"}.mdi-action-view-quilt:before{content:\"\\e69a\"}.mdi-action-view-stream:before{content:\"\\e69b\"}.mdi-action-view-week:before{content:\"\\e69c\"}.mdi-action-visibility-off:before{content:\"\\e69d\"}.mdi-action-visibility:before{content:\"\\e69e\"}.mdi-action-wallet-giftcard:before{content:\"\\e69f\"}.mdi-action-wallet-membership:before{content:\"\\e6a0\"}.mdi-action-wallet-travel:before{content:\"\\e6a1\"}.mdi-action-work:before{content:\"\\e6a2\"}.mdi-alert-error:before{content:\"\\e6a3\"}.mdi-alert-warning:before{content:\"\\e6a4\"}.mdi-av-album:before{content:\"\\e6a5\"}.mdi-av-closed-caption:before{content:\"\\e6a6\"}.mdi-av-equalizer:before{content:\"\\e6a7\"}.mdi-av-explicit:before{content:\"\\e6a8\"}.mdi-av-fast-forward:before{content:\"\\e6a9\"}.mdi-av-fast-rewind:before{content:\"\\e6aa\"}.mdi-av-games:before{content:\"\\e6ab\"}.mdi-av-hearing:before{content:\"\\e6ac\"}.mdi-av-high-quality:before{content:\"\\e6ad\"}.mdi-av-loop:before{content:\"\\e6ae\"}.mdi-av-mic-none:before{content:\"\\e6af\"}.mdi-av-mic-off:before{content:\"\\e6b0\"}.mdi-av-mic:before{content:\"\\e6b1\"}.mdi-av-movie:before{content:\"\\e6b2\"}.mdi-av-my-library-add:before{content:\"\\e6b3\"}.mdi-av-my-library-books:before{content:\"\\e6b4\"}.mdi-av-my-library-music:before{content:\"\\e6b5\"}.mdi-av-new-releases:before{content:\"\\e6b6\"}.mdi-av-not-interested:before{content:\"\\e6b7\"}.mdi-av-pause-circle-fill:before{content:\"\\e6b8\"}.mdi-av-pause-circle-outline:before{content:\"\\e6b9\"}.mdi-av-pause:before{content:\"\\e6ba\"}.mdi-av-play-arrow:before{content:\"\\e6bb\"}.mdi-av-play-circle-fill:before{content:\"\\e6bc\"}.mdi-av-play-circle-outline:before{content:\"\\e6bd\"}.mdi-av-play-shopping-bag:before{content:\"\\e6be\"}.mdi-av-playlist-add:before{content:\"\\e6bf\"}.mdi-av-queue-music:before{content:\"\\e6c0\"}.mdi-av-queue:before{content:\"\\e6c1\"}.mdi-av-radio:before{content:\"\\e6c2\"}.mdi-av-recent-actors:before{content:\"\\e6c3\"}.mdi-av-repeat-one:before{content:\"\\e6c4\"}.mdi-av-repeat:before{content:\"\\e6c5\"}.mdi-av-replay:before{content:\"\\e6c6\"}.mdi-av-shuffle:before{content:\"\\e6c7\"}.mdi-av-skip-next:before{content:\"\\e6c8\"}.mdi-av-skip-previous:before{content:\"\\e6c9\"}.mdi-av-snooze:before{content:\"\\e6ca\"}.mdi-av-stop:before{content:\"\\e6cb\"}.mdi-av-subtitles:before{content:\"\\e6cc\"}.mdi-av-surround-sound:before{content:\"\\e6cd\"}.mdi-av-timer:before{content:\"\\e6ce\"}.mdi-av-video-collection:before{content:\"\\e6cf\"}.mdi-av-videocam-off:before{content:\"\\e6d0\"}.mdi-av-videocam:before{content:\"\\e6d1\"}.mdi-av-volume-down:before{content:\"\\e6d2\"}.mdi-av-volume-mute:before{content:\"\\e6d3\"}.mdi-av-volume-off:before{content:\"\\e6d4\"}.mdi-av-volume-up:before{content:\"\\e6d5\"}.mdi-av-web:before{content:\"\\e6d6\"}.mdi-communication-business:before{content:\"\\e6d7\"}.mdi-communication-call-end:before{content:\"\\e6d8\"}.mdi-communication-call-made:before{content:\"\\e6d9\"}.mdi-communication-call-merge:before{content:\"\\e6da\"}.mdi-communication-call-missed:before{content:\"\\e6db\"}.mdi-communication-call-received:before{content:\"\\e6dc\"}.mdi-communication-call-split:before{content:\"\\e6dd\"}.mdi-communication-call:before{content:\"\\e6de\"}.mdi-communication-chat:before{content:\"\\e6df\"}.mdi-communication-clear-all:before{content:\"\\e6e0\"}.mdi-communication-comment:before{content:\"\\e6e1\"}.mdi-communication-contacts:before{content:\"\\e6e2\"}.mdi-communication-dialer-sip:before{content:\"\\e6e3\"}.mdi-communication-dialpad:before{content:\"\\e6e4\"}.mdi-communication-dnd-on:before{content:\"\\e6e5\"}.mdi-communication-email:before{content:\"\\e6e6\"}.mdi-communication-forum:before{content:\"\\e6e7\"}.mdi-communication-import-export:before{content:\"\\e6e8\"}.mdi-communication-invert-colors-off:before{content:\"\\e6e9\"}.mdi-communication-invert-colors-on:before{content:\"\\e6ea\"}.mdi-communication-live-help:before{content:\"\\e6eb\"}.mdi-communication-location-off:before{content:\"\\e6ec\"}.mdi-communication-location-on:before{content:\"\\e6ed\"}.mdi-communication-message:before{content:\"\\e6ee\"}.mdi-communication-messenger:before{content:\"\\e6ef\"}.mdi-communication-no-sim:before{content:\"\\e6f0\"}.mdi-communication-phone:before{content:\"\\e6f1\"}.mdi-communication-portable-wifi-off:before{content:\"\\e6f2\"}.mdi-communication-quick-contacts-dialer:before{content:\"\\e6f3\"}.mdi-communication-quick-contacts-mail:before{content:\"\\e6f4\"}.mdi-communication-ring-volume:before{content:\"\\e6f5\"}.mdi-communication-stay-current-landscape:before{content:\"\\e6f6\"}.mdi-communication-stay-current-portrait:before{content:\"\\e6f7\"}.mdi-communication-stay-primary-landscape:before{content:\"\\e6f8\"}.mdi-communication-stay-primary-portrait:before{content:\"\\e6f9\"}.mdi-communication-swap-calls:before{content:\"\\e6fa\"}.mdi-communication-textsms:before{content:\"\\e6fb\"}.mdi-communication-voicemail:before{content:\"\\e6fc\"}.mdi-communication-vpn-key:before{content:\"\\e6fd\"}.mdi-content-add-box:before{content:\"\\e6fe\"}.mdi-content-add-circle-outline:before{content:\"\\e6ff\"}.mdi-content-add-circle:before{content:\"\\e700\"}.mdi-content-add:before{content:\"\\e701\"}.mdi-content-archive:before{content:\"\\e702\"}.mdi-content-backspace:before{content:\"\\e703\"}.mdi-content-block:before{content:\"\\e704\"}.mdi-content-clear:before{content:\"\\e705\"}.mdi-content-content-copy:before{content:\"\\e706\"}.mdi-content-content-cut:before{content:\"\\e707\"}.mdi-content-content-paste:before{content:\"\\e708\"}.mdi-content-create:before{content:\"\\e709\"}.mdi-content-drafts:before{content:\"\\e70a\"}.mdi-content-filter-list:before{content:\"\\e70b\"}.mdi-content-flag:before{content:\"\\e70c\"}.mdi-content-forward:before{content:\"\\e70d\"}.mdi-content-gesture:before{content:\"\\e70e\"}.mdi-content-inbox:before{content:\"\\e70f\"}.mdi-content-link:before{content:\"\\e710\"}.mdi-content-mail:before{content:\"\\e711\"}.mdi-content-markunread:before{content:\"\\e712\"}.mdi-content-redo:before{content:\"\\e713\"}.mdi-content-remove-circle-outline:before{content:\"\\e714\"}.mdi-content-remove-circle:before{content:\"\\e715\"}.mdi-content-remove:before{content:\"\\e716\"}.mdi-content-reply-all:before{content:\"\\e717\"}.mdi-content-reply:before{content:\"\\e718\"}.mdi-content-report:before{content:\"\\e719\"}.mdi-content-save:before{content:\"\\e71a\"}.mdi-content-select-all:before{content:\"\\e71b\"}.mdi-content-send:before{content:\"\\e71c\"}.mdi-content-sort:before{content:\"\\e71d\"}.mdi-content-text-format:before{content:\"\\e71e\"}.mdi-content-undo:before{content:\"\\e71f\"}.mdi-editor-attach-file:before{content:\"\\e776\"}.mdi-editor-attach-money:before{content:\"\\e777\"}.mdi-editor-border-all:before{content:\"\\e778\"}.mdi-editor-border-bottom:before{content:\"\\e779\"}.mdi-editor-border-clear:before{content:\"\\e77a\"}.mdi-editor-border-color:before{content:\"\\e77b\"}.mdi-editor-border-horizontal:before{content:\"\\e77c\"}.mdi-editor-border-inner:before{content:\"\\e77d\"}.mdi-editor-border-left:before{content:\"\\e77e\"}.mdi-editor-border-outer:before{content:\"\\e77f\"}.mdi-editor-border-right:before{content:\"\\e780\"}.mdi-editor-border-style:before{content:\"\\e781\"}.mdi-editor-border-top:before{content:\"\\e782\"}.mdi-editor-border-vertical:before{content:\"\\e783\"}.mdi-editor-format-align-center:before{content:\"\\e784\"}.mdi-editor-format-align-justify:before{content:\"\\e785\"}.mdi-editor-format-align-left:before{content:\"\\e786\"}.mdi-editor-format-align-right:before{content:\"\\e787\"}.mdi-editor-format-bold:before{content:\"\\e788\"}.mdi-editor-format-clear:before{content:\"\\e789\"}.mdi-editor-format-color-fill:before{content:\"\\e78a\"}.mdi-editor-format-color-reset:before{content:\"\\e78b\"}.mdi-editor-format-color-text:before{content:\"\\e78c\"}.mdi-editor-format-indent-decrease:before{content:\"\\e78d\"}.mdi-editor-format-indent-increase:before{content:\"\\e78e\"}.mdi-editor-format-italic:before{content:\"\\e78f\"}.mdi-editor-format-line-spacing:before{content:\"\\e790\"}.mdi-editor-format-list-bulleted:before{content:\"\\e791\"}.mdi-editor-format-list-numbered:before{content:\"\\e792\"}.mdi-editor-format-paint:before{content:\"\\e793\"}.mdi-editor-format-quote:before{content:\"\\e794\"}.mdi-editor-format-size:before{content:\"\\e795\"}.mdi-editor-format-strikethrough:before{content:\"\\e796\"}.mdi-editor-format-textdirection-l-to-r:before{content:\"\\e797\"}.mdi-editor-format-textdirection-r-to-l:before{content:\"\\e798\"}.mdi-editor-format-underline:before{content:\"\\e799\"}.mdi-editor-functions:before{content:\"\\e79a\"}.mdi-editor-insert-chart:before{content:\"\\e79b\"}.mdi-editor-insert-comment:before{content:\"\\e79c\"}.mdi-editor-insert-drive-file:before{content:\"\\e79d\"}.mdi-editor-insert-emoticon:before{content:\"\\e79e\"}.mdi-editor-insert-invitation:before{content:\"\\e79f\"}.mdi-editor-insert-link:before{content:\"\\e7a0\"}.mdi-editor-insert-photo:before{content:\"\\e7a1\"}.mdi-editor-merge-type:before{content:\"\\e7a2\"}.mdi-editor-mode-comment:before{content:\"\\e7a3\"}.mdi-editor-mode-edit:before{content:\"\\e7a4\"}.mdi-editor-publish:before{content:\"\\e7a5\"}.mdi-editor-vertical-align-bottom:before{content:\"\\e7a6\"}.mdi-editor-vertical-align-center:before{content:\"\\e7a7\"}.mdi-editor-vertical-align-top:before{content:\"\\e7a8\"}.mdi-editor-wrap-text:before{content:\"\\e7a9\"}.mdi-file-attachment:before{content:\"\\e7aa\"}.mdi-file-cloud-circle:before{content:\"\\e7ab\"}.mdi-file-cloud-done:before{content:\"\\e7ac\"}.mdi-file-cloud-download:before{content:\"\\e7ad\"}.mdi-file-cloud-off:before{content:\"\\e7ae\"}.mdi-file-cloud-queue:before{content:\"\\e7af\"}.mdi-file-cloud-upload:before{content:\"\\e7b0\"}.mdi-file-cloud:before{content:\"\\e7b1\"}.mdi-file-file-download:before{content:\"\\e7b2\"}.mdi-file-file-upload:before{content:\"\\e7b3\"}.mdi-file-folder-open:before{content:\"\\e7b4\"}.mdi-file-folder-shared:before{content:\"\\e7b5\"}.mdi-file-folder:before{content:\"\\e7b6\"}.mdi-device-access-alarm:before{content:\"\\e720\"}.mdi-device-access-alarms:before{content:\"\\e721\"}.mdi-device-access-time:before{content:\"\\e722\"}.mdi-device-add-alarm:before{content:\"\\e723\"}.mdi-device-airplanemode-off:before{content:\"\\e724\"}.mdi-device-airplanemode-on:before{content:\"\\e725\"}.mdi-device-battery-20:before{content:\"\\e726\"}.mdi-device-battery-30:before{content:\"\\e727\"}.mdi-device-battery-50:before{content:\"\\e728\"}.mdi-device-battery-60:before{content:\"\\e729\"}.mdi-device-battery-80:before{content:\"\\e72a\"}.mdi-device-battery-90:before{content:\"\\e72b\"}.mdi-device-battery-alert:before{content:\"\\e72c\"}.mdi-device-battery-charging-20:before{content:\"\\e72d\"}.mdi-device-battery-charging-30:before{content:\"\\e72e\"}.mdi-device-battery-charging-50:before{content:\"\\e72f\"}.mdi-device-battery-charging-60:before{content:\"\\e730\"}.mdi-device-battery-charging-80:before{content:\"\\e731\"}.mdi-device-battery-charging-90:before{content:\"\\e732\"}.mdi-device-battery-charging-full:before{content:\"\\e733\"}.mdi-device-battery-full:before{content:\"\\e734\"}.mdi-device-battery-std:before{content:\"\\e735\"}.mdi-device-battery-unknown:before{content:\"\\e736\"}.mdi-device-bluetooth-connected:before{content:\"\\e737\"}.mdi-device-bluetooth-disabled:before{content:\"\\e738\"}.mdi-device-bluetooth-searching:before{content:\"\\e739\"}.mdi-device-bluetooth:before{content:\"\\e73a\"}.mdi-device-brightness-auto:before{content:\"\\e73b\"}.mdi-device-brightness-high:before{content:\"\\e73c\"}.mdi-device-brightness-low:before{content:\"\\e73d\"}.mdi-device-brightness-medium:before{content:\"\\e73e\"}.mdi-device-data-usage:before{content:\"\\e73f\"}.mdi-device-developer-mode:before{content:\"\\e740\"}.mdi-device-devices:before{content:\"\\e741\"}.mdi-device-dvr:before{content:\"\\e742\"}.mdi-device-gps-fixed:before{content:\"\\e743\"}.mdi-device-gps-not-fixed:before{content:\"\\e744\"}.mdi-device-gps-off:before{content:\"\\e745\"}.mdi-device-location-disabled:before{content:\"\\e746\"}.mdi-device-location-searching:before{content:\"\\e747\"}.mdi-device-multitrack-audio:before{content:\"\\e748\"}.mdi-device-network-cell:before{content:\"\\e749\"}.mdi-device-network-wifi:before{content:\"\\e74a\"}.mdi-device-nfc:before{content:\"\\e74b\"}.mdi-device-now-wallpaper:before{content:\"\\e74c\"}.mdi-device-now-widgets:before{content:\"\\e74d\"}.mdi-device-screen-lock-landscape:before{content:\"\\e74e\"}.mdi-device-screen-lock-portrait:before{content:\"\\e74f\"}.mdi-device-screen-lock-rotation:before{content:\"\\e750\"}.mdi-device-screen-rotation:before{content:\"\\e751\"}.mdi-device-sd-storage:before{content:\"\\e752\"}.mdi-device-settings-system-daydream:before{content:\"\\e753\"}.mdi-device-signal-cellular-0-bar:before{content:\"\\e754\"}.mdi-device-signal-cellular-1-bar:before{content:\"\\e755\"}.mdi-device-signal-cellular-2-bar:before{content:\"\\e756\"}.mdi-device-signal-cellular-3-bar:before{content:\"\\e757\"}.mdi-device-signal-cellular-4-bar:before{content:\"\\e758\"}.mdi-signal-wifi-statusbar-connected-no-internet-after:before{content:\"\\e8f6\"}.mdi-device-signal-cellular-connected-no-internet-0-bar:before{content:\"\\e759\"}.mdi-device-signal-cellular-connected-no-internet-1-bar:before{content:\"\\e75a\"}.mdi-device-signal-cellular-connected-no-internet-2-bar:before{content:\"\\e75b\"}.mdi-device-signal-cellular-connected-no-internet-3-bar:before{content:\"\\e75c\"}.mdi-device-signal-cellular-connected-no-internet-4-bar:before{content:\"\\e75d\"}.mdi-device-signal-cellular-no-sim:before{content:\"\\e75e\"}.mdi-device-signal-cellular-null:before{content:\"\\e75f\"}.mdi-device-signal-cellular-off:before{content:\"\\e760\"}.mdi-device-signal-wifi-0-bar:before{content:\"\\e761\"}.mdi-device-signal-wifi-1-bar:before{content:\"\\e762\"}.mdi-device-signal-wifi-2-bar:before{content:\"\\e763\"}.mdi-device-signal-wifi-3-bar:before{content:\"\\e764\"}.mdi-device-signal-wifi-4-bar:before{content:\"\\e765\"}.mdi-device-signal-wifi-off:before{content:\"\\e766\"}.mdi-device-signal-wifi-statusbar-1-bar:before{content:\"\\e767\"}.mdi-device-signal-wifi-statusbar-2-bar:before{content:\"\\e768\"}.mdi-device-signal-wifi-statusbar-3-bar:before{content:\"\\e769\"}.mdi-device-signal-wifi-statusbar-4-bar:before{content:\"\\e76a\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-:before{content:\"\\e76b\"}.mdi-device-signal-wifi-statusbar-connected-no-internet:before{content:\"\\e76f\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-2:before{content:\"\\e76c\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-3:before{content:\"\\e76d\"}.mdi-device-signal-wifi-statusbar-connected-no-internet-4:before{content:\"\\e76e\"}.mdi-signal-wifi-statusbar-not-connected-after:before{content:\"\\e8f7\"}.mdi-device-signal-wifi-statusbar-not-connected:before{content:\"\\e770\"}.mdi-device-signal-wifi-statusbar-null:before{content:\"\\e771\"}.mdi-device-storage:before{content:\"\\e772\"}.mdi-device-usb:before{content:\"\\e773\"}.mdi-device-wifi-lock:before{content:\"\\e774\"}.mdi-device-wifi-tethering:before{content:\"\\e775\"}.mdi-hardware-cast-connected:before{content:\"\\e7b7\"}.mdi-hardware-cast:before{content:\"\\e7b8\"}.mdi-hardware-computer:before{content:\"\\e7b9\"}.mdi-hardware-desktop-mac:before{content:\"\\e7ba\"}.mdi-hardware-desktop-windows:before{content:\"\\e7bb\"}.mdi-hardware-dock:before{content:\"\\e7bc\"}.mdi-hardware-gamepad:before{content:\"\\e7bd\"}.mdi-hardware-headset-mic:before{content:\"\\e7be\"}.mdi-hardware-headset:before{content:\"\\e7bf\"}.mdi-hardware-keyboard-alt:before{content:\"\\e7c0\"}.mdi-hardware-keyboard-arrow-down:before{content:\"\\e7c1\"}.mdi-hardware-keyboard-arrow-left:before{content:\"\\e7c2\"}.mdi-hardware-keyboard-arrow-right:before{content:\"\\e7c3\"}.mdi-hardware-keyboard-arrow-up:before{content:\"\\e7c4\"}.mdi-hardware-keyboard-backspace:before{content:\"\\e7c5\"}.mdi-hardware-keyboard-capslock:before{content:\"\\e7c6\"}.mdi-hardware-keyboard-control:before{content:\"\\e7c7\"}.mdi-hardware-keyboard-hide:before{content:\"\\e7c8\"}.mdi-hardware-keyboard-return:before{content:\"\\e7c9\"}.mdi-hardware-keyboard-tab:before{content:\"\\e7ca\"}.mdi-hardware-keyboard-voice:before{content:\"\\e7cb\"}.mdi-hardware-keyboard:before{content:\"\\e7cc\"}.mdi-hardware-laptop-chromebook:before{content:\"\\e7cd\"}.mdi-hardware-laptop-mac:before{content:\"\\e7ce\"}.mdi-hardware-laptop-windows:before{content:\"\\e7cf\"}.mdi-hardware-laptop:before{content:\"\\e7d0\"}.mdi-hardware-memory:before{content:\"\\e7d1\"}.mdi-hardware-mouse:before{content:\"\\e7d2\"}.mdi-hardware-phone-android:before{content:\"\\e7d3\"}.mdi-hardware-phone-iphone:before{content:\"\\e7d4\"}.mdi-hardware-phonelink-off:before{content:\"\\e7d5\"}.mdi-hardware-phonelink:before{content:\"\\e7d6\"}.mdi-hardware-security:before{content:\"\\e7d7\"}.mdi-hardware-sim-card:before{content:\"\\e7d8\"}.mdi-hardware-smartphone:before{content:\"\\e7d9\"}.mdi-hardware-speaker:before{content:\"\\e7da\"}.mdi-hardware-tablet-android:before{content:\"\\e7db\"}.mdi-hardware-tablet-mac:before{content:\"\\e7dc\"}.mdi-hardware-tablet:before{content:\"\\e7dd\"}.mdi-hardware-tv:before{content:\"\\e7de\"}.mdi-hardware-watch:before{content:\"\\e7df\"}.mdi-image-add-to-photos:before{content:\"\\e7e0\"}.mdi-image-adjust:before{content:\"\\e7e1\"}.mdi-image-assistant-photo:before{content:\"\\e7e2\"}.mdi-image-audiotrack:before{content:\"\\e7e3\"}.mdi-image-blur-circular:before{content:\"\\e7e4\"}.mdi-image-blur-linear:before{content:\"\\e7e5\"}.mdi-image-blur-off:before{content:\"\\e7e6\"}.mdi-image-blur-on:before{content:\"\\e7e7\"}.mdi-image-brightness-1:before{content:\"\\e7e8\"}.mdi-image-brightness-2:before{content:\"\\e7e9\"}.mdi-image-brightness-3:before{content:\"\\e7ea\"}.mdi-image-brightness-4:before{content:\"\\e7eb\"}.mdi-image-brightness-5:before{content:\"\\e7ec\"}.mdi-image-brightness-6:before{content:\"\\e7ed\"}.mdi-image-brightness-7:before{content:\"\\e7ee\"}.mdi-image-brush:before{content:\"\\e7ef\"}.mdi-image-camera-alt:before{content:\"\\e7f0\"}.mdi-image-camera-front:before{content:\"\\e7f1\"}.mdi-image-camera-rear:before{content:\"\\e7f2\"}.mdi-image-camera-roll:before{content:\"\\e7f3\"}.mdi-image-camera:before{content:\"\\e7f4\"}.mdi-image-center-focus-strong:before{content:\"\\e7f5\"}.mdi-image-center-focus-weak:before{content:\"\\e7f6\"}.mdi-image-collections:before{content:\"\\e7f7\"}.mdi-image-color-lens:before{content:\"\\e7f8\"}.mdi-image-colorize:before{content:\"\\e7f9\"}.mdi-image-compare:before{content:\"\\e7fa\"}.mdi-image-control-point-duplicate:before{content:\"\\e7fb\"}.mdi-image-control-point:before{content:\"\\e7fc\"}.mdi-image-crop-3-2:before{content:\"\\e7fd\"}.mdi-image-crop-5-4:before{content:\"\\e7fe\"}.mdi-image-crop-7-5:before{content:\"\\e7ff\"}.mdi-image-crop-16-9:before{content:\"\\e800\"}.mdi-image-crop-din:before{content:\"\\e801\"}.mdi-image-crop-free:before{content:\"\\e802\"}.mdi-image-crop-landscape:before{content:\"\\e803\"}.mdi-image-crop-original:before{content:\"\\e804\"}.mdi-image-crop-portrait:before{content:\"\\e805\"}.mdi-image-crop-square:before{content:\"\\e806\"}.mdi-image-crop:before{content:\"\\e807\"}.mdi-image-dehaze:before{content:\"\\e808\"}.mdi-image-details:before{content:\"\\e809\"}.mdi-image-edit:before{content:\"\\e80a\"}.mdi-image-exposure-minus-1:before{content:\"\\e80b\"}.mdi-image-exposure-minus-2:before{content:\"\\e80c\"}.mdi-image-exposure-plus-1:before{content:\"\\e80d\"}.mdi-image-exposure-plus-2:before{content:\"\\e80e\"}.mdi-image-exposure-zero:before{content:\"\\e80f\"}.mdi-image-exposure:before{content:\"\\e810\"}.mdi-image-filter-1:before{content:\"\\e811\"}.mdi-image-filter-2:before{content:\"\\e812\"}.mdi-image-filter-3:before{content:\"\\e813\"}.mdi-image-filter-4:before{content:\"\\e814\"}.mdi-image-filter-5:before{content:\"\\e815\"}.mdi-image-filter-6:before{content:\"\\e816\"}.mdi-image-filter-7:before{content:\"\\e817\"}.mdi-image-filter-8:before{content:\"\\e818\"}.mdi-image-filter-9-plus:before{content:\"\\e819\"}.mdi-image-filter-9:before{content:\"\\e81a\"}.mdi-image-filter-b-and-w:before{content:\"\\e81b\"}.mdi-image-filter-center-focus:before{content:\"\\e81c\"}.mdi-image-filter-drama:before{content:\"\\e81d\"}.mdi-image-filter-frames:before{content:\"\\e81e\"}.mdi-image-filter-hdr:before{content:\"\\e81f\"}.mdi-image-filter-none:before{content:\"\\e820\"}.mdi-image-filter-tilt-shift:before{content:\"\\e821\"}.mdi-image-filter-vintage:before{content:\"\\e822\"}.mdi-image-filter:before{content:\"\\e823\"}.mdi-image-flare:before{content:\"\\e824\"}.mdi-image-flash-auto:before{content:\"\\e825\"}.mdi-image-flash-off:before{content:\"\\e826\"}.mdi-image-flash-on:before{content:\"\\e827\"}.mdi-image-flip:before{content:\"\\e828\"}.mdi-image-gradient:before{content:\"\\e829\"}.mdi-image-grain:before{content:\"\\e82a\"}.mdi-image-grid-off:before{content:\"\\e82b\"}.mdi-image-grid-on:before{content:\"\\e82c\"}.mdi-image-hdr-off:before{content:\"\\e82d\"}.mdi-image-hdr-on:before{content:\"\\e82e\"}.mdi-image-hdr-strong:before{content:\"\\e82f\"}.mdi-image-hdr-weak:before{content:\"\\e830\"}.mdi-image-healing:before{content:\"\\e831\"}.mdi-image-image-aspect-ratio:before{content:\"\\e832\"}.mdi-image-image:before{content:\"\\e833\"}.mdi-image-iso:before{content:\"\\e834\"}.mdi-image-landscape:before{content:\"\\e835\"}.mdi-image-leak-add:before{content:\"\\e836\"}.mdi-image-leak-remove:before{content:\"\\e837\"}.mdi-image-lens:before{content:\"\\e838\"}.mdi-image-looks-3:before{content:\"\\e839\"}.mdi-image-looks-4:before{content:\"\\e83a\"}.mdi-image-looks-5:before{content:\"\\e83b\"}.mdi-image-looks-6:before{content:\"\\e83c\"}.mdi-image-looks-one:before{content:\"\\e83d\"}.mdi-image-looks-two:before{content:\"\\e83e\"}.mdi-image-looks:before{content:\"\\e83f\"}.mdi-image-loupe:before{content:\"\\e840\"}.mdi-image-movie-creation:before{content:\"\\e841\"}.mdi-image-nature-people:before{content:\"\\e842\"}.mdi-image-nature:before{content:\"\\e843\"}.mdi-image-navigate-before:before{content:\"\\e844\"}.mdi-image-navigate-next:before{content:\"\\e845\"}.mdi-image-palette:before{content:\"\\e846\"}.mdi-image-panorama-fisheye:before{content:\"\\e847\"}.mdi-image-panorama-horizontal:before{content:\"\\e848\"}.mdi-image-panorama-vertical:before{content:\"\\e849\"}.mdi-image-panorama-wide-angle:before{content:\"\\e84a\"}.mdi-image-panorama:before{content:\"\\e84b\"}.mdi-image-photo-album:before{content:\"\\e84c\"}.mdi-image-photo-camera:before{content:\"\\e84d\"}.mdi-image-photo-library:before{content:\"\\e84e\"}.mdi-image-photo:before{content:\"\\e84f\"}.mdi-image-portrait:before{content:\"\\e850\"}.mdi-image-remove-red-eye:before{content:\"\\e851\"}.mdi-image-rotate-left:before{content:\"\\e852\"}.mdi-image-rotate-right:before{content:\"\\e853\"}.mdi-image-slideshow:before{content:\"\\e854\"}.mdi-image-straighten:before{content:\"\\e855\"}.mdi-image-style:before{content:\"\\e856\"}.mdi-image-switch-camera:before{content:\"\\e857\"}.mdi-image-switch-video:before{content:\"\\e858\"}.mdi-image-tag-faces:before{content:\"\\e859\"}.mdi-image-texture:before{content:\"\\e85a\"}.mdi-image-timelapse:before{content:\"\\e85b\"}.mdi-image-timer-3:before{content:\"\\e85c\"}.mdi-image-timer-10:before{content:\"\\e85d\"}.mdi-image-timer-auto:before{content:\"\\e85e\"}.mdi-image-timer-off:before{content:\"\\e85f\"}.mdi-image-timer:before{content:\"\\e860\"}.mdi-image-tonality:before{content:\"\\e861\"}.mdi-image-transform:before{content:\"\\e862\"}.mdi-image-tune:before{content:\"\\e863\"}.mdi-image-wb-auto:before{content:\"\\e864\"}.mdi-image-wb-cloudy:before{content:\"\\e865\"}.mdi-image-wb-incandescent:before{content:\"\\e866\"}.mdi-image-wb-irradescent:before{content:\"\\e867\"}.mdi-image-wb-sunny:before{content:\"\\e868\"}.mdi-maps-beenhere:before{content:\"\\e869\"}.mdi-maps-directions-bike:before{content:\"\\e86a\"}.mdi-maps-directions-bus:before{content:\"\\e86b\"}.mdi-maps-directions-car:before{content:\"\\e86c\"}.mdi-maps-directions-ferry:before{content:\"\\e86d\"}.mdi-maps-directions-subway:before{content:\"\\e86e\"}.mdi-maps-directions-train:before{content:\"\\e86f\"}.mdi-maps-directions-transit:before{content:\"\\e870\"}.mdi-maps-directions-walk:before{content:\"\\e871\"}.mdi-maps-directions:before{content:\"\\e872\"}.mdi-maps-flight:before{content:\"\\e873\"}.mdi-maps-hotel:before{content:\"\\e874\"}.mdi-maps-layers-clear:before{content:\"\\e875\"}.mdi-maps-layers:before{content:\"\\e876\"}.mdi-maps-local-airport:before{content:\"\\e877\"}.mdi-maps-local-atm:before{content:\"\\e878\"}.mdi-maps-local-attraction:before{content:\"\\e879\"}.mdi-maps-local-bar:before{content:\"\\e87a\"}.mdi-maps-local-cafe:before{content:\"\\e87b\"}.mdi-maps-local-car-wash:before{content:\"\\e87c\"}.mdi-maps-local-convenience-store:before{content:\"\\e87d\"}.mdi-maps-local-drink:before{content:\"\\e87e\"}.mdi-maps-local-florist:before{content:\"\\e87f\"}.mdi-maps-local-gas-station:before{content:\"\\e880\"}.mdi-maps-local-grocery-store:before{content:\"\\e881\"}.mdi-maps-local-hospital:before{content:\"\\e882\"}.mdi-maps-local-hotel:before{content:\"\\e883\"}.mdi-maps-local-laundry-service:before{content:\"\\e884\"}.mdi-maps-local-library:before{content:\"\\e885\"}.mdi-maps-local-mall:before{content:\"\\e886\"}.mdi-maps-local-movies:before{content:\"\\e887\"}.mdi-maps-local-offer:before{content:\"\\e888\"}.mdi-maps-local-parking:before{content:\"\\e889\"}.mdi-maps-local-pharmacy:before{content:\"\\e88a\"}.mdi-maps-local-phone:before{content:\"\\e88b\"}.mdi-maps-local-pizza:before{content:\"\\e88c\"}.mdi-maps-local-play:before{content:\"\\e88d\"}.mdi-maps-local-post-office:before{content:\"\\e88e\"}.mdi-maps-local-print-shop:before{content:\"\\e88f\"}.mdi-maps-local-restaurant:before{content:\"\\e890\"}.mdi-maps-local-see:before{content:\"\\e891\"}.mdi-maps-local-shipping:before{content:\"\\e892\"}.mdi-maps-local-taxi:before{content:\"\\e893\"}.mdi-maps-location-history:before{content:\"\\e894\"}.mdi-maps-map:before{content:\"\\e895\"}.mdi-maps-my-location:before{content:\"\\e896\"}.mdi-maps-navigation:before{content:\"\\e897\"}.mdi-maps-pin-drop:before{content:\"\\e898\"}.mdi-maps-place:before{content:\"\\e899\"}.mdi-maps-rate-review:before{content:\"\\e89a\"}.mdi-maps-restaurant-menu:before{content:\"\\e89b\"}.mdi-maps-satellite:before{content:\"\\e89c\"}.mdi-maps-store-mall-directory:before{content:\"\\e89d\"}.mdi-maps-terrain:before{content:\"\\e89e\"}.mdi-maps-traffic:before{content:\"\\e89f\"}.mdi-navigation-apps:before{content:\"\\e8a0\"}.mdi-navigation-arrow-back:before{content:\"\\e8a1\"}.mdi-navigation-arrow-drop-down-circle:before{content:\"\\e8a2\"}.mdi-navigation-arrow-drop-down:before{content:\"\\e8a3\"}.mdi-navigation-arrow-drop-up:before{content:\"\\e8a4\"}.mdi-navigation-arrow-forward:before{content:\"\\e8a5\"}.mdi-navigation-cancel:before{content:\"\\e8a6\"}.mdi-navigation-check:before{content:\"\\e8a7\"}.mdi-navigation-chevron-left:before{content:\"\\e8a8\"}.mdi-navigation-chevron-right:before{content:\"\\e8a9\"}.mdi-navigation-close:before{content:\"\\e8aa\"}.mdi-navigation-expand-less:before{content:\"\\e8ab\"}.mdi-navigation-expand-more:before{content:\"\\e8ac\"}.mdi-navigation-fullscreen-exit:before{content:\"\\e8ad\"}.mdi-navigation-fullscreen:before{content:\"\\e8ae\"}.mdi-navigation-menu:before{content:\"\\e8af\"}.mdi-navigation-more-horiz:before{content:\"\\e8b0\"}.mdi-navigation-more-vert:before{content:\"\\e8b1\"}.mdi-navigation-refresh:before{content:\"\\e8b2\"}.mdi-navigation-unfold-less:before{content:\"\\e8b3\"}.mdi-navigation-unfold-more:before{content:\"\\e8b4\"}.mdi-notification-adb:before{content:\"\\e8b5\"}.mdi-notification-bluetooth-audio:before{content:\"\\e8b6\"}.mdi-notification-disc-full:before{content:\"\\e8b7\"}.mdi-notification-dnd-forwardslash:before{content:\"\\e8b8\"}.mdi-notification-do-not-disturb:before{content:\"\\e8b9\"}.mdi-notification-drive-eta:before{content:\"\\e8ba\"}.mdi-notification-event-available:before{content:\"\\e8bb\"}.mdi-notification-event-busy:before{content:\"\\e8bc\"}.mdi-notification-event-note:before{content:\"\\e8bd\"}.mdi-notification-folder-special:before{content:\"\\e8be\"}.mdi-notification-mms:before{content:\"\\e8bf\"}.mdi-notification-more:before{content:\"\\e8c0\"}.mdi-notification-network-locked:before{content:\"\\e8c1\"}.mdi-notification-phone-bluetooth-speaker:before{content:\"\\e8c2\"}.mdi-notification-phone-forwarded:before{content:\"\\e8c3\"}.mdi-notification-phone-in-talk:before{content:\"\\e8c4\"}.mdi-notification-phone-locked:before{content:\"\\e8c5\"}.mdi-notification-phone-missed:before{content:\"\\e8c6\"}.mdi-notification-phone-paused:before{content:\"\\e8c7\"}.mdi-notification-play-download:before{content:\"\\e8c8\"}.mdi-notification-play-install:before{content:\"\\e8c9\"}.mdi-notification-sd-card:before{content:\"\\e8ca\"}.mdi-notification-sim-card-alert:before{content:\"\\e8cb\"}.mdi-notification-sms-failed:before{content:\"\\e8cc\"}.mdi-notification-sms:before{content:\"\\e8cd\"}.mdi-notification-sync-disabled:before{content:\"\\e8ce\"}.mdi-notification-sync-problem:before{content:\"\\e8cf\"}.mdi-notification-sync:before{content:\"\\e8d0\"}.mdi-notification-system-update:before{content:\"\\e8d1\"}.mdi-notification-tap-and-play:before{content:\"\\e8d2\"}.mdi-notification-time-to-leave:before{content:\"\\e8d3\"}.mdi-notification-vibration:before{content:\"\\e8d4\"}.mdi-notification-voice-chat:before{content:\"\\e8d5\"}.mdi-notification-vpn-lock:before{content:\"\\e8d6\"}.mdi-social-cake:before{content:\"\\e8d7\"}.mdi-social-domain:before{content:\"\\e8d8\"}.mdi-social-group-add:before{content:\"\\e8d9\"}.mdi-social-group:before{content:\"\\e8da\"}.mdi-social-location-city:before{content:\"\\e8db\"}.mdi-social-mood:before{content:\"\\e8dc\"}.mdi-social-notifications-none:before{content:\"\\e8dd\"}.mdi-social-notifications-off:before{content:\"\\e8de\"}.mdi-social-notifications-on:before{content:\"\\e8df\"}.mdi-social-notifications-paused:before{content:\"\\e8e0\"}.mdi-social-notifications:before{content:\"\\e8e1\"}.mdi-social-pages:before{content:\"\\e8e2\"}.mdi-social-party-mode:before{content:\"\\e8e3\"}.mdi-social-people-outline:before{content:\"\\e8e4\"}.mdi-social-people:before{content:\"\\e8e5\"}.mdi-social-person-add:before{content:\"\\e8e6\"}.mdi-social-person-outline:before{content:\"\\e8e7\"}.mdi-social-person:before{content:\"\\e8e8\"}.mdi-social-plus-one:before{content:\"\\e8e9\"}.mdi-social-poll:before{content:\"\\e8ea\"}.mdi-social-public:before{content:\"\\e8eb\"}.mdi-social-school:before{content:\"\\e8ec\"}.mdi-social-share:before{content:\"\\e8ed\"}.mdi-social-whatshot:before{content:\"\\e8ee\"}.mdi-toggle-check-box-outline-blank:before{content:\"\\e8ef\"}.mdi-toggle-check-box:before{content:\"\\e8f0\"}.mdi-toggle-radio-button-off:before{content:\"\\e8f1\"}.mdi-toggle-radio-button-on:before{content:\"\\e8f2\"}.mdi-toggle-star-half:before{content:\"\\e8f3\"}.mdi-toggle-star-outline:before{content:\"\\e8f4\"}.mdi-toggle-star:before{content:\"\\e8f5\"}.container{margin:0 auto;max-width:1400px;width:85%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:85%}}@media only screen and (min-width: 1201px){.container{width:80%}}@media only screen and (min-width: 1601px){.container{width:80%}}.container .row{margin-left:-.75rem;margin-right:-.75rem}.container .row.gutter-0{margin-left:0;margin-right:0}.container .row.gutter-s{margin-left:-.15rem;margin-right:-.15rem}.container .row.gutter-m{margin-left:-.75rem;margin-right:-.75rem}.container .row.gutter-l{margin-left:-1.5rem;margin-right:-1.5rem}.container .row.gutter-xl{margin-left:-3rem;margin-right:-3rem}@media only screen and (min-width: 601px){.container .row.sgutter-0{margin-left:0;margin-right:0}.container .row.sgutter-s{margin-left:-.15rem;margin-right:-.15rem}.container .row.sgutter-m{margin-left:-.75rem;margin-right:-.75rem}.container .row.sgutter-l{margin-left:-1.5rem;margin-right:-1.5rem}.container .row.sgutter-xl{margin-left:-3rem;margin-right:-3rem}}@media only screen and (min-width: 993px){.container .row.mgutter-0{margin-left:0;margin-right:0}.container .row.mgutter-s{margin-left:-.15rem;margin-right:-.15rem}.container .row.mgutter-m{margin-left:-.75rem;margin-right:-.75rem}.container .row.mgutter-l{margin-left:-1.5rem;margin-right:-1.5rem}.container .row.mgutter-xl{margin-left:-3rem;margin-right:-3rem}}@media only screen and (min-width: 1201px){.container .row.lgutter-0{margin-left:0;margin-right:0}.container .row.lgutter-s{margin-left:-.15rem;margin-right:-.15rem}.container .row.lgutter-m{margin-left:-.75rem;margin-right:-.75rem}.container .row.lgutter-l{margin-left:-1.5rem;margin-right:-1.5rem}.container .row.lgutter-xl{margin-left:-3rem;margin-right:-3rem}}@media only screen and (min-width: 1601px){.container .row.xlgutter-0{margin-left:0;margin-right:0}.container .row.xlgutter-s{margin-left:-.15rem;margin-right:-.15rem}.container .row.xlgutter-m{margin-left:-.75rem;margin-right:-.75rem}.container .row.xlgutter-l{margin-left:-1.5rem;margin-right:-1.5rem}.container .row.xlgutter-xl{margin-left:-3rem;margin-right:-3rem}}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.xs0{width:100/Infinity%;margin-left:auto;left:auto;right:auto}.row .col.xs0-half{width:4.16667%;margin-left:auto;left:auto;right:auto}.row .col.xs1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.xs1-half{width:12.5%;margin-left:auto;left:auto;right:auto}.row .col.xs2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.xs2-half{width:20.83333%;margin-left:auto;left:auto;right:auto}.row .col.xs3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xs3-half{width:29.16667%;margin-left:auto;left:auto;right:auto}.row .col.xs4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.xs4-half{width:37.5%;margin-left:auto;left:auto;right:auto}.row .col.xs5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.xs5-half{width:45.83333%;margin-left:auto;left:auto;right:auto}.row .col.xs6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xs6-half{width:54.16667%;margin-left:auto;left:auto;right:auto}.row .col.xs7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.xs7-half{width:62.5%;margin-left:auto;left:auto;right:auto}.row .col.xs8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.xs8-half{width:70.83333%;margin-left:auto;left:auto;right:auto}.row .col.xs9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xs9-half{width:79.16667%;margin-left:auto;left:auto;right:auto}.row .col.xs10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.xs10-half{width:87.5%;margin-left:auto;left:auto;right:auto}.row .col.xs11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.xs11-half{width:95.83333%;margin-left:auto;left:auto;right:auto}.row .col.xs12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.xs12-half{width:104.16667%;margin-left:auto;left:auto;right:auto}.row .col.offset-xs0{margin-left:100/Infinity%}.row .col.offset-xs0-half{margin-left:4.16667%}.row .col.pull-xs0{right:100/Infinity%}.row .col.push-xs0{left:100/Infinity%}.row .col.offset-xs1{margin-left:8.33333%}.row .col.offset-xs1-half{margin-left:12.5%}.row .col.pull-xs1{right:8.33333%}.row .col.push-xs1{left:8.33333%}.row .col.offset-xs2{margin-left:16.66667%}.row .col.offset-xs2-half{margin-left:20.83333%}.row .col.pull-xs2{right:16.66667%}.row .col.push-xs2{left:16.66667%}.row .col.offset-xs3{margin-left:25%}.row .col.offset-xs3-half{margin-left:29.16667%}.row .col.pull-xs3{right:25%}.row .col.push-xs3{left:25%}.row .col.offset-xs4{margin-left:33.33333%}.row .col.offset-xs4-half{margin-left:37.5%}.row .col.pull-xs4{right:33.33333%}.row .col.push-xs4{left:33.33333%}.row .col.offset-xs5{margin-left:41.66667%}.row .col.offset-xs5-half{margin-left:45.83333%}.row .col.pull-xs5{right:41.66667%}.row .col.push-xs5{left:41.66667%}.row .col.offset-xs6{margin-left:50%}.row .col.offset-xs6-half{margin-left:54.16667%}.row .col.pull-xs6{right:50%}.row .col.push-xs6{left:50%}.row .col.offset-xs7{margin-left:58.33333%}.row .col.offset-xs7-half{margin-left:62.5%}.row .col.pull-xs7{right:58.33333%}.row .col.push-xs7{left:58.33333%}.row .col.offset-xs8{margin-left:66.66667%}.row .col.offset-xs8-half{margin-left:70.83333%}.row .col.pull-xs8{right:66.66667%}.row .col.push-xs8{left:66.66667%}.row .col.offset-xs9{margin-left:75%}.row .col.offset-xs9-half{margin-left:79.16667%}.row .col.pull-xs9{right:75%}.row .col.push-xs9{left:75%}.row .col.offset-xs10{margin-left:83.33333%}.row .col.offset-xs10-half{margin-left:87.5%}.row .col.pull-xs10{right:83.33333%}.row .col.push-xs10{left:83.33333%}.row .col.offset-xs11{margin-left:91.66667%}.row .col.offset-xs11-half{margin-left:95.83333%}.row .col.pull-xs11{right:91.66667%}.row .col.push-xs11{left:91.66667%}.row .col.offset-xs12{margin-left:100%}.row .col.offset-xs12-half{margin-left:104.16667%}.row .col.pull-xs12{right:100%}.row .col.push-xs12{left:100%}@media only screen and (min-width: 601px){.row .col.s0{width:100/Infinity%;margin-left:auto;left:auto;right:auto}.row .col.s0-half{width:4.16667%;margin-left:auto;left:auto;right:auto}.row .col.s1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.s1-half{width:12.5%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.s2-half{width:20.83333%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s3-half{width:29.16667%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.s4-half{width:37.5%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.s5-half{width:45.83333%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s6-half{width:54.16667%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.s7-half{width:62.5%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.s8-half{width:70.83333%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s9-half{width:79.16667%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.s10-half{width:87.5%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.s11-half{width:95.83333%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.s12-half{width:104.16667%;margin-left:auto;left:auto;right:auto}.row .col.offset-s0{margin-left:100/Infinity%}.row .col.offset-s0-half{margin-left:4.16667%}.row .col.pull-s0{right:100/Infinity%}.row .col.push-s0{left:100/Infinity%}.row .col.offset-s1{margin-left:8.33333%}.row .col.offset-s1-half{margin-left:12.5%}.row .col.pull-s1{right:8.33333%}.row .col.push-s1{left:8.33333%}.row .col.offset-s2{margin-left:16.66667%}.row .col.offset-s2-half{margin-left:20.83333%}.row .col.pull-s2{right:16.66667%}.row .col.push-s2{left:16.66667%}.row .col.offset-s3{margin-left:25%}.row .col.offset-s3-half{margin-left:29.16667%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.33333%}.row .col.offset-s4-half{margin-left:37.5%}.row .col.pull-s4{right:33.33333%}.row .col.push-s4{left:33.33333%}.row .col.offset-s5{margin-left:41.66667%}.row .col.offset-s5-half{margin-left:45.83333%}.row .col.pull-s5{right:41.66667%}.row .col.push-s5{left:41.66667%}.row .col.offset-s6{margin-left:50%}.row .col.offset-s6-half{margin-left:54.16667%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.33333%}.row .col.offset-s7-half{margin-left:62.5%}.row .col.pull-s7{right:58.33333%}.row .col.push-s7{left:58.33333%}.row .col.offset-s8{margin-left:66.66667%}.row .col.offset-s8-half{margin-left:70.83333%}.row .col.pull-s8{right:66.66667%}.row .col.push-s8{left:66.66667%}.row .col.offset-s9{margin-left:75%}.row .col.offset-s9-half{margin-left:79.16667%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.33333%}.row .col.offset-s10-half{margin-left:87.5%}.row .col.pull-s10{right:83.33333%}.row .col.push-s10{left:83.33333%}.row .col.offset-s11{margin-left:91.66667%}.row .col.offset-s11-half{margin-left:95.83333%}.row .col.pull-s11{right:91.66667%}.row .col.push-s11{left:91.66667%}.row .col.offset-s12{margin-left:100%}.row .col.offset-s12-half{margin-left:104.16667%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}}@media only screen and (min-width: 993px){.row .col.m0{width:100/Infinity%;margin-left:auto;left:auto;right:auto}.row .col.m0-half{width:4.16667%;margin-left:auto;left:auto;right:auto}.row .col.m1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.m1-half{width:12.5%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.m2-half{width:20.83333%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m3-half{width:29.16667%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.m4-half{width:37.5%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.m5-half{width:45.83333%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m6-half{width:54.16667%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.m7-half{width:62.5%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.m8-half{width:70.83333%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m9-half{width:79.16667%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.m10-half{width:87.5%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.m11-half{width:95.83333%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.m12-half{width:104.16667%;margin-left:auto;left:auto;right:auto}.row .col.offset-m0{margin-left:100/Infinity%}.row .col.offset-m0-half{margin-left:4.16667%}.row .col.pull-m0{right:100/Infinity%}.row .col.push-m0{left:100/Infinity%}.row .col.offset-m1{margin-left:8.33333%}.row .col.offset-m1-half{margin-left:12.5%}.row .col.pull-m1{right:8.33333%}.row .col.push-m1{left:8.33333%}.row .col.offset-m2{margin-left:16.66667%}.row .col.offset-m2-half{margin-left:20.83333%}.row .col.pull-m2{right:16.66667%}.row .col.push-m2{left:16.66667%}.row .col.offset-m3{margin-left:25%}.row .col.offset-m3-half{margin-left:29.16667%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.33333%}.row .col.offset-m4-half{margin-left:37.5%}.row .col.pull-m4{right:33.33333%}.row .col.push-m4{left:33.33333%}.row .col.offset-m5{margin-left:41.66667%}.row .col.offset-m5-half{margin-left:45.83333%}.row .col.pull-m5{right:41.66667%}.row .col.push-m5{left:41.66667%}.row .col.offset-m6{margin-left:50%}.row .col.offset-m6-half{margin-left:54.16667%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.33333%}.row .col.offset-m7-half{margin-left:62.5%}.row .col.pull-m7{right:58.33333%}.row .col.push-m7{left:58.33333%}.row .col.offset-m8{margin-left:66.66667%}.row .col.offset-m8-half{margin-left:70.83333%}.row .col.pull-m8{right:66.66667%}.row .col.push-m8{left:66.66667%}.row .col.offset-m9{margin-left:75%}.row .col.offset-m9-half{margin-left:79.16667%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.33333%}.row .col.offset-m10-half{margin-left:87.5%}.row .col.pull-m10{right:83.33333%}.row .col.push-m10{left:83.33333%}.row .col.offset-m11{margin-left:91.66667%}.row .col.offset-m11-half{margin-left:95.83333%}.row .col.pull-m11{right:91.66667%}.row .col.push-m11{left:91.66667%}.row .col.offset-m12{margin-left:100%}.row .col.offset-m12-half{margin-left:104.16667%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 1201px){.row .col.l0{width:100/Infinity%;margin-left:auto;left:auto;right:auto}.row .col.l0-half{width:4.16667%;margin-left:auto;left:auto;right:auto}.row .col.l1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.l1-half{width:12.5%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.l2-half{width:20.83333%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l3-half{width:29.16667%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.l4-half{width:37.5%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.l5-half{width:45.83333%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l6-half{width:54.16667%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.l7-half{width:62.5%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.l8-half{width:70.83333%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l9-half{width:79.16667%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.l10-half{width:87.5%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.l11-half{width:95.83333%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.l12-half{width:104.16667%;margin-left:auto;left:auto;right:auto}.row .col.offset-l0{margin-left:100/Infinity%}.row .col.offset-l0-half{margin-left:4.16667%}.row .col.pull-l0{right:100/Infinity%}.row .col.push-l0{left:100/Infinity%}.row .col.offset-l1{margin-left:8.33333%}.row .col.offset-l1-half{margin-left:12.5%}.row .col.pull-l1{right:8.33333%}.row .col.push-l1{left:8.33333%}.row .col.offset-l2{margin-left:16.66667%}.row .col.offset-l2-half{margin-left:20.83333%}.row .col.pull-l2{right:16.66667%}.row .col.push-l2{left:16.66667%}.row .col.offset-l3{margin-left:25%}.row .col.offset-l3-half{margin-left:29.16667%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.33333%}.row .col.offset-l4-half{margin-left:37.5%}.row .col.pull-l4{right:33.33333%}.row .col.push-l4{left:33.33333%}.row .col.offset-l5{margin-left:41.66667%}.row .col.offset-l5-half{margin-left:45.83333%}.row .col.pull-l5{right:41.66667%}.row .col.push-l5{left:41.66667%}.row .col.offset-l6{margin-left:50%}.row .col.offset-l6-half{margin-left:54.16667%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.33333%}.row .col.offset-l7-half{margin-left:62.5%}.row .col.pull-l7{right:58.33333%}.row .col.push-l7{left:58.33333%}.row .col.offset-l8{margin-left:66.66667%}.row .col.offset-l8-half{margin-left:70.83333%}.row .col.pull-l8{right:66.66667%}.row .col.push-l8{left:66.66667%}.row .col.offset-l9{margin-left:75%}.row .col.offset-l9-half{margin-left:79.16667%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.33333%}.row .col.offset-l10-half{margin-left:87.5%}.row .col.pull-l10{right:83.33333%}.row .col.push-l10{left:83.33333%}.row .col.offset-l11{margin-left:91.66667%}.row .col.offset-l11-half{margin-left:95.83333%}.row .col.pull-l11{right:91.66667%}.row .col.push-l11{left:91.66667%}.row .col.offset-l12{margin-left:100%}.row .col.offset-l12-half{margin-left:104.16667%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width: 1601px){.row .col.xl0{width:100/Infinity%;margin-left:0}.row .col.xl0-half{width:4.16667%;margin-left:auto;left:auto;right:auto}.row .col.xl1{width:8.33333%;margin-left:0}.row .col.xl1-half{width:12.5%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.66667%;margin-left:0}.row .col.xl2-half{width:20.83333%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:0}.row .col.xl3-half{width:29.16667%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.33333%;margin-left:0}.row .col.xl4-half{width:37.5%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.66667%;margin-left:0}.row .col.xl5-half{width:45.83333%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:0}.row .col.xl6-half{width:54.16667%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.33333%;margin-left:0}.row .col.xl7-half{width:62.5%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.66667%;margin-left:0}.row .col.xl8-half{width:70.83333%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:0}.row .col.xl9-half{width:79.16667%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.33333%;margin-left:0}.row .col.xl10-half{width:87.5%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.66667%;margin-left:0}.row .col.xl11-half{width:95.83333%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:0}.row .col.xl12-half{width:104.16667%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl0{margin-left:100/Infinity%}.row .col.offset-xl0-half{margin-left:4.16667%}.row .col.offset-xl1{margin-left:8.33333%}.row .col.offset-xl1-half{margin-left:12.5%}.row .col.offset-xl2{margin-left:16.66667%}.row .col.offset-xl2-half{margin-left:20.83333%}.row .col.offset-xl3{margin-left:25%}.row .col.offset-xl3-half{margin-left:29.16667%}.row .col.offset-xl4{margin-left:33.33333%}.row .col.offset-xl4-half{margin-left:37.5%}.row .col.offset-xl5{margin-left:41.66667%}.row .col.offset-xl5-half{margin-left:45.83333%}.row .col.offset-xl6{margin-left:50%}.row .col.offset-xl6-half{margin-left:54.16667%}.row .col.offset-xl7{margin-left:58.33333%}.row .col.offset-xl7-half{margin-left:62.5%}.row .col.offset-xl8{margin-left:66.66667%}.row .col.offset-xl8-half{margin-left:70.83333%}.row .col.offset-xl9{margin-left:75%}.row .col.offset-xl9-half{margin-left:79.16667%}.row .col.offset-xl10{margin-left:83.33333%}.row .col.offset-xl10-half{margin-left:87.5%}.row .col.offset-xl11{margin-left:91.66667%}.row .col.offset-xl11-half{margin-left:95.83333%}.row .col.offset-xl12{margin-left:100%}.row .col.offset-xl12-half{margin-left:104.16667%}}.row.gutter-0 .col{padding:0 0}.row.gutter-s .col{padding:0 .15rem}.row.gutter-m .col{padding:0 .75rem}.row.gutter-l .col{padding:0 1.5rem}.row.gutter-xl .col{padding:0 3rem}@media only screen and (min-width: 601px){.row.sgutter-0 .col{padding:0 0}.row.sgutter-s .col{padding:0 .15rem}.row.sgutter-m .col{padding:0 .75rem}.row.sgutter-l .col{padding:0 1.5rem}.row.sgutter-xl .col{padding:0 3rem}}@media only screen and (min-width: 993px){.row.mgutter-0 .col{padding:0 0}.row.mgutter-s .col{padding:0 .15rem}.row.mgutter-m .col{padding:0 .75rem}.row.mgutter-l .col{padding:0 1.5rem}.row.mgutter-xl .col{padding:0 3rem}}@media only screen and (min-width: 1201px){.row.lgutter-0 .col{padding:0 0}.row.lgutter-s .col{padding:0 .15rem}.row.lgutter-m .col{padding:0 .75rem}.row.lgutter-l .col{padding:0 1.5rem}.row.lgutter-xl .col{padding:0 3rem}}@media only screen and (min-width: 1601px){.row.xlgutter-0 .col{padding:0 0}.row.xlgutter-s .col{padding:0 .15rem}.row.xlgutter-m .col{padding:0 .75rem}.row.xlgutter-l .col{padding:0 1.5rem}.row.xlgutter-xl .col{padding:0 3rem}}.flex{display:flex;flex-wrap:wrap}@media only screen and (min-width: 0px){.xsflex{display:flex;flex-wrap:wrap}}@media only screen and (min-width: 601px){.sflex{display:flex;flex-wrap:wrap}}@media only screen and (min-width: 993px){.mflex{display:flex;flex-wrap:wrap}}@media only screen and (min-width: 1201px){.lflex{display:flex;flex-wrap:wrap}}@media only screen and (min-width: 1601px){.xlflex{display:flex;flex-wrap:wrap}}nav{color:#4c4c4c;background-color:#fe5f55;width:100%;height:56px;line-height:56px}nav a{color:#4c4c4c}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:2rem;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 1201px){nav a.button-collapse{display:none}}nav .button-collapse{float:left;position:relative;z-index:1;height:56px}nav .button-collapse i{font-size:2.7rem;height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#4c4c4c;display:inline-block;font-size:2.1rem;padding:0;white-space:nowrap}nav .brand-logo.center{left:50%;transform:translateX(-50%)}@media only screen and (max-width: 1200px){nav .brand-logo{left:50%;transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#4c4c4c;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav .input-field{margin:0}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}nav .input-field label.active i{color:#4c4c4c}nav .input-field label.active{transform:translateY(0)}.navbar-fixed{position:relative;height:56px;z-index:998}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 993px){nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:70px;line-height:70px}.navbar-fixed{height:70px}}html{line-height:1.5;font-family:\"adelle-sans\", sans-serif;font-weight:normal;color:#303845}@media only screen and (min-width: 0){html{font-size:15px}}@media only screen and (min-width: 993px){html{font-size:15.5px}}@media only screen and (min-width: 1201px){html{font-size:16px}}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{line-height:1.1}h1,.h1{font-weight:100;line-height:110%}h2,.h2{font-weight:300;line-height:150%}h3,.h3{font-weight:400;line-height:150%}h4,.h4{font-weight:400;line-height:150%}h5,h6,.h5,.h6{font-weight:600;line-height:150%}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a,.h1 a,.h2 a,.h3 a,.h4 a,.h5 a,.h6 a{font-weight:inherit}h1,.h1{font-size:3rem;margin:1.5rem 0 1.2rem 0}h2,.h2{font-size:1.875rem;margin:.9375rem 0 .75rem 0}h3,.h3{font-size:1.375rem;margin:.6875rem 0 .55rem 0}h4,.h4{font-size:1.25rem;margin:.625rem 0 .5rem 0}h5,.h5{font-size:1rem;margin:.5rem 0 .4rem 0}h6,.h6{font-size:.75rem;margin:.375rem 0 .3rem 0}.h-subhead{font-size:1.375rem;line-height:150%;margin:0.69rem 0 0.55rem 0;font-weight:300}[class^=\"h-4\"]{line-height:110%}[class^=\"h-3\"]{line-height:120%}[class^=\"h-2\"]{line-height:130%}[class^=\"h-1\"]{line-height:140%}.h-48{font-size:3rem;margin:1.5rem 0 1.2rem 0}.h-42{font-size:2.63rem;margin:1.31rem 0 1.05rem 0}.h-38{font-size:2.375rem;margin:1.19rem 0 0.95rem 0}.h-32{font-size:2rem;margin:1 0 0.8 0}.h-28{font-size:1.75rem;margin:0.88rem 0 0.7rem 0}.h-24{font-size:1.5rem;margin:0.75rem 0 0.6rem 0}.h-22{font-size:1.38rem;margin:0.69rem 0 0.55rem 0}.h-18{font-size:1.13rem;margin:0.56rem 0 0.45rem 0}.h-14{font-size:0.88rem;margin:0.44rem 0 0.35rem 0}.h-12{font-size:0.75rem;margin:0.38rem 0 0.3rem 0}.h-10{font-size:0.63rem;margin:0.31rem 0 0.25rem 0}em{font-style:italic !important}strong{font-weight:600 !important}small{font-size:75% !important}.text-italic{font-style:italic !important}.text-em{font-style:italic !important}.text-strong{font-weight:600 !important}.text-small{font-size:75% !important}.text-thin{font-weight:100 !important}.text-light{font-weight:300 !important}.text-regular{font-weight:400 !important}.text-semibold{font-weight:600 !important}.text-bold{font-weight:700 !important}.text-smooth{-webkit-font-smoothing:antialiased !important;-moz-osx-font-smoothing:grayscale !important}h1,.h1,h2,.h2,h3,.h3,.h-subhead,.h-48,.h-42,.h-38,.h-32,.h-28,.h-24,.h-22{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.line-height-0{line-height:0 !important}.line-height-s{line-height:1 !important}.line-height-m{line-height:1.4 !important}.line-height-l{line-height:1.8 !important}.line-height-xl{line-height:2.2 !important}.flow-text{font-weight:300}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.card-panel{transition:box-shadow .25s;padding:20px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:40%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0;z-index:1;background-color:inherit}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;padding:20px}.card .card-content{padding:20px;border-radius:0 0 2px 2px}.card .card-content p{margin:0;color:inherit}.card .card-content .card-title{line-height:48px}.card .card-action{border-top:1px solid rgba(160,160,160,0.2);padding:20px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#02868b;margin-right:20px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#03e7f0}.card .card-reveal{padding:20px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;top:100%;height:100%;z-index:1;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 992px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 993px) and (max-width: 1200px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 1201px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:0;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between}.toast .btn,.toast .btn-large,.toast .btn-small,.toast .btn-flat{margin:0;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 992px){.toast{width:100%;border-radius:0}}@media only screen and (min-width: 993px) and (max-width: 1200px){.toast{float:left}}@media only screen and (min-width: 1201px){.toast{float:right}}.tabs{display:flex;position:relative;overflow-x:auto;overflow-y:hidden;height:48px;background-color:#fff;margin:0 auto;width:100%;white-space:nowrap}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:block;float:left;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase;text-overflow:ellipsis;overflow:hidden;letter-spacing:.8px;width:15%;min-width:80px}.tabs .tab a{color:#fe5f55;display:block;width:100%;height:100%;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease}.tabs .tab a:hover{color:#ffbeba}.tabs .tab.disabled a{color:#ffbeba;cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#fea7a1;will-change:left, right}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:#323232;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;display:none;position:absolute;text-align:center;max-width:calc(25% - 4px);left:0;top:0;will-change:top, left}.material-tooltip .arrow-left-tooltip{position:absolute;left:0;top:50%;margin-top:-10px;margin-left:-10px;border-right:10px solid #323232;border-top:10px solid transparent;border-bottom:10px solid transparent}.material-tooltip .arrow-right-tooltip{position:absolute;right:0;top:50%;margin-top:-10px;margin-right:-10px;border-left:10px solid #323232;border-top:10px solid transparent;border-bottom:10px solid transparent}.material-tooltip .arrow-up-tooltip{position:absolute;left:50%;top:0;margin-top:-10px;margin-left:-10px;border-bottom:10px solid #323232;border-left:10px solid transparent;border-right:10px solid transparent}.material-tooltip .arrow-down-tooltip{position:absolute;left:50%;bottom:0;margin-bottom:-10px;margin-left:-10px;border-top:10px solid #323232;border-left:10px solid transparent;border-right:10px solid transparent}.backdrop{position:absolute;opacity:0;display:none;height:7px;width:14px;border-radius:0 0 14px 14px;background-color:#323232;z-index:-1;transform-origin:50% 10%;will-change:transform, opacity}.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:4px;display:inline-block;height:43px;line-height:42px;outline:0;padding:0 2.2em;text-transform:none;vertical-align:middle;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 993px){.btn-large{font-size:1.566rem;height:3.375rem;line-height:3.31rem}.btn-large i{font-size:1.566rem}}.btn-small{font-size:0.81rem;height:2.69rem;line-height:2.63rem;font-weight:600}.btn-small i{font-size:0.81rem}.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled{background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled *,.disabled.btn-large *,.disabled.btn-small *,.btn-floating.disabled *,.btn-large.disabled *,.btn-small.disabled *,.btn:disabled *,.btn-large:disabled *,.btn-small:disabled *,.btn-large:disabled *,.btn-small:disabled *,.btn-floating:disabled *{pointer-events:none}.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover{background-color:#DFDFDF;color:#9F9F9F}.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#4ad4c9;text-align:center;letter-spacing:.5px;transition:.2s ease-out;cursor:pointer;-webkit-transform:translateZ(0px)}.btn:hover,.btn-large:hover,.btn-small:hover{background-color:#5fd9cf}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:43px;height:43px;line-height:43px;padding:0;background-color:#4ad4c9;border-radius:50%;transition:.3s;cursor:pointer;vertical-align:middle}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:43px}.btn-floating:hover{background-color:#4ad4c9}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:64.5px;height:64.5px}.btn-floating.btn-large i{line-height:64.5px}.btn-floating.btn-small{width:30.1px;height:30.1px}.btn-floating.btn-small i{line-height:30.1px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:998}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.horizontal{padding:0 0 0 15px}.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:initial;width:500px}.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer}.btn-flat:hover{color:#5fd9cf}.btn-flat.disabled{color:#b3b3b3;cursor:default}.btn-multiline{height:auto;line-height:1.6rem;padding:.7rem 2rem}.btn-multiline i{line-height:3.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width, height}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}.dropdown-content li:hover,.dropdown-content li.active,.dropdown-content li.selected{background-color:#eee}.dropdown-content li.active.selected{background-color:#e1e1e1}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#4ad4c9;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:3px;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit}/*!\n" +
" * Waves v0.6.0\n" +
" * http://fian.my.id/Waves\n" +
" *\n" +
" * Copyright 2014 Alfiana E. Sibuea and other contributors\n" +
" * Released under the MIT license\n" +
" * https://github.com/fians/Waves/blob/master/LICENSE\n" +
" */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;will-change:opacity, transform;transition:all .3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:transform, opacity;transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-notransition{transition:none !important}.waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, #fff 100%, #000 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}a.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}@media only screen and (max-width: 1200px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{float:right;margin:6px 0}.lean-overlay{position:fixed;z-index:999;top:-100px;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:block;cursor:pointer;min-height:3rem;line-height:3rem;padding:0 1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header i{width:2rem;font-size:1.6rem;line-height:3rem;display:block;float:left;text-align:center;margin-right:1rem}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box}.collapsible-body p{margin:0;padding:2rem}.side-nav .collapsible{border:none;box-shadow:none}.side-nav .collapsible li{padding:0}.side-nav .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;margin:0 1rem}.side-nav .collapsible-header i{line-height:inherit}.side-nav .collapsible-body{border:0;background-color:#fff}.side-nav .collapsible-body li a{margin:0 1rem 0 2rem}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4}.chip img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip i.material-icons{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s}.materialboxed:hover{will-change:left, top, width, height}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#292929;z-index:999;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #fff}button:focus{outline:none;background-color:#5ad8ce}label{font-size:.8rem;color:#575d68}::-webkit-input-placeholder{color:#89909c}:-moz-placeholder{color:#89909c}::-moz-placeholder{color:#89909c}:-ms-input-placeholder{color:#89909c}input:not([type]),input[type=text],input[type=password],input[type=email],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input[type=tel],input[type=number],input[type=search],textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #575d68;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 15px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:disabled,input[type=text][readonly=\"readonly\"],input[type=password]:disabled,input[type=password][readonly=\"readonly\"],input[type=email]:disabled,input[type=email][readonly=\"readonly\"],input[type=url]:disabled,input[type=url][readonly=\"readonly\"],input[type=time]:disabled,input[type=time][readonly=\"readonly\"],input[type=date]:disabled,input[type=date][readonly=\"readonly\"],input[type=datetime-local]:disabled,input[type=datetime-local][readonly=\"readonly\"],input[type=tel]:disabled,input[type=tel][readonly=\"readonly\"],input[type=number]:disabled,input[type=number][readonly=\"readonly\"],input[type=search]:disabled,input[type=search][readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.26);border-bottom:1px dotted rgba(0,0,0,0.26)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:disabled+label,input[type=text][readonly=\"readonly\"]+label,input[type=password]:disabled+label,input[type=password][readonly=\"readonly\"]+label,input[type=email]:disabled+label,input[type=email][readonly=\"readonly\"]+label,input[type=url]:disabled+label,input[type=url][readonly=\"readonly\"]+label,input[type=time]:disabled+label,input[type=time][readonly=\"readonly\"]+label,input[type=date]:disabled+label,input[type=date][readonly=\"readonly\"]+label,input[type=datetime-local]:disabled+label,input[type=datetime-local][readonly=\"readonly\"]+label,input[type=tel]:disabled+label,input[type=tel][readonly=\"readonly\"]+label,input[type=number]:disabled+label,input[type=number][readonly=\"readonly\"]+label,input[type=search]:disabled+label,input[type=search][readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.26)}input:not([type]):focus:not([readonly]),input[type=text]:focus:not([readonly]),input[type=password]:focus:not([readonly]),input[type=email]:focus:not([readonly]),input[type=url]:focus:not([readonly]),input[type=time]:focus:not([readonly]),input[type=date]:focus:not([readonly]),input[type=datetime-local]:focus:not([readonly]),input[type=tel]:focus:not([readonly]),input[type=number]:focus:not([readonly]),input[type=search]:focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #4ad4c9;box-shadow:0 1px 0 0 #4ad4c9}input:not([type]):focus:not([readonly])+label,input[type=text]:focus:not([readonly])+label,input[type=password]:focus:not([readonly])+label,input[type=email]:focus:not([readonly])+label,input[type=url]:focus:not([readonly])+label,input[type=time]:focus:not([readonly])+label,input[type=date]:focus:not([readonly])+label,input[type=datetime-local]:focus:not([readonly])+label,input[type=tel]:focus:not([readonly])+label,input[type=number]:focus:not([readonly])+label,input[type=search]:focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#4ad4c9}input:not([type]).valid,input:not([type]):focus.valid,input[type=text].valid,input[type=text]:focus.valid,input[type=password].valid,input[type=password]:focus.valid,input[type=email].valid,input[type=email]:focus.valid,input[type=url].valid,input[type=url]:focus.valid,input[type=time].valid,input[type=time]:focus.valid,input[type=date].valid,input[type=date]:focus.valid,input[type=datetime-local].valid,input[type=datetime-local]:focus.valid,input[type=tel].valid,input[type=tel]:focus.valid,input[type=number].valid,input[type=number]:focus.valid,input[type=search].valid,input[type=search]:focus.valid,textarea.materialize-textarea.valid,textarea.materialize-textarea:focus.valid{border-bottom:1px solid #a2eda9;box-shadow:0 1px 0 0 #a2eda9}input:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=text].valid+label:after,input[type=text]:focus.valid+label:after,input[type=password].valid+label:after,input[type=password]:focus.valid+label:after,input[type=email].valid+label:after,input[type=email]:focus.valid+label:after,input[type=url].valid+label:after,input[type=url]:focus.valid+label:after,input[type=time].valid+label:after,input[type=time]:focus.valid+label:after,input[type=date].valid+label:after,input[type=date]:focus.valid+label:after,input[type=datetime-local].valid+label:after,input[type=datetime-local]:focus.valid+label:after,input[type=tel].valid+label:after,input[type=tel]:focus.valid+label:after,input[type=number].valid+label:after,input[type=number]:focus.valid+label:after,input[type=search].valid+label:after,input[type=search]:focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after{content:attr(data-success);color:#a2eda9;opacity:1}input:not([type]).invalid,input:not([type]):focus.invalid,input[type=text].invalid,input[type=text]:focus.invalid,input[type=password].invalid,input[type=password]:focus.invalid,input[type=email].invalid,input[type=email]:focus.invalid,input[type=url].invalid,input[type=url]:focus.invalid,input[type=time].invalid,input[type=time]:focus.invalid,input[type=date].invalid,input[type=date]:focus.invalid,input[type=datetime-local].invalid,input[type=datetime-local]:focus.invalid,input[type=tel].invalid,input[type=tel]:focus.invalid,input[type=number].invalid,input[type=number]:focus.invalid,input[type=search].invalid,input[type=search]:focus.invalid,textarea.materialize-textarea.invalid,textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #fe5f55;box-shadow:0 1px 0 0 #fe5f55}input:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=text].invalid+label:after,input[type=text]:focus.invalid+label:after,input[type=password].invalid+label:after,input[type=password]:focus.invalid+label:after,input[type=email].invalid+label:after,input[type=email]:focus.invalid+label:after,input[type=url].invalid+label:after,input[type=url]:focus.invalid+label:after,input[type=time].invalid+label:after,input[type=time]:focus.invalid+label:after,input[type=date].invalid+label:after,input[type=date]:focus.invalid+label:after,input[type=datetime-local].invalid+label:after,input[type=datetime-local]:focus.invalid+label:after,input[type=tel].invalid+label:after,input[type=tel]:focus.invalid+label:after,input[type=number].invalid+label:after,input[type=number]:focus.invalid+label:after,input[type=search].invalid+label:after,input[type=search]:focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after{content:attr(data-error);color:#fe5f55;opacity:1}input:not([type])+label:after,input[type=text]+label:after,input[type=password]+label:after,input[type=email]+label:after,input[type=url]+label:after,input[type=time]+label:after,input[type=date]+label:after,input[type=datetime-local]+label:after,input[type=tel]+label:after,input[type=number]+label:after,input[type=search]+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:65px;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem}.input-field label{color:#575d68;position:absolute;top:0.8rem;left:.75rem;font-size:1rem;cursor:text;transition:.2s ease-out}.input-field label.active{font-size:.8rem;transform:translateY(-140%)}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s}.input-field .prefix.active{color:#4ad4c9}.input-field .prefix ~ input,.input-field .prefix ~ textarea{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ textarea{padding-top:.8rem}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 1200px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;padding-left:4rem;width:calc(100% - 4rem)}.input-field input[type=search]:focus{background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus ~ .mdi-navigation-close,.input-field input[type=search]:focus ~ .material-icons{color:#444}.input-field input[type=search]+label{left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{overflow-y:hidden;padding:1.6rem 0;resize:none;min-height:3rem}.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;left:-9999px;visibility:hidden}[type=\"radio\"]:not(:checked)+label,[type=\"radio\"]:checked+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-khtml-user-select:none;user-select:none}[type=\"radio\"]+label:before,[type=\"radio\"]+label:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=\"radio\"]:not(:checked)+label:before{border-radius:50%;border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+label:after{border-radius:50%;border:2px solid #5a5a5a;z-index:-1;transform:scale(0)}[type=\"radio\"]:checked+label:before{border-radius:50%;border:2px solid transparent}[type=\"radio\"]:checked+label:after{border-radius:50%;border:2px solid #4ad4c9;background-color:#4ad4c9;z-index:0;transform:scale(1.02)}[type=\"radio\"].with-gap:checked+label:before{border-radius:50%;border:2px solid #4ad4c9}[type=\"radio\"].with-gap:checked+label:after{border-radius:50%;border:2px solid #4ad4c9;background-color:#4ad4c9;z-index:0;transform:scale(0.5)}[type=\"radio\"].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,0.26)}[type=\"radio\"].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before,[type=\"radio\"]:disabled:checked+label:before{background-color:transparent;border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled+label{color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:checked+label:after{background-color:rgba(0,0,0,0.26);border-color:#BDBDBD}form p{margin-bottom:10px;text-align:left}form p:last-child{margin-bottom:0}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;left:-9999px;visibility:hidden}[type=\"checkbox\"]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}[type=\"checkbox\"]+label:before{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;transition:.2s}[type=\"checkbox\"]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,0.26)}[type=\"checkbox\"]:checked+label:before{top:-4px;left:-3px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #4ad4c9;border-bottom:2px solid #4ad4c9;transform:rotate(40deg);backface-visibility:hidden;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);border-bottom:2px solid rgba(0,0,0,0.26)}[type=\"checkbox\"]:indeterminate+label:before{left:-10px;top:-11px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #4ad4c9;border-bottom:none;transform:rotate(90deg);backface-visibility:hidden;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);background-color:transparent}[type=\"checkbox\"].filled-in+label:after{border-radius:2px}[type=\"checkbox\"].filled-in+label:before,[type=\"checkbox\"].filled-in+label:after{content:'';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:20% 40%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+label:after{top:0px;width:20px;height:20px;border:2px solid #4ad4c9;background-color:#4ad4c9;z-index:0}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#BDBDBD}[type=\"checkbox\"].filled-in:disabled:checked+label:before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+label:after{background-color:#BDBDBD;border-color:#BDBDBD}.switch,.switch *{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#bde0de}.switch label input[type=checkbox]:checked+.lever:after{background-color:#4ad4c9}.switch label .lever{content:\"\";display:inline-block;position:relative;width:40px;height:15px;background-color:#818181;border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:21px;height:21px;background-color:#F1F1F1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,0.4);left:-5px;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease}input[type=checkbox]:checked:not(:disabled) ~ .lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(74,212,201,0.1)}input[type=checkbox]:not(:disabled) ~ .lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(0,0,0,0.08)}.switch label input[type=checkbox]:checked+.lever:after{left:24px}.switch input[type=checkbox][disabled]+.lever{cursor:default}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#BDBDBD}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #575d68;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 15px 0;padding:0;display:block}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:16px;font-size:10px}.select-wrapper span.caret.disabled{color:rgba(0,0,0,0.26)}.select-wrapper+label{position:absolute;top:-14px;font-size:.8rem}select{display:none}select.browser-default{display:block}select:disabled{color:rgba(0,0,0,0.3)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.3);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border-bottom:1px solid rgba(0,0,0,0.3)}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li:not(.optgroup){padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0px;padding:0}input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#4ad4c9;top:10px;margin-left:-6px;transform-origin:50% 50%;transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#4ad4c9;font-size:0;transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]:focus{outline:none}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#4ad4c9;transform-origin:50% 50%;margin:-5px 0 0 0;transition:.3s}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4ad4c9;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid white;outline-offset:-1px}input[type=range]:focus::-moz-range-track{background:#ccc}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4ad4c9}input[type=range]:focus::-ms-fill-lower{background:#888}input[type=range]:focus::-ms-fill-upper{background:#ccc}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #fe8f88}.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #fe8f88}.side-nav{position:fixed;width:240px;left:-105%;top:0;margin:0;height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:left}.side-nav.right-aligned{will-change:right;right:-105%;left:auto}.side-nav .collapsible{margin:0}.side-nav li{float:none;padding:0 15px;line-height:64px}.side-nav li:hover,.side-nav li.active{background-color:#ddd}.side-nav a{color:#444;display:block;font-size:1rem;height:64px;line-height:64px;padding:0 15px}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.side-nav.fixed a{display:block;padding:0 15px;color:#444}.side-nav.fixed{left:0;position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 1200px){.side-nav.fixed{left:-105%}.side-nav.fixed.right-aligned{right:-105%;left:auto}}.side-nav .collapsible-body li.active,.side-nav.fixed .collapsible-body li.active{background-color:#fe5f55}.side-nav .collapsible-body li.active a,.side-nav.fixed .collapsible-body li.active a{color:#fff}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;will-change:opacity}.preloader-wrapper{display:inline-block;position:relative;width:48px;height:48px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#4ad4c9}.spinner-blue,.spinner-blue-only{border-color:#01586b}.spinner-red,.spinner-red-only{border-color:#fe5f55}.spinner-yellow,.spinner-yellow-only{border-color:#ffbf69}.spinner-green,.spinner-green-only{border-color:#a2eda9}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#575d68;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#DDDEE0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:12px;width:12px;margin:0 12px;border:3px solid #DDDEE0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#DDDEE0}.carousel{overflow:hidden;position:relative;width:100%;height:400px;perspective:500px;transform-style:preserve-3d;transform-origin:0% 50%}.carousel .carousel-item{width:200px;position:absolute;top:0;left:0}.carousel .carousel-item img{width:100%}.carousel.carousel-slider{top:0;left:0;height:0}.carousel.carousel-slider .carousel-item{width:100%;height:100%;position:absolute;top:0;left:0}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:12px;width:12px;margin:0 12px;border:3px solid #DDDEE0;transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#DDDEE0}.picker{font-size:16px;text-align:left;line-height:1.2;color:#000000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}/*!\n" +
" * Default mobile-first, responsive styling for pickadate.js\n" +
" * Demo: http://amsul.github.io/pickadate.js\n" +
" */.picker__holder,.picker__frame{bottom:0;left:0;right:0;top:100%}.picker__holder{position:fixed;-webkit-transition:background 0.15s ease-out, top 0s 0.15s;-moz-transition:background 0.15s ease-out, top 0s 0.15s;transition:background 0.15s ease-out, top 0s 0.15s;-webkit-backface-visibility:hidden}.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;-webkit-transition:all 0.15s ease-out;-moz-transition:all 0.15s ease-out;transition:all 0.15s ease-out}@media (min-height: 28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}@media (min-height: 40.125em){.picker__frame{margin-bottom:7.5%}}.picker__wrap{display:table;width:100%;height:100%}@media (min-height: 28.875em){.picker__wrap{display:block}}.picker__box{background:#ffffff;display:table-cell;vertical-align:middle}@media (min-height: 28.875em){.picker__box{display:block;border:1px solid #777777;border-top-color:#898989;border-bottom-width:0;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0;-webkit-box-shadow:0 12px 36px 16px rgba(0,0,0,0.24);-moz-box-shadow:0 12px 36px 16px rgba(0,0,0,0.24);box-shadow:0 12px 36px 16px rgba(0,0,0,0.24)}}.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,0.32);-webkit-transition:background 0.15s ease-out;-moz-transition:background 0.15s ease-out;transition:background 0.15s ease-out}.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}@media (min-height: 35.875em){.picker--opened .picker__frame{top:10%;bottom:20%auto}}.picker__input.picker__input--active{border-color:#a7e4ef}.picker__frame{margin:0 auto;max-width:325px}@media (min-height: 38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__box{padding:0 1em}.picker__header{text-align:center;position:relative;margin-top:.75em}.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker__select--month.browser-default{display:inline;background-color:#FFFFFF;width:40%}.picker__select--year.browser-default{display:inline;background-color:#FFFFFF;width:25%}.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,0.05)}.picker__nav--prev,.picker__nav--next{position:absolute;padding:.5em 1.25em;width:1em;height:1em;box-sizing:content-box;top:-0.25em}.picker__nav--prev{left:-1em;padding-right:1.25em}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__nav--disabled,.picker__nav--disabled:hover,.picker__nav--disabled:before,.picker__nav--disabled:before:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__table th,.picker__table td{text-align:center}.picker__table td{margin:0;padding:0}.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999999;font-weight:500}@media (min-height: 33.875em){.picker__weekday{padding-bottom:.5em}}.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day--disabled:before{border-top-color:#aaaaaa}.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__day--outfocus:hover{cursor:pointer;color:#dddddd;font-weight:500}.picker__day--highlighted:hover,.picker--focused .picker__day--highlighted{cursor:pointer}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;transform:scale(0.75);background:#0089ec;color:#ffffff}.picker__day--disabled,.picker__day--disabled:hover,.picker--focused .picker__day--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbbbbb}.picker__footer{text-align:center;display:flex;align-items:center;justify-content:space-between}.picker__button--today,.picker__button--clear,.picker__button--close{border:1px solid #ffffff;background:#ffffff;font-size:.8em;padding:.66em 0;font-weight:bold;width:33%;display:inline-block;vertical-align:bottom}.picker__button--today:hover,.picker__button--clear:hover,.picker__button--close:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__button--today:focus,.picker__button--clear:focus,.picker__button--close:focus{background:#b1dcfb;border-color:rgba(0,0,0,0.05);outline:none}.picker__button--today:before,.picker__button--clear:before,.picker__button--close:before{position:relative;display:inline-block;height:0}.picker__button--today:before,.picker__button--clear:before{content:\" \";margin-right:.45em}.picker__button--today:before{top:-0.05em;width:0;border-top:0.66em solid #0059bc;border-left:.66em solid transparent}.picker__button--clear:before{top:-0.25em;width:.66em;border-top:3px solid #ee2200}.picker__button--close:before{content:\"\\D7\";top:-0.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777777}.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__button--today[disabled]:before{border-top-color:#aaaaaa}.picker__box{border-radius:2px;overflow:hidden}.picker__date-display{text-align:center;background-color:#4ad4c9;color:#fff;padding-bottom:15px;font-weight:300}.picker__nav--prev:hover,.picker__nav--next:hover{cursor:pointer;color:#000000;background:#def3f1}.picker__weekday-display{background-color:#30cabe;padding:10px;font-weight:200;letter-spacing:.5;font-size:1rem;margin-bottom:15px}.picker__month-display{text-transform:uppercase;font-size:2rem}.picker__day-display{font-size:4.5rem;font-weight:400}.picker__year-display{font-size:1.8rem;color:rgba(255,255,255,0.4)}.picker__box{padding:0}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__table{margin-top:0;margin-bottom:.5em}.picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day.picker__day--today{color:#4ad4c9}.picker__day.picker__day--today.picker__day--selected{color:#fff}.picker__weekday{font-size:.9rem}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;transform:scale(0.9);background-color:#4ad4c9;color:#ffffff}.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus,.picker--focused .picker__day--selected.picker__day--outfocus{background-color:#def3f1}.picker__footer{text-align:right;padding:5px 10px}.picker__close,.picker__today{font-size:1.1rem;padding:0 1rem;color:#4ad4c9}.picker__nav--prev:before,.picker__nav--next:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:0.75em solid #676767;width:0;height:0;display:block;margin:0 auto}.picker__nav--next:before{border-right:0;border-left:0.75em solid #676767}button.picker__today:focus,button.picker__clear:focus,button.picker__close:focus{background-color:#def3f1}.picker__list{list-style:none;padding:0.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #dddddd;border-top:1px solid #dddddd;margin-bottom:-1px;position:relative;background:#ffffff;padding:.75em 1.25em}@media (min-height: 46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-color:#0089ec;z-index:10}.picker__list-item--highlighted{border-color:#0089ec;z-index:10}.picker__list-item--highlighted:hover,.picker--focused .picker__list-item--highlighted{cursor:pointer;color:#000000;background:#b1dcfb}.picker__list-item--selected,.picker__list-item--selected:hover,.picker--focused .picker__list-item--selected{background:#0089ec;color:#ffffff;z-index:10}.picker__list-item--disabled,.picker__list-item--disabled:hover,.picker--focused .picker__list-item--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default;border-color:#dddddd;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:hover,.picker--time .picker__button--clear:focus{color:#000000;background:#b1dcfb;background:#ee2200;border-color:#ee2200;cursor:pointer;color:#ffffff;outline:none}.picker--time .picker__button--clear:before{top:-0.25em;color:#666;font-size:1.25em;font-weight:bold}.picker--time .picker__button--clear:hover:before,.picker--time .picker__button--clear:focus:before{color:#ffffff}.picker--time .picker__frame{min-width:256px;max-width:320px}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height: 40.125em){.picker--time .picker__box{margin-bottom:5em}}.cover{-moz-background-size:cover;-o-background-size:cover;-webkit-background-size:cover;background-size:cover;background-repeat:no-repeat;background-position:center center}.hgroup-xs,.hgroup-xs-s,.hgroup-xs-s-m,.hgroup-xs-s-m-l,.hgroup-s,.hgroup-s-m,.hgroup-s-m-l,.hgroup-m,.hgroup-m-l,.hgroup-l{overflow:auto}.hgroup-xs,.hgroup-xs-s,.hgroup-xs-s-m,.hgroup-xs-s-m-l,.hgroup-xs .valign-wrapper,.hgroup-xs-s .valign-wrapper,.hgroup-xs-s-m .valign-wrapper,.hgroup-xs-s-m-l .valign-wrapper{height:230px}.hgroup-s,.hgroup-s-m,.hgroup-s-m-l,.hgroup-s .valign-wrapper,.hgroup-s-m .valign-wrapper,.hgroup-s-m-l .valign-wrapper{height:400px}.hgroup-m,.hgroup-m-l,.hgroup-m .valign-wrapper,.hgroup-m-l .valign-wrapper{height:600px}.hgroup-l,.hgroup-l .valign-wrapper{height:800px}@media only screen and (min-width: 601px){.hgroup-xs-s,.hgroup-xs-s-m,.hgroup-xs-s-m-l,.hgroup-xs-s .valign-wrapper,.hgroup-xs-s-m .valign-wrapper,.hgroup-xs-s-m-l .valign-wrapper{height:400px}}@media only screen and (min-width: 993px){.hgroup-xs-s-m-l,.hgroup-xs-s-m,.hgroup-xs-s-m-l .valign-wrapper,.hgroup-xs-s-m .valign-wrapper,.hgroup-s-m-l,.hgroup-s-m,.hgroup-s-m-l .valign-wrapper,.hgroup-s-m .valign-wrapper{height:600px}}@media only screen and (min-width: 1201px){.hgroup-xs-s-m-l,.hgroup-s-m-l,.hgroup-m-l,.hgroup-xs-s-m-l .valign-wrapper,.hgroup-s-m-l .valign-wrapper,.hgroup-m-l .valign-wrapper{height:800px}}.hgroup-230{height:230px}.hgroup-530{height:530px}.hgroup-200{height:200px}.hgroup-300{height:300px}.hgroup-400{height:400px}.hgroup-500{height:500px}.hgroup-600{height:600px}.hgroup-700{height:700px}.hgroup-800{height:800px}.hgroup-1000{height:1000px}.hgroup-1200{height:1200px}@media only screen and (min-width: 0px){.hgroup-s230{height:230px}.hgroup-s530{height:530px}.hgroup-s200{height:200px}.hgroup-s300{height:300px}.hgroup-s400{height:400px}.hgroup-s500{height:500px}.hgroup-s600{height:600px}.hgroup-s700{height:700px}.hgroup-s800{height:800px}.hgroup-s1000{height:1000px}.hgroup-s1200{height:1200px}}@media only screen and (min-width: 993px){.hgroup-m230{height:230px}.hgroup-m530{height:530px}.hgroup-m200{height:200px}.hgroup-m300{height:300px}.hgroup-m400{height:400px}.hgroup-m500{height:500px}.hgroup-m600{height:600px}.hgroup-m700{height:700px}.hgroup-m800{height:800px}.hgroup-m1000{height:1000px}.hgroup-m1200{height:1200px}}@media only screen and (min-width: 1201px){.hgroup-l230{height:230px}.hgroup-l530{height:530px}.hgroup-l200{height:200px}.hgroup-l300{height:300px}.hgroup-l400{height:400px}.hgroup-l500{height:500px}.hgroup-l600{height:600px}.hgroup-l700{height:700px}.hgroup-l800{height:800px}.hgroup-l1000{height:1000px}.hgroup-l1200{height:1200px}}.hgroup-auto{height:auto;padding-top:3em;padding-bottom:3em}.hgroup-auto .valign-middle{position:relative;top:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}@media only screen and (max-width: 992px){.hgroup-sauto{height:auto;padding-top:3em;padding-bottom:3em}.hgroup-sauto .valign-middle{position:relative;top:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}@media only screen and (min-width: 993px) and (max-width: 1200px){.hgroup-mauto{height:auto;padding-top:3em;padding-bottom:3em}.hgroup-mauto .valign-middle{position:relative;top:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}@media only screen and (min-width: 1201px){.hgroup-lauto{height:auto;padding-top:3em;padding-bottom:3em}.hgroup-lauto .valign-middle{position:relative;top:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}[class^='hgroup-'] h1,[class*=' hgroup-'] h1{margin-top:0}.valign-middle-10{position:relative;top:10%;-webkit-transform:translateY(-10%);-ms-transform:translateY(-10%);transform:translateY(-10%)}.valign-middle-20{position:relative;top:20%;-webkit-transform:translateY(-20%);-ms-transform:translateY(-20%);transform:translateY(-20%)}.valign-middle-30{position:relative;top:30%;-webkit-transform:translateY(-30%);-ms-transform:translateY(-30%);transform:translateY(-30%)}.valign-middle-40{position:relative;top:40%;-webkit-transform:translateY(-40%);-ms-transform:translateY(-40%);transform:translateY(-40%)}.valign-middle{position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.arrow-up{width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #4ad4c9}.arrow-up.arrow-red{border-bottom:20px solid #fe5f55}.arrow-up.arrow-purple{border-bottom:20px solid #485870}.arrow-up.arrow-blue{border-bottom:20px solid #01586b}.arrow-up.arrow-teal{border-bottom:20px solid #02868b}.arrow-up.arrow-turquoise{border-bottom:20px solid #4ad4c9}.arrow-up.arrow-green{border-bottom:20px solid #a2eda9}.arrow-up.arrow-yellow{border-bottom:20px solid #ffbf69}.arrow-up.arrow-grey{border-bottom:20px solid #f3f3f5}.arrow-up.arrow-white{border-bottom:20px solid #fff}.arrow-up.arrow-trans-white{border-bottom:20px solid rgba(255,255,255,0.85)}.arrow-down{width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-top:20px solid #4ad4c9}.arrow-down.arrow-red{border-top:20px solid #fe5f55}.arrow-down.arrow-purple{border-top:20px solid #485870}.arrow-down.arrow-blue{border-top:20px solid #01586b}.arrow-down.arrow-teal{border-top:20px solid #02868b}.arrow-down.arrow-turquoise{border-top:20px solid #4ad4c9}.arrow-down.arrow-green{border-top:20px solid #a2eda9}.arrow-down.arrow-yellow{border-top:20px solid #ffbf69}.arrow-down.arrow-grey{border-top:20px solid #f3f3f5}.arrow-down.arrow-white{border-top:20px solid #fff}.arrow-down.arrow-trans-white{border-top:20px solid rgba(255,255,255,0.85)}.arrow-right{width:0;height:0;border-top:20px solid transparent;border-bottom:20px solid transparent;border-left:20px solid #4ad4c9}.arrow-right.arrow-red{border-left:20px solid #fe5f55}.arrow-right.arrow-purple{border-left:20px solid #485870}.arrow-right.arrow-blue{border-left:20px solid #01586b}.arrow-right.arrow-teal{border-left:20px solid #02868b}.arrow-right.arrow-turquoise{border-left:20px solid #4ad4c9}.arrow-right.arrow-green{border-left:20px solid #a2eda9}.arrow-right.arrow-yellow{border-left:20px solid #ffbf69}.arrow-right.arrow-grey{border-left:20px solid #f3f3f5}.arrow-right.arrow-white{border-left:20px solid #fff}.arrow-right.arrow-trans-white{border-left:20px solid rgba(255,255,255,0.85)}.arrow-left{width:0;height:0;border-top:20px solid transparent;border-bottom:20px solid transparent;border-right:20px solid #4ad4c9}.arrow-left.arrow-red{border-right:20px solid #fe5f55}.arrow-left.arrow-purple{border-right:20px solid #485870}.arrow-left.arrow-blue{border-right:20px solid #01586b}.arrow-left.arrow-teal{border-right:20px solid #02868b}.arrow-left.arrow-turquoise{border-right:20px solid #4ad4c9}.arrow-left.arrow-green{border-right:20px solid #a2eda9}.arrow-left.arrow-yellow{border-right:20px solid #ffbf69}.arrow-left.arrow-grey{border-right:20px solid #f3f3f5}.arrow-left.arrow-white{border-right:20px solid #fff}.arrow-left.arrow-trans-white{border-right:20px solid rgba(255,255,255,0.85)}.quote-marks{position:relative;padding-left:88px;padding-right:88px;font-size:1.13rem;margin:0.56rem 0 0.45rem 0;font-weight:300;text-align:center}.quote-marks:before,.quote-marks:after{content:\"\";background:url(/assets/images/best_ecommerce_software_features_features-icon-sprite.png) no-repeat;width:68px;height:50px;position:absolute}.quote-marks:before{background-position:0px -387px;left:0px;bottom:100%;margin-bottom:-25px}.quote-marks:after{background-position:0px -440px;right:0px;top:100%;margin-top:-50px}@media only screen and (max-width: 992px){.quote-marks{padding-left:50px;padding-right:50px}.quote-marks:before,.quote-marks:after{width:40px;height:30px}.quote-marks:before{background-position:-70px -380px;left:0px;right:auto}.quote-marks:after{background-position:-70px -411px;right:0px;left:auto;margin-top:-30px}}@media only screen and (max-width: 992px) and (max-width: 600px){.quote-marks{padding-left:32px;padding-right:32px}.quote-marks:before,.quote-marks:after{width:30px;height:20px}.quote-marks:before{background-position:-110px -380px;left:0px;right:auto}.quote-marks:after{background-position:-110px -400px;right:0px;left:auto;margin-top:-20px}}#help-nav-modal i{background-color:gray;position:absolute;right:15px;top:15px;font-size:41px;color:white;z-index:999999}#help-nav-modal .modal-content{padding:0px}.tour-welcome .hopscotch-cta{border:none !important;background-image:none !important;background-color:#fff !important;color:#000 !important;text-shadow:none !important;font-weight:300 !important;text-decoration:underline !important}.tour-welcome .hopscotch-cta:hover{box-shadow:none !important;opacity:0.6}.help-nav-launcher-button{bottom:20px;right:25px;color:white;background-size:26px 25px;background-repeat:no-repeat;border-radius:50%;position:fixed;width:48px;height:48px;cursor:pointer;background-position:50%;background-color:#0074b0;border:1px solid #004c88;z-index:1000}.help-nav-launcher-button i{position:absolute;right:4px;top:7px;font-size:34px}#help-nav{height:100vh;width:360px;position:fixed;right:-360px;top:0;margin:0;padding:50px 0 0 0;background-color:white;z-index:90;overflow-y:auto;transition:all .4s ease-in}#help-nav .close{font-size:20px;padding:10px 15px;position:fixed;width:100%;border-bottom:1px solid gray;background-color:white}#help-nav .close:hover{cursor:pointer}#help-nav .helper{width:320px;margin-top:10px}#help-nav ul{margin-top:50px}#help-nav ul li{padding:15px 18px;border-bottom:1px solid lightgray;transition:all .1s ease-in}#help-nav ul li .todo-msg{display:inline-block}#help-nav ul li .done-msg{display:none}#help-nav ul li .check-box{width:10px;height:10px;border:none;border-radius:50%;padding:5px;margin-right:12px;display:none;position:relative}#help-nav ul li .check-box i{color:green;position:absolute;top:-7px;left:-4px;font-size:23px}#help-nav ul li:hover{background-color:lightgray;cursor:pointer}#help-nav ul li.active{background-color:#ff7e47;color:white}#help-nav ul li[checked] .check-box{display:inline-block}#help-nav ul li[checked] .done-msg{display:inline-block}#help-nav ul li[checked] .todo-msg{display:none}#help-nav.active{right:0}.animated{-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(20px)}100%{opacity:1;-webkit-transform:translateY(0)}}@-moz-keyframes fadeInUp{0%{opacity:0;-moz-transform:translateY(20px)}100%{opacity:1;-moz-transform:translateY(0)}}@-o-keyframes fadeInUp{0%{opacity:0;-o-transform:translateY(20px)}100%{opacity:1;-o-transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}.fade-in-up{-webkit-animation-name:fadeInUp;-moz-animation-name:fadeInUp;-o-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px)}100%{opacity:1;-webkit-transform:translateY(0)}}@-moz-keyframes fadeInDown{0%{opacity:0;-moz-transform:translateY(-20px)}100%{opacity:1;-moz-transform:translateY(0)}}@-o-keyframes fadeInDown{0%{opacity:0;-ms-transform:translateY(-20px)}100%{opacity:1;-ms-transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}.fade-in-down{-webkit-animation-name:fadeInDown;-moz-animation-name:fadeInDown;-o-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(-20px)}100%{opacity:1;-webkit-transform:translateX(0)}}@-moz-keyframes fadeInRight{0%{opacity:0;-moz-transform:translateX(-20px)}100%{opacity:1;-moz-transform:translateX(0)}}@-o-keyframes fadeInRight{0%{opacity:0;-o-transform:translateX(-20px)}100%{opacity:1;-o-transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translateX(-20px)}100%{opacity:1;transform:translateX(0)}}.fade-in-right{-webkit-animation-name:fadeInRight;-moz-animation-name:fadeInRight;-o-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translateX(20px)}100%{opacity:1;-webkit-transform:translateX(0)}}@-moz-keyframes fadeInLeft{0%{opacity:0;-moz-transform:translateX(20px)}100%{opacity:1;-moz-transform:translateX(0)}}@-o-keyframes fadeInLeft{0%{opacity:0;-o-transform:translateX(20px)}100%{opacity:1;-o-transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(20px)}100%{opacity:1;transform:translateX(0)}}.fade-in-left{-webkit-animation-name:fadeInLeft;-moz-animation-name:fadeInLeft;-o-animation-name:fadeInLeft;animation-name:fadeInLeft}div.hopscotch-bubble .hopscotch-nav-button{font-weight:bold;border-width:1px;border-style:solid;cursor:pointer;margin:0;overflow:visible;text-decoration:none !important;width:auto;padding:0 10px;height:26px;line-height:24px;font-size:12px;*zoom:1;white-space:nowrap;display:-moz-inline-stack;display:inline-block;*vertical-align:auto;zoom:1;*display:inline;vertical-align:middle;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}div.hopscotch-bubble .hopscotch-nav-button:hover{*zoom:1;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25)}div.hopscotch-bubble .hopscotch-nav-button:active{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.25) inset;-moz-box-shadow:0 1px 2px rgba(0,0,0,0.25) inset;box-shadow:0 1px 2px rgba(0,0,0,0.25) inset}div.hopscotch-bubble .hopscotch-nav-button.next{border-color:#1b5480;color:#fff;margin:0 0 0 10px;text-shadow:0 1px 1px rgba(0,0,0,0.35);background-color:#287bbc;filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#287bbc', endColorstr='#23639a');background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #287bbc), color-stop(100%, #23639a));background-image:-webkit-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image:-moz-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image:-o-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image:linear-gradient(top, #287bbc 0%, #23639a 100%)}div.hopscotch-bubble .hopscotch-nav-button.next:hover{background-color:#2672ae;filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#2672ae', endColorstr='#1e4f7e');background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #2672ae), color-stop(100%, #1e4f7e));background-image:-webkit-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image:-moz-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image:-o-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image:linear-gradient(top, #2672ae 0%, #1e4f7e 100%)}div.hopscotch-bubble .hopscotch-nav-button.prev{border-color:#a7a7a7;color:#444;text-shadow:0 1px 1px rgba(255,255,255,0.75);background-color:#f2f2f2;filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#f2f2f2', endColorstr='#e9e9e9');background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f2f2f2), color-stop(100%, #e9e9e9));background-image:-webkit-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image:-moz-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image:-o-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image:linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%)}div.hopscotch-bubble .hopscotch-nav-button.prev:hover{background-color:#e8e8e8;filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFE8E8E8', endColorstr='#FFA9A9A9');background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #e8e8e8), color-stop(13%, #e3e3e3), color-stop(32%, #d7d7d7), color-stop(71%, #b9b9b9), color-stop(100%, #a9a9a9));background-image:-webkit-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image:-moz-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image:-o-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image:linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%)}div.hopscotch-bubble{background-color:#ffffff;border:5px solid #000000;border:5px solid rgba(0,0,0,0.5);color:#333;font-family:Helvetica, Arial;font-size:13px;position:absolute;z-index:999999;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-moz-background-clip:padding;-webkit-background-clip:padding;background-clip:padding-box}div.hopscotch-bubble *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}div.hopscotch-bubble.animate{-moz-transition-property:top, left;-moz-transition-duration:1s;-moz-transition-timing-function:ease-in-out;-ms-transition-property:top, left;-ms-transition-duration:1s;-ms-transition-timing-function:ease-in-out;-o-transition-property:top, left;-o-transition-duration:1s;-o-transition-timing-function:ease-in-out;-webkit-transition-property:top, left;-webkit-transition-duration:1s;-webkit-transition-timing-function:ease-in-out;transition-property:top, left;transition-duration:1s;transition-timing-function:ease-in-out}div.hopscotch-bubble.invisible{opacity:0}div.hopscotch-bubble.hide,div.hopscotch-bubble .hide,div.hopscotch-bubble .hide-all{display:none}div.hopscotch-bubble h3{color:#000;font-family:Helvetica, Arial;font-size:16px;font-weight:bold;line-height:19px;margin:-1px 15px 0 0;padding:0}div.hopscotch-bubble .hopscotch-bubble-container{padding:15px;position:relative;text-align:left;-webkit-font-smoothing:antialiased}div.hopscotch-bubble .hopscotch-content{font-family:Helvetica, Arial;font-weight:normal;line-height:17px;margin:-5px 0 11px;padding-top:8px}div.hopscotch-bubble .hopscotch-bubble-content{margin:0 0 0 40px}div.hopscotch-bubble.no-number .hopscotch-bubble-content{margin:0}div.hopscotch-bubble .hopscotch-bubble-close{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;color:#000;background:transparent url(../img/sprite-green.png) -192px -92px no-repeat;display:block;padding:8px;position:absolute;text-decoration:none;text-indent:-9999px;width:8px;height:8px;top:0;right:0}div.hopscotch-bubble .hopscotch-bubble-close.hide,div.hopscotch-bubble .hopscotch-bubble-close.hide-all{display:none}div.hopscotch-bubble .hopscotch-bubble-number{background:transparent url(../img/sprite-green.png) 0 0 no-repeat;color:#fff;display:block;float:left;font-size:17px;font-weight:bold;line-height:31px;padding:0 10px 0 0;text-align:center;width:30px;height:30px}div.hopscotch-bubble .hopscotch-bubble-arrow-container{position:absolute;width:34px;height:34px}div.hopscotch-bubble .hopscotch-bubble-arrow-container .hopscotch-bubble-arrow,div.hopscotch-bubble .hopscotch-bubble-arrow-container .hopscotch-bubble-arrow-border{width:0;height:0}div.hopscotch-bubble .hopscotch-bubble-arrow-container.up{top:-22px;left:10px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow{border-bottom:17px solid #ffffff;border-left:17px solid transparent;border-right:17px solid transparent;position:relative;top:-10px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow-border{border-bottom:17px solid #000000;border-bottom:17px solid rgba(0,0,0,0.5);border-left:17px solid transparent;border-right:17px solid transparent}div.hopscotch-bubble .hopscotch-bubble-arrow-container.down{bottom:-39px;left:10px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.down .hopscotch-bubble-arrow{border-top:17px solid #ffffff;border-left:17px solid transparent;border-right:17px solid transparent;position:relative;top:-24px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.down .hopscotch-bubble-arrow-border{border-top:17px solid #000000;border-top:17px solid rgba(0,0,0,0.5);border-left:17px solid transparent;border-right:17px solid transparent}div.hopscotch-bubble .hopscotch-bubble-arrow-container.left{top:10px;left:-22px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.left .hopscotch-bubble-arrow{border-bottom:17px solid transparent;border-right:17px solid #ffffff;border-top:17px solid transparent;position:relative;left:7px;top:-34px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.left .hopscotch-bubble-arrow-border{border-right:17px solid #000000;border-right:17px solid rgba(0,0,0,0.5);border-bottom:17px solid transparent;border-top:17px solid transparent}div.hopscotch-bubble .hopscotch-bubble-arrow-container.right{top:10px;right:-39px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.right .hopscotch-bubble-arrow{border-bottom:17px solid transparent;border-left:17px solid #ffffff;border-top:17px solid transparent;position:relative;left:-7px;top:-34px}div.hopscotch-bubble .hopscotch-bubble-arrow-container.right .hopscotch-bubble-arrow-border{border-left:17px solid #000000;border-left:17px solid rgba(0,0,0,0.5);border-bottom:17px solid transparent;border-top:17px solid transparent}div.hopscotch-bubble .hopscotch-actions{margin:10px 0 0;text-align:right}"));
