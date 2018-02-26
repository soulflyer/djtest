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
var _STAR_current_trace_STAR_17451 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__17452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17453 = null;
var count__17454 = (0);
var i__17455 = (0);
while(true){
if((i__17455 < count__17454)){
var vec__17456 = cljs.core._nth.call(null,chunk__17453,i__17455);
var effect_key = cljs.core.nth.call(null,vec__17456,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17456,(1),null);
var temp__4655__auto___17472 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17472)){
var effect_fn_17473 = temp__4655__auto___17472;
effect_fn_17473.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__17474 = seq__17452;
var G__17475 = chunk__17453;
var G__17476 = count__17454;
var G__17477 = (i__17455 + (1));
seq__17452 = G__17474;
chunk__17453 = G__17475;
count__17454 = G__17476;
i__17455 = G__17477;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17452);
if(temp__4657__auto__){
var seq__17452__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17452__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17452__$1);
var G__17478 = cljs.core.chunk_rest.call(null,seq__17452__$1);
var G__17479 = c__7633__auto__;
var G__17480 = cljs.core.count.call(null,c__7633__auto__);
var G__17481 = (0);
seq__17452 = G__17478;
chunk__17453 = G__17479;
count__17454 = G__17480;
i__17455 = G__17481;
continue;
} else {
var vec__17459 = cljs.core.first.call(null,seq__17452__$1);
var effect_key = cljs.core.nth.call(null,vec__17459,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17459,(1),null);
var temp__4655__auto___17482 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17482)){
var effect_fn_17483 = temp__4655__auto___17482;
effect_fn_17483.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__17484 = cljs.core.next.call(null,seq__17452__$1);
var G__17485 = null;
var G__17486 = (0);
var G__17487 = (0);
seq__17452 = G__17484;
chunk__17453 = G__17485;
count__17454 = G__17486;
i__17455 = G__17487;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__8570__auto___17488 = re_frame.interop.now.call(null);
var duration__8571__auto___17489 = (end__8570__auto___17488 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__8571__auto___17489,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__8570__auto___17488);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17451;
}} else {
var seq__17462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17463 = null;
var count__17464 = (0);
var i__17465 = (0);
while(true){
if((i__17465 < count__17464)){
var vec__17466 = cljs.core._nth.call(null,chunk__17463,i__17465);
var effect_key = cljs.core.nth.call(null,vec__17466,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17466,(1),null);
var temp__4655__auto___17490 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17490)){
var effect_fn_17491 = temp__4655__auto___17490;
effect_fn_17491.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__17492 = seq__17462;
var G__17493 = chunk__17463;
var G__17494 = count__17464;
var G__17495 = (i__17465 + (1));
seq__17462 = G__17492;
chunk__17463 = G__17493;
count__17464 = G__17494;
i__17465 = G__17495;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17462);
if(temp__4657__auto__){
var seq__17462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17462__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17462__$1);
var G__17496 = cljs.core.chunk_rest.call(null,seq__17462__$1);
var G__17497 = c__7633__auto__;
var G__17498 = cljs.core.count.call(null,c__7633__auto__);
var G__17499 = (0);
seq__17462 = G__17496;
chunk__17463 = G__17497;
count__17464 = G__17498;
i__17465 = G__17499;
continue;
} else {
var vec__17469 = cljs.core.first.call(null,seq__17462__$1);
var effect_key = cljs.core.nth.call(null,vec__17469,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17469,(1),null);
var temp__4655__auto___17500 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17500)){
var effect_fn_17501 = temp__4655__auto___17500;
effect_fn_17501.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__17502 = cljs.core.next.call(null,seq__17462__$1);
var G__17503 = null;
var G__17504 = (0);
var G__17505 = (0);
seq__17462 = G__17502;
chunk__17463 = G__17503;
count__17464 = G__17504;
i__17465 = G__17505;
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
var seq__17506 = cljs.core.seq.call(null,value);
var chunk__17507 = null;
var count__17508 = (0);
var i__17509 = (0);
while(true){
if((i__17509 < count__17508)){
var map__17510 = cljs.core._nth.call(null,chunk__17507,i__17509);
var map__17510__$1 = ((((!((map__17510 == null)))?((((map__17510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17510):map__17510);
var effect = map__17510__$1;
var ms = cljs.core.get.call(null,map__17510__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17510__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17506,chunk__17507,count__17508,i__17509,map__17510,map__17510__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17506,chunk__17507,count__17508,i__17509,map__17510,map__17510__$1,effect,ms,dispatch))
,ms);
}

var G__17514 = seq__17506;
var G__17515 = chunk__17507;
var G__17516 = count__17508;
var G__17517 = (i__17509 + (1));
seq__17506 = G__17514;
chunk__17507 = G__17515;
count__17508 = G__17516;
i__17509 = G__17517;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17506);
if(temp__4657__auto__){
var seq__17506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17506__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17506__$1);
var G__17518 = cljs.core.chunk_rest.call(null,seq__17506__$1);
var G__17519 = c__7633__auto__;
var G__17520 = cljs.core.count.call(null,c__7633__auto__);
var G__17521 = (0);
seq__17506 = G__17518;
chunk__17507 = G__17519;
count__17508 = G__17520;
i__17509 = G__17521;
continue;
} else {
var map__17512 = cljs.core.first.call(null,seq__17506__$1);
var map__17512__$1 = ((((!((map__17512 == null)))?((((map__17512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17512):map__17512);
var effect = map__17512__$1;
var ms = cljs.core.get.call(null,map__17512__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17512__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17506,chunk__17507,count__17508,i__17509,map__17512,map__17512__$1,effect,ms,dispatch,seq__17506__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17506,chunk__17507,count__17508,i__17509,map__17512,map__17512__$1,effect,ms,dispatch,seq__17506__$1,temp__4657__auto__))
,ms);
}

var G__17522 = cljs.core.next.call(null,seq__17506__$1);
var G__17523 = null;
var G__17524 = (0);
var G__17525 = (0);
seq__17506 = G__17522;
chunk__17507 = G__17523;
count__17508 = G__17524;
i__17509 = G__17525;
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
var seq__17526 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__17527 = null;
var count__17528 = (0);
var i__17529 = (0);
while(true){
if((i__17529 < count__17528)){
var event = cljs.core._nth.call(null,chunk__17527,i__17529);
re_frame.router.dispatch.call(null,event);

var G__17530 = seq__17526;
var G__17531 = chunk__17527;
var G__17532 = count__17528;
var G__17533 = (i__17529 + (1));
seq__17526 = G__17530;
chunk__17527 = G__17531;
count__17528 = G__17532;
i__17529 = G__17533;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17526);
if(temp__4657__auto__){
var seq__17526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17526__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17526__$1);
var G__17534 = cljs.core.chunk_rest.call(null,seq__17526__$1);
var G__17535 = c__7633__auto__;
var G__17536 = cljs.core.count.call(null,c__7633__auto__);
var G__17537 = (0);
seq__17526 = G__17534;
chunk__17527 = G__17535;
count__17528 = G__17536;
i__17529 = G__17537;
continue;
} else {
var event = cljs.core.first.call(null,seq__17526__$1);
re_frame.router.dispatch.call(null,event);

var G__17538 = cljs.core.next.call(null,seq__17526__$1);
var G__17539 = null;
var G__17540 = (0);
var G__17541 = (0);
seq__17526 = G__17538;
chunk__17527 = G__17539;
count__17528 = G__17540;
i__17529 = G__17541;
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
var seq__17542 = cljs.core.seq.call(null,value);
var chunk__17543 = null;
var count__17544 = (0);
var i__17545 = (0);
while(true){
if((i__17545 < count__17544)){
var event = cljs.core._nth.call(null,chunk__17543,i__17545);
clear_event.call(null,event);

var G__17546 = seq__17542;
var G__17547 = chunk__17543;
var G__17548 = count__17544;
var G__17549 = (i__17545 + (1));
seq__17542 = G__17546;
chunk__17543 = G__17547;
count__17544 = G__17548;
i__17545 = G__17549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17542);
if(temp__4657__auto__){
var seq__17542__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17542__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17542__$1);
var G__17550 = cljs.core.chunk_rest.call(null,seq__17542__$1);
var G__17551 = c__7633__auto__;
var G__17552 = cljs.core.count.call(null,c__7633__auto__);
var G__17553 = (0);
seq__17542 = G__17550;
chunk__17543 = G__17551;
count__17544 = G__17552;
i__17545 = G__17553;
continue;
} else {
var event = cljs.core.first.call(null,seq__17542__$1);
clear_event.call(null,event);

var G__17554 = cljs.core.next.call(null,seq__17542__$1);
var G__17555 = null;
var G__17556 = (0);
var G__17557 = (0);
seq__17542 = G__17554;
chunk__17543 = G__17555;
count__17544 = G__17556;
i__17545 = G__17557;
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
