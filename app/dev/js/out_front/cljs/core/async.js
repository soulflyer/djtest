// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args11520 = [];
var len__7923__auto___11526 = arguments.length;
var i__7924__auto___11527 = (0);
while(true){
if((i__7924__auto___11527 < len__7923__auto___11526)){
args11520.push((arguments[i__7924__auto___11527]));

var G__11528 = (i__7924__auto___11527 + (1));
i__7924__auto___11527 = G__11528;
continue;
} else {
}
break;
}

var G__11522 = args11520.length;
switch (G__11522) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11520.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11523 = (function (f,blockable,meta11524){
this.f = f;
this.blockable = blockable;
this.meta11524 = meta11524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11525,meta11524__$1){
var self__ = this;
var _11525__$1 = this;
return (new cljs.core.async.t_cljs$core$async11523(self__.f,self__.blockable,meta11524__$1));
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11525){
var self__ = this;
var _11525__$1 = this;
return self__.meta11524;
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11524","meta11524",1149239094,null)], null);
});

cljs.core.async.t_cljs$core$async11523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11523";

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11523");
});

cljs.core.async.__GT_t_cljs$core$async11523 = (function cljs$core$async$__GT_t_cljs$core$async11523(f__$1,blockable__$1,meta11524){
return (new cljs.core.async.t_cljs$core$async11523(f__$1,blockable__$1,meta11524));
});

}

return (new cljs.core.async.t_cljs$core$async11523(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11532 = [];
var len__7923__auto___11535 = arguments.length;
var i__7924__auto___11536 = (0);
while(true){
if((i__7924__auto___11536 < len__7923__auto___11535)){
args11532.push((arguments[i__7924__auto___11536]));

var G__11537 = (i__7924__auto___11536 + (1));
i__7924__auto___11536 = G__11537;
continue;
} else {
}
break;
}

var G__11534 = args11532.length;
switch (G__11534) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11532.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args11539 = [];
var len__7923__auto___11542 = arguments.length;
var i__7924__auto___11543 = (0);
while(true){
if((i__7924__auto___11543 < len__7923__auto___11542)){
args11539.push((arguments[i__7924__auto___11543]));

var G__11544 = (i__7924__auto___11543 + (1));
i__7924__auto___11543 = G__11544;
continue;
} else {
}
break;
}

var G__11541 = args11539.length;
switch (G__11541) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11539.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11546 = [];
var len__7923__auto___11549 = arguments.length;
var i__7924__auto___11550 = (0);
while(true){
if((i__7924__auto___11550 < len__7923__auto___11549)){
args11546.push((arguments[i__7924__auto___11550]));

var G__11551 = (i__7924__auto___11550 + (1));
i__7924__auto___11550 = G__11551;
continue;
} else {
}
break;
}

var G__11548 = args11546.length;
switch (G__11548) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11546.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11553 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11553);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11553,ret){
return (function (){
return fn1.call(null,val_11553);
});})(val_11553,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11554 = [];
var len__7923__auto___11557 = arguments.length;
var i__7924__auto___11558 = (0);
while(true){
if((i__7924__auto___11558 < len__7923__auto___11557)){
args11554.push((arguments[i__7924__auto___11558]));

var G__11559 = (i__7924__auto___11558 + (1));
i__7924__auto___11558 = G__11559;
continue;
} else {
}
break;
}

var G__11556 = args11554.length;
switch (G__11556) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11554.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7737__auto___11561 = n;
var x_11562 = (0);
while(true){
if((x_11562 < n__7737__auto___11561)){
(a[x_11562] = (0));

var G__11563 = (x_11562 + (1));
x_11562 = G__11563;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11564 = (i + (1));
i = G__11564;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11568 = (function (flag,meta11569){
this.flag = flag;
this.meta11569 = meta11569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11570,meta11569__$1){
var self__ = this;
var _11570__$1 = this;
return (new cljs.core.async.t_cljs$core$async11568(self__.flag,meta11569__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11570){
var self__ = this;
var _11570__$1 = this;
return self__.meta11569;
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11569","meta11569",1749964980,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11568";

cljs.core.async.t_cljs$core$async11568.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11568");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11568 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11568(flag__$1,meta11569){
return (new cljs.core.async.t_cljs$core$async11568(flag__$1,meta11569));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11568(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11574 = (function (flag,cb,meta11575){
this.flag = flag;
this.cb = cb;
this.meta11575 = meta11575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11576,meta11575__$1){
var self__ = this;
var _11576__$1 = this;
return (new cljs.core.async.t_cljs$core$async11574(self__.flag,self__.cb,meta11575__$1));
});

cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11576){
var self__ = this;
var _11576__$1 = this;
return self__.meta11575;
});

cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11575","meta11575",-1163319315,null)], null);
});

cljs.core.async.t_cljs$core$async11574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11574";

cljs.core.async.t_cljs$core$async11574.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11574");
});

cljs.core.async.__GT_t_cljs$core$async11574 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11574(flag__$1,cb__$1,meta11575){
return (new cljs.core.async.t_cljs$core$async11574(flag__$1,cb__$1,meta11575));
});

}

return (new cljs.core.async.t_cljs$core$async11574(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11577_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11577_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11578_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11578_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6814__auto__ = wport;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11579 = (i + (1));
i = G__11579;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6814__auto__ = ret;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6802__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6802__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___11585 = arguments.length;
var i__7924__auto___11586 = (0);
while(true){
if((i__7924__auto___11586 < len__7923__auto___11585)){
args__7930__auto__.push((arguments[i__7924__auto___11586]));

var G__11587 = (i__7924__auto___11586 + (1));
i__7924__auto___11586 = G__11587;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((1) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11582){
var map__11583 = p__11582;
var map__11583__$1 = ((((!((map__11583 == null)))?((((map__11583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11583):map__11583);
var opts = map__11583__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11580){
var G__11581 = cljs.core.first.call(null,seq11580);
var seq11580__$1 = cljs.core.next.call(null,seq11580);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11581,seq11580__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11588 = [];
var len__7923__auto___11638 = arguments.length;
var i__7924__auto___11639 = (0);
while(true){
if((i__7924__auto___11639 < len__7923__auto___11638)){
args11588.push((arguments[i__7924__auto___11639]));

var G__11640 = (i__7924__auto___11639 + (1));
i__7924__auto___11639 = G__11640;
continue;
} else {
}
break;
}

var G__11590 = args11588.length;
switch (G__11590) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11588.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11475__auto___11642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___11642){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___11642){
return (function (state_11614){
var state_val_11615 = (state_11614[(1)]);
if((state_val_11615 === (7))){
var inst_11610 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11616_11643 = state_11614__$1;
(statearr_11616_11643[(2)] = inst_11610);

(statearr_11616_11643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (1))){
var state_11614__$1 = state_11614;
var statearr_11617_11644 = state_11614__$1;
(statearr_11617_11644[(2)] = null);

(statearr_11617_11644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (4))){
var inst_11593 = (state_11614[(7)]);
var inst_11593__$1 = (state_11614[(2)]);
var inst_11594 = (inst_11593__$1 == null);
var state_11614__$1 = (function (){var statearr_11618 = state_11614;
(statearr_11618[(7)] = inst_11593__$1);

return statearr_11618;
})();
if(cljs.core.truth_(inst_11594)){
var statearr_11619_11645 = state_11614__$1;
(statearr_11619_11645[(1)] = (5));

} else {
var statearr_11620_11646 = state_11614__$1;
(statearr_11620_11646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (13))){
var state_11614__$1 = state_11614;
var statearr_11621_11647 = state_11614__$1;
(statearr_11621_11647[(2)] = null);

(statearr_11621_11647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (6))){
var inst_11593 = (state_11614[(7)]);
var state_11614__$1 = state_11614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11614__$1,(11),to,inst_11593);
} else {
if((state_val_11615 === (3))){
var inst_11612 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11614__$1,inst_11612);
} else {
if((state_val_11615 === (12))){
var state_11614__$1 = state_11614;
var statearr_11622_11648 = state_11614__$1;
(statearr_11622_11648[(2)] = null);

(statearr_11622_11648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (2))){
var state_11614__$1 = state_11614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11614__$1,(4),from);
} else {
if((state_val_11615 === (11))){
var inst_11603 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
if(cljs.core.truth_(inst_11603)){
var statearr_11623_11649 = state_11614__$1;
(statearr_11623_11649[(1)] = (12));

} else {
var statearr_11624_11650 = state_11614__$1;
(statearr_11624_11650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (9))){
var state_11614__$1 = state_11614;
var statearr_11625_11651 = state_11614__$1;
(statearr_11625_11651[(2)] = null);

(statearr_11625_11651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (5))){
var state_11614__$1 = state_11614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11626_11652 = state_11614__$1;
(statearr_11626_11652[(1)] = (8));

} else {
var statearr_11627_11653 = state_11614__$1;
(statearr_11627_11653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (14))){
var inst_11608 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11628_11654 = state_11614__$1;
(statearr_11628_11654[(2)] = inst_11608);

(statearr_11628_11654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (10))){
var inst_11600 = (state_11614[(2)]);
var state_11614__$1 = state_11614;
var statearr_11629_11655 = state_11614__$1;
(statearr_11629_11655[(2)] = inst_11600);

(statearr_11629_11655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11615 === (8))){
var inst_11597 = cljs.core.async.close_BANG_.call(null,to);
var state_11614__$1 = state_11614;
var statearr_11630_11656 = state_11614__$1;
(statearr_11630_11656[(2)] = inst_11597);

(statearr_11630_11656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___11642))
;
return ((function (switch__11363__auto__,c__11475__auto___11642){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_11634 = [null,null,null,null,null,null,null,null];
(statearr_11634[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_11634[(1)] = (1));

return statearr_11634;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_11614){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_11614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e11635){if((e11635 instanceof Object)){
var ex__11367__auto__ = e11635;
var statearr_11636_11657 = state_11614;
(statearr_11636_11657[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11658 = state_11614;
state_11614 = G__11658;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_11614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_11614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___11642))
})();
var state__11477__auto__ = (function (){var statearr_11637 = f__11476__auto__.call(null);
(statearr_11637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___11642);

return statearr_11637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___11642))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11846){
var vec__11847 = p__11846;
var v = cljs.core.nth.call(null,vec__11847,(0),null);
var p = cljs.core.nth.call(null,vec__11847,(1),null);
var job = vec__11847;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11475__auto___12033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results){
return (function (state_11854){
var state_val_11855 = (state_11854[(1)]);
if((state_val_11855 === (1))){
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11854__$1,(2),res,v);
} else {
if((state_val_11855 === (2))){
var inst_11851 = (state_11854[(2)]);
var inst_11852 = cljs.core.async.close_BANG_.call(null,res);
var state_11854__$1 = (function (){var statearr_11856 = state_11854;
(statearr_11856[(7)] = inst_11851);

return statearr_11856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11854__$1,inst_11852);
} else {
return null;
}
}
});})(c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results))
;
return ((function (switch__11363__auto__,c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_11860 = [null,null,null,null,null,null,null,null];
(statearr_11860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__);

(statearr_11860[(1)] = (1));

return statearr_11860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1 = (function (state_11854){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_11854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e11861){if((e11861 instanceof Object)){
var ex__11367__auto__ = e11861;
var statearr_11862_12034 = state_11854;
(statearr_11862_12034[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12035 = state_11854;
state_11854 = G__12035;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results))
})();
var state__11477__auto__ = (function (){var statearr_11863 = f__11476__auto__.call(null);
(statearr_11863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12033);

return statearr_11863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___12033,res,vec__11847,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11864){
var vec__11865 = p__11864;
var v = cljs.core.nth.call(null,vec__11865,(0),null);
var p = cljs.core.nth.call(null,vec__11865,(1),null);
var job = vec__11865;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7737__auto___12036 = n;
var __12037 = (0);
while(true){
if((__12037 < n__7737__auto___12036)){
var G__11868_12038 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11868_12038) {
case "compute":
var c__11475__auto___12040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12037,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (__12037,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function (state_11881){
var state_val_11882 = (state_11881[(1)]);
if((state_val_11882 === (1))){
var state_11881__$1 = state_11881;
var statearr_11883_12041 = state_11881__$1;
(statearr_11883_12041[(2)] = null);

(statearr_11883_12041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (2))){
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11881__$1,(4),jobs);
} else {
if((state_val_11882 === (3))){
var inst_11879 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11881__$1,inst_11879);
} else {
if((state_val_11882 === (4))){
var inst_11871 = (state_11881[(2)]);
var inst_11872 = process.call(null,inst_11871);
var state_11881__$1 = state_11881;
if(cljs.core.truth_(inst_11872)){
var statearr_11884_12042 = state_11881__$1;
(statearr_11884_12042[(1)] = (5));

} else {
var statearr_11885_12043 = state_11881__$1;
(statearr_11885_12043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (5))){
var state_11881__$1 = state_11881;
var statearr_11886_12044 = state_11881__$1;
(statearr_11886_12044[(2)] = null);

(statearr_11886_12044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (6))){
var state_11881__$1 = state_11881;
var statearr_11887_12045 = state_11881__$1;
(statearr_11887_12045[(2)] = null);

(statearr_11887_12045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (7))){
var inst_11877 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11888_12046 = state_11881__$1;
(statearr_11888_12046[(2)] = inst_11877);

(statearr_11888_12046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12037,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
;
return ((function (__12037,switch__11363__auto__,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_11892 = [null,null,null,null,null,null,null];
(statearr_11892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__);

(statearr_11892[(1)] = (1));

return statearr_11892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1 = (function (state_11881){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_11881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e11893){if((e11893 instanceof Object)){
var ex__11367__auto__ = e11893;
var statearr_11894_12047 = state_11881;
(statearr_11894_12047[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12048 = state_11881;
state_11881 = G__12048;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__;
})()
;})(__12037,switch__11363__auto__,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_11895 = f__11476__auto__.call(null);
(statearr_11895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12040);

return statearr_11895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(__12037,c__11475__auto___12040,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
);


break;
case "async":
var c__11475__auto___12049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12037,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (__12037,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function (state_11908){
var state_val_11909 = (state_11908[(1)]);
if((state_val_11909 === (1))){
var state_11908__$1 = state_11908;
var statearr_11910_12050 = state_11908__$1;
(statearr_11910_12050[(2)] = null);

(statearr_11910_12050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11909 === (2))){
var state_11908__$1 = state_11908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11908__$1,(4),jobs);
} else {
if((state_val_11909 === (3))){
var inst_11906 = (state_11908[(2)]);
var state_11908__$1 = state_11908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11908__$1,inst_11906);
} else {
if((state_val_11909 === (4))){
var inst_11898 = (state_11908[(2)]);
var inst_11899 = async.call(null,inst_11898);
var state_11908__$1 = state_11908;
if(cljs.core.truth_(inst_11899)){
var statearr_11911_12051 = state_11908__$1;
(statearr_11911_12051[(1)] = (5));

} else {
var statearr_11912_12052 = state_11908__$1;
(statearr_11912_12052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11909 === (5))){
var state_11908__$1 = state_11908;
var statearr_11913_12053 = state_11908__$1;
(statearr_11913_12053[(2)] = null);

(statearr_11913_12053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11909 === (6))){
var state_11908__$1 = state_11908;
var statearr_11914_12054 = state_11908__$1;
(statearr_11914_12054[(2)] = null);

(statearr_11914_12054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11909 === (7))){
var inst_11904 = (state_11908[(2)]);
var state_11908__$1 = state_11908;
var statearr_11915_12055 = state_11908__$1;
(statearr_11915_12055[(2)] = inst_11904);

(statearr_11915_12055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12037,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
;
return ((function (__12037,switch__11363__auto__,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_11919 = [null,null,null,null,null,null,null];
(statearr_11919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__);

(statearr_11919[(1)] = (1));

return statearr_11919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1 = (function (state_11908){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_11908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e11920){if((e11920 instanceof Object)){
var ex__11367__auto__ = e11920;
var statearr_11921_12056 = state_11908;
(statearr_11921_12056[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12057 = state_11908;
state_11908 = G__12057;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = function(state_11908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1.call(this,state_11908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__;
})()
;})(__12037,switch__11363__auto__,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_11922 = f__11476__auto__.call(null);
(statearr_11922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12049);

return statearr_11922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(__12037,c__11475__auto___12049,G__11868_12038,n__7737__auto___12036,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__12058 = (__12037 + (1));
__12037 = G__12058;
continue;
} else {
}
break;
}

var c__11475__auto___12059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___12059,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___12059,jobs,results,process,async){
return (function (state_11944){
var state_val_11945 = (state_11944[(1)]);
if((state_val_11945 === (1))){
var state_11944__$1 = state_11944;
var statearr_11946_12060 = state_11944__$1;
(statearr_11946_12060[(2)] = null);

(statearr_11946_12060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (2))){
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11944__$1,(4),from);
} else {
if((state_val_11945 === (3))){
var inst_11942 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11944__$1,inst_11942);
} else {
if((state_val_11945 === (4))){
var inst_11925 = (state_11944[(7)]);
var inst_11925__$1 = (state_11944[(2)]);
var inst_11926 = (inst_11925__$1 == null);
var state_11944__$1 = (function (){var statearr_11947 = state_11944;
(statearr_11947[(7)] = inst_11925__$1);

return statearr_11947;
})();
if(cljs.core.truth_(inst_11926)){
var statearr_11948_12061 = state_11944__$1;
(statearr_11948_12061[(1)] = (5));

} else {
var statearr_11949_12062 = state_11944__$1;
(statearr_11949_12062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (5))){
var inst_11928 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11944__$1 = state_11944;
var statearr_11950_12063 = state_11944__$1;
(statearr_11950_12063[(2)] = inst_11928);

(statearr_11950_12063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (6))){
var inst_11930 = (state_11944[(8)]);
var inst_11925 = (state_11944[(7)]);
var inst_11930__$1 = cljs.core.async.chan.call(null,(1));
var inst_11931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11932 = [inst_11925,inst_11930__$1];
var inst_11933 = (new cljs.core.PersistentVector(null,2,(5),inst_11931,inst_11932,null));
var state_11944__$1 = (function (){var statearr_11951 = state_11944;
(statearr_11951[(8)] = inst_11930__$1);

return statearr_11951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11944__$1,(8),jobs,inst_11933);
} else {
if((state_val_11945 === (7))){
var inst_11940 = (state_11944[(2)]);
var state_11944__$1 = state_11944;
var statearr_11952_12064 = state_11944__$1;
(statearr_11952_12064[(2)] = inst_11940);

(statearr_11952_12064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11945 === (8))){
var inst_11930 = (state_11944[(8)]);
var inst_11935 = (state_11944[(2)]);
var state_11944__$1 = (function (){var statearr_11953 = state_11944;
(statearr_11953[(9)] = inst_11935);

return statearr_11953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11944__$1,(9),results,inst_11930);
} else {
if((state_val_11945 === (9))){
var inst_11937 = (state_11944[(2)]);
var state_11944__$1 = (function (){var statearr_11954 = state_11944;
(statearr_11954[(10)] = inst_11937);

return statearr_11954;
})();
var statearr_11955_12065 = state_11944__$1;
(statearr_11955_12065[(2)] = null);

(statearr_11955_12065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___12059,jobs,results,process,async))
;
return ((function (switch__11363__auto__,c__11475__auto___12059,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_11959 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__);

(statearr_11959[(1)] = (1));

return statearr_11959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1 = (function (state_11944){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_11944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e11960){if((e11960 instanceof Object)){
var ex__11367__auto__ = e11960;
var statearr_11961_12066 = state_11944;
(statearr_11961_12066[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12067 = state_11944;
state_11944 = G__12067;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = function(state_11944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1.call(this,state_11944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___12059,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_11962 = f__11476__auto__.call(null);
(statearr_11962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12059);

return statearr_11962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___12059,jobs,results,process,async))
);


var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto__,jobs,results,process,async){
return (function (state_12000){
var state_val_12001 = (state_12000[(1)]);
if((state_val_12001 === (7))){
var inst_11996 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
var statearr_12002_12068 = state_12000__$1;
(statearr_12002_12068[(2)] = inst_11996);

(statearr_12002_12068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (20))){
var state_12000__$1 = state_12000;
var statearr_12003_12069 = state_12000__$1;
(statearr_12003_12069[(2)] = null);

(statearr_12003_12069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (1))){
var state_12000__$1 = state_12000;
var statearr_12004_12070 = state_12000__$1;
(statearr_12004_12070[(2)] = null);

(statearr_12004_12070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (4))){
var inst_11965 = (state_12000[(7)]);
var inst_11965__$1 = (state_12000[(2)]);
var inst_11966 = (inst_11965__$1 == null);
var state_12000__$1 = (function (){var statearr_12005 = state_12000;
(statearr_12005[(7)] = inst_11965__$1);

return statearr_12005;
})();
if(cljs.core.truth_(inst_11966)){
var statearr_12006_12071 = state_12000__$1;
(statearr_12006_12071[(1)] = (5));

} else {
var statearr_12007_12072 = state_12000__$1;
(statearr_12007_12072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (15))){
var inst_11978 = (state_12000[(8)]);
var state_12000__$1 = state_12000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12000__$1,(18),to,inst_11978);
} else {
if((state_val_12001 === (21))){
var inst_11991 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
var statearr_12008_12073 = state_12000__$1;
(statearr_12008_12073[(2)] = inst_11991);

(statearr_12008_12073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (13))){
var inst_11993 = (state_12000[(2)]);
var state_12000__$1 = (function (){var statearr_12009 = state_12000;
(statearr_12009[(9)] = inst_11993);

return statearr_12009;
})();
var statearr_12010_12074 = state_12000__$1;
(statearr_12010_12074[(2)] = null);

(statearr_12010_12074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (6))){
var inst_11965 = (state_12000[(7)]);
var state_12000__$1 = state_12000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12000__$1,(11),inst_11965);
} else {
if((state_val_12001 === (17))){
var inst_11986 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
if(cljs.core.truth_(inst_11986)){
var statearr_12011_12075 = state_12000__$1;
(statearr_12011_12075[(1)] = (19));

} else {
var statearr_12012_12076 = state_12000__$1;
(statearr_12012_12076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (3))){
var inst_11998 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12000__$1,inst_11998);
} else {
if((state_val_12001 === (12))){
var inst_11975 = (state_12000[(10)]);
var state_12000__$1 = state_12000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12000__$1,(14),inst_11975);
} else {
if((state_val_12001 === (2))){
var state_12000__$1 = state_12000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12000__$1,(4),results);
} else {
if((state_val_12001 === (19))){
var state_12000__$1 = state_12000;
var statearr_12013_12077 = state_12000__$1;
(statearr_12013_12077[(2)] = null);

(statearr_12013_12077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (11))){
var inst_11975 = (state_12000[(2)]);
var state_12000__$1 = (function (){var statearr_12014 = state_12000;
(statearr_12014[(10)] = inst_11975);

return statearr_12014;
})();
var statearr_12015_12078 = state_12000__$1;
(statearr_12015_12078[(2)] = null);

(statearr_12015_12078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (9))){
var state_12000__$1 = state_12000;
var statearr_12016_12079 = state_12000__$1;
(statearr_12016_12079[(2)] = null);

(statearr_12016_12079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (5))){
var state_12000__$1 = state_12000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12017_12080 = state_12000__$1;
(statearr_12017_12080[(1)] = (8));

} else {
var statearr_12018_12081 = state_12000__$1;
(statearr_12018_12081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (14))){
var inst_11978 = (state_12000[(8)]);
var inst_11980 = (state_12000[(11)]);
var inst_11978__$1 = (state_12000[(2)]);
var inst_11979 = (inst_11978__$1 == null);
var inst_11980__$1 = cljs.core.not.call(null,inst_11979);
var state_12000__$1 = (function (){var statearr_12019 = state_12000;
(statearr_12019[(8)] = inst_11978__$1);

(statearr_12019[(11)] = inst_11980__$1);

return statearr_12019;
})();
if(inst_11980__$1){
var statearr_12020_12082 = state_12000__$1;
(statearr_12020_12082[(1)] = (15));

} else {
var statearr_12021_12083 = state_12000__$1;
(statearr_12021_12083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (16))){
var inst_11980 = (state_12000[(11)]);
var state_12000__$1 = state_12000;
var statearr_12022_12084 = state_12000__$1;
(statearr_12022_12084[(2)] = inst_11980);

(statearr_12022_12084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (10))){
var inst_11972 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
var statearr_12023_12085 = state_12000__$1;
(statearr_12023_12085[(2)] = inst_11972);

(statearr_12023_12085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (18))){
var inst_11983 = (state_12000[(2)]);
var state_12000__$1 = state_12000;
var statearr_12024_12086 = state_12000__$1;
(statearr_12024_12086[(2)] = inst_11983);

(statearr_12024_12086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (8))){
var inst_11969 = cljs.core.async.close_BANG_.call(null,to);
var state_12000__$1 = state_12000;
var statearr_12025_12087 = state_12000__$1;
(statearr_12025_12087[(2)] = inst_11969);

(statearr_12025_12087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto__,jobs,results,process,async))
;
return ((function (switch__11363__auto__,c__11475__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_12029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__);

(statearr_12029[(1)] = (1));

return statearr_12029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1 = (function (state_12000){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12030){if((e12030 instanceof Object)){
var ex__11367__auto__ = e12030;
var statearr_12031_12088 = state_12000;
(statearr_12031_12088[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12089 = state_12000;
state_12000 = G__12089;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__ = function(state_12000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1.call(this,state_12000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto__,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_12032 = f__11476__auto__.call(null);
(statearr_12032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_12032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,jobs,results,process,async))
);

return c__11475__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args12090 = [];
var len__7923__auto___12093 = arguments.length;
var i__7924__auto___12094 = (0);
while(true){
if((i__7924__auto___12094 < len__7923__auto___12093)){
args12090.push((arguments[i__7924__auto___12094]));

var G__12095 = (i__7924__auto___12094 + (1));
i__7924__auto___12094 = G__12095;
continue;
} else {
}
break;
}

var G__12092 = args12090.length;
switch (G__12092) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12090.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args12097 = [];
var len__7923__auto___12100 = arguments.length;
var i__7924__auto___12101 = (0);
while(true){
if((i__7924__auto___12101 < len__7923__auto___12100)){
args12097.push((arguments[i__7924__auto___12101]));

var G__12102 = (i__7924__auto___12101 + (1));
i__7924__auto___12101 = G__12102;
continue;
} else {
}
break;
}

var G__12099 = args12097.length;
switch (G__12099) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12097.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args12104 = [];
var len__7923__auto___12157 = arguments.length;
var i__7924__auto___12158 = (0);
while(true){
if((i__7924__auto___12158 < len__7923__auto___12157)){
args12104.push((arguments[i__7924__auto___12158]));

var G__12159 = (i__7924__auto___12158 + (1));
i__7924__auto___12158 = G__12159;
continue;
} else {
}
break;
}

var G__12106 = args12104.length;
switch (G__12106) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12104.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11475__auto___12161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___12161,tc,fc){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___12161,tc,fc){
return (function (state_12132){
var state_val_12133 = (state_12132[(1)]);
if((state_val_12133 === (7))){
var inst_12128 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12134_12162 = state_12132__$1;
(statearr_12134_12162[(2)] = inst_12128);

(statearr_12134_12162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (1))){
var state_12132__$1 = state_12132;
var statearr_12135_12163 = state_12132__$1;
(statearr_12135_12163[(2)] = null);

(statearr_12135_12163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (4))){
var inst_12109 = (state_12132[(7)]);
var inst_12109__$1 = (state_12132[(2)]);
var inst_12110 = (inst_12109__$1 == null);
var state_12132__$1 = (function (){var statearr_12136 = state_12132;
(statearr_12136[(7)] = inst_12109__$1);

return statearr_12136;
})();
if(cljs.core.truth_(inst_12110)){
var statearr_12137_12164 = state_12132__$1;
(statearr_12137_12164[(1)] = (5));

} else {
var statearr_12138_12165 = state_12132__$1;
(statearr_12138_12165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (13))){
var state_12132__$1 = state_12132;
var statearr_12139_12166 = state_12132__$1;
(statearr_12139_12166[(2)] = null);

(statearr_12139_12166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (6))){
var inst_12109 = (state_12132[(7)]);
var inst_12115 = p.call(null,inst_12109);
var state_12132__$1 = state_12132;
if(cljs.core.truth_(inst_12115)){
var statearr_12140_12167 = state_12132__$1;
(statearr_12140_12167[(1)] = (9));

} else {
var statearr_12141_12168 = state_12132__$1;
(statearr_12141_12168[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (3))){
var inst_12130 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12132__$1,inst_12130);
} else {
if((state_val_12133 === (12))){
var state_12132__$1 = state_12132;
var statearr_12142_12169 = state_12132__$1;
(statearr_12142_12169[(2)] = null);

(statearr_12142_12169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (2))){
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12132__$1,(4),ch);
} else {
if((state_val_12133 === (11))){
var inst_12109 = (state_12132[(7)]);
var inst_12119 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12132__$1,(8),inst_12119,inst_12109);
} else {
if((state_val_12133 === (9))){
var state_12132__$1 = state_12132;
var statearr_12143_12170 = state_12132__$1;
(statearr_12143_12170[(2)] = tc);

(statearr_12143_12170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (5))){
var inst_12112 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12113 = cljs.core.async.close_BANG_.call(null,fc);
var state_12132__$1 = (function (){var statearr_12144 = state_12132;
(statearr_12144[(8)] = inst_12112);

return statearr_12144;
})();
var statearr_12145_12171 = state_12132__$1;
(statearr_12145_12171[(2)] = inst_12113);

(statearr_12145_12171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (14))){
var inst_12126 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12146_12172 = state_12132__$1;
(statearr_12146_12172[(2)] = inst_12126);

(statearr_12146_12172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (10))){
var state_12132__$1 = state_12132;
var statearr_12147_12173 = state_12132__$1;
(statearr_12147_12173[(2)] = fc);

(statearr_12147_12173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (8))){
var inst_12121 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
if(cljs.core.truth_(inst_12121)){
var statearr_12148_12174 = state_12132__$1;
(statearr_12148_12174[(1)] = (12));

} else {
var statearr_12149_12175 = state_12132__$1;
(statearr_12149_12175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___12161,tc,fc))
;
return ((function (switch__11363__auto__,c__11475__auto___12161,tc,fc){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_12153 = [null,null,null,null,null,null,null,null,null];
(statearr_12153[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_12153[(1)] = (1));

return statearr_12153;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_12132){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12154){if((e12154 instanceof Object)){
var ex__11367__auto__ = e12154;
var statearr_12155_12176 = state_12132;
(statearr_12155_12176[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12177 = state_12132;
state_12132 = G__12177;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_12132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_12132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___12161,tc,fc))
})();
var state__11477__auto__ = (function (){var statearr_12156 = f__11476__auto__.call(null);
(statearr_12156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12161);

return statearr_12156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___12161,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto__){
return (function (state_12241){
var state_val_12242 = (state_12241[(1)]);
if((state_val_12242 === (7))){
var inst_12237 = (state_12241[(2)]);
var state_12241__$1 = state_12241;
var statearr_12243_12264 = state_12241__$1;
(statearr_12243_12264[(2)] = inst_12237);

(statearr_12243_12264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (1))){
var inst_12221 = init;
var state_12241__$1 = (function (){var statearr_12244 = state_12241;
(statearr_12244[(7)] = inst_12221);

return statearr_12244;
})();
var statearr_12245_12265 = state_12241__$1;
(statearr_12245_12265[(2)] = null);

(statearr_12245_12265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (4))){
var inst_12224 = (state_12241[(8)]);
var inst_12224__$1 = (state_12241[(2)]);
var inst_12225 = (inst_12224__$1 == null);
var state_12241__$1 = (function (){var statearr_12246 = state_12241;
(statearr_12246[(8)] = inst_12224__$1);

return statearr_12246;
})();
if(cljs.core.truth_(inst_12225)){
var statearr_12247_12266 = state_12241__$1;
(statearr_12247_12266[(1)] = (5));

} else {
var statearr_12248_12267 = state_12241__$1;
(statearr_12248_12267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (6))){
var inst_12221 = (state_12241[(7)]);
var inst_12224 = (state_12241[(8)]);
var inst_12228 = (state_12241[(9)]);
var inst_12228__$1 = f.call(null,inst_12221,inst_12224);
var inst_12229 = cljs.core.reduced_QMARK_.call(null,inst_12228__$1);
var state_12241__$1 = (function (){var statearr_12249 = state_12241;
(statearr_12249[(9)] = inst_12228__$1);

return statearr_12249;
})();
if(inst_12229){
var statearr_12250_12268 = state_12241__$1;
(statearr_12250_12268[(1)] = (8));

} else {
var statearr_12251_12269 = state_12241__$1;
(statearr_12251_12269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (3))){
var inst_12239 = (state_12241[(2)]);
var state_12241__$1 = state_12241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12241__$1,inst_12239);
} else {
if((state_val_12242 === (2))){
var state_12241__$1 = state_12241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12241__$1,(4),ch);
} else {
if((state_val_12242 === (9))){
var inst_12228 = (state_12241[(9)]);
var inst_12221 = inst_12228;
var state_12241__$1 = (function (){var statearr_12252 = state_12241;
(statearr_12252[(7)] = inst_12221);

return statearr_12252;
})();
var statearr_12253_12270 = state_12241__$1;
(statearr_12253_12270[(2)] = null);

(statearr_12253_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (5))){
var inst_12221 = (state_12241[(7)]);
var state_12241__$1 = state_12241;
var statearr_12254_12271 = state_12241__$1;
(statearr_12254_12271[(2)] = inst_12221);

(statearr_12254_12271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (10))){
var inst_12235 = (state_12241[(2)]);
var state_12241__$1 = state_12241;
var statearr_12255_12272 = state_12241__$1;
(statearr_12255_12272[(2)] = inst_12235);

(statearr_12255_12272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (8))){
var inst_12228 = (state_12241[(9)]);
var inst_12231 = cljs.core.deref.call(null,inst_12228);
var state_12241__$1 = state_12241;
var statearr_12256_12273 = state_12241__$1;
(statearr_12256_12273[(2)] = inst_12231);

(statearr_12256_12273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto__))
;
return ((function (switch__11363__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11364__auto____0 = (function (){
var statearr_12260 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12260[(0)] = cljs$core$async$reduce_$_state_machine__11364__auto__);

(statearr_12260[(1)] = (1));

return statearr_12260;
});
var cljs$core$async$reduce_$_state_machine__11364__auto____1 = (function (state_12241){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12261){if((e12261 instanceof Object)){
var ex__11367__auto__ = e12261;
var statearr_12262_12274 = state_12241;
(statearr_12262_12274[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12275 = state_12241;
state_12241 = G__12275;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11364__auto__ = function(state_12241){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11364__auto____1.call(this,state_12241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11364__auto____0;
cljs$core$async$reduce_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11364__auto____1;
return cljs$core$async$reduce_$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_12263 = f__11476__auto__.call(null);
(statearr_12263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_12263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,f__$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto__,f__$1){
return (function (state_12295){
var state_val_12296 = (state_12295[(1)]);
if((state_val_12296 === (1))){
var inst_12290 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12295__$1,(2),inst_12290);
} else {
if((state_val_12296 === (2))){
var inst_12292 = (state_12295[(2)]);
var inst_12293 = f__$1.call(null,inst_12292);
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12295__$1,inst_12293);
} else {
return null;
}
}
});})(c__11475__auto__,f__$1))
;
return ((function (switch__11363__auto__,c__11475__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11364__auto____0 = (function (){
var statearr_12300 = [null,null,null,null,null,null,null];
(statearr_12300[(0)] = cljs$core$async$transduce_$_state_machine__11364__auto__);

(statearr_12300[(1)] = (1));

return statearr_12300;
});
var cljs$core$async$transduce_$_state_machine__11364__auto____1 = (function (state_12295){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12301){if((e12301 instanceof Object)){
var ex__11367__auto__ = e12301;
var statearr_12302_12304 = state_12295;
(statearr_12302_12304[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12305 = state_12295;
state_12295 = G__12305;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11364__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11364__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11364__auto____0;
cljs$core$async$transduce_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11364__auto____1;
return cljs$core$async$transduce_$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto__,f__$1))
})();
var state__11477__auto__ = (function (){var statearr_12303 = f__11476__auto__.call(null);
(statearr_12303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_12303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,f__$1))
);

return c__11475__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args12306 = [];
var len__7923__auto___12358 = arguments.length;
var i__7924__auto___12359 = (0);
while(true){
if((i__7924__auto___12359 < len__7923__auto___12358)){
args12306.push((arguments[i__7924__auto___12359]));

var G__12360 = (i__7924__auto___12359 + (1));
i__7924__auto___12359 = G__12360;
continue;
} else {
}
break;
}

var G__12308 = args12306.length;
switch (G__12308) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12306.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto__){
return (function (state_12333){
var state_val_12334 = (state_12333[(1)]);
if((state_val_12334 === (7))){
var inst_12315 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12335_12362 = state_12333__$1;
(statearr_12335_12362[(2)] = inst_12315);

(statearr_12335_12362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (1))){
var inst_12309 = cljs.core.seq.call(null,coll);
var inst_12310 = inst_12309;
var state_12333__$1 = (function (){var statearr_12336 = state_12333;
(statearr_12336[(7)] = inst_12310);

return statearr_12336;
})();
var statearr_12337_12363 = state_12333__$1;
(statearr_12337_12363[(2)] = null);

(statearr_12337_12363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (4))){
var inst_12310 = (state_12333[(7)]);
var inst_12313 = cljs.core.first.call(null,inst_12310);
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12333__$1,(7),ch,inst_12313);
} else {
if((state_val_12334 === (13))){
var inst_12327 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12338_12364 = state_12333__$1;
(statearr_12338_12364[(2)] = inst_12327);

(statearr_12338_12364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (6))){
var inst_12318 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12318)){
var statearr_12339_12365 = state_12333__$1;
(statearr_12339_12365[(1)] = (8));

} else {
var statearr_12340_12366 = state_12333__$1;
(statearr_12340_12366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (3))){
var inst_12331 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12333__$1,inst_12331);
} else {
if((state_val_12334 === (12))){
var state_12333__$1 = state_12333;
var statearr_12341_12367 = state_12333__$1;
(statearr_12341_12367[(2)] = null);

(statearr_12341_12367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (2))){
var inst_12310 = (state_12333[(7)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12310)){
var statearr_12342_12368 = state_12333__$1;
(statearr_12342_12368[(1)] = (4));

} else {
var statearr_12343_12369 = state_12333__$1;
(statearr_12343_12369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (11))){
var inst_12324 = cljs.core.async.close_BANG_.call(null,ch);
var state_12333__$1 = state_12333;
var statearr_12344_12370 = state_12333__$1;
(statearr_12344_12370[(2)] = inst_12324);

(statearr_12344_12370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (9))){
var state_12333__$1 = state_12333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12345_12371 = state_12333__$1;
(statearr_12345_12371[(1)] = (11));

} else {
var statearr_12346_12372 = state_12333__$1;
(statearr_12346_12372[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (5))){
var inst_12310 = (state_12333[(7)]);
var state_12333__$1 = state_12333;
var statearr_12347_12373 = state_12333__$1;
(statearr_12347_12373[(2)] = inst_12310);

(statearr_12347_12373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (10))){
var inst_12329 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12348_12374 = state_12333__$1;
(statearr_12348_12374[(2)] = inst_12329);

(statearr_12348_12374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (8))){
var inst_12310 = (state_12333[(7)]);
var inst_12320 = cljs.core.next.call(null,inst_12310);
var inst_12310__$1 = inst_12320;
var state_12333__$1 = (function (){var statearr_12349 = state_12333;
(statearr_12349[(7)] = inst_12310__$1);

return statearr_12349;
})();
var statearr_12350_12375 = state_12333__$1;
(statearr_12350_12375[(2)] = null);

(statearr_12350_12375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto__))
;
return ((function (switch__11363__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_12354 = [null,null,null,null,null,null,null,null];
(statearr_12354[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_12354[(1)] = (1));

return statearr_12354;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_12333){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12355){if((e12355 instanceof Object)){
var ex__11367__auto__ = e12355;
var statearr_12356_12376 = state_12333;
(statearr_12356_12376[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12377 = state_12333;
state_12333 = G__12377;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_12333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_12333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_12357 = f__11476__auto__.call(null);
(statearr_12357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_12357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7482__auto__ = (((_ == null))?null:_);
var m__7483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,_);
} else {
var m__7483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12603 = (function (ch,cs,meta12604){
this.ch = ch;
this.cs = cs;
this.meta12604 = meta12604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12605,meta12604__$1){
var self__ = this;
var _12605__$1 = this;
return (new cljs.core.async.t_cljs$core$async12603(self__.ch,self__.cs,meta12604__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12605){
var self__ = this;
var _12605__$1 = this;
return self__.meta12604;
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12604","meta12604",462086862,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12603";

cljs.core.async.t_cljs$core$async12603.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async12603");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12603 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12603(ch__$1,cs__$1,meta12604){
return (new cljs.core.async.t_cljs$core$async12603(ch__$1,cs__$1,meta12604));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12603(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11475__auto___12828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___12828,cs,m,dchan,dctr,done){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___12828,cs,m,dchan,dctr,done){
return (function (state_12740){
var state_val_12741 = (state_12740[(1)]);
if((state_val_12741 === (7))){
var inst_12736 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12742_12829 = state_12740__$1;
(statearr_12742_12829[(2)] = inst_12736);

(statearr_12742_12829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (20))){
var inst_12639 = (state_12740[(7)]);
var inst_12651 = cljs.core.first.call(null,inst_12639);
var inst_12652 = cljs.core.nth.call(null,inst_12651,(0),null);
var inst_12653 = cljs.core.nth.call(null,inst_12651,(1),null);
var state_12740__$1 = (function (){var statearr_12743 = state_12740;
(statearr_12743[(8)] = inst_12652);

return statearr_12743;
})();
if(cljs.core.truth_(inst_12653)){
var statearr_12744_12830 = state_12740__$1;
(statearr_12744_12830[(1)] = (22));

} else {
var statearr_12745_12831 = state_12740__$1;
(statearr_12745_12831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (27))){
var inst_12688 = (state_12740[(9)]);
var inst_12683 = (state_12740[(10)]);
var inst_12608 = (state_12740[(11)]);
var inst_12681 = (state_12740[(12)]);
var inst_12688__$1 = cljs.core._nth.call(null,inst_12681,inst_12683);
var inst_12689 = cljs.core.async.put_BANG_.call(null,inst_12688__$1,inst_12608,done);
var state_12740__$1 = (function (){var statearr_12746 = state_12740;
(statearr_12746[(9)] = inst_12688__$1);

return statearr_12746;
})();
if(cljs.core.truth_(inst_12689)){
var statearr_12747_12832 = state_12740__$1;
(statearr_12747_12832[(1)] = (30));

} else {
var statearr_12748_12833 = state_12740__$1;
(statearr_12748_12833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (1))){
var state_12740__$1 = state_12740;
var statearr_12749_12834 = state_12740__$1;
(statearr_12749_12834[(2)] = null);

(statearr_12749_12834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (24))){
var inst_12639 = (state_12740[(7)]);
var inst_12658 = (state_12740[(2)]);
var inst_12659 = cljs.core.next.call(null,inst_12639);
var inst_12617 = inst_12659;
var inst_12618 = null;
var inst_12619 = (0);
var inst_12620 = (0);
var state_12740__$1 = (function (){var statearr_12750 = state_12740;
(statearr_12750[(13)] = inst_12619);

(statearr_12750[(14)] = inst_12617);

(statearr_12750[(15)] = inst_12618);

(statearr_12750[(16)] = inst_12658);

(statearr_12750[(17)] = inst_12620);

return statearr_12750;
})();
var statearr_12751_12835 = state_12740__$1;
(statearr_12751_12835[(2)] = null);

(statearr_12751_12835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (39))){
var state_12740__$1 = state_12740;
var statearr_12755_12836 = state_12740__$1;
(statearr_12755_12836[(2)] = null);

(statearr_12755_12836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (4))){
var inst_12608 = (state_12740[(11)]);
var inst_12608__$1 = (state_12740[(2)]);
var inst_12609 = (inst_12608__$1 == null);
var state_12740__$1 = (function (){var statearr_12756 = state_12740;
(statearr_12756[(11)] = inst_12608__$1);

return statearr_12756;
})();
if(cljs.core.truth_(inst_12609)){
var statearr_12757_12837 = state_12740__$1;
(statearr_12757_12837[(1)] = (5));

} else {
var statearr_12758_12838 = state_12740__$1;
(statearr_12758_12838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (15))){
var inst_12619 = (state_12740[(13)]);
var inst_12617 = (state_12740[(14)]);
var inst_12618 = (state_12740[(15)]);
var inst_12620 = (state_12740[(17)]);
var inst_12635 = (state_12740[(2)]);
var inst_12636 = (inst_12620 + (1));
var tmp12752 = inst_12619;
var tmp12753 = inst_12617;
var tmp12754 = inst_12618;
var inst_12617__$1 = tmp12753;
var inst_12618__$1 = tmp12754;
var inst_12619__$1 = tmp12752;
var inst_12620__$1 = inst_12636;
var state_12740__$1 = (function (){var statearr_12759 = state_12740;
(statearr_12759[(13)] = inst_12619__$1);

(statearr_12759[(14)] = inst_12617__$1);

(statearr_12759[(18)] = inst_12635);

(statearr_12759[(15)] = inst_12618__$1);

(statearr_12759[(17)] = inst_12620__$1);

return statearr_12759;
})();
var statearr_12760_12839 = state_12740__$1;
(statearr_12760_12839[(2)] = null);

(statearr_12760_12839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (21))){
var inst_12662 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12764_12840 = state_12740__$1;
(statearr_12764_12840[(2)] = inst_12662);

(statearr_12764_12840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (31))){
var inst_12688 = (state_12740[(9)]);
var inst_12692 = done.call(null,null);
var inst_12693 = cljs.core.async.untap_STAR_.call(null,m,inst_12688);
var state_12740__$1 = (function (){var statearr_12765 = state_12740;
(statearr_12765[(19)] = inst_12692);

return statearr_12765;
})();
var statearr_12766_12841 = state_12740__$1;
(statearr_12766_12841[(2)] = inst_12693);

(statearr_12766_12841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (32))){
var inst_12683 = (state_12740[(10)]);
var inst_12682 = (state_12740[(20)]);
var inst_12681 = (state_12740[(12)]);
var inst_12680 = (state_12740[(21)]);
var inst_12695 = (state_12740[(2)]);
var inst_12696 = (inst_12683 + (1));
var tmp12761 = inst_12682;
var tmp12762 = inst_12681;
var tmp12763 = inst_12680;
var inst_12680__$1 = tmp12763;
var inst_12681__$1 = tmp12762;
var inst_12682__$1 = tmp12761;
var inst_12683__$1 = inst_12696;
var state_12740__$1 = (function (){var statearr_12767 = state_12740;
(statearr_12767[(22)] = inst_12695);

(statearr_12767[(10)] = inst_12683__$1);

(statearr_12767[(20)] = inst_12682__$1);

(statearr_12767[(12)] = inst_12681__$1);

(statearr_12767[(21)] = inst_12680__$1);

return statearr_12767;
})();
var statearr_12768_12842 = state_12740__$1;
(statearr_12768_12842[(2)] = null);

(statearr_12768_12842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (40))){
var inst_12708 = (state_12740[(23)]);
var inst_12712 = done.call(null,null);
var inst_12713 = cljs.core.async.untap_STAR_.call(null,m,inst_12708);
var state_12740__$1 = (function (){var statearr_12769 = state_12740;
(statearr_12769[(24)] = inst_12712);

return statearr_12769;
})();
var statearr_12770_12843 = state_12740__$1;
(statearr_12770_12843[(2)] = inst_12713);

(statearr_12770_12843[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (33))){
var inst_12699 = (state_12740[(25)]);
var inst_12701 = cljs.core.chunked_seq_QMARK_.call(null,inst_12699);
var state_12740__$1 = state_12740;
if(inst_12701){
var statearr_12771_12844 = state_12740__$1;
(statearr_12771_12844[(1)] = (36));

} else {
var statearr_12772_12845 = state_12740__$1;
(statearr_12772_12845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (13))){
var inst_12629 = (state_12740[(26)]);
var inst_12632 = cljs.core.async.close_BANG_.call(null,inst_12629);
var state_12740__$1 = state_12740;
var statearr_12773_12846 = state_12740__$1;
(statearr_12773_12846[(2)] = inst_12632);

(statearr_12773_12846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (22))){
var inst_12652 = (state_12740[(8)]);
var inst_12655 = cljs.core.async.close_BANG_.call(null,inst_12652);
var state_12740__$1 = state_12740;
var statearr_12774_12847 = state_12740__$1;
(statearr_12774_12847[(2)] = inst_12655);

(statearr_12774_12847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (36))){
var inst_12699 = (state_12740[(25)]);
var inst_12703 = cljs.core.chunk_first.call(null,inst_12699);
var inst_12704 = cljs.core.chunk_rest.call(null,inst_12699);
var inst_12705 = cljs.core.count.call(null,inst_12703);
var inst_12680 = inst_12704;
var inst_12681 = inst_12703;
var inst_12682 = inst_12705;
var inst_12683 = (0);
var state_12740__$1 = (function (){var statearr_12775 = state_12740;
(statearr_12775[(10)] = inst_12683);

(statearr_12775[(20)] = inst_12682);

(statearr_12775[(12)] = inst_12681);

(statearr_12775[(21)] = inst_12680);

return statearr_12775;
})();
var statearr_12776_12848 = state_12740__$1;
(statearr_12776_12848[(2)] = null);

(statearr_12776_12848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (41))){
var inst_12699 = (state_12740[(25)]);
var inst_12715 = (state_12740[(2)]);
var inst_12716 = cljs.core.next.call(null,inst_12699);
var inst_12680 = inst_12716;
var inst_12681 = null;
var inst_12682 = (0);
var inst_12683 = (0);
var state_12740__$1 = (function (){var statearr_12777 = state_12740;
(statearr_12777[(10)] = inst_12683);

(statearr_12777[(20)] = inst_12682);

(statearr_12777[(27)] = inst_12715);

(statearr_12777[(12)] = inst_12681);

(statearr_12777[(21)] = inst_12680);

return statearr_12777;
})();
var statearr_12778_12849 = state_12740__$1;
(statearr_12778_12849[(2)] = null);

(statearr_12778_12849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (43))){
var state_12740__$1 = state_12740;
var statearr_12779_12850 = state_12740__$1;
(statearr_12779_12850[(2)] = null);

(statearr_12779_12850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (29))){
var inst_12724 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12780_12851 = state_12740__$1;
(statearr_12780_12851[(2)] = inst_12724);

(statearr_12780_12851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (44))){
var inst_12733 = (state_12740[(2)]);
var state_12740__$1 = (function (){var statearr_12781 = state_12740;
(statearr_12781[(28)] = inst_12733);

return statearr_12781;
})();
var statearr_12782_12852 = state_12740__$1;
(statearr_12782_12852[(2)] = null);

(statearr_12782_12852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (6))){
var inst_12672 = (state_12740[(29)]);
var inst_12671 = cljs.core.deref.call(null,cs);
var inst_12672__$1 = cljs.core.keys.call(null,inst_12671);
var inst_12673 = cljs.core.count.call(null,inst_12672__$1);
var inst_12674 = cljs.core.reset_BANG_.call(null,dctr,inst_12673);
var inst_12679 = cljs.core.seq.call(null,inst_12672__$1);
var inst_12680 = inst_12679;
var inst_12681 = null;
var inst_12682 = (0);
var inst_12683 = (0);
var state_12740__$1 = (function (){var statearr_12783 = state_12740;
(statearr_12783[(10)] = inst_12683);

(statearr_12783[(29)] = inst_12672__$1);

(statearr_12783[(20)] = inst_12682);

(statearr_12783[(30)] = inst_12674);

(statearr_12783[(12)] = inst_12681);

(statearr_12783[(21)] = inst_12680);

return statearr_12783;
})();
var statearr_12784_12853 = state_12740__$1;
(statearr_12784_12853[(2)] = null);

(statearr_12784_12853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (28))){
var inst_12699 = (state_12740[(25)]);
var inst_12680 = (state_12740[(21)]);
var inst_12699__$1 = cljs.core.seq.call(null,inst_12680);
var state_12740__$1 = (function (){var statearr_12785 = state_12740;
(statearr_12785[(25)] = inst_12699__$1);

return statearr_12785;
})();
if(inst_12699__$1){
var statearr_12786_12854 = state_12740__$1;
(statearr_12786_12854[(1)] = (33));

} else {
var statearr_12787_12855 = state_12740__$1;
(statearr_12787_12855[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (25))){
var inst_12683 = (state_12740[(10)]);
var inst_12682 = (state_12740[(20)]);
var inst_12685 = (inst_12683 < inst_12682);
var inst_12686 = inst_12685;
var state_12740__$1 = state_12740;
if(cljs.core.truth_(inst_12686)){
var statearr_12788_12856 = state_12740__$1;
(statearr_12788_12856[(1)] = (27));

} else {
var statearr_12789_12857 = state_12740__$1;
(statearr_12789_12857[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (34))){
var state_12740__$1 = state_12740;
var statearr_12790_12858 = state_12740__$1;
(statearr_12790_12858[(2)] = null);

(statearr_12790_12858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (17))){
var state_12740__$1 = state_12740;
var statearr_12791_12859 = state_12740__$1;
(statearr_12791_12859[(2)] = null);

(statearr_12791_12859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (3))){
var inst_12738 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12740__$1,inst_12738);
} else {
if((state_val_12741 === (12))){
var inst_12667 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12792_12860 = state_12740__$1;
(statearr_12792_12860[(2)] = inst_12667);

(statearr_12792_12860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (2))){
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12740__$1,(4),ch);
} else {
if((state_val_12741 === (23))){
var state_12740__$1 = state_12740;
var statearr_12793_12861 = state_12740__$1;
(statearr_12793_12861[(2)] = null);

(statearr_12793_12861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (35))){
var inst_12722 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12794_12862 = state_12740__$1;
(statearr_12794_12862[(2)] = inst_12722);

(statearr_12794_12862[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (19))){
var inst_12639 = (state_12740[(7)]);
var inst_12643 = cljs.core.chunk_first.call(null,inst_12639);
var inst_12644 = cljs.core.chunk_rest.call(null,inst_12639);
var inst_12645 = cljs.core.count.call(null,inst_12643);
var inst_12617 = inst_12644;
var inst_12618 = inst_12643;
var inst_12619 = inst_12645;
var inst_12620 = (0);
var state_12740__$1 = (function (){var statearr_12795 = state_12740;
(statearr_12795[(13)] = inst_12619);

(statearr_12795[(14)] = inst_12617);

(statearr_12795[(15)] = inst_12618);

(statearr_12795[(17)] = inst_12620);

return statearr_12795;
})();
var statearr_12796_12863 = state_12740__$1;
(statearr_12796_12863[(2)] = null);

(statearr_12796_12863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (11))){
var inst_12617 = (state_12740[(14)]);
var inst_12639 = (state_12740[(7)]);
var inst_12639__$1 = cljs.core.seq.call(null,inst_12617);
var state_12740__$1 = (function (){var statearr_12797 = state_12740;
(statearr_12797[(7)] = inst_12639__$1);

return statearr_12797;
})();
if(inst_12639__$1){
var statearr_12798_12864 = state_12740__$1;
(statearr_12798_12864[(1)] = (16));

} else {
var statearr_12799_12865 = state_12740__$1;
(statearr_12799_12865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (9))){
var inst_12669 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12800_12866 = state_12740__$1;
(statearr_12800_12866[(2)] = inst_12669);

(statearr_12800_12866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (5))){
var inst_12615 = cljs.core.deref.call(null,cs);
var inst_12616 = cljs.core.seq.call(null,inst_12615);
var inst_12617 = inst_12616;
var inst_12618 = null;
var inst_12619 = (0);
var inst_12620 = (0);
var state_12740__$1 = (function (){var statearr_12801 = state_12740;
(statearr_12801[(13)] = inst_12619);

(statearr_12801[(14)] = inst_12617);

(statearr_12801[(15)] = inst_12618);

(statearr_12801[(17)] = inst_12620);

return statearr_12801;
})();
var statearr_12802_12867 = state_12740__$1;
(statearr_12802_12867[(2)] = null);

(statearr_12802_12867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (14))){
var state_12740__$1 = state_12740;
var statearr_12803_12868 = state_12740__$1;
(statearr_12803_12868[(2)] = null);

(statearr_12803_12868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (45))){
var inst_12730 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12804_12869 = state_12740__$1;
(statearr_12804_12869[(2)] = inst_12730);

(statearr_12804_12869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (26))){
var inst_12672 = (state_12740[(29)]);
var inst_12726 = (state_12740[(2)]);
var inst_12727 = cljs.core.seq.call(null,inst_12672);
var state_12740__$1 = (function (){var statearr_12805 = state_12740;
(statearr_12805[(31)] = inst_12726);

return statearr_12805;
})();
if(inst_12727){
var statearr_12806_12870 = state_12740__$1;
(statearr_12806_12870[(1)] = (42));

} else {
var statearr_12807_12871 = state_12740__$1;
(statearr_12807_12871[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (16))){
var inst_12639 = (state_12740[(7)]);
var inst_12641 = cljs.core.chunked_seq_QMARK_.call(null,inst_12639);
var state_12740__$1 = state_12740;
if(inst_12641){
var statearr_12808_12872 = state_12740__$1;
(statearr_12808_12872[(1)] = (19));

} else {
var statearr_12809_12873 = state_12740__$1;
(statearr_12809_12873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (38))){
var inst_12719 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12810_12874 = state_12740__$1;
(statearr_12810_12874[(2)] = inst_12719);

(statearr_12810_12874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (30))){
var state_12740__$1 = state_12740;
var statearr_12811_12875 = state_12740__$1;
(statearr_12811_12875[(2)] = null);

(statearr_12811_12875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (10))){
var inst_12618 = (state_12740[(15)]);
var inst_12620 = (state_12740[(17)]);
var inst_12628 = cljs.core._nth.call(null,inst_12618,inst_12620);
var inst_12629 = cljs.core.nth.call(null,inst_12628,(0),null);
var inst_12630 = cljs.core.nth.call(null,inst_12628,(1),null);
var state_12740__$1 = (function (){var statearr_12812 = state_12740;
(statearr_12812[(26)] = inst_12629);

return statearr_12812;
})();
if(cljs.core.truth_(inst_12630)){
var statearr_12813_12876 = state_12740__$1;
(statearr_12813_12876[(1)] = (13));

} else {
var statearr_12814_12877 = state_12740__$1;
(statearr_12814_12877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (18))){
var inst_12665 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12815_12878 = state_12740__$1;
(statearr_12815_12878[(2)] = inst_12665);

(statearr_12815_12878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (42))){
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12740__$1,(45),dchan);
} else {
if((state_val_12741 === (37))){
var inst_12608 = (state_12740[(11)]);
var inst_12699 = (state_12740[(25)]);
var inst_12708 = (state_12740[(23)]);
var inst_12708__$1 = cljs.core.first.call(null,inst_12699);
var inst_12709 = cljs.core.async.put_BANG_.call(null,inst_12708__$1,inst_12608,done);
var state_12740__$1 = (function (){var statearr_12816 = state_12740;
(statearr_12816[(23)] = inst_12708__$1);

return statearr_12816;
})();
if(cljs.core.truth_(inst_12709)){
var statearr_12817_12879 = state_12740__$1;
(statearr_12817_12879[(1)] = (39));

} else {
var statearr_12818_12880 = state_12740__$1;
(statearr_12818_12880[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (8))){
var inst_12619 = (state_12740[(13)]);
var inst_12620 = (state_12740[(17)]);
var inst_12622 = (inst_12620 < inst_12619);
var inst_12623 = inst_12622;
var state_12740__$1 = state_12740;
if(cljs.core.truth_(inst_12623)){
var statearr_12819_12881 = state_12740__$1;
(statearr_12819_12881[(1)] = (10));

} else {
var statearr_12820_12882 = state_12740__$1;
(statearr_12820_12882[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___12828,cs,m,dchan,dctr,done))
;
return ((function (switch__11363__auto__,c__11475__auto___12828,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11364__auto__ = null;
var cljs$core$async$mult_$_state_machine__11364__auto____0 = (function (){
var statearr_12824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12824[(0)] = cljs$core$async$mult_$_state_machine__11364__auto__);

(statearr_12824[(1)] = (1));

return statearr_12824;
});
var cljs$core$async$mult_$_state_machine__11364__auto____1 = (function (state_12740){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_12740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e12825){if((e12825 instanceof Object)){
var ex__11367__auto__ = e12825;
var statearr_12826_12883 = state_12740;
(statearr_12826_12883[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12884 = state_12740;
state_12740 = G__12884;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11364__auto__ = function(state_12740){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11364__auto____1.call(this,state_12740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11364__auto____0;
cljs$core$async$mult_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11364__auto____1;
return cljs$core$async$mult_$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___12828,cs,m,dchan,dctr,done))
})();
var state__11477__auto__ = (function (){var statearr_12827 = f__11476__auto__.call(null);
(statearr_12827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___12828);

return statearr_12827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___12828,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12885 = [];
var len__7923__auto___12888 = arguments.length;
var i__7924__auto___12889 = (0);
while(true){
if((i__7924__auto___12889 < len__7923__auto___12888)){
args12885.push((arguments[i__7924__auto___12889]));

var G__12890 = (i__7924__auto___12889 + (1));
i__7924__auto___12889 = G__12890;
continue;
} else {
}
break;
}

var G__12887 = args12885.length;
switch (G__12887) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12885.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,state_map);
} else {
var m__7483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,mode);
} else {
var m__7483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12902 = arguments.length;
var i__7924__auto___12903 = (0);
while(true){
if((i__7924__auto___12903 < len__7923__auto___12902)){
args__7930__auto__.push((arguments[i__7924__auto___12903]));

var G__12904 = (i__7924__auto___12903 + (1));
i__7924__auto___12903 = G__12904;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((3) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12896){
var map__12897 = p__12896;
var map__12897__$1 = ((((!((map__12897 == null)))?((((map__12897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897):map__12897);
var opts = map__12897__$1;
var statearr_12899_12905 = state;
(statearr_12899_12905[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12897,map__12897__$1,opts){
return (function (val){
var statearr_12900_12906 = state;
(statearr_12900_12906[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12897,map__12897__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12901_12907 = state;
(statearr_12901_12907[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12892){
var G__12893 = cljs.core.first.call(null,seq12892);
var seq12892__$1 = cljs.core.next.call(null,seq12892);
var G__12894 = cljs.core.first.call(null,seq12892__$1);
var seq12892__$2 = cljs.core.next.call(null,seq12892__$1);
var G__12895 = cljs.core.first.call(null,seq12892__$2);
var seq12892__$3 = cljs.core.next.call(null,seq12892__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12893,G__12894,G__12895,seq12892__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13075 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13076){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13076 = meta13076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13077,meta13076__$1){
var self__ = this;
var _13077__$1 = this;
return (new cljs.core.async.t_cljs$core$async13075(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13076__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13077){
var self__ = this;
var _13077__$1 = this;
return self__.meta13076;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13076","meta13076",-1747850821,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13075";

cljs.core.async.t_cljs$core$async13075.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13075");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13075 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13075(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13076){
return (new cljs.core.async.t_cljs$core$async13075(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13076));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13075(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11475__auto___13242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13179){
var state_val_13180 = (state_13179[(1)]);
if((state_val_13180 === (7))){
var inst_13094 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13181_13243 = state_13179__$1;
(statearr_13181_13243[(2)] = inst_13094);

(statearr_13181_13243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (20))){
var inst_13106 = (state_13179[(7)]);
var state_13179__$1 = state_13179;
var statearr_13182_13244 = state_13179__$1;
(statearr_13182_13244[(2)] = inst_13106);

(statearr_13182_13244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (27))){
var state_13179__$1 = state_13179;
var statearr_13183_13245 = state_13179__$1;
(statearr_13183_13245[(2)] = null);

(statearr_13183_13245[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (1))){
var inst_13081 = (state_13179[(8)]);
var inst_13081__$1 = calc_state.call(null);
var inst_13083 = (inst_13081__$1 == null);
var inst_13084 = cljs.core.not.call(null,inst_13083);
var state_13179__$1 = (function (){var statearr_13184 = state_13179;
(statearr_13184[(8)] = inst_13081__$1);

return statearr_13184;
})();
if(inst_13084){
var statearr_13185_13246 = state_13179__$1;
(statearr_13185_13246[(1)] = (2));

} else {
var statearr_13186_13247 = state_13179__$1;
(statearr_13186_13247[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (24))){
var inst_13139 = (state_13179[(9)]);
var inst_13153 = (state_13179[(10)]);
var inst_13130 = (state_13179[(11)]);
var inst_13153__$1 = inst_13130.call(null,inst_13139);
var state_13179__$1 = (function (){var statearr_13187 = state_13179;
(statearr_13187[(10)] = inst_13153__$1);

return statearr_13187;
})();
if(cljs.core.truth_(inst_13153__$1)){
var statearr_13188_13248 = state_13179__$1;
(statearr_13188_13248[(1)] = (29));

} else {
var statearr_13189_13249 = state_13179__$1;
(statearr_13189_13249[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (4))){
var inst_13097 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13097)){
var statearr_13190_13250 = state_13179__$1;
(statearr_13190_13250[(1)] = (8));

} else {
var statearr_13191_13251 = state_13179__$1;
(statearr_13191_13251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (15))){
var inst_13124 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13124)){
var statearr_13192_13252 = state_13179__$1;
(statearr_13192_13252[(1)] = (19));

} else {
var statearr_13193_13253 = state_13179__$1;
(statearr_13193_13253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (21))){
var inst_13129 = (state_13179[(12)]);
var inst_13129__$1 = (state_13179[(2)]);
var inst_13130 = cljs.core.get.call(null,inst_13129__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13131 = cljs.core.get.call(null,inst_13129__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13132 = cljs.core.get.call(null,inst_13129__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13179__$1 = (function (){var statearr_13194 = state_13179;
(statearr_13194[(13)] = inst_13131);

(statearr_13194[(11)] = inst_13130);

(statearr_13194[(12)] = inst_13129__$1);

return statearr_13194;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13179__$1,(22),inst_13132);
} else {
if((state_val_13180 === (31))){
var inst_13161 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13161)){
var statearr_13195_13254 = state_13179__$1;
(statearr_13195_13254[(1)] = (32));

} else {
var statearr_13196_13255 = state_13179__$1;
(statearr_13196_13255[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (32))){
var inst_13138 = (state_13179[(14)]);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13179__$1,(35),out,inst_13138);
} else {
if((state_val_13180 === (33))){
var inst_13129 = (state_13179[(12)]);
var inst_13106 = inst_13129;
var state_13179__$1 = (function (){var statearr_13197 = state_13179;
(statearr_13197[(7)] = inst_13106);

return statearr_13197;
})();
var statearr_13198_13256 = state_13179__$1;
(statearr_13198_13256[(2)] = null);

(statearr_13198_13256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (13))){
var inst_13106 = (state_13179[(7)]);
var inst_13113 = inst_13106.cljs$lang$protocol_mask$partition0$;
var inst_13114 = (inst_13113 & (64));
var inst_13115 = inst_13106.cljs$core$ISeq$;
var inst_13116 = (cljs.core.PROTOCOL_SENTINEL === inst_13115);
var inst_13117 = (inst_13114) || (inst_13116);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13117)){
var statearr_13199_13257 = state_13179__$1;
(statearr_13199_13257[(1)] = (16));

} else {
var statearr_13200_13258 = state_13179__$1;
(statearr_13200_13258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (22))){
var inst_13139 = (state_13179[(9)]);
var inst_13138 = (state_13179[(14)]);
var inst_13137 = (state_13179[(2)]);
var inst_13138__$1 = cljs.core.nth.call(null,inst_13137,(0),null);
var inst_13139__$1 = cljs.core.nth.call(null,inst_13137,(1),null);
var inst_13140 = (inst_13138__$1 == null);
var inst_13141 = cljs.core._EQ_.call(null,inst_13139__$1,change);
var inst_13142 = (inst_13140) || (inst_13141);
var state_13179__$1 = (function (){var statearr_13201 = state_13179;
(statearr_13201[(9)] = inst_13139__$1);

(statearr_13201[(14)] = inst_13138__$1);

return statearr_13201;
})();
if(cljs.core.truth_(inst_13142)){
var statearr_13202_13259 = state_13179__$1;
(statearr_13202_13259[(1)] = (23));

} else {
var statearr_13203_13260 = state_13179__$1;
(statearr_13203_13260[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (36))){
var inst_13129 = (state_13179[(12)]);
var inst_13106 = inst_13129;
var state_13179__$1 = (function (){var statearr_13204 = state_13179;
(statearr_13204[(7)] = inst_13106);

return statearr_13204;
})();
var statearr_13205_13261 = state_13179__$1;
(statearr_13205_13261[(2)] = null);

(statearr_13205_13261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (29))){
var inst_13153 = (state_13179[(10)]);
var state_13179__$1 = state_13179;
var statearr_13206_13262 = state_13179__$1;
(statearr_13206_13262[(2)] = inst_13153);

(statearr_13206_13262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (6))){
var state_13179__$1 = state_13179;
var statearr_13207_13263 = state_13179__$1;
(statearr_13207_13263[(2)] = false);

(statearr_13207_13263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (28))){
var inst_13149 = (state_13179[(2)]);
var inst_13150 = calc_state.call(null);
var inst_13106 = inst_13150;
var state_13179__$1 = (function (){var statearr_13208 = state_13179;
(statearr_13208[(7)] = inst_13106);

(statearr_13208[(15)] = inst_13149);

return statearr_13208;
})();
var statearr_13209_13264 = state_13179__$1;
(statearr_13209_13264[(2)] = null);

(statearr_13209_13264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (25))){
var inst_13175 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13210_13265 = state_13179__$1;
(statearr_13210_13265[(2)] = inst_13175);

(statearr_13210_13265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (34))){
var inst_13173 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13211_13266 = state_13179__$1;
(statearr_13211_13266[(2)] = inst_13173);

(statearr_13211_13266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (17))){
var state_13179__$1 = state_13179;
var statearr_13212_13267 = state_13179__$1;
(statearr_13212_13267[(2)] = false);

(statearr_13212_13267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (3))){
var state_13179__$1 = state_13179;
var statearr_13213_13268 = state_13179__$1;
(statearr_13213_13268[(2)] = false);

(statearr_13213_13268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (12))){
var inst_13177 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13179__$1,inst_13177);
} else {
if((state_val_13180 === (2))){
var inst_13081 = (state_13179[(8)]);
var inst_13086 = inst_13081.cljs$lang$protocol_mask$partition0$;
var inst_13087 = (inst_13086 & (64));
var inst_13088 = inst_13081.cljs$core$ISeq$;
var inst_13089 = (cljs.core.PROTOCOL_SENTINEL === inst_13088);
var inst_13090 = (inst_13087) || (inst_13089);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13090)){
var statearr_13214_13269 = state_13179__$1;
(statearr_13214_13269[(1)] = (5));

} else {
var statearr_13215_13270 = state_13179__$1;
(statearr_13215_13270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (23))){
var inst_13138 = (state_13179[(14)]);
var inst_13144 = (inst_13138 == null);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13144)){
var statearr_13216_13271 = state_13179__$1;
(statearr_13216_13271[(1)] = (26));

} else {
var statearr_13217_13272 = state_13179__$1;
(statearr_13217_13272[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (35))){
var inst_13164 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13164)){
var statearr_13218_13273 = state_13179__$1;
(statearr_13218_13273[(1)] = (36));

} else {
var statearr_13219_13274 = state_13179__$1;
(statearr_13219_13274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (19))){
var inst_13106 = (state_13179[(7)]);
var inst_13126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13106);
var state_13179__$1 = state_13179;
var statearr_13220_13275 = state_13179__$1;
(statearr_13220_13275[(2)] = inst_13126);

(statearr_13220_13275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (11))){
var inst_13106 = (state_13179[(7)]);
var inst_13110 = (inst_13106 == null);
var inst_13111 = cljs.core.not.call(null,inst_13110);
var state_13179__$1 = state_13179;
if(inst_13111){
var statearr_13221_13276 = state_13179__$1;
(statearr_13221_13276[(1)] = (13));

} else {
var statearr_13222_13277 = state_13179__$1;
(statearr_13222_13277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (9))){
var inst_13081 = (state_13179[(8)]);
var state_13179__$1 = state_13179;
var statearr_13223_13278 = state_13179__$1;
(statearr_13223_13278[(2)] = inst_13081);

(statearr_13223_13278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (5))){
var state_13179__$1 = state_13179;
var statearr_13224_13279 = state_13179__$1;
(statearr_13224_13279[(2)] = true);

(statearr_13224_13279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (14))){
var state_13179__$1 = state_13179;
var statearr_13225_13280 = state_13179__$1;
(statearr_13225_13280[(2)] = false);

(statearr_13225_13280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (26))){
var inst_13139 = (state_13179[(9)]);
var inst_13146 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13139);
var state_13179__$1 = state_13179;
var statearr_13226_13281 = state_13179__$1;
(statearr_13226_13281[(2)] = inst_13146);

(statearr_13226_13281[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (16))){
var state_13179__$1 = state_13179;
var statearr_13227_13282 = state_13179__$1;
(statearr_13227_13282[(2)] = true);

(statearr_13227_13282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (38))){
var inst_13169 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13228_13283 = state_13179__$1;
(statearr_13228_13283[(2)] = inst_13169);

(statearr_13228_13283[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (30))){
var inst_13131 = (state_13179[(13)]);
var inst_13139 = (state_13179[(9)]);
var inst_13130 = (state_13179[(11)]);
var inst_13156 = cljs.core.empty_QMARK_.call(null,inst_13130);
var inst_13157 = inst_13131.call(null,inst_13139);
var inst_13158 = cljs.core.not.call(null,inst_13157);
var inst_13159 = (inst_13156) && (inst_13158);
var state_13179__$1 = state_13179;
var statearr_13229_13284 = state_13179__$1;
(statearr_13229_13284[(2)] = inst_13159);

(statearr_13229_13284[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (10))){
var inst_13081 = (state_13179[(8)]);
var inst_13102 = (state_13179[(2)]);
var inst_13103 = cljs.core.get.call(null,inst_13102,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13104 = cljs.core.get.call(null,inst_13102,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13105 = cljs.core.get.call(null,inst_13102,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13106 = inst_13081;
var state_13179__$1 = (function (){var statearr_13230 = state_13179;
(statearr_13230[(16)] = inst_13103);

(statearr_13230[(7)] = inst_13106);

(statearr_13230[(17)] = inst_13104);

(statearr_13230[(18)] = inst_13105);

return statearr_13230;
})();
var statearr_13231_13285 = state_13179__$1;
(statearr_13231_13285[(2)] = null);

(statearr_13231_13285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (18))){
var inst_13121 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13232_13286 = state_13179__$1;
(statearr_13232_13286[(2)] = inst_13121);

(statearr_13232_13286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (37))){
var state_13179__$1 = state_13179;
var statearr_13233_13287 = state_13179__$1;
(statearr_13233_13287[(2)] = null);

(statearr_13233_13287[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (8))){
var inst_13081 = (state_13179[(8)]);
var inst_13099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13081);
var state_13179__$1 = state_13179;
var statearr_13234_13288 = state_13179__$1;
(statearr_13234_13288[(2)] = inst_13099);

(statearr_13234_13288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11363__auto__,c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11364__auto__ = null;
var cljs$core$async$mix_$_state_machine__11364__auto____0 = (function (){
var statearr_13238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13238[(0)] = cljs$core$async$mix_$_state_machine__11364__auto__);

(statearr_13238[(1)] = (1));

return statearr_13238;
});
var cljs$core$async$mix_$_state_machine__11364__auto____1 = (function (state_13179){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13239){if((e13239 instanceof Object)){
var ex__11367__auto__ = e13239;
var statearr_13240_13289 = state_13179;
(statearr_13240_13289[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13290 = state_13179;
state_13179 = G__13290;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11364__auto__ = function(state_13179){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11364__auto____1.call(this,state_13179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11364__auto____0;
cljs$core$async$mix_$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11364__auto____1;
return cljs$core$async$mix_$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11477__auto__ = (function (){var statearr_13241 = f__11476__auto__.call(null);
(statearr_13241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13242);

return statearr_13241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13291 = [];
var len__7923__auto___13294 = arguments.length;
var i__7924__auto___13295 = (0);
while(true){
if((i__7924__auto___13295 < len__7923__auto___13294)){
args13291.push((arguments[i__7924__auto___13295]));

var G__13296 = (i__7924__auto___13295 + (1));
i__7924__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var G__13293 = args13291.length;
switch (G__13293) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13291.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args13299 = [];
var len__7923__auto___13424 = arguments.length;
var i__7924__auto___13425 = (0);
while(true){
if((i__7924__auto___13425 < len__7923__auto___13424)){
args13299.push((arguments[i__7924__auto___13425]));

var G__13426 = (i__7924__auto___13425 + (1));
i__7924__auto___13425 = G__13426;
continue;
} else {
}
break;
}

var G__13301 = args13299.length;
switch (G__13301) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13299.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6814__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6814__auto__,mults){
return (function (p1__13298_SHARP_){
if(cljs.core.truth_(p1__13298_SHARP_.call(null,topic))){
return p1__13298_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13298_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6814__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13302 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13303){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13303 = meta13303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13304,meta13303__$1){
var self__ = this;
var _13304__$1 = this;
return (new cljs.core.async.t_cljs$core$async13302(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13303__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13304){
var self__ = this;
var _13304__$1 = this;
return self__.meta13303;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13303","meta13303",1690873861,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13302";

cljs.core.async.t_cljs$core$async13302.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13302");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13302 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13302(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13303){
return (new cljs.core.async.t_cljs$core$async13302(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13303));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13302(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11475__auto___13428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13428,mults,ensure_mult,p){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13428,mults,ensure_mult,p){
return (function (state_13376){
var state_val_13377 = (state_13376[(1)]);
if((state_val_13377 === (7))){
var inst_13372 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13378_13429 = state_13376__$1;
(statearr_13378_13429[(2)] = inst_13372);

(statearr_13378_13429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (20))){
var state_13376__$1 = state_13376;
var statearr_13379_13430 = state_13376__$1;
(statearr_13379_13430[(2)] = null);

(statearr_13379_13430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (1))){
var state_13376__$1 = state_13376;
var statearr_13380_13431 = state_13376__$1;
(statearr_13380_13431[(2)] = null);

(statearr_13380_13431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (24))){
var inst_13355 = (state_13376[(7)]);
var inst_13364 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13355);
var state_13376__$1 = state_13376;
var statearr_13381_13432 = state_13376__$1;
(statearr_13381_13432[(2)] = inst_13364);

(statearr_13381_13432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (4))){
var inst_13307 = (state_13376[(8)]);
var inst_13307__$1 = (state_13376[(2)]);
var inst_13308 = (inst_13307__$1 == null);
var state_13376__$1 = (function (){var statearr_13382 = state_13376;
(statearr_13382[(8)] = inst_13307__$1);

return statearr_13382;
})();
if(cljs.core.truth_(inst_13308)){
var statearr_13383_13433 = state_13376__$1;
(statearr_13383_13433[(1)] = (5));

} else {
var statearr_13384_13434 = state_13376__$1;
(statearr_13384_13434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (15))){
var inst_13349 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13385_13435 = state_13376__$1;
(statearr_13385_13435[(2)] = inst_13349);

(statearr_13385_13435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (21))){
var inst_13369 = (state_13376[(2)]);
var state_13376__$1 = (function (){var statearr_13386 = state_13376;
(statearr_13386[(9)] = inst_13369);

return statearr_13386;
})();
var statearr_13387_13436 = state_13376__$1;
(statearr_13387_13436[(2)] = null);

(statearr_13387_13436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (13))){
var inst_13331 = (state_13376[(10)]);
var inst_13333 = cljs.core.chunked_seq_QMARK_.call(null,inst_13331);
var state_13376__$1 = state_13376;
if(inst_13333){
var statearr_13388_13437 = state_13376__$1;
(statearr_13388_13437[(1)] = (16));

} else {
var statearr_13389_13438 = state_13376__$1;
(statearr_13389_13438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (22))){
var inst_13361 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13361)){
var statearr_13390_13439 = state_13376__$1;
(statearr_13390_13439[(1)] = (23));

} else {
var statearr_13391_13440 = state_13376__$1;
(statearr_13391_13440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (6))){
var inst_13307 = (state_13376[(8)]);
var inst_13357 = (state_13376[(11)]);
var inst_13355 = (state_13376[(7)]);
var inst_13355__$1 = topic_fn.call(null,inst_13307);
var inst_13356 = cljs.core.deref.call(null,mults);
var inst_13357__$1 = cljs.core.get.call(null,inst_13356,inst_13355__$1);
var state_13376__$1 = (function (){var statearr_13392 = state_13376;
(statearr_13392[(11)] = inst_13357__$1);

(statearr_13392[(7)] = inst_13355__$1);

return statearr_13392;
})();
if(cljs.core.truth_(inst_13357__$1)){
var statearr_13393_13441 = state_13376__$1;
(statearr_13393_13441[(1)] = (19));

} else {
var statearr_13394_13442 = state_13376__$1;
(statearr_13394_13442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (25))){
var inst_13366 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13395_13443 = state_13376__$1;
(statearr_13395_13443[(2)] = inst_13366);

(statearr_13395_13443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (17))){
var inst_13331 = (state_13376[(10)]);
var inst_13340 = cljs.core.first.call(null,inst_13331);
var inst_13341 = cljs.core.async.muxch_STAR_.call(null,inst_13340);
var inst_13342 = cljs.core.async.close_BANG_.call(null,inst_13341);
var inst_13343 = cljs.core.next.call(null,inst_13331);
var inst_13317 = inst_13343;
var inst_13318 = null;
var inst_13319 = (0);
var inst_13320 = (0);
var state_13376__$1 = (function (){var statearr_13396 = state_13376;
(statearr_13396[(12)] = inst_13318);

(statearr_13396[(13)] = inst_13342);

(statearr_13396[(14)] = inst_13320);

(statearr_13396[(15)] = inst_13317);

(statearr_13396[(16)] = inst_13319);

return statearr_13396;
})();
var statearr_13397_13444 = state_13376__$1;
(statearr_13397_13444[(2)] = null);

(statearr_13397_13444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (3))){
var inst_13374 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else {
if((state_val_13377 === (12))){
var inst_13351 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13398_13445 = state_13376__$1;
(statearr_13398_13445[(2)] = inst_13351);

(statearr_13398_13445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (2))){
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(4),ch);
} else {
if((state_val_13377 === (23))){
var state_13376__$1 = state_13376;
var statearr_13399_13446 = state_13376__$1;
(statearr_13399_13446[(2)] = null);

(statearr_13399_13446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (19))){
var inst_13307 = (state_13376[(8)]);
var inst_13357 = (state_13376[(11)]);
var inst_13359 = cljs.core.async.muxch_STAR_.call(null,inst_13357);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,(22),inst_13359,inst_13307);
} else {
if((state_val_13377 === (11))){
var inst_13317 = (state_13376[(15)]);
var inst_13331 = (state_13376[(10)]);
var inst_13331__$1 = cljs.core.seq.call(null,inst_13317);
var state_13376__$1 = (function (){var statearr_13400 = state_13376;
(statearr_13400[(10)] = inst_13331__$1);

return statearr_13400;
})();
if(inst_13331__$1){
var statearr_13401_13447 = state_13376__$1;
(statearr_13401_13447[(1)] = (13));

} else {
var statearr_13402_13448 = state_13376__$1;
(statearr_13402_13448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (9))){
var inst_13353 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13403_13449 = state_13376__$1;
(statearr_13403_13449[(2)] = inst_13353);

(statearr_13403_13449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (5))){
var inst_13314 = cljs.core.deref.call(null,mults);
var inst_13315 = cljs.core.vals.call(null,inst_13314);
var inst_13316 = cljs.core.seq.call(null,inst_13315);
var inst_13317 = inst_13316;
var inst_13318 = null;
var inst_13319 = (0);
var inst_13320 = (0);
var state_13376__$1 = (function (){var statearr_13404 = state_13376;
(statearr_13404[(12)] = inst_13318);

(statearr_13404[(14)] = inst_13320);

(statearr_13404[(15)] = inst_13317);

(statearr_13404[(16)] = inst_13319);

return statearr_13404;
})();
var statearr_13405_13450 = state_13376__$1;
(statearr_13405_13450[(2)] = null);

(statearr_13405_13450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (14))){
var state_13376__$1 = state_13376;
var statearr_13409_13451 = state_13376__$1;
(statearr_13409_13451[(2)] = null);

(statearr_13409_13451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (16))){
var inst_13331 = (state_13376[(10)]);
var inst_13335 = cljs.core.chunk_first.call(null,inst_13331);
var inst_13336 = cljs.core.chunk_rest.call(null,inst_13331);
var inst_13337 = cljs.core.count.call(null,inst_13335);
var inst_13317 = inst_13336;
var inst_13318 = inst_13335;
var inst_13319 = inst_13337;
var inst_13320 = (0);
var state_13376__$1 = (function (){var statearr_13410 = state_13376;
(statearr_13410[(12)] = inst_13318);

(statearr_13410[(14)] = inst_13320);

(statearr_13410[(15)] = inst_13317);

(statearr_13410[(16)] = inst_13319);

return statearr_13410;
})();
var statearr_13411_13452 = state_13376__$1;
(statearr_13411_13452[(2)] = null);

(statearr_13411_13452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (10))){
var inst_13318 = (state_13376[(12)]);
var inst_13320 = (state_13376[(14)]);
var inst_13317 = (state_13376[(15)]);
var inst_13319 = (state_13376[(16)]);
var inst_13325 = cljs.core._nth.call(null,inst_13318,inst_13320);
var inst_13326 = cljs.core.async.muxch_STAR_.call(null,inst_13325);
var inst_13327 = cljs.core.async.close_BANG_.call(null,inst_13326);
var inst_13328 = (inst_13320 + (1));
var tmp13406 = inst_13318;
var tmp13407 = inst_13317;
var tmp13408 = inst_13319;
var inst_13317__$1 = tmp13407;
var inst_13318__$1 = tmp13406;
var inst_13319__$1 = tmp13408;
var inst_13320__$1 = inst_13328;
var state_13376__$1 = (function (){var statearr_13412 = state_13376;
(statearr_13412[(12)] = inst_13318__$1);

(statearr_13412[(14)] = inst_13320__$1);

(statearr_13412[(15)] = inst_13317__$1);

(statearr_13412[(16)] = inst_13319__$1);

(statearr_13412[(17)] = inst_13327);

return statearr_13412;
})();
var statearr_13413_13453 = state_13376__$1;
(statearr_13413_13453[(2)] = null);

(statearr_13413_13453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (18))){
var inst_13346 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13414_13454 = state_13376__$1;
(statearr_13414_13454[(2)] = inst_13346);

(statearr_13414_13454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (8))){
var inst_13320 = (state_13376[(14)]);
var inst_13319 = (state_13376[(16)]);
var inst_13322 = (inst_13320 < inst_13319);
var inst_13323 = inst_13322;
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13323)){
var statearr_13415_13455 = state_13376__$1;
(statearr_13415_13455[(1)] = (10));

} else {
var statearr_13416_13456 = state_13376__$1;
(statearr_13416_13456[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13428,mults,ensure_mult,p))
;
return ((function (switch__11363__auto__,c__11475__auto___13428,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_13420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13420[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_13420[(1)] = (1));

return statearr_13420;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_13376){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13421){if((e13421 instanceof Object)){
var ex__11367__auto__ = e13421;
var statearr_13422_13457 = state_13376;
(statearr_13422_13457[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13458 = state_13376;
state_13376 = G__13458;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13428,mults,ensure_mult,p))
})();
var state__11477__auto__ = (function (){var statearr_13423 = f__11476__auto__.call(null);
(statearr_13423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13428);

return statearr_13423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13428,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13459 = [];
var len__7923__auto___13462 = arguments.length;
var i__7924__auto___13463 = (0);
while(true){
if((i__7924__auto___13463 < len__7923__auto___13462)){
args13459.push((arguments[i__7924__auto___13463]));

var G__13464 = (i__7924__auto___13463 + (1));
i__7924__auto___13463 = G__13464;
continue;
} else {
}
break;
}

var G__13461 = args13459.length;
switch (G__13461) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13459.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13466 = [];
var len__7923__auto___13469 = arguments.length;
var i__7924__auto___13470 = (0);
while(true){
if((i__7924__auto___13470 < len__7923__auto___13469)){
args13466.push((arguments[i__7924__auto___13470]));

var G__13471 = (i__7924__auto___13470 + (1));
i__7924__auto___13470 = G__13471;
continue;
} else {
}
break;
}

var G__13468 = args13466.length;
switch (G__13468) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13466.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13473 = [];
var len__7923__auto___13544 = arguments.length;
var i__7924__auto___13545 = (0);
while(true){
if((i__7924__auto___13545 < len__7923__auto___13544)){
args13473.push((arguments[i__7924__auto___13545]));

var G__13546 = (i__7924__auto___13545 + (1));
i__7924__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var G__13475 = args13473.length;
switch (G__13475) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13473.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11475__auto___13548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13514){
var state_val_13515 = (state_13514[(1)]);
if((state_val_13515 === (7))){
var state_13514__$1 = state_13514;
var statearr_13516_13549 = state_13514__$1;
(statearr_13516_13549[(2)] = null);

(statearr_13516_13549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (1))){
var state_13514__$1 = state_13514;
var statearr_13517_13550 = state_13514__$1;
(statearr_13517_13550[(2)] = null);

(statearr_13517_13550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (4))){
var inst_13478 = (state_13514[(7)]);
var inst_13480 = (inst_13478 < cnt);
var state_13514__$1 = state_13514;
if(cljs.core.truth_(inst_13480)){
var statearr_13518_13551 = state_13514__$1;
(statearr_13518_13551[(1)] = (6));

} else {
var statearr_13519_13552 = state_13514__$1;
(statearr_13519_13552[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (15))){
var inst_13510 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
var statearr_13520_13553 = state_13514__$1;
(statearr_13520_13553[(2)] = inst_13510);

(statearr_13520_13553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (13))){
var inst_13503 = cljs.core.async.close_BANG_.call(null,out);
var state_13514__$1 = state_13514;
var statearr_13521_13554 = state_13514__$1;
(statearr_13521_13554[(2)] = inst_13503);

(statearr_13521_13554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (6))){
var state_13514__$1 = state_13514;
var statearr_13522_13555 = state_13514__$1;
(statearr_13522_13555[(2)] = null);

(statearr_13522_13555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (3))){
var inst_13512 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13514__$1,inst_13512);
} else {
if((state_val_13515 === (12))){
var inst_13500 = (state_13514[(8)]);
var inst_13500__$1 = (state_13514[(2)]);
var inst_13501 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13500__$1);
var state_13514__$1 = (function (){var statearr_13523 = state_13514;
(statearr_13523[(8)] = inst_13500__$1);

return statearr_13523;
})();
if(cljs.core.truth_(inst_13501)){
var statearr_13524_13556 = state_13514__$1;
(statearr_13524_13556[(1)] = (13));

} else {
var statearr_13525_13557 = state_13514__$1;
(statearr_13525_13557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (2))){
var inst_13477 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13478 = (0);
var state_13514__$1 = (function (){var statearr_13526 = state_13514;
(statearr_13526[(9)] = inst_13477);

(statearr_13526[(7)] = inst_13478);

return statearr_13526;
})();
var statearr_13527_13558 = state_13514__$1;
(statearr_13527_13558[(2)] = null);

(statearr_13527_13558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (11))){
var inst_13478 = (state_13514[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13514,(10),Object,null,(9));
var inst_13487 = chs__$1.call(null,inst_13478);
var inst_13488 = done.call(null,inst_13478);
var inst_13489 = cljs.core.async.take_BANG_.call(null,inst_13487,inst_13488);
var state_13514__$1 = state_13514;
var statearr_13528_13559 = state_13514__$1;
(statearr_13528_13559[(2)] = inst_13489);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13514__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (9))){
var inst_13478 = (state_13514[(7)]);
var inst_13491 = (state_13514[(2)]);
var inst_13492 = (inst_13478 + (1));
var inst_13478__$1 = inst_13492;
var state_13514__$1 = (function (){var statearr_13529 = state_13514;
(statearr_13529[(10)] = inst_13491);

(statearr_13529[(7)] = inst_13478__$1);

return statearr_13529;
})();
var statearr_13530_13560 = state_13514__$1;
(statearr_13530_13560[(2)] = null);

(statearr_13530_13560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (5))){
var inst_13498 = (state_13514[(2)]);
var state_13514__$1 = (function (){var statearr_13531 = state_13514;
(statearr_13531[(11)] = inst_13498);

return statearr_13531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13514__$1,(12),dchan);
} else {
if((state_val_13515 === (14))){
var inst_13500 = (state_13514[(8)]);
var inst_13505 = cljs.core.apply.call(null,f,inst_13500);
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13514__$1,(16),out,inst_13505);
} else {
if((state_val_13515 === (16))){
var inst_13507 = (state_13514[(2)]);
var state_13514__$1 = (function (){var statearr_13532 = state_13514;
(statearr_13532[(12)] = inst_13507);

return statearr_13532;
})();
var statearr_13533_13561 = state_13514__$1;
(statearr_13533_13561[(2)] = null);

(statearr_13533_13561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (10))){
var inst_13482 = (state_13514[(2)]);
var inst_13483 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13514__$1 = (function (){var statearr_13534 = state_13514;
(statearr_13534[(13)] = inst_13482);

return statearr_13534;
})();
var statearr_13535_13562 = state_13514__$1;
(statearr_13535_13562[(2)] = inst_13483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13514__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (8))){
var inst_13496 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
var statearr_13536_13563 = state_13514__$1;
(statearr_13536_13563[(2)] = inst_13496);

(statearr_13536_13563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11363__auto__,c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_13540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13540[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_13540[(1)] = (1));

return statearr_13540;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_13514){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13541){if((e13541 instanceof Object)){
var ex__11367__auto__ = e13541;
var statearr_13542_13564 = state_13514;
(statearr_13542_13564[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13565 = state_13514;
state_13514 = G__13565;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_13514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_13514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11477__auto__ = (function (){var statearr_13543 = f__11476__auto__.call(null);
(statearr_13543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13548);

return statearr_13543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13548,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13567 = [];
var len__7923__auto___13625 = arguments.length;
var i__7924__auto___13626 = (0);
while(true){
if((i__7924__auto___13626 < len__7923__auto___13625)){
args13567.push((arguments[i__7924__auto___13626]));

var G__13627 = (i__7924__auto___13626 + (1));
i__7924__auto___13626 = G__13627;
continue;
} else {
}
break;
}

var G__13569 = args13567.length;
switch (G__13569) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13567.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___13629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13629,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13629,out){
return (function (state_13601){
var state_val_13602 = (state_13601[(1)]);
if((state_val_13602 === (7))){
var inst_13581 = (state_13601[(7)]);
var inst_13580 = (state_13601[(8)]);
var inst_13580__$1 = (state_13601[(2)]);
var inst_13581__$1 = cljs.core.nth.call(null,inst_13580__$1,(0),null);
var inst_13582 = cljs.core.nth.call(null,inst_13580__$1,(1),null);
var inst_13583 = (inst_13581__$1 == null);
var state_13601__$1 = (function (){var statearr_13603 = state_13601;
(statearr_13603[(9)] = inst_13582);

(statearr_13603[(7)] = inst_13581__$1);

(statearr_13603[(8)] = inst_13580__$1);

return statearr_13603;
})();
if(cljs.core.truth_(inst_13583)){
var statearr_13604_13630 = state_13601__$1;
(statearr_13604_13630[(1)] = (8));

} else {
var statearr_13605_13631 = state_13601__$1;
(statearr_13605_13631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (1))){
var inst_13570 = cljs.core.vec.call(null,chs);
var inst_13571 = inst_13570;
var state_13601__$1 = (function (){var statearr_13606 = state_13601;
(statearr_13606[(10)] = inst_13571);

return statearr_13606;
})();
var statearr_13607_13632 = state_13601__$1;
(statearr_13607_13632[(2)] = null);

(statearr_13607_13632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (4))){
var inst_13571 = (state_13601[(10)]);
var state_13601__$1 = state_13601;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13601__$1,(7),inst_13571);
} else {
if((state_val_13602 === (6))){
var inst_13597 = (state_13601[(2)]);
var state_13601__$1 = state_13601;
var statearr_13608_13633 = state_13601__$1;
(statearr_13608_13633[(2)] = inst_13597);

(statearr_13608_13633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (3))){
var inst_13599 = (state_13601[(2)]);
var state_13601__$1 = state_13601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13601__$1,inst_13599);
} else {
if((state_val_13602 === (2))){
var inst_13571 = (state_13601[(10)]);
var inst_13573 = cljs.core.count.call(null,inst_13571);
var inst_13574 = (inst_13573 > (0));
var state_13601__$1 = state_13601;
if(cljs.core.truth_(inst_13574)){
var statearr_13610_13634 = state_13601__$1;
(statearr_13610_13634[(1)] = (4));

} else {
var statearr_13611_13635 = state_13601__$1;
(statearr_13611_13635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (11))){
var inst_13571 = (state_13601[(10)]);
var inst_13590 = (state_13601[(2)]);
var tmp13609 = inst_13571;
var inst_13571__$1 = tmp13609;
var state_13601__$1 = (function (){var statearr_13612 = state_13601;
(statearr_13612[(10)] = inst_13571__$1);

(statearr_13612[(11)] = inst_13590);

return statearr_13612;
})();
var statearr_13613_13636 = state_13601__$1;
(statearr_13613_13636[(2)] = null);

(statearr_13613_13636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (9))){
var inst_13581 = (state_13601[(7)]);
var state_13601__$1 = state_13601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13601__$1,(11),out,inst_13581);
} else {
if((state_val_13602 === (5))){
var inst_13595 = cljs.core.async.close_BANG_.call(null,out);
var state_13601__$1 = state_13601;
var statearr_13614_13637 = state_13601__$1;
(statearr_13614_13637[(2)] = inst_13595);

(statearr_13614_13637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (10))){
var inst_13593 = (state_13601[(2)]);
var state_13601__$1 = state_13601;
var statearr_13615_13638 = state_13601__$1;
(statearr_13615_13638[(2)] = inst_13593);

(statearr_13615_13638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13602 === (8))){
var inst_13582 = (state_13601[(9)]);
var inst_13571 = (state_13601[(10)]);
var inst_13581 = (state_13601[(7)]);
var inst_13580 = (state_13601[(8)]);
var inst_13585 = (function (){var cs = inst_13571;
var vec__13576 = inst_13580;
var v = inst_13581;
var c = inst_13582;
return ((function (cs,vec__13576,v,c,inst_13582,inst_13571,inst_13581,inst_13580,state_val_13602,c__11475__auto___13629,out){
return (function (p1__13566_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13566_SHARP_);
});
;})(cs,vec__13576,v,c,inst_13582,inst_13571,inst_13581,inst_13580,state_val_13602,c__11475__auto___13629,out))
})();
var inst_13586 = cljs.core.filterv.call(null,inst_13585,inst_13571);
var inst_13571__$1 = inst_13586;
var state_13601__$1 = (function (){var statearr_13616 = state_13601;
(statearr_13616[(10)] = inst_13571__$1);

return statearr_13616;
})();
var statearr_13617_13639 = state_13601__$1;
(statearr_13617_13639[(2)] = null);

(statearr_13617_13639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13629,out))
;
return ((function (switch__11363__auto__,c__11475__auto___13629,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_13621 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13621[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_13621[(1)] = (1));

return statearr_13621;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_13601){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object)){
var ex__11367__auto__ = e13622;
var statearr_13623_13640 = state_13601;
(statearr_13623_13640[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13641 = state_13601;
state_13601 = G__13641;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_13601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_13601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13629,out))
})();
var state__11477__auto__ = (function (){var statearr_13624 = f__11476__auto__.call(null);
(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13629);

return statearr_13624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13629,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13642 = [];
var len__7923__auto___13691 = arguments.length;
var i__7924__auto___13692 = (0);
while(true){
if((i__7924__auto___13692 < len__7923__auto___13691)){
args13642.push((arguments[i__7924__auto___13692]));

var G__13693 = (i__7924__auto___13692 + (1));
i__7924__auto___13692 = G__13693;
continue;
} else {
}
break;
}

var G__13644 = args13642.length;
switch (G__13644) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13642.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___13695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13695,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13695,out){
return (function (state_13668){
var state_val_13669 = (state_13668[(1)]);
if((state_val_13669 === (7))){
var inst_13650 = (state_13668[(7)]);
var inst_13650__$1 = (state_13668[(2)]);
var inst_13651 = (inst_13650__$1 == null);
var inst_13652 = cljs.core.not.call(null,inst_13651);
var state_13668__$1 = (function (){var statearr_13670 = state_13668;
(statearr_13670[(7)] = inst_13650__$1);

return statearr_13670;
})();
if(inst_13652){
var statearr_13671_13696 = state_13668__$1;
(statearr_13671_13696[(1)] = (8));

} else {
var statearr_13672_13697 = state_13668__$1;
(statearr_13672_13697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (1))){
var inst_13645 = (0);
var state_13668__$1 = (function (){var statearr_13673 = state_13668;
(statearr_13673[(8)] = inst_13645);

return statearr_13673;
})();
var statearr_13674_13698 = state_13668__$1;
(statearr_13674_13698[(2)] = null);

(statearr_13674_13698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (4))){
var state_13668__$1 = state_13668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13668__$1,(7),ch);
} else {
if((state_val_13669 === (6))){
var inst_13663 = (state_13668[(2)]);
var state_13668__$1 = state_13668;
var statearr_13675_13699 = state_13668__$1;
(statearr_13675_13699[(2)] = inst_13663);

(statearr_13675_13699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (3))){
var inst_13665 = (state_13668[(2)]);
var inst_13666 = cljs.core.async.close_BANG_.call(null,out);
var state_13668__$1 = (function (){var statearr_13676 = state_13668;
(statearr_13676[(9)] = inst_13665);

return statearr_13676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13668__$1,inst_13666);
} else {
if((state_val_13669 === (2))){
var inst_13645 = (state_13668[(8)]);
var inst_13647 = (inst_13645 < n);
var state_13668__$1 = state_13668;
if(cljs.core.truth_(inst_13647)){
var statearr_13677_13700 = state_13668__$1;
(statearr_13677_13700[(1)] = (4));

} else {
var statearr_13678_13701 = state_13668__$1;
(statearr_13678_13701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (11))){
var inst_13645 = (state_13668[(8)]);
var inst_13655 = (state_13668[(2)]);
var inst_13656 = (inst_13645 + (1));
var inst_13645__$1 = inst_13656;
var state_13668__$1 = (function (){var statearr_13679 = state_13668;
(statearr_13679[(8)] = inst_13645__$1);

(statearr_13679[(10)] = inst_13655);

return statearr_13679;
})();
var statearr_13680_13702 = state_13668__$1;
(statearr_13680_13702[(2)] = null);

(statearr_13680_13702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (9))){
var state_13668__$1 = state_13668;
var statearr_13681_13703 = state_13668__$1;
(statearr_13681_13703[(2)] = null);

(statearr_13681_13703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (5))){
var state_13668__$1 = state_13668;
var statearr_13682_13704 = state_13668__$1;
(statearr_13682_13704[(2)] = null);

(statearr_13682_13704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (10))){
var inst_13660 = (state_13668[(2)]);
var state_13668__$1 = state_13668;
var statearr_13683_13705 = state_13668__$1;
(statearr_13683_13705[(2)] = inst_13660);

(statearr_13683_13705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13669 === (8))){
var inst_13650 = (state_13668[(7)]);
var state_13668__$1 = state_13668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13668__$1,(11),out,inst_13650);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13695,out))
;
return ((function (switch__11363__auto__,c__11475__auto___13695,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_13687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13687[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_13687[(1)] = (1));

return statearr_13687;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_13668){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13688){if((e13688 instanceof Object)){
var ex__11367__auto__ = e13688;
var statearr_13689_13706 = state_13668;
(statearr_13689_13706[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13707 = state_13668;
state_13668 = G__13707;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_13668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_13668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13695,out))
})();
var state__11477__auto__ = (function (){var statearr_13690 = f__11476__auto__.call(null);
(statearr_13690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13695);

return statearr_13690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13695,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13715 = (function (f,ch,meta13716){
this.f = f;
this.ch = ch;
this.meta13716 = meta13716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13717,meta13716__$1){
var self__ = this;
var _13717__$1 = this;
return (new cljs.core.async.t_cljs$core$async13715(self__.f,self__.ch,meta13716__$1));
});

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13717){
var self__ = this;
var _13717__$1 = this;
return self__.meta13716;
});

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13718 = (function (f,ch,meta13716,_,fn1,meta13719){
this.f = f;
this.ch = ch;
this.meta13716 = meta13716;
this._ = _;
this.fn1 = fn1;
this.meta13719 = meta13719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13720,meta13719__$1){
var self__ = this;
var _13720__$1 = this;
return (new cljs.core.async.t_cljs$core$async13718(self__.f,self__.ch,self__.meta13716,self__._,self__.fn1,meta13719__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13720){
var self__ = this;
var _13720__$1 = this;
return self__.meta13719;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13708_SHARP_){
return f1.call(null,(((p1__13708_SHARP_ == null))?null:self__.f.call(null,p1__13708_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13716","meta13716",2033386694,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13715","cljs.core.async/t_cljs$core$async13715",-1047632913,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13719","meta13719",-1942742715,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13718";

cljs.core.async.t_cljs$core$async13718.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13718");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13718 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13718(f__$1,ch__$1,meta13716__$1,___$2,fn1__$1,meta13719){
return (new cljs.core.async.t_cljs$core$async13718(f__$1,ch__$1,meta13716__$1,___$2,fn1__$1,meta13719));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13718(self__.f,self__.ch,self__.meta13716,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6802__auto__ = ret;
if(cljs.core.truth_(and__6802__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6802__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13716","meta13716",2033386694,null)], null);
});

cljs.core.async.t_cljs$core$async13715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13715";

cljs.core.async.t_cljs$core$async13715.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13715");
});

cljs.core.async.__GT_t_cljs$core$async13715 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13715(f__$1,ch__$1,meta13716){
return (new cljs.core.async.t_cljs$core$async13715(f__$1,ch__$1,meta13716));
});

}

return (new cljs.core.async.t_cljs$core$async13715(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13724 = (function (f,ch,meta13725){
this.f = f;
this.ch = ch;
this.meta13725 = meta13725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13726,meta13725__$1){
var self__ = this;
var _13726__$1 = this;
return (new cljs.core.async.t_cljs$core$async13724(self__.f,self__.ch,meta13725__$1));
});

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13726){
var self__ = this;
var _13726__$1 = this;
return self__.meta13725;
});

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13725","meta13725",-1821578305,null)], null);
});

cljs.core.async.t_cljs$core$async13724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13724";

cljs.core.async.t_cljs$core$async13724.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13724");
});

cljs.core.async.__GT_t_cljs$core$async13724 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13724(f__$1,ch__$1,meta13725){
return (new cljs.core.async.t_cljs$core$async13724(f__$1,ch__$1,meta13725));
});

}

return (new cljs.core.async.t_cljs$core$async13724(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13730 = (function (p,ch,meta13731){
this.p = p;
this.ch = ch;
this.meta13731 = meta13731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13732,meta13731__$1){
var self__ = this;
var _13732__$1 = this;
return (new cljs.core.async.t_cljs$core$async13730(self__.p,self__.ch,meta13731__$1));
});

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13732){
var self__ = this;
var _13732__$1 = this;
return self__.meta13731;
});

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13731","meta13731",1447324370,null)], null);
});

cljs.core.async.t_cljs$core$async13730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13730";

cljs.core.async.t_cljs$core$async13730.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13730");
});

cljs.core.async.__GT_t_cljs$core$async13730 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13730(p__$1,ch__$1,meta13731){
return (new cljs.core.async.t_cljs$core$async13730(p__$1,ch__$1,meta13731));
});

}

return (new cljs.core.async.t_cljs$core$async13730(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13733 = [];
var len__7923__auto___13777 = arguments.length;
var i__7924__auto___13778 = (0);
while(true){
if((i__7924__auto___13778 < len__7923__auto___13777)){
args13733.push((arguments[i__7924__auto___13778]));

var G__13779 = (i__7924__auto___13778 + (1));
i__7924__auto___13778 = G__13779;
continue;
} else {
}
break;
}

var G__13735 = args13733.length;
switch (G__13735) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13733.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___13781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___13781,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___13781,out){
return (function (state_13756){
var state_val_13757 = (state_13756[(1)]);
if((state_val_13757 === (7))){
var inst_13752 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13758_13782 = state_13756__$1;
(statearr_13758_13782[(2)] = inst_13752);

(statearr_13758_13782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (1))){
var state_13756__$1 = state_13756;
var statearr_13759_13783 = state_13756__$1;
(statearr_13759_13783[(2)] = null);

(statearr_13759_13783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (4))){
var inst_13738 = (state_13756[(7)]);
var inst_13738__$1 = (state_13756[(2)]);
var inst_13739 = (inst_13738__$1 == null);
var state_13756__$1 = (function (){var statearr_13760 = state_13756;
(statearr_13760[(7)] = inst_13738__$1);

return statearr_13760;
})();
if(cljs.core.truth_(inst_13739)){
var statearr_13761_13784 = state_13756__$1;
(statearr_13761_13784[(1)] = (5));

} else {
var statearr_13762_13785 = state_13756__$1;
(statearr_13762_13785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (6))){
var inst_13738 = (state_13756[(7)]);
var inst_13743 = p.call(null,inst_13738);
var state_13756__$1 = state_13756;
if(cljs.core.truth_(inst_13743)){
var statearr_13763_13786 = state_13756__$1;
(statearr_13763_13786[(1)] = (8));

} else {
var statearr_13764_13787 = state_13756__$1;
(statearr_13764_13787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (3))){
var inst_13754 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13756__$1,inst_13754);
} else {
if((state_val_13757 === (2))){
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13756__$1,(4),ch);
} else {
if((state_val_13757 === (11))){
var inst_13746 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13765_13788 = state_13756__$1;
(statearr_13765_13788[(2)] = inst_13746);

(statearr_13765_13788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (9))){
var state_13756__$1 = state_13756;
var statearr_13766_13789 = state_13756__$1;
(statearr_13766_13789[(2)] = null);

(statearr_13766_13789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (5))){
var inst_13741 = cljs.core.async.close_BANG_.call(null,out);
var state_13756__$1 = state_13756;
var statearr_13767_13790 = state_13756__$1;
(statearr_13767_13790[(2)] = inst_13741);

(statearr_13767_13790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (10))){
var inst_13749 = (state_13756[(2)]);
var state_13756__$1 = (function (){var statearr_13768 = state_13756;
(statearr_13768[(8)] = inst_13749);

return statearr_13768;
})();
var statearr_13769_13791 = state_13756__$1;
(statearr_13769_13791[(2)] = null);

(statearr_13769_13791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (8))){
var inst_13738 = (state_13756[(7)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13756__$1,(11),out,inst_13738);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___13781,out))
;
return ((function (switch__11363__auto__,c__11475__auto___13781,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_13773 = [null,null,null,null,null,null,null,null,null];
(statearr_13773[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_13773[(1)] = (1));

return statearr_13773;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_13756){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e13774){if((e13774 instanceof Object)){
var ex__11367__auto__ = e13774;
var statearr_13775_13792 = state_13756;
(statearr_13775_13792[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13793 = state_13756;
state_13756 = G__13793;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_13756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_13756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___13781,out))
})();
var state__11477__auto__ = (function (){var statearr_13776 = f__11476__auto__.call(null);
(statearr_13776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___13781);

return statearr_13776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___13781,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13794 = [];
var len__7923__auto___13797 = arguments.length;
var i__7924__auto___13798 = (0);
while(true){
if((i__7924__auto___13798 < len__7923__auto___13797)){
args13794.push((arguments[i__7924__auto___13798]));

var G__13799 = (i__7924__auto___13798 + (1));
i__7924__auto___13798 = G__13799;
continue;
} else {
}
break;
}

var G__13796 = args13794.length;
switch (G__13796) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13794.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto__){
return (function (state_13966){
var state_val_13967 = (state_13966[(1)]);
if((state_val_13967 === (7))){
var inst_13962 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
var statearr_13968_14009 = state_13966__$1;
(statearr_13968_14009[(2)] = inst_13962);

(statearr_13968_14009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (20))){
var inst_13932 = (state_13966[(7)]);
var inst_13943 = (state_13966[(2)]);
var inst_13944 = cljs.core.next.call(null,inst_13932);
var inst_13918 = inst_13944;
var inst_13919 = null;
var inst_13920 = (0);
var inst_13921 = (0);
var state_13966__$1 = (function (){var statearr_13969 = state_13966;
(statearr_13969[(8)] = inst_13919);

(statearr_13969[(9)] = inst_13921);

(statearr_13969[(10)] = inst_13918);

(statearr_13969[(11)] = inst_13943);

(statearr_13969[(12)] = inst_13920);

return statearr_13969;
})();
var statearr_13970_14010 = state_13966__$1;
(statearr_13970_14010[(2)] = null);

(statearr_13970_14010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (1))){
var state_13966__$1 = state_13966;
var statearr_13971_14011 = state_13966__$1;
(statearr_13971_14011[(2)] = null);

(statearr_13971_14011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (4))){
var inst_13907 = (state_13966[(13)]);
var inst_13907__$1 = (state_13966[(2)]);
var inst_13908 = (inst_13907__$1 == null);
var state_13966__$1 = (function (){var statearr_13972 = state_13966;
(statearr_13972[(13)] = inst_13907__$1);

return statearr_13972;
})();
if(cljs.core.truth_(inst_13908)){
var statearr_13973_14012 = state_13966__$1;
(statearr_13973_14012[(1)] = (5));

} else {
var statearr_13974_14013 = state_13966__$1;
(statearr_13974_14013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (15))){
var state_13966__$1 = state_13966;
var statearr_13978_14014 = state_13966__$1;
(statearr_13978_14014[(2)] = null);

(statearr_13978_14014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (21))){
var state_13966__$1 = state_13966;
var statearr_13979_14015 = state_13966__$1;
(statearr_13979_14015[(2)] = null);

(statearr_13979_14015[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (13))){
var inst_13919 = (state_13966[(8)]);
var inst_13921 = (state_13966[(9)]);
var inst_13918 = (state_13966[(10)]);
var inst_13920 = (state_13966[(12)]);
var inst_13928 = (state_13966[(2)]);
var inst_13929 = (inst_13921 + (1));
var tmp13975 = inst_13919;
var tmp13976 = inst_13918;
var tmp13977 = inst_13920;
var inst_13918__$1 = tmp13976;
var inst_13919__$1 = tmp13975;
var inst_13920__$1 = tmp13977;
var inst_13921__$1 = inst_13929;
var state_13966__$1 = (function (){var statearr_13980 = state_13966;
(statearr_13980[(8)] = inst_13919__$1);

(statearr_13980[(9)] = inst_13921__$1);

(statearr_13980[(10)] = inst_13918__$1);

(statearr_13980[(14)] = inst_13928);

(statearr_13980[(12)] = inst_13920__$1);

return statearr_13980;
})();
var statearr_13981_14016 = state_13966__$1;
(statearr_13981_14016[(2)] = null);

(statearr_13981_14016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (22))){
var state_13966__$1 = state_13966;
var statearr_13982_14017 = state_13966__$1;
(statearr_13982_14017[(2)] = null);

(statearr_13982_14017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (6))){
var inst_13907 = (state_13966[(13)]);
var inst_13916 = f.call(null,inst_13907);
var inst_13917 = cljs.core.seq.call(null,inst_13916);
var inst_13918 = inst_13917;
var inst_13919 = null;
var inst_13920 = (0);
var inst_13921 = (0);
var state_13966__$1 = (function (){var statearr_13983 = state_13966;
(statearr_13983[(8)] = inst_13919);

(statearr_13983[(9)] = inst_13921);

(statearr_13983[(10)] = inst_13918);

(statearr_13983[(12)] = inst_13920);

return statearr_13983;
})();
var statearr_13984_14018 = state_13966__$1;
(statearr_13984_14018[(2)] = null);

(statearr_13984_14018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (17))){
var inst_13932 = (state_13966[(7)]);
var inst_13936 = cljs.core.chunk_first.call(null,inst_13932);
var inst_13937 = cljs.core.chunk_rest.call(null,inst_13932);
var inst_13938 = cljs.core.count.call(null,inst_13936);
var inst_13918 = inst_13937;
var inst_13919 = inst_13936;
var inst_13920 = inst_13938;
var inst_13921 = (0);
var state_13966__$1 = (function (){var statearr_13985 = state_13966;
(statearr_13985[(8)] = inst_13919);

(statearr_13985[(9)] = inst_13921);

(statearr_13985[(10)] = inst_13918);

(statearr_13985[(12)] = inst_13920);

return statearr_13985;
})();
var statearr_13986_14019 = state_13966__$1;
(statearr_13986_14019[(2)] = null);

(statearr_13986_14019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (3))){
var inst_13964 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13966__$1,inst_13964);
} else {
if((state_val_13967 === (12))){
var inst_13952 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
var statearr_13987_14020 = state_13966__$1;
(statearr_13987_14020[(2)] = inst_13952);

(statearr_13987_14020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (2))){
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13966__$1,(4),in$);
} else {
if((state_val_13967 === (23))){
var inst_13960 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
var statearr_13988_14021 = state_13966__$1;
(statearr_13988_14021[(2)] = inst_13960);

(statearr_13988_14021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (19))){
var inst_13947 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
var statearr_13989_14022 = state_13966__$1;
(statearr_13989_14022[(2)] = inst_13947);

(statearr_13989_14022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (11))){
var inst_13932 = (state_13966[(7)]);
var inst_13918 = (state_13966[(10)]);
var inst_13932__$1 = cljs.core.seq.call(null,inst_13918);
var state_13966__$1 = (function (){var statearr_13990 = state_13966;
(statearr_13990[(7)] = inst_13932__$1);

return statearr_13990;
})();
if(inst_13932__$1){
var statearr_13991_14023 = state_13966__$1;
(statearr_13991_14023[(1)] = (14));

} else {
var statearr_13992_14024 = state_13966__$1;
(statearr_13992_14024[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (9))){
var inst_13954 = (state_13966[(2)]);
var inst_13955 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13966__$1 = (function (){var statearr_13993 = state_13966;
(statearr_13993[(15)] = inst_13954);

return statearr_13993;
})();
if(cljs.core.truth_(inst_13955)){
var statearr_13994_14025 = state_13966__$1;
(statearr_13994_14025[(1)] = (21));

} else {
var statearr_13995_14026 = state_13966__$1;
(statearr_13995_14026[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (5))){
var inst_13910 = cljs.core.async.close_BANG_.call(null,out);
var state_13966__$1 = state_13966;
var statearr_13996_14027 = state_13966__$1;
(statearr_13996_14027[(2)] = inst_13910);

(statearr_13996_14027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (14))){
var inst_13932 = (state_13966[(7)]);
var inst_13934 = cljs.core.chunked_seq_QMARK_.call(null,inst_13932);
var state_13966__$1 = state_13966;
if(inst_13934){
var statearr_13997_14028 = state_13966__$1;
(statearr_13997_14028[(1)] = (17));

} else {
var statearr_13998_14029 = state_13966__$1;
(statearr_13998_14029[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (16))){
var inst_13950 = (state_13966[(2)]);
var state_13966__$1 = state_13966;
var statearr_13999_14030 = state_13966__$1;
(statearr_13999_14030[(2)] = inst_13950);

(statearr_13999_14030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13967 === (10))){
var inst_13919 = (state_13966[(8)]);
var inst_13921 = (state_13966[(9)]);
var inst_13926 = cljs.core._nth.call(null,inst_13919,inst_13921);
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13966__$1,(13),out,inst_13926);
} else {
if((state_val_13967 === (18))){
var inst_13932 = (state_13966[(7)]);
var inst_13941 = cljs.core.first.call(null,inst_13932);
var state_13966__$1 = state_13966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13966__$1,(20),out,inst_13941);
} else {
if((state_val_13967 === (8))){
var inst_13921 = (state_13966[(9)]);
var inst_13920 = (state_13966[(12)]);
var inst_13923 = (inst_13921 < inst_13920);
var inst_13924 = inst_13923;
var state_13966__$1 = state_13966;
if(cljs.core.truth_(inst_13924)){
var statearr_14000_14031 = state_13966__$1;
(statearr_14000_14031[(1)] = (10));

} else {
var statearr_14001_14032 = state_13966__$1;
(statearr_14001_14032[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto__))
;
return ((function (switch__11363__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____0 = (function (){
var statearr_14005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14005[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__);

(statearr_14005[(1)] = (1));

return statearr_14005;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____1 = (function (state_13966){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_13966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e14006){if((e14006 instanceof Object)){
var ex__11367__auto__ = e14006;
var statearr_14007_14033 = state_13966;
(statearr_14007_14033[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14034 = state_13966;
state_13966 = G__14034;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__ = function(state_13966){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____1.call(this,state_13966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_14008 = f__11476__auto__.call(null);
(statearr_14008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_14008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14035 = [];
var len__7923__auto___14038 = arguments.length;
var i__7924__auto___14039 = (0);
while(true){
if((i__7924__auto___14039 < len__7923__auto___14038)){
args14035.push((arguments[i__7924__auto___14039]));

var G__14040 = (i__7924__auto___14039 + (1));
i__7924__auto___14039 = G__14040;
continue;
} else {
}
break;
}

var G__14037 = args14035.length;
switch (G__14037) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14035.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args14042 = [];
var len__7923__auto___14045 = arguments.length;
var i__7924__auto___14046 = (0);
while(true){
if((i__7924__auto___14046 < len__7923__auto___14045)){
args14042.push((arguments[i__7924__auto___14046]));

var G__14047 = (i__7924__auto___14046 + (1));
i__7924__auto___14046 = G__14047;
continue;
} else {
}
break;
}

var G__14044 = args14042.length;
switch (G__14044) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14042.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args14049 = [];
var len__7923__auto___14100 = arguments.length;
var i__7924__auto___14101 = (0);
while(true){
if((i__7924__auto___14101 < len__7923__auto___14100)){
args14049.push((arguments[i__7924__auto___14101]));

var G__14102 = (i__7924__auto___14101 + (1));
i__7924__auto___14101 = G__14102;
continue;
} else {
}
break;
}

var G__14051 = args14049.length;
switch (G__14051) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14049.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___14104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___14104,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___14104,out){
return (function (state_14075){
var state_val_14076 = (state_14075[(1)]);
if((state_val_14076 === (7))){
var inst_14070 = (state_14075[(2)]);
var state_14075__$1 = state_14075;
var statearr_14077_14105 = state_14075__$1;
(statearr_14077_14105[(2)] = inst_14070);

(statearr_14077_14105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (1))){
var inst_14052 = null;
var state_14075__$1 = (function (){var statearr_14078 = state_14075;
(statearr_14078[(7)] = inst_14052);

return statearr_14078;
})();
var statearr_14079_14106 = state_14075__$1;
(statearr_14079_14106[(2)] = null);

(statearr_14079_14106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (4))){
var inst_14055 = (state_14075[(8)]);
var inst_14055__$1 = (state_14075[(2)]);
var inst_14056 = (inst_14055__$1 == null);
var inst_14057 = cljs.core.not.call(null,inst_14056);
var state_14075__$1 = (function (){var statearr_14080 = state_14075;
(statearr_14080[(8)] = inst_14055__$1);

return statearr_14080;
})();
if(inst_14057){
var statearr_14081_14107 = state_14075__$1;
(statearr_14081_14107[(1)] = (5));

} else {
var statearr_14082_14108 = state_14075__$1;
(statearr_14082_14108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (6))){
var state_14075__$1 = state_14075;
var statearr_14083_14109 = state_14075__$1;
(statearr_14083_14109[(2)] = null);

(statearr_14083_14109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (3))){
var inst_14072 = (state_14075[(2)]);
var inst_14073 = cljs.core.async.close_BANG_.call(null,out);
var state_14075__$1 = (function (){var statearr_14084 = state_14075;
(statearr_14084[(9)] = inst_14072);

return statearr_14084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14075__$1,inst_14073);
} else {
if((state_val_14076 === (2))){
var state_14075__$1 = state_14075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14075__$1,(4),ch);
} else {
if((state_val_14076 === (11))){
var inst_14055 = (state_14075[(8)]);
var inst_14064 = (state_14075[(2)]);
var inst_14052 = inst_14055;
var state_14075__$1 = (function (){var statearr_14085 = state_14075;
(statearr_14085[(7)] = inst_14052);

(statearr_14085[(10)] = inst_14064);

return statearr_14085;
})();
var statearr_14086_14110 = state_14075__$1;
(statearr_14086_14110[(2)] = null);

(statearr_14086_14110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (9))){
var inst_14055 = (state_14075[(8)]);
var state_14075__$1 = state_14075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14075__$1,(11),out,inst_14055);
} else {
if((state_val_14076 === (5))){
var inst_14052 = (state_14075[(7)]);
var inst_14055 = (state_14075[(8)]);
var inst_14059 = cljs.core._EQ_.call(null,inst_14055,inst_14052);
var state_14075__$1 = state_14075;
if(inst_14059){
var statearr_14088_14111 = state_14075__$1;
(statearr_14088_14111[(1)] = (8));

} else {
var statearr_14089_14112 = state_14075__$1;
(statearr_14089_14112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (10))){
var inst_14067 = (state_14075[(2)]);
var state_14075__$1 = state_14075;
var statearr_14090_14113 = state_14075__$1;
(statearr_14090_14113[(2)] = inst_14067);

(statearr_14090_14113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14076 === (8))){
var inst_14052 = (state_14075[(7)]);
var tmp14087 = inst_14052;
var inst_14052__$1 = tmp14087;
var state_14075__$1 = (function (){var statearr_14091 = state_14075;
(statearr_14091[(7)] = inst_14052__$1);

return statearr_14091;
})();
var statearr_14092_14114 = state_14075__$1;
(statearr_14092_14114[(2)] = null);

(statearr_14092_14114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___14104,out))
;
return ((function (switch__11363__auto__,c__11475__auto___14104,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_14096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14096[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_14096[(1)] = (1));

return statearr_14096;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_14075){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_14075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e14097){if((e14097 instanceof Object)){
var ex__11367__auto__ = e14097;
var statearr_14098_14115 = state_14075;
(statearr_14098_14115[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14116 = state_14075;
state_14075 = G__14116;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_14075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_14075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___14104,out))
})();
var state__11477__auto__ = (function (){var statearr_14099 = f__11476__auto__.call(null);
(statearr_14099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___14104);

return statearr_14099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___14104,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14117 = [];
var len__7923__auto___14187 = arguments.length;
var i__7924__auto___14188 = (0);
while(true){
if((i__7924__auto___14188 < len__7923__auto___14187)){
args14117.push((arguments[i__7924__auto___14188]));

var G__14189 = (i__7924__auto___14188 + (1));
i__7924__auto___14188 = G__14189;
continue;
} else {
}
break;
}

var G__14119 = args14117.length;
switch (G__14119) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14117.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___14191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___14191,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___14191,out){
return (function (state_14157){
var state_val_14158 = (state_14157[(1)]);
if((state_val_14158 === (7))){
var inst_14153 = (state_14157[(2)]);
var state_14157__$1 = state_14157;
var statearr_14159_14192 = state_14157__$1;
(statearr_14159_14192[(2)] = inst_14153);

(statearr_14159_14192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (1))){
var inst_14120 = (new Array(n));
var inst_14121 = inst_14120;
var inst_14122 = (0);
var state_14157__$1 = (function (){var statearr_14160 = state_14157;
(statearr_14160[(7)] = inst_14121);

(statearr_14160[(8)] = inst_14122);

return statearr_14160;
})();
var statearr_14161_14193 = state_14157__$1;
(statearr_14161_14193[(2)] = null);

(statearr_14161_14193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (4))){
var inst_14125 = (state_14157[(9)]);
var inst_14125__$1 = (state_14157[(2)]);
var inst_14126 = (inst_14125__$1 == null);
var inst_14127 = cljs.core.not.call(null,inst_14126);
var state_14157__$1 = (function (){var statearr_14162 = state_14157;
(statearr_14162[(9)] = inst_14125__$1);

return statearr_14162;
})();
if(inst_14127){
var statearr_14163_14194 = state_14157__$1;
(statearr_14163_14194[(1)] = (5));

} else {
var statearr_14164_14195 = state_14157__$1;
(statearr_14164_14195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (15))){
var inst_14147 = (state_14157[(2)]);
var state_14157__$1 = state_14157;
var statearr_14165_14196 = state_14157__$1;
(statearr_14165_14196[(2)] = inst_14147);

(statearr_14165_14196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (13))){
var state_14157__$1 = state_14157;
var statearr_14166_14197 = state_14157__$1;
(statearr_14166_14197[(2)] = null);

(statearr_14166_14197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (6))){
var inst_14122 = (state_14157[(8)]);
var inst_14143 = (inst_14122 > (0));
var state_14157__$1 = state_14157;
if(cljs.core.truth_(inst_14143)){
var statearr_14167_14198 = state_14157__$1;
(statearr_14167_14198[(1)] = (12));

} else {
var statearr_14168_14199 = state_14157__$1;
(statearr_14168_14199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (3))){
var inst_14155 = (state_14157[(2)]);
var state_14157__$1 = state_14157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14157__$1,inst_14155);
} else {
if((state_val_14158 === (12))){
var inst_14121 = (state_14157[(7)]);
var inst_14145 = cljs.core.vec.call(null,inst_14121);
var state_14157__$1 = state_14157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14157__$1,(15),out,inst_14145);
} else {
if((state_val_14158 === (2))){
var state_14157__$1 = state_14157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14157__$1,(4),ch);
} else {
if((state_val_14158 === (11))){
var inst_14137 = (state_14157[(2)]);
var inst_14138 = (new Array(n));
var inst_14121 = inst_14138;
var inst_14122 = (0);
var state_14157__$1 = (function (){var statearr_14169 = state_14157;
(statearr_14169[(10)] = inst_14137);

(statearr_14169[(7)] = inst_14121);

(statearr_14169[(8)] = inst_14122);

return statearr_14169;
})();
var statearr_14170_14200 = state_14157__$1;
(statearr_14170_14200[(2)] = null);

(statearr_14170_14200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (9))){
var inst_14121 = (state_14157[(7)]);
var inst_14135 = cljs.core.vec.call(null,inst_14121);
var state_14157__$1 = state_14157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14157__$1,(11),out,inst_14135);
} else {
if((state_val_14158 === (5))){
var inst_14121 = (state_14157[(7)]);
var inst_14122 = (state_14157[(8)]);
var inst_14125 = (state_14157[(9)]);
var inst_14130 = (state_14157[(11)]);
var inst_14129 = (inst_14121[inst_14122] = inst_14125);
var inst_14130__$1 = (inst_14122 + (1));
var inst_14131 = (inst_14130__$1 < n);
var state_14157__$1 = (function (){var statearr_14171 = state_14157;
(statearr_14171[(12)] = inst_14129);

(statearr_14171[(11)] = inst_14130__$1);

return statearr_14171;
})();
if(cljs.core.truth_(inst_14131)){
var statearr_14172_14201 = state_14157__$1;
(statearr_14172_14201[(1)] = (8));

} else {
var statearr_14173_14202 = state_14157__$1;
(statearr_14173_14202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (14))){
var inst_14150 = (state_14157[(2)]);
var inst_14151 = cljs.core.async.close_BANG_.call(null,out);
var state_14157__$1 = (function (){var statearr_14175 = state_14157;
(statearr_14175[(13)] = inst_14150);

return statearr_14175;
})();
var statearr_14176_14203 = state_14157__$1;
(statearr_14176_14203[(2)] = inst_14151);

(statearr_14176_14203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (10))){
var inst_14141 = (state_14157[(2)]);
var state_14157__$1 = state_14157;
var statearr_14177_14204 = state_14157__$1;
(statearr_14177_14204[(2)] = inst_14141);

(statearr_14177_14204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14158 === (8))){
var inst_14121 = (state_14157[(7)]);
var inst_14130 = (state_14157[(11)]);
var tmp14174 = inst_14121;
var inst_14121__$1 = tmp14174;
var inst_14122 = inst_14130;
var state_14157__$1 = (function (){var statearr_14178 = state_14157;
(statearr_14178[(7)] = inst_14121__$1);

(statearr_14178[(8)] = inst_14122);

return statearr_14178;
})();
var statearr_14179_14205 = state_14157__$1;
(statearr_14179_14205[(2)] = null);

(statearr_14179_14205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___14191,out))
;
return ((function (switch__11363__auto__,c__11475__auto___14191,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_14183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14183[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_14183[(1)] = (1));

return statearr_14183;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_14157){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_14157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e14184){if((e14184 instanceof Object)){
var ex__11367__auto__ = e14184;
var statearr_14185_14206 = state_14157;
(statearr_14185_14206[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14207 = state_14157;
state_14157 = G__14207;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_14157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_14157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___14191,out))
})();
var state__11477__auto__ = (function (){var statearr_14186 = f__11476__auto__.call(null);
(statearr_14186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___14191);

return statearr_14186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___14191,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14208 = [];
var len__7923__auto___14282 = arguments.length;
var i__7924__auto___14283 = (0);
while(true){
if((i__7924__auto___14283 < len__7923__auto___14282)){
args14208.push((arguments[i__7924__auto___14283]));

var G__14284 = (i__7924__auto___14283 + (1));
i__7924__auto___14283 = G__14284;
continue;
} else {
}
break;
}

var G__14210 = args14208.length;
switch (G__14210) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14208.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___14286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___14286,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11363__auto__ = ((function (c__11475__auto___14286,out){
return (function (state_14252){
var state_val_14253 = (state_14252[(1)]);
if((state_val_14253 === (7))){
var inst_14248 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
var statearr_14254_14287 = state_14252__$1;
(statearr_14254_14287[(2)] = inst_14248);

(statearr_14254_14287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (1))){
var inst_14211 = [];
var inst_14212 = inst_14211;
var inst_14213 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14252__$1 = (function (){var statearr_14255 = state_14252;
(statearr_14255[(7)] = inst_14212);

(statearr_14255[(8)] = inst_14213);

return statearr_14255;
})();
var statearr_14256_14288 = state_14252__$1;
(statearr_14256_14288[(2)] = null);

(statearr_14256_14288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (4))){
var inst_14216 = (state_14252[(9)]);
var inst_14216__$1 = (state_14252[(2)]);
var inst_14217 = (inst_14216__$1 == null);
var inst_14218 = cljs.core.not.call(null,inst_14217);
var state_14252__$1 = (function (){var statearr_14257 = state_14252;
(statearr_14257[(9)] = inst_14216__$1);

return statearr_14257;
})();
if(inst_14218){
var statearr_14258_14289 = state_14252__$1;
(statearr_14258_14289[(1)] = (5));

} else {
var statearr_14259_14290 = state_14252__$1;
(statearr_14259_14290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (15))){
var inst_14242 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
var statearr_14260_14291 = state_14252__$1;
(statearr_14260_14291[(2)] = inst_14242);

(statearr_14260_14291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (13))){
var state_14252__$1 = state_14252;
var statearr_14261_14292 = state_14252__$1;
(statearr_14261_14292[(2)] = null);

(statearr_14261_14292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (6))){
var inst_14212 = (state_14252[(7)]);
var inst_14237 = inst_14212.length;
var inst_14238 = (inst_14237 > (0));
var state_14252__$1 = state_14252;
if(cljs.core.truth_(inst_14238)){
var statearr_14262_14293 = state_14252__$1;
(statearr_14262_14293[(1)] = (12));

} else {
var statearr_14263_14294 = state_14252__$1;
(statearr_14263_14294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (3))){
var inst_14250 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14252__$1,inst_14250);
} else {
if((state_val_14253 === (12))){
var inst_14212 = (state_14252[(7)]);
var inst_14240 = cljs.core.vec.call(null,inst_14212);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14252__$1,(15),out,inst_14240);
} else {
if((state_val_14253 === (2))){
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14252__$1,(4),ch);
} else {
if((state_val_14253 === (11))){
var inst_14216 = (state_14252[(9)]);
var inst_14220 = (state_14252[(10)]);
var inst_14230 = (state_14252[(2)]);
var inst_14231 = [];
var inst_14232 = inst_14231.push(inst_14216);
var inst_14212 = inst_14231;
var inst_14213 = inst_14220;
var state_14252__$1 = (function (){var statearr_14264 = state_14252;
(statearr_14264[(11)] = inst_14232);

(statearr_14264[(7)] = inst_14212);

(statearr_14264[(12)] = inst_14230);

(statearr_14264[(8)] = inst_14213);

return statearr_14264;
})();
var statearr_14265_14295 = state_14252__$1;
(statearr_14265_14295[(2)] = null);

(statearr_14265_14295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (9))){
var inst_14212 = (state_14252[(7)]);
var inst_14228 = cljs.core.vec.call(null,inst_14212);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14252__$1,(11),out,inst_14228);
} else {
if((state_val_14253 === (5))){
var inst_14216 = (state_14252[(9)]);
var inst_14220 = (state_14252[(10)]);
var inst_14213 = (state_14252[(8)]);
var inst_14220__$1 = f.call(null,inst_14216);
var inst_14221 = cljs.core._EQ_.call(null,inst_14220__$1,inst_14213);
var inst_14222 = cljs.core.keyword_identical_QMARK_.call(null,inst_14213,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14223 = (inst_14221) || (inst_14222);
var state_14252__$1 = (function (){var statearr_14266 = state_14252;
(statearr_14266[(10)] = inst_14220__$1);

return statearr_14266;
})();
if(cljs.core.truth_(inst_14223)){
var statearr_14267_14296 = state_14252__$1;
(statearr_14267_14296[(1)] = (8));

} else {
var statearr_14268_14297 = state_14252__$1;
(statearr_14268_14297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (14))){
var inst_14245 = (state_14252[(2)]);
var inst_14246 = cljs.core.async.close_BANG_.call(null,out);
var state_14252__$1 = (function (){var statearr_14270 = state_14252;
(statearr_14270[(13)] = inst_14245);

return statearr_14270;
})();
var statearr_14271_14298 = state_14252__$1;
(statearr_14271_14298[(2)] = inst_14246);

(statearr_14271_14298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (10))){
var inst_14235 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
var statearr_14272_14299 = state_14252__$1;
(statearr_14272_14299[(2)] = inst_14235);

(statearr_14272_14299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (8))){
var inst_14216 = (state_14252[(9)]);
var inst_14220 = (state_14252[(10)]);
var inst_14212 = (state_14252[(7)]);
var inst_14225 = inst_14212.push(inst_14216);
var tmp14269 = inst_14212;
var inst_14212__$1 = tmp14269;
var inst_14213 = inst_14220;
var state_14252__$1 = (function (){var statearr_14273 = state_14252;
(statearr_14273[(14)] = inst_14225);

(statearr_14273[(7)] = inst_14212__$1);

(statearr_14273[(8)] = inst_14213);

return statearr_14273;
})();
var statearr_14274_14300 = state_14252__$1;
(statearr_14274_14300[(2)] = null);

(statearr_14274_14300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11475__auto___14286,out))
;
return ((function (switch__11363__auto__,c__11475__auto___14286,out){
return (function() {
var cljs$core$async$state_machine__11364__auto__ = null;
var cljs$core$async$state_machine__11364__auto____0 = (function (){
var statearr_14278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14278[(0)] = cljs$core$async$state_machine__11364__auto__);

(statearr_14278[(1)] = (1));

return statearr_14278;
});
var cljs$core$async$state_machine__11364__auto____1 = (function (state_14252){
while(true){
var ret_value__11365__auto__ = (function (){try{while(true){
var result__11366__auto__ = switch__11363__auto__.call(null,state_14252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11366__auto__;
}
break;
}
}catch (e14279){if((e14279 instanceof Object)){
var ex__11367__auto__ = e14279;
var statearr_14280_14301 = state_14252;
(statearr_14280_14301[(5)] = ex__11367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14302 = state_14252;
state_14252 = G__14302;
continue;
} else {
return ret_value__11365__auto__;
}
break;
}
});
cljs$core$async$state_machine__11364__auto__ = function(state_14252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11364__auto____1.call(this,state_14252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11364__auto____0;
cljs$core$async$state_machine__11364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11364__auto____1;
return cljs$core$async$state_machine__11364__auto__;
})()
;})(switch__11363__auto__,c__11475__auto___14286,out))
})();
var state__11477__auto__ = (function (){var statearr_14281 = f__11476__auto__.call(null);
(statearr_14281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___14286);

return statearr_14281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___14286,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map