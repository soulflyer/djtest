// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__47236){
var map__47239 = p__47236;
var map__47239__$1 = ((((!((map__47239 == null)))?((((map__47239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47239):map__47239);
var operation = cljs.core.get.call(null,map__47239__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__47239__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__47239__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__47239__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__45418__auto__ = child_of;
if(cljs.core.truth_(or__45418__auto__)){
return or__45418__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__47253_47265 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__47254_47266 = null;
var count__47255_47267 = (0);
var i__47256_47268 = (0);
while(true){
if((i__47256_47268 < count__47255_47267)){
var vec__47257_47269 = cljs.core._nth.call(null,chunk__47254_47266,i__47256_47268);
var k_47270 = cljs.core.nth.call(null,vec__47257_47269,(0),null);
var cb_47271 = cljs.core.nth.call(null,vec__47257_47269,(1),null);
try{cb_47271.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e47260){var e_47272 = e47260;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_47270,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_47272);
}
var G__47273 = seq__47253_47265;
var G__47274 = chunk__47254_47266;
var G__47275 = count__47255_47267;
var G__47276 = (i__47256_47268 + (1));
seq__47253_47265 = G__47273;
chunk__47254_47266 = G__47274;
count__47255_47267 = G__47275;
i__47256_47268 = G__47276;
continue;
} else {
var temp__4657__auto___47277 = cljs.core.seq.call(null,seq__47253_47265);
if(temp__4657__auto___47277){
var seq__47253_47278__$1 = temp__4657__auto___47277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47253_47278__$1)){
var c__46237__auto___47279 = cljs.core.chunk_first.call(null,seq__47253_47278__$1);
var G__47280 = cljs.core.chunk_rest.call(null,seq__47253_47278__$1);
var G__47281 = c__46237__auto___47279;
var G__47282 = cljs.core.count.call(null,c__46237__auto___47279);
var G__47283 = (0);
seq__47253_47265 = G__47280;
chunk__47254_47266 = G__47281;
count__47255_47267 = G__47282;
i__47256_47268 = G__47283;
continue;
} else {
var vec__47261_47284 = cljs.core.first.call(null,seq__47253_47278__$1);
var k_47285 = cljs.core.nth.call(null,vec__47261_47284,(0),null);
var cb_47286 = cljs.core.nth.call(null,vec__47261_47284,(1),null);
try{cb_47286.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e47264){var e_47287 = e47264;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_47285,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_47287);
}
var G__47288 = cljs.core.next.call(null,seq__47253_47278__$1);
var G__47289 = null;
var G__47290 = (0);
var G__47291 = (0);
seq__47253_47265 = G__47288;
chunk__47254_47266 = G__47289;
count__47255_47267 = G__47290;
i__47256_47268 = G__47291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map