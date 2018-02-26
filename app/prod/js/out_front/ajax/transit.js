// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.util');
ajax.transit.transit_type = (function ajax$transit$transit_type(p__22456){
var map__22459 = p__22456;
var map__22459__$1 = ((((!((map__22459 == null)))?((((map__22459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22459):map__22459);
var type = cljs.core.get.call(null,map__22459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__6948__auto__ = type;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.transit.transit_write_fn = (function ajax$transit$transit_write_fn(type,request){
var writer = (function (){var or__6948__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$transit$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.transit.transit_request_format = (function ajax$transit$transit_request_format(var_args){
var args22461 = [];
var len__8057__auto___22464 = arguments.length;
var i__8058__auto___22465 = (0);
while(true){
if((i__8058__auto___22465 < len__8057__auto___22464)){
args22461.push((arguments[i__8058__auto___22465]));

var G__22466 = (i__8058__auto___22465 + (1));
i__8058__auto___22465 = G__22466;
continue;
} else {
}
break;
}

var G__22463 = args22461.length;
switch (G__22463) {
case 0:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22461.length)].join('')));

}
});

ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.transit.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.transit.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("application/transit+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type)].join('')], null);
});

ajax.transit.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.transit.transit_read_fn = (function ajax$transit$transit_read_fn(request){
var reader = (function (){var or__6948__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$transit$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
});
;})(reader))
});
ajax.transit.transit_response_format = (function ajax$transit$transit_response_format(var_args){
var args22468 = [];
var len__8057__auto___22471 = arguments.length;
var i__8058__auto___22472 = (0);
while(true){
if((i__8058__auto___22472 < len__8057__auto___22471)){
args22468.push((arguments[i__8058__auto___22472]));

var G__22473 = (i__8058__auto___22472 + (1));
i__8058__auto___22472 = G__22473;
continue;
} else {
}
break;
}

var G__22470 = args22468.length;
switch (G__22470) {
case 0:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22468.length)].join('')));

}
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.transit.transit_response_format.call(null,ajax.transit.transit_type.call(null,request),request);
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.transit.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.transit.transit_response_format.cljs$lang$maxFixedArity = 2;

