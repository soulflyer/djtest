// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_47434 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__47435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47436 = null;
var count__47437 = (0);
var i__47438 = (0);
while(true){
if((i__47438 < count__47437)){
var vec__47439 = cljs.core._nth.call(null,chunk__47436,i__47438);
var effect_key = cljs.core.nth.call(null,vec__47439,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47439,(1),null);
var temp__4655__auto___47455 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47455)){
var effect_fn_47456 = temp__4655__auto___47455;
effect_fn_47456.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47457 = seq__47435;
var G__47458 = chunk__47436;
var G__47459 = count__47437;
var G__47460 = (i__47438 + (1));
seq__47435 = G__47457;
chunk__47436 = G__47458;
count__47437 = G__47459;
i__47438 = G__47460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47435);
if(temp__4657__auto__){
var seq__47435__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47435__$1)){
var c__46237__auto__ = cljs.core.chunk_first.call(null,seq__47435__$1);
var G__47461 = cljs.core.chunk_rest.call(null,seq__47435__$1);
var G__47462 = c__46237__auto__;
var G__47463 = cljs.core.count.call(null,c__46237__auto__);
var G__47464 = (0);
seq__47435 = G__47461;
chunk__47436 = G__47462;
count__47437 = G__47463;
i__47438 = G__47464;
continue;
} else {
var vec__47442 = cljs.core.first.call(null,seq__47435__$1);
var effect_key = cljs.core.nth.call(null,vec__47442,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47442,(1),null);
var temp__4655__auto___47465 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47465)){
var effect_fn_47466 = temp__4655__auto___47465;
effect_fn_47466.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47467 = cljs.core.next.call(null,seq__47435__$1);
var G__47468 = null;
var G__47469 = (0);
var G__47470 = (0);
seq__47435 = G__47467;
chunk__47436 = G__47468;
count__47437 = G__47469;
i__47438 = G__47470;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47214__auto___47471 = re_frame.interop.now.call(null);
var duration__47215__auto___47472 = (end__47214__auto___47471 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47215__auto___47472,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__47214__auto___47471);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_47434;
}} else {
var seq__47445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47446 = null;
var count__47447 = (0);
var i__47448 = (0);
while(true){
if((i__47448 < count__47447)){
var vec__47449 = cljs.core._nth.call(null,chunk__47446,i__47448);
var effect_key = cljs.core.nth.call(null,vec__47449,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47449,(1),null);
var temp__4655__auto___47473 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47473)){
var effect_fn_47474 = temp__4655__auto___47473;
effect_fn_47474.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47475 = seq__47445;
var G__47476 = chunk__47446;
var G__47477 = count__47447;
var G__47478 = (i__47448 + (1));
seq__47445 = G__47475;
chunk__47446 = G__47476;
count__47447 = G__47477;
i__47448 = G__47478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47445);
if(temp__4657__auto__){
var seq__47445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47445__$1)){
var c__46237__auto__ = cljs.core.chunk_first.call(null,seq__47445__$1);
var G__47479 = cljs.core.chunk_rest.call(null,seq__47445__$1);
var G__47480 = c__46237__auto__;
var G__47481 = cljs.core.count.call(null,c__46237__auto__);
var G__47482 = (0);
seq__47445 = G__47479;
chunk__47446 = G__47480;
count__47447 = G__47481;
i__47448 = G__47482;
continue;
} else {
var vec__47452 = cljs.core.first.call(null,seq__47445__$1);
var effect_key = cljs.core.nth.call(null,vec__47452,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47452,(1),null);
var temp__4655__auto___47483 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47483)){
var effect_fn_47484 = temp__4655__auto___47483;
effect_fn_47484.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47485 = cljs.core.next.call(null,seq__47445__$1);
var G__47486 = null;
var G__47487 = (0);
var G__47488 = (0);
seq__47445 = G__47485;
chunk__47446 = G__47486;
count__47447 = G__47487;
i__47448 = G__47488;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47489 = cljs.core.seq.call(null,value);
var chunk__47490 = null;
var count__47491 = (0);
var i__47492 = (0);
while(true){
if((i__47492 < count__47491)){
var map__47493 = cljs.core._nth.call(null,chunk__47490,i__47492);
var map__47493__$1 = ((((!((map__47493 == null)))?((((map__47493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47493):map__47493);
var effect = map__47493__$1;
var ms = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47489,chunk__47490,count__47491,i__47492,map__47493,map__47493__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47489,chunk__47490,count__47491,i__47492,map__47493,map__47493__$1,effect,ms,dispatch))
,ms);
}

var G__47497 = seq__47489;
var G__47498 = chunk__47490;
var G__47499 = count__47491;
var G__47500 = (i__47492 + (1));
seq__47489 = G__47497;
chunk__47490 = G__47498;
count__47491 = G__47499;
i__47492 = G__47500;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47489);
if(temp__4657__auto__){
var seq__47489__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47489__$1)){
var c__46237__auto__ = cljs.core.chunk_first.call(null,seq__47489__$1);
var G__47501 = cljs.core.chunk_rest.call(null,seq__47489__$1);
var G__47502 = c__46237__auto__;
var G__47503 = cljs.core.count.call(null,c__46237__auto__);
var G__47504 = (0);
seq__47489 = G__47501;
chunk__47490 = G__47502;
count__47491 = G__47503;
i__47492 = G__47504;
continue;
} else {
var map__47495 = cljs.core.first.call(null,seq__47489__$1);
var map__47495__$1 = ((((!((map__47495 == null)))?((((map__47495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47495):map__47495);
var effect = map__47495__$1;
var ms = cljs.core.get.call(null,map__47495__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47495__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47489,chunk__47490,count__47491,i__47492,map__47495,map__47495__$1,effect,ms,dispatch,seq__47489__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47489,chunk__47490,count__47491,i__47492,map__47495,map__47495__$1,effect,ms,dispatch,seq__47489__$1,temp__4657__auto__))
,ms);
}

var G__47505 = cljs.core.next.call(null,seq__47489__$1);
var G__47506 = null;
var G__47507 = (0);
var G__47508 = (0);
seq__47489 = G__47505;
chunk__47490 = G__47506;
count__47491 = G__47507;
i__47492 = G__47508;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__47509 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__47510 = null;
var count__47511 = (0);
var i__47512 = (0);
while(true){
if((i__47512 < count__47511)){
var event = cljs.core._nth.call(null,chunk__47510,i__47512);
re_frame.router.dispatch.call(null,event);

var G__47513 = seq__47509;
var G__47514 = chunk__47510;
var G__47515 = count__47511;
var G__47516 = (i__47512 + (1));
seq__47509 = G__47513;
chunk__47510 = G__47514;
count__47511 = G__47515;
i__47512 = G__47516;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47509);
if(temp__4657__auto__){
var seq__47509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47509__$1)){
var c__46237__auto__ = cljs.core.chunk_first.call(null,seq__47509__$1);
var G__47517 = cljs.core.chunk_rest.call(null,seq__47509__$1);
var G__47518 = c__46237__auto__;
var G__47519 = cljs.core.count.call(null,c__46237__auto__);
var G__47520 = (0);
seq__47509 = G__47517;
chunk__47510 = G__47518;
count__47511 = G__47519;
i__47512 = G__47520;
continue;
} else {
var event = cljs.core.first.call(null,seq__47509__$1);
re_frame.router.dispatch.call(null,event);

var G__47521 = cljs.core.next.call(null,seq__47509__$1);
var G__47522 = null;
var G__47523 = (0);
var G__47524 = (0);
seq__47509 = G__47521;
chunk__47510 = G__47522;
count__47511 = G__47523;
i__47512 = G__47524;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__47525 = cljs.core.seq.call(null,value);
var chunk__47526 = null;
var count__47527 = (0);
var i__47528 = (0);
while(true){
if((i__47528 < count__47527)){
var event = cljs.core._nth.call(null,chunk__47526,i__47528);
clear_event.call(null,event);

var G__47529 = seq__47525;
var G__47530 = chunk__47526;
var G__47531 = count__47527;
var G__47532 = (i__47528 + (1));
seq__47525 = G__47529;
chunk__47526 = G__47530;
count__47527 = G__47531;
i__47528 = G__47532;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47525);
if(temp__4657__auto__){
var seq__47525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47525__$1)){
var c__46237__auto__ = cljs.core.chunk_first.call(null,seq__47525__$1);
var G__47533 = cljs.core.chunk_rest.call(null,seq__47525__$1);
var G__47534 = c__46237__auto__;
var G__47535 = cljs.core.count.call(null,c__46237__auto__);
var G__47536 = (0);
seq__47525 = G__47533;
chunk__47526 = G__47534;
count__47527 = G__47535;
i__47528 = G__47536;
continue;
} else {
var event = cljs.core.first.call(null,seq__47525__$1);
clear_event.call(null,event);

var G__47537 = cljs.core.next.call(null,seq__47525__$1);
var G__47538 = null;
var G__47539 = (0);
var G__47540 = (0);
seq__47525 = G__47537;
chunk__47526 = G__47538;
count__47527 = G__47539;
i__47528 = G__47540;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map