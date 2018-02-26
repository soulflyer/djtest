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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12922){
var map__12925 = p__12922;
var map__12925__$1 = ((((!((map__12925 == null)))?((((map__12925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12925):map__12925);
var operation = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__6814__auto__ = child_of;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
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
var seq__12939_12951 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12940_12952 = null;
var count__12941_12953 = (0);
var i__12942_12954 = (0);
while(true){
if((i__12942_12954 < count__12941_12953)){
var vec__12943_12955 = cljs.core._nth.call(null,chunk__12940_12952,i__12942_12954);
var k_12956 = cljs.core.nth.call(null,vec__12943_12955,(0),null);
var cb_12957 = cljs.core.nth.call(null,vec__12943_12955,(1),null);
try{cb_12957.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e12946){var e_12958 = e12946;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_12956,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_12958);
}
var G__12959 = seq__12939_12951;
var G__12960 = chunk__12940_12952;
var G__12961 = count__12941_12953;
var G__12962 = (i__12942_12954 + (1));
seq__12939_12951 = G__12959;
chunk__12940_12952 = G__12960;
count__12941_12953 = G__12961;
i__12942_12954 = G__12962;
continue;
} else {
var temp__4657__auto___12963 = cljs.core.seq.call(null,seq__12939_12951);
if(temp__4657__auto___12963){
var seq__12939_12964__$1 = temp__4657__auto___12963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12939_12964__$1)){
var c__7633__auto___12965 = cljs.core.chunk_first.call(null,seq__12939_12964__$1);
var G__12966 = cljs.core.chunk_rest.call(null,seq__12939_12964__$1);
var G__12967 = c__7633__auto___12965;
var G__12968 = cljs.core.count.call(null,c__7633__auto___12965);
var G__12969 = (0);
seq__12939_12951 = G__12966;
chunk__12940_12952 = G__12967;
count__12941_12953 = G__12968;
i__12942_12954 = G__12969;
continue;
} else {
var vec__12947_12970 = cljs.core.first.call(null,seq__12939_12964__$1);
var k_12971 = cljs.core.nth.call(null,vec__12947_12970,(0),null);
var cb_12972 = cljs.core.nth.call(null,vec__12947_12970,(1),null);
try{cb_12972.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e12950){var e_12973 = e12950;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_12971,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_12973);
}
var G__12974 = cljs.core.next.call(null,seq__12939_12964__$1);
var G__12975 = null;
var G__12976 = (0);
var G__12977 = (0);
seq__12939_12951 = G__12974;
chunk__12940_12952 = G__12975;
count__12941_12953 = G__12976;
i__12942_12954 = G__12977;
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
