/*! Socket.IO.min.js build:0.9.10, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
var io="undefined"==typeof module?{}:module.exports;(function(){(function(a,b){var c=a;c.version="0.9.10",c.protocol=1,c.transports=[],c.j=[],c.sockets={},c.connect=function(a,d){var e=c.util.parseUri(a),f,g;b&&b.location&&(e.protocol=e.protocol||b.location.protocol.slice(0,-1),e.host=e.host||(b.document?b.document.domain:b.location.hostname),e.port=e.port||b.location.port),f=c.util.uniqueUri(e);var h={host:e.host,secure:"https"==e.protocol,port:e.port||("https"==e.protocol?443:80),query:e.query||""};c.util.merge(h,d);if(h["force new connection"]||!c.sockets[f])g=new c.Socket(h);return!h["force new connection"]&&g&&(c.sockets[f]=g),g=g||c.sockets[f],g.of(e.path.length>1?e.path:"")}})("object"==typeof module?module.exports:this.io={},this),function(a,b){var c=a.util={},d=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];c.parseUri=function(a){var b=d.exec(a||""),c={},f=14;while(f--)c[e[f]]=b[f]||"";return c},c.uniqueUri=function(a){var c=a.protocol,d=a.host,e=a.port;return"document"in b?(d=d||document.domain,e=e||(c=="https"&&document.location.protocol!=="https:"?443:document.location.port)):(d=d||"localhost",!e&&c=="https"&&(e=443)),(c||"http")+"://"+d+":"+(e||80)},c.query=function(a,b){var d=c.chunkQuery(a||""),e=[];c.merge(d,c.chunkQuery(b||""));for(var f in d)d.hasOwnProperty(f)&&e.push(f+"="+d[f]);return e.length?"?"+e.join("&"):""},c.chunkQuery=function(a){var b={},c=a.split("&"),d=0,e=c.length,f;for(;d<e;++d)f=c[d].split("="),f[0]&&(b[f[0]]=f[1]);return b};var f=!1;c.load=function(a){if("document"in b&&document.readyState==="complete"||f)return a();c.on(b,"load",a,!1)},c.on=function(a,b,c,d){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,d)},c.request=function(a){if(a&&"undefined"!=typeof XDomainRequest)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!a||c.ua.hasCORS))return new XMLHttpRequest;if(!a)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(b){}return null},"undefined"!=typeof window&&c.load(function(){f=!0}),c.defer=function(a){if(!c.ua.webkit||"undefined"!=typeof importScripts)return a();c.load(function(){setTimeout(a,100)})},c.merge=function(b,d,e,f){var g=f||[],h=typeof e=="undefined"?2:e,i;for(i in d)d.hasOwnProperty(i)&&c.indexOf(g,i)<0&&(typeof b[i]!="object"||!h?(b[i]=d[i],g.push(d[i])):c.merge(b[i],d[i],h-1,g));return b},c.mixin=function(a,b){c.merge(a.prototype,b.prototype)},c.inherit=function(a,b){function c(){}c.prototype=b.prototype,a.prototype=new c},c.isArray=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"},c.intersect=function(a,b){var d=[],e=a.length>b.length?a:b,f=a.length>b.length?b:a;for(var g=0,h=f.length;g<h;g++)~c.indexOf(e,f[g])&&d.push(f[g]);return d},c.indexOf=function(a,b,c){for(var d=a.length,c=c<0?c+d<0?0:c+d:c||0;c<d&&a[c]!==b;c++);return d<=c?-1:c},c.toArray=function(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.push(a[c]);return b},c.ua={},c.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var a=new XMLHttpRequest}catch(b){return!1}return a.withCredentials!=undefined}(),c.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),c.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(a,b){function c(){}a.EventEmitter=c,c.prototype.on=function(a,c){return this.$events||(this.$events={}),this.$events[a]?b.util.isArray(this.$events[a])?this.$events[a].push(c):this.$events[a]=[this.$events[a],c]:this.$events[a]=c,this},c.prototype.addListener=c.prototype.on,c.prototype.once=function(a,b){function d(){c.removeListener(a,d),b.apply(this,arguments)}var c=this;return d.listener=b,this.on(a,d),this},c.prototype.removeListener=function(a,c){if(this.$events&&this.$events[a]){var d=this.$events[a];if(b.util.isArray(d)){var e=-1;for(var f=0,g=d.length;f<g;f++)if(d[f]===c||d[f].listener&&d[f].listener===c){e=f;break}if(e<0)return this;d.splice(e,1),d.length||delete this.$events[a]}else(d===c||d.listener&&d.listener===c)&&delete this.$events[a]}return this},c.prototype.removeAllListeners=function(a){return a===undefined?(this.$events={},this):(this.$events&&this.$events[a]&&(this.$events[a]=null),this)},c.prototype.listeners=function(a){return this.$events||(this.$events={}),this.$events[a]||(this.$events[a]=[]),b.util.isArray(this.$events[a])||(this.$events[a]=[this.$events[a]]),this.$events[a]},c.prototype.emit=function(a){if(!this.$events)return!1;var c=this.$events[a];if(!c)return!1;var d=Array.prototype.slice.call(arguments,1);if("function"==typeof c)c.apply(this,d);else{if(!b.util.isArray(c))return!1;var e=c.slice();for(var f=0,g=e.length;f<g;f++)e[f].apply(this,d)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){function f(a){return a<10?"0"+a:a}function date(a,b){return isFinite(a.valueOf())?a.getUTCFullYear()+"-"+f(a.getUTCMonth()+1)+"-"+f(a.getUTCDate())+"T"+f(a.getUTCHours())+":"+f(a.getUTCMinutes())+":"+f(a.getUTCSeconds())+"Z":null}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i instanceof Date&&(i=date(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict";if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,typeof JSON!="undefined"?JSON:undefined),function(a,b){var c=a.parser={},d=c.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],e=c.reasons=["transport not supported","client not handshaken","unauthorized"],f=c.advice=["reconnect"],g=b.JSON,h=b.util.indexOf;c.encodePacket=function(a){var b=h(d,a.type),c=a.id||"",i=a.endpoint||"",j=a.ack,k=null;switch(a.type){case"error":var l=a.reason?h(e,a.reason):"",m=a.advice?h(f,a.advice):"";if(l!==""||m!=="")k=l+(m!==""?"+"+m:"");break;case"message":a.data!==""&&(k=a.data);break;case"event":var n={name:a.name};a.args&&a.args.length&&(n.args=a.args),k=g.stringify(n);break;case"json":k=g.stringify(a.data);break;case"connect":a.qs&&(k=a.qs);break;case"ack":k=a.ackId+(a.args&&a.args.length?"+"+g.stringify(a.args):"")}var o=[b,c+(j=="data"?"+":""),i];return k!==null&&k!==undefined&&o.push(k),o.join(":")},c.encodePayload=function(a){var b="";if(a.length==1)return a[0];for(var c=0,d=a.length;c<d;c++){var e=a[c];b+="\ufffd"+e.length+"\ufffd"+a[c]}return b};var i=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;c.decodePacket=function(a){var b=a.match(i);if(!b)return{};var c=b[2]||"",a=b[5]||"",h={type:d[b[1]],endpoint:b[4]||""};c&&(h.id=c,b[3]?h.ack="data":h.ack=!0);switch(h.type){case"error":var b=a.split("+");h.reason=e[b[0]]||"",h.advice=f[b[1]]||"";break;case"message":h.data=a||"";break;case"event":try{var j=g.parse(a);h.name=j.name,h.args=j.args}catch(k){}h.args=h.args||[];break;case"json":try{h.data=g.parse(a)}catch(k){}break;case"connect":h.qs=a||"";break;case"ack":var b=a.match(/^([0-9]+)(\+)?(.*)/);if(b){h.ackId=b[1],h.args=[];if(b[3])try{h.args=b[3]?g.parse(b[3]):[]}catch(k){}}break;case"disconnect":case"heartbeat":}return h},c.decodePayload=function(a){if(a.charAt(0)=="\ufffd"){var b=[];for(var d=1,e="";d<a.length;d++)a.charAt(d)=="\ufffd"?(b.push(c.decodePacket(a.substr(d+1).substr(0,e))),d+=Number(e)+1,e=""):e+=a.charAt(d);return b}return[c.decodePacket(a)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b){function c(a,b){this.socket=a,this.sessid=b}a.Transport=c,b.util.mixin(c,b.EventEmitter),c.prototype.heartbeats=function(){return!0},c.prototype.onData=function(a){this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout();if(a!==""){var c=b.parser.decodePayload(a);if(c&&c.length)for(var d=0,e=c.length;d<e;d++)this.onPacket(c[d])}return this},c.prototype.onPacket=function(a){return this.socket.setHeartbeatTimeout(),a.type=="heartbeat"?this.onHeartbeat():(a.type=="connect"&&a.endpoint==""&&this.onConnect(),a.type=="error"&&a.advice=="reconnect"&&(this.isOpen=!1),this.socket.onPacket(a),this)},c.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var a=this;this.closeTimeout=setTimeout(function(){a.onDisconnect()},this.socket.closeTimeout)}},c.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},c.prototype.onConnect=function(){return this.socket.onConnect(),this},c.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},c.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},c.prototype.packet=function(a){this.send(b.parser.encodePacket(a))},c.prototype.onHeartbeat=function(a){this.packet({type:"heartbeat"})},c.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},c.prototype.onClose=function(){var a=this;this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},c.prototype.prepareUrl=function(){var a=this.socket.options;return this.scheme()+"://"+a.host+":"+a.port+"/"+a.resource+"/"+b.protocol+"/"+this.name+"/"+this.sessid},c.prototype.ready=function(a,b){b.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){this.options={port:80,secure:!1,document:"document"in c?document:!1,resource:"socket.io",transports:b.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!1,"auto connect":!0,"flash policy port":10843,manualFlush:!1},b.util.merge(this.options,a),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1;if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||b.util.ua.hasCORS)){var d=this;b.util.on(c,"beforeunload",function(){d.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function e(){}a.Socket=d,b.util.mixin(d,b.EventEmitter),d.prototype.of=function(a){return this.namespaces[a]||(this.namespaces[a]=new b.SocketNamespace(this,a),a!==""&&this.namespaces[a].packet({type:"connect"})),this.namespaces[a]},d.prototype.publish=function(){this.emit.apply(this,arguments);var a;for(var b in this.namespaces)this.namespaces.hasOwnProperty(b)&&(a=this.of(b),a.$emit.apply(a,arguments))},d.prototype.handshake=function(a){function f(b){b instanceof Error?(c.connecting=!1,c.onError(b.message)):a.apply(null,b.split(":"))}var c=this,d=this.options,g=["http"+(d.secure?"s":"")+":/",d.host+":"+d.port,d.resource,b.protocol,b.util.query(this.options.query,"t="+ +(new Date))].join("/");if(this.isXDomain()&&!b.util.ua.hasCORS){var h=document.getElementsByTagName("script")[0],i=document.createElement("script");i.src=g+"&jsonp="+b.j.length,h.parentNode.insertBefore(i,h),b.j.push(function(a){f(a),i.parentNode.removeChild(i)})}else{var j=b.util.request();j.open("GET",g,!0),this.isXDomain()&&(j.withCredentials=!0),j.onreadystatechange=function(){j.readyState==4&&(j.onreadystatechange=e,j.status==200?f(j.responseText):j.status==403?c.onError(j.responseText):(c.connecting=!1,!c.reconnecting&&c.onError(j.responseText)))},j.send(null)}},d.prototype.getTransport=function(a){var c=a||this.transports,d;for(var e=0,f;f=c[e];e++)if(b.Transport[f]&&b.Transport[f].check(this)&&(!this.isXDomain()||b.Transport[f].xdomainCheck(this)))return new b.Transport[f](this,this.sessionid);return null},d.prototype.connect=function(a){if(this.connecting)return this;var c=this;return c.connecting=!0,this.handshake(function(d,e,f,g){function h(a){c.transport&&c.transport.clearTimeouts(),c.transport=c.getTransport(a);if(!c.transport)return c.publish("connect_failed");c.transport.ready(c,function(){c.connecting=!0,c.publish("connecting",c.transport.name),c.transport.open(),c.options["connect timeout"]&&(c.connectTimeoutTimer=setTimeout(function(){if(!c.connected){c.connecting=!1;if(c.options["try multiple transports"]){var a=c.transports;while(a.length>0&&a.splice(0,1)[0]!=c.transport.name);a.length?h(a):c.publish("connect_failed")}}},c.options["connect timeout"]))})}c.sessionid=d,c.closeTimeout=f*1e3,c.heartbeatTimeout=e*1e3,c.transports||(c.transports=c.origTransports=g?b.util.intersect(g.split(","),c.options.transports):c.options.transports),c.setHeartbeatTimeout(),h(c.transports),c.once("connect",function(){clearTimeout(c.connectTimeoutTimer),a&&typeof a=="function"&&a()})}),this},d.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);if(this.transport&&!this.transport.heartbeats())return;var a=this;this.heartbeatTimeoutTimer=setTimeout(function(){a.transport.onClose()},this.heartbeatTimeout)},d.prototype.packet=function(a){return this.connected&&!this.doBuffer?this.transport.packet(a):this.buffer.push(a),this},d.prototype.setBuffer=function(a){this.doBuffer=a,!a&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},d.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},d.prototype.disconnect=function(){if(this.connected||this.connecting)this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted");return this},d.prototype.disconnectSync=function(){var a=b.util.request(),c=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,b.protocol,"",this.sessionid].join("/")+"/?disconnect=1";a.open("GET",c,!1),a.send(null),this.onDisconnect("booted")},d.prototype.isXDomain=function(){var a=c.location.port||("https:"==c.location.protocol?443:80);return this.options.host!==c.location.hostname||this.options.port!=a},d.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},d.prototype.onOpen=function(){this.open=!0},d.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},d.prototype.onPacket=function(a){this.of(a.endpoint).onPacket(a)},d.prototype.onError=function(a){a&&a.advice&&a.advice==="reconnect"&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",a&&a.reason?a.reason:a)},d.prototype.onDisconnect=function(a){var b=this.connected,c=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1;if(b||c)this.transport.close(),this.transport.clearTimeouts(),b&&(this.publish("disconnect",a),"booted"!=a&&this.options.reconnect&&!this.reconnecting&&this.reconnect())},d.prototype.reconnect=function(){function e(){if(a.connected){for(var b in a.namespaces)a.namespaces.hasOwnProperty(b)&&""!==b&&a.namespaces[b].packet({type:"connect"});a.publish("reconnect",a.transport.name,a.reconnectionAttempts)}clearTimeout(a.reconnectionTimer),a.removeListener("connect_failed",f),a.removeListener("connect",f),a.reconnecting=!1,delete a.reconnectionAttempts,delete a.reconnectionDelay,delete a.reconnectionTimer,delete a.redoTransports,a.options["try multiple transports"]=c}function f(){if(!a.reconnecting)return;if(a.connected)return e();if(a.connecting&&a.reconnecting)return a.reconnectionTimer=setTimeout(f,1e3);a.reconnectionAttempts++>=b?a.redoTransports?(a.publish("reconnect_failed"),e()):(a.on("connect_failed",f),a.options["try multiple transports"]=!0,a.transports=a.origTransports,a.transport=a.getTransport(),a.redoTransports=!0,a.connect()):(a.reconnectionDelay<d&&(a.reconnectionDelay*=2),a.connect(),a.publish("reconnecting",a.reconnectionDelay,a.reconnectionAttempts),a.reconnectionTimer=setTimeout(f,a.reconnectionDelay))}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var a=this,b=this.options["max reconnection attempts"],c=this.options["try multiple transports"],d=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(f,this.reconnectionDelay),this.on("connect",f)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a,b){this.socket=a,this.name=b||"",this.flags={},this.json=new d(this,"json"),this.ackPackets=0,this.acks={}}function d(a,b){this.namespace=a,this.name=b}a.SocketNamespace=c,b.util.mixin(c,b.EventEmitter),c.prototype.$emit=b.EventEmitter.prototype.emit,c.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},c.prototype.packet=function(a){return a.endpoint=this.name,this.socket.packet(a),this.flags={},this},c.prototype.send=function(a,b){var c={type:this.flags.json?"json":"message",data:a};return"function"==typeof b&&(c.id=++this.ackPackets,c.ack=!0,this.acks[c.id]=b),this.packet(c)},c.prototype.emit=function(a){var b=Array.prototype.slice.call(arguments,1),c=b[b.length-1],d={type:"event",name:a};return"function"==typeof c&&(d.id=++this.ackPackets,d.ack="data",this.acks[d.id]=c,b=b.slice(0,b.length-1)),d.args=b,this.packet(d)},c.prototype.disconnect=function(){return this.name===""?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},c.prototype.onPacket=function(a){function d(){c.packet({type:"ack",args:b.util.toArray(arguments),ackId:a.id})}var c=this;switch(a.type){case"connect":this.$emit("connect");break;case"disconnect":this.name===""?this.socket.onDisconnect(a.reason||"booted"):this.$emit("disconnect",a.reason);break;case"message":case"json":var e=["message",a.data];a.ack=="data"?e.push(d):a.ack&&this.packet({type:"ack",ackId:a.id}),this.$emit.apply(this,e);break;case"event":var e=[a.name].concat(a.args);a.ack=="data"&&e.push(d),this.$emit.apply(this,e);break;case"ack":this.acks[a.ackId]&&(this.acks[a.ackId].apply(this,a.args),delete this.acks[a.ackId]);break;case"error":a.advice?this.socket.onError(a):a.reason=="unauthorized"?this.$emit("connect_failed",a.reason):this.$emit("error",a.reason)}},d.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},d.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){b.Transport.apply(this,arguments)}a.websocket=d,b.util.inherit(d,b.Transport),d.prototype.name="websocket",d.prototype.open=function(){var a=b.util.query(this.socket.options.query),d=this,e;return e||(e=c.MozWebSocket||c.WebSocket),this.websocket=new e(this.prepareUrl()+a),this.websocket.onopen=function(){d.onOpen(),d.socket.setBuffer(!1)},this.websocket.onmessage=function(a){d.onData(a.data)},this.websocket.onclose=function(){d.onClose(),d.socket.setBuffer(!0)},this.websocket.onerror=function(a){d.onError(a)},this},b.util.ua.iDevice?d.prototype.send=function(a){var b=this;return setTimeout(function(){b.websocket.send(a)},0),this}:d.prototype.send=function(a){return this.websocket.send(a),this},d.prototype.payload=function(a){for(var b=0,c=a.length;b<c;b++)this.packet(a[b]);return this},d.prototype.close=function(){return this.websocket.close(),this},d.prototype.onError=function(a){this.socket.onError(a)},d.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},d.check=function(){return"WebSocket"in c&&!("__addTask"in WebSocket)||"MozWebSocket"in c},d.xdomainCheck=function(){return!0},b.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(){b.Transport.websocket.apply(this,arguments)}a.flashsocket=c,b.util.inherit(c,b.Transport.websocket),c.prototype.name="flashsocket",c.prototype.open=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.open.apply(a,c)}),this},c.prototype.send=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.send.apply(a,c)}),this},c.prototype.close=function(){return WebSocket.__tasks.length=0,b.Transport.websocket.prototype.close.call(this),this},c.prototype.ready=function(a,d){function e(){var b=a.options,e=b["flash policy port"],g=["http"+(b.secure?"s":"")+":/",b.host+":"+b.port,b.resource,"static/flashsocket","WebSocketMain"+(a.isXDomain()?"Insecure":"")+".swf"];c.loaded||(typeof WEB_SOCKET_SWF_LOCATION=="undefined"&&(WEB_SOCKET_SWF_LOCATION=g.join("/")),e!==843&&WebSocket.loadFlashPolicyFile("xmlsocket://"+b.host+":"+e),WebSocket.__initialize(),c.loaded=!0),d.call(f)}var f=this;if(document.body)return e();b.util.load(e)},c.check=function(){return typeof WebSocket!="undefined"&&"__initialize"in WebSocket&&!!swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},c.xdomainCheck=function(){return!0},typeof window!="undefined"&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),b.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);if("undefined"!=typeof window)var swfobject=function(){function A(){if(t)return;try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=!0;var c=l.length;for(var d=0;d<c;d++)l[d]()}function B(a){t?a():l[l.length]=a}function C(b){if(typeof h.addEventListener!=a)h.addEventListener("load",b,!1);else if(typeof i.addEventListener!=a)i.addEventListener("load",b,!1);else if(typeof h.attachEvent!=a)R(h,"onload",b);else if(typeof h.onload=="function"){var c=h.onload;h.onload=function(){c(),b()}}else h.onload=b}function D(){k?E():F()}function E(){var c=i.getElementsByTagName("body")[0],d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;(function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");b&&(b=b.split(" ")[1].split(","),y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)])}else if(g<10){g++,setTimeout(arguments.callee,10);return}c.removeChild(d),f=null,F()})()}else F()}function F(){var b=m.length;if(b>0)for(var c=0;c<b;c++){var d=m[c].id,e=m[c].callbackFn,f={success:!1,id:d};if(y.pv[0]>0){var g=P(d);if(g)if(S(m[c].swfVersion)&&!(y.wk&&y.wk<312))U(d,!0),e&&(f.success=!0,f.ref=G(d),e(f));else if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall,h.width=g.getAttribute("width")||"0",h.height=g.getAttribute("height")||"0",g.getAttribute("class")&&(h.styleclass=g.getAttribute("class")),g.getAttribute("align")&&(h.align=g.getAttribute("align"));var i={},j=g.getElementsByTagName("param"),k=j.length;for(var l=0;l<k;l++)j[l].getAttribute("name").toLowerCase()!="movie"&&(i[j[l].getAttribute("name")]=j[l].getAttribute("value"));I(h,i,d,e)}else J(g),e&&e(f)}else{U(d,!0);if(e){var n=G(d);n&&typeof n.SetVariable!=a&&(f.success=!0,f.ref=n),e(f)}}}}function G(c){var d=null,e=P(c);if(e&&e.nodeName=="OBJECT")if(typeof e.SetVariable!=a)d=e;else{var f=e.getElementsByTagName(b)[0];f&&(d=f)}return d}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function I(b,c,d,e){u=!0,r=e||null,s={success:!1,id:d};var g=P(d);if(g){g.nodeName=="OBJECT"?(p=K(g),q=null):(p=g,q=d),b.id=f;if(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310)b.width="310";if(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137)b.height="137";i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?["Active"].concat("").join("X"):"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;typeof c.flashvars!=a?c.flashvars+="&"+k:c.flashvars=k;if(y.ie&&y.win&&g.readyState!=4){var l=Q("div");d+="SWFObjectNew",l.setAttribute("id",d),g.parentNode.insertBefore(l,g),g.style.display="none",function(){g.readyState==4?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()}L(b,c,d)}}function J(a){if(y.ie&&y.win&&a.readyState!=4){var b=Q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(K(a),b),a.style.display="none",function(){a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(K(a),a)}function K(a){var c=Q("div");if(y.win&&y.ie)c.innerHTML=a.innerHTML;else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e){var f=e.length;for(var g=0;g<f;g++)(e[g].nodeType!=1||e[g].nodeName!="PARAM")&&e[g].nodeType!=8&&c.appendChild(e[g].cloneNode(!0))}}}return c}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312)return g;if(h){typeof c.id==a&&(c.id=f);if(y.ie&&y.win){var i="";for(var j in c)c[j]!=Object.prototype[j]&&(j.toLowerCase()=="data"?d.movie=c[j]:j.toLowerCase()=="styleclass"?i+=' class="'+c[j]+'"':j.toLowerCase()!="classid"&&(i+=" "+j+'="'+c[j]+'"'));var k="";for(var l in d)d[l]!=Object.prototype[l]&&(k+='<param name="'+l+'" value="'+d[l]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>",n[n.length]=c.id,g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c)c[o]!=Object.prototype[o]&&(o.toLowerCase()=="styleclass"?m.setAttribute("class",c[o]):o.toLowerCase()!="classid"&&m.setAttribute(o,c[o]));for(var p in d)d[p]!=Object.prototype[p]&&p.toLowerCase()!="movie"&&M(m,p,d[p]);h.parentNode.replaceChild(m,h),g=m}}return g}function M(a,b,c){var d=Q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function N(a){var b=P(a);b&&b.nodeName=="OBJECT"&&(y.ie&&y.win?(b.style.display="none",function(){b.readyState==4?O(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function O(a){var b=P(a);if(b){for(var c in b)typeof b[c]=="function"&&(b[c]=null);b.parentNode.removeChild(b)}}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function Q(a){return i.createElement(a)}function R(a,b,c){a.attachEvent(b,c),o[o.length]=[a,b,c]}function S(a){var b=y.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function T(c,d,e,f){if(y.ie&&y.mac)return;var g=i.getElementsByTagName("head")[0];if(!g)return;var h=e&&typeof e=="string"?e:"screen";f&&(v=null,w=null);if(!v||w!=h){var j=Q("style");j.setAttribute("type","text/css"),j.setAttribute("media",h),v=g.appendChild(j),y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0&&(v=i.styleSheets[i.styleSheets.length-1]),w=h}y.ie&&y.win?v&&typeof v.addRule==b&&v.addRule(c,d):v&&typeof i.createTextNode!=a&&v.appendChild(i.createTextNode(c+" {"+d+"}"))}function U(a,b){if(!x)return;var c=b?"visible":"hidden";t&&P(a)?P(a).style.visibility=c:T("#"+a,"visibility:"+c)}function V(b){var c=/[\\\"<>\.;]/,d=c.exec(b)!=null;return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}var a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=!1,l=[D],m=[],n=[],o=[],p,q,r,s,t=!1,u=!1,v,w,x=!0,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,p=!1,q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b)r=j.plugins[c].description,r&&(typeof j.mimeTypes==a||!j.mimeTypes[e]||!!j.mimeTypes[e].enabledPlugin)&&(k=!0,p=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h[["Active"].concat("Object").join("X")]!=a)try{var s=new(window[["Active"].concat("Object").join("X")])(d);s&&(r=s.GetVariable("$version"),r&&(p=!0,r=r.split(" ")[1].split(","),q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}(),z=function(){if(!y.w3)return;(typeof i.readyState!=a&&i.readyState=="complete"||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body))&&A(),t||(typeof i.addEventListener!=a&&i.addEventListener("DOMContentLoaded",A,!1),y.ie&&y.win&&(i.attachEvent(g,function(){i.readyState=="complete"&&(i.detachEvent(g,arguments.callee),A())}),h==top&&function(){if(t)return;try{i.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}A()}()),y.wk&&function(){if(t)return;if(!/loaded|complete/.test(i.readyState)){setTimeout(arguments.callee,0);return}A()}(),C(A))}(),W=function(){y.ie&&y.win&&window.attachEvent("onunload",function(){var a=o.length;for(var b=0;b<a;b++)o[b][0].detachEvent(o[b][1],o[b][2]);var c=n.length;for(var d=0;d<c;d++)N(n[d]);for(var e in y)y[e]=null;y=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}();return{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,m[m.length]=e,U(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(y.w3)return G(a)},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:!1,id:d};y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g?(U(d,!1),B(function(){e+="",f+="";var n={};if(k&&typeof k===b)for(var o in k)n[o]=k[o];n.data=c,n.width=e,n.height=f;var p={};if(j&&typeof j===b)for(var q in j)p[q]=j[q];if(i&&typeof i===b)for(var r in i)typeof p.flashvars!=a?p.flashvars+="&"+r+"="+i[r]:p.flashvars=r+"="+i[r];if(S(g)){var s=L(n,p,d);n.id==d&&U(d,!0),m.success=!0,m.ref=s}else{if(h&&H()){n.data=h,I(n,p,d,l);return}U(d,!0)}l&&l(m)})):l&&l(m)},switchOffAutoHideShow:function(){x=!1},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){return y.w3?L(a,b,c):undefined},showExpressInstall:function(a,b,c,d){y.w3&&H()&&I(a,b,c,d)},removeSWF:function(a){y.w3&&N(a)},createCSS:function(a,b,c,d){y.w3&&T(a,b,c,d)},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return V(b);var c=b.split("&");for(var d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return V(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(u){var a=P(f);a&&p&&(a.parentNode.replaceChild(p,a),q&&(U(q,!0),y.ie&&y.win&&(p.style.display="block")),r&&r(s)),u=!1}}}}();(function(){if("undefined"==typeof window||window.WebSocket)return;var a=window.console;if(!a||!a.log||!a.error)a={log:function(){},error:function(){}};if(!swfobject.hasFlashPlayerVersion("10.0.0")){a.error("Flash Player >= 10.0.0 is required.");return}location.protocol=="file:"&&a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++,WebSocket.__instances[f.__id]=f,f.readyState=WebSocket.CONNECTING,f.bufferedAmount=0,f.__events={},b?typeof b=="string"&&(b=[b]):b=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)},WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));return b<0?!0:(this.bufferedAmount+=b,!1)},WebSocket.prototype.close=function(){if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING)return;this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)},WebSocket.prototype.addEventListener=function(a,b,c){a in this.__events||(this.__events[a]=[]),this.__events[a].push(b)},WebSocket.prototype.removeEventListener=function(a,b,c){if(!(a in this.__events))return;var d=this.__events[a];for(var e=d.length-1;e>=0;--e)if(d[e]===b){d.splice(e,1);break}},WebSocket.prototype.dispatchEvent=function(a){var b=this.__events[a.type]||[];for(var c=0;c<b.length;++c)b[c](a);var d=this["on"+a.type];d&&d(a)},WebSocket.prototype.__handleEvent=function(a){"readyState"in a&&(this.readyState=a.readyState),"protocol"in a&&(this.protocol=a.protocol);var b;if(a.type=="open"||a.type=="error")b=this.__createSimpleEvent(a.type);else if(a.type=="close")b=this.__createSimpleEvent("close");else{if(a.type!="message")throw"unknown event type: "+a.type;var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}this.dispatchEvent(b)},WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");return b.initEvent(a,!1,!1),b}return{type:a,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");return c.initMessageEvent("message",!1,!1,b,null,null,window,null),c}return{type:a,data:b,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})},WebSocket.__initialize=function(){if(WebSocket.__flash)return;WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation);if(!window.WEB_SOCKET_SWF_LOCATION){a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}var b=document.createElement("div");b.id="webSocketContainer",b.style.position="absolute",WebSocket.__isFlashLite()?(b.style.left="0px",b.style.top="0px"):(b.style.left="-100px",b.style.top="-100px");var c=document.createElement("div");c.id="webSocketFlash",b.appendChild(c),document.body.appendChild(b),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(b){b.success||a.error("[WebSocket] swfobject.embedSWF failed")})},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a)WebSocket.__tasks[a]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{var b=WebSocket.__flash.receiveEvents();for(var c=0;c<b.length;++c)WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}catch(d){a.error(d)}},0),!0},WebSocket.__log=function(b){a.log(decodeURIComponent(b))},WebSocket.__error=function(b){a.error(decodeURIComponent(b))},WebSocket.__addTask=function(a){WebSocket.__flash?a():WebSocket.__tasks.push(a)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var a=window.navigator.mimeTypes["application/x-shockwave-flash"];return!a||!a.enabledPlugin||!a.enabledPlugin.filename?!1:a.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))})(),function(a,b,c){function d(a){if(!a)return;b.Transport.apply(this,arguments),this.sendBuffer=[]}function e(){}a.XHR=d,b.util.inherit(d,b.Transport),d.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},d.prototype.payload=function(a){var c=[];for(var d=0,e=a.length;d<e;d++)c.push(b.parser.encodePacket(a[d]));this.send(b.parser.encodePayload(c))},d.prototype.send=function(a){return this.post(a),this},d.prototype.post=function(a){function d(){this.readyState==4&&(this.onreadystatechange=e,b.posting=!1,this.status==200?b.socket.setBuffer(!1):b.onClose())}function f(){this.onload=e,b.socket.setBuffer(!1)}var b=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),c.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=f:this.sendXHR.onreadystatechange=d,this.sendXHR.send(a)},d.prototype.close=function(){return this.onClose(),this},d.prototype.request=function(a){var c=b.util.request(this.socket.isXDomain()),d=b.util.query(this.socket.options.query,"t="+ +(new Date));c.open(a||"GET",this.prepareUrl()+d,!0);if(a=="POST")try{c.setRequestHeader?c.setRequestHeader("Content-type","text/plain;charset=UTF-8"):c.contentType="text/plain"}catch(e){}return c},d.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},d.check=function(a,d){try{var e=b.util.request(d),f=c.XDomainRequest&&e instanceof XDomainRequest,g=a&&a.options&&a.options.secure?"https:":"http:",h=g!=c.location.protocol;if(e&&(!f||!h))return!0}catch(i){}return!1},d.xdomainCheck=function(a){return d.check(a,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a){b.Transport.XHR.apply(this,arguments)}a.htmlfile=c,b.util.inherit(c,b.Transport.XHR),c.prototype.name="htmlfile",c.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var a=this.doc.createElement("div");a.className="socketio",this.doc.body.appendChild(a),this.iframe=this.doc.createElement("iframe"),a.appendChild(this.iframe);var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date));this.iframe.src=this.prepareUrl()+d,b.util.on(window,"unload",function(){c.destroy()})},c.prototype._=function(a,b){this.onData(a);try{var c=b.getElementsByTagName("script")[0];c.parentNode.removeChild(c)}catch(d){}},c.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(a){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},c.prototype.close=function(){return this.destroy(),b.Transport.XHR.prototype.close.call(this)},c.check=function(a){if(typeof window!="undefined"&&["Active"].concat("Object").join("X")in window)try{var c=new(window[["Active"].concat("Object").join("X")])("htmlfile");return c&&b.Transport.XHR.check(a)}catch(d){}return!1},c.xdomainCheck=function(){return!1},b.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(){b.Transport.XHR.apply(this,arguments)}function e(){}a["xhr-polling"]=d,b.util.inherit(d,b.Transport.XHR),b.util.merge(d,b.Transport.XHR),d.prototype.name="xhr-polling",d.prototype.heartbeats=function(){return!1},d.prototype.open=function(){var a=this;return b.Transport.XHR.prototype.open.call(a),!1},d.prototype.get=function(){function b(){this.readyState==4&&(this.onreadystatechange=e,this.status==200?(a.onData(this.responseText),a.get()):a.onClose())}function d(){this.onload=e,this.onerror=e,a.onData(this.responseText),a.get()}function f(){a.onClose()}if(!this.isOpen)return;var a=this;this.xhr=this.request(),c.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=d,this.xhr.onerror=f):this.xhr.onreadystatechange=b,this.xhr.send(null)},d.prototype.onClose=function(){b.Transport.XHR.prototype.onClose.call(this);if(this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=e;try{this.xhr.abort()}catch(a){}this.xhr=null}},d.prototype.ready=function(a,c){var d=this;b.util.defer(function(){c.call(d)})},b.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b,c){function e(a){b.Transport["xhr-polling"].apply(this,arguments),this.index=b.j.length;var c=this;b.j.push(function(a){c._(a)})}var d=c.document&&"MozAppearance"in c.document.documentElement.style;a["jsonp-polling"]=e,b.util.inherit(e,b.Transport["xhr-polling"]),e.prototype.name="jsonp-polling",e.prototype.post=function(a){function i(){j(),c.socket.setBuffer(!1)}function j(){c.iframe&&c.form.removeChild(c.iframe);try{h=document.createElement('<iframe name="'+c.iframeId+'">')}catch(a){h=document.createElement("iframe"),h.name=c.iframeId}h.id=c.iframeId,c.form.appendChild(h),c.iframe=h}var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);if(!this.form){var e=document.createElement("form"),f=document.createElement("textarea"),g=this.iframeId="socketio_iframe_"+this.index,h;e.className="socketio",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.display="none",e.target=g,e.method="POST",e.setAttribute("accept-charset","utf-8"),f.name="d",e.appendChild(f),document.body.appendChild(e),this.form=e,this.area=f}this.form.action=this.prepareUrl()+d,j(),this.area.value=b.JSON.stringify(a);try{this.form.submit()}catch(k){}this.iframe.attachEvent?h.onreadystatechange=function(){c.iframe.readyState=="complete"&&i()}:this.iframe.onload=i,this.socket.setBuffer(!0)},e.prototype.get=function(){var a=this,c=document.createElement("script"),e=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),c.async=!0,c.src=this.prepareUrl()+e,c.onerror=function(){a.onClose()};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c,f),this.script=c,d&&setTimeout(function(){var a=document.createElement("iframe");document.body.appendChild(a),document.body.removeChild(a)},100)},e.prototype._=function(a){return this.onData(a),this.isOpen&&this.get(),this},e.prototype.ready=function(a,c){var e=this;if(!d)return c.call(this);b.util.load(function(){c.call(e)})},e.check=function(){return"document"in c},e.xdomainCheck=function(){return!0},b.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this)})()

(function (b5, ey) {
  var cb, dV, cm = b5.document,
    es = b5.location,
    c0 = b5.jQuery,
    dd = b5.$,
    ea = {},
    b1 = [],
    cf = "1.9.0",
    ew = b1.concat,
    dJ = b1.push,
    b3 = b1.slice,
    er = b1.indexOf,
    b8 = ea.toString,
    cL = ea.hasOwnProperty,
    em = cf.trim,
    dX = function (b, a) {
      return new dX.fn.init(b, a, cb)
    },
    cx = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    d6 = /\S+/g,
    dk = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    cM = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    cw = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    c2 = /^[\],:{}\s]*$/,
    cW = /(?:^|:|,)(?:\s*\[)+/g,
    d2 = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ed = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    dF = /^-ms-/,
    eh = /-([\da-z])/gi,
    c3 = function (b, a) {
      return a.toUpperCase()
    },
    ev = function () {
      if (cm.addEventListener) {
        cm.removeEventListener("DOMContentLoaded", ev, false);
        dX.ready()
      } else {
        if (cm.readyState === "complete") {
          cm.detachEvent("onreadystatechange", ev);
          dX.ready()
        }
      }
    };
  dX.fn = dX.prototype = {
    jquery: cf,
    constructor: dX,
    init: function (f, b, c) {
      var d, a;
      if (!f) {
        return this
      }
      if (typeof f === "string") {
        if (f.charAt(0) === "<" && f.charAt(f.length - 1) === ">" && f.length >= 3) {
          d = [null, f, null]
        } else {
          d = cM.exec(f)
        }
        if (d && (d[1] || !b)) {
          if (d[1]) {
            b = b instanceof dX ? b[0] : b;
            dX.merge(this, dX.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : cm, true));
            if (cw.test(d[1]) && dX.isPlainObject(b)) {
              for (d in b) {
                if (dX.isFunction(this[d])) {
                  this[d](b[d])
                } else {
                  this.attr(d, b[d])
                }
              }
            }
            return this
          } else {
            a = cm.getElementById(d[2]);
            if (a && a.parentNode) {
              if (a.id !== d[2]) {
                return c.find(f)
              }
              this.length = 1;
              this[0] = a
            }
            this.context = cm;
            this.selector = f;
            return this
          }
        } else {
          if (!b || b.jquery) {
            return (b || c).find(f)
          } else {
            return this.constructor(b).find(f)
          }
        }
      } else {
        if (f.nodeType) {
          this.context = this[0] = f;
          this.length = 1;
          return this
        } else {
          if (dX.isFunction(f)) {
            return c.ready(f)
          }
        }
      }
      if (f.selector !== ey) {
        this.selector = f.selector;
        this.context = f.context
      }
      return dX.makeArray(f, this)
    },
    selector: "",
    length: 0,
    size: function () {
      return this.length
    },
    toArray: function () {
      return b3.call(this)
    },
    get: function (a) {
      return a == null ? this.toArray() : (a < 0 ? this[this.length + a] : this[a])
    },
    pushStack: function (b) {
      var a = dX.merge(this.constructor(), b);
      a.prevObject = this;
      a.context = this.context;
      return a
    },
    each: function (a, b) {
      return dX.each(this, a, b)
    },
    ready: function (a) {
      dX.ready.promise().done(a);
      return this
    },
    slice: function () {
      return this.pushStack(b3.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var c = this.length,
        b = +a + (a < 0 ? c : 0);
      return this.pushStack(b >= 0 && b < c ? [this[b]] : [])
    },
    map: function (a) {
      return this.pushStack(dX.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: dJ,
    sort: [].sort,
    splice: [].splice
  };
  dX.fn.init.prototype = dX.fn;
  dX.extend = dX.fn.extend = function () {
    var a, j, g, k, d, c, f = arguments[0] || {},
      h = 1,
      i = arguments.length,
      b = false;
    if (typeof f === "boolean") {
      b = f;
      f = arguments[1] || {};
      h = 2
    }
    if (typeof f !== "object" && !dX.isFunction(f)) {
      f = {}
    }
    if (i === h) {
      f = this;
      --h
    }
    for (; h < i; h++) {
      if ((a = arguments[h]) != null) {
        for (j in a) {
          g = f[j];
          k = a[j];
          if (f === k) {
            continue
          }
          if (b && k && (dX.isPlainObject(k) || (d = dX.isArray(k)))) {
            if (d) {
              d = false;
              c = g && dX.isArray(g) ? g : []
            } else {
              c = g && dX.isPlainObject(g) ? g : {}
            }
            f[j] = dX.extend(b, c, k)
          } else {
            if (k !== ey) {
              f[j] = k
            }
          }
        }
      }
    }
    return f
  };
  dX.extend({
    noConflict: function (a) {
      if (b5.$ === dX) {
        b5.$ = dd
      }
      if (a && b5.jQuery === dX) {
        b5.jQuery = c0
      }
      return dX
    },
    isReady: false,
    readyWait: 1,
    holdReady: function (a) {
      if (a) {
        dX.readyWait++
      } else {
        dX.ready(true)
      }
    },
    ready: function (a) {
      if (a === true ? --dX.readyWait : dX.isReady) {
        return
      }
      if (!cm.body) {
        return setTimeout(dX.ready)
      }
      dX.isReady = true;
      if (a !== true && --dX.readyWait > 0) {
        return
      }
      dV.resolveWith(cm, [dX]);
      if (dX.fn.trigger) {
        dX(cm).trigger("ready").off("ready")
      }
    },
    isFunction: function (a) {
      return dX.type(a) === "function"
    },
    isArray: Array.isArray ||
    function (a) {
      return dX.type(a) === "array"
    },
    isWindow: function (a) {
      return a != null && a == a.window
    },
    isNumeric: function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a)
    },
    type: function (a) {
      if (a == null) {
        return String(a)
      }
      return typeof a === "object" || typeof a === "function" ? ea[b8.call(a)] || "object" : typeof a
    },
    isPlainObject: function (a) {
      if (!a || dX.type(a) !== "object" || a.nodeType || dX.isWindow(a)) {
        return false
      }
      try {
        if (a.constructor && !cL.call(a, "constructor") && !cL.call(a.constructor.prototype, "isPrototypeOf")) {
          return false
        }
      } catch (b) {
        return false
      }
      var c;
      for (c in a) {}
      return c === ey || cL.call(a, c)
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) {
        return false
      }
      return true
    },
    error: function (a) {
      throw new Error(a)
    },
    parseHTML: function (a, c, b) {
      if (!a || typeof a !== "string") {
        return null
      }
      if (typeof c === "boolean") {
        b = c;
        c = false
      }
      c = c || cm;
      var d = cw.exec(a),
        f = !b && [];
      if (d) {
        return [c.createElement(d[1])]
      }
      d = dX.buildFragment([a], c, f);
      if (f) {
        dX(f).remove()
      }
      return dX.merge([], d.childNodes)
    },
    parseJSON: function (a) {
      if (b5.JSON && b5.JSON.parse) {
        return b5.JSON.parse(a)
      }
      if (a === null) {
        return a
      }
      if (typeof a === "string") {
        a = dX.trim(a);
        if (a) {
          if (c2.test(a.replace(d2, "@").replace(ed, "]").replace(cW, ""))) {
            return (new Function("return " + a))()
          }
        }
      }
      dX.error("Invalid JSON: " + a)
    },


    parseXML: function (b) {
      var d, c;
      if (!b || typeof b !== "string") {
        return null
      }
      try {
        if (b5.DOMParser) {
          c = new DOMParser();
          d = c.parseFromString(b, "text/xml")
        } else {
          d = new ActiveXObject("Microsoft.XMLDOM");
          d.async = "false";
          d.loadXML(b)
        }
      } catch (a) {
        d = ey
      }
      if (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) {
        dX.error("Invalid XML: " + b)
      }
      return d
    },
    noop: function () {},
    globalEval: function (a) {
      if (a && dX.trim(a)) {
        (b5.execScript ||
        function (b) {
          b5["eval"].call(b5, b)
        })(a)
      }
    },
    camelCase: function (a) {
      return a.replace(dF, "ms-").replace(eh, c3)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (h, g, d) {
      var a, c = 0,
        b = h.length,
        f = d9(h);
      if (d) {
        if (f) {
          for (; c < b; c++) {
            a = g.apply(h[c], d);
            if (a === false) {
              break
            }
          }
        } else {
          for (c in h) {
            a = g.apply(h[c], d);
            if (a === false) {
              break
            }
          }
        }
      } else {
        if (f) {
          for (; c < b; c++) {
            a = g.call(h[c], c, h[c]);
            if (a === false) {
              break
            }
          }
        } else {
          for (c in h) {
            a = g.call(h[c], c, h[c]);
            if (a === false) {
              break
            }
          }
        }
      }
      return h
    },
    trim: em && !em.call("\uFEFF\xA0") ?
    function (a) {
      return a == null ? "" : em.call(a)
    } : function (a) {
      return a == null ? "" : (a + "").replace(dk, "")
    },
    makeArray: function (c, a) {
      var b = a || [];
      if (c != null) {
        if (d9(Object(c))) {
          dX.merge(b, typeof c === "string" ? [c] : c)
        } else {
          dJ.call(b, c)
        }
      }
      return b
    },
    inArray: function (a, c, b) {
      var d;
      if (c) {
        if (er) {
          return er.call(c, a, b)
        }
        d = c.length;
        b = b ? b < 0 ? Math.max(0, d + b) : b : 0;
        for (; b < d; b++) {
          if (b in c && c[b] === a) {
            return b
          }
        }
      }
      return -1
    },
    merge: function (a, c) {
      var f = c.length,
        b = a.length,
        d = 0;
      if (typeof f === "number") {
        for (; d < f; d++) {
          a[b++] = c[d]
        }
      } else {
        while (c[d] !== ey) {
          a[b++] = c[d++]
        }
      }
      a.length = b;
      return a
    },
    grep: function (d, g, f) {
      var h, c = [],
        b = 0,
        a = d.length;
      f = !! f;
      for (; b < a; b++) {
        h = !! g(d[b], b);
        if (f !== h) {
          c.push(d[b])
        }
      }
      return c
    },
    map: function (c, g, f) {
      var h, a = 0,
        i = c.length,
        d = d9(c),
        b = [];
      if (d) {
        for (; a < i; a++) {
          h = g(c[a], a, f);
          if (h != null) {
            b[b.length] = h
          }
        }
      } else {
        for (a in c) {
          h = g(c[a], a, f);
          if (h != null) {
            b[b.length] = h
          }
        }
      }
      return ew.apply([], b)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, f, d;
      if (typeof b === "string") {
        c = a[b];
        b = a;
        a = c
      }
      if (!dX.isFunction(a)) {
        return ey
      }
      f = b3.call(arguments, 2);
      d = function () {
        return a.apply(b || this, f.concat(b3.call(arguments)))
      };
      d.guid = a.guid = a.guid || dX.guid++;
      return d
    },
    access: function (g, f, c, d, i, a, b) {
      var j = 0,
        k = g.length,
        h = c == null;
      if (dX.type(c) === "object") {
        i = true;
        for (j in c) {
          dX.access(g, f, j, c[j], true, a, b)
        }
      } else {
        if (d !== ey) {
          i = true;
          if (!dX.isFunction(d)) {
            b = true
          }
          if (h) {
            if (b) {
              f.call(g, d);
              f = null
            } else {
              h = f;
              f = function (l, m, n) {
                return h.call(dX(l), n)
              }
            }
          }
          if (f) {
            for (; j < k; j++) {
              f(g[j], c, b ? d : d.call(g[j], j, f(g[j], c)))
            }
          }
        }
      }
      return i ? g : h ? f.call(g) : k ? f(g[0], c) : a
    },
    now: function () {
      return (new Date()).getTime()
    }
  });
  dX.ready.promise = function (a) {
    if (!dV) {
      dV = dX.Deferred();
      if (cm.readyState === "complete") {
        setTimeout(dX.ready)
      } else {
        if (cm.addEventListener) {
          cm.addEventListener("DOMContentLoaded", ev, false);
          b5.addEventListener("load", dX.ready, false)
        } else {
          cm.attachEvent("onreadystatechange", ev);
          b5.attachEvent("onload", dX.ready);
          var b = false;
          try {
            b = b5.frameElement == null && cm.documentElement
          } catch (c) {}
          if (b && b.doScroll) {
            (function d() {
              if (!dX.isReady) {
                try {
                  b.doScroll("left")
                } catch (f) {
                  return setTimeout(d, 50)
                }
                dX.ready()
              }
            })()
          }
        }
      }
    }
    return dV.promise(a)
  };
  dX.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    ea["[object " + b + "]"] = b.toLowerCase()
  });

  function d9(a) {
    var b = a.length,
      c = dX.type(a);
    if (dX.isWindow(a)) {
      return false
    }
    if (a.nodeType === 1 && b) {
      return true
    }
    return c === "array" || c !== "function" && (b === 0 || typeof b === "number" && b > 0 && (b - 1) in a)
  }
  cb = dX(cm);
  var dv = {};

  function d3(a) {
    var b = dv[a] = {};
    dX.each(a.match(d6) || [], function (c, d) {
      b[d] = true
    });
    return b
  }
  dX.Callbacks = function (a) {
    a = typeof a === "string" ? (dv[a] || d3(a)) : dX.extend({}, a);
    var j, h, i, k, g, f, d = [],
      c = !a.once && [],
      l = function (m) {
        j = a.memory && m;
        h = true;
        f = k || 0;
        k = 0;
        g = d.length;
        i = true;
        for (; d && f < g; f++) {
          if (d[f].apply(m[0], m[1]) === false && a.stopOnFalse) {
            j = false;
            break
          }
        }
        i = false;
        if (d) {
          if (c) {
            if (c.length) {
              l(c.shift())
            }
          } else {
            if (j) {
              d = []
            } else {
              b.disable()
            }
          }
        }
      },
      b = {
        add: function () {
          if (d) {
            var n = d.length;
            (function m(o) {
              dX.each(o, function (q, r) {
                var p = dX.type(r);
                if (p === "function") {
                  if (!a.unique || !b.has(r)) {
                    d.push(r)
                  }
                } else {
                  if (r && r.length && p !== "string") {
                    m(r)
                  }
                }
              })
            })(arguments);
            if (i) {
              g = d.length
            } else {
              if (j) {
                k = n;
                l(j)
              }
            }
          }
          return this
        },
        remove: function () {
          if (d) {
            dX.each(arguments, function (n, m) {
              var o;
              while ((o = dX.inArray(m, d, o)) > -1) {
                d.splice(o, 1);
                if (i) {
                  if (o <= g) {
                    g--
                  }
                  if (o <= f) {
                    f--
                  }
                }
              }
            })
          }
          return this
        },
        has: function (m) {
          return dX.inArray(m, d) > -1
        },
        empty: function () {
          d = [];
          return this
        },
        disable: function () {
          d = c = j = ey;
          return this
        },
        disabled: function () {
          return !d
        },
        lock: function () {
          c = ey;
          if (!j) {
            b.disable()
          }
          return this
        },
        locked: function () {
          return !c
        },
        fireWith: function (n, m) {
          m = m || [];
          m = [n, m.slice ? m.slice() : m];
          if (d && (!h || c)) {
            if (i) {
              c.push(m)
            } else {
              l(m)
            }
          }
          return this
        },
        fire: function () {
          b.fireWith(this, arguments);
          return this
        },
        fired: function () {
          return !!h
        }
      };
    return b
  };
  dX.extend({
    Deferred: function (c) {
      var d = [
        ["resolve", "done", dX.Callbacks("once memory"), "resolved"],
        ["reject", "fail", dX.Callbacks("once memory"), "rejected"],
        ["notify", "progress", dX.Callbacks("memory")]
      ],
        b = "pending",
        a = {
          state: function () {
            return b
          },
          always: function () {
            f.done(arguments).fail(arguments);
            return this
          },
          then: function () {
            var g = arguments;
            return dX.Deferred(function (h) {
              dX.each(d, function (k, l) {
                var i = l[0],
                  j = dX.isFunction(g[k]) && g[k];
                f[l[1]](function () {
                  var m = j && j.apply(this, arguments);
                  if (m && dX.isFunction(m.promise)) {
                    m.promise().done(h.resolve).fail(h.reject).progress(h.notify)
                  } else {
                    h[i + "With"](this === a ? h.promise() : this, j ? [m] : arguments)
                  }
                })
              });
              g = null
            }).promise()
          },
          promise: function (g) {
            return g != null ? dX.extend(g, a) : a
          }
        },
        f = {};
      a.pipe = a.then;
      dX.each(d, function (i, j) {
        var g = j[2],
          h = j[3];
        a[j[1]] = g.add;
        if (h) {
          g.add(function () {
            b = h
          }, d[i ^ 1][2].disable, d[2][2].lock)
        }
        f[j[0]] = function () {
          f[j[0] + "With"](this === f ? a : this, arguments);
          return this
        };
        f[j[0] + "With"] = g.fireWith
      });
      a.promise(f);
      if (c) {
        c.call(f, f)
      }
      return f
    },
    when: function (h) {
      var j = 0,
        d = b3.call(arguments),
        g = d.length,
        k = g !== 1 || (h && dX.isFunction(h.promise)) ? g : 0,
        a = k === 1 ? h : dX.Deferred(),
        i = function (l, n, m) {
          return function (o) {
            n[l] = this;
            m[l] = arguments.length > 1 ? b3.call(arguments) : o;
            if (m === b) {
              a.notifyWith(n, m)
            } else {
              if (!(--k)) {
                a.resolveWith(n, m)
              }
            }
          }
        },
        b, f, c;
      if (g > 1) {
        b = new Array(g);
        f = new Array(g);
        c = new Array(g);
        for (; j < g; j++) {
          if (d[j] && dX.isFunction(d[j].promise)) {
            d[j].promise().done(i(j, c, d)).fail(a.reject).progress(i(j, f, b))
          } else {
            --k
          }
        }
      }
      if (!k) {
        a.resolveWith(c, d)
      }
      return a.promise()
    }
  });
  dX.support = (function () {
    var a, b, d, c, k, f, g, i, l, j, m = cm.createElement("div");
    m.setAttribute("className", "t");
    m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    b = m.getElementsByTagName("*");
    d = m.getElementsByTagName("a")[0];
    if (!b || !d || !b.length) {
      return {}
    }
    c = cm.createElement("select");
    k = c.appendChild(cm.createElement("option"));
    f = m.getElementsByTagName("input")[0];
    d.style.cssText = "top:1px;float:left;opacity:.5";
    a = {
      getSetAttribute: m.className !== "t",
      leadingWhitespace: m.firstChild.nodeType === 3,
      tbody: !m.getElementsByTagName("tbody").length,
      htmlSerialize: !! m.getElementsByTagName("link").length,
      style: /top/.test(d.getAttribute("style")),
      hrefNormalized: d.getAttribute("href") === "/a",
      opacity: /^0.5/.test(d.style.opacity),
      cssFloat: !! d.style.cssFloat,
      checkOn: !! f.value,
      optSelected: k.selected,
      enctype: !! cm.createElement("form").enctype,
      html5Clone: cm.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
      boxModel: cm.compatMode === "CSS1Compat",
      deleteExpando: true,
      noCloneEvent: true,
      inlineBlockNeedsLayout: false,
      shrinkWrapBlocks: false,
      reliableMarginRight: true,
      boxSizingReliable: true,
      pixelPosition: false
    };
    f.checked = true;
    a.noCloneChecked = f.cloneNode(true).checked;
    c.disabled = true;
    a.optDisabled = !k.disabled;
    try {
      delete m.test
    } catch (h) {
      a.deleteExpando = false
    }
    f = cm.createElement("input");
    f.setAttribute("value", "");
    a.input = f.getAttribute("value") === "";
    f.value = "t";
    f.setAttribute("type", "radio");
    a.radioValue = f.value === "t";
    f.setAttribute("checked", "t");
    f.setAttribute("name", "t");
    g = cm.createDocumentFragment();
    g.appendChild(f);
    a.appendChecked = f.checked;
    a.checkClone = g.cloneNode(true).cloneNode(true).lastChild.checked;
    if (m.attachEvent) {
      m.attachEvent("onclick", function () {
        a.noCloneEvent = false
      });
      m.cloneNode(true).click()
    }
    for (j in {
      submit: true,
      change: true,
      focusin: true
    }) {
      m.setAttribute(i = "on" + j, "t");
      a[j + "Bubbles"] = i in b5 || m.attributes[i].expando === false
    }
    m.style.backgroundClip = "content-box";
    m.cloneNode(true).style.backgroundClip = "";
    a.clearCloneStyle = m.style.backgroundClip === "content-box";
    dX(function () {
      var r, n, o, q = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        p = cm.getElementsByTagName("body")[0];
      if (!p) {
        return
      }
      r = cm.createElement("div");
      r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
      p.appendChild(r).appendChild(m);
      m.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
      o = m.getElementsByTagName("td");
      o[0].style.cssText = "padding:0;margin:0;border:0;display:none";
      l = (o[0].offsetHeight === 0);
      o[0].style.display = "";
      o[1].style.display = "none";
      a.reliableHiddenOffsets = l && (o[0].offsetHeight === 0);
      m.innerHTML = "";
      m.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
      a.boxSizing = (m.offsetWidth === 4);
      a.doesNotIncludeMarginInBodyOffset = (p.offsetTop !== 1);
      if (b5.getComputedStyle) {
        a.pixelPosition = (b5.getComputedStyle(m, null) || {}).top !== "1%";
        a.boxSizingReliable = (b5.getComputedStyle(m, null) || {
          width: "4px"
        }).width === "4px";
        n = m.appendChild(cm.createElement("div"));
        n.style.cssText = m.style.cssText = q;
        n.style.marginRight = n.style.width = "0";
        m.style.width = "1px";
        a.reliableMarginRight = !parseFloat((b5.getComputedStyle(n, null) || {}).marginRight)
      }
      if (typeof m.style.zoom !== "undefined") {
        m.innerHTML = "";
        m.style.cssText = q + "width:1px;padding:1px;display:inline;zoom:1";
        a.inlineBlockNeedsLayout = (m.offsetWidth === 3);
        m.style.display = "block";
        m.innerHTML = "<div></div>";
        m.firstChild.style.width = "5px";
        a.shrinkWrapBlocks = (m.offsetWidth !== 3);
        p.style.zoom = 1
      }
      p.removeChild(r);
      r = m = o = n = null
    });
    b = c = g = k = d = f = null;
    return a
  })();
  var cB = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    eq = /([A-Z])/g;

  function dg(j, l, h, i) {
    if (!dX.acceptData(j)) {
      return
    }
    var f, c, b = dX.expando,
      d = typeof l === "string",
      a = j.nodeType,
      g = a ? dX.cache : j,
      k = a ? j[b] : j[b] && b;
    if ((!k || !g[k] || (!i && !g[k].data)) && d && h === ey) {
      return
    }
    if (!k) {
      if (a) {
        j[b] = k = b1.pop() || dX.guid++
      } else {
        k = b
      }
    }
    if (!g[k]) {
      g[k] = {};
      if (!a) {
        g[k].toJSON = dX.noop
      }
    }
    if (typeof l === "object" || typeof l === "function") {
      if (i) {
        g[k] = dX.extend(g[k], l)
      } else {
        g[k].data = dX.extend(g[k].data, l)
      }
    }
    f = g[k];
    if (!i) {
      if (!f.data) {
        f.data = {}
      }
      f = f.data
    }
    if (h !== ey) {
      f[dX.camelCase(l)] = h
    }
    if (d) {
      c = f[l];
      if (c == null) {
        c = f[dX.camelCase(l)]
      }
    } else {
      c = f
    }
    return c
  }

  function cD(h, j, g) {
    if (!dX.acceptData(h)) {
      return
    }
    var b, c, d, a = h.nodeType,
      f = a ? dX.cache : h,
      i = a ? h[dX.expando] : dX.expando;
    if (!f[i]) {
      return
    }
    if (j) {
      b = g ? f[i] : f[i].data;
      if (b) {
        if (!dX.isArray(j)) {
          if (j in b) {
            j = [j]
          } else {
            j = dX.camelCase(j);
            if (j in b) {
              j = [j]
            } else {
              j = j.split(" ")
            }
          }
        } else {
          j = j.concat(dX.map(j, dX.camelCase))
        }
        for (c = 0, d = j.length; c < d; c++) {
          delete b[j[c]]
        }
        if (!(g ? c1 : dX.isEmptyObject)(b)) {
          return
        }
      }
    }
    if (!g) {
      delete f[i].data;
      if (!c1(f[i])) {
        return
      }
    }
    if (a) {
      dX.cleanData([h], true)
    } else {
      if (dX.support.deleteExpando || f != f.window) {
        delete f[i]
      } else {
        f[i] = null
      }
    }
  }
  dX.extend({
    cache: {},
    expando: "jQuery" + (cf + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: true,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: true
    },
    hasData: function (a) {
      a = a.nodeType ? dX.cache[a[dX.expando]] : a[dX.expando];
      return !!a && !c1(a)
    },
    data: function (b, c, a) {
      return dg(b, c, a, false)
    },
    removeData: function (a, b) {
      return cD(a, b, false)
    },
    _data: function (b, c, a) {
      return dg(b, c, a, true)
    },
    _removeData: function (a, b) {
      return cD(a, b, true)
    },
    acceptData: function (a) {
      var b = a.nodeName && dX.noData[a.nodeName.toLowerCase()];
      return !b || b !== true && a.getAttribute("classid") === b
    }
  });
  dX.fn.extend({
    data: function (b, g) {
      var d, f, a = this[0],
        c = 0,
        h = null;
      if (b === ey) {
        if (this.length) {
          h = dX.data(a);
          if (a.nodeType === 1 && !dX._data(a, "parsedAttrs")) {
            d = a.attributes;
            for (; c < d.length; c++) {
              f = d[c].name;
              if (!f.indexOf("data-")) {
                f = dX.camelCase(f.substring(5));
                cz(a, f, h[f])
              }
            }
            dX._data(a, "parsedAttrs", true)
          }
        }
        return h
      }
      if (typeof b === "object") {
        return this.each(function () {
          dX.data(this, b)
        })
      }
      return dX.access(this, function (i) {
        if (i === ey) {
          return a ? cz(a, b, dX.data(a, b)) : null
        }
        this.each(function () {
          dX.data(this, b, i)
        })
      }, null, g, arguments.length > 1, null, true)
    },
    removeData: function (a) {
      return this.each(function () {
        dX.removeData(this, a)
      })
    }
  });

  function cz(b, c, a) {
    if (a === ey && b.nodeType === 1) {
      var d = "data-" + c.replace(eq, "-$1").toLowerCase();
      a = b.getAttribute(d);
      if (typeof a === "string") {
        try {
          a = a === "true" ? true : a === "false" ? false : a === "null" ? null : +a + "" === a ? +a : cB.test(a) ? dX.parseJSON(a) : a
        } catch (f) {}
        dX.data(b, c, a)
      } else {
        a = ey
      }
    }
    return a
  }

  function c1(a) {
    var b;
    for (b in a) {
      if (b === "data" && dX.isEmptyObject(a[b])) {
        continue
      }
      if (b !== "toJSON") {
        return false
      }
    }
    return true
  }
  dX.extend({
    queue: function (b, c, a) {
      var d;
      if (b) {
        c = (c || "fx") + "queue";
        d = dX._data(b, c);
        if (a) {
          if (!d || dX.isArray(a)) {
            d = dX._data(b, c, dX.makeArray(a))
          } else {
            d.push(a)
          }
        }
        return d || []
      }
    },
    dequeue: function (h, a) {
      a = a || "fx";
      var d = dX.queue(h, a),
        g = d.length,
        b = d.shift(),
        f = dX._queueHooks(h, a),
        c = function () {
          dX.dequeue(h, a)
        };
      if (b === "inprogress") {
        b = d.shift();
        g--
      }
      f.cur = b;
      if (b) {
        if (a === "fx") {
          d.unshift("inprogress")
        }
        delete f.stop;
        b.call(h, c, f)
      }
      if (!g && f) {
        f.empty.fire()
      }
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return dX._data(a, c) || dX._data(a, c, {
        empty: dX.Callbacks("once memory").add(function () {
          dX._removeData(a, b + "queue");
          dX._removeData(a, c)
        })
      })
    }
  });
  dX.fn.extend({
    queue: function (c, b) {
      var a = 2;
      if (typeof c !== "string") {
        b = c;
        c = "fx";
        a--
      }
      if (arguments.length < a) {
        return dX.queue(this[0], c)
      }
      return b === ey ? this : this.each(function () {
        var d = dX.queue(this, c, b);
        dX._queueHooks(this, c);
        if (c === "fx" && d[0] !== "inprogress") {
          dX.dequeue(this, c)
        }
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        dX.dequeue(this, a)
      })
    },
    delay: function (a, b) {
      a = dX.fx ? dX.fx.speeds[a] || a : a;
      b = b || "fx";
      return this.queue(b, function (d, f) {
        var c = setTimeout(d, a);
        f.stop = function () {
          clearTimeout(c)
        }
      })
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", [])
    },
    promise: function (c, h) {
      var d, b = 1,
        g = dX.Deferred(),
        i = this,
        f = this.length,
        a = function () {
          if (!(--b)) {
            g.resolveWith(i, [i])
          }
        };
      if (typeof c !== "string") {
        h = c;
        c = ey
      }
      c = c || "fx";
      while (f--) {
        d = dX._data(i[f], c + "queueHooks");
        if (d && d.empty) {
          b++;
          d.empty.add(a)
        }
      }
      a();
      return g.promise(h)
    }
  });
  var e, dt, dR = /[\t\r\n]/g,
    dQ = /\r/g,
    ez = /^(?:input|select|textarea|button|object)$/i,
    dj = /^(?:a|area)$/i,
    c5 = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    dE = /^(?:checked|selected)$/i,
    dL = dX.support.getSetAttribute,
    d5 = dX.support.input;
  dX.fn.extend({
    attr: function (b, a) {
      return dX.access(this, dX.attr, b, a, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        dX.removeAttr(this, a)
      })
    },
    prop: function (b, a) {
      return dX.access(this, dX.prop, b, a, arguments.length > 1)
    },
    removeProp: function (a) {
      a = dX.propFix[a] || a;
      return this.each(function () {
        try {
          this[a] = ey;
          delete this[a]
        } catch (b) {}
      })
    },
    addClass: function (b) {
      var j, f, a, g, i, h = 0,
        d = this.length,
        c = typeof b === "string" && b;
      if (dX.isFunction(b)) {
        return this.each(function (k) {
          dX(this).addClass(b.call(this, k, this.className))
        })
      }
      if (c) {
        j = (b || "").match(d6) || [];
        for (; h < d; h++) {
          f = this[h];
          a = f.nodeType === 1 && (f.className ? (" " + f.className + " ").replace(dR, " ") : " ");
          if (a) {
            i = 0;
            while ((g = j[i++])) {
              if (a.indexOf(" " + g + " ") < 0) {
                a += g + " "
              }
            }
            f.className = dX.trim(a)
          }
        }
      }
      return this
    },
    removeClass: function (b) {
      var j, f, a, g, i, h = 0,
        d = this.length,
        c = arguments.length === 0 || typeof b === "string" && b;
      if (dX.isFunction(b)) {
        return this.each(function (k) {
          dX(this).removeClass(b.call(this, k, this.className))
        })
      }
      if (c) {
        j = (b || "").match(d6) || [];
        for (; h < d; h++) {
          f = this[h];
          a = f.nodeType === 1 && (f.className ? (" " + f.className + " ").replace(dR, " ") : "");
          if (a) {
            i = 0;
            while ((g = j[i++])) {
              while (a.indexOf(" " + g + " ") >= 0) {
                a = a.replace(" " + g + " ", " ")
              }
            }
            f.className = b ? dX.trim(a) : ""
          }
        }
      }
      return this
    },
    toggleClass: function (a, c) {
      var b = typeof a,
        d = typeof c === "boolean";
      if (dX.isFunction(a)) {
        return this.each(function (f) {
          dX(this).toggleClass(a.call(this, f, this.className, c), c)
        })
      }
      return this.each(function () {
        if (b === "string") {
          var i, j = 0,
            f = dX(this),
            h = c,
            g = a.match(d6) || [];
          while ((i = g[j++])) {
            h = d ? h : !f.hasClass(i);
            f[h ? "addClass" : "removeClass"](i)
          }
        } else {
          if (b === "undefined" || b === "boolean") {
            if (this.className) {
              dX._data(this, "__className__", this.className)
            }
            this.className = this.className || a === false ? "" : dX._data(this, "__className__") || ""
          }
        }
      })
    },
    hasClass: function (d) {
      var a = " " + d + " ",
        b = 0,
        c = this.length;
      for (; b < c; b++) {
        if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(dR, " ").indexOf(a) >= 0) {
          return true
        }
      }
      return false
    },
    val: function (b) {
      var f, d, a, c = this[0];
      if (!arguments.length) {
        if (c) {
          f = dX.valHooks[c.type] || dX.valHooks[c.nodeName.toLowerCase()];
          if (f && "get" in f && (d = f.get(c, "value")) !== ey) {
            return d
          }
          d = c.value;
          return typeof d === "string" ? d.replace(dQ, "") : d == null ? "" : d
        }
        return
      }
      a = dX.isFunction(b);
      return this.each(function (h) {
        var g, i = dX(this);
        if (this.nodeType !== 1) {
          return
        }
        if (a) {
          g = b.call(this, h, i.val())
        } else {
          g = b
        }
        if (g == null) {
          g = ""
        } else {
          if (typeof g === "number") {
            g += ""
          } else {
            if (dX.isArray(g)) {
              g = dX.map(g, function (j) {
                return j == null ? "" : j + ""
              })
            }
          }
        }
        f = dX.valHooks[this.type] || dX.valHooks[this.nodeName.toLowerCase()];
        if (!f || !("set" in f) || f.set(this, g, "value") === ey) {
          this.value = g
        }
      })
    }
  });
  dX.extend({
    valHooks: {
      option: {
        get: function (b) {
          var a = b.attributes.value;
          return !a || a.specified ? b.value : b.text
        }
      },
      select: {
        get: function (f) {
          var c, i, a = f.options,
            g = f.selectedIndex,
            h = f.type === "select-one" || g < 0,
            b = h ? null : [],
            d = h ? g + 1 : a.length,
            j = g < 0 ? d : h ? g : 0;
          for (; j < d; j++) {
            i = a[j];
            if ((i.selected || j === g) && (dX.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !dX.nodeName(i.parentNode, "optgroup"))) {
              c = dX(i).val();
              if (h) {
                return c
              }
              b.push(c)
            }
          }
          return b
        },
        set: function (b, a) {
          var c = dX.makeArray(a);
          dX(b).find("option").each(function () {
            this.selected = dX.inArray(dX(this).val(), c) >= 0
          });
          if (!c.length) {
            b.selectedIndex = -1
          }
          return c
        }
      }
    },
    attr: function (h, b, g) {
      var c, f, a, d = h.nodeType;
      if (!h || d === 3 || d === 8 || d === 2) {
        return
      }
      if (typeof h.getAttribute === "undefined") {
        return dX.prop(h, b, g)
      }
      a = d !== 1 || !dX.isXMLDoc(h);
      if (a) {
        b = b.toLowerCase();
        f = dX.attrHooks[b] || (c5.test(b) ? dt : e)
      }
      if (g !== ey) {
        if (g === null) {
          dX.removeAttr(h, b)
        } else {
          if (f && a && "set" in f && (c = f.set(h, g, b)) !== ey) {
            return c
          } else {
            h.setAttribute(b, g + "");
            return g
          }
        }
      } else {
        if (f && a && "get" in f && (c = f.get(h, b)) !== null) {
          return c
        } else {
          if (typeof h.getAttribute !== "undefined") {
            c = h.getAttribute(b)
          }
          return c == null ? ey : c
        }
      }
    },
    removeAttr: function (c, a) {
      var f, b, d = 0,
        g = a && a.match(d6);
      if (g && c.nodeType === 1) {
        while ((f = g[d++])) {
          b = dX.propFix[f] || f;
          if (c5.test(f)) {
            if (!dL && dE.test(f)) {
              c[dX.camelCase("default-" + f)] = c[b] = false
            } else {
              c[b] = false
            }
          } else {
            dX.attr(c, f, "")
          }
          c.removeAttribute(dL ? f : b)
        }
      }
    },
    attrHooks: {
      type: {
        set: function (c, b) {
          if (!dX.support.radioValue && b === "radio" && dX.nodeName(c, "input")) {
            var a = c.value;
            c.setAttribute("type", b);
            if (a) {
              c.value = a
            }
            return b
          }
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function (h, b, g) {
      var c, f, a, d = h.nodeType;
      if (!h || d === 3 || d === 8 || d === 2) {
        return
      }
      a = d !== 1 || !dX.isXMLDoc(h);
      if (a) {
        b = dX.propFix[b] || b;
        f = dX.propHooks[b]
      }
      if (g !== ey) {
        if (f && "set" in f && (c = f.set(h, g, b)) !== ey) {
          return c
        } else {
          return (h[b] = g)
        }
      } else {
        if (f && "get" in f && (c = f.get(h, b)) !== null) {
          return c
        } else {
          return h[b]
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = a.getAttributeNode("tabindex");
          return b && b.specified ? parseInt(b.value, 10) : ez.test(a.nodeName) || dj.test(a.nodeName) && a.href ? 0 : ey
        }
      }
    }
  });
  dt = {
    get: function (b, d) {
      var a = dX.prop(b, d),
        f = typeof a === "boolean" && b.getAttribute(d),
        c = typeof a === "boolean" ? d5 && dL ? f != null : dE.test(d) ? b[dX.camelCase("default-" + d)] : !! f : b.getAttributeNode(d);
      return c && c.value !== false ? d.toLowerCase() : ey
    },
    set: function (b, a, c) {
      if (a === false) {
        dX.removeAttr(b, c)
      } else {
        if (d5 && dL || !dE.test(c)) {
          b.setAttribute(!dL && dX.propFix[c] || c, c)
        } else {
          b[dX.camelCase("default-" + c)] = b[c] = true
        }
      }
      return c
    }
  };
  if (!d5 || !dL) {
    dX.attrHooks.value = {
      get: function (a, b) {
        var c = a.getAttributeNode(b);
        return dX.nodeName(a, "input") ? a.defaultValue : c && c.specified ? c.value : ey
      },
      set: function (b, a, c) {
        if (dX.nodeName(b, "input")) {
          b.defaultValue = a
        } else {
          return e && e.set(b, a, c)
        }
      }
    }
  }
  if (!dL) {
    e = dX.valHooks.button = {
      get: function (a, b) {
        var c = a.getAttributeNode(b);
        return c && (b === "id" || b === "name" || b === "coords" ? c.value !== "" : c.specified) ? c.value : ey
      },
      set: function (b, a, c) {
        var d = b.getAttributeNode(c);
        if (!d) {
          b.setAttributeNode((d = b.ownerDocument.createAttribute(c)))
        }
        d.value = a += "";
        return c === "value" || a === b.getAttribute(c) ? a : ey
      }
    };
    dX.attrHooks.contenteditable = {
      get: e.get,
      set: function (b, a, c) {
        e.set(b, a === "" ? false : a, c)
      }
    };
    dX.each(["width", "height"], function (a, b) {
      dX.attrHooks[b] = dX.extend(dX.attrHooks[b], {
        set: function (d, c) {
          if (c === "") {
            d.setAttribute(b, "auto");
            return c
          }
        }
      })
    })
  }
  if (!dX.support.hrefNormalized) {
    dX.each(["href", "src", "width", "height"], function (a, b) {
      dX.attrHooks[b] = dX.extend(dX.attrHooks[b], {
        get: function (c) {
          var d = c.getAttribute(b, 2);
          return d == null ? ey : d
        }
      })
    });
    dX.each(["href", "src"], function (a, b) {
      dX.propHooks[b] = {
        get: function (c) {
          return c.getAttribute(b, 4)
        }
      }
    })
  }
  if (!dX.support.style) {
    dX.attrHooks.style = {
      get: function (a) {
        return a.style.cssText || ey
      },
      set: function (b, a) {
        return (b.style.cssText = a + "")
      }
    }
  }
  if (!dX.support.optSelected) {
    dX.propHooks.selected = dX.extend(dX.propHooks.selected, {
      get: function (a) {
        var b = a.parentNode;
        if (b) {
          b.selectedIndex;
          if (b.parentNode) {
            b.parentNode.selectedIndex
          }
        }
        return null
      }
    })
  }
  if (!dX.support.enctype) {
    dX.propFix.enctype = "encoding"
  }
  if (!dX.support.checkOn) {
    dX.each(["radio", "checkbox"], function () {
      dX.valHooks[this] = {
        get: function (a) {
          return a.getAttribute("value") === null ? "on" : a.value
        }
      }
    })
  }
  dX.each(["radio", "checkbox"], function () {
    dX.valHooks[this] = dX.extend(dX.valHooks[this], {
      set: function (b, a) {
        if (dX.isArray(a)) {
          return (b.checked = dX.inArray(dX(b).val(), a) >= 0)
        }
      }
    })
  });
  var d0 = /^(?:input|select|textarea)$/i,
    b4 = /^key/,
    dO = /^(?:mouse|contextmenu)|click/,
    ec = /^(?:focusinfocus|focusoutblur)$/,
    cE = /^([^.]*)(?:\.(.+)|)$/;

  function cU() {
    return true
  }

  function cH() {
    return false
  }
  dX.event = {
    global: {},
    add: function (o, i, a, l, n) {
      var q, j, k, b, c, d, g, p, f, m, r, h = o.nodeType !== 3 && o.nodeType !== 8 && dX._data(o);
      if (!h) {
        return
      }
      if (a.handler) {
        q = a;
        a = q.handler;
        n = q.selector
      }
      if (!a.guid) {
        a.guid = dX.guid++
      }
      if (!(b = h.events)) {
        b = h.events = {}
      }
      if (!(j = h.handle)) {
        j = h.handle = function (s) {
          return typeof dX !== "undefined" && (!s || dX.event.triggered !== s.type) ? dX.event.dispatch.apply(j.elem, arguments) : ey
        };
        j.elem = o
      }
      i = (i || "").match(d6) || [""];
      c = i.length;
      while (c--) {
        k = cE.exec(i[c]) || [];
        f = r = k[1];
        m = (k[2] || "").split(".").sort();
        g = dX.event.special[f] || {};
        f = (n ? g.delegateType : g.bindType) || f;
        g = dX.event.special[f] || {};
        d = dX.extend({
          type: f,
          origType: r,
          data: l,
          handler: a,
          guid: a.guid,
          selector: n,
          needsContext: n && dX.expr.match.needsContext.test(n),
          namespace: m.join(".")
        }, q);
        if (!(p = b[f])) {
          p = b[f] = [];
          p.delegateCount = 0;
          if (!g.setup || g.setup.call(o, l, m, j) === false) {
            if (o.addEventListener) {
              o.addEventListener(f, j, false)
            } else {
              if (o.attachEvent) {
                o.attachEvent("on" + f, j)
              }
            }
          }
        }
        if (g.add) {
          g.add.call(o, d);
          if (!d.handler.guid) {
            d.handler.guid = a.guid
          }
        }
        if (n) {
          p.splice(p.delegateCount++, 0, d)
        } else {
          p.push(d)
        }
        dX.event.global[f] = true
      }
      o = null
    },
    remove: function (p, i, a, o, j) {
      var l, n, k, b, c, d, g, q, f, m, r, h = dX.hasData(p) && dX._data(p);
      if (!h || !(b = h.events)) {
        return
      }
      i = (i || "").match(d6) || [""];
      c = i.length;
      while (c--) {
        k = cE.exec(i[c]) || [];
        f = r = k[1];
        m = (k[2] || "").split(".").sort();
        if (!f) {
          for (f in b) {
            dX.event.remove(p, f + i[c], a, o, true)
          }
          continue
        }
        g = dX.event.special[f] || {};
        f = (o ? g.delegateType : g.bindType) || f;
        q = b[f] || [];
        k = k[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)");
        n = l = q.length;
        while (l--) {
          d = q[l];
          if ((j || r === d.origType) && (!a || a.guid === d.guid) && (!k || k.test(d.namespace)) && (!o || o === d.selector || o === "**" && d.selector)) {
            q.splice(l, 1);
            if (d.selector) {
              q.delegateCount--
            }
            if (g.remove) {
              g.remove.call(p, d)
            }
          }
        }
        if (n && !q.length) {
          if (!g.teardown || g.teardown.call(p, m, h.handle) === false) {
            dX.removeEvent(p, f, h.handle)
          }
          delete b[f]
        }
      }
      if (dX.isEmptyObject(b)) {
        delete h.handle;
        dX._removeData(p, "events")
      }
    },
    trigger: function (p, k, m, a) {
      var j, c, i, b, n, h, f, l = [m || cm],
        d = p.type || p,
        o = p.namespace ? p.namespace.split(".") : [];
      c = i = m = m || cm;
      if (m.nodeType === 3 || m.nodeType === 8) {
        return
      }
      if (ec.test(d + dX.event.triggered)) {
        return
      }
      if (d.indexOf(".") >= 0) {
        o = d.split(".");
        d = o.shift();
        o.sort()
      }
      n = d.indexOf(":") < 0 && "on" + d;
      p = p[dX.expando] ? p : new dX.Event(d, typeof p === "object" && p);
      p.isTrigger = true;
      p.namespace = o.join(".");
      p.namespace_re = p.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      p.result = ey;
      if (!p.target) {
        p.target = m
      }
      k = k == null ? [p] : dX.makeArray(k, [p]);
      f = dX.event.special[d] || {};
      if (!a && f.trigger && f.trigger.apply(m, k) === false) {
        return
      }
      if (!a && !f.noBubble && !dX.isWindow(m)) {
        b = f.delegateType || d;
        if (!ec.test(b + d)) {
          c = c.parentNode
        }
        for (; c; c = c.parentNode) {
          l.push(c);
          i = c
        }
        if (i === (m.ownerDocument || cm)) {
          l.push(i.defaultView || i.parentWindow || b5)
        }
      }
      j = 0;
      while ((c = l[j++]) && !p.isPropagationStopped()) {
        p.type = j > 1 ? b : f.bindType || d;
        h = (dX._data(c, "events") || {})[p.type] && dX._data(c, "handle");
        if (h) {
          h.apply(c, k)
        }
        h = n && c[n];
        if (h && dX.acceptData(c) && h.apply && h.apply(c, k) === false) {
          p.preventDefault()
        }
      }
      p.type = d;
      if (!a && !p.isDefaultPrevented()) {
        if ((!f._default || f._default.apply(m.ownerDocument, k) === false) && !(d === "click" && dX.nodeName(m, "a")) && dX.acceptData(m)) {
          if (n && m[d] && !dX.isWindow(m)) {
            i = m[n];
            if (i) {
              m[n] = null
            }
            dX.event.triggered = d;
            try {
              m[d]()
            } catch (g) {}
            dX.event.triggered = ey;
            if (i) {
              m[n] = i
            }
          }
        }
      }
      return p.result
    },
    dispatch: function (g) {
      g = dX.event.fix(g);
      var h, i, f, k, a, b = [],
        c = b3.call(arguments),
        j = (dX._data(this, "events") || {})[g.type] || [],
        d = dX.event.special[g.type] || {};
      c[0] = g;
      g.delegateTarget = this;
      if (d.preDispatch && d.preDispatch.call(this, g) === false) {
        return
      }
      b = dX.event.handlers.call(this, g, j);
      h = 0;
      while ((k = b[h++]) && !g.isPropagationStopped()) {
        g.currentTarget = k.elem;
        i = 0;
        while ((a = k.handlers[i++]) && !g.isImmediatePropagationStopped()) {
          if (!g.namespace_re || g.namespace_re.test(a.namespace)) {
            g.handleObj = a;
            g.data = a.data;
            f = ((dX.event.special[a.origType] || {}).handle || a.handler).apply(k.elem, c);
            if (f !== ey) {
              if ((g.result = f) === false) {
                g.preventDefault();
                g.stopPropagation()
              }
            }
          }
        }
      }
      if (d.postDispatch) {
        d.postDispatch.call(this, g)
      }
      return g.result
    },
    handlers: function (f, i) {
      var g, d, j, b, c = [],
        h = i.delegateCount,
        a = f.target;
      if (h && a.nodeType && (!f.button || f.type !== "click")) {
        for (; a != this; a = a.parentNode || this) {
          if (a.disabled !== true || f.type !== "click") {
            d = [];
            for (g = 0; g < h; g++) {
              b = i[g];
              j = b.selector + " ";
              if (d[j] === ey) {
                d[j] = b.needsContext ? dX(j, this).index(a) >= 0 : dX.find(j, this, null, [a]).length
              }
              if (d[j]) {
                d.push(b)
              }
            }
            if (d.length) {
              c.push({
                elem: a,
                handlers: d
              })
            }
          }
        }
      }
      if (h < i.length) {
        c.push({
          elem: this,
          handlers: i.slice(h)
        })
      }
      return c
    },
    fix: function (c) {
      if (c[dX.expando]) {
        return c
      }
      var d, g, f = c,
        b = dX.event.fixHooks[c.type] || {},
        a = b.props ? this.props.concat(b.props) : this.props;
      c = new dX.Event(f);
      d = a.length;
      while (d--) {
        g = a[d];
        c[g] = f[g]
      }
      if (!c.target) {
        c.target = f.srcElement || cm
      }
      if (c.target.nodeType === 3) {
        c.target = c.target.parentNode
      }
      c.metaKey = !! c.metaKey;
      return b.filter ? b.filter(c, f) : c
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        if (a.which == null) {
          a.which = b.charCode != null ? b.charCode : b.keyCode
        }
        return a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (b, c) {
        var a, h, f, d = c.button,
          g = c.fromElement;
        if (b.pageX == null && c.clientX != null) {
          a = b.target.ownerDocument || cm;
          h = a.documentElement;
          f = a.body;
          b.pageX = c.clientX + (h && h.scrollLeft || f && f.scrollLeft || 0) - (h && h.clientLeft || f && f.clientLeft || 0);
          b.pageY = c.clientY + (h && h.scrollTop || f && f.scrollTop || 0) - (h && h.clientTop || f && f.clientTop || 0)
        }
        if (!b.relatedTarget && g) {
          b.relatedTarget = g === b.target ? c.toElement : g
        }
        if (!b.which && d !== ey) {
          b.which = (d & 1 ? 1 : (d & 2 ? 3 : (d & 4 ? 2 : 0)))
        }
        return b
      }
    },
    special: {
      load: {
        noBubble: true
      },
      click: {
        trigger: function () {
          if (dX.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false
          }
        }
      },
      focus: {
        trigger: function () {
          if (this !== cm.activeElement && this.focus) {
            try {
              this.focus();
              return false
            } catch (a) {}
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === cm.activeElement && this.blur) {
            this.blur();
            return false
          }
        },
        delegateType: "focusout"
      },
      beforeunload: {
        postDispatch: function (a) {
          if (a.result !== ey) {
            a.originalEvent.returnValue = a.result
          }
        }
      }
    },
    simulate: function (c, a, b, d) {
      var f = dX.extend(new dX.Event(), b, {
        type: c,
        isSimulated: true,
        originalEvent: {}
      });
      if (d) {
        dX.event.trigger(f, null, a)
      } else {
        dX.event.dispatch.call(a, f)
      }
      if (f.isDefaultPrevented()) {
        b.preventDefault()
      }
    }
  };
  dX.removeEvent = cm.removeEventListener ?
  function (b, c, a) {
    if (b.removeEventListener) {
      b.removeEventListener(c, a, false)
    }
  } : function (b, c, a) {
    var d = "on" + c;
    if (b.detachEvent) {
      if (typeof b[d] === "undefined") {
        b[d] = null
      }
      b.detachEvent(d, a)
    }
  };
  dX.Event = function (a, b) {
    if (!(this instanceof dX.Event)) {
      return new dX.Event(a, b)
    }
    if (a && a.type) {
      this.originalEvent = a;
      this.type = a.type;
      this.isDefaultPrevented = (a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault()) ? cU : cH
    } else {
      this.type = a
    }
    if (b) {
      dX.extend(this, b)
    }
    this.timeStamp = a && a.timeStamp || dX.now();
    this[dX.expando] = true
  };
  dX.Event.prototype = {
    isDefaultPrevented: cH,
    isPropagationStopped: cH,
    isImmediatePropagationStopped: cH,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = cU;
      if (!a) {
        return
      }
      if (a.preventDefault) {
        a.preventDefault()
      } else {
        a.returnValue = false
      }
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = cU;
      if (!a) {
        return
      }
      if (a.stopPropagation) {
        a.stopPropagation()
      }
      a.cancelBubble = true
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = cU;
      this.stopPropagation()
    }
  };
  dX.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (a, b) {
    dX.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (c) {
        var f, g = this,
          h = c.relatedTarget,
          d = c.handleObj;
        if (!h || (h !== g && !dX.contains(g, h))) {
          c.type = d.origType;
          f = d.handler.apply(this, arguments);
          c.type = b
        }
        return f
      }
    }
  });
  if (!dX.support.submitBubbles) {
    dX.event.special.submit = {
      setup: function () {
        if (dX.nodeName(this, "form")) {
          return false
        }
        dX.event.add(this, "click._submit keypress._submit", function (a) {
          var b = a.target,
            c = dX.nodeName(b, "input") || dX.nodeName(b, "button") ? b.form : ey;
          if (c && !dX._data(c, "submitBubbles")) {
            dX.event.add(c, "submit._submit", function (d) {
              d._submit_bubble = true
            });
            dX._data(c, "submitBubbles", true)
          }
        })
      },
      postDispatch: function (a) {
        if (a._submit_bubble) {
          delete a._submit_bubble;
          if (this.parentNode && !a.isTrigger) {
            dX.event.simulate("submit", this.parentNode, a, true)
          }
        }
      },
      teardown: function () {
        if (dX.nodeName(this, "form")) {
          return false
        }
        dX.event.remove(this, "._submit")
      }
    }
  }
  if (!dX.support.changeBubbles) {
    dX.event.special.change = {
      setup: function () {
        if (d0.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            dX.event.add(this, "propertychange._change", function (a) {
              if (a.originalEvent.propertyName === "checked") {
                this._just_changed = true
              }
            });
            dX.event.add(this, "click._change", function (a) {
              if (this._just_changed && !a.isTrigger) {
                this._just_changed = false
              }

              dX.event.simulate("change", this, a, true)
            })
          }
          return false
        }
        dX.event.add(this, "beforeactivate._change", function (a) {
          var b = a.target;
          if (d0.test(b.nodeName) && !dX._data(b, "changeBubbles")) {
            dX.event.add(b, "change._change", function (c) {
              if (this.parentNode && !c.isSimulated && !c.isTrigger) {
                dX.event.simulate("change", this.parentNode, c, true)
              }
            });
            dX._data(b, "changeBubbles", true)
          }
        })
      },
      handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || (b.type !== "radio" && b.type !== "checkbox")) {
          return a.handleObj.handler.apply(this, arguments)
        }
      },
      teardown: function () {
        dX.event.remove(this, "._change");
        return !d0.test(this.nodeName)
      }
    }
  }
  if (!dX.support.focusinBubbles) {
    dX.each({
      focus: "focusin",
      blur: "focusout"
    }, function (a, d) {
      var c = 0,
        b = function (f) {
          dX.event.simulate(d, f.target, dX.event.fix(f), true)
        };
      dX.event.special[d] = {
        setup: function () {
          if (c++ === 0) {
            cm.addEventListener(a, b, true)
          }
        },
        teardown: function () {
          if (--c === 0) {
            cm.removeEventListener(a, b, true)
          }
        }
      }
    })
  }
  dX.fn.extend({
    on: function (c, f, h, a, d) {
      var g, b;
      if (typeof c === "object") {
        if (typeof f !== "string") {
          h = h || f;
          f = ey
        }
        for (b in c) {
          this.on(b, f, h, c[b], d)
        }
        return this
      }
      if (h == null && a == null) {
        a = f;
        h = f = ey
      } else {
        if (a == null) {
          if (typeof f === "string") {
            a = h;
            h = ey
          } else {
            a = h;
            h = f;
            f = ey
          }
        }
      }
      if (a === false) {
        a = cH
      } else {
        if (!a) {
          return this
        }
      }
      if (d === 1) {
        g = a;
        a = function (i) {
          dX().off(i);
          return g.apply(this, arguments)
        };
        a.guid = g.guid || (g.guid = dX.guid++)
      }
      return this.each(function () {
        dX.event.add(this, c, a, h, f)
      })
    },
    one: function (c, d, a, b) {
      return this.on(c, d, a, b, 1)
    },
    off: function (c, f, a) {
      var d, b;
      if (c && c.preventDefault && c.handleObj) {
        d = c.handleObj;
        dX(c.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
        return this
      }
      if (typeof c === "object") {
        for (b in c) {
          this.off(b, f, c[b])
        }
        return this
      }
      if (f === false || typeof f === "function") {
        a = f;
        f = ey
      }
      if (a === false) {
        a = cH
      }
      return this.each(function () {
        dX.event.remove(this, c, a, f)
      })
    },
    bind: function (c, a, b) {
      return this.on(c, null, a, b)
    },
    unbind: function (b, a) {
      return this.off(b, null, a)
    },
    delegate: function (d, c, a, b) {
      return this.on(c, d, a, b)
    },
    undelegate: function (c, b, a) {
      return arguments.length === 1 ? this.off(c, "**") : this.off(b, c || "**", a)
    },
    trigger: function (b, a) {
      return this.each(function () {
        dX.event.trigger(b, a, this)
      })
    },
    triggerHandler: function (c, a) {
      var b = this[0];
      if (b) {
        return dX.event.trigger(c, a, b, true)
      }
    },
    hover: function (b, a) {
      return this.mouseenter(b).mouseleave(a || b)
    }
  });
  dX.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (a, b) {
    dX.fn[b] = function (c, d) {
      return arguments.length > 0 ? this.on(b, null, c, d) : this.trigger(b)
    };
    if (b4.test(b)) {
      dX.event.fixHooks[b] = dX.event.keyHooks
    }
    if (dO.test(b)) {
      dX.event.fixHooks[b] = dX.event.mouseHooks
    }
  });
  /*!
   * Sizzle CSS Selector Engine
   * Copyright 2012 jQuery Foundation and other contributors
   * Released under the MIT license
   * http://sizzlejs.com/
   */
  (function (ah, A) {
    var k, aq, u, aa, Y, P, O, a, M, g, t, E, I, ag, ar, ac, ae, am = "sizzle" + -(new Date()),
      Z = ah.document,
      d = {},
      c = 0,
      H = 0,
      ax = i(),
      an = i(),
      ab = i(),
      ai = typeof A,
      U = 1 << 31,
      ak = [],
      aj = ak.pop,
      ay = ak.push,
      v = ak.slice,
      at = ak.indexOf ||
    function (aB) {
      var aC = 0,
        aA = this.length;
      for (; aC < aA; aC++) {
        if (this[aC] === aB) {
          return aC
        }
      }
      return -1
    }, s = "[\\x20\\t\\r\\n\\f]", az = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", X = az.replace("w", "w#"), z = "([*^$|!~]?=)", ap = "\\[" + s + "*(" + az + ")" + s + "*(?:" + z + s + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + s + "*\\]", x = ":(" + az + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ap.replace(3, 8) + ")*)|.*)\\)|)", q = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g"), n = new RegExp("^" + s + "*," + s + "*"), h = new RegExp("^" + s + "*([\\x20\\t\\r\\n\\f>+~])" + s + "*"), S = new RegExp(x), R = new RegExp("^" + X + "$"), J = {
      ID: new RegExp("^#(" + az + ")"),
      CLASS: new RegExp("^\\.(" + az + ")"),
      NAME: new RegExp("^\\[name=['\"]?(" + az + ")['\"]?\\]"),
      TAG: new RegExp("^(" + az.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + ap),
      PSEUDO: new RegExp("^" + x),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)", "i"),
      needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)", "i")
    }, L = /[\x20\t\r\n\f]*[+~]/, V = /\{\s*\[native code\]\s*\}/, T = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, au = /^(?:input|select|textarea|button)$/i, w = /^h\d$/i, W = /'|\\/g, o = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, G = function (aB, aA) {
      var aC = "0x" + aA - 65536;
      return aC !== aC ? aA : aC < 0 ? String.fromCharCode(aC + 65536) : String.fromCharCode(aC >> 10 | 55296, aC & 1023 | 56320)
    };
    try {
      v.call(t.childNodes, 0)[0].nodeType
    } catch (af) {
      v = function (aC) {
        var aB, aA = [];
        for (;
        (aB = this[aC]); aC++) {
          aA.push(aB)
        }
        return aA
      }
    }

    function ad(aA) {
      return V.test(aA + "")
    }

    function i() {
      var aA, aB = [];
      return (aA = function (aD, aC) {
        if (aB.push(aD += " ") > u.cacheLength) {
          delete aA[aB.shift()]
        }
        return (aA[aD] = aC)
      })
    }

    function y(aA) {
      aA[am] = true;
      return aA
    }

    function F(aC) {
      var aA = g.createElement("div");
      try {
        return aC(aA)
      } catch (aB) {
        return false
      } finally {
        aA = null
      }
    }

    function m(aG, aO, aC, aA) {
      var aB, aK, aI, aE, aD, aL, aM, aJ, aN, aF;
      if ((aO ? aO.ownerDocument || aO : Z) !== g) {
        M(aO)
      }
      aO = aO || g;
      aC = aC || [];
      if (!aG || typeof aG !== "string") {
        return aC
      }
      if ((aE = aO.nodeType) !== 1 && aE !== 9) {
        return []
      }
      if (!E && !aA) {

        if ((aB = T.exec(aG))) {
          if ((aI = aB[1])) {
            if (aE === 9) {
              aK = aO.getElementById(aI);
              if (aK && aK.parentNode) {
                if (aK.id === aI) {
                  aC.push(aK);
                  return aC
                }
              } else {
                return aC
              }
            } else {
              if (aO.ownerDocument && (aK = aO.ownerDocument.getElementById(aI)) && ac(aO, aK) && aK.id === aI) {
                aC.push(aK);
                return aC
              }
            }
          } else {
            if (aB[2]) {
              ay.apply(aC, v.call(aO.getElementsByTagName(aG), 0));
              return aC
            } else {
              if ((aI = aB[3]) && d.getByClassName && aO.getElementsByClassName) {
                ay.apply(aC, v.call(aO.getElementsByClassName(aI), 0));
                return aC
              }
            }
          }
        }
        if (d.qsa && !I.test(aG)) {
          aM = true;
          aJ = am;
          aN = aO;
          aF = aE === 9 && aG;
          if (aE === 1 && aO.nodeName.toLowerCase() !== "object") {
            aL = C(aG);
            if ((aM = aO.getAttribute("id"))) {
              aJ = aM.replace(W, "\\$&")
            } else {
              aO.setAttribute("id", aJ)
            }
            aJ = "[id='" + aJ + "'] ";
            aD = aL.length;
            while (aD--) {
              aL[aD] = aJ + B(aL[aD])
            }
            aN = L.test(aG) && aO.parentNode || aO;
            aF = aL.join(",")
          }
          if (aF) {
            try {
              ay.apply(aC, v.call(aN.querySelectorAll(aF), 0));
              return aC
            } catch (aH) {} finally {
              if (!aM) {
                aO.removeAttribute("id")
              }
            }
          }
        }
      }
      return f(aG.replace(q, "$1"), aO, aC, aA)
    }
    Y = m.isXML = function (aA) {
      var aB = aA && (aA.ownerDocument || aA).documentElement;
      return aB ? aB.nodeName !== "HTML" : false
    };
    M = m.setDocument = function (aA) {
      var aB = aA ? aA.ownerDocument || aA : Z;
      if (aB === g || aB.nodeType !== 9 || !aB.documentElement) {
        return g
      }
      g = aB;
      t = aB.documentElement;
      E = Y(aB);
      d.tagNameNoComments = F(function (aC) {
        aC.appendChild(aB.createComment(""));
        return !aC.getElementsByTagName("*").length
      });
      d.attributes = F(function (aC) {
        aC.innerHTML = "<select></select>";
        var aD = typeof aC.lastChild.getAttribute("multiple");
        return aD !== "boolean" && aD !== "string"
      });
      d.getByClassName = F(function (aC) {
        aC.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
        if (!aC.getElementsByClassName || !aC.getElementsByClassName("e").length) {
          return false
        }
        aC.lastChild.className = "e";
        return aC.getElementsByClassName("e").length === 2
      });
      d.getByName = F(function (aC) {
        aC.id = am + 0;
        aC.innerHTML = "<a name='" + am + "'></a><div name='" + am + "'></div>";
        t.insertBefore(aC, t.firstChild);
        var aD = aB.getElementsByName && aB.getElementsByName(am).length === 2 + aB.getElementsByName(am + 0).length;
        d.getIdNotName = !aB.getElementById(am);
        t.removeChild(aC);
        return aD
      });
      u.attrHandle = F(function (aC) {
        aC.innerHTML = "<a href='#'></a>";
        return aC.firstChild && typeof aC.firstChild.getAttribute !== ai && aC.firstChild.getAttribute("href") === "#"
      }) ? {} : {
        href: function (aC) {
          return aC.getAttribute("href", 2)
        },
        type: function (aC) {
          return aC.getAttribute("type")
        }
      };
      if (d.getIdNotName) {
        u.find.ID = function (aC, aD) {
          if (typeof aD.getElementById !== ai && !E) {
            var aE = aD.getElementById(aC);
            return aE && aE.parentNode ? [aE] : []
          }
        };
        u.filter.ID = function (aC) {
          var aD = aC.replace(p, G);
          return function (aE) {
            return aE.getAttribute("id") === aD
          }
        }
      } else {
        u.find.ID = function (aC, aD) {
          if (typeof aD.getElementById !== ai && !E) {
            var aE = aD.getElementById(aC);
            return aE ? aE.id === aC || typeof aE.getAttributeNode !== ai && aE.getAttributeNode("id").value === aC ? [aE] : A : []
          }
        };
        u.filter.ID = function (aC) {
          var aD = aC.replace(p, G);
          return function (aE) {
            var aF = typeof aE.getAttributeNode !== ai && aE.getAttributeNode("id");
            return aF && aF.value === aD
          }
        }
      }
      u.find.TAG = d.tagNameNoComments ?
      function (aD, aC) {
        if (typeof aC.getElementsByTagName !== ai) {
          return aC.getElementsByTagName(aD)
        }
      } : function (aH, aD) {
        var aC, aE = [],
          aF = 0,
          aG = aD.getElementsByTagName(aH);
        if (aH === "*") {
          for (;
          (aC = aG[aF]); aF++) {
            if (aC.nodeType === 1) {
              aE.push(aC)
            }
          }
          return aE
        }
        return aG
      };
      u.find.NAME = d.getByName &&
      function (aD, aC) {
        if (typeof aC.getElementsByName !== ai) {
          return aC.getElementsByName(name)
        }
      };
      u.find.CLASS = d.getByClassName &&
      function (aC, aD) {
        if (typeof aD.getElementsByClassName !== ai && !E) {
          return aD.getElementsByClassName(aC)
        }
      };
      ag = [];
      I = [":focus"];
      if ((d.qsa = ad(aB.querySelectorAll))) {
        F(function (aC) {
          aC.innerHTML = "<select><option selected=''></option></select>";
          if (!aC.querySelectorAll("[selected]").length) {
            I.push("\\[" + s + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
          }
          if (!aC.querySelectorAll(":checked").length) {
            I.push(":checked")
          }
        });
        F(function (aC) {
          aC.innerHTML = "<input type='hidden' i=''/>";
          if (aC.querySelectorAll("[i^='']").length) {
            I.push("[*^$]=" + s + "*(?:\"\"|'')")
          }
          if (!aC.querySelectorAll(":enabled").length) {
            I.push(":enabled", ":disabled")
          }
          aC.querySelectorAll("*,:x");
          I.push(",.*:")
        })
      }
      if ((d.matchesSelector = ad((ar = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)))) {
        F(function (aC) {
          d.disconnectedMatch = ar.call(aC, "div");
          ar.call(aC, "[s!='']:x");
          ag.push("!=", x)
        })
      }
      I = new RegExp(I.join("|"));
      ag = new RegExp(ag.join("|"));
      ac = ad(t.contains) || t.compareDocumentPosition ?
      function (aE, aF) {
        var aC = aE.nodeType === 9 ? aE.documentElement : aE,
          aD = aF && aF.parentNode;
        return aE === aD || !! (aD && aD.nodeType === 1 && (aC.contains ? aC.contains(aD) : aE.compareDocumentPosition && aE.compareDocumentPosition(aD) & 16))
      } : function (aC, aD) {
        if (aD) {
          while ((aD = aD.parentNode)) {
            if (aD === aC) {
              return true
            }
          }
        }
        return false
      };
      ae = t.compareDocumentPosition ?
      function (aD, aE) {
        var aC;
        if (aD === aE) {
          O = true;
          return 0
        }
        if ((aC = aE.compareDocumentPosition && aD.compareDocumentPosition && aD.compareDocumentPosition(aE))) {
          if (aC & 1 || aD.parentNode && aD.parentNode.nodeType === 11) {
            if (aD === aB || ac(Z, aD)) {
              return -1
            }
            if (aE === aB || ac(Z, aE)) {
              return 1
            }
            return 0
          }
          return aC & 4 ? -1 : 1
        }
        return aD.compareDocumentPosition ? -1 : 1
      } : function (aI, aJ) {
        var aC, aF = 0,
          aD = aI.parentNode,
          aG = aJ.parentNode,
          aH = [aI],
          aE = [aJ];
        if (aI === aJ) {
          O = true;
          return 0
        } else {
          if (aI.sourceIndex && aJ.sourceIndex) {
            return (~aJ.sourceIndex || U) - (ac(Z, aI) && ~aI.sourceIndex || U)
          } else {
            if (!aD || !aG) {
              return aI === aB ? -1 : aJ === aB ? 1 : aD ? -1 : aG ? 1 : 0
            } else {
              if (aD === aG) {
                return aw(aI, aJ)
              }
            }
          }
        }
        aC = aI;
        while ((aC = aC.parentNode)) {
          aH.unshift(aC)
        }
        aC = aJ;
        while ((aC = aC.parentNode)) {
          aE.unshift(aC)
        }
        while (aH[aF] === aE[aF]) {
          aF++
        }
        return aF ? aw(aH[aF], aE[aF]) : aH[aF] === Z ? -1 : aE[aF] === Z ? 1 : 0
      };
      O = false;
      [0, 0].sort(ae);


      d.detectDuplicates = O;
      return g
    };
    m.matches = function (aB, aA) {
      return m(aB, null, null, aA)
    };
    m.matchesSelector = function (aC, aA) {
      if ((aC.ownerDocument || aC) !== g) {
        M(aC)
      }
      aA = aA.replace(o, "='$1']");
      if (d.matchesSelector && !E && (!ag || !ag.test(aA)) && !I.test(aA)) {
        try {
          var aD = ar.call(aC, aA);
          if (aD || d.disconnectedMatch || aC.document && aC.document.nodeType !== 11) {
            return aD
          }
        } catch (aB) {}
      }
      return m(aA, g, null, [aC]).length > 0
    };
    m.contains = function (aA, aB) {
      if ((aA.ownerDocument || aA) !== g) {
        M(aA)
      }
      return ac(aA, aB)
    };
    m.attr = function (aC, aB) {
      var aA;
      if ((aC.ownerDocument || aC) !== g) {
        M(aC)
      }
      if (!E) {
        aB = aB.toLowerCase()
      }
      if ((aA = u.attrHandle[aB])) {
        return aA(aC)
      }
      if (E || d.attributes) {
        return aC.getAttribute(aB)
      }
      return ((aA = aC.getAttributeNode(aB)) || aC.getAttribute(aB)) && aC[aB] === true ? aB : aA && aA.specified ? aA.value : null
    };
    m.error = function (aA) {
      throw new Error ("Syntax error, unrecognized expression: " + aA)
    };
    m.uniqueSort = function (aD) {
      var aB, aA = [],
        aE = 1,
        aC = 0;
      O = !d.detectDuplicates;
      aD.sort(ae);
      if (O) {
        for (;
        (aB = aD[aE]); aE++) {
          if (aB === aD[aE - 1]) {
            aC = aA.push(aE)
          }
        }
        while (aC--) {
          aD.splice(aA[aC], 1)
        }
      }
      return aD
    };

    function aw(aC, aB) {
      var aA = aC && aB && aC.nextSibling;
      for (; aA; aA = aA.nextSibling) {
        if (aA === aB) {
          return -1
        }
      }
      return aC ? 1 : -1
    }

    function l(aA) {
      return function (aB) {
        var aC = aB.nodeName.toLowerCase();
        return aC === "input" && aB.type === aA
      }
    }

    function av(aA) {
      return function (aB) {
        var aC = aB.nodeName.toLowerCase();
        return (aC === "input" || aC === "button") && aB.type === aA
      }
    }

    function ao(aA) {
      return y(function (aB) {
        aB = +aB;
        return y(function (aG, aC) {
          var aE, aF = aA([], aG.length, aB),
            aD = aF.length;
          while (aD--) {
            if (aG[(aE = aF[aD])]) {
              aG[aE] = !(aC[aE] = aG[aE])
            }
          }
        })
      })
    }
    aa = m.getText = function (aA) {
      var aB, aE = "",
        aD = 0,
        aC = aA.nodeType;
      if (!aC) {
        for (;
        (aB = aA[aD]); aD++) {
          aE += aa(aB)
        }
      } else {
        if (aC === 1 || aC === 9 || aC === 11) {
          if (typeof aA.textContent === "string") {
            return aA.textContent
          } else {
            for (aA = aA.firstChild; aA; aA = aA.nextSibling) {
              aE += aa(aA)
            }
          }
        } else {
          if (aC === 3 || aC === 4) {
            return aA.nodeValue
          }
        }
      }
      return aE
    };
    u = m.selectors = {
      cacheLength: 50,
      createPseudo: y,
      match: J,
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (aA) {
          aA[1] = aA[1].replace(p, G);
          aA[3] = (aA[4] || aA[5] || "").replace(p, G);
          if (aA[2] === "~=") {
            aA[3] = " " + aA[3] + " "
          }
          return aA.slice(0, 4)
        },
        CHILD: function (aA) {
          aA[1] = aA[1].toLowerCase();
          if (aA[1].slice(0, 3) === "nth") {
            if (!aA[3]) {
              m.error(aA[0])
            }
            aA[4] = +(aA[4] ? aA[5] + (aA[6] || 1) : 2 * (aA[3] === "even" || aA[3] === "odd"));
            aA[5] = +((aA[7] + aA[8]) || aA[3] === "odd")
          } else {
            if (aA[3]) {
              m.error(aA[0])
            }
          }
          return aA
        },
        PSEUDO: function (aC) {
          var aB, aA = !aC[5] && aC[2];
          if (J.CHILD.test(aC[0])) {
            return null
          }
          if (aC[4]) {
            aC[2] = aC[4]
          } else {
            if (aA && S.test(aA) && (aB = C(aA, true)) && (aB = aA.indexOf(")", aA.length - aB) - aA.length)) {
              aC[0] = aC[0].slice(0, aB);
              aC[2] = aA.slice(0, aB)
            }
          }
          return aC.slice(0, 3)
        }
      },
      filter: {
        TAG: function (aA) {
          if (aA === "*") {
            return function () {
              return true
            }
          }
          aA = aA.replace(p, G).toLowerCase();
          return function (aB) {
            return aB.nodeName && aB.nodeName.toLowerCase() === aA
          }
        },
        CLASS: function (aA) {
          var aB = ax[aA + " "];
          return aB || (aB = new RegExp("(^|" + s + ")" + aA + "(" + s + "|$)")) && ax(aA, function (aC) {
            return aB.test(aC.className || (typeof aC.getAttribute !== ai && aC.getAttribute("class")) || "")
          })
        },
        ATTR: function (aB, aC, aA) {
          return function (aD) {
            var aE = m.attr(aD, aB);
            if (aE == null) {
              return aC === "!="
            }
            if (!aC) {
              return true
            }
            aE += "";
            return aC === "=" ? aE === aA : aC === "!=" ? aE !== aA : aC === "^=" ? aA && aE.indexOf(aA) === 0 : aC === "*=" ? aA && aE.indexOf(aA) > -1 : aC === "$=" ? aA && aE.substr(aE.length - aA.length) === aA : aC === "~=" ? (" " + aE + " ").indexOf(aA) > -1 : aC === "|=" ? aE === aA || aE.substr(0, aA.length + 1) === aA + "-" : false
          }
        },
        CHILD: function (aH, aD, aE, aC, aG) {
          var aA = aH.slice(0, 3) !== "nth",
            aF = aH.slice(-4) !== "last",
            aB = aD === "of-type";
          return aC === 1 && aG === 0 ?
          function (aI) {
            return !!aI.parentNode
          } : function (aL, aN, aI) {
            var aR, aS, aK, aT, aJ, aO, aM = aA !== aF ? "nextSibling" : "previousSibling",
              aU = aL.parentNode,
              aP = aB && aL.nodeName.toLowerCase(),
              aQ = !aI && !aB;
            if (aU) {
              if (aA) {
                while (aM) {
                  aK = aL;
                  while ((aK = aK[aM])) {
                    if (aB ? aK.nodeName.toLowerCase() === aP : aK.nodeType === 1) {
                      return false
                    }
                  }
                  aO = aM = aH === "only" && !aO && "nextSibling"
                }
                return true
              }
              aO = [aF ? aU.firstChild : aU.lastChild];
              if (aF && aQ) {
                aS = aU[am] || (aU[am] = {});
                aR = aS[aH] || [];
                aJ = aR[0] === c && aR[1];
                aT = aR[0] === c && aR[2];
                aK = aJ && aU.childNodes[aJ];
                while ((aK = ++aJ && aK && aK[aM] || (aT = aJ = 0) || aO.pop())) {
                  if (aK.nodeType === 1 && ++aT && aK === aL) {
                    aS[aH] = [c, aJ, aT];
                    break
                  }
                }
              } else {
                if (aQ && (aR = (aL[am] || (aL[am] = {}))[aH]) && aR[0] === c) {
                  aT = aR[1]
                } else {
                  while ((aK = ++aJ && aK && aK[aM] || (aT = aJ = 0) || aO.pop())) {
                    if ((aB ? aK.nodeName.toLowerCase() === aP : aK.nodeType === 1) && ++aT) {
                      if (aQ) {
                        (aK[am] || (aK[am] = {}))[aH] = [c, aT]
                      }
                      if (aK === aL) {
                        break
                      }
                    }
                  }
                }
              }
              aT -= aG;
              return aT === aC || (aT % aC === 0 && aT / aC >= 0)
            }
          }
        },
        PSEUDO: function (aA, aC) {
          var aB, aD = u.pseudos[aA] || u.setFilters[aA.toLowerCase()] || m.error("unsupported pseudo: " + aA);
          if (aD[am]) {
            return aD(aC)
          }
          if (aD.length > 1) {
            aB = [aA, aA, "", aC];
            return u.setFilters.hasOwnProperty(aA.toLowerCase()) ? y(function (aG, aE) {
              var aH, aI = aD(aG, aC),
                aF = aI.length;
              while (aF--) {
                aH = at.call(aG, aI[aF]);
                aG[aH] = !(aE[aH] = aI[aF])
              }
            }) : function (aE) {
              return aD(aE, 0, aB)
            }
          }
          return aD
        }
      },
      pseudos: {
        not: y(function (aC) {
          var aD = [],
            aB = [],
            aA = P(aC.replace(q, "$1"));
          return aA[am] ? y(function (aI, aK, aF, aH) {
            var aE, aJ = aA(aI, null, aH, []),
              aG = aI.length;
            while (aG--) {
              if ((aE = aJ[aG])) {
                aI[aG] = !(aK[aG] = aE)
              }
            }
          }) : function (aE, aF, aG) {
            aD[0] = aE;
            aA(aD, null, aG, aB);
            return !aB.pop()
          }
        }),
        has: y(function (aA) {
          return function (aB) {
            return m(aA, aB).length > 0
          }
        }),
        contains: y(function (aA) {
          return function (aB) {
            return (aB.textContent || aB.innerText || aa(aB)).indexOf(aA) > -1
          }
        }),
        lang: y(function (aA) {
          if (!R.test(aA || "")) {
            m.error("unsupported lang: " + aA)
          }
          aA = aA.replace(p, G).toLowerCase();
          return function (aB) {
            var aC;
            do {
              if ((aC = E ? aB.getAttribute("xml:lang") || aB.getAttribute("lang") : aB.lang)) {
                aC = aC.toLowerCase();
                return aC === aA || aC.indexOf(aA + "-") === 0
              }
            } while ((aB = aB.parentNode) && aB.nodeType === 1);
            return false
          }
        }),
        target: function (aA) {
          var aB = ah.location && ah.location.hash;
          return aB && aB.slice(1) === aA.id
        },
        root: function (aA) {
          return aA === t
        },
        focus: function (aA) {
          return aA === g.activeElement && (!g.hasFocus || g.hasFocus()) && !! (aA.type || aA.href || ~aA.tabIndex)
        },
        enabled: function (aA) {
          return aA.disabled === false
        },
        disabled: function (aA) {
          return aA.disabled === true
        },
        checked: function (aA) {
          var aB = aA.nodeName.toLowerCase();
          return (aB === "input" && !! aA.checked) || (aB === "option" && !! aA.selected)
        },
        selected: function (aA) {
          if (aA.parentNode) {
            aA.parentNode.selectedIndex
          }
          return aA.selected === true
        },
        empty: function (aA) {
          for (aA = aA.firstChild; aA; aA = aA.nextSibling) {
            if (aA.nodeName > "@" || aA.nodeType === 3 || aA.nodeType === 4) {
              return false
            }
          }
          return true
        },
        parent: function (aA) {
          return !u.pseudos.empty(aA)
        },
        header: function (aA) {
          return w.test(aA.nodeName)
        },
        input: function (aA) {
          return au.test(aA.nodeName)
        },
        button: function (aB) {
          var aA = aB.nodeName.toLowerCase();
          return aA === "input" && aB.type === "button" || aA === "button"
        },
        text: function (aB) {
          var aA;
          return aB.nodeName.toLowerCase() === "input" && aB.type === "text" && ((aA = aB.getAttribute("type")) == null || aA.toLowerCase() === aB.type)
        },
        first: ao(function () {
          return [0]
        }),
        last: ao(function (aA, aB) {
          return [aB - 1]
        }),
        eq: ao(function (aB, aA, aC) {
          return [aC < 0 ? aC + aA : aC]
        }),
        even: ao(function (aB, aA) {
          var aC = 0;
          for (; aC < aA; aC += 2) {
            aB.push(aC)
          }
          return aB
        }),
        odd: ao(function (aB, aA) {
          var aC = 1;
          for (; aC < aA; aC += 2) {
            aB.push(aC)
          }
          return aB
        }),
        lt: ao(function (aC, aA, aB) {
          var aD = aB < 0 ? aB + aA : aB;
          for (; --aD >= 0;) {
            aC.push(aD)
          }
          return aC
        }),
        gt: ao(function (aC, aA, aB) {
          var aD = aB < 0 ? aB + aA : aB;
          for (; ++aD < aA;) {
            aC.push(aD)
          }
          return aC
        })
      }
    };
    for (k in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      u.pseudos[k] = l(k)
    }
    for (k in {
      submit: true,
      reset: true
    }) {
      u.pseudos[k] = av(k)
    }

    function C(aG, aA) {
      var aJ, aF, aC, aB, aD, aI, aE, aH = an[aG + " "];
      if (aH) {
        return aA ? 0 : aH.slice(0)
      }
      aD = aG;
      aI = [];
      aE = u.preFilter;
      while (aD) {
        if (!aJ || (aF = n.exec(aD))) {
          if (aF) {
            aD = aD.slice(aF[0].length) || aD
          }
          aI.push(aC = [])
        }
        aJ = false;
        if ((aF = h.exec(aD))) {
          aJ = aF.shift();
          aC.push({
            value: aJ,
            type: aF[0].replace(q, " ")
          });
          aD = aD.slice(aJ.length)
        }
        for (aB in u.filter) {
          if ((aF = J[aB].exec(aD)) && (!aE[aB] || (aF = aE[aB](aF)))) {
            aJ = aF.shift();
            aC.push({
              value: aJ,
              type: aB,
              matches: aF
            });
            aD = aD.slice(aJ.length)
          }
        }
        if (!aJ) {
          break
        }
      }
      return aA ? aD.length : aD ? m.error(aG) : an(aG, aI).slice(0)
    }

    function B(aA) {
      var aC = 0,
        aD = aA.length,
        aB = "";
      for (; aC < aD; aC++) {
        aB += aA[aC].value
      }
      return aB
    }

    function r(aB, aE, aC) {
      var aD = aE.dir,
        aA = aC && aE.dir === "parentNode",
        aF = H++;
      return aE.first ?
      function (aG, aH, aI) {
        while ((aG = aG[aD])) {
          if (aG.nodeType === 1 || aA) {
            return aB(aG, aH, aI)
          }
        }
      } : function (aM, aH, aI) {
        var aK, aJ, aG, aL = c + " " + aF;
        if (aI) {
          while ((aM = aM[aD])) {
            if (aM.nodeType === 1 || aA) {
              if (aB(aM, aH, aI)) {
                return true
              }
            }
          }
        } else {
          while ((aM = aM[aD])) {
            if (aM.nodeType === 1 || aA) {
              aG = aM[am] || (aM[am] = {});
              if ((aJ = aG[aD]) && aJ[0] === aL) {
                if ((aK = aJ[1]) === true || aK === aq) {
                  return aK === true
                }
              } else {
                aJ = aG[aD] = [aL];
                aJ[1] = aB(aM, aH, aI) || aq;
                if (aJ[1] === true) {
                  return true
                }
              }
            }
          }
        }
      }
    }

    function b(aA) {
      return aA.length > 1 ?
      function (aB, aC, aE) {
        var aD = aA.length;
        while (aD--) {
          if (!aA[aD](aB, aC, aE)) {
            return false
          }
        }
        return true
      } : aA[0]
    }

    function K(aE, aJ, aI, aH, aD) {
      var aG, aA = [],
        aF = 0,
        aC = aE.length,
        aB = aJ != null;
      for (; aF < aC; aF++) {
        if ((aG = aE[aF])) {
          if (!aI || aI(aG, aH, aD)) {
            aA.push(aG);
            if (aB) {
              aJ.push(aF)
            }
          }
        }
      }
      return aA
    }

    function D(aE, aF, aB, aC, aA, aD) {
      if (aC && !aC[am]) {
        aC = D(aC)
      }
      if (aA && !aA[am]) {
        aA = D(aA, aD)
      }
      return y(function (aH, aK, aP, aI) {
        var aS, aJ, aN, aO = [],
          aG = [],
          aQ = aK.length,
          aR = aH || j(aF || "*", aP.nodeType ? [aP] : aP, []),
          aM = aE && (aH || !aF) ? K(aR, aO, aE, aP, aI) : aR,
          aL = aB ? aA || (aH ? aE : aQ || aC) ? [] : aK : aM;
        if (aB) {
          aB(aM, aL, aP, aI)
        }
        if (aC) {
          aS = K(aL, aG);
          aC(aS, [], aP, aI);
          aJ = aS.length;
          while (aJ--) {
            if ((aN = aS[aJ])) {
              aL[aG[aJ]] = !(aM[aG[aJ]] = aN)
            }
          }
        }
        if (aH) {
          if (aA || aE) {
            if (aA) {
              aS = [];
              aJ = aL.length;
              while (aJ--) {
                if ((aN = aL[aJ])) {
                  aS.push((aM[aJ] = aN))
                }
              }
              aA(null, (aL = []), aS, aI)
            }
            aJ = aL.length;
            while (aJ--) {
              if ((aN = aL[aJ]) && (aS = aA ? at.call(aH, aN) : aO[aJ]) > -1) {
                aH[aS] = !(aK[aS] = aN)
              }
            }
          }
        } else {
          aL = K(aL === aK ? aL.splice(aQ, aL.length) : aL);
          if (aA) {
            aA(null, aK, aL, aI)
          } else {
            ay.apply(aK, aL)
          }
        }
      })
    }

    function al(aE) {
      var aK, aH, aJ, aG = aE.length,
        aB = u.relative[aE[0].type],
        aA = aB || u.relative[" "],
        aI = aB ? 1 : 0,
        aD = r(function (aL) {
          return aL === aK
        }, aA, true),
        aC = r(function (aL) {
          return at.call(aK, aL) > -1
        }, aA, true),
        aF = [function (aL, aM, aN) {
          return (!aB && (aN || aM !== a)) || ((aK = aM).nodeType ? aD(aL, aM, aN) : aC(aL, aM, aN))
        }];
      for (; aI < aG; aI++) {
        if ((aH = u.relative[aE[aI].type])) {
          aF = [r(b(aF), aH)]
        } else {
          aH = u.filter[aE[aI].type].apply(null, aE[aI].matches);
          if (aH[am]) {
            aJ = ++aI;
            for (; aJ < aG; aJ++) {
              if (u.relative[aE[aJ].type]) {
                break
              }
            }
            return D(aI > 1 && b(aF), aI > 1 && B(aE.slice(0, aI - 1)).replace(q, "$1"), aH, aI < aJ && al(aE.slice(aI, aJ)), aJ < aG && al((aE = aE.slice(aJ))), aJ < aG && B(aE))
          }
          aF.push(aH)
        }
      }
      return b(aF)
    }

    function N(aC, aE) {
      var aA = 0,
        aD = aE.length > 0,
        aB = aC.length > 0,
        aF = function (aI, aP, aJ, aK, aO) {
          var aN, aM, aH, aT = [],
            aU = 0,
            aL = "0",
            aS = aI && [],
            aG = aO != null,
            aV = a,
            aQ = aI || aB && u.find.TAG("*", aO && aP.parentNode || aP),
            aR = (c += aV == null ? 1 : Math.E);
          if (aG) {
            a = aP !== g && aP;
            aq = aA
          }
          for (;
          (aN = aQ[aL]) != null; aL++) {
            if (aB && aN) {
              for (aM = 0;
              (aH = aC[aM]); aM++) {
                if (aH(aN, aP, aJ)) {
                  aK.push(aN);
                  break
                }
              }
              if (aG) {
                c = aR;
                aq = ++aA
              }
            }
            if (aD) {
              if ((aN = !aH && aN)) {
                aU--
              }
              if (aI) {
                aS.push(aN)
              }
            }
          }
          aU += aL;
          if (aD && aL !== aU) {
            for (aM = 0;
            (aH = aE[aM]); aM++) {
              aH(aS, aT, aP, aJ)
            }
            if (aI) {
              if (aU > 0) {
                while (aL--) {
                  if (!(aS[aL] || aT[aL])) {
                    aT[aL] = aj.call(aK)
                  }
                }
              }
              aT = K(aT)
            }
            ay.apply(aK, aT);
            if (aG && !aI && aT.length > 0 && (aU + aE.length) > 1) {
              m.uniqueSort(aK)
            }
          }
          if (aG) {
            c = aR;
            a = aV
          }
          return aS
        };
      return aD ? y(aF) : aF
    }
    P = m.compile = function (aE, aA) {
      var aD, aF = [],
        aB = [],
        aC = ab[aE + " "];
      if (!aC) {
        if (!aA) {
          aA = C(aE)
        }
        aD = aA.length;
        while (aD--) {
          aC = al(aA[aD]);
          if (aC[am]) {
            aF.push(aC)
          } else {
            aB.push(aC)
          }
        }
        aC = ab(aE, N(aB, aF))
      }
      return aC
    };

    function j(aE, aA, aB) {
      var aD = 0,

        aC = aA.length;
      for (; aD < aC; aD++) {
        m(aE, aA[aD], aB)
      }
      return aB
    }

    function f(aI, aF, aH, aD) {
      var aG, aB, aJ, aA, aC, aE = C(aI);
      if (!aD) {
        if (aE.length === 1) {
          aB = aE[0] = aE[0].slice(0);
          if (aB.length > 2 && (aJ = aB[0]).type === "ID" && aF.nodeType === 9 && !E && u.relative[aB[1].type]) {
            aF = u.find.ID(aJ.matches[0].replace(p, G), aF)[0];
            if (!aF) {
              return aH
            }
            aI = aI.slice(aB.shift().value.length)
          }
          for (aG = J.needsContext.test(aI) ? -1 : aB.length - 1; aG >= 0; aG--) {
            aJ = aB[aG];
            if (u.relative[(aA = aJ.type)]) {
              break
            }
            if ((aC = u.find[aA])) {
              if ((aD = aC(aJ.matches[0].replace(p, G), L.test(aB[0].type) && aF.parentNode || aF))) {
                aB.splice(aG, 1);
                aI = aD.length && B(aB);
                if (!aI) {
                  ay.apply(aH, v.call(aD, 0));
                  return aH
                }
                break
              }
            }
          }
        }
      }
      P(aI, aE)(aD, aF, E, aH, L.test(aI));
      return aH
    }
    u.pseudos.nth = u.pseudos.eq;

    function Q() {}
    u.filters = Q.prototype = u.pseudos;
    u.setFilters = new Q();
    M();
    m.attr = dX.attr;
    dX.find = m;
    dX.expr = m.selectors;
    dX.expr[":"] = dX.expr.pseudos;
    dX.unique = m.uniqueSort;
    dX.text = m.getText;
    dX.isXMLDoc = m.isXML;
    dX.contains = m.contains
  })(b5);
  var dS = /Until$/,
    cG = /^(?:parents|prev(?:Until|All))/,
    dK = /^.[^:#\[\.,]*$/,
    b9 = dX.expr.match.needsContext,
    cA = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  dX.fn.extend({
    find: function (d) {
      var a, b, c;
      if (typeof d !== "string") {
        c = this;
        return this.pushStack(dX(d).filter(function () {
          for (a = 0; a < c.length; a++) {
            if (dX.contains(c[a], this)) {
              return true
            }
          }
        }))
      }
      b = [];
      for (a = 0; a < this.length; a++) {
        dX.find(d, this[a], b)
      }
      b = this.pushStack(dX.unique(b));
      b.selector = (this.selector ? this.selector + " " : "") + d;
      return b
    },
    has: function (a) {
      var b, c = dX(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) {
          if (dX.contains(this, c[b])) {
            return true
          }
        }
      })
    },
    not: function (a) {
      return this.pushStack(ep(this, a, false))
    },
    filter: function (a) {
      return this.pushStack(ep(this, a, true))
    },
    is: function (a) {
      return !!a && (typeof a === "string" ? b9.test(a) ? dX(a, this.context).index(this[0]) >= 0 : dX.filter(a, this).length > 0 : this.filter(a).length > 0)
    },
    closest: function (a, b) {
      var h, c = 0,
        f = this.length,
        d = [],
        g = b9.test(a) || typeof a !== "string" ? dX(a, b || this.context) : 0;
      for (; c < f; c++) {
        h = this[c];
        while (h && h.ownerDocument && h !== b && h.nodeType !== 11) {
          if (g ? g.index(h) > -1 : dX.find.matchesSelector(h, a)) {
            d.push(h);
            break
          }
          h = h.parentNode
        }
      }
      return this.pushStack(d.length > 1 ? dX.unique(d) : d)
    },
    index: function (a) {
      if (!a) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
      }
      if (typeof a === "string") {
        return dX.inArray(this[0], dX(a))
      }
      return dX.inArray(a.jquery ? a[0] : a, this)
    },
    add: function (d, c) {
      var a = typeof d === "string" ? dX(d, c) : dX.makeArray(d && d.nodeType ? [d] : d),
        b = dX.merge(this.get(), a);
      return this.pushStack(dX.unique(b))
    },
    addBack: function (a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
    }
  });
  dX.fn.andSelf = dX.fn.addBack;

  function ef(a, b) {
    do {
      a = a[b]
    } while (a && a.nodeType !== 1);
    return a
  }

  dX.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && b.nodeType !== 11 ? b : null
    },
    parents: function (a) {
      return dX.dir(a, "parentNode")
    },
    parentsUntil: function (b, c, a) {
      return dX.dir(b, "parentNode", a)
    },
    next: function (a) {
      return ef(a, "nextSibling")
    },
    prev: function (a) {
      return ef(a, "previousSibling")
    },
    nextAll: function (a) {
      return dX.dir(a, "nextSibling")
    },
    prevAll: function (a) {
      return dX.dir(a, "previousSibling")
    },
    nextUntil: function (b, c, a) {
      return dX.dir(b, "nextSibling", a)
    },
    prevUntil: function (b, c, a) {
      return dX.dir(b, "previousSibling", a)
    },
    siblings: function (a) {
      return dX.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return dX.sibling(a.firstChild)
    },
    contents: function (a) {
      return dX.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : dX.merge([], a.childNodes)
    }
  }, function (b, a) {
    dX.fn[b] = function (c, f) {
      var d = dX.map(this, a, c);
      if (!dS.test(b)) {
        f = c
      }
      if (f && typeof f === "string") {
        d = dX.filter(f, d)
      }
      d = this.length > 1 && !cA[b] ? dX.unique(d) : d;
      if (this.length > 1 && cG.test(b)) {
        d = d.reverse()
      }
      return this.pushStack(d)
    }
  });
  dX.extend({
    filter: function (a, c, b) {
      if (b) {
        a = ":not(" + a + ")"
      }
      return c.length === 1 ? dX.find.matchesSelector(c[0], a) ? [c[0]] : [] : dX.find.matches(a, c)
    },
    dir: function (c, d, a) {
      var f = [],
        b = c[d];
      while (b && b.nodeType !== 9 && (a === ey || b.nodeType !== 1 || !dX(b).is(a))) {
        if (b.nodeType === 1) {
          f.push(b)
        }
        b = b[d]
      }
      return f
    },
    sibling: function (a, b) {
      var c = [];
      for (; a; a = a.nextSibling) {
        if (a.nodeType === 1 && a !== b) {
          c.push(a)
        }
      }
      return c
    }
  });

  function ep(a, b, d) {
    b = b || 0;
    if (dX.isFunction(b)) {
      return dX.grep(a, function (h, f) {
        var g = !! b.call(h, f, h);
        return g === d
      })
    } else {
      if (b.nodeType) {
        return dX.grep(a, function (f) {
          return (f === b) === d
        })
      } else {
        if (typeof b === "string") {
          var c = dX.grep(a, function (f) {
            return f.nodeType === 1
          });
          if (dK.test(b)) {
            return dX.filter(b, c, !d)
          } else {
            b = dX.filter(b, c)
          }
        }
      }
    }
    return dX.grep(a, function (f) {
      return (dX.inArray(f, b) >= 0) === d
    })
  }

  function dm(c) {
    var a = ct.split("|"),
      b = c.createDocumentFragment();
    if (b.createElement) {
      while (a.length) {
        b.createElement(a.pop())
      }
    }
    return b
  }
  var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    eD = / jQuery\d+="(?:null|\d+)"/g,
    da = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
    eo = /^\s+/,
    eB = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    cl = /<([\w:]+)/,
    dx = /<tbody/i,
    db = /<|&#?\w+;/,
    dP = /<(?:script|style|link)/i,
    ch = /^(?:checkbox|radio)$/i,
    dB = /checked\s*(?:[^=]|=\s*.checked.)/i,
    cy = /^$|\/(?:java|ecma)script/i,
    dC = /^true\/(.*)/,
    et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    cP = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: dX.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ek = dm(cm),
    co = ek.appendChild(cm.createElement("div"));
  cP.optgroup = cP.option;
  cP.tbody = cP.tfoot = cP.colgroup = cP.caption = cP.thead;
  cP.th = cP.td;
  dX.fn.extend({
    text: function (a) {
      return dX.access(this, function (b) {
        return b === ey ? dX.text(this) : this.empty().append((this[0] && this[0].ownerDocument || cm).createTextNode(b))
      }, null, a, arguments.length)
    },
    wrapAll: function (b) {
      if (dX.isFunction(b)) {
        return this.each(function (c) {
          dX(this).wrapAll(b.call(this, c))
        })
      }
      if (this[0]) {
        var a = dX(b, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          a.insertBefore(this[0])
        }
        a.map(function () {
          var c = this;
          while (c.firstChild && c.firstChild.nodeType === 1) {
            c = c.firstChild
          }
          return c
        }).append(this)
      }
      return this
    },
    wrapInner: function (a) {
      if (dX.isFunction(a)) {
        return this.each(function (b) {
          dX(this).wrapInner(a.call(this, b))
        })
      }
      return this.each(function () {
        var c = dX(this),
          b = c.contents();
        if (b.length) {
          b.wrapAll(a)
        } else {
          c.append(a)
        }
      })
    },
    wrap: function (b) {
      var a = dX.isFunction(b);
      return this.each(function (c) {
        dX(this).wrapAll(a ? b.call(this, c) : b)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        if (!dX.nodeName(this, "body")) {
          dX(this).replaceWith(this.childNodes)
        }
      }).end()
    },
    append: function () {
      return this.domManip(arguments, true, function (a) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.appendChild(a)
        }
      })
    },
    prepend: function () {
      return this.domManip(arguments, true, function (a) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.insertBefore(a, this.firstChild)
        }
      })
    },
    before: function () {
      return this.domManip(arguments, false, function (a) {
        if (this.parentNode) {
          this.parentNode.insertBefore(a, this)
        }
      })
    },
    after: function () {
      return this.domManip(arguments, false, function (a) {
        if (this.parentNode) {
          this.parentNode.insertBefore(a, this.nextSibling)
        }
      })
    },
    remove: function (d, a) {
      var b, c = 0;
      for (;
      (b = this[c]) != null; c++) {
        if (!d || dX.filter(d, [b]).length > 0) {
          if (!a && b.nodeType === 1) {
            dX.cleanData(cn(b))
          }
          if (b.parentNode) {
            if (a && dX.contains(b.ownerDocument, b)) {
              cI(cn(b, "script"))
            }
            b.parentNode.removeChild(b)
          }
        }
      }
      return this
    },
    empty: function () {
      var a, b = 0;
      for (;
      (a = this[b]) != null; b++) {
        if (a.nodeType === 1) {
          dX.cleanData(cn(a, false))
        }
        while (a.firstChild) {
          a.removeChild(a.firstChild)
        }
        if (a.options && dX.nodeName(a, "select")) {
          a.options.length = 0
        }
      }
      return this
    },
    clone: function (a, b) {
      a = a == null ? false : a;
      b = b == null ? a : b;
      return this.map(function () {
        return dX.clone(this, a, b)
      })
    },
    html: function (a) {
      return dX.access(this, function (b) {
        var c = this[0] || {},
          d = 0,
          f = this.length;
        if (b === ey) {
          return c.nodeType === 1 ? c.innerHTML.replace(eD, "") : ey
        }
        if (typeof b === "string" && !dP.test(b) && (dX.support.htmlSerialize || !da.test(b)) && (dX.support.leadingWhitespace || !eo.test(b)) && !cP[(cl.exec(b) || ["", ""])[1].toLowerCase()]) {
          b = b.replace(eB, "<$1></$2>");
          try {
            for (; d < f; d++) {
              c = this[d] || {};
              if (c.nodeType === 1) {
                dX.cleanData(cn(c, false));
                c.innerHTML = b
              }
            }
            c = 0
          } catch (g) {}
        }
        if (c) {
          this.empty().append(b)
        }
      }, null, a, arguments.length)
    },
    replaceWith: function (a) {
      var b = dX.isFunction(a);
      if (!b && typeof a !== "string") {
        a = dX(a).not(this).detach()
      }
      return this.domManip([a], true, function (c) {
        var d = this.nextSibling,
          f = this.parentNode;
        if (f && this.nodeType === 1 || this.nodeType === 11) {
          dX(this).remove();
          if (d) {
            d.parentNode.insertBefore(c, d)
          } else {
            f.appendChild(c)
          }
        }
      })
    },
    detach: function (a) {
      return this.remove(a, true)
    },
    domManip: function (h, a, b) {
      h = ew.apply([], h);
      var i, j, m, l, o, d, k = 0,
        n = this.length,
        f = this,
        c = n - 1,
        g = h[0],
        p = dX.isFunction(g);
      if (p || !(n <= 1 || typeof g !== "string" || dX.support.checkClone || !dB.test(g))) {
        return this.each(function (q) {
          var r = f.eq(q);
          if (p) {
            h[0] = g.call(this, q, a ? r.html() : ey)
          }
          r.domManip(h, a, b)
        })
      }
      if (n) {
        i = dX.buildFragment(h, this[0].ownerDocument, false, this);
        j = i.firstChild;
        if (i.childNodes.length === 1) {
          i = j
        }
        if (j) {
          a = a && dX.nodeName(j, "tr");
          m = dX.map(cn(i, "script"), ce);
          l = m.length;
          for (; k < n; k++) {
            o = i;
            if (k !== c) {
              o = dX.clone(o, true, true);
              if (l) {
                dX.merge(m, cn(o, "script"))
              }
            }
            b.call(a && dX.nodeName(this[k], "table") ? ca(this[k], "tbody") : this[k], o, k)
          }
          if (l) {
            d = m[m.length - 1].ownerDocument;
            dX.map(m, dc);
            for (k = 0; k < l; k++) {
              o = m[k];
              if (cy.test(o.type || "") && !dX._data(o, "globalEval") && dX.contains(d, o)) {
                if (o.src) {
                  dX.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: false,
                    global: false,
                    "throws": true
                  })
                } else {
                  dX.globalEval((o.text || o.textContent || o.innerHTML || "").replace(et, ""))
                }
              }
            }
          }
          i = j = null
        }
      }
      return this
    }
  });

  function ca(a, b) {
    return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
  }

  function ce(a) {
    var b = a.getAttributeNode("type");
    a.type = (b && b.specified) + "/" + a.type;
    return a
  }

  function dc(a) {
    var b = dC.exec(a.type);
    if (b) {
      a.type = b[1]
    } else {
      a.removeAttribute("type")
    }
    return a
  }

  function cI(d, b) {
    var a, c = 0;
    for (;
    (a = d[c]) != null; c++) {
      dX._data(a, "globalEval", !b || dX._data(b[c], "globalEval"))
    }
  }

  function dz(g, d) {
    if (d.nodeType !== 1 || !dX.hasData(g)) {
      return
    }
    var a, b, f, h = dX._data(g),
      i = dX._data(d, h),
      c = h.events;
    if (c) {
      delete i.handle;
      i.events = {};
      for (a in c) {
        for (b = 0, f = c[a].length; b < f; b++) {
          dX.event.add(d, a, c[a][b])
        }
      }
    }
    if (i.data) {
      i.data = dX.extend({}, i.data)
    }
  }

  function cV(a, d) {
    var f, c, b;
    if (d.nodeType !== 1) {
      return
    }
    f = d.nodeName.toLowerCase();
    if (!dX.support.noCloneEvent && d[dX.expando]) {
      c = dX._data(d);
      for (b in c.events) {
        dX.removeEvent(d, b, c.handle)
      }
      d.removeAttribute(dX.expando)
    }
    if (f === "script" && d.text !== a.text) {
      ce(d).text = a.text;
      dc(d)
    } else {
      if (f === "object") {
        if (d.parentNode) {
          d.outerHTML = a.outerHTML
        }
        if (dX.support.html5Clone && (a.innerHTML && !dX.trim(d.innerHTML))) {
          d.innerHTML = a.innerHTML
        }
      } else {
        if (f === "input" && ch.test(a.type)) {
          d.defaultChecked = d.checked = a.checked;
          if (d.value !== a.value) {
            d.value = a.value
          }
        } else {
          if (f === "option") {
            d.defaultSelected = d.selected = a.defaultSelected
          } else {
            if (f === "input" || f === "textarea") {
              d.defaultValue = a.defaultValue
            }
          }
        }
      }
    }
  }
  dX.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (b, a) {
    dX.fn[b] = function (f) {
      var d, i = 0,
        c = [],
        g = dX(f),
        h = g.length - 1;
      for (; i <= h; i++) {
        d = i === h ? this : this.clone(true);
        dX(g[i])[a](d);
        dJ.apply(c, d.get())
      }
      return this.pushStack(c)
    }
  });

  function cn(b, f) {
    var d, a, c = 0,
      g = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName(f || "*") : typeof b.querySelectorAll !== "undefined" ? b.querySelectorAll(f || "*") : ey;
    if (!g) {
      for (g = [], d = b.childNodes || b;
      (a = d[c]) != null; c++) {
        if (!f || dX.nodeName(a, f)) {
          g.push(a)
        } else {
          dX.merge(g, cn(a, f))
        }
      }
    }
    return f === ey || f && dX.nodeName(b, f) ? dX.merge([b], g) : g
  }

  function dA(a) {
    if (ch.test(a.type)) {
      a.defaultChecked = a.checked
    }
  }
  dX.extend({
    clone: function (j, h, f) {
      var d, c, i, g, a, b = dX.contains(j.ownerDocument, j);
      if (dX.support.html5Clone || dX.isXMLDoc(j) || !da.test("<" + j.nodeName + ">")) {
        a = j.cloneNode(true)
      } else {
        co.innerHTML = j.outerHTML;
        co.removeChild(a = co.firstChild)
      }
      if ((!dX.support.noCloneEvent || !dX.support.noCloneChecked) && (j.nodeType === 1 || j.nodeType === 11) && !dX.isXMLDoc(j)) {
        d = cn(a);
        c = cn(j);
        for (g = 0;
        (i = c[g]) != null; ++g) {
          if (d[g]) {
            cV(i, d[g])
          }
        }
      }
      if (h) {
        if (f) {
          c = c || cn(j);
          d = d || cn(a);
          for (g = 0;
          (i = c[g]) != null; g++) {
            dz(i, d[g])
          }
        } else {
          dz(j, a)
        }
      }
      d = cn(a, "script");
      if (d.length > 0) {
        cI(d, !b && cn(j, "script"))
      }
      d = c = i = null;
      return a
    },
    buildFragment: function (p, n, h, b) {
      var i, l, a, c, o, d, g, j = p.length,
        m = dm(n),
        k = [],
        f = 0;
      for (; f < j; f++) {
        l = p[f];
        if (l || l === 0) {
          if (dX.type(l) === "object") {
            dX.merge(k, l.nodeType ? [l] : l)
          } else {
            if (!db.test(l)) {
              k.push(n.createTextNode(l))
            } else {
              c = c || m.appendChild(n.createElement("div"));
              a = (cl.exec(l) || ["", ""])[1].toLowerCase();
              o = cP[a] || cP._default;
              c.innerHTML = o[1] + l.replace(eB, "<$1></$2>") + o[2];
              g = o[0];
              while (g--) {
                c = c.lastChild
              }
              if (!dX.support.leadingWhitespace && eo.test(l)) {
                k.push(n.createTextNode(eo.exec(l)[0]))
              }
              if (!dX.support.tbody) {
                l = a === "table" && !dx.test(l) ? c.firstChild : o[1] === "<table>" && !dx.test(l) ? c : 0;
                g = l && l.childNodes.length;
                while (g--) {
                  if (dX.nodeName((d = l.childNodes[g]), "tbody") && !d.childNodes.length) {
                    l.removeChild(d)
                  }
                }
              }
              dX.merge(k, c.childNodes);
              c.textContent = "";
              while (c.firstChild) {
                c.removeChild(c.firstChild)
              }
              c = m.lastChild
            }
          }
        }
      }
      if (c) {
        m.removeChild(c)
      }
      if (!dX.support.appendChecked) {
        dX.grep(cn(k, "input"), dA)
      }
      f = 0;
      while ((l = k[f++])) {
        if (b && dX.inArray(l, b) !== -1) {
          continue
        }
        i = dX.contains(l.ownerDocument, l);
        c = cn(m.appendChild(l), "script");
        if (i) {
          cI(c)
        }
        if (h) {
          g = 0;
          while ((l = c[g++])) {
            if (cy.test(l.type || "")) {
              h.push(l)
            }
          }
        }
      }
      c = null;
      return m
    },
    cleanData: function (l, b) {
      var i, k, j, c, h = 0,
        a = dX.expando,
        g = dX.cache,
        f = dX.support.deleteExpando,
        d = dX.event.special;
      for (;
      (j = l[h]) != null; h++) {
        if (b || dX.acceptData(j)) {
          k = j[a];
          i = k && g[k];
          if (i) {
            if (i.events) {
              for (c in i.events) {
                if (d[c]) {
                  dX.event.remove(j, c)
                } else {
                  dX.removeEvent(j, c, i.handle)
                }
              }
            }
            if (g[k]) {
              delete g[k];
              if (f) {
                delete j[a]
              } else {
                if (typeof j.removeAttribute !== "undefined") {
                  j.removeAttribute(a)
                } else {
                  j[a] = null
                }
              }
              b1.push(k)
            }
          }
        }
      }
    }
  });
  var di, cQ, eA, c4 = /alpha\([^)]*\)/i,
    ej = /opacity\s*=\s*([^)]*)/,
    cS = /^(top|right|bottom|left)$/,
    dh = /^(none|table(?!-c[ea]).+)/,
    ee = /^margin/,
    eE = new RegExp("^(" + cx + ")(.*)$", "i"),
    cJ = new RegExp("^(" + cx + ")(?!px)[a-z%]+$", "i"),
    cR = new RegExp("^([+-])=(" + cx + ")", "i"),
    cY = {
      BODY: "block"
    },
    de = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    eb = {
      letterSpacing: 0,
      fontWeight: 400
    },
    dD = ["Top", "Right", "Bottom", "Left"],
    dw = ["Webkit", "O", "Moz", "ms"];

  function cv(b, d) {
    if (d in b) {
      return d
    }
    var a = d.charAt(0).toUpperCase() + d.slice(1),
      f = d,
      c = dw.length;
    while (c--) {
      d = dw[c] + a;
      if (d in b) {
        return d
      }
    }
    return f
  }

  function cX(a, b) {
    a = b || a;
    return dX.css(a, "display") === "none" || !dX.contains(a.ownerDocument, a)
  }

  function ci(g, f) {
    var a, d = [],
      c = 0,
      b = g.length;
    for (; c < b; c++) {
      a = g[c];
      if (!a.style) {
        continue
      }
      d[c] = dX._data(a, "olddisplay");
      if (f) {
        if (!d[c] && a.style.display === "none") {
          a.style.display = ""
        }
        if (a.style.display === "" && cX(a)) {
          d[c] = dX._data(a, "olddisplay", d7(a.nodeName))
        }
      } else {
        if (!d[c] && !cX(a)) {
          dX._data(a, "olddisplay", dX.css(a, "display"))
        }
      }
    }
    for (c = 0; c < b; c++) {
      a = g[c];
      if (!a.style) {
        continue
      }
      if (!f || a.style.display === "none" || a.style.display === "") {
        a.style.display = f ? d[c] || "" : "none"
      }
    }
    return g
  }
  dX.fn.extend({
    css: function (b, a) {
      return dX.access(this, function (i, d, h) {
        var j, f, g = {},
          c = 0;
        if (dX.isArray(d)) {
          j = cQ(i);
          f = d.length;
          for (; c < f; c++) {
            g[d[c]] = dX.css(i, d[c], false, j)
          }
          return g
        }
        return h !== ey ? dX.style(i, d, h) : dX.css(i, d)
      }, b, a, arguments.length > 1)
    },
    show: function () {
      return ci(this, true)
    },
    hide: function () {
      return ci(this)
    },
    toggle: function (a) {
      var b = typeof a === "boolean";
      return this.each(function () {
        if (b ? a : cX(this)) {
          dX(this).show()
        } else {
          dX(this).hide()
        }
      })
    }
  });
  dX.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = di(a, "opacity");
            return c === "" ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: true,
      fillOpacity: true,
      fontWeight: true,

      lineHeight: true,
      opacity: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {
      "float": dX.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (i, j, b, h) {
      if (!i || i.nodeType === 3 || i.nodeType === 8 || !i.style) {
        return
      }
      var d, c, a, g = dX.camelCase(j),
        k = i.style;
      j = dX.cssProps[g] || (dX.cssProps[g] = cv(k, g));
      a = dX.cssHooks[j] || dX.cssHooks[g];
      if (b !== ey) {
        c = typeof b;
        if (c === "string" && (d = cR.exec(b))) {
          b = (d[1] + 1) * d[2] + parseFloat(dX.css(i, j));
          c = "number"
        }
        if (b == null || c === "number" && isNaN(b)) {
          return
        }
        if (c === "number" && !dX.cssNumber[g]) {
          b += "px"
        }
        if (!dX.support.clearCloneStyle && b === "" && j.indexOf("background") === 0) {
          k[j] = "inherit"
        }
        if (!a || !("set" in a) || (b = a.set(i, b, h)) !== ey) {
          try {
            k[j] = b
          } catch (f) {}
        }
      } else {
        if (a && "get" in a && (d = a.get(i, false, h)) !== ey) {
          return d
        }
        return k[j]
      }
    },
    css: function (h, a, d, i) {
      var g, b, f, c = dX.camelCase(a);
      a = dX.cssProps[c] || (dX.cssProps[c] = cv(h.style, c));
      f = dX.cssHooks[a] || dX.cssHooks[c];
      if (f && "get" in f) {
        g = f.get(h, true, d)
      }
      if (g === ey) {
        g = di(h, a, i)
      }
      if (g === "normal" && a in eb) {
        g = eb[a]
      }
      if (d) {
        b = parseFloat(g);
        return d === true || dX.isNumeric(b) ? b || 0 : g
      }
      return g
    },
    swap: function (h, a, g, b) {
      var c, d, f = {};
      for (d in a) {
        f[d] = h.style[d];
        h.style[d] = a[d]
      }
      c = g.apply(h, b || []);
      for (d in a) {
        h.style[d] = f[d]
      }
      return c
    }
  });
  if (b5.getComputedStyle) {
    cQ = function (a) {
      return b5.getComputedStyle(a, null)
    };
    di = function (g, i, c) {
      var h, j, a, f = c || cQ(g),
        b = f ? f.getPropertyValue(i) || f[i] : ey,
        d = g.style;
      if (f) {
        if (b === "" && !dX.contains(g.ownerDocument, g)) {
          b = dX.style(g, i)
        }
        if (cJ.test(b) && ee.test(i)) {
          h = d.width;
          j = d.minWidth;
          a = d.maxWidth;
          d.minWidth = d.maxWidth = d.width = b;
          b = f.width;
          d.width = h;
          d.minWidth = j;
          d.maxWidth = a
        }
      }
      return b
    }
  } else {
    if (cm.documentElement.currentStyle) {
      cQ = function (a) {
        return a.currentStyle
      };
      di = function (h, j, c) {
        var i, f, b, g = c || cQ(h),
          a = g ? g[j] : ey,
          d = h.style;
        if (a == null && d && d[j]) {
          a = d[j]
        }
        if (cJ.test(a) && !cS.test(j)) {
          i = d.left;
          f = h.runtimeStyle;
          b = f && f.left;
          if (b) {
            f.left = h.currentStyle.left
          }
          d.left = j === "fontSize" ? "1em" : a;
          a = d.pixelLeft + "px";
          d.left = i;
          if (b) {
            f.left = b
          }
        }
        return a === "" ? "auto" : a
      }
    }
  }

  function eu(d, b, a) {
    var c = eE.exec(b);
    return c ? Math.max(0, c[1] - (a || 0)) + (c[2] || "px") : b
  }

  function du(a, d, f, g, b) {
    var c = f === (g ? "border" : "content") ? 4 : d === "width" ? 1 : 0,
      h = 0;
    for (; c < 4; c += 2) {
      if (f === "margin") {
        h += dX.css(a, f + dD[c], true, b)
      }
      if (g) {
        if (f === "content") {
          h -= dX.css(a, "padding" + dD[c], true, b)
        }
        if (f !== "margin") {
          h -= dX.css(a, "border" + dD[c] + "Width", true, b)
        }
      } else {
        h += dX.css(a, "padding" + dD[c], true, b);
        if (f !== "padding") {
          h += dX.css(a, "border" + dD[c] + "Width", true, b)
        }
      }
    }
    return h
  }

  function cd(a, d, f) {
    var b = true,
      h = d === "width" ? a.offsetWidth : a.offsetHeight,
      c = cQ(a),
      g = dX.support.boxSizing && dX.css(a, "boxSizing", false, c) === "border-box";
    if (h <= 0 || h == null) {
      h = di(a, d, c);
      if (h < 0 || h == null) {
        h = a.style[d]
      }
      if (cJ.test(h)) {
        return h
      }
      b = g && (dX.support.boxSizingReliable || h === a.style[d]);
      h = parseFloat(h) || 0
    }
    return (h + du(a, d, f || (g ? "border" : "content"), b, c)) + "px"
  }

  function d7(a) {
    var b = cm,
      c = cY[a];
    if (!c) {
      c = b6(a, b);
      if (c === "none" || !c) {
        eA = (eA || dX("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement);
        b = (eA[0].contentWindow || eA[0].contentDocument).document;
        b.write("<!doctype html><html><body>");
        b.close();
        c = b6(a, b);
        eA.detach()
      }
      cY[a] = c
    }
    return c
  }

  function b6(d, a) {
    var c = dX(a.createElement(d)).appendTo(a.body),
      b = dX.css(c[0], "display");
    c.remove();
    return b
  }
  dX.each(["height", "width"], function (a, b) {
    dX.cssHooks[b] = {
      get: function (c, d, f) {
        if (d) {
          return c.offsetWidth === 0 && dh.test(dX.css(c, "display")) ? dX.swap(c, de, function () {
            return cd(c, b, f)
          }) : cd(c, b, f)
        }
      },
      set: function (c, g, f) {
        var d = f && cQ(c);
        return eu(c, g, f ? du(c, b, f, dX.support.boxSizing && dX.css(c, "boxSizing", false, d) === "border-box", d) : 0)
      }
    }
  });
  if (!dX.support.opacity) {
    dX.cssHooks.opacity = {
      get: function (a, b) {
        return ej.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : b ? "1" : ""
      },
      set: function (a, g) {
        var b = a.style,
          d = a.currentStyle,
          f = dX.isNumeric(g) ? "alpha(opacity=" + g * 100 + ")" : "",
          c = d && d.filter || b.filter || "";
        b.zoom = 1;
        if ((g >= 1 || g === "") && dX.trim(c.replace(c4, "")) === "" && b.removeAttribute) {
          b.removeAttribute("filter");
          if (g === "" || d && !d.filter) {
            return
          }
        }
        b.filter = c4.test(c) ? c.replace(c4, f) : c + " " + f
      }
    }
  }
  dX(function () {
    if (!dX.support.reliableMarginRight) {
      dX.cssHooks.marginRight = {
        get: function (a, b) {
          if (b) {
            return dX.swap(a, {
              display: "inline-block"
            }, di, [a, "marginRight"])
          }
        }
      }
    }
    if (!dX.support.pixelPosition && dX.fn.position) {
      dX.each(["top", "left"], function (b, a) {
        dX.cssHooks[a] = {
          get: function (c, d) {
            if (d) {
              d = di(c, a);
              return cJ.test(d) ? dX(c).position()[a] + "px" : d
            }
          }
        }
      })
    }
  });
  if (dX.expr && dX.expr.filters) {
    dX.expr.filters.hidden = function (a) {
      return (a.offsetWidth === 0 && a.offsetHeight === 0) || (!dX.support.reliableHiddenOffsets && ((a.style && a.style.display) || dX.css(a, "display")) === "none")
    };
    dX.expr.filters.visible = function (a) {
      return !dX.expr.filters.hidden(a)
    }
  }
  dX.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (b, a) {
    dX.cssHooks[b + a] = {
      expand: function (c) {
        var d = 0,
          f = {},
          g = typeof c === "string" ? c.split(" ") : [c];
        for (; d < 4; d++) {
          f[b + dD[d] + a] = g[d] || g[d - 2] || g[0]
        }
        return f
      }
    };
    if (!ee.test(b)) {
      dX.cssHooks[b + a].set = eu
    }
  });
  var cC = /%20/g,
    el = /\[\]$/,
    cO = /\r?\n/g,
    cu = /^(?:submit|button|image|reset)$/i,
    dy = /^(?:input|select|textarea|keygen)/i;
  dX.fn.extend({
    serialize: function () {
      return dX.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = dX.prop(this, "elements");
        return a ? dX.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !dX(this).is(":disabled") && dy.test(this.nodeName) && !cu.test(a) && (this.checked || !ch.test(a))
      }).map(function (c, b) {
        var a = dX(this).val();
        return a == null ? null : dX.isArray(a) ? dX.map(a, function (d) {
          return {
            name: b.name,
            value: d.replace(cO, "\r\n")
          }
        }) : {
          name: b.name,
          value: a.replace(cO, "\r\n")
        }
      }).get()
    }
  });
  dX.param = function (f, c) {
    var b, d = [],
      a = function (h, g) {
        g = dX.isFunction(g) ? g() : (g == null ? "" : g);
        d[d.length] = encodeURIComponent(h) + "=" + encodeURIComponent(g)
      };
    if (c === ey) {
      c = dX.ajaxSettings && dX.ajaxSettings.traditional
    }
    if (dX.isArray(f) || (f.jquery && !dX.isPlainObject(f))) {
      dX.each(f, function () {
        a(this.name, this.value)
      })
    } else {
      for (b in f) {
        cp(b, f[b], c, a)
      }
    }
    return d.join("&").replace(cC, "+")
  };

  function cp(c, a, d, b) {
    var f;
    if (dX.isArray(a)) {
      dX.each(a, function (g, h) {
        if (d || el.test(c)) {
          b(c, h)
        } else {
          cp(c + "[" + (typeof h === "object" ? g : "") + "]", h, d, b)
        }
      })
    } else {
      if (!d && dX.type(a) === "object") {
        for (f in a) {
          cp(c + "[" + f + "]", a[f], d, b)
        }
      } else {
        b(c, a)
      }
    }
  }
  var dq, cF, dN = dX.now(),
    dn = /\?/,
    dH = /#.*$/,
    cZ = /([?&])_=[^&]*/,
    d1 = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    dl = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    cj = /^(?:GET|HEAD)$/,
    ex = /^\/\//,
    ei = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    ds = dX.fn.load,
    cc = {},
    a8 = {},
    eg = "*/".concat("*");
  try {
    cF = es.href
  } catch (c6) {
    cF = cm.createElement("a");
    cF.href = "";
    cF = cF.href
  }
  dq = ei.exec(cF.toLowerCase()) || [];

  function dT(a) {
    return function (b, g) {
      if (typeof b !== "string") {
        g = b;
        b = "*"
      }
      var f, d = 0,
        c = b.toLowerCase().match(d6) || [];
      if (dX.isFunction(g)) {
        while ((f = c[d++])) {
          if (f[0] === "+") {
            f = f.slice(1) || "*";
            (a[f] = a[f] || []).unshift(g)
          } else {
            (a[f] = a[f] || []).push(g)
          }
        }
      }
    }
  }

  function ck(f, c, g, b) {
    var d = {},
      a = (f === a8);

    function h(j) {
      var i;
      d[j] = true;
      dX.each(f[j] || [], function (l, m) {
        var k = m(c, g, b);
        if (typeof k === "string" && !a && !d[k]) {
          c.dataTypes.unshift(k);
          h(k);
          return false
        } else {
          if (a) {
            return !(i = k)
          }
        }
      });
      return i
    }
    return h(c.dataTypes[0]) || !d["*"] && h("*")
  }

  function cg(c, b) {
    var d, f, a = dX.ajaxSettings.flatOptions || {};
    for (d in b) {
      if (b[d] !== ey) {
        (a[d] ? c : (f || (f = {})))[d] = b[d]
      }
    }
    if (f) {
      dX.extend(true, c, f)
    }
    return c
  }
  dX.fn.load = function (b, h, g) {
    if (typeof b !== "string" && ds) {
      return ds.apply(this, arguments)
    }
    var f, a, c, d = this,
      i = b.indexOf(" ");
    if (i >= 0) {
      f = b.slice(i, b.length);
      b = b.slice(0, i)
    }
    if (dX.isFunction(h)) {
      g = h;
      h = ey
    } else {
      if (h && typeof h === "object") {
        a = "POST"
      }
    }
    if (d.length > 0) {
      dX.ajax({
        url: b,
        type: a,
        dataType: "html",
        data: h
      }).done(function (j) {
        c = arguments;
        d.html(f ? dX("<div>").append(dX.parseHTML(j)).find(f) : j)
      }).complete(g &&
      function (j, k) {
        d.each(g, c || [j.responseText, k, j])
      })
    }
    return this
  };
  dX.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (b, a) {
    dX.fn[a] = function (c) {
      return this.on(a, c)
    }
  });
  dX.each(["get", "post"], function (b, a) {
    dX[a] = function (f, c, g, d) {
      if (dX.isFunction(c)) {
        d = d || g;
        g = c;
        c = ey
      }
      return dX.ajax({
        url: f,
        type: a,
        dataType: d,
        data: c,
        success: g
      })
    }
  });
  dX.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cF,
      type: "GET",
      isLocal: dl.test(dq[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": eg,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": b5.String,
        "text html": true,
        "text json": dX.parseJSON,
        "text xml": dX.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (a, b) {
      return b ? cg(cg(a, dX.ajaxSettings), b) : cg(dX.ajaxSettings, a)
    },
    ajaxPrefilter: dT(cc),
    ajaxTransport: dT(a8),
    ajax: function (f, i) {
      if (typeof f === "object") {
        i = f;
        f = ey
      }
      i = i || {};
      var q, d, m, h, x, t, j, r, a = dX.ajaxSetup({}, i),
        k = a.context || a,
        v = a.context && (k.nodeType || k.jquery) ? dX(k) : dX.event,
        l = dX.Deferred(),
        o = dX.Callbacks("once memory"),
        c = a.statusCode || {},
        u = {},
        n = {},
        g = 0,
        b = "canceled",
        s = {
          readyState: 0,
          getResponseHeader: function (z) {
            var y;
            if (g === 2) {
              if (!h) {
                h = {};
                while ((y = d1.exec(m))) {
                  h[y[1].toLowerCase()] = y[2]
                }
              }
              y = h[z.toLowerCase()]
            }
            return y == null ? null : y
          },
          getAllResponseHeaders: function () {
            return g === 2 ? m : null
          },
          setRequestHeader: function (A, z) {
            var y = A.toLowerCase();
            if (!g) {
              A = n[y] = n[y] || A;
              u[A] = z
            }
            return this
          },
          overrideMimeType: function (y) {
            if (!g) {
              a.mimeType = y
            }
            return this
          },
          statusCode: function (z) {
            var y;
            if (z) {
              if (g < 2) {
                for (y in z) {
                  c[y] = [c[y], z[y]]
                }
              } else {
                s.always(z[s.status])
              }
            }
            return this
          },
          abort: function (z) {
            var y = z || b;
            if (q) {
              q.abort(y)
            }
            w(0, y);
            return this
          }
        };
      l.promise(s).complete = o.add;
      s.success = s.done;
      s.error = s.fail;
      a.url = ((f || a.url || cF) + "").replace(dH, "").replace(ex, dq[1] + "//");
      a.type = i.method || i.type || a.method || a.type;
      a.dataTypes = dX.trim(a.dataType || "*").toLowerCase().match(d6) || [""];
      if (a.crossDomain == null) {
        t = ei.exec(a.url.toLowerCase());
        a.crossDomain = !! (t && (t[1] !== dq[1] || t[2] !== dq[2] || (t[3] || (t[1] === "http:" ? 80 : 443)) != (dq[3] || (dq[1] === "http:" ? 80 : 443))))
      }
      if (a.data && a.processData && typeof a.data !== "string") {
        a.data = dX.param(a.data, a.traditional)
      }
      ck(cc, a, i, s);
      if (g === 2) {
        return s
      }
      j = a.global;
      if (j && dX.active++ === 0) {
        dX.event.trigger("ajaxStart")
      }
      a.type = a.type.toUpperCase();
      a.hasContent = !cj.test(a.type);
      d = a.url;
      if (!a.hasContent) {
        if (a.data) {
          d = (a.url += (dn.test(d) ? "&" : "?") + a.data);
          delete a.data
        }
        if (a.cache === false) {
          a.url = cZ.test(d) ? d.replace(cZ, "$1_=" + dN++) : d + (dn.test(d) ? "&" : "?") + "_=" + dN++
        }
      }
      if (a.ifModified) {
        if (dX.lastModified[d]) {
          s.setRequestHeader("If-Modified-Since", dX.lastModified[d])
        }
        if (dX.etag[d]) {
          s.setRequestHeader("If-None-Match", dX.etag[d])
        }
      }
      if (a.data && a.hasContent && a.contentType !== false || i.contentType) {
        s.setRequestHeader("Content-Type", a.contentType)
      }
      s.setRequestHeader("Accept", a.dataTypes[0] && a.accepts[a.dataTypes[0]] ? a.accepts[a.dataTypes[0]] + (a.dataTypes[0] !== "*" ? ", " + eg + "; q=0.01" : "") : a.accepts["*"]);
      for (r in a.headers) {
        s.setRequestHeader(r, a.headers[r])
      }
      if (a.beforeSend && (a.beforeSend.call(k, s, a) === false || g === 2)) {
        return s.abort()
      }
      b = "abort";
      for (r in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        s[r](a[r])
      }
      q = ck(a8, a, i, s);
      if (!q) {
        w(-1, "No Transport")
      } else {
        s.readyState = 1;
        if (j) {
          v.trigger("ajaxSend", [s, a])
        }
        if (a.async && a.timeout > 0) {
          x = setTimeout(function () {
            s.abort("timeout")
          }, a.timeout)
        }
        try {
          g = 1;
          q.send(u, w)
        } catch (p) {
          if (g < 2) {
            w(-1, p)
          } else {
            throw p
          }
        }
      }

      function w(C, H, B, F) {
        var D, y, A, E, z, G = H;
        if (g === 2) {
          return
        }
        g = 2;
        if (x) {
          clearTimeout(x)
        }
        q = ey;
        m = F || "";
        s.readyState = C > 0 ? 4 : 0;
        if (B) {
          E = cr(a, s, B)
        }
        if (C >= 200 && C < 300 || C === 304) {
          if (a.ifModified) {
            z = s.getResponseHeader("Last-Modified");
            if (z) {
              dX.lastModified[d] = z
            }
            z = s.getResponseHeader("etag");
            if (z) {
              dX.etag[d] = z
            }
          }
          if (C === 304) {
            D = true;
            G = "notmodified"
          } else {
            D = dZ(a, E);
            G = D.state;
            y = D.data;
            A = D.error;
            D = !A
          }
        } else {
          A = G;
          if (C || !G) {
            G = "error";
            if (C < 0) {
              C = 0
            }
          }
        }
        s.status = C;
        s.statusText = (H || G) + "";
        if (D) {
          l.resolveWith(k, [y, G, s])
        } else {
          l.rejectWith(k, [s, G, A])
        }
        s.statusCode(c);
        c = ey;
        if (j) {
          v.trigger(D ? "ajaxSuccess" : "ajaxError", [s, a, D ? y : A])
        }
        o.fireWith(k, [s, G]);
        if (j) {
          v.trigger("ajaxComplete", [s, a]);
          if (!(--dX.active)) {
            dX.event.trigger("ajaxStop")
          }
        }
      }
      return s
    },
    getScript: function (b, a) {
      return dX.get(b, ey, a, "script")
    },
    getJSON: function (c, b, a) {
      return dX.get(c, b, a, "json")
    }
  });

  function cr(a, b, f) {
    var h, d, i, g, k = a.contents,
      c = a.dataTypes,
      j = a.responseFields;
    for (d in j) {
      if (d in f) {
        b[j[d]] = f[d]
      }
    }
    while (c[0] === "*") {
      c.shift();
      if (h === ey) {
        h = a.mimeType || b.getResponseHeader("Content-Type")
      }
    }
    if (h) {
      for (d in k) {
        if (k[d] && k[d].test(h)) {
          c.unshift(d);
          break
        }
      }
    }
    if (c[0] in f) {
      i = c[0]
    } else {
      for (d in f) {
        if (!c[0] || a.converters[d + " " + c[0]]) {
          i = d;
          break
        }
        if (!g) {
          g = d
        }
      }
      i = i || g
    }
    if (i) {
      if (i !== c[0]) {
        c.unshift(i)
      }
      return f[i]
    }
  }

  function dZ(a, j) {
    var c, l, f, i, b = {},
      h = 0,
      d = a.dataTypes.slice(),
      k = d[0];
    if (a.dataFilter) {
      j = a.dataFilter(j, a.dataType)
    }
    if (d[1]) {
      for (c in a.converters) {
        b[c.toLowerCase()] = a.converters[c]
      }
    }
    for (;
    (f = d[++h]);) {
      if (f !== "*") {
        if (k !== "*" && k !== f) {
          c = b[k + " " + f] || b["* " + f];
          if (!c) {
            for (l in b) {
              i = l.split(" ");
              if (i[1] === f) {
                c = b[k + " " + i[0]] || b["* " + i[0]];
                if (c) {
                  if (c === true) {
                    c = b[l]
                  } else {
                    if (b[l] !== true) {
                      f = i[0];
                      d.splice(h--, 0, f)
                    }
                  }
                  break
                }
              }
            }
          }
          if (c !== true) {
            if (c && a["throws"]) {
              j = c(j)
            } else {
              try {
                j = c(j)
              } catch (g) {
                return {
                  state: "parsererror",
                  error: c ? g : "No conversion from " + k + " to " + f
                }
              }
            }
          }
        }
        k = f
      }
    }
    return {
      state: "success",
      data: j
    }
  }
  dX.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (a) {
        dX.globalEval(a);
        return a
      }
    }
  });
  dX.ajaxPrefilter("script", function (a) {
    if (a.cache === ey) {
      a.cache = false
    }
    if (a.crossDomain) {
      a.type = "GET";
      a.global = false
    }
  });
  dX.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var c, b = cm.head || dX("head")[0] || cm.documentElement;
      return {
        send: function (f, d) {
          c = cm.createElement("script");
          c.async = true;
          if (a.scriptCharset) {
            c.charset = a.scriptCharset
          }
          c.src = a.url;
          c.onload = c.onreadystatechange = function (g, h) {
            if (h || !c.readyState || /loaded|complete/.test(c.readyState)) {
              c.onload = c.onreadystatechange = null;
              if (c.parentNode) {
                c.parentNode.removeChild(c)
              }
              c = null;
              if (!h) {
                d(200, "success")
              }
            }
          };
          b.insertBefore(c, b.firstChild)
        },
        abort: function () {
          if (c) {
            c.onload(ey, true)
          }
        }
      }
    }
  });
  var cK = [],
    b2 = /(=)\?(?=&|$)|\?\?/;
  dX.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = cK.pop() || (dX.expando + "_" + (dN++));
      this[a] = true;
      return a
    }
  });
  dX.ajaxPrefilter("json jsonp", function (b, f, a) {
    var g, d, c, h = b.jsonp !== false && (b2.test(b.url) ? "url" : typeof b.data === "string" && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && b2.test(b.data) && "data");
    if (h || b.dataTypes[0] === "jsonp") {
      g = b.jsonpCallback = dX.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
      if (h) {
        b[h] = b[h].replace(b2, "$1" + g)
      } else {
        if (b.jsonp !== false) {
          b.url += (dn.test(b.url) ? "&" : "?") + b.jsonp + "=" + g
        }
      }
      b.converters["script json"] = function () {
        if (!c) {
          dX.error(g + " was not called")
        }
        return c[0]
      };
      b.dataTypes[0] = "json";
      d = b5[g];
      b5[g] = function () {
        c = arguments
      };
      a.always(function () {
        b5[g] = d;
        if (b[g]) {
          b.jsonpCallback = f.jsonpCallback;
          cK.push(g)
        }
        if (c && dX.isFunction(d)) {
          d(c[0])
        }
        c = d = ey
      });
      return "script"
    }
  });
  var dW, dr, dp = 0,
    en = b5.ActiveXObject &&
  function () {
    var a;
    for (a in dW) {
      dW[a](ey, true)
    }
  };

  function d8() {
    try {
      return new b5.XMLHttpRequest()
    } catch (a) {}
  }

  function c9() {
    try {
      return new b5.ActiveXObject("Microsoft.XMLHTTP")
    } catch (a) {}
  }
  dX.ajaxSettings.xhr = b5.ActiveXObject ?
  function () {
    return !this.isLocal && d8() || c9()
  } : d8;
  dr = dX.ajaxSettings.xhr();
  dX.support.cors = !! dr && ("withCredentials" in dr);
  dr = dX.support.ajax = !! dr;
  if (dr) {
    dX.ajaxTransport(function (b) {
      if (!b.crossDomain || dX.support.cors) {
        var a;
        return {
          send: function (g, f) {
            var i, d, h = b.xhr();
            if (b.username) {
              h.open(b.type, b.url, b.async, b.username, b.password)
            } else {
              h.open(b.type, b.url, b.async)
            }
            if (b.xhrFields) {
              for (d in b.xhrFields) {
                h[d] = b.xhrFields[d]
              }
            }
            if (b.mimeType && h.overrideMimeType) {
              h.overrideMimeType(b.mimeType)
            }
            if (!b.crossDomain && !g["X-Requested-With"]) {
              g["X-Requested-With"] = "XMLHttpRequest"
            }
            try {
              for (d in g) {
                h.setRequestHeader(d, g[d])
              }
            } catch (c) {}
            h.send((b.hasContent && b.data) || null);
            a = function (j, p) {
              var o, q, r, l, m;
              try {
                if (a && (p || h.readyState === 4)) {
                  a = ey;
                  if (i) {
                    h.onreadystatechange = dX.noop;
                    if (en) {
                      delete dW[i]
                    }
                  }
                  if (p) {
                    if (h.readyState !== 4) {
                      h.abort()
                    }
                  } else {
                    l = {};
                    o = h.status;
                    m = h.responseXML;
                    r = h.getAllResponseHeaders();
                    if (m && m.documentElement) {
                      l.xml = m
                    }
                    if (typeof h.responseText === "string") {
                      l.text = h.responseText
                    }
                    try {
                      q = h.statusText
                    } catch (k) {
                      q = ""
                    }
                    if (!o && b.isLocal && !b.crossDomain) {
                      o = l.text ? 200 : 404
                    } else {
                      if (o === 1223) {
                        o = 204
                      }
                    }
                  }
                }
              } catch (n) {
                if (!p) {
                  f(-1, n)
                }
              }
              if (l) {
                f(o, q, l, r)
              }
            };
            if (!b.async) {
              a()
            } else {
              if (h.readyState === 4) {
                setTimeout(a)
              } else {
                i = ++dp;
                if (en) {
                  if (!dW) {
                    dW = {};
                    dX(b5).unload(en)
                  }
                  dW[i] = a
                }
                h.onreadystatechange = a
              }
            }
          },
          abort: function () {
            if (a) {
              a(ey, true)
            }
          }
        }
      }
    })
  }
  var c8, d4, dG = /^(?:toggle|show|hide)$/,
    dU = new RegExp("^(?:([+-])=|)(" + cx + ")([a-z%]*)$", "i"),
    dI = /queueHooks$/,
    eC = [cq],
    b7 = {
      "*": [function (g, c) {
        var i, b, a = this.createTween(g, c),
          h = dU.exec(c),
          f = a.cur(),
          k = +f || 0,
          j = 1,
          d = 20;
        if (h) {
          i = +h[2];
          b = h[3] || (dX.cssNumber[g] ? "" : "px");
          if (b !== "px" && k) {
            k = dX.css(a.elem, g, true) || i || 1;
            do {
              j = j || ".5";
              k = k / j;
              dX.style(a.elem, g, k + b)
            } while (j !== (j = a.cur() / f) && j !== 1 && --d)
          }
          a.unit = b;
          a.start = k;
          a.end = h[1] ? k + (h[1] + 1) * i : i
        }
        return a
      }]
    };

  function cT() {
    setTimeout(function () {
      c8 = ey
    });
    return (c8 = dX.now())
  }

  function c7(a, b) {
    dX.each(b, function (g, c) {
      var h = (b7[g] || []).concat(b7["*"]),
        f = 0,
        d = h.length;
      for (; f < d; f++) {
        if (h[f].call(a, g, c)) {
          return
        }
      }
    })
  }

  function cs(k, f, b) {
    var a, h, g = 0,
      l = eC.length,
      c = dX.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (h) {
          return false
        }
        var n = c8 || cT(),
          q = Math.max(0, j.startTime + j.duration - n),
          m = q / j.duration || 0,
          o = 1 - m,
          r = 0,
          p = j.tweens.length;
        for (; r < p; r++) {
          j.tweens[r].run(o)
        }
        c.notifyWith(k, [j, o, q]);
        if (o < 1 && p) {
          return q
        } else {
          c.resolveWith(k, [j]);
          return false
        }
      },
      j = c.promise({
        elem: k,
        props: dX.extend({}, f),
        opts: dX.extend(true, {
          specialEasing: {}
        }, b),
        originalProperties: f,
        originalOptions: b,
        startTime: c8 || cT(),
        duration: b.duration,
        tweens: [],
        createTween: function (n, m) {
          var o = dX.Tween(k, j.opts, n, m, j.opts.specialEasing[n] || j.opts.easing);
          j.tweens.push(o);
          return o
        },
        stop: function (o) {
          var m = 0,
            n = o ? j.tweens.length : 0;
          if (h) {
            return this
          }
          h = true;
          for (; m < n; m++) {
            j.tweens[m].run(1)
          }
          if (o) {
            c.resolveWith(k, [j, o])
          } else {
            c.rejectWith(k, [j, o])
          }
          return this
        }
      }),
      d = j.props;
    dM(d, j.opts.specialEasing);
    for (; g < l; g++) {
      a = eC[g].call(j, k, d, j.opts);
      if (a) {
        return a
      }
    }
    c7(j, d);
    if (dX.isFunction(j.opts.start)) {
      j.opts.start.call(k, j)
    }
    dX.fx.timer(dX.extend(i, {
      elem: k,
      anim: j,
      queue: j.opts.queue
    }));
    return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function dM(b, h) {
    var c, d, g, a, f;
    for (c in b) {
      d = dX.camelCase(c);
      g = h[d];
      a = b[c];
      if (dX.isArray(a)) {
        g = a[1];
        a = b[c] = a[0]
      }
      if (c !== d) {
        b[d] = a;
        delete b[c]
      }
      f = dX.cssHooks[d];
      if (f && "expand" in f) {
        a = f.expand(a);
        delete b[d];
        for (c in a) {
          if (!(c in b)) {
            b[c] = a[c];
            h[c] = g
          }
        }
      } else {
        h[d] = g
      }
    }
  }
  dX.Animation = dX.extend(cs, {
    tweener: function (d, a) {
      if (dX.isFunction(d)) {
        a = d;
        d = ["*"]
      } else {
        d = d.split(" ")
      }
      var b, f = 0,
        c = d.length;
      for (; f < c; f++) {
        b = d[f];
        b7[b] = b7[b] || [];
        b7[b].unshift(a)
      }
    },
    prefilter: function (a, b) {
      if (b) {
        eC.unshift(a)
      } else {
        eC.push(a)
      }
    }
  });

  function cq(o, h, n) {
    var i, q, f, p, a, l, b, c, d, m = this,
      r = o.style,
      g = {},
      j = [],
      k = o.nodeType && cX(o);
    if (!n.queue) {
      c = dX._queueHooks(o, "fx");
      if (c.unqueued == null) {
        c.unqueued = 0;
        d = c.empty.fire;
        c.empty.fire = function () {
          if (!c.unqueued) {
            d()
          }
        }
      }
      c.unqueued++;
      m.always(function () {
        m.always(function () {
          c.unqueued--;
          if (!dX.queue(o, "fx").length) {
            c.empty.fire()
          }
        })
      })
    }
    if (o.nodeType === 1 && ("height" in h || "width" in h)) {
      n.overflow = [r.overflow, r.overflowX, r.overflowY];
      if (dX.css(o, "display") === "inline" && dX.css(o, "float") === "none") {
        if (!dX.support.inlineBlockNeedsLayout || d7(o.nodeName) === "inline") {
          r.display = "inline-block"
        } else {
          r.zoom = 1
        }
      }
    }
    if (n.overflow) {
      r.overflow = "hidden";
      if (!dX.support.shrinkWrapBlocks) {
        m.done(function () {
          r.overflow = n.overflow[0];
          r.overflowX = n.overflow[1];
          r.overflowY = n.overflow[2]
        })
      }
    }
    for (i in h) {
      f = h[i];
      if (dG.exec(f)) {
        delete h[i];
        l = l || f === "toggle";
        if (f === (k ? "hide" : "show")) {
          continue
        }
        j.push(i)
      }
    }
    p = j.length;
    if (p) {
      a = dX._data(o, "fxshow") || dX._data(o, "fxshow", {});
      if ("hidden" in a) {
        k = a.hidden
      }
      if (l) {
        a.hidden = !k
      }
      if (k) {
        dX(o).show()
      } else {
        m.done(function () {
          dX(o).hide()
        })
      }
      m.done(function () {
        var s;
        dX._removeData(o, "fxshow");
        for (s in g) {
          dX.style(o, s, g[s])
        }
      });
      for (i = 0; i < p; i++) {
        q = j[i];
        b = m.createTween(q, k ? a[q] : 0);
        g[q] = a[q] || dX.style(o, q);
        if (!(q in a)) {
          a[q] = b.start;
          if (k) {
            b.end = b.start;
            b.start = q === "width" || q === "height" ? 1 : 0
          }
        }
      }
    }
  }

  function df(c, d, a, f, b) {
    return new df.prototype.init(c, d, a, f, b)
  }
  dX.Tween = df;
  df.prototype = {
    constructor: df,
    init: function (b, d, g, f, a, c) {
      this.elem = b;
      this.prop = g;
      this.easing = a || "swing";
      this.options = d;
      this.start = this.now = this.cur();
      this.end = f;
      this.unit = c || (dX.cssNumber[g] ? "" : "px")
    },
    cur: function () {
      var a = df.propHooks[this.prop];
      return a && a.get ? a.get(this) : df.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = df.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = b = dX.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)
      } else {
        this.pos = b = a
      }
      this.now = (this.end - this.start) * b + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }
      if (c && c.set) {
        c.set(this)
      } else {
        df.propHooks._default.set(this)
      }
      return this
    }
  };
  df.prototype.init.prototype = df.prototype;
  df.propHooks = {
    _default: {
      get: function (a) {
        var b;
        if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
          return a.elem[a.prop]
        }
        b = dX.css(a.elem, a.prop, "auto");
        return !b || b === "auto" ? 0 : b
      },
      set: function (a) {
        if (dX.fx.step[a.prop]) {
          dX.fx.step[a.prop](a)
        } else {
          if (a.elem.style && (a.elem.style[dX.cssProps[a.prop]] != null || dX.cssHooks[a.prop])) {
            dX.style(a.elem, a.prop, a.now + a.unit)
          } else {
            a.elem[a.prop] = a.now
          }
        }
      }
    }
  };
  df.propHooks.scrollTop = df.propHooks.scrollLeft = {
    set: function (a) {
      if (a.elem.nodeType && a.elem.parentNode) {
        a.elem[a.prop] = a.now
      }
    }
  };
  dX.each(["toggle", "show", "hide"], function (b, c) {
    var a = dX.fn[c];
    dX.fn[c] = function (f, g, d) {
      return f == null || typeof f === "boolean" ? a.apply(this, arguments) : this.animate(dY(c, true), f, g, d)
    }
  });
  dX.fn.extend({
    fadeTo: function (d, a, b, c) {
      return this.filter(cX).css("opacity", 0).show().end().animate({
        opacity: a
      }, d, b, c)
    },
    animate: function (g, b, h, a) {
      var c = dX.isEmptyObject(g),
        f = dX.speed(b, h, a),
        d = function () {
          var i = cs(this, dX.extend({}, g), f);
          d.finish = function () {
            i.stop(true)
          };
          if (c || dX._data(this, "finish")) {
            i.stop(true)
          }
        };
      d.finish = d;
      return c || f.queue === false ? this.each(d) : this.queue(f.queue, d)
    },
    stop: function (b, c, d) {
      var a = function (f) {
          var g = f.stop;
          delete f.stop;
          g(d)
        };
      if (typeof b !== "string") {
        d = c;
        c = b;
        b = ey
      }
      if (c && b !== false) {
        this.queue(b || "fx", [])
      }
      return this.each(function () {
        var g = true,
          f = b != null && b + "queueHooks",
          h = dX.timers,
          i = dX._data(this);
        if (f) {
          if (i[f] && i[f].stop) {
            a(i[f])
          }
        } else {
          for (f in i) {
            if (i[f] && i[f].stop && dI.test(f)) {
              a(i[f])
            }
          }
        }
        for (f = h.length; f--;) {
          if (h[f].elem === this && (b == null || h[f].queue === b)) {
            h[f].anim.stop(d);
            g = false;
            h.splice(f, 1)
          }
        }
        if (g || !d) {
          dX.dequeue(this, b)
        }
      })
    },
    finish: function (a) {
      if (a !== false) {
        a = a || "fx"
      }
      return this.each(function () {
        var c, g = dX._data(this),
          d = g[a + "queue"],
          f = g[a + "queueHooks"],
          h = dX.timers,
          b = d ? d.length : 0;
        g.finish = true;
        dX.queue(this, a, []);
        if (f && f.cur && f.cur.finish) {
          f.cur.finish.call(this)
        }
        for (c = h.length; c--;) {
          if (h[c].elem === this && h[c].queue === a) {
            h[c].anim.stop(true);
            h.splice(c, 1)
          }
        }
        for (c = 0; c < b; c++) {
          if (d[c] && d[c].finish) {
            d[c].finish.call(this)
          }
        }
        delete g.finish
      })
    }
  });

  function dY(c, a) {
    var b, f = {
      height: c
    },
      d = 0;
    a = a ? 1 : 0;
    for (; d < 4; d += 2 - a) {
      b = dD[d];
      f["margin" + b] = f["padding" + b] = c
    }
    if (a) {
      f.opacity = f.width = c
    }
    return f
  }
  dX.each({
    slideDown: dY("show"),
    slideUp: dY("hide"),
    slideToggle: dY("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (b, a) {
    dX.fn[b] = function (f, c, d) {
      return this.animate(a, f, c, d)
    }
  });
  dX.speed = function (b, a, c) {
    var d = b && typeof b === "object" ? dX.extend({}, b) : {
      complete: c || !c && a || dX.isFunction(b) && b,
      duration: b,
      easing: c && a || a && !dX.isFunction(a) && a
    };
    d.duration = dX.fx.off ? 0 : typeof d.duration === "number" ? d.duration : d.duration in dX.fx.speeds ? dX.fx.speeds[d.duration] : dX.fx.speeds._default;
    if (d.queue == null || d.queue === true) {
      d.queue = "fx"
    }
    d.old = d.complete;
    d.complete = function () {
      if (dX.isFunction(d.old)) {
        d.old.call(this)
      }
      if (d.queue) {
        dX.dequeue(this, d.queue)
      }
    };
    return d
  };
  dX.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2
    }
  };
  dX.timers = [];
  dX.fx = df.prototype.init;
  dX.fx.tick = function () {
    var a, b = dX.timers,
      c = 0;
    c8 = dX.now();
    for (; c < b.length; c++) {
      a = b[c];
      if (!a() && b[c] === a) {
        b.splice(c--, 1)
      }
    }
    if (!b.length) {
      dX.fx.stop()
    }
    c8 = ey
  };
  dX.fx.timer = function (a) {
    if (a() && dX.timers.push(a)) {
      dX.fx.start()
    }
  };
  dX.fx.interval = 13;
  dX.fx.start = function () {
    if (!d4) {
      d4 = setInterval(dX.fx.tick, dX.fx.interval)
    }
  };
  dX.fx.stop = function () {
    clearInterval(d4);
    d4 = null
  };
  dX.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  dX.fx.step = {};
  if (dX.expr && dX.expr.filters) {
    dX.expr.filters.animated = function (a) {
      return dX.grep(dX.timers, function (b) {
        return a === b.elem
      }).length
    }
  }
  dX.fn.offset = function (d) {
    if (arguments.length) {
      return d === ey ? this : this.each(function (h) {
        dX.offset.setOffset(this, d, h)
      })
    }
    var f, g, b = {
      top: 0,
      left: 0
    },
      c = this[0],
      a = c && c.ownerDocument;
    if (!a) {
      return
    }
    f = a.documentElement;
    if (!dX.contains(f, c)) {
      return b
    }
    if (typeof c.getBoundingClientRect !== "undefined") {
      b = c.getBoundingClientRect()
    }
    g = cN(a);
    return {
      top: b.top + (g.pageYOffset || f.scrollTop) - (f.clientTop || 0),
      left: b.left + (g.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
    }
  };
  dX.offset = {
    setOffset: function (l, a, h) {
      var g = dX.css(l, "position");
      if (g === "static") {
        l.style.position = "relative"
      }
      var i = dX(l),
        n = i.offset(),
        j = dX.css(l, "top"),
        c = dX.css(l, "left"),
        b = (g === "absolute" || g === "fixed") && dX.inArray("auto", [j, c]) > -1,
        d = {},
        f = {},
        m, k;
      if (b) {
        f = i.position();
        m = f.top;
        k = f.left
      } else {
        m = parseFloat(j) || 0;
        k = parseFloat(c) || 0
      }
      if (dX.isFunction(a)) {
        a = a.call(l, h, n)
      }
      if (a.top != null) {
        d.top = (a.top - n.top) + m
      }
      if (a.left != null) {
        d.left = (a.left - n.left) + k
      }
      if ("using" in a) {
        a.using.call(l, d)
      } else {
        i.css(d)
      }
    }
  };
  dX.fn.extend({
    position: function () {
      if (!this[0]) {
        return
      }
      var b, a, d = {
        top: 0,
        left: 0
      },
        c = this[0];
      if (dX.css(c, "position") === "fixed") {
        a = c.getBoundingClientRect()
      } else {
        b = this.offsetParent();
        a = this.offset();
        if (!dX.nodeName(b[0], "html")) {
          d = b.offset()
        }
        d.top += dX.css(b[0], "borderTopWidth", true);
        d.left += dX.css(b[0], "borderLeftWidth", true)
      }
      return {
        top: a.top - d.top - dX.css(c, "marginTop", true),
        left: a.left - d.left - dX.css(c, "marginLeft", true)
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || cm.documentElement;
        while (a && (!dX.nodeName(a, "html") && dX.css(a, "position") === "static")) {
          a = a.offsetParent
        }
        return a || cm.documentElement
      })
    }
  });
  dX.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);
    dX.fn[a] = function (d) {
      return dX.access(this, function (f, g, h) {
        var i = cN(f);
        if (h === ey) {
          return i ? (b in i) ? i[b] : i.document.documentElement[g] : f[g]
        }
        if (i) {
          i.scrollTo(!c ? h : dX(i).scrollLeft(), c ? h : dX(i).scrollTop())
        } else {
          f[g] = h
        }
      }, a, d, arguments.length, null)
    }
  });

  function cN(a) {
    return dX.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
  }
  dX.each({
    Height: "height",
    Width: "width"
  }, function (b, a) {
    dX.each({
      padding: "inner" + b,
      content: a,
      "": "outer" + b
    }, function (d, c) {
      dX.fn[c] = function (g, h) {
        var i = arguments.length && (d || typeof g !== "boolean"),
          f = d || (g === true || h === true ? "margin" : "border");
        return dX.access(this, function (l, m, k) {
          var j;
          if (dX.isWindow(l)) {
            return l.document.documentElement["client" + b]
          }
          if (l.nodeType === 9) {
            j = l.documentElement;
            return Math.max(l.body["scroll" + b], j["scroll" + b], l.body["offset" + b], j["offset" + b], j["client" + b])
          }
          return k === ey ? dX.css(l, m, f) : dX.style(l, m, k, f)
        }, a, i ? g : ey, i, null)
      }
    })
  });
  b5.jQuery = b5.$ = dX;
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define("jquery", [], function () {
      return dX
    })
  }
})(window);

$(document).ready(function () {
  $("body").append("<div id='divSmallBoxes'></div>");
  $("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>");
  $(".OpenSideBar").pageslide({
    direction: "left"
  })
});

function MetroUnLoading() {
  $(".LoadingBoxContainer").addClass("animated fadeOut fast");
  MetroMSGboxCount = MetroMSGboxCount - 1;
  if (MetroMSGboxCount == 0) {
    $("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
      ExistMsg = 0;
      $(this).remove()
    })
  }
  Point = 1;
  MetroLoadingTimer = 0;
  PointText = ""
}
var ExistMsg = 0;
var MetroMSGboxCount = 0;
var PrevTop = 0;
(function (b) {
  b.MetroMessageBox = function (v, a) {
    var s, u;
    v = b.extend({
      title: "",
      content: "",
      NormalButton: undefined,
      ActiveButton: undefined,
      buttons: undefined,
      input: undefined,
      placeholder: "",
      options: undefined
    }, v);
    var n = 0;
    n = 1;
    if (isIE8orlower() == 0) {
      var i = document.createElement("audio");
      i.setAttribute("src", "static/sound/messagebox.mp3");
      b.get();
      i.addEventListener("load", function () {
        i.play()
      }, true);
      i.pause();
      i.play()
    }
    MetroMSGboxCount = MetroMSGboxCount + 1;
    if (ExistMsg == 0) {
      ExistMsg = 1;
      s = "<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>";
      b("body").append(s);
      if (isIE8orlower() == 1) {
        b("#MsgBoxBack").addClass("MessageIE")
      }
    }
    var t = "";
    var o = 0;
    if (v.input != undefined) {
      o = 1;
      v.input = v.input.toLowerCase();
      switch (v.input) {
      case "text":
        t = "<input type='" + v.input + "' id='txt" + MetroMSGboxCount + "' placeholder='" + v.placeholder + "'/><br/><br/>";
        break;
      case "password":
        t = "<input type='" + v.input + "' id='txt" + MetroMSGboxCount + "' placeholder='" + v.placeholder + "'/><br/><br/>";
        break;
      case "select":
        if (v.options == undefined) {
          alert("For this type of input, the options parameter is required.")
        } else {
          t = "<select id='txt" + MetroMSGboxCount + "'>";
          for (var p = 0; p <= v.options.length - 1; p++) {
            if (v.options[p] == "[") {
              q = ""
            } else {
              if (v.options[p] == "]") {
                r = r + 1;
                q = "<option>" + q + "</option>";
                t += q
              } else {
                q += v.options[p]
              }
            }
          }
          t += "</select>"
        }
        break;
      default:
        alert("That type of input is not handled yet")
      }
    }
    u = "<div class='MessageBoxContainer animated fadeIn fast' id='Msg" + MetroMSGboxCount + "'>";
    u += "<div class='MessageBoxMiddle'>";
    u += "<span class='MsgTitle'>" + v.title + "</span class='MsgTitle'>";
    u += "<p class='pText'>" + v.content + "</p>";
    u += t;
    u += "<div class='MessageBoxButtonSection'>";
    if (v.buttons == undefined) {
      v.buttons = "[Accept]"
    }
    v.buttons = b.trim(v.buttons);
    v.buttons = v.buttons.split("");
    var q = "";
    var r = 0;
    if (v.NormalButton == undefined) {
      v.NormalButton = "#232323"
    }
    if (v.ActiveButton == undefined) {
      v.ActiveButton = "#ed145b"
    }
    for (var p = 0; p <= v.buttons.length - 1; p++) {
      if (v.buttons[p] == "[") {
        q = ""
      } else {
        if (v.buttons[p] == "]") {
          r = r + 1;
          q = "<button id='bot" + r + "-Msg" + MetroMSGboxCount + "' class='botTempo' style='background-color: " + v.NormalButton + ";'> " + q + "</button>";
          u += q
        } else {
          q += v.buttons[p]
        }
      }
    }
    u += "</div>";
    u += "</div>";
    u += "</div>";
    if (MetroMSGboxCount > 1) {
      b(".MessageBoxContainer").hide();
      b(".MessageBoxContainer").css("z-index", 99999)
    }
    b(".divMessageBox").append(u);
    if (o == 1) {
      b("#txt" + MetroMSGboxCount).focus()
    }
    b(".botTempo").hover(function () {
      var c = b(this).attr("id");
      b("#" + c).css("background-color", v.ActiveButton)
    }, function () {
      var c = b(this).attr("id");
      b("#" + c).css("background-color", v.NormalButton)
    });
    b(".botTempo").click(function () {
      var d = b(this).attr("id");
      var e = d.substr(d.indexOf("-") + 1);
      var g = b.trim(b(this).text());
      if (o == 1) {
        if (typeof a == "function") {
          var f = e.replace("Msg", "");
          var c = b("#txt" + f).val();
          if (a) {
            a(g, c)
          }
        }
      } else {
        if (typeof a == "function") {
          if (a) {
            a(g)
          }
        }
      }
      b("#" + e).addClass("animated fadeOut fast");
      MetroMSGboxCount = MetroMSGboxCount - 1;
      if (MetroMSGboxCount == 0) {
        b("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
          ExistMsg = 0;
          b(this).remove()
        })
      }
    })
  }
})(jQuery);
var Point = 1;
var MetroLoadingTimer = 0;
var PointText = "";
var MetroExist = false;
(function (b) {
  b.MetroLoading = function (i, h) {
    var k;
    i = b.extend({
      title: undefined,
      content: undefined,
      img: undefined,
      timeout: undefined,
      special: undefined
    }, i);
    MetroMSGboxCount = MetroMSGboxCount + 1;
    if (ExistMsg == 0) {
      ExistMsg = 1;
      k = "<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>";
      b("body").append(k);
      if (isIE8orlower() == 1) {
        b("#MsgBoxBack").addClass("MessageIE")
      }
    }
    if (i.title == undefined) {
      i.title = "Loading"
    }
    if (i.content == undefined) {
      i.content = "Please wait."
    }
    var l = "";
    if (i.img == undefined) {
      i.img = "";
      l = "<br/><br/><br/><br/><br/>"
    } else {
      i.img = "<img src='" + i.img + "' class='animated fadeIn'/>"
    }
    var j = "";
    j += "<div class='LoadingBoxContainer'>";
    j += "<div class='LoadingBoxMiddle'>";
    j += "<div align='center'>";
    j += "<br/><br/>";
    j += i.img;
    j += "<br/><br/><br/>";
    if (i.special == true) {
      j += "<span class='MsgTitle animated fadeIn' id='lblSpecialTitle'>" + i.title + "</span>"
    } else {
      j += "<br/><span class='MsgTitle animated fadeIn'>" + i.title + "<span id='LoadingPoints'>.</span></span>";
      j += "<p class='pText animated fadeIn'>" + i.content + "</p>"
    }
    j += l;
    j += "</div>";
    j += "</div>";
    j += "</div>";
    b(".divMessageBox").append(j);
    if (i.timeout == undefined) {
      i.timeout = 3000
    }
    var a = setInterval(function () {
      if (b(".LoadingBoxContainer").length > 0) {} else {
        window.clearInterval(a)
      }
      if (i.special == true) {
        if (MetroLoadingTimer == 2) {
          b("#lblSpecialTitle").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
            b(this).text(i.content);
            b(this).clearQueue();
            b(this).removeClass("fadeOut");
            b(this).addClass("fadeIn")
          });
          MetroLoadingTimer += 1
        } else {
          if (MetroLoadingTimer == 5) {
            b("#lblSpecialTitle").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
              b(this).text(i.title);
              b(this).clearQueue();
              b(this).removeClass("fadeOut");
              b(this).addClass("fadeIn")
            });
            MetroLoadingTimer = 0
          } else {
            MetroLoadingTimer += 1
          }
        }
      } else {
        if (Point == 0) {
          PointText = ".";
          Point += 1
        } else {
          if (Point == 1) {
            PointText = "..";
            Point += 1
          } else {
            if (Point == 2) {
              PointText = "...";
              Point += 1
            } else {
              if (Point == 3) {
                PointText = "....";
                Point = 0
              }
            }
          }
        }
        b("#LoadingPoints").text(PointText)
      }
    }, 750);
    setTimeout(function () {
      b(".LoadingBoxContainer").addClass("animated fadeOut fast");
      MetroMSGboxCount = MetroMSGboxCount - 1;
      window.clearInterval(a);
      if (MetroMSGboxCount == 0) {
        b("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
          ExistMsg = 0;
          b(this).remove()
        })
      }
      if (typeof h == "function") {
        if (h) {
          h()
        }
      }
    }, i.timeout)
  }
})(jQuery);
var BigBoxes = 0;
(function (b) {
  b.bigBox = function (a, h) {
    var k, l;
    a = b.extend({
      title: "",
      content: "",
      img: undefined,
      number: undefined,
      color: undefined,
      timeout: undefined
    }, a);
    if (isIE8orlower() == 0) {
      var i = document.createElement("audio");
      i.setAttribute("src", "static/sound/bigbox.mp3");
      b.get();
      i.addEventListener("load", function () {
        i.play()
      }, true);
      i.pause();
      i.play()
    }
    BigBoxes = BigBoxes + 1;
    k = "<div id='bigBox" + BigBoxes + "' class='bigBox animated fadeIn fast'><div id='bigBoxColor" + BigBoxes + "'><img class='botClose' id='botClose" + BigBoxes + "' src='static/img/close.png'>";
    k += "<span>" + a.title + "</span>";
    k += "<p>" + a.content + "</p>";
    k += "<div class='bigboxicon'>";
    if (a.img == undefined) {
      a.img = "static/img/cloud.png"
    }
    k += "<img src='" + a.img + "'>";
    k += "</div>";
    k += "<div class='bigboxnumber'>";
    if (a.number != undefined) {
      k += a.number
    }
    k += "</div></div>";
    k += "</div>";
    b("#divbigBoxes").append(k);
    if (a.color == undefined) {
      a.color = "#004d60"
    }
    b("#bigBox" + BigBoxes).css("background-color", a.color);
    b("#divMiniIcons").append("<div id='miniIcon" + BigBoxes + "' class='cajita animated fadeIn' style='background-color: " + a.color + ";'><img src='" + a.img + "'/></div>");
    b("#miniIcon" + BigBoxes).bind("click", function () {
      var c = b(this).attr("id");
      var d = c.replace("miniIcon", "bigBox");
      var e = c.replace("miniIcon", "bigBoxColor");
      b(".cajita").each(function (g) {
        var n = b(this).attr("id");
        var f = n.replace("miniIcon", "bigBox");
        b("#" + f).css("z-index", 9998)
      });
      b("#" + d).css("z-index", 9999);
      b("#" + e).removeClass("animated fadeIn").delay(1).queue(function () {
        b(this).show();
        b(this).addClass("animated fadeIn");
        b(this).clearQueue()
      })
    });
    b("#botClose" + BigBoxes).bind("click", function () {
      if (typeof h == "function") {
        if (h) {
          h()
        }
      }
      var d = b(this).attr("id");
      var e = d.replace("botClose", "bigBox");
      var c = d.replace("botClose", "miniIcon");
      b("#" + e).removeClass("fadeIn fast");
      b("#" + e).addClass("fadeOut fast").delay(300).queue(function () {
        b(this).clearQueue();
        b(this).remove()
      });
      b("#" + c).removeClass("fadeIn fast");
      b("#" + c).addClass("fadeOut fast").delay(300).queue(function () {
        b(this).clearQueue();
        b(this).remove()
      })
    });
    if (a.timeout != undefined) {
      var j = BigBoxes;
      setTimeout(function () {
        b("#bigBox" + j).removeClass("fadeIn fast");
        b("#bigBox" + j).addClass("fadeOut fast").delay(300).queue(function () {
          b(this).clearQueue();
          b(this).remove()
        });
        b("#miniIcon" + j).removeClass("fadeIn fast");
        b("#miniIcon" + j).addClass("fadeOut fast").delay(300).queue(function () {
          b(this).clearQueue();
          b(this).remove()
        })
      }, a.timeout)
    }
  }
})(jQuery);
var SmallBoxes = 0;
var SmallCount = 0;
var SmallBoxesAnchos = 0;
(function (b) {
  b.smallBox = function (o, j) {
    var m, n;
    o = b.extend({
      title: "",
      content: "",
      img: undefined,
      icon: undefined,
      color: undefined,
      timeout: undefined
    }, o);
    if (isIE8orlower() == 0) {
      var k = document.createElement("audio");
      k.setAttribute("src", "static/sound/smallbox.mp3");
      b.get();
      k.addEventListener("load", function () {
        k.play()
      }, true);
      k.pause();
      k.play()
    }
    SmallBoxes = SmallBoxes + 1;
    m = "";
    var p = "";
    var a = "smallbox" + SmallBoxes;
    if (o.icon == undefined) {
      p = "<div class='miniIcono'></div>"
    } else {
      p = "<div class='miniIcono'><img class='miniPic' src='" + o.icon + "'></div>"
    }
    if (o.img == undefined) {
      m = "<div id='smallbox" + SmallBoxes + "' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>" + o.title + "</span><p>" + o.content + "</p></div>" + p + "</div>"
    } else {
      m = "<div id='smallbox" + SmallBoxes + "' class='SmallBox animated fadeInRight fast'><div class='foto'><img src='" + o.img + "'></div><div class='textoFoto'><span>" + o.title + "</span><p>" + o.content + "</p></div>" + p + "</div>"
    }
    if (SmallBoxes == 1) {
      b("#divSmallBoxes").append(m);
      SmallBoxesAnchos = b("#smallbox" + SmallBoxes).height() + 40
    } else {
      var l = b(".SmallBox").size();
      if (l == 0) {
        b("#divSmallBoxes").append(m);
        SmallBoxesAnchos = b("#smallbox" + SmallBoxes).height() + 40
      } else {
        b("#divSmallBoxes").append(m);
        b("#smallbox" + SmallBoxes).css("top", SmallBoxesAnchos);
        SmallBoxesAnchos = SmallBoxesAnchos + b("#smallbox" + SmallBoxes).height() + 20;
        b(".SmallBox").each(function (c) {
          if (c == 0) {
            b(this).css("top", 20);
            heightPrev = b(this).height() + 40;
            SmallBoxesAnchos = b(this).height() + 40
          } else {
            b(this).css("top", heightPrev);
            heightPrev = heightPrev + b(this).height() + 20;
            SmallBoxesAnchos = SmallBoxesAnchos + b(this).height() + 20
          }
        })
      }
    }
    if (o.color == undefined) {
      b("#smallbox" + SmallBoxes).css("background-color", "#004d60")
    } else {
      b("#smallbox" + SmallBoxes).css("background-color", o.color)
    }
    if (o.timeout != undefined) {
      setTimeout(function () {
        var d = b(this).height() + 20;
        var f = a;
        var c = b("#" + a).css("top");
        SmallBoxesAnchos = SmallBoxesAnchos - d;
        b("#" + a).remove();
        var g = 1;
        var e = 0;
        b(".SmallBox").each(function (h) {
          if (h == 0) {
            b(this).css("top", 20);
            e = b(this).height() + 40;
            SmallBoxesAnchos = b(this).height() + 40
          } else {
            b(this).css("top", e);
            e = e + b(this).height() + 20;
            SmallBoxesAnchos = SmallBoxesAnchos + b(this).height() + 20
          }
        })
      }, o.timeout)
    }
    b("#smallbox" + SmallBoxes).bind("click", function () {
      if (typeof j == "function") {
        if (j) {
          j()
        }
      }
      var d = b(this).height() + 20;
      var f = b(this).attr("id");
      var c = b(this).css("top");
      SmallBoxesAnchos = SmallBoxesAnchos - d;
      b(this).remove();
      var g = 1;
      var e = 0;
      b(".SmallBox").each(function (h) {
        if (h == 0) {
          b(this).css("top", 20);
          e = b(this).height() + 40;
          SmallBoxesAnchos = b(this).height() + 40
        } else {
          b(this).css("top", e);
          e = e + b(this).height() + 20;
          SmallBoxesAnchos = SmallBoxesAnchos + b(this).height() + 20
        }
      })
    })
  }
})(jQuery);

function Hola() {
  alert("Hola Mundo")
}

function CloseSide() {
  $.pageslide.close()
}(function (l) {
  var m, j;
  l(function () {
    m = l("body"), j = l("#pageslide");
    if (j.length == 0) {
      j = l("<div />").attr("id", "pageslide").css("display", "none").appendTo(l("body"))
    }
    j.click(function (a) {
      a.stopPropagation()
    });
    l(document).bind("click keyup", function (a) {
      if (a.type == "keyup" && a.keyCode != 27) {
        return
      }

      if (j.is(":visible") && !j.data("modal")) {
        l.pageslide.close()
      }
    })
  });
  var i = false,
    k;

  function n(b, c) {
    if (b.indexOf("#") === 0) {
      l(b).clone(true).appendTo(j.empty()).show()
    } else {
      if (c) {
        var a = l("<iframe />").attr({
          src: b,
          frameborder: 0,
          hspace: 0
        }).css({
          width: "100%",
          height: "100%"
        });
        j.html(a)
      } else {
        j.load(b)
      }
      j.data("localEl", false)
    }
  }

  function h(c, d) {
    var a = j.outerWidth(true),
      b = {},
      e = {};
    if (j.is(":visible") || i) {
      return
    }
    i = true;
    switch (c) {
    case "left":
      j.css({
        left: "auto",
        right: "-" + a + "px"
      });
      b["margin-left"] = "-=" + a;
      e.right = "+=" + a;
      break;
    default:
      j.css({
        left: "-" + a + "px",
        right: "auto"
      });
      b["margin-left"] = "+=" + a;
      e.left = "+=" + a;
      break
    }
    m.animate(b, d);
    j.show().animate(e, d, function () {
      i = false
    })
  }
  l.fn.pageslide = function (b) {
    var a = this;
    a.click(function (d) {
      var c = l(this),
        e = l.extend({
          href: c.attr("href")
        }, b);
      d.preventDefault();
      d.stopPropagation();
      if (j.is(":visible") && c[0] == k) {
        l.pageslide.close()
      } else {
        l.pageslide(e);
        k = c[0]
      }
    })
  };
  l.fn.pageslide.defaults = {
    speed: 200,
    direction: "right",
    modal: false,
    iframe: true,
    href: null
  };
  l.pageslide = function (b) {
    var a = l.extend({}, l.fn.pageslide.defaults, b);
    if (j.is(":visible") && j.data("direction") != a.direction) {
      l.pageslide.close(function () {
        n(a.href, a.iframe);
        h(a.direction, a.speed)
      })
    } else {
      n(a.href, a.iframe);
      if (j.is(":hidden")) {
        h(a.direction, a.speed)
      }
    }
    j.data(a)
  };
  l.pageslide.close = function (a) {
    var b = l("#pageslide"),
      c = b.outerWidth(true),
      e = b.data("speed"),
      d = {},
      f = {};
    if (b.is(":hidden") || i) {
      return
    }
    i = true;
    switch (b.data("direction")) {
    case "left":
      d["margin-left"] = "+=" + c;
      f.right = "-=" + c;
      break;
    default:
      d["margin-left"] = "-=" + c;
      f.left = "-=" + c;
      break
    }
    b.animate(f, e);
    m.animate(d, e, function () {
      b.hide();
      i = false;
      if (typeof a != "undefined") {
        a()
      }
    })
  }
})(jQuery);

function getInternetExplorerVersion() {
  var f = -1;
  if (navigator.appName == "Microsoft Internet Explorer") {
    var e = navigator.userAgent;
    var d = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (d.exec(e) != null) {
      f = parseFloat(RegExp.$1)
    }
  }
  return f
}

function checkVersion() {
  var c = "You're not using Windows Internet Explorer.";
  var d = getInternetExplorerVersion();
  if (d > -1) {
    if (d >= 8) {
      c = "You're using a recent copy of Windows Internet Explorer."
    } else {
      c = "You should upgrade your copy of Windows Internet Explorer."
    }
  }
  alert(c)
}

function isIE8orlower() {
  var c = "0";
  var d = getInternetExplorerVersion();
  if (d > -1) {
    if (d >= 9) {
      c = 0
    } else {
      c = 1
    }
  }
  return c
}
/**
 * News class
 * @param {object} parameters
 * @returns {Dashboard}
 */
var News = function(parameters) {
    var $__s = this,
            params = parameters,
            obj = {
                page: {
                    /**
                     * initializer
                     * @returns {undefined}
                     */
                    _init: function() {
                        this._bind();
                        this._initCountries();
                    },
                    /**
                     * add html element binders
                     * @returns {undefined}
                     */
                    _bind: function() {

                    },
                    /**
                     * init countries tab
                     * @returns {undefined}
                     */
                    _initCountries: function() {
                        var countries = new ddtabcontent("countrytabs");
                        countries.setpersist(true);
                        countries.setselectedClassTarget("link");
                        countries.init();
                    },
                    /**
                     * show global notification
                     * 
                     * @param {string} msg
                     * @param {string} title
                     * @returns {undefined}
                     */
                    _notify: function(msg,title){
                        $.bigBox({
                            title: title,
                            content: msg,
                            color: "#fa6800 ",
                            timeout: 8000,
                            img: "static/img/cloud.png ",
                        });
                    }

                },
                socket: {
                    /**
                     * initializer
                     * @returns {undefined}
                     */
                    _init: function() {
                        var socket = io.connect('http://localhost:8001/');
                        socket.on('socketio_news',function(data){
                            var news = $.parseJSON(data) ;
                            obj.page._notify(news.description,news.title);
                        });
                    }
                }
            };
    return {
        /**
         * page intializer :
         *  intialize binders and listener 
         * 
         * @returns {undefined}
         */
        init: function() {
            obj.page._init();
            obj.socket._init();
        }
    }
};
News.prototype = new News({});