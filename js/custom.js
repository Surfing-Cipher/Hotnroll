/*

 	panr - v0.0.1

 	jQuery plugin for zoom & pan elements on mousemove

	by Robert Bue (@robert_bue)



	Powered by the Greensock Tweening Platform

	http://www.greensock.com

	Greensock License info at http://www.greensock.com/licensing/

 	

 	Dual licensed under MIT and GPL.

 */



!function(e,t,n,a){function s(t,n){this.element=t,this.settings=e.extend({},i,n),this._defaults=i,this._name=o,this.init()}var o="panr",i={sensitivity:30,scale:!0,scaleOnHover:!1,moveTarget:"container",scaleTo:1.1,scaleDuration:.25,panY:!0,panX:!0,panDuration:1.25,resetPanOnMouseLeave:!1,onEnter:function(){},onLeave:function(){}};s.prototype={init:function(){var r,c,l,u,f,v,t=this.settings,n=e(this.element),a=n.width(),i=(n.height(),n.width()-t.sensitivity),s=(a-i)/i;(t.scale||!t.scaleOnHover&&t.scale)&&TweenMax.set(n,{scale:t.scaleTo}),"container"===jQuery.type(t.moveTarget)&&(t.moveTarget=e(this.element).closest(t.moveTarget)),t.moveTarget||(t.moveTarget=e(this.element)),"container"==t.moveTarget&&(t.moveTarget=e(this.element).closest(".layer-panr")),t.moveTarget.on("mousemove",function(a){r=a.pageX-n.offset().left,c=a.pageY-n.offset().top,t.panX&&(u={x:-s*r}),t.panY&&(f={y:-s*c}),l=e.extend({},u,f),TweenMax.to(n,t.panDuration,l)}),t.moveTarget.on("mouseenter",function(e){t.scaleOnHover&&TweenMax.to(n,t.scaleDuration,{scale:t.scaleTo}),t.onEnter(n)}),t.scale&&(t.scaleOnHover||t.scale)?t.resetPanOnMouseLeave&&(v={x:0,y:0}):v={scale:1,x:0,y:0},t.moveTarget.on("mouseleave",function(e){TweenMax.to(n,t.scaleDuration,v),t.onLeave(n)})}},e.fn[o]=function(t){return this.each(function(){e.data(this,"plugin_"+o)||e.data(this,"plugin_"+o,new s(this,t))})}}(jQuery,window,document);



 /* == malihu jquery custom scrollbar plugin == Version: 3.0.9, License: MIT License (MIT) */

!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),S.call(this),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r.children())),n.overflowed=B.call(this),O.call(this),i.autoDraggerLength&&b.call(this),C.call(this),k.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?l[0].height()>l[0].parent().height()?T.call(this):(Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(T.call(this),"y"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?l[1].width()>l[1].parent().width()?T.call(this):(Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(T.call(this),"x"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=j.call(this,c[0],"y"),c[1]=j.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),M.call(this),t&&T.call(this),O.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),M.call(this),T.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p.children())),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis&&i.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),position:"relative"}).unwrap()},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=t.css("max-height")||"none",r=-1!==i.indexOf("%"),l=t.css("box-sizing");if("none"!==i){var s=r?t.parent().height()*parseInt(i)/100:parseInt(i);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),n.css("max-height",Math.round(s))}},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},C=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},y=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},B=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1);return[r>n.height(),l>n.width()]},T=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},k=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(R.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),H.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&U.call(this),i.keyboard.enable&&F.call(this),n.bindEvents=!0}},M=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(document).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1)},O=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},I=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return e.target.ownerDocument!==document?[e.originalEvent.screenY,e.originalEvent.screenX,!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var o=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[o.screenY,o.screenX,a>1]:[o.pageY,o.pageX,a>1];default:return[e.pageY,e.pageX,!1]}},R=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;Q(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p;p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),$(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),V(l),n=e(this);var a=n.offset(),d=I(o)[0]-a.top,f=I(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),y(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;o(i,r,a,l)}),e(document).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;if(i===a)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(y(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,S=0,b=0,C.removeClass("mCS_touch_action");var o=M.offset();d=I(e)[0]-o.top,u=I(e)[1]-o.left,A=[I(e)[0],I(e)[1]]}function n(e){if(ee(e)&&!c&&!I(e)[2]&&(e.stopImmediatePropagation(),!b||S)){p=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left,n="mcsLinearOut";if(R.push(o),D.push(a),A[2]=Math.abs(I(e)[0]-A[0]),A[3]=Math.abs(I(e)[1]-A[1]),y.overflowed[0])var i=O[0].parent().height()-O[0].height(),r=d-o>0&&o-d>-(i*y.scrollRatio.y)&&(2*A[3]<A[2]||"yx"===B.axis);if(y.overflowed[1])var l=O[1].parent().width()-O[1].width(),f=u-a>0&&a-u>-(l*y.scrollRatio.x)&&(2*A[2]<A[3]||"yx"===B.axis);r||f?(e.preventDefault(),S=1):(b=1,C.addClass("mCS_touch_action")),_="yx"===B.axis?[d-o,u-a]:"x"===B.axis?[null,u-a]:[d-o,null],M[0].idleTimer=250,y.overflowed[0]&&s(_[0],E,n,"y","all",!0),y.overflowed[1]&&s(_[1],E,n,"x",W,!0)}}function i(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),V(C),m=J();var o=k.offset();f=I(e)[0]-o.top,h=I(e)[1]-o.left,R=[],D=[]}function r(e){if(ee(e)&&!c&&!I(e)[2]){e.stopImmediatePropagation(),S=0,b=0,g=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left;if(!(g-p>30)){x=1e3/(g-m);var n="mcsEaseOut",i=2.5>x,r=i?[R[R.length-2],D[D.length-2]]:[0,0];v=i?[o-r[0],a-r[1]]:[o-f,a-h];var d=[Math.abs(v[0]),Math.abs(v[1])];x=i?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[x,x];var u=[Math.abs(M[0].offsetTop)-v[0]*l(d[0]/x[0],x[0]),Math.abs(M[0].offsetLeft)-v[1]*l(d[1]/x[1],x[1])];_="yx"===B.axis?[u[0],u[1]]:"x"===B.axis?[null,u[1]]:[u[0],null],w=[4*d[0]+B.scrollInertia,4*d[1]+B.scrollInertia];var C=parseInt(B.contentTouchScroll)||0;_[0]=d[0]>C?_[0]:0,_[1]=d[1]>C?_[1]:0,y.overflowed[0]&&s(_[0],w[0],n,"y",W,!1),y.overflowed[1]&&s(_[1],w[1],n,"x",W,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&Q(C,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C=e(this),y=C.data(a),B=y.opt,T=a+"_"+y.idx,k=e("#mCSB_"+y.idx),M=e("#mCSB_"+y.idx+"_container"),O=[e("#mCSB_"+y.idx+"_dragger_vertical"),e("#mCSB_"+y.idx+"_dragger_horizontal")],R=[],D=[],E=0,W="yx"===B.axis?"none":"all",A=[],P=M.find("iframe"),z=["touchstart."+T+" pointerdown."+T+" MSPointerDown."+T,"touchmove."+T+" pointermove."+T+" MSPointerMove."+T,"touchend."+T+" pointerup."+T+" MSPointerUp."+T];M.bind(z[0],function(e){o(e)}).bind(z[1],function(e){n(e)}),k.bind(z[0],function(e){i(e)}).bind(z[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(z[0],function(e){o(e),i(e)}).bind(z[1],function(e){n(e)}).bind(z[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,q(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=I(e)[0]-a.top+f[0].offsetTop,c=I(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(V(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===i.axis||"x"===i.mouseWheel.axis)var d="x",u=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),m=c[1][0].offsetLeft,p=c[1].parent().width()-c[1].width(),g=t.deltaX||t.deltaY||a;else var d="y",u=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),m=c[0][0].offsetTop,p=c[0].parent().height()-c[0].height(),g=t.deltaY||a;"y"===d&&!n.overflowed[0]||"x"===d&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(g=-g),i.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),Q(o,(h-g*f).toString(),{dir:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},L=function(e){var t=null;try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container"),r=i.parent(),l=e(".mCSB_"+o.idx+"_scrollbar ."+d[12]);l.bind("touchstart."+n+" pointerdown."+n+" MSPointerDown."+n,function(e){c=!0}).bind("touchend."+n+" pointerup."+n+" MSPointerUp."+n,function(e){c=!1}).bind("click."+n,function(a){if(e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail")){V(t);var n=e(this),l=n.find(".mCSB_dragger");if(n.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var s="x",c=a.pageX>l.offset().left?-1:1,u=Math.abs(i[0].offsetLeft)-.9*c*r.width()}else{if(!o.overflowed[0])return;var s="y",c=a.pageY>l.offset().top?-1:1,u=Math.abs(i[0].offsetTop)-.9*c*r.height()}Q(t,u.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(a)[0],oe(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},H=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},U=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.snapAmount||n.scrollButtons.scrollAmount,q(t,e,o)}if(a.preventDefault(),$(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},F=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.snapAmount||i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||q(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){V(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},q=function(t,o,n,i,r){function l(e){var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],u="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,m="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),v="auto"!==f.scrollAmount?m:u,x=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",_=e?!0:!1;return e&&17>a&&(v="x"===f.dir[0]?s[1]:s[0]),Q(t,v.toString(),{dir:f.dir[0],scrollEasing:x,dur:a,onComplete:_}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),Z(f,"step"),V(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},j=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(h[0].autoUpdate),0===s.parents("html").length?void(s=null):void(h[0].autoUpdate=setTimeout(function(){return f.advanced.updateOnSelectorChange&&(m=r(),m!==w)?(l(3),void(w=m)):(f.advanced.updateOnContentResize&&(p=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==S[0]||p[1]!==S[1]||p[2]!==S[2]||p[3]!==S[3]||p[4]!==S[4]||p[5]!==S[5])&&(l(p[0]!==S[0]||p[1]!==S[1]),S=p)),f.advanced.updateOnImageLoad&&(g=n(),g!==b&&(h.find("img").each(function(){i(this)}),b=g)),void((f.advanced.updateOnSelectorChange||f.advanced.updateOnContentResize||f.advanced.updateOnImageLoad)&&o()))},f.advanced.autoUpdateTimeout))}function n(){var e=0;return f.advanced.updateOnImageLoad&&(e=h.find("img").length),e}function i(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),l(2)}if(e(t).hasClass(d[2]))return void l();var n=new Image;n.onload=o(n,a),n.src=t.src}function r(){f.advanced.updateOnSelectorChange===!0&&(f.advanced.updateOnSelectorChange="*");var t=0,o=h.find(f.advanced.updateOnSelectorChange);return f.advanced.updateOnSelectorChange&&o.length>0&&o.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(h[0].autoUpdate),u.update.call(null,s[0],e)}var s=e(this),c=s.data(a),f=c.opt,h=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(h[0].autoUpdate),void Z(h[0],"autoUpdate");var m,p,g,v=h.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},w=r(),S=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=n();o()},N=function(e,t,o){return Math.round(e/t)*t-o},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=w[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[v[0].offsetTop,v[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",

callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(o=N(o,c.snapAmount,c.snapOffset)),n.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,w=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],S=[o,0===o?0:o/s.scrollRatio.x],b=p[1],C=g[1],B=b>0?b/s.scrollRatio.x:0,T=C>0?C/s.scrollRatio.x:0;break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,w=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],S=[o,0===o?0:o/s.scrollRatio.y],b=p[0],C=g[0],B=b>0?b/s.scrollRatio.y:0,T=C>0?C/s.scrollRatio.y:0}S[1]<0||0===S[0]&&0===S[1]?S=[0,0]:S[1]>=w[1]?S=[w[0],w[1]]:S[0]=-S[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&S[0]>=0||_===w[0]&&S[0]<=w[0]))&&(G(v[0],x,Math.round(S[1]),u[1],n.scrollEasing),G(h[0],x,Math.round(S[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,y(v),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&S[1]>=w[1]-B&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&S[1]<=T&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,y(v,"hide")},e)}}}))}},G=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=J()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=J(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

	

    

    

	jQuery(document).ready(function(){

        'use strict';



/*********************************************

	-	DEVICES DETECTING	-

**********************************************/

    

var isMobile = {

    Android: function() {

        return navigator.userAgent.match(/Android/i);

    },

    BlackBerry: function() {

        return navigator.userAgent.match(/BlackBerry/i);

    },

    iOS: function() {

        return navigator.userAgent.match(/iPhone|iPad|iPod/i);

    },

    Opera: function() {

        return navigator.userAgent.match(/Opera Mini/i);

    },

    Windows: function() {

        return navigator.userAgent.match(/IEMobile/i);

    },

    any: function() {

        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

    }

};



if(isMobile.any()){

    $('html').addClass('mobile');

}else{

    $('html').addClass('no-mobile');

}   

 

  

/*********************************************

	-	DEVICES VIEWPORT WIDTH	-

**********************************************/  



 var $windowWidth = {

    any: function() {

        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    }

};

        

 /*********************************************

	-	CHECK FOR TOUCH	-

**********************************************/   



function isTouchSupported() {

    var msTouchEnabled = window.navigator.msMaxTouchPoints;

    var generalTouchEnabled = "ontouchstart" in document.createElement("div");

 

    if (msTouchEnabled || generalTouchEnabled) {

//        return true;

        $('body').addClass('touchy');

    }else{

//       return false;

       $('body').addClass('no-touchy'); 

    }

    

}        

        

/*********************************************

	-	ADD SMOOTH SCROLL IN ONE PAGE 	-

**********************************************/ 

        

 function smoothWide() {



     var aScroll = $('.scrollTo'),

         navH = $('.carna-menu').height();





     aScroll.on("click", function (event) {

         var smoothLink = $(this).attr("href");

         event.preventDefault();



         $(smoothLink).velocity("scroll", {

             duration: 800,

             easing: [0.77, 0, 0.175, 1],

             offset: -50

         });

     });



 }



        

 function smoothMobile(){

     

     var smoothLinkMini = $('.scrollToMini'),

         menuMobile = $('.carna-menu-mobile'),

         navMHeight = $('.mobile-wrap').height(),

         $button = $('.button-trigger');



        menuMobile.on('click', 'a' ,function(event){

           var smoothLinkMini = $(this).attr('href');

            event.preventDefault();

            $button.removeClass('active');

            

            $(smoothLinkMini).velocity('scroll' , {

               duration:800,

                delay:500,

                easing:[0.77, 0, 0.175, 1],

//                offset: - (navMHeight)

            });

        });



} 

         

        

/*********************************************

	-	HIDE MENU WHEN CLICK ON SMALL DEVICES 	-

**********************************************/



       function hideList() {

           var $menu = $('.mobile-wrap[data-one-page="true"]'),

               $menuItem = $('.carna-menu-mobile').children(),

               $canvasWidth = $(window).width();





           $menuItem.each(function () {

               

                   $(this).children('a').on('click', function () {

                       $(this).parents('.mobile-wrap').slideUp(500);

                   });

               

           });

       }

        

/*********************************************

	-	SHOW HID MENU ON ONE PAGE 	-

**********************************************/

        

    function showHideMenu(){

        var $button = $('.button-trigger'),

            $carnaMobile = $('.mobile-wrap'),

            MQ = 992;

//        $carnaMobile.hide();

        $(window).on('debouncedresize' , function(){

                if($windowWidth.any() > 992 ){

                    $carnaMobile.hide();

                }

            });



        

        if($carnaMobile.data('has-button') === true){

            $button.on('click', function(event){

               $(this).parent().siblings('.mobile-wrap').stop(true,true).animate({

                   height:'toggle'

               }, 500 , 'easeInOutSine');

                $(this).toggleClass('active');

                event.preventDefault();

                return false;

            }); 

         }

    }    

    

 /*********************************************

	-	SHRINK MENU	-

**********************************************/  





    function shrink() {

     $(window).on('scroll', function(e){

        var distanceY = $(window).pageYOffset || $(document).scrollTop(),

            $this = $('.nav-wrap'),

            navOffset = $this.outerHeight(),

            shrinkOn = ($this.data('set-offset'))? $this.data('set-offset') : navOffset,

            isShrink = $(".is-shrink");

            

        if (distanceY > shrinkOn) {

            isShrink.addClass("smaller");



        } else {

            isShrink.removeClass("smaller");

        }

    });

}

        

 /*********************************************

	-	ADD BG TO MENU ON SCROLL	-

**********************************************/

    

function headerFill() {

    $(window).on('scroll', function(e){

       

        var distanceY = $(window).pageYOffset || $(document).scrollTop(),

            navWrap = $('.nav-wrap'),

            navHeight = $('.nav-wrap').outerHeight();

        

        if(distanceY > navHeight && navWrap.data( "is-fill" ) === true){

            navWrap.addClass('is-fill');

        }else{

            navWrap.removeClass('is-fill');

        }

            

    });



}           



        

/*********************************************

	-	BX SLIDER 	-

**********************************************/  

  

    function regularSlider() {

        $('.bx-slider').each(function () {

            var $this = $(this),



                $mode = $this.data('bx-mode'),

                $autoPlay = $this.data('bx-auto-play'),

                $autoDelay = $this.data('bx-delay'),

                $autoHover = $this.data('bx-auto-hover'),

                $speed = $this.data('bx-speed'),

                $easing = (!$('body').hasClass('touchy'))? $this.data('bx-easing') : null ,

                $captions = $this.data('bx-captions'),

                $addVideo = $this.data('bx-video'),

                $control = $this.data('bx-control'),

                $prevSelector = $this.data('bx-prev-selector'),

                $nextSelector = $this.data('bx-next-selector'),

                $pager = $this.data('bx-pager'),

                $height = $this.parent().height(),

                $pauseAmount = $this.data('pause-amount'),

                $pagerCustom = $this.data('bx-pager-custom'),

                $maxSlide = $this.data('max-slide'),

                $moveSlide = $this.data('move-slide'),

                $slideMargin = $this.data('slide-margin'),

                $slideWidth = function(){

                    

                    if($this.data('bx-carousel') === true && $(window).width() > 1200){

                    var $w = $this.parent().width(),

                         columnNum = $maxSlide,

                         slideWidth = 0;

                         slideWidth = Math.floor($w/columnNum - $slideMargin);

                         

                    } else{

                        slideWidth = $this.data('slide-width')

                    }

                    

                    return slideWidth;

                        

                },

                

                $buildPager  = function(sliderpager){

                            switch(sliderpager){

                              case 0:

                                return '<i class="fa fa-flask fa-2x"></i>';

                              case 1:

                                return '<i class="fa fa-puzzle-piece fa-2x"></i>';

                              case 2:

                                return '<i class="fa fa-gears fa-2x"></i>';

                              case 3:

                                return '<i class="fa fa-magic fa-2x"></i>';

                              case 4:

                                return '<i class="fa fa-rocket fa-2x"></i>'; 

                            }

                          },

                $mainBuildpager = ($this.data('build-pager') === 1) ? $buildPager  : null;

            



            if ($('.bx-slider').length) {

                $this.bxSlider({

                    adaptiveHeight: true, 

                    mode: $mode,

                    auto: $autoPlay,

                    slideWidth:$slideWidth(),

                    minSlides: 1,

                    maxSlides: $maxSlide,

                    moveSlides: $moveSlide,

                    slideMargin: $slideMargin,

                    autoDelay: $autoDelay,

                    pause: $pauseAmount,

                    autoHover: $autoHover,

                    easing:$easing,

                    video:$addVideo,

                    controls: $control,

                    pager: $pager,

                    useCSS: false,

                    speed: $speed,

                    nextSelector: $nextSelector,

                    prevSelector: $prevSelector,

                    nextText: '<i class="pe-7s-angle-right"></i>',

                    prevText: '<i class="pe-7s-angle-left"></i>',

                    touchEnabled: true,

                    swipeThreshold: 50,

                    oneToOneTouch: true,

                    pagerCustom: $pagerCustom,

                    buildPager: $mainBuildpager,

                    onSliderLoad: function() {

                       



                    }

                }).animate({

                    'opacity': 1

                }, 1300);

            }

            

        });



    }

        

        

        

        

/* PARALLAX SCENE */



function paraScen(){

    if(typeof (Parallax) == 'function'){

        var scene = document.getElementById('scene');

        var parallax = new Parallax(scene);

    }

}    

        

        

/*********************************************

	-	FULL BLOCK	-

**********************************************/        

        

function fullBlock() {

    $('.full_block').each(function () {

        var $this = $(this),

            vw = $(window).width(),

            vh = $(window).height(),

            $thisHeight = $this.data('video-height'),

            $thisWidth = $this.data('video-width'),

            $aspectRatio = $thisHeight / $thisWidth;

        

        $this.data('aspectRatio', $thisHeight / $thisWidth);

        

            $this.width(Math.ceil(vw));

            $this.height(Math.ceil(vh));



        if($('body').hasClass('boxed')){

            $this.css({

                'width':$('body').outerWidth()

            })

        }



    });

}

        

function headerVideo() {

    if ($('.header-video').length) {

        $('.header-video').each(function (i, elem) {

            headerVideo = new HeaderVideo({

                element: elem,

                media: '.header-video__media',

                playTrigger: '.header-video__play-trigger',

                closeTrigger: '.header-video__close-trigger'

            });

        });

    }

}

        

        headerVideo();

/*********************************************

	-	NAV HIGH LIGHT	-

**********************************************/        



  function navHighLight() {

 

    var aChildren = $(".heighlight-menu li").children(':not(.outer-link)'); // find the a children of the list items

    var aArray = []; // create the empty aArray

      

    for (var i=0; i < aChildren.length; i++) {    

        var aChild = aChildren[i];

        var ahref = $(aChild).attr('href');

        aArray.push(ahref);



    } // this for loop fills the aArray with attribute href values



     

    $(window).scroll(function(){

        var windowPos = $(window).scrollTop() + 84; // get the offset of the window from the top of page

        var windowHeight = $(window).height() ; // get the height of the window

        var docHeight = $(document).height() ;



        for (var i=0; i < aArray.length; i++) {

            var theID = aArray[i];

            var divPos = $(theID).offset().top ; // get the offset of the div from the top of page

            var divHeight = $(theID).outerHeight() ; // get the height of the div in question

            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {

                $("a[href='" + theID + "']").addClass("active");

            } else {

                $("a[href='" + theID + "']").removeClass("active");

            }

        }



        if(windowPos + windowHeight == docHeight) {

            if (!$(".heighlight-menu li:last-child a").hasClass("active")) {

                var navActiveCurrent = $(".active").attr("href");

                $("a[href='" + navActiveCurrent + "']").removeClass("active");

                $(".heighlight-menu li:last-child a").addClass("active");

            }

        }

    });

      



  }        



        

/*********************************************

	-	PARALLAX	-

**********************************************/

    

function parallax() {

        if(!isMobile.any() && typeof ($.stellar) == 'function'){

           $.stellar({

            horizontalScrolling: false,

            scrollProperty: "scroll",

            positionProperty: "position",

            hideDistantElements: false,

        });

   }   



}

        

 /*********************************************

	-	ADDING  Z-INDEX 	-

**********************************************/         

        

function zIndex() {

    var $layerZ = $('.layer_z');



    if ($layerZ.length) {

        $layerZ.each(function () {

            var $this = $(this),

                $dataZ = $this.data('zindex');



            $this.css('z-index', $dataZ);

        })

    }



}

        

/*********************************************

	-	FADE OUT OPACITY 	-

**********************************************/ 



    function fadeOutOpacity() {

        var scrollPos = $(window).scrollTop(),

            elementOut = $('.opacity-out'),

            elementHeight = elementOut.outerHeight();

        if (elementOut.length) {

            elementOut.css({

                'opacity': 1 - (scrollPos / elementHeight),

            });

        }

    }





    $(window).scroll(function () {

        fadeOutOpacity();



    });

        

/*********************************************

	-	LAYER PANR	-

**********************************************/



function layerPner(){



if($(".layer-panr__img").length){    

$(".layer-panr__link").find('.layer-panr__img').panr({

    sensitivity: 15,

    scale: false,

    scaleOnHover: true,

    scaleTo: 1.2,

    scaleDuration: .25,

    panY: true,

    panX: true,

    panDuration: 1.25,

    resetPanOnMouseLeave: false,

    /*onEnter: function(){

        $('.item-cate__desc').css({

            'transform': 'none'

        })

    },*/

    /*onLeave: function(){

        $('.item-cate__desc').css({

            'transform':'none'

        })

    }*/

});

    

}

    

}

        

        

/*********************************************

	-	LIGHT BOX	-

**********************************************/        

        

function standardLightBox() {

	$('.mag-popup').each(function(){

        

    var $this = $(this),

        $type = ($this.data('popup-type')) ? $this.data('popup-type') : 'image',

        $removalDelay = $this.data('popup-removal-delay'),

        $galleryEnable = $this.data('popup-gallery-enable'),

        $mainClass = $this.data('popup-main-class'),

        $zoomEnable = $this.data('popup-zoom-enabled');



        if ($this.length) {

            $this.find('a.mag-lightbox').magnificPopup({

                // delegate: $this.data('popup-dlegate'),



                type: $type,

                fixedContentPos: false,

                removalDelay: $removalDelay,

                showCloseBtn: false,

                mainClass: $mainClass,

                tLoading: '',

                midClick: true,

                gallery: {

                    enabled: $galleryEnable,

                    navigateByImgClick: true,

                },

                zoom: {

                    enabled: $zoomEnable,

                    duration: 300

                },

                

                callbacks: {

                imageLoadComplete: function() {

//                    sameHeight();

                  },

                   

                   }

                

                /*callbacks: {

                  beforeOpen: function() {

                      var $triggerEl = $(this.st.el),

                          newClass = $triggerEl.data("modal-class");

                          if (newClass) {

                            this.st.mainClass = this.st.mainClass + ' ' + newClass;

                          }

                  }

                }*/



            });

        }

        

        $(document).on('click', '.popup-modal-close', function (e) {

            e.preventDefault();

            $.magnificPopup.close();

        });

   });

    

//    return $.Deferred().resolve();

}

        

        

/*********************************************

	-	STORY BG	-

**********************************************/

        

function storyBg(){

    $('.story-bg').each(function(){

        var $this = $(this);

        

        if($this.length){

            $this.css({

            'background-image':'url('+ 'images/' + $this.data('story-bg') + '.jpg' +')',

            'background-position':$this.data('bg-position'),    

            'background-attachment':$this.data('bg-attachment'),

            'background-repeat':$this.data('bg-repeat'),

            'background-size':$this.data('bg-size')    

        })

        }

    });

}        



 /*********************************************

	-	SELECT LIST	-

**********************************************/    

    

    Array.prototype.slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	

        new SelectFx(el);

    } );

        

        

/*********************************************

	-	DATE PICKER	-

**********************************************/ 

        

function datePicker() {

    if ($('#datepicker').length) {

        $('#datepicker').datepicker({

            showButtonPanel: true,

            currentText: "today",

            closeText: "Close",

            nextText: "",

            prevText: ""

        });

    }

}       



/*********************************************

	-	BACK TO TOP	-

**********************************************/

    

 function backToTop() { 

    



    var offset = 220;

    var duration = 500;

    $(window).scroll(function() {

        if ($(this).scrollTop() > offset) {

            $('.back-to-top').fadeIn(duration);

        } else {

            $('.back-to-top').fadeOut(duration);

        }

    });

     

     

    if($('.back-to-top').length){

    $('.back-to-top').on('click', function(event) {

        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, duration,'easeOutCubic');

        return false;

    });

  }

}

        

 /*********************************************

	-	ANIMAION LOADER	-

**********************************************/ 

        

function animationLoader() {





    if (!$('body').hasClass('no-animate')) {



        if ($(".animsition").length) {



            $(".animsition").animsition({



                inClass: 'fade-in-up-sm',

                outClass: 'fade-out-down-sm',

                inDuration: 1000,

                outDuration: 800,

                //    linkElement           :   '.animsition-link',

                linkElement: 'a:not([target="_blank"]):not([href^=#]):not([href^="ajax"]):not([class*="mag-popup"]):not([class*="ajax"]):not([class*="showhide"]):not([href^="javascript"]):not([class^="bx"]):not([class^="standard-popup"]):not([href^="food"]):not([class*="mag-lightbox"]):not([data-popup]):not([class*="header-video__play-trigger"]):not([class*="ui-datepicker-"])',

                loading: true,

                loadingParentElement: 'body', //animsition wrapper element

                loadingClass: 'animsition-loading',

                browser: [ 'animation-duration', '-webkit-animation-duration'],

                //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.

                //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".



                    overlay               :   false,



                    overlayClass          :   'animsition-overlay-slide',

                    overlayParentElement  :   'body',

                transition: function(url){ window.location.href = url; }

            });

        }



    } else {

        $('body').find('.animsition, .animsition-overlay').removeClass('animsition, animsition-overlay');

    }



}

        



 /*********************************************

	-	scrollCarousel	-

**********************************************/         

        

 function scrollCarousel() {

     $(window).load(function () {

         if ($('.scroller-carousel').length) {

             $(".scroller-carousel").mThumbnailScroller({

                 axis: "x", //change to "y" for vertical scroller

                 speed: 30,

                 markup: {

                     buttonsHTML: {

                         left: ">",

                         right: ">"

                     }

                 }

             });

         }

     });



 }

 

     



 /*********************************************

	-	COLOR BG	-

**********************************************/         

        

function colorBg() {

    $('.color-bg').each(function () {

        var $this = $(this),

            value = $this.data('color-bg');



        if ($this.length) {

            $this.css({

                'background-color': value,

                'position': 'absolute',

                'z-index': $this.data('color-zindex'),

                'width': '100%',

                'height': '100%',

                'top': '0',

                'opacity': $this.data('opacity')

            });

        }

    })



}

        

        

/*********************************************

	-	TWITTER WIDGET 	-

**********************************************/ 

        

        

function slideTwitts() {

    

    $('.recent_twitts').each(function(){

            

           var $this = $(this),

               $id = $this.data('id'),

               $domid = $this.data('domid'),

               $maxTwitts = $this.data('max-twitts'),

               $enableLinks = $this.data('enable-linke'),

               $showUser = ($this.data('show-user')=== true ) ? true : false,

               $showTime = ($this.data('show-time')=== true ) ? true : false,

               $showImg = ($this.data('show-img') === true ) ? true:false,

//               $dateFunction = ($this.data('func') === true )? dateFormatter : false,

               $dateFunction = function dateFormatter(date) {

                                    return date.toUTCString();

                                  },

               $setDate = ($this.data('date-formated')=== true) ? $dateFunction : '',

               $showRetwitts = ($this.data('show-retwitts')) ? $this.data('show-retwitts'): false,

               $showInteraction = ($this.data('show-interaction')) ? $this.data('show-interaction'): false;



    var config2 = {

        "id": $id,

        "domId": $domid,

        "maxTweets": $maxTwitts,

        "enableLinks": $enableLinks,

        "showUser": $showUser,

        "showTime": $showTime,

        "showImages": $showImg,

        "dateFunction": $setDate,

        "showRetweet": $showRetwitts,

        "showInteraction": $showInteraction,

        "customCallback": handleTweets,

    };



    function handleTweets(tweets) {

        var x = tweets.length;

        var n = 0;

        var element = document.getElementById('slider_twitts');

        var html = '<ul class="bx-slider-twitt">';

        while (n < x) {

            html += '<li>' + tweets[n] + '</li>';

            n++;

        }

        html += '</ul>';

        element.innerHTML = html;



//        regularSlider();

        

        $('.bx-slider-twitt').bxSlider({

            adaptiveHeight: true, 

            mode: 'fade',

            auto: true,

            minSlides: 1,

            autoDelay: true,

            autoHover: true,

            controls: false,

            pager: false,

            useCSS: false,

            touchEnabled: true,

            swipeThreshold: 50,

            oneToOneTouch: true,

        })

    }

    

    if ($('.recent_twitts').length) {

        twitterFetcher.fetch(config2);

    }

        

    });    

}        

        

/*********************************************

	-	CAROUSE REV SLIDER	-

**********************************************/ 

        

function carouseRevSlider() {

    var tpj = jQuery;

    var revapi108;

    tpj(document).ready(function () {

        if (tpj("#rev_slider_108_1").length) {

            if (tpj("#rev_slider_108_1").revolution == undefined) {

                revslider_showDoubleJqueryError("#rev_slider_108_1");

            } else {

                revapi108 = tpj("#rev_slider_108_1").show().revolution({

                    sliderType: "carousel",

                    jsFileLocation: "revolution/js/",

                    sliderLayout: "fullwidth",

                    dottedOverlay: "none",

                    delay: 9000,

                    navigation: {

                        keyboardNavigation: "off",

                        keyboard_direction: "horizontal",

                        mouseScrollNavigation: "off",

                        onHoverStop: "off",

                        arrows: {

                            style: "metis",

                            enable: true,

                            hide_onmobile: true,

                            hide_under: 768,

                            hide_onleave: false,

                            tmp: '',

                            left: {

                                h_align: "left",

                                v_align: "center",

                                h_offset: 0,

                                v_offset: 0

                            },

                            right: {

                                h_align: "right",

                                v_align: "center",

                                h_offset: 0,

                                v_offset: 0

                            }

                        },

                        thumbnails: {

                            style: "erinyen",

                            enable: true,

                            width: 150,

                            height: 100,

                            min_width: 150,

                            wrapper_padding: 20,

                            wrapper_color: "#24252f",

                            wrapper_opacity: "1",

                            tmp: '<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span><span class="tp-thumb-more"></span>',

                            visibleAmount: 9,

                            hide_onmobile: false,

                            hide_onleave: false,

                            direction: "horizontal",

                            span: true,

                            position: "outer-bottom",

                            space: 10,

                            h_align: "center",

                            v_align: "bottom",

                            h_offset: 0,

                            v_offset: 0

                        }

                    },

                    carousel: {

                        maxRotation: 65,

                        vary_rotation: "on",

                        minScale: 55,

                        vary_scale: "off",

                        horizontal_align: "center",

                        vertical_align: "center",

                        fadeout: "on",

                        vary_fade: "on",

                        maxVisibleItems: 5,

                        infinity: "on",

                        space: -150,

                        stretch: "off"

                    },

                    gridwidth: 600,

                    gridheight: 600,

                    lazyType: "none",

                    shadow: 0,

                    spinner: "off",

                    stopLoop: "on",

                    stopAfterLoops: 0,

                    stopAtSlide: 1,

                    shuffle: "off",

                    autoHeight: "off",

                    disableProgressBar: "on",

                    hideThumbsOnMobile: "off",

                    hideSliderAtLimit: 0,

                    hideCaptionAtLimit: 0,

                    hideAllCaptionAtLilmit: 0,

                    debugMode: false,

                    fallbacks: {

                        simplifyAll: "off",

                        nextSlideOnWindowFocus: "off",

                        disableFocusListener: false,

                    }

                });

            }

        }

    }); /*ready*/

}

        

/*********************************************

	-	CREATIVE SLIDER	-

**********************************************/         

        

function creativeRevSlider() {

    var tpj = jQuery;



    var revapi206;

    tpj(document).ready(function () {

        if (tpj("#rev_slider_206_1").length) {

            if (tpj("#rev_slider_206_1").revolution == undefined) {

                revslider_showDoubleJqueryError("#rev_slider_206_1");

            } else {

                revapi206 = tpj("#rev_slider_206_1").show().revolution({

                    sliderType: "standard",

                    jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",

                    sliderLayout: "fullscreen",

                    dottedOverlay: "none",

                    delay: 9000,

                    navigation: {

                        keyboardNavigation: "off",

                        keyboard_direction: "horizontal",

                        mouseScrollNavigation: "off",

                        onHoverStop: "off",

                        touch: {

                            touchenabled: "on",

                            swipe_threshold: 75,

                            swipe_min_touches: 50,

                            swipe_direction: "horizontal",

                            drag_block_vertical: false

                        },

                        tabs: {

                            style: "metis",

                            enable: true,

                            width: 250,

                            height: 40,

                            min_width: 249,

                            wrapper_padding: 0,

                            wrapper_color: "",

                            wrapper_opacity: "0",

                            tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',

                            visibleAmount: 5,

                            hide_onmobile: true,

                            hide_under: 800,

                            hide_onleave: false,

                            hide_delay: 200,

                            direction: "vertical",

                            span: true,

                            position: "inner",

                            space: 0,

                            h_align: "left",

                            v_align: "center",

                            h_offset: 0,

                            v_offset: 0

                        }

                    },

                    responsiveLevels: [1240, 1024, 778, 480],

                    visibilityLevels: [1240, 1024, 778, 480],

                    gridwidth: [1240, 1024, 778, 480],

                    gridheight: [868, 768, 960, 720],

                    lazyType: "none",

                    parallax: {

                        type: "3D",

                        origo: "slidercenter",

                        speed: 1000,

                        levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],

                        ddd_shadow: "off",

                        ddd_bgfreeze: "on",

                        ddd_overflow: "hidden",

                        ddd_layer_overflow: "visible",

                        ddd_z_correction: 100,

                    },

                    spinner: "off",

                    stopLoop: "on",

                    stopAfterLoops: 0,

                    stopAtSlide: 1,

                    shuffle: "off",

                    autoHeight: "off",

                    fullScreenAutoWidth: "off",

                    fullScreenAlignForce: "off",

                    fullScreenOffsetContainer: "",

                    fullScreenOffset: "60px",

                    disableProgressBar: "on",

                    hideThumbsOnMobile: "off",

                    hideSliderAtLimit: 0,

                    hideCaptionAtLimit: 0,

                    hideAllCaptionAtLilmit: 0,

                    debugMode: false,

                    fallbacks: {

                        simplifyAll: "off",

                        nextSlideOnWindowFocus: "off",

                        disableFocusListener: false,

                    }

                });

            }

        }

    }); /*ready*/

}



    function blogIntro() {    

var tpj = jQuery;



                var revapi279;

                tpj(document).ready(function() {

                    if (tpj("#rev_slider_279_1").length) {

                    if (tpj("#rev_slider_279_1").revolution == undefined) {

                        revslider_showDoubleJqueryError("#rev_slider_279_1");

                    } else {

                        revapi279 = tpj("#rev_slider_279_1").show().revolution({

                            sliderType: "hero",

                            jsFileLocation: "revolution/js/",

                            sliderLayout: "fullscreen",

                            dottedOverlay: "none",

                            delay: 9000,

                            navigation: {},

                            responsiveLevels: [1240, 1024, 778, 480],

                            visibilityLevels: [1240, 1024, 778, 480],

                            gridwidth: [1240, 1024, 778, 480],

                            gridheight: [868, 768, 960, 720],

                            lazyType: "none",

                            parallax: {

                                type: "scroll",

                                origo: "slidercenter",

                                speed: 1000,

                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],

                            },

                            shadow: 0,

                            spinner: "spinner2",

                            autoHeight: "off",

                            fullScreenAutoWidth: "off",

                            fullScreenAlignForce: "off",

                            fullScreenOffsetContainer: "",

                            fullScreenOffset: "100",

                            disableProgressBar: "on",

                            hideThumbsOnMobile: "off",

                            hideSliderAtLimit: 0,

                            hideCaptionAtLimit: 0,

                            hideAllCaptionAtLilmit: 0,

                            debugMode: false,

                            fallbacks: {

                                simplifyAll: "off",

                                disableFocusListener: false,

                            }

                        });

                    }

                    }

                }); /*ready*/

    }

        

        

        function sliderFive(){

            

            var tpj = jQuery;



                var revapi202;

                tpj(document).ready(function() {

                    if (tpj("#rev_slider_202_1").length) {

                    if (tpj("#rev_slider_202_1").revolution == undefined) {

                        revslider_showDoubleJqueryError("#rev_slider_202_1");

                    } else {

                        revapi202 = tpj("#rev_slider_202_1").show().revolution({

                            sliderType: "standard",

                            jsFileLocation: "../../revolution/js/",

                            sliderLayout: "fullscreen",

                            dottedOverlay: "none",

                            delay: 5000,
							
							

                            navigation: {

                                keyboardNavigation: "off",

                                keyboard_direction: "horizontal",

                                mouseScrollNavigation: "off",

                                onHoverStop: "off",

                                touch: {

                                    touchenabled: "on",

                                    swipe_threshold: 75,

                                    swipe_min_touches: 50,

                                    swipe_direction: "horizontal",

                                    drag_block_vertical: false

                                },

                                bullets: {

                                    enable: true,

                                    hide_onmobile: true,

                                    hide_under: 800,

                                    style: "zeus",

                                    hide_onleave: false,

                                    direction: "horizontal",

                                    h_align: "center",

                                    v_align: "bottom",

                                    h_offset: 0,

                                    v_offset: 30,

                                    space: 5,

                                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'

                                }

                            },

                            responsiveLevels: [1240, 1024, 778, 480],

                            visibilityLevels: [1240, 1024, 778, 480],

                            gridwidth: [1240, 1024, 778, 480],

                            gridheight: [868, 768, 960, 720],

                            lazyType: "none",

                            parallax: {

                                type: "scroll",

                                origo: "slidercenter",

                                speed: 1000,

                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],

                            },

                            shadow: 0,

                            spinner: "on",

                            stopLoop: "off",

                            stopAfterLoops: 50,

                            stopAtSlide: 6,

                            shuffle: "off",

                            autoHeight: "off",

                            fullScreenAutoWidth: "off",

                            fullScreenAlignForce: "off",

                            fullScreenOffsetContainer: "",

                            fullScreenOffset: "0",

                            disableProgressBar: "on",

                            hideThumbsOnMobile: "off",

                            hideSliderAtLimit: 0,

                            hideCaptionAtLimit: 0,

                            hideAllCaptionAtLilmit: 0,

                            debugMode: false,

                            fallbacks: {

                                simplifyAll: "off",

                                nextSlideOnWindowFocus: "off",

                                disableFocusListener: false,

                            }

                        });

                    }

                    }

                }); /*ready*/

            

        }



        

    function dionSlider(){  

        

        var tpj = jQuery;



                var revapi8;

                tpj(document).ready(function() {

                    if (tpj("#rev_slider_8_1").length) {

                    if (tpj("#rev_slider_8_1").revolution == undefined) {

                        revslider_showDoubleJqueryError("#rev_slider_8_1");

                    } else {

                        revapi8 = tpj("#rev_slider_8_1").show().revolution({

                            sliderType: "standard",

                            jsFileLocation: "../../revolution/js/",

                            sliderLayout: "auto",

                            dottedOverlay: "none",

                            delay: 9000,

                            navigation: {

                                keyboardNavigation: "on",

                                keyboard_direction: "horizontal",

                                mouseScrollNavigation: "off",

                                onHoverStop: "off",

                                touch: {

                                    touchenabled: "on",

                                    swipe_threshold: 75,

                                    swipe_min_touches: 1,

                                    swipe_direction: "horizontal",

                                    drag_block_vertical: false

                                },

                                arrows: {

                                    style: "dione",

                                    enable: true,

                                    hide_onmobile: false,

                                    hide_onleave: false,

                                    tmp: '<div class="tp-arr-imgwrapper"><div class="tp-arr-imgholder"></div></div>',

                                    left: {

                                        h_align: "left",

                                        v_align: "center",

                                        h_offset: 0,

                                        v_offset: 0

                                    },

                                    right: {

                                        h_align: "right",

                                        v_align: "center",

                                        h_offset: 0,

                                        v_offset: 0

                                    }

                                },

                                bullets: {

                                    enable: true,

                                    hide_onmobile: false,

                                    style: "dione",

                                    hide_onleave: false,

                                    direction: "horizontal",

                                    h_align: "center",

                                    v_align: "bottom",

                                    h_offset: 20,

                                    v_offset: 30,

                                    space: 5,

                                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'

                                }

                            },

                            gridwidth: 800,

                            gridheight: 600,

                            lazyType: "single",

                            shadow: 0,

                            spinner: "off",

                            stopLoop: "on",

                            stopAfterLoops: 0,

                            stopAtSlide: 1,

                            shuffle: "off",

                            autoHeight: "off",

                            disableProgressBar: "on",

                            hideThumbsOnMobile: "off",

                            hideSliderAtLimit: 0,

                            hideCaptionAtLimit: 0,

                            hideAllCaptionAtLilmit: 0,

                            debugMode: false,

                            fallbacks: {

                                simplifyAll: "off",

                                nextSlideOnWindowFocus: "off",

                                disableFocusListener: false,

                            }

                        });

                    }

                    }

                }); /*ready*/

    }

        

/*********************************************

	-	OWL CAROUSEL	-

**********************************************/         

        

function mainCarousel(){

    $('.owl-carousel').each(function(){

        var $this = $(this);

        if(($this).length){

            $($this).owlCarousel({

                items:1,

                dots:false,

                autoplay:true,

                animateOut: 'fadeOut',

                animateIn:'fadeIn',

                nav:true,

                loop:true,

                navText:["<i class='pe-7s-angle-left'></i>" , "<i class='pe-7s-angle-right'></i>"]

            });

        }

        

    })

    

}

        

        

/*********************************************

	-	ANIMATED	-

**********************************************/    

    

        function animated() {



            if (!isMobile.any() && $('.animatedIn').length) {

                $('.animatedIn').appear(function() {



                    var elem = $(this);

                    var animation = elem.data('animation');

                    var animationPercent = elem.data('percent');

                    var animationDelay = elem.data('animation-delay');



                    if (!elem.hasClass('visibleIn')) {

                        elem.css({

                            'width': animationPercent + '%',

                        });

                        if (animationDelay) {

                            setTimeout(function() {

                                elem.addClass(animation + ' visibleIn');

                            }, animationDelay);

                        } else {

                            elem.addClass(animation + ' visibleIn');

                        }

                    }

                }, {

                    accY: -150

                });

            } else {

                $('.animatedIn').css('visibility', 'visible');

            }



        }

        

        function highlightBack(){

            $('.main-header').appear(function(){

               var $this = $(this);

                

                $this.addClass('add-back');

            }, {

                accY: -200

            });

        }

        

        function addBack(){

            $('[class*="with-bg-"]').appear(function(){

               var $this = $(this);

                

                $this.addClass('add-bg-height');

            }, {

                accY: -250

            });

        }

        

        addBack();

        

        

/*********************************************

	-	GRID ROTATOR	-

**********************************************/          

        

    function gridRotator() {

        var $this = $('#ri-grid');



        if ($this.length) {

            $this.gridrotator({

                w320: {

                    rows: 3,

                    columns: 4

                },

                w240: {

                    rows: 3,

                    columns: 3

                }

            });

        }

    }

        

/*********************************************

	-	OVERLAY MENU	-

**********************************************/         

        

function overLayMenu() {



    if ($('body').hasClass('overlay-nav')) {



        $('#toggle').on('click', function () {

            $(this).toggleClass('active');

            $('#overlay').toggleClass('open');



        });

        $("#overlay").find("a").on('click', function () {

            $(this).parents("#overlay").removeClass('open');

            $('#toggle').toggleClass('active');

        });

    }

}



/*********************************************

	-	FOLD PANEL	-

**********************************************/        

        

function foldPanel(){

var gallery = $('.cd-gallery'),

		foldingPanel = $('.cd-folding-panel'),

		mainContent = $('.cd-main');

	/* open folding content */

	gallery.on('click', 'a', function(event){

		event.preventDefault();

		openItemInfo($(this).attr('href'));

        $('.nav-wrap').addClass('nav-animate');

	});



	/* close folding content */

	foldingPanel.on('click', '.cd-close', function(event){

		event.preventDefault();

		toggleContent('', false);

        $('.nav-wrap').removeClass('nav-animate');

	});

	gallery.on('click', function(event){

		/* detect click on .cd-gallery::before when the .cd-folding-panel is open */

		if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);

	})



	function openItemInfo(url) {

		var mq = viewportSize();

		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {

			/* if content is visible above the .cd-gallery - scroll before opening the folding panel */

			$('body,html').animate({

				'scrollTop': gallery.offset().top

			}, 100, function(){ 

	           	toggleContent(url, true);

	        }); 

	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {

			/* if content is visible below the .cd-gallery - scroll before opening the folding panel */

			$('body,html').animate({

				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()

			}, 100, function(){ 

	           	toggleContent(url, true);

	        });

		} else {

			toggleContent(url, true);

		}

	}



	function toggleContent(url, bool) {

		if( bool ) {

			/* load and show new content */

			var foldingContent = foldingPanel.find('.cd-fold-content');

			foldingContent.load(url+' .cd-fold-content > *', function(event){

				setTimeout(function(){

					$('body').addClass('overflow-hidden');

					foldingPanel.addClass('is-open');

					mainContent.addClass('fold-is-open');

                    $('.main-header').addClass('add-back');

				}, 100);

				

			});

		} else {

			/* close the folding panel */

			var mq = viewportSize();

			foldingPanel.removeClass('is-open');

			mainContent.removeClass('fold-is-open');

            $('.nav-wrap').removeClass('nav-animate');

			

			(mq == 'mobile' || $('.no-csstransitions').length > 0 ) 

				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */

				? $('body').removeClass('overflow-hidden')

				

				: mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

					$('body').removeClass('overflow-hidden');

					mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');

				});

		}

		

	}



	function viewportSize() {

		/* retrieve the content value of .cd-main::before to check the actua mq */

		return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");

	}

    

}

        

/*********************************************

	-	PHOTO STREAM	-

**********************************************/    





 function photoStream() {

     if ($('.flickr-feed').length) {

         $('.flickr-feed').socialstream({

             socialnetwork: 'flickr',

             limit: 6,

             username: 'Envato'

         });

     }

     

     if ($('.pinterest-feed').length) {

         $('.pinterest-feed').socialstream({

             socialnetwork: 'pinterest',

             limit: 6,

             username: 'envato'

         });

     }

     

     if ($('.dribbble-feed').length) {

         $('.dribbble-feed').socialstream({

             socialnetwork: 'dribbble',

             limit: 6,

             username: 'smashingmag'

         });

     }

     

     if ($('.instagram-feed').length) {

         $('.instagram-feed').each(function(){

             var $this = $(this);

             $this.socialstream({

                 socialnetwork: 'instagram',

                 limit: $this.data('feed-num'),

                 username: 'acouplecooks'

             });

         })

         

     }

     if ($('.deviant-feed').length) {

         $('.deviant-feed').socialstream({

             socialnetwork: 'deviantart',

             limit: 6,

             username: 'sleeman23'

         });

     }



 }

          



function sameHeight(){

     $('.same-height').each(function(){

         var $this =  $(this),

             $h1 = $('.height-main').height(),

             $h2 = $('.height-recev');

         

         if($windowWidth.any() > 992){

             $h2.css('height' , $h1 + 'px');

         }else{

             $h2.css('height' , 'auto');

         }

     })

}        

  

$(window).on("load", function() {

    sameHeight();

});        

        

function scrollBar(){

    if($(".custom-scroller").length){

         $(".custom-scroller").mCustomScrollbar({

             theme:"dark",

             scrollInertia:400

         });

       }

}        



        

creativeRevSlider(); 

mainCarousel();        

carouseRevSlider();        

scrollCarousel();         

smoothWide();

smoothMobile();        

hideList();

showHideMenu();

shrink();

headerFill();

navHighLight();        

regularSlider();        

paraScen();

fullBlock();

parallax();        

zIndex();

layerPner();

standardLightBox();

storyBg();

datePicker();

backToTop(); 

animationLoader();        

colorBg();        

slideTwitts();

animated();

highlightBack();        

isTouchSupported();

gridRotator();        

overLayMenu();

foldPanel();

blogIntro();

photoStream();

sliderFive();        

dionSlider();

scrollBar();        



        

$(window).on('debouncedresize', function () {

   fullBlock();

    sameHeight();

});        

        

        

});

    







/*

 * debouncedresize: special jQuery event that happens once after a window resize

 *

 * latest version and complete README available on Github:

 * https://github.com/louisremi/jquery-smartresize

 *

 * Copyright 2012 @louis_remi

 * Licensed under the MIT license.

 *

 * This saved you an hour of work? 

 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON

 */

(function($) {



var $event = $.event,

	$special,

	resizeTimeout;



$special = $event.special.debouncedresize = {

	setup: function() {

		$( this ).on( "resize", $special.handler );

	},

	teardown: function() {

		$( this ).off( "resize", $special.handler );

	},

	handler: function( event, execAsap ) {

		// Save the context

		var context = this,

			args = arguments,

			dispatch = function() {

				// set correct event type

				event.type = "debouncedresize";

				$event.dispatch.apply( context, args );

			};



		if ( resizeTimeout ) {

			clearTimeout( resizeTimeout );

		}



		execAsap ?

			dispatch() :

			resizeTimeout = setTimeout( dispatch, $special.threshold );

	},

	threshold: 150

};



})(jQuery);









// SmoothScroll v0.9.9

// Licensed under the terms of the MIT license.

// People involved

// - Balazs Galambosi: maintainer (CHANGELOG.txt)

// - Patrick Brunner (patrickb1991@gmail.com)

// - Michael Herf: ssc_pulse Algorithm

function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var o=document.createElement("div");o.style.clear="both",e.appendChild(o)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:0>s?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!ssc_pending){var o=function(){for(var r=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=r-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(o,t/ssc_framerate+1):ssc_pending=!1};setTimeout(o,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,o=e.wheelDeltaY||0;t||o||(o=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),ssc_scrollArray(c,-t,-o),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t,o=0,r=0,n=ssc_overflowingAncestor(ssc_activeElement),a=n.clientHeight;switch(n==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:r=-ssc_arrowscroll;break;case ssc_key.down:r=ssc_arrowscroll;break;case ssc_key.spacebar:t=e.shiftKey?1:-1,r=-t*a*.9;break;case ssc_key.pageup:r=.9*-a;break;case ssc_key.pagedown:r=.9*a;break;case ssc_key.home:r=-n.scrollTop;break;case ssc_key.end:var i=n.scrollHeight-n.scrollTop-a;r=i>0?i+10:0;break;case ssc_key.left:o=-ssc_arrowscroll;break;case ssc_key.right:o=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(n,o,r),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c,t;return e*=ssc_pulseScale,1>e?s=e-(1-Math.exp(-e)):(c=Math.exp(-1),e-=1,t=1-Math.exp(-e),s=c+t*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));



/**

 * jquery.gridrotator.js v1.1.0

 * http://www.codrops.com

 *

 * Licensed under the MIT license.

 * http://www.opensource.org/licenses/mit-license.php

 * 

 * Copyright 2012, Codrops

 * http://www.codrops.com

 */

!function(t,e,i){"use strict";function n(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}function r(){var t=n();return t?document[t]:!1}function h(t){return 0===Object.keys(t).length}var o,a,s=t.event;o=s.special.debouncedresize={setup:function(){t(this).on("resize",o.handler)},teardown:function(){t(this).off("resize",o.handler)},handler:function(t,e){var i=this,n=arguments,r=function(){t.type="debouncedresize",s.dispatch.apply(i,n)};a&&clearTimeout(a),e?r():a=setTimeout(r,o.threshold)},threshold:100},Array.prototype.shuffle=function(){for(var e,i,t=this.length;t--;)e=Math.floor(Math.random()*t),i=this[t],this[t]=this[e],this[e]=i;return this};var d=t(e),l=e.Modernizr;t.GridRotator=function(e,i){if(this.$el=t(i),l.backgroundsize){this.$el.addClass("ri-grid-loading"),this._init(e)}},t.GridRotator.defaults={rows:3,columns:10,w1024:{rows:3,columns:8},w768:{rows:3,columns:7},w480:{rows:3,columns:5},w320:{rows:2,columns:4},w240:{rows:2,columns:3},step:"random",maxStep:3,preventClick:!0,animType:"random",animSpeed:800,animEasingOut:"linear",animEasingIn:"linear",interval:3e3,slideshow:!0,onhover:!1,nochange:[]},t.GridRotator.prototype={_init:function(e){this.options=t.extend(!0,{},t.GridRotator.defaults,e),this._config()},_config:function(){var e=this,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.supportTransitions=l.csstransitions,this.supportTransforms3D=l.csstransforms3d,this.transEndEventName=i[l.prefixed("transition")]+".gridrotator",this.animTypes=this.supportTransforms3D?["fadeInOut","slideLeft","slideRight","slideTop","slideBottom","rotateLeft","rotateRight","rotateTop","rotateBottom","scale","rotate3d","rotateLeftScale","rotateRightScale","rotateTopScale","rotateBottomScale"]:["fadeInOut","slideLeft","slideRight","slideTop","slideBottom"],this.animType=this.options.animType,"random"===this.animType||this.supportTransforms3D||-1!==t.inArray(this.animType,this.animTypes)||"showHide"===this.animType||(this.animType="fadeInOut"),this.animTypesTotal=this.animTypes.length,this.$list=this.$el.children("ul");var s=0,o=this.$list.find("img"),a=o.length;o.each(function(){var i=t(this),n=i.attr("src");t("<img/>").load(function(){++s,i.parent().css("background-image","url("+n+")"),s===a&&(o.remove(),e.$el.removeClass("ri-grid-loading"),e.$items=e.$list.children("li"),e.$itemsCache=e.$items.clone(),e.itemsTotal=e.$items.length,e.outItems=[],e._layout(function(){e._initEvents()}),e._start())}).attr("src",n)})},_layout:function(e){var i=this;this._setGridDim(),this.$list.empty(),this.$items=this.$itemsCache.clone().appendTo(this.$list);var s=this.$items.filter(":gt("+(this.showTotal-1)+")"),o=s.children("a");this.outItems.length=0,o.each(function(e){i.outItems.push(t(this))}),s.remove();for(var a=document.defaultView?parseInt(document.defaultView.getComputedStyle(this.$el.get(0),null).width):this.$el.width(),n=Math.floor(a/this.columns),r=a-this.columns*Math.floor(n),h=0;h<this.rows;++h)for(var d=0;d<this.columns;++d){var l=this.columns*h+d,c=this.$items.eq(l);c.css({width:d<Math.floor(r)?n+1:n,height:n}),-1!==t.inArray(l,this.options.nochange)&&c.addClass("ri-nochange").data("nochange",!0)}this.options.preventClick&&this.$items.children().css("cursor","default").on("click.gridrotator",!1),e&&e.call()},_setGridDim:function(){var t=this.$el.width();switch(!0){case 240>t:this.rows=this.options.w240.rows,this.columns=this.options.w240.columns;break;case 320>t:this.rows=this.options.w320.rows,this.columns=this.options.w320.columns;break;case 480>t:this.rows=this.options.w480.rows,this.columns=this.options.w480.columns;break;case 768>t:this.rows=this.options.w768.rows,this.columns=this.options.w768.columns;break;case 1024>t:this.rows=this.options.w1024.rows,this.columns=this.options.w1024.columns;break;default:this.rows=this.options.rows,this.columns=this.options.columns}this.showTotal=this.rows*this.columns},_initEvents:function(){var e=this;d.on("debouncedresize.gridrotator",function(){e._layout()});var i=n();if(i){var s=i.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(s,function(){e._visChange()})}!l.touch&&this.options.onhover&&e.$items.on("mouseenter.gridrotator",function(){var i=t(this);i.data("active")||i.data("hovered")||i.data("nochange")||(i.data("hovered",!0),e._replace(i))}).on("mouseleave.gridrotator",function(){t(this).data("hovered",!1)})},_visChange:function(){r()?clearTimeout(this.playtimeout):this._start()},_start:function(){this.showTotal<this.itemsTotal&&this.options.slideshow&&this._showNext()},_getAnimType:function(){return"random"===this.animType?this.animTypes[Math.floor(Math.random()*this.animTypesTotal)]:this.animType},_getAnimProperties:function(t){var r,e={},s={},o={},a={},n=this._getAnimType(),h=0;switch(n){case"showHide":r=0,a.opacity=0;break;case"fadeInOut":a.opacity=0;break;case"slideLeft":e.left=t.width(),o.left=0,a.left=-t.width();break;case"slideRight":e.left=-t.width(),o.left=0,a.left=t.width();break;case"slideTop":e.top=t.height(),o.top=0,a.top=-t.height();break;case"slideBottom":e.top=-t.height(),o.top=0,a.top=t.height();break;case"rotateLeft":r=this.options.animSpeed/2,e.transform="rotateY(90deg)",o.transform="rotateY(0deg)",h=r,a.transform="rotateY(-90deg)";break;case"rotateRight":r=this.options.animSpeed/2,e.transform="rotateY(-90deg)",o.transform="rotateY(0deg)",h=r,a.transform="rotateY(90deg)";break;case"rotateTop":r=this.options.animSpeed/2,e.transform="rotateX(90deg)",o.transform="rotateX(0deg)",h=r,a.transform="rotateX(-90deg)";break;case"rotateBottom":r=this.options.animSpeed/2,e.transform="rotateX(-90deg)",o.transform="rotateX(0deg)",h=r,a.transform="rotateX(90deg)";break;case"scale":r=this.options.animSpeed/2,e.transform="scale(0)",s.transform="scale(1)",o.transform="scale(1)",h=r,a.transform="scale(0)";break;case"rotateLeftScale":s.transform="scale(1)",r=this.options.animSpeed/2,e.transform="scale(0.3) rotateY(90deg)",o.transform="scale(1) rotateY(0deg)",h=r,a.transform="scale(0.3) rotateY(-90deg)";break;case"rotateRightScale":s.transform="scale(1)",r=this.options.animSpeed/2,e.transform="scale(0.3) rotateY(-90deg)",o.transform="scale(1) rotateY(0deg)",h=r,a.transform="scale(0.3) rotateY(90deg)";break;case"rotateTopScale":s.transform="scale(1)",r=this.options.animSpeed/2,e.transform="scale(0.3) rotateX(90deg)",o.transform="scale(1) rotateX(0deg)",h=r,a.transform="scale(0.3) rotateX(-90deg)";break;case"rotateBottomScale":s.transform="scale(1)",r=this.options.animSpeed/2,e.transform="scale(0.3) rotateX(-90deg)",o.transform="scale(1) rotateX(0deg)",h=r,a.transform="scale(0.3) rotateX(90deg)";break;case"rotate3d":r=this.options.animSpeed/2,e.transform="rotate3d( 1, 1, 0, 90deg )",o.transform="rotate3d( 1, 1, 0, 0deg )",h=r,a.transform="rotate3d( 1, 1, 0, -90deg )"}return{startInProp:e,startOutProp:s,endInProp:o,endOutProp:a,delay:h,animSpeed:r!=i?r:this.options.animSpeed}},_showNext:function(t){var e=this;clearTimeout(this.playtimeout),this.playtimeout=setTimeout(function(){var t=e.options.step,i=e.options.maxStep,s=1;i>e.showTotal&&(i=e.showTotal);for(var o="random"===t?Math.floor(Math.random()*i+s):Math.min(Math.abs(t),i),a=e._getRandom(o,e.showTotal),n=0;o>n;++n){var r=e.$items.eq(a[n]);if(r.data("active")||r.data("nochange"))return e._showNext(1),!1;e._replace(r)}e._showNext()},t||Math.max(Math.abs(this.options.interval),300))},_replace:function(e){e.data("active",!0);var i=this,s=e.children("a:last"),o={width:s.width(),height:s.height()};e.data("active",!0);var a=this.outItems.shift();this.outItems.push(s.clone().css("transition","none")),a.css(o).prependTo(e);var n=this._getAnimProperties(s);a.css(n.startInProp),s.css(n.startOutProp),this._setTransition(a,"all",n.animSpeed,n.delay,this.options.animEasingIn),this._setTransition(s,"all",n.animSpeed,0,this.options.animEasingOut),this._applyTransition(a,n.endInProp,n.animSpeed,function(){var e=t(this),s=n.animSpeed===i.options.animSpeed&&h(n.endInProp)?n.animSpeed:0;setTimeout(function(){i.supportTransitions&&e.off(i.transEndEventName),e.next().remove(),e.parent().data("active",!1)},s)},0===n.animSpeed||h(n.endInProp)),this._applyTransition(s,n.endOutProp,n.animSpeed)},_getRandom:function(t,e){for(var i=[],s=0;e>s;++s)i.push(s);return i.shuffle().slice(0,t)},_setTransition:function(t,e,i,s,o){setTimeout(function(){t.css("transition",e+" "+i+"ms "+s+"ms "+o)},25)},_applyTransition:function(e,i,s,o,a){var n=this;setTimeout(function(){t.fn.applyStyle=n.supportTransitions?t.fn.css:t.fn.animate,o&&n.supportTransitions&&(e.on(n.transEndEventName,o),a&&o.call(e)),o=o||function(){return!1},e.stop().applyStyle(i,t.extend(!0,[],{duration:s+"ms",complete:o}))},25)}};var c=function(t){e.console&&e.console.error(t)};t.fn.gridrotator=function(e){var i=t.data(this,"gridrotator");if("string"==typeof e){var s=Array.prototype.slice.call(arguments,1);this.each(function(){return i?t.isFunction(i[e])&&"_"!==e.charAt(0)?void i[e].apply(i,s):void c("no such method '"+e+"' for gridrotator instance"):void c("cannot call methods on gridrotator prior to initialization; attempted to call method '"+e+"'")})}else this.each(function(){i?i._init():i=t.data(this,"gridrotator",new t.GridRotator(e,this))});return i}}(jQuery,window);



/*!

 * Retina.js v1.3.0

 *

 * Copyright 2014 Imulus, LLC

 * Released under the MIT license

 *

 * Retina.js is an open source script that makes it easy to serve

 * high-resolution images to devices with retina displays.

 */

!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();



/*

 * jQuery.appear

 * https://github.com/bas2k/jquery.appear/

 * http://code.google.com/p/jquery-appear/

 * http://bas2k.ru/

 *

 * Copyright (c) 2009 Michael Hixson

 * Copyright (c) 2012-2015 Alexander Brovikov

 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)

 */

 !function(t){t.fn.appear=function(e,a){var i=t.extend({data:void 0,one:!0,accX:0,accY:0},a);return this.each(function(){var a=t(this);if(a.appeared=!1,!e)return void a.trigger("appear",i.data);var s=t(window),o=function(){if(!a.is(":visible"))return void(a.appeared=!1);var t=s.scrollLeft(),e=s.scrollTop(),o=a.offset(),r=o.left,n=o.top,h=i.accX,c=i.accY,l=a.height(),d=s.height(),p=a.width(),f=s.width();n+l+c>=e&&e+d+c>=n&&r+p+h>=t&&t+f+h>=r?a.appeared||a.trigger("appear",i.data):a.appeared=!1},r=function(){if(a.appeared=!0,i.one){s.unbind("scroll",o);var r=t.inArray(o,t.fn.appear.checks);r>=0&&t.fn.appear.checks.splice(r,1)}e.apply(this,arguments)};i.one?a.one("appear",i.data,r):a.bind("appear",i.data,r),s.scroll(o),t.fn.appear.checks.push(o),o()})},t.extend(t.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=t.fn.appear.checks.length;if(e>0)for(;e--;)t.fn.appear.checks[e]()},run:function(){t.fn.appear.timeout&&clearTimeout(t.fn.appear.timeout),t.fn.appear.timeout=setTimeout(t.fn.appear.checkAll,20)}}),t.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var i=t.fn[a];i&&(t.fn[a]=function(){var e=i.apply(this,arguments);return t.fn.appear.run(),e})})}(jQuery);

 

 /*

 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 *

 * Uses the built in easing capabilities added In jQuery 1.1

 * to offer multiple easing options

 *

 * TERMS OF USE - jQuery Easing

 * 

 * Open source under the BSD License. 

 * 

 * Copyright © 2008 George McGinley Smith

 * All rights reserved.

 * 

 * Redistribution and use in source and binary forms, with or without modification, 

 * are permitted provided that the following conditions are met:

 * 

 * Redistributions of source code must retain the above copyright notice, this list of 

 * conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list 

 * of conditions and the following disclaimer in the documentation and/or other materials 

 * provided with the distribution.

 * 

 * Neither the name of the author nor the names of contributors may be used to endorse 

 * or promote products derived from this software without specific prior written permission.

 * 

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 

 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF

 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE

 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,

 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE

 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 

 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING

 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 

 * OF THE POSSIBILITY OF SUCH DAMAGE. 

 *

*/



// t: current time, b: begInnIng value, c: change In value, d: duration

 jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,a,i){return jQuery.easing[jQuery.easing.def](t,e,n,a,i)},easeInQuad:function(t,e,n,a,i){return a*(e/=i)*e+n},easeOutQuad:function(t,e,n,a,i){return-a*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,a,i){return a*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,a,i){return a*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,a,i){return a*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,a,i){return-a*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,a,i){return a*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,a,i){return a*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,a,i){return-a*Math.cos(e/i*(Math.PI/2))+a+n},easeOutSine:function(t,e,n,a,i){return a*Math.sin(e/i*(Math.PI/2))+n},easeInOutSine:function(t,e,n,a,i){return-a/2*(Math.cos(Math.PI*e/i)-1)+n},easeInExpo:function(t,e,n,a,i){return 0==e?n:a*Math.pow(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,a,i){return e==i?n+a:a*(-Math.pow(2,-10*e/i)+1)+n},easeInOutExpo:function(t,e,n,a,i){return 0==e?n:e==i?n+a:(e/=i/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,a,i){return-a*(Math.sqrt(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,a,i){return a*Math.sqrt(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,a,i){return(e/=i/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,a,i){var r=1.70158,s=0,o=a;if(0==e)return n;if(1==(e/=i))return n+a;if(s||(s=.3*i),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return-(o*Math.pow(2,10*(e-=1))*Math.sin((e*i-r)*(2*Math.PI)/s))+n},easeOutElastic:function(t,e,n,a,i){var r=1.70158,s=0,o=a;if(0==e)return n;if(1==(e/=i))return n+a;if(s||(s=.3*i),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return o*Math.pow(2,-10*e)*Math.sin((e*i-r)*(2*Math.PI)/s)+a+n},easeInOutElastic:function(t,e,n,a,i){var r=1.70158,s=0,o=a;if(0==e)return n;if(2==(e/=i/2))return n+a;if(s||(s=i*(.3*1.5)),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return 1>e?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*i-r)*(2*Math.PI)/s))+n:o*Math.pow(2,-10*(e-=1))*Math.sin((e*i-r)*(2*Math.PI)/s)*.5+a+n},easeInBack:function(t,e,n,a,i,r){return void 0==r&&(r=1.70158),a*(e/=i)*e*((r+1)*e-r)+n},easeOutBack:function(t,e,n,a,i,r){return void 0==r&&(r=1.70158),a*((e=e/i-1)*e*((r+1)*e+r)+1)+n},easeInOutBack:function(t,e,n,a,i,r){return void 0==r&&(r=1.70158),(e/=i/2)<1?a/2*(e*e*(((r*=1.525)+1)*e-r))+n:a/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+n},easeInBounce:function(t,e,n,a,i){return a-jQuery.easing.easeOutBounce(t,i-e,0,a,i)+n},easeOutBounce:function(t,e,n,a,i){return(e/=i)<1/2.75?a*(7.5625*e*e)+n:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,a,i){return i/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,a,i)+n:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,a,i)+.5*a+n}});

 

 

