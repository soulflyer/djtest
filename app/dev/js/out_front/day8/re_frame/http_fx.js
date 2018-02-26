// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__11177){
var vec__11181 = p__11177;
var success_QMARK_ = cljs.core.nth.call(null,vec__11181,(0),null);
var response = cljs.core.nth.call(null,vec__11181,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__11186){
var map__11189 = p__11186;
var map__11189__$1 = ((((!((map__11189 == null)))?((((map__11189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11189):map__11189);
var request = map__11189__$1;
var on_success = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__11189,map__11189__$1,request,on_success,on_failure){
return (function (p1__11184_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__11184_SHARP_));
});})(api,map__11189,map__11189__$1,request,on_success,on_failure))
,((function (api,map__11189,map__11189__$1,request,on_success,on_failure){
return (function (p1__11185_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__11185_SHARP_));
});})(api,map__11189,map__11189__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__11195 = cljs.core.seq.call(null,seq_request_maps);
var chunk__11196 = null;
var count__11197 = (0);
var i__11198 = (0);
while(true){
if((i__11198 < count__11197)){
var request__$1 = cljs.core._nth.call(null,chunk__11196,i__11198);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__11199 = seq__11195;
var G__11200 = chunk__11196;
var G__11201 = count__11197;
var G__11202 = (i__11198 + (1));
seq__11195 = G__11199;
chunk__11196 = G__11200;
count__11197 = G__11201;
i__11198 = G__11202;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11195);
if(temp__4657__auto__){
var seq__11195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11195__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__11195__$1);
var G__11203 = cljs.core.chunk_rest.call(null,seq__11195__$1);
var G__11204 = c__7767__auto__;
var G__11205 = cljs.core.count.call(null,c__7767__auto__);
var G__11206 = (0);
seq__11195 = G__11203;
chunk__11196 = G__11204;
count__11197 = G__11205;
i__11198 = G__11206;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__11195__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__11207 = cljs.core.next.call(null,seq__11195__$1);
var G__11208 = null;
var G__11209 = (0);
var G__11210 = (0);
seq__11195 = G__11207;
chunk__11196 = G__11208;
count__11197 = G__11209;
i__11198 = G__11210;
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

//# sourceMappingURL=http_fx.js.map