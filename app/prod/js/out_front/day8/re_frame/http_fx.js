// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__23180){
var vec__23184 = p__23180;
var success_QMARK_ = cljs.core.nth.call(null,vec__23184,(0),null);
var response = cljs.core.nth.call(null,vec__23184,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__23189){
var map__23192 = p__23189;
var map__23192__$1 = ((((!((map__23192 == null)))?((((map__23192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23192):map__23192);
var request = map__23192__$1;
var on_success = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__23192,map__23192__$1,request,on_success,on_failure){
return (function (p1__23187_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__23187_SHARP_));
});})(api,map__23192,map__23192__$1,request,on_success,on_failure))
,((function (api,map__23192,map__23192__$1,request,on_success,on_failure){
return (function (p1__23188_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__23188_SHARP_));
});})(api,map__23192,map__23192__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__23198 = cljs.core.seq.call(null,seq_request_maps);
var chunk__23199 = null;
var count__23200 = (0);
var i__23201 = (0);
while(true){
if((i__23201 < count__23200)){
var request__$1 = cljs.core._nth.call(null,chunk__23199,i__23201);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__23202 = seq__23198;
var G__23203 = chunk__23199;
var G__23204 = count__23200;
var G__23205 = (i__23201 + (1));
seq__23198 = G__23202;
chunk__23199 = G__23203;
count__23200 = G__23204;
i__23201 = G__23205;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23198);
if(temp__4657__auto__){
var seq__23198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23198__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__23198__$1);
var G__23206 = cljs.core.chunk_rest.call(null,seq__23198__$1);
var G__23207 = c__7767__auto__;
var G__23208 = cljs.core.count.call(null,c__7767__auto__);
var G__23209 = (0);
seq__23198 = G__23206;
chunk__23199 = G__23207;
count__23200 = G__23208;
i__23201 = G__23209;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__23198__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__23210 = cljs.core.next.call(null,seq__23198__$1);
var G__23211 = null;
var G__23212 = (0);
var G__23213 = (0);
seq__23198 = G__23210;
chunk__23199 = G__23211;
count__23200 = G__23212;
i__23201 = G__23213;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);
