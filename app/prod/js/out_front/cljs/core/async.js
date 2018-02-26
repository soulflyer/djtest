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
var args13215 = [];
var len__7923__auto___13221 = arguments.length;
var i__7924__auto___13222 = (0);
while(true){
if((i__7924__auto___13222 < len__7923__auto___13221)){
args13215.push((arguments[i__7924__auto___13222]));

var G__13223 = (i__7924__auto___13222 + (1));
i__7924__auto___13222 = G__13223;
continue;
} else {
}
break;
}

var G__13217 = args13215.length;
switch (G__13217) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13215.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13218 = (function (f,blockable,meta13219){
this.f = f;
this.blockable = blockable;
this.meta13219 = meta13219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13220,meta13219__$1){
var self__ = this;
var _13220__$1 = this;
return (new cljs.core.async.t_cljs$core$async13218(self__.f,self__.blockable,meta13219__$1));
});

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13220){
var self__ = this;
var _13220__$1 = this;
return self__.meta13219;
});

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13219","meta13219",-2067219844,null)], null);
});

cljs.core.async.t_cljs$core$async13218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13218";

cljs.core.async.t_cljs$core$async13218.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13218");
});

cljs.core.async.__GT_t_cljs$core$async13218 = (function cljs$core$async$__GT_t_cljs$core$async13218(f__$1,blockable__$1,meta13219){
return (new cljs.core.async.t_cljs$core$async13218(f__$1,blockable__$1,meta13219));
});

}

return (new cljs.core.async.t_cljs$core$async13218(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13227 = [];
var len__7923__auto___13230 = arguments.length;
var i__7924__auto___13231 = (0);
while(true){
if((i__7924__auto___13231 < len__7923__auto___13230)){
args13227.push((arguments[i__7924__auto___13231]));

var G__13232 = (i__7924__auto___13231 + (1));
i__7924__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var G__13229 = args13227.length;
switch (G__13229) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13227.length)].join('')));

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
var args13234 = [];
var len__7923__auto___13237 = arguments.length;
var i__7924__auto___13238 = (0);
while(true){
if((i__7924__auto___13238 < len__7923__auto___13237)){
args13234.push((arguments[i__7924__auto___13238]));

var G__13239 = (i__7924__auto___13238 + (1));
i__7924__auto___13238 = G__13239;
continue;
} else {
}
break;
}

var G__13236 = args13234.length;
switch (G__13236) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13234.length)].join('')));

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
var args13241 = [];
var len__7923__auto___13244 = arguments.length;
var i__7924__auto___13245 = (0);
while(true){
if((i__7924__auto___13245 < len__7923__auto___13244)){
args13241.push((arguments[i__7924__auto___13245]));

var G__13246 = (i__7924__auto___13245 + (1));
i__7924__auto___13245 = G__13246;
continue;
} else {
}
break;
}

var G__13243 = args13241.length;
switch (G__13243) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13241.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13248 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13248);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13248,ret){
return (function (){
return fn1.call(null,val_13248);
});})(val_13248,ret))
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
var args13249 = [];
var len__7923__auto___13252 = arguments.length;
var i__7924__auto___13253 = (0);
while(true){
if((i__7924__auto___13253 < len__7923__auto___13252)){
args13249.push((arguments[i__7924__auto___13253]));

var G__13254 = (i__7924__auto___13253 + (1));
i__7924__auto___13253 = G__13254;
continue;
} else {
}
break;
}

var G__13251 = args13249.length;
switch (G__13251) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13249.length)].join('')));

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
var n__7737__auto___13256 = n;
var x_13257 = (0);
while(true){
if((x_13257 < n__7737__auto___13256)){
(a[x_13257] = (0));

var G__13258 = (x_13257 + (1));
x_13257 = G__13258;
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

var G__13259 = (i + (1));
i = G__13259;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13263 = (function (flag,meta13264){
this.flag = flag;
this.meta13264 = meta13264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13265,meta13264__$1){
var self__ = this;
var _13265__$1 = this;
return (new cljs.core.async.t_cljs$core$async13263(self__.flag,meta13264__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13265){
var self__ = this;
var _13265__$1 = this;
return self__.meta13264;
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13264","meta13264",544751762,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13263";

cljs.core.async.t_cljs$core$async13263.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13263");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13263 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13263(flag__$1,meta13264){
return (new cljs.core.async.t_cljs$core$async13263(flag__$1,meta13264));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13263(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13269 = (function (flag,cb,meta13270){
this.flag = flag;
this.cb = cb;
this.meta13270 = meta13270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13271,meta13270__$1){
var self__ = this;
var _13271__$1 = this;
return (new cljs.core.async.t_cljs$core$async13269(self__.flag,self__.cb,meta13270__$1));
});

cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13271){
var self__ = this;
var _13271__$1 = this;
return self__.meta13270;
});

cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13270","meta13270",951534577,null)], null);
});

cljs.core.async.t_cljs$core$async13269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13269";

cljs.core.async.t_cljs$core$async13269.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async13269");
});

cljs.core.async.__GT_t_cljs$core$async13269 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13269(flag__$1,cb__$1,meta13270){
return (new cljs.core.async.t_cljs$core$async13269(flag__$1,cb__$1,meta13270));
});

}

return (new cljs.core.async.t_cljs$core$async13269(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13272_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13272_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13273_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13273_SHARP_,port], null));
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
var G__13274 = (i + (1));
i = G__13274;
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
var len__7923__auto___13280 = arguments.length;
var i__7924__auto___13281 = (0);
while(true){
if((i__7924__auto___13281 < len__7923__auto___13280)){
args__7930__auto__.push((arguments[i__7924__auto___13281]));

var G__13282 = (i__7924__auto___13281 + (1));
i__7924__auto___13281 = G__13282;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((1) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13277){
var map__13278 = p__13277;
var map__13278__$1 = ((((!((map__13278 == null)))?((((map__13278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13278):map__13278);
var opts = map__13278__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13275){
var G__13276 = cljs.core.first.call(null,seq13275);
var seq13275__$1 = cljs.core.next.call(null,seq13275);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13276,seq13275__$1);
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
var args13283 = [];
var len__7923__auto___13333 = arguments.length;
var i__7924__auto___13334 = (0);
while(true){
if((i__7924__auto___13334 < len__7923__auto___13333)){
args13283.push((arguments[i__7924__auto___13334]));

var G__13335 = (i__7924__auto___13334 + (1));
i__7924__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var G__13285 = args13283.length;
switch (G__13285) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13283.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9866__auto___13337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___13337){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___13337){
return (function (state_13309){
var state_val_13310 = (state_13309[(1)]);
if((state_val_13310 === (7))){
var inst_13305 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13311_13338 = state_13309__$1;
(statearr_13311_13338[(2)] = inst_13305);

(statearr_13311_13338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (1))){
var state_13309__$1 = state_13309;
var statearr_13312_13339 = state_13309__$1;
(statearr_13312_13339[(2)] = null);

(statearr_13312_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (4))){
var inst_13288 = (state_13309[(7)]);
var inst_13288__$1 = (state_13309[(2)]);
var inst_13289 = (inst_13288__$1 == null);
var state_13309__$1 = (function (){var statearr_13313 = state_13309;
(statearr_13313[(7)] = inst_13288__$1);

return statearr_13313;
})();
if(cljs.core.truth_(inst_13289)){
var statearr_13314_13340 = state_13309__$1;
(statearr_13314_13340[(1)] = (5));

} else {
var statearr_13315_13341 = state_13309__$1;
(statearr_13315_13341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (13))){
var state_13309__$1 = state_13309;
var statearr_13316_13342 = state_13309__$1;
(statearr_13316_13342[(2)] = null);

(statearr_13316_13342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (6))){
var inst_13288 = (state_13309[(7)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13309__$1,(11),to,inst_13288);
} else {
if((state_val_13310 === (3))){
var inst_13307 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13309__$1,inst_13307);
} else {
if((state_val_13310 === (12))){
var state_13309__$1 = state_13309;
var statearr_13317_13343 = state_13309__$1;
(statearr_13317_13343[(2)] = null);

(statearr_13317_13343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (2))){
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13309__$1,(4),from);
} else {
if((state_val_13310 === (11))){
var inst_13298 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
if(cljs.core.truth_(inst_13298)){
var statearr_13318_13344 = state_13309__$1;
(statearr_13318_13344[(1)] = (12));

} else {
var statearr_13319_13345 = state_13309__$1;
(statearr_13319_13345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (9))){
var state_13309__$1 = state_13309;
var statearr_13320_13346 = state_13309__$1;
(statearr_13320_13346[(2)] = null);

(statearr_13320_13346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (5))){
var state_13309__$1 = state_13309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13321_13347 = state_13309__$1;
(statearr_13321_13347[(1)] = (8));

} else {
var statearr_13322_13348 = state_13309__$1;
(statearr_13322_13348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (14))){
var inst_13303 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13323_13349 = state_13309__$1;
(statearr_13323_13349[(2)] = inst_13303);

(statearr_13323_13349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (10))){
var inst_13295 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13324_13350 = state_13309__$1;
(statearr_13324_13350[(2)] = inst_13295);

(statearr_13324_13350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (8))){
var inst_13292 = cljs.core.async.close_BANG_.call(null,to);
var state_13309__$1 = state_13309;
var statearr_13325_13351 = state_13309__$1;
(statearr_13325_13351[(2)] = inst_13292);

(statearr_13325_13351[(1)] = (10));


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
});})(c__9866__auto___13337))
;
return ((function (switch__9845__auto__,c__9866__auto___13337){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_13329 = [null,null,null,null,null,null,null,null];
(statearr_13329[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_13329[(1)] = (1));

return statearr_13329;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_13309){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13330){if((e13330 instanceof Object)){
var ex__9849__auto__ = e13330;
var statearr_13331_13352 = state_13309;
(statearr_13331_13352[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13353 = state_13309;
state_13309 = G__13353;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_13309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_13309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___13337))
})();
var state__9868__auto__ = (function (){var statearr_13332 = f__9867__auto__.call(null);
(statearr_13332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13337);

return statearr_13332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___13337))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13541){
var vec__13542 = p__13541;
var v = cljs.core.nth.call(null,vec__13542,(0),null);
var p = cljs.core.nth.call(null,vec__13542,(1),null);
var job = vec__13542;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9866__auto___13728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results){
return (function (state_13549){
var state_val_13550 = (state_13549[(1)]);
if((state_val_13550 === (1))){
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13549__$1,(2),res,v);
} else {
if((state_val_13550 === (2))){
var inst_13546 = (state_13549[(2)]);
var inst_13547 = cljs.core.async.close_BANG_.call(null,res);
var state_13549__$1 = (function (){var statearr_13551 = state_13549;
(statearr_13551[(7)] = inst_13546);

return statearr_13551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13549__$1,inst_13547);
} else {
return null;
}
}
});})(c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results))
;
return ((function (switch__9845__auto__,c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_13555 = [null,null,null,null,null,null,null,null];
(statearr_13555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__);

(statearr_13555[(1)] = (1));

return statearr_13555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1 = (function (state_13549){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13556){if((e13556 instanceof Object)){
var ex__9849__auto__ = e13556;
var statearr_13557_13729 = state_13549;
(statearr_13557_13729[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13730 = state_13549;
state_13549 = G__13730;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = function(state_13549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1.call(this,state_13549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results))
})();
var state__9868__auto__ = (function (){var statearr_13558 = f__9867__auto__.call(null);
(statearr_13558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13728);

return statearr_13558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___13728,res,vec__13542,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13559){
var vec__13560 = p__13559;
var v = cljs.core.nth.call(null,vec__13560,(0),null);
var p = cljs.core.nth.call(null,vec__13560,(1),null);
var job = vec__13560;
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
var n__7737__auto___13731 = n;
var __13732 = (0);
while(true){
if((__13732 < n__7737__auto___13731)){
var G__13563_13733 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13563_13733) {
case "compute":
var c__9866__auto___13735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13732,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (__13732,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function (state_13576){
var state_val_13577 = (state_13576[(1)]);
if((state_val_13577 === (1))){
var state_13576__$1 = state_13576;
var statearr_13578_13736 = state_13576__$1;
(statearr_13578_13736[(2)] = null);

(statearr_13578_13736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13577 === (2))){
var state_13576__$1 = state_13576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13576__$1,(4),jobs);
} else {
if((state_val_13577 === (3))){
var inst_13574 = (state_13576[(2)]);
var state_13576__$1 = state_13576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13576__$1,inst_13574);
} else {
if((state_val_13577 === (4))){
var inst_13566 = (state_13576[(2)]);
var inst_13567 = process.call(null,inst_13566);
var state_13576__$1 = state_13576;
if(cljs.core.truth_(inst_13567)){
var statearr_13579_13737 = state_13576__$1;
(statearr_13579_13737[(1)] = (5));

} else {
var statearr_13580_13738 = state_13576__$1;
(statearr_13580_13738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13577 === (5))){
var state_13576__$1 = state_13576;
var statearr_13581_13739 = state_13576__$1;
(statearr_13581_13739[(2)] = null);

(statearr_13581_13739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13577 === (6))){
var state_13576__$1 = state_13576;
var statearr_13582_13740 = state_13576__$1;
(statearr_13582_13740[(2)] = null);

(statearr_13582_13740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13577 === (7))){
var inst_13572 = (state_13576[(2)]);
var state_13576__$1 = state_13576;
var statearr_13583_13741 = state_13576__$1;
(statearr_13583_13741[(2)] = inst_13572);

(statearr_13583_13741[(1)] = (3));


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
});})(__13732,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
;
return ((function (__13732,switch__9845__auto__,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_13587 = [null,null,null,null,null,null,null];
(statearr_13587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__);

(statearr_13587[(1)] = (1));

return statearr_13587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1 = (function (state_13576){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13588){if((e13588 instanceof Object)){
var ex__9849__auto__ = e13588;
var statearr_13589_13742 = state_13576;
(statearr_13589_13742[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13743 = state_13576;
state_13576 = G__13743;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = function(state_13576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1.call(this,state_13576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__;
})()
;})(__13732,switch__9845__auto__,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
})();
var state__9868__auto__ = (function (){var statearr_13590 = f__9867__auto__.call(null);
(statearr_13590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13735);

return statearr_13590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(__13732,c__9866__auto___13735,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
);


break;
case "async":
var c__9866__auto___13744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13732,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (__13732,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function (state_13603){
var state_val_13604 = (state_13603[(1)]);
if((state_val_13604 === (1))){
var state_13603__$1 = state_13603;
var statearr_13605_13745 = state_13603__$1;
(statearr_13605_13745[(2)] = null);

(statearr_13605_13745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (2))){
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13603__$1,(4),jobs);
} else {
if((state_val_13604 === (3))){
var inst_13601 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13603__$1,inst_13601);
} else {
if((state_val_13604 === (4))){
var inst_13593 = (state_13603[(2)]);
var inst_13594 = async.call(null,inst_13593);
var state_13603__$1 = state_13603;
if(cljs.core.truth_(inst_13594)){
var statearr_13606_13746 = state_13603__$1;
(statearr_13606_13746[(1)] = (5));

} else {
var statearr_13607_13747 = state_13603__$1;
(statearr_13607_13747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (5))){
var state_13603__$1 = state_13603;
var statearr_13608_13748 = state_13603__$1;
(statearr_13608_13748[(2)] = null);

(statearr_13608_13748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (6))){
var state_13603__$1 = state_13603;
var statearr_13609_13749 = state_13603__$1;
(statearr_13609_13749[(2)] = null);

(statearr_13609_13749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (7))){
var inst_13599 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13610_13750 = state_13603__$1;
(statearr_13610_13750[(2)] = inst_13599);

(statearr_13610_13750[(1)] = (3));


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
});})(__13732,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
;
return ((function (__13732,switch__9845__auto__,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_13614 = [null,null,null,null,null,null,null];
(statearr_13614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__);

(statearr_13614[(1)] = (1));

return statearr_13614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1 = (function (state_13603){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13615){if((e13615 instanceof Object)){
var ex__9849__auto__ = e13615;
var statearr_13616_13751 = state_13603;
(statearr_13616_13751[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13752 = state_13603;
state_13603 = G__13752;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = function(state_13603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1.call(this,state_13603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__;
})()
;})(__13732,switch__9845__auto__,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
})();
var state__9868__auto__ = (function (){var statearr_13617 = f__9867__auto__.call(null);
(statearr_13617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13744);

return statearr_13617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(__13732,c__9866__auto___13744,G__13563_13733,n__7737__auto___13731,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__13753 = (__13732 + (1));
__13732 = G__13753;
continue;
} else {
}
break;
}

var c__9866__auto___13754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___13754,jobs,results,process,async){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___13754,jobs,results,process,async){
return (function (state_13639){
var state_val_13640 = (state_13639[(1)]);
if((state_val_13640 === (1))){
var state_13639__$1 = state_13639;
var statearr_13641_13755 = state_13639__$1;
(statearr_13641_13755[(2)] = null);

(statearr_13641_13755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (2))){
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13639__$1,(4),from);
} else {
if((state_val_13640 === (3))){
var inst_13637 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13639__$1,inst_13637);
} else {
if((state_val_13640 === (4))){
var inst_13620 = (state_13639[(7)]);
var inst_13620__$1 = (state_13639[(2)]);
var inst_13621 = (inst_13620__$1 == null);
var state_13639__$1 = (function (){var statearr_13642 = state_13639;
(statearr_13642[(7)] = inst_13620__$1);

return statearr_13642;
})();
if(cljs.core.truth_(inst_13621)){
var statearr_13643_13756 = state_13639__$1;
(statearr_13643_13756[(1)] = (5));

} else {
var statearr_13644_13757 = state_13639__$1;
(statearr_13644_13757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (5))){
var inst_13623 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13639__$1 = state_13639;
var statearr_13645_13758 = state_13639__$1;
(statearr_13645_13758[(2)] = inst_13623);

(statearr_13645_13758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (6))){
var inst_13625 = (state_13639[(8)]);
var inst_13620 = (state_13639[(7)]);
var inst_13625__$1 = cljs.core.async.chan.call(null,(1));
var inst_13626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13627 = [inst_13620,inst_13625__$1];
var inst_13628 = (new cljs.core.PersistentVector(null,2,(5),inst_13626,inst_13627,null));
var state_13639__$1 = (function (){var statearr_13646 = state_13639;
(statearr_13646[(8)] = inst_13625__$1);

return statearr_13646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13639__$1,(8),jobs,inst_13628);
} else {
if((state_val_13640 === (7))){
var inst_13635 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
var statearr_13647_13759 = state_13639__$1;
(statearr_13647_13759[(2)] = inst_13635);

(statearr_13647_13759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (8))){
var inst_13625 = (state_13639[(8)]);
var inst_13630 = (state_13639[(2)]);
var state_13639__$1 = (function (){var statearr_13648 = state_13639;
(statearr_13648[(9)] = inst_13630);

return statearr_13648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13639__$1,(9),results,inst_13625);
} else {
if((state_val_13640 === (9))){
var inst_13632 = (state_13639[(2)]);
var state_13639__$1 = (function (){var statearr_13649 = state_13639;
(statearr_13649[(10)] = inst_13632);

return statearr_13649;
})();
var statearr_13650_13760 = state_13639__$1;
(statearr_13650_13760[(2)] = null);

(statearr_13650_13760[(1)] = (2));


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
});})(c__9866__auto___13754,jobs,results,process,async))
;
return ((function (switch__9845__auto__,c__9866__auto___13754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_13654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__);

(statearr_13654[(1)] = (1));

return statearr_13654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1 = (function (state_13639){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13655){if((e13655 instanceof Object)){
var ex__9849__auto__ = e13655;
var statearr_13656_13761 = state_13639;
(statearr_13656_13761[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13762 = state_13639;
state_13639 = G__13762;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = function(state_13639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1.call(this,state_13639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___13754,jobs,results,process,async))
})();
var state__9868__auto__ = (function (){var statearr_13657 = f__9867__auto__.call(null);
(statearr_13657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13754);

return statearr_13657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___13754,jobs,results,process,async))
);


var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__,jobs,results,process,async){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__,jobs,results,process,async){
return (function (state_13695){
var state_val_13696 = (state_13695[(1)]);
if((state_val_13696 === (7))){
var inst_13691 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13697_13763 = state_13695__$1;
(statearr_13697_13763[(2)] = inst_13691);

(statearr_13697_13763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (20))){
var state_13695__$1 = state_13695;
var statearr_13698_13764 = state_13695__$1;
(statearr_13698_13764[(2)] = null);

(statearr_13698_13764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (1))){
var state_13695__$1 = state_13695;
var statearr_13699_13765 = state_13695__$1;
(statearr_13699_13765[(2)] = null);

(statearr_13699_13765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (4))){
var inst_13660 = (state_13695[(7)]);
var inst_13660__$1 = (state_13695[(2)]);
var inst_13661 = (inst_13660__$1 == null);
var state_13695__$1 = (function (){var statearr_13700 = state_13695;
(statearr_13700[(7)] = inst_13660__$1);

return statearr_13700;
})();
if(cljs.core.truth_(inst_13661)){
var statearr_13701_13766 = state_13695__$1;
(statearr_13701_13766[(1)] = (5));

} else {
var statearr_13702_13767 = state_13695__$1;
(statearr_13702_13767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (15))){
var inst_13673 = (state_13695[(8)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13695__$1,(18),to,inst_13673);
} else {
if((state_val_13696 === (21))){
var inst_13686 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13703_13768 = state_13695__$1;
(statearr_13703_13768[(2)] = inst_13686);

(statearr_13703_13768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (13))){
var inst_13688 = (state_13695[(2)]);
var state_13695__$1 = (function (){var statearr_13704 = state_13695;
(statearr_13704[(9)] = inst_13688);

return statearr_13704;
})();
var statearr_13705_13769 = state_13695__$1;
(statearr_13705_13769[(2)] = null);

(statearr_13705_13769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (6))){
var inst_13660 = (state_13695[(7)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13695__$1,(11),inst_13660);
} else {
if((state_val_13696 === (17))){
var inst_13681 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
if(cljs.core.truth_(inst_13681)){
var statearr_13706_13770 = state_13695__$1;
(statearr_13706_13770[(1)] = (19));

} else {
var statearr_13707_13771 = state_13695__$1;
(statearr_13707_13771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (3))){
var inst_13693 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13695__$1,inst_13693);
} else {
if((state_val_13696 === (12))){
var inst_13670 = (state_13695[(10)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13695__$1,(14),inst_13670);
} else {
if((state_val_13696 === (2))){
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13695__$1,(4),results);
} else {
if((state_val_13696 === (19))){
var state_13695__$1 = state_13695;
var statearr_13708_13772 = state_13695__$1;
(statearr_13708_13772[(2)] = null);

(statearr_13708_13772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (11))){
var inst_13670 = (state_13695[(2)]);
var state_13695__$1 = (function (){var statearr_13709 = state_13695;
(statearr_13709[(10)] = inst_13670);

return statearr_13709;
})();
var statearr_13710_13773 = state_13695__$1;
(statearr_13710_13773[(2)] = null);

(statearr_13710_13773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (9))){
var state_13695__$1 = state_13695;
var statearr_13711_13774 = state_13695__$1;
(statearr_13711_13774[(2)] = null);

(statearr_13711_13774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (5))){
var state_13695__$1 = state_13695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13712_13775 = state_13695__$1;
(statearr_13712_13775[(1)] = (8));

} else {
var statearr_13713_13776 = state_13695__$1;
(statearr_13713_13776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (14))){
var inst_13673 = (state_13695[(8)]);
var inst_13675 = (state_13695[(11)]);
var inst_13673__$1 = (state_13695[(2)]);
var inst_13674 = (inst_13673__$1 == null);
var inst_13675__$1 = cljs.core.not.call(null,inst_13674);
var state_13695__$1 = (function (){var statearr_13714 = state_13695;
(statearr_13714[(8)] = inst_13673__$1);

(statearr_13714[(11)] = inst_13675__$1);

return statearr_13714;
})();
if(inst_13675__$1){
var statearr_13715_13777 = state_13695__$1;
(statearr_13715_13777[(1)] = (15));

} else {
var statearr_13716_13778 = state_13695__$1;
(statearr_13716_13778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (16))){
var inst_13675 = (state_13695[(11)]);
var state_13695__$1 = state_13695;
var statearr_13717_13779 = state_13695__$1;
(statearr_13717_13779[(2)] = inst_13675);

(statearr_13717_13779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (10))){
var inst_13667 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13718_13780 = state_13695__$1;
(statearr_13718_13780[(2)] = inst_13667);

(statearr_13718_13780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (18))){
var inst_13678 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
var statearr_13719_13781 = state_13695__$1;
(statearr_13719_13781[(2)] = inst_13678);

(statearr_13719_13781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13696 === (8))){
var inst_13664 = cljs.core.async.close_BANG_.call(null,to);
var state_13695__$1 = state_13695;
var statearr_13720_13782 = state_13695__$1;
(statearr_13720_13782[(2)] = inst_13664);

(statearr_13720_13782[(1)] = (10));


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
});})(c__9866__auto__,jobs,results,process,async))
;
return ((function (switch__9845__auto__,c__9866__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_13724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__);

(statearr_13724[(1)] = (1));

return statearr_13724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1 = (function (state_13695){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13725){if((e13725 instanceof Object)){
var ex__9849__auto__ = e13725;
var statearr_13726_13783 = state_13695;
(statearr_13726_13783[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13784 = state_13695;
state_13695 = G__13784;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__ = function(state_13695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1.call(this,state_13695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__,jobs,results,process,async))
})();
var state__9868__auto__ = (function (){var statearr_13727 = f__9867__auto__.call(null);
(statearr_13727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_13727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__,jobs,results,process,async))
);

return c__9866__auto__;
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
var args13785 = [];
var len__7923__auto___13788 = arguments.length;
var i__7924__auto___13789 = (0);
while(true){
if((i__7924__auto___13789 < len__7923__auto___13788)){
args13785.push((arguments[i__7924__auto___13789]));

var G__13790 = (i__7924__auto___13789 + (1));
i__7924__auto___13789 = G__13790;
continue;
} else {
}
break;
}

var G__13787 = args13785.length;
switch (G__13787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13785.length)].join('')));

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
var args13792 = [];
var len__7923__auto___13795 = arguments.length;
var i__7924__auto___13796 = (0);
while(true){
if((i__7924__auto___13796 < len__7923__auto___13795)){
args13792.push((arguments[i__7924__auto___13796]));

var G__13797 = (i__7924__auto___13796 + (1));
i__7924__auto___13796 = G__13797;
continue;
} else {
}
break;
}

var G__13794 = args13792.length;
switch (G__13794) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13792.length)].join('')));

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
var args13799 = [];
var len__7923__auto___13852 = arguments.length;
var i__7924__auto___13853 = (0);
while(true){
if((i__7924__auto___13853 < len__7923__auto___13852)){
args13799.push((arguments[i__7924__auto___13853]));

var G__13854 = (i__7924__auto___13853 + (1));
i__7924__auto___13853 = G__13854;
continue;
} else {
}
break;
}

var G__13801 = args13799.length;
switch (G__13801) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13799.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9866__auto___13856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___13856,tc,fc){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___13856,tc,fc){
return (function (state_13827){
var state_val_13828 = (state_13827[(1)]);
if((state_val_13828 === (7))){
var inst_13823 = (state_13827[(2)]);
var state_13827__$1 = state_13827;
var statearr_13829_13857 = state_13827__$1;
(statearr_13829_13857[(2)] = inst_13823);

(statearr_13829_13857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (1))){
var state_13827__$1 = state_13827;
var statearr_13830_13858 = state_13827__$1;
(statearr_13830_13858[(2)] = null);

(statearr_13830_13858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (4))){
var inst_13804 = (state_13827[(7)]);
var inst_13804__$1 = (state_13827[(2)]);
var inst_13805 = (inst_13804__$1 == null);
var state_13827__$1 = (function (){var statearr_13831 = state_13827;
(statearr_13831[(7)] = inst_13804__$1);

return statearr_13831;
})();
if(cljs.core.truth_(inst_13805)){
var statearr_13832_13859 = state_13827__$1;
(statearr_13832_13859[(1)] = (5));

} else {
var statearr_13833_13860 = state_13827__$1;
(statearr_13833_13860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (13))){
var state_13827__$1 = state_13827;
var statearr_13834_13861 = state_13827__$1;
(statearr_13834_13861[(2)] = null);

(statearr_13834_13861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (6))){
var inst_13804 = (state_13827[(7)]);
var inst_13810 = p.call(null,inst_13804);
var state_13827__$1 = state_13827;
if(cljs.core.truth_(inst_13810)){
var statearr_13835_13862 = state_13827__$1;
(statearr_13835_13862[(1)] = (9));

} else {
var statearr_13836_13863 = state_13827__$1;
(statearr_13836_13863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (3))){
var inst_13825 = (state_13827[(2)]);
var state_13827__$1 = state_13827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13827__$1,inst_13825);
} else {
if((state_val_13828 === (12))){
var state_13827__$1 = state_13827;
var statearr_13837_13864 = state_13827__$1;
(statearr_13837_13864[(2)] = null);

(statearr_13837_13864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (2))){
var state_13827__$1 = state_13827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13827__$1,(4),ch);
} else {
if((state_val_13828 === (11))){
var inst_13804 = (state_13827[(7)]);
var inst_13814 = (state_13827[(2)]);
var state_13827__$1 = state_13827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13827__$1,(8),inst_13814,inst_13804);
} else {
if((state_val_13828 === (9))){
var state_13827__$1 = state_13827;
var statearr_13838_13865 = state_13827__$1;
(statearr_13838_13865[(2)] = tc);

(statearr_13838_13865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (5))){
var inst_13807 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13808 = cljs.core.async.close_BANG_.call(null,fc);
var state_13827__$1 = (function (){var statearr_13839 = state_13827;
(statearr_13839[(8)] = inst_13807);

return statearr_13839;
})();
var statearr_13840_13866 = state_13827__$1;
(statearr_13840_13866[(2)] = inst_13808);

(statearr_13840_13866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (14))){
var inst_13821 = (state_13827[(2)]);
var state_13827__$1 = state_13827;
var statearr_13841_13867 = state_13827__$1;
(statearr_13841_13867[(2)] = inst_13821);

(statearr_13841_13867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (10))){
var state_13827__$1 = state_13827;
var statearr_13842_13868 = state_13827__$1;
(statearr_13842_13868[(2)] = fc);

(statearr_13842_13868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13828 === (8))){
var inst_13816 = (state_13827[(2)]);
var state_13827__$1 = state_13827;
if(cljs.core.truth_(inst_13816)){
var statearr_13843_13869 = state_13827__$1;
(statearr_13843_13869[(1)] = (12));

} else {
var statearr_13844_13870 = state_13827__$1;
(statearr_13844_13870[(1)] = (13));

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
});})(c__9866__auto___13856,tc,fc))
;
return ((function (switch__9845__auto__,c__9866__auto___13856,tc,fc){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_13848 = [null,null,null,null,null,null,null,null,null];
(statearr_13848[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_13848[(1)] = (1));

return statearr_13848;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_13827){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13849){if((e13849 instanceof Object)){
var ex__9849__auto__ = e13849;
var statearr_13850_13871 = state_13827;
(statearr_13850_13871[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13872 = state_13827;
state_13827 = G__13872;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_13827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_13827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___13856,tc,fc))
})();
var state__9868__auto__ = (function (){var statearr_13851 = f__9867__auto__.call(null);
(statearr_13851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___13856);

return statearr_13851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___13856,tc,fc))
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
var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__){
return (function (state_13936){
var state_val_13937 = (state_13936[(1)]);
if((state_val_13937 === (7))){
var inst_13932 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13938_13959 = state_13936__$1;
(statearr_13938_13959[(2)] = inst_13932);

(statearr_13938_13959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (1))){
var inst_13916 = init;
var state_13936__$1 = (function (){var statearr_13939 = state_13936;
(statearr_13939[(7)] = inst_13916);

return statearr_13939;
})();
var statearr_13940_13960 = state_13936__$1;
(statearr_13940_13960[(2)] = null);

(statearr_13940_13960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (4))){
var inst_13919 = (state_13936[(8)]);
var inst_13919__$1 = (state_13936[(2)]);
var inst_13920 = (inst_13919__$1 == null);
var state_13936__$1 = (function (){var statearr_13941 = state_13936;
(statearr_13941[(8)] = inst_13919__$1);

return statearr_13941;
})();
if(cljs.core.truth_(inst_13920)){
var statearr_13942_13961 = state_13936__$1;
(statearr_13942_13961[(1)] = (5));

} else {
var statearr_13943_13962 = state_13936__$1;
(statearr_13943_13962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (6))){
var inst_13923 = (state_13936[(9)]);
var inst_13919 = (state_13936[(8)]);
var inst_13916 = (state_13936[(7)]);
var inst_13923__$1 = f.call(null,inst_13916,inst_13919);
var inst_13924 = cljs.core.reduced_QMARK_.call(null,inst_13923__$1);
var state_13936__$1 = (function (){var statearr_13944 = state_13936;
(statearr_13944[(9)] = inst_13923__$1);

return statearr_13944;
})();
if(inst_13924){
var statearr_13945_13963 = state_13936__$1;
(statearr_13945_13963[(1)] = (8));

} else {
var statearr_13946_13964 = state_13936__$1;
(statearr_13946_13964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (3))){
var inst_13934 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13936__$1,inst_13934);
} else {
if((state_val_13937 === (2))){
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13936__$1,(4),ch);
} else {
if((state_val_13937 === (9))){
var inst_13923 = (state_13936[(9)]);
var inst_13916 = inst_13923;
var state_13936__$1 = (function (){var statearr_13947 = state_13936;
(statearr_13947[(7)] = inst_13916);

return statearr_13947;
})();
var statearr_13948_13965 = state_13936__$1;
(statearr_13948_13965[(2)] = null);

(statearr_13948_13965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (5))){
var inst_13916 = (state_13936[(7)]);
var state_13936__$1 = state_13936;
var statearr_13949_13966 = state_13936__$1;
(statearr_13949_13966[(2)] = inst_13916);

(statearr_13949_13966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (10))){
var inst_13930 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13950_13967 = state_13936__$1;
(statearr_13950_13967[(2)] = inst_13930);

(statearr_13950_13967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (8))){
var inst_13923 = (state_13936[(9)]);
var inst_13926 = cljs.core.deref.call(null,inst_13923);
var state_13936__$1 = state_13936;
var statearr_13951_13968 = state_13936__$1;
(statearr_13951_13968[(2)] = inst_13926);

(statearr_13951_13968[(1)] = (10));


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
});})(c__9866__auto__))
;
return ((function (switch__9845__auto__,c__9866__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9846__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9846__auto____0 = (function (){
var statearr_13955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13955[(0)] = cljs$core$async$reduce_$_state_machine__9846__auto__);

(statearr_13955[(1)] = (1));

return statearr_13955;
});
var cljs$core$async$reduce_$_state_machine__9846__auto____1 = (function (state_13936){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13956){if((e13956 instanceof Object)){
var ex__9849__auto__ = e13956;
var statearr_13957_13969 = state_13936;
(statearr_13957_13969[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13970 = state_13936;
state_13936 = G__13970;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9846__auto__ = function(state_13936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9846__auto____1.call(this,state_13936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9846__auto____0;
cljs$core$async$reduce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9846__auto____1;
return cljs$core$async$reduce_$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__))
})();
var state__9868__auto__ = (function (){var statearr_13958 = f__9867__auto__.call(null);
(statearr_13958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_13958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__))
);

return c__9866__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__,f__$1){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__,f__$1){
return (function (state_13990){
var state_val_13991 = (state_13990[(1)]);
if((state_val_13991 === (1))){
var inst_13985 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13990__$1 = state_13990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13990__$1,(2),inst_13985);
} else {
if((state_val_13991 === (2))){
var inst_13987 = (state_13990[(2)]);
var inst_13988 = f__$1.call(null,inst_13987);
var state_13990__$1 = state_13990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13990__$1,inst_13988);
} else {
return null;
}
}
});})(c__9866__auto__,f__$1))
;
return ((function (switch__9845__auto__,c__9866__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9846__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9846__auto____0 = (function (){
var statearr_13995 = [null,null,null,null,null,null,null];
(statearr_13995[(0)] = cljs$core$async$transduce_$_state_machine__9846__auto__);

(statearr_13995[(1)] = (1));

return statearr_13995;
});
var cljs$core$async$transduce_$_state_machine__9846__auto____1 = (function (state_13990){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_13990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e13996){if((e13996 instanceof Object)){
var ex__9849__auto__ = e13996;
var statearr_13997_13999 = state_13990;
(statearr_13997_13999[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14000 = state_13990;
state_13990 = G__14000;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9846__auto__ = function(state_13990){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9846__auto____1.call(this,state_13990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9846__auto____0;
cljs$core$async$transduce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9846__auto____1;
return cljs$core$async$transduce_$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__,f__$1))
})();
var state__9868__auto__ = (function (){var statearr_13998 = f__9867__auto__.call(null);
(statearr_13998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_13998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__,f__$1))
);

return c__9866__auto__;
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
var args14001 = [];
var len__7923__auto___14053 = arguments.length;
var i__7924__auto___14054 = (0);
while(true){
if((i__7924__auto___14054 < len__7923__auto___14053)){
args14001.push((arguments[i__7924__auto___14054]));

var G__14055 = (i__7924__auto___14054 + (1));
i__7924__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var G__14003 = args14001.length;
switch (G__14003) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14001.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__){
return (function (state_14028){
var state_val_14029 = (state_14028[(1)]);
if((state_val_14029 === (7))){
var inst_14010 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14030_14057 = state_14028__$1;
(statearr_14030_14057[(2)] = inst_14010);

(statearr_14030_14057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (1))){
var inst_14004 = cljs.core.seq.call(null,coll);
var inst_14005 = inst_14004;
var state_14028__$1 = (function (){var statearr_14031 = state_14028;
(statearr_14031[(7)] = inst_14005);

return statearr_14031;
})();
var statearr_14032_14058 = state_14028__$1;
(statearr_14032_14058[(2)] = null);

(statearr_14032_14058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (4))){
var inst_14005 = (state_14028[(7)]);
var inst_14008 = cljs.core.first.call(null,inst_14005);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14028__$1,(7),ch,inst_14008);
} else {
if((state_val_14029 === (13))){
var inst_14022 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14033_14059 = state_14028__$1;
(statearr_14033_14059[(2)] = inst_14022);

(statearr_14033_14059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (6))){
var inst_14013 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
if(cljs.core.truth_(inst_14013)){
var statearr_14034_14060 = state_14028__$1;
(statearr_14034_14060[(1)] = (8));

} else {
var statearr_14035_14061 = state_14028__$1;
(statearr_14035_14061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (3))){
var inst_14026 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14028__$1,inst_14026);
} else {
if((state_val_14029 === (12))){
var state_14028__$1 = state_14028;
var statearr_14036_14062 = state_14028__$1;
(statearr_14036_14062[(2)] = null);

(statearr_14036_14062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (2))){
var inst_14005 = (state_14028[(7)]);
var state_14028__$1 = state_14028;
if(cljs.core.truth_(inst_14005)){
var statearr_14037_14063 = state_14028__$1;
(statearr_14037_14063[(1)] = (4));

} else {
var statearr_14038_14064 = state_14028__$1;
(statearr_14038_14064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (11))){
var inst_14019 = cljs.core.async.close_BANG_.call(null,ch);
var state_14028__$1 = state_14028;
var statearr_14039_14065 = state_14028__$1;
(statearr_14039_14065[(2)] = inst_14019);

(statearr_14039_14065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (9))){
var state_14028__$1 = state_14028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14040_14066 = state_14028__$1;
(statearr_14040_14066[(1)] = (11));

} else {
var statearr_14041_14067 = state_14028__$1;
(statearr_14041_14067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (5))){
var inst_14005 = (state_14028[(7)]);
var state_14028__$1 = state_14028;
var statearr_14042_14068 = state_14028__$1;
(statearr_14042_14068[(2)] = inst_14005);

(statearr_14042_14068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (10))){
var inst_14024 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14043_14069 = state_14028__$1;
(statearr_14043_14069[(2)] = inst_14024);

(statearr_14043_14069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (8))){
var inst_14005 = (state_14028[(7)]);
var inst_14015 = cljs.core.next.call(null,inst_14005);
var inst_14005__$1 = inst_14015;
var state_14028__$1 = (function (){var statearr_14044 = state_14028;
(statearr_14044[(7)] = inst_14005__$1);

return statearr_14044;
})();
var statearr_14045_14070 = state_14028__$1;
(statearr_14045_14070[(2)] = null);

(statearr_14045_14070[(1)] = (2));


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
});})(c__9866__auto__))
;
return ((function (switch__9845__auto__,c__9866__auto__){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_14049 = [null,null,null,null,null,null,null,null];
(statearr_14049[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_14049[(1)] = (1));

return statearr_14049;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_14028){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_14028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e14050){if((e14050 instanceof Object)){
var ex__9849__auto__ = e14050;
var statearr_14051_14071 = state_14028;
(statearr_14051_14071[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14072 = state_14028;
state_14028 = G__14072;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_14028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_14028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__))
})();
var state__9868__auto__ = (function (){var statearr_14052 = f__9867__auto__.call(null);
(statearr_14052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_14052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__))
);

return c__9866__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async14298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14298 = (function (ch,cs,meta14299){
this.ch = ch;
this.cs = cs;
this.meta14299 = meta14299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14300,meta14299__$1){
var self__ = this;
var _14300__$1 = this;
return (new cljs.core.async.t_cljs$core$async14298(self__.ch,self__.cs,meta14299__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14300){
var self__ = this;
var _14300__$1 = this;
return self__.meta14299;
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14299","meta14299",-1202076587,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14298";

cljs.core.async.t_cljs$core$async14298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async14298");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14298 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14298(ch__$1,cs__$1,meta14299){
return (new cljs.core.async.t_cljs$core$async14298(ch__$1,cs__$1,meta14299));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14298(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9866__auto___14523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___14523,cs,m,dchan,dctr,done){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___14523,cs,m,dchan,dctr,done){
return (function (state_14435){
var state_val_14436 = (state_14435[(1)]);
if((state_val_14436 === (7))){
var inst_14431 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14437_14524 = state_14435__$1;
(statearr_14437_14524[(2)] = inst_14431);

(statearr_14437_14524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (20))){
var inst_14334 = (state_14435[(7)]);
var inst_14346 = cljs.core.first.call(null,inst_14334);
var inst_14347 = cljs.core.nth.call(null,inst_14346,(0),null);
var inst_14348 = cljs.core.nth.call(null,inst_14346,(1),null);
var state_14435__$1 = (function (){var statearr_14438 = state_14435;
(statearr_14438[(8)] = inst_14347);

return statearr_14438;
})();
if(cljs.core.truth_(inst_14348)){
var statearr_14439_14525 = state_14435__$1;
(statearr_14439_14525[(1)] = (22));

} else {
var statearr_14440_14526 = state_14435__$1;
(statearr_14440_14526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (27))){
var inst_14303 = (state_14435[(9)]);
var inst_14376 = (state_14435[(10)]);
var inst_14383 = (state_14435[(11)]);
var inst_14378 = (state_14435[(12)]);
var inst_14383__$1 = cljs.core._nth.call(null,inst_14376,inst_14378);
var inst_14384 = cljs.core.async.put_BANG_.call(null,inst_14383__$1,inst_14303,done);
var state_14435__$1 = (function (){var statearr_14441 = state_14435;
(statearr_14441[(11)] = inst_14383__$1);

return statearr_14441;
})();
if(cljs.core.truth_(inst_14384)){
var statearr_14442_14527 = state_14435__$1;
(statearr_14442_14527[(1)] = (30));

} else {
var statearr_14443_14528 = state_14435__$1;
(statearr_14443_14528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (1))){
var state_14435__$1 = state_14435;
var statearr_14444_14529 = state_14435__$1;
(statearr_14444_14529[(2)] = null);

(statearr_14444_14529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (24))){
var inst_14334 = (state_14435[(7)]);
var inst_14353 = (state_14435[(2)]);
var inst_14354 = cljs.core.next.call(null,inst_14334);
var inst_14312 = inst_14354;
var inst_14313 = null;
var inst_14314 = (0);
var inst_14315 = (0);
var state_14435__$1 = (function (){var statearr_14445 = state_14435;
(statearr_14445[(13)] = inst_14353);

(statearr_14445[(14)] = inst_14312);

(statearr_14445[(15)] = inst_14314);

(statearr_14445[(16)] = inst_14313);

(statearr_14445[(17)] = inst_14315);

return statearr_14445;
})();
var statearr_14446_14530 = state_14435__$1;
(statearr_14446_14530[(2)] = null);

(statearr_14446_14530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (39))){
var state_14435__$1 = state_14435;
var statearr_14450_14531 = state_14435__$1;
(statearr_14450_14531[(2)] = null);

(statearr_14450_14531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (4))){
var inst_14303 = (state_14435[(9)]);
var inst_14303__$1 = (state_14435[(2)]);
var inst_14304 = (inst_14303__$1 == null);
var state_14435__$1 = (function (){var statearr_14451 = state_14435;
(statearr_14451[(9)] = inst_14303__$1);

return statearr_14451;
})();
if(cljs.core.truth_(inst_14304)){
var statearr_14452_14532 = state_14435__$1;
(statearr_14452_14532[(1)] = (5));

} else {
var statearr_14453_14533 = state_14435__$1;
(statearr_14453_14533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (15))){
var inst_14312 = (state_14435[(14)]);
var inst_14314 = (state_14435[(15)]);
var inst_14313 = (state_14435[(16)]);
var inst_14315 = (state_14435[(17)]);
var inst_14330 = (state_14435[(2)]);
var inst_14331 = (inst_14315 + (1));
var tmp14447 = inst_14312;
var tmp14448 = inst_14314;
var tmp14449 = inst_14313;
var inst_14312__$1 = tmp14447;
var inst_14313__$1 = tmp14449;
var inst_14314__$1 = tmp14448;
var inst_14315__$1 = inst_14331;
var state_14435__$1 = (function (){var statearr_14454 = state_14435;
(statearr_14454[(18)] = inst_14330);

(statearr_14454[(14)] = inst_14312__$1);

(statearr_14454[(15)] = inst_14314__$1);

(statearr_14454[(16)] = inst_14313__$1);

(statearr_14454[(17)] = inst_14315__$1);

return statearr_14454;
})();
var statearr_14455_14534 = state_14435__$1;
(statearr_14455_14534[(2)] = null);

(statearr_14455_14534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (21))){
var inst_14357 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14459_14535 = state_14435__$1;
(statearr_14459_14535[(2)] = inst_14357);

(statearr_14459_14535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (31))){
var inst_14383 = (state_14435[(11)]);
var inst_14387 = done.call(null,null);
var inst_14388 = cljs.core.async.untap_STAR_.call(null,m,inst_14383);
var state_14435__$1 = (function (){var statearr_14460 = state_14435;
(statearr_14460[(19)] = inst_14387);

return statearr_14460;
})();
var statearr_14461_14536 = state_14435__$1;
(statearr_14461_14536[(2)] = inst_14388);

(statearr_14461_14536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (32))){
var inst_14377 = (state_14435[(20)]);
var inst_14376 = (state_14435[(10)]);
var inst_14378 = (state_14435[(12)]);
var inst_14375 = (state_14435[(21)]);
var inst_14390 = (state_14435[(2)]);
var inst_14391 = (inst_14378 + (1));
var tmp14456 = inst_14377;
var tmp14457 = inst_14376;
var tmp14458 = inst_14375;
var inst_14375__$1 = tmp14458;
var inst_14376__$1 = tmp14457;
var inst_14377__$1 = tmp14456;
var inst_14378__$1 = inst_14391;
var state_14435__$1 = (function (){var statearr_14462 = state_14435;
(statearr_14462[(20)] = inst_14377__$1);

(statearr_14462[(10)] = inst_14376__$1);

(statearr_14462[(22)] = inst_14390);

(statearr_14462[(12)] = inst_14378__$1);

(statearr_14462[(21)] = inst_14375__$1);

return statearr_14462;
})();
var statearr_14463_14537 = state_14435__$1;
(statearr_14463_14537[(2)] = null);

(statearr_14463_14537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (40))){
var inst_14403 = (state_14435[(23)]);
var inst_14407 = done.call(null,null);
var inst_14408 = cljs.core.async.untap_STAR_.call(null,m,inst_14403);
var state_14435__$1 = (function (){var statearr_14464 = state_14435;
(statearr_14464[(24)] = inst_14407);

return statearr_14464;
})();
var statearr_14465_14538 = state_14435__$1;
(statearr_14465_14538[(2)] = inst_14408);

(statearr_14465_14538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (33))){
var inst_14394 = (state_14435[(25)]);
var inst_14396 = cljs.core.chunked_seq_QMARK_.call(null,inst_14394);
var state_14435__$1 = state_14435;
if(inst_14396){
var statearr_14466_14539 = state_14435__$1;
(statearr_14466_14539[(1)] = (36));

} else {
var statearr_14467_14540 = state_14435__$1;
(statearr_14467_14540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (13))){
var inst_14324 = (state_14435[(26)]);
var inst_14327 = cljs.core.async.close_BANG_.call(null,inst_14324);
var state_14435__$1 = state_14435;
var statearr_14468_14541 = state_14435__$1;
(statearr_14468_14541[(2)] = inst_14327);

(statearr_14468_14541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (22))){
var inst_14347 = (state_14435[(8)]);
var inst_14350 = cljs.core.async.close_BANG_.call(null,inst_14347);
var state_14435__$1 = state_14435;
var statearr_14469_14542 = state_14435__$1;
(statearr_14469_14542[(2)] = inst_14350);

(statearr_14469_14542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (36))){
var inst_14394 = (state_14435[(25)]);
var inst_14398 = cljs.core.chunk_first.call(null,inst_14394);
var inst_14399 = cljs.core.chunk_rest.call(null,inst_14394);
var inst_14400 = cljs.core.count.call(null,inst_14398);
var inst_14375 = inst_14399;
var inst_14376 = inst_14398;
var inst_14377 = inst_14400;
var inst_14378 = (0);
var state_14435__$1 = (function (){var statearr_14470 = state_14435;
(statearr_14470[(20)] = inst_14377);

(statearr_14470[(10)] = inst_14376);

(statearr_14470[(12)] = inst_14378);

(statearr_14470[(21)] = inst_14375);

return statearr_14470;
})();
var statearr_14471_14543 = state_14435__$1;
(statearr_14471_14543[(2)] = null);

(statearr_14471_14543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (41))){
var inst_14394 = (state_14435[(25)]);
var inst_14410 = (state_14435[(2)]);
var inst_14411 = cljs.core.next.call(null,inst_14394);
var inst_14375 = inst_14411;
var inst_14376 = null;
var inst_14377 = (0);
var inst_14378 = (0);
var state_14435__$1 = (function (){var statearr_14472 = state_14435;
(statearr_14472[(20)] = inst_14377);

(statearr_14472[(27)] = inst_14410);

(statearr_14472[(10)] = inst_14376);

(statearr_14472[(12)] = inst_14378);

(statearr_14472[(21)] = inst_14375);

return statearr_14472;
})();
var statearr_14473_14544 = state_14435__$1;
(statearr_14473_14544[(2)] = null);

(statearr_14473_14544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (43))){
var state_14435__$1 = state_14435;
var statearr_14474_14545 = state_14435__$1;
(statearr_14474_14545[(2)] = null);

(statearr_14474_14545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (29))){
var inst_14419 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14475_14546 = state_14435__$1;
(statearr_14475_14546[(2)] = inst_14419);

(statearr_14475_14546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (44))){
var inst_14428 = (state_14435[(2)]);
var state_14435__$1 = (function (){var statearr_14476 = state_14435;
(statearr_14476[(28)] = inst_14428);

return statearr_14476;
})();
var statearr_14477_14547 = state_14435__$1;
(statearr_14477_14547[(2)] = null);

(statearr_14477_14547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (6))){
var inst_14367 = (state_14435[(29)]);
var inst_14366 = cljs.core.deref.call(null,cs);
var inst_14367__$1 = cljs.core.keys.call(null,inst_14366);
var inst_14368 = cljs.core.count.call(null,inst_14367__$1);
var inst_14369 = cljs.core.reset_BANG_.call(null,dctr,inst_14368);
var inst_14374 = cljs.core.seq.call(null,inst_14367__$1);
var inst_14375 = inst_14374;
var inst_14376 = null;
var inst_14377 = (0);
var inst_14378 = (0);
var state_14435__$1 = (function (){var statearr_14478 = state_14435;
(statearr_14478[(20)] = inst_14377);

(statearr_14478[(10)] = inst_14376);

(statearr_14478[(12)] = inst_14378);

(statearr_14478[(29)] = inst_14367__$1);

(statearr_14478[(21)] = inst_14375);

(statearr_14478[(30)] = inst_14369);

return statearr_14478;
})();
var statearr_14479_14548 = state_14435__$1;
(statearr_14479_14548[(2)] = null);

(statearr_14479_14548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (28))){
var inst_14394 = (state_14435[(25)]);
var inst_14375 = (state_14435[(21)]);
var inst_14394__$1 = cljs.core.seq.call(null,inst_14375);
var state_14435__$1 = (function (){var statearr_14480 = state_14435;
(statearr_14480[(25)] = inst_14394__$1);

return statearr_14480;
})();
if(inst_14394__$1){
var statearr_14481_14549 = state_14435__$1;
(statearr_14481_14549[(1)] = (33));

} else {
var statearr_14482_14550 = state_14435__$1;
(statearr_14482_14550[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (25))){
var inst_14377 = (state_14435[(20)]);
var inst_14378 = (state_14435[(12)]);
var inst_14380 = (inst_14378 < inst_14377);
var inst_14381 = inst_14380;
var state_14435__$1 = state_14435;
if(cljs.core.truth_(inst_14381)){
var statearr_14483_14551 = state_14435__$1;
(statearr_14483_14551[(1)] = (27));

} else {
var statearr_14484_14552 = state_14435__$1;
(statearr_14484_14552[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (34))){
var state_14435__$1 = state_14435;
var statearr_14485_14553 = state_14435__$1;
(statearr_14485_14553[(2)] = null);

(statearr_14485_14553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (17))){
var state_14435__$1 = state_14435;
var statearr_14486_14554 = state_14435__$1;
(statearr_14486_14554[(2)] = null);

(statearr_14486_14554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (3))){
var inst_14433 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14435__$1,inst_14433);
} else {
if((state_val_14436 === (12))){
var inst_14362 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14487_14555 = state_14435__$1;
(statearr_14487_14555[(2)] = inst_14362);

(statearr_14487_14555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (2))){
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14435__$1,(4),ch);
} else {
if((state_val_14436 === (23))){
var state_14435__$1 = state_14435;
var statearr_14488_14556 = state_14435__$1;
(statearr_14488_14556[(2)] = null);

(statearr_14488_14556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (35))){
var inst_14417 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14489_14557 = state_14435__$1;
(statearr_14489_14557[(2)] = inst_14417);

(statearr_14489_14557[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (19))){
var inst_14334 = (state_14435[(7)]);
var inst_14338 = cljs.core.chunk_first.call(null,inst_14334);
var inst_14339 = cljs.core.chunk_rest.call(null,inst_14334);
var inst_14340 = cljs.core.count.call(null,inst_14338);
var inst_14312 = inst_14339;
var inst_14313 = inst_14338;
var inst_14314 = inst_14340;
var inst_14315 = (0);
var state_14435__$1 = (function (){var statearr_14490 = state_14435;
(statearr_14490[(14)] = inst_14312);

(statearr_14490[(15)] = inst_14314);

(statearr_14490[(16)] = inst_14313);

(statearr_14490[(17)] = inst_14315);

return statearr_14490;
})();
var statearr_14491_14558 = state_14435__$1;
(statearr_14491_14558[(2)] = null);

(statearr_14491_14558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (11))){
var inst_14312 = (state_14435[(14)]);
var inst_14334 = (state_14435[(7)]);
var inst_14334__$1 = cljs.core.seq.call(null,inst_14312);
var state_14435__$1 = (function (){var statearr_14492 = state_14435;
(statearr_14492[(7)] = inst_14334__$1);

return statearr_14492;
})();
if(inst_14334__$1){
var statearr_14493_14559 = state_14435__$1;
(statearr_14493_14559[(1)] = (16));

} else {
var statearr_14494_14560 = state_14435__$1;
(statearr_14494_14560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (9))){
var inst_14364 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14495_14561 = state_14435__$1;
(statearr_14495_14561[(2)] = inst_14364);

(statearr_14495_14561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (5))){
var inst_14310 = cljs.core.deref.call(null,cs);
var inst_14311 = cljs.core.seq.call(null,inst_14310);
var inst_14312 = inst_14311;
var inst_14313 = null;
var inst_14314 = (0);
var inst_14315 = (0);
var state_14435__$1 = (function (){var statearr_14496 = state_14435;
(statearr_14496[(14)] = inst_14312);

(statearr_14496[(15)] = inst_14314);

(statearr_14496[(16)] = inst_14313);

(statearr_14496[(17)] = inst_14315);

return statearr_14496;
})();
var statearr_14497_14562 = state_14435__$1;
(statearr_14497_14562[(2)] = null);

(statearr_14497_14562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (14))){
var state_14435__$1 = state_14435;
var statearr_14498_14563 = state_14435__$1;
(statearr_14498_14563[(2)] = null);

(statearr_14498_14563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (45))){
var inst_14425 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14499_14564 = state_14435__$1;
(statearr_14499_14564[(2)] = inst_14425);

(statearr_14499_14564[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (26))){
var inst_14367 = (state_14435[(29)]);
var inst_14421 = (state_14435[(2)]);
var inst_14422 = cljs.core.seq.call(null,inst_14367);
var state_14435__$1 = (function (){var statearr_14500 = state_14435;
(statearr_14500[(31)] = inst_14421);

return statearr_14500;
})();
if(inst_14422){
var statearr_14501_14565 = state_14435__$1;
(statearr_14501_14565[(1)] = (42));

} else {
var statearr_14502_14566 = state_14435__$1;
(statearr_14502_14566[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (16))){
var inst_14334 = (state_14435[(7)]);
var inst_14336 = cljs.core.chunked_seq_QMARK_.call(null,inst_14334);
var state_14435__$1 = state_14435;
if(inst_14336){
var statearr_14503_14567 = state_14435__$1;
(statearr_14503_14567[(1)] = (19));

} else {
var statearr_14504_14568 = state_14435__$1;
(statearr_14504_14568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (38))){
var inst_14414 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14505_14569 = state_14435__$1;
(statearr_14505_14569[(2)] = inst_14414);

(statearr_14505_14569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (30))){
var state_14435__$1 = state_14435;
var statearr_14506_14570 = state_14435__$1;
(statearr_14506_14570[(2)] = null);

(statearr_14506_14570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (10))){
var inst_14313 = (state_14435[(16)]);
var inst_14315 = (state_14435[(17)]);
var inst_14323 = cljs.core._nth.call(null,inst_14313,inst_14315);
var inst_14324 = cljs.core.nth.call(null,inst_14323,(0),null);
var inst_14325 = cljs.core.nth.call(null,inst_14323,(1),null);
var state_14435__$1 = (function (){var statearr_14507 = state_14435;
(statearr_14507[(26)] = inst_14324);

return statearr_14507;
})();
if(cljs.core.truth_(inst_14325)){
var statearr_14508_14571 = state_14435__$1;
(statearr_14508_14571[(1)] = (13));

} else {
var statearr_14509_14572 = state_14435__$1;
(statearr_14509_14572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (18))){
var inst_14360 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14510_14573 = state_14435__$1;
(statearr_14510_14573[(2)] = inst_14360);

(statearr_14510_14573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (42))){
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14435__$1,(45),dchan);
} else {
if((state_val_14436 === (37))){
var inst_14394 = (state_14435[(25)]);
var inst_14303 = (state_14435[(9)]);
var inst_14403 = (state_14435[(23)]);
var inst_14403__$1 = cljs.core.first.call(null,inst_14394);
var inst_14404 = cljs.core.async.put_BANG_.call(null,inst_14403__$1,inst_14303,done);
var state_14435__$1 = (function (){var statearr_14511 = state_14435;
(statearr_14511[(23)] = inst_14403__$1);

return statearr_14511;
})();
if(cljs.core.truth_(inst_14404)){
var statearr_14512_14574 = state_14435__$1;
(statearr_14512_14574[(1)] = (39));

} else {
var statearr_14513_14575 = state_14435__$1;
(statearr_14513_14575[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (8))){
var inst_14314 = (state_14435[(15)]);
var inst_14315 = (state_14435[(17)]);
var inst_14317 = (inst_14315 < inst_14314);
var inst_14318 = inst_14317;
var state_14435__$1 = state_14435;
if(cljs.core.truth_(inst_14318)){
var statearr_14514_14576 = state_14435__$1;
(statearr_14514_14576[(1)] = (10));

} else {
var statearr_14515_14577 = state_14435__$1;
(statearr_14515_14577[(1)] = (11));

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
});})(c__9866__auto___14523,cs,m,dchan,dctr,done))
;
return ((function (switch__9845__auto__,c__9866__auto___14523,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9846__auto__ = null;
var cljs$core$async$mult_$_state_machine__9846__auto____0 = (function (){
var statearr_14519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14519[(0)] = cljs$core$async$mult_$_state_machine__9846__auto__);

(statearr_14519[(1)] = (1));

return statearr_14519;
});
var cljs$core$async$mult_$_state_machine__9846__auto____1 = (function (state_14435){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_14435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e14520){if((e14520 instanceof Object)){
var ex__9849__auto__ = e14520;
var statearr_14521_14578 = state_14435;
(statearr_14521_14578[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14579 = state_14435;
state_14435 = G__14579;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9846__auto__ = function(state_14435){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9846__auto____1.call(this,state_14435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9846__auto____0;
cljs$core$async$mult_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9846__auto____1;
return cljs$core$async$mult_$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___14523,cs,m,dchan,dctr,done))
})();
var state__9868__auto__ = (function (){var statearr_14522 = f__9867__auto__.call(null);
(statearr_14522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___14523);

return statearr_14522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___14523,cs,m,dchan,dctr,done))
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
var args14580 = [];
var len__7923__auto___14583 = arguments.length;
var i__7924__auto___14584 = (0);
while(true){
if((i__7924__auto___14584 < len__7923__auto___14583)){
args14580.push((arguments[i__7924__auto___14584]));

var G__14585 = (i__7924__auto___14584 + (1));
i__7924__auto___14584 = G__14585;
continue;
} else {
}
break;
}

var G__14582 = args14580.length;
switch (G__14582) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14580.length)].join('')));

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
var len__7923__auto___14597 = arguments.length;
var i__7924__auto___14598 = (0);
while(true){
if((i__7924__auto___14598 < len__7923__auto___14597)){
args__7930__auto__.push((arguments[i__7924__auto___14598]));

var G__14599 = (i__7924__auto___14598 + (1));
i__7924__auto___14598 = G__14599;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((3) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14591){
var map__14592 = p__14591;
var map__14592__$1 = ((((!((map__14592 == null)))?((((map__14592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14592):map__14592);
var opts = map__14592__$1;
var statearr_14594_14600 = state;
(statearr_14594_14600[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14592,map__14592__$1,opts){
return (function (val){
var statearr_14595_14601 = state;
(statearr_14595_14601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14592,map__14592__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14596_14602 = state;
(statearr_14596_14602[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14587){
var G__14588 = cljs.core.first.call(null,seq14587);
var seq14587__$1 = cljs.core.next.call(null,seq14587);
var G__14589 = cljs.core.first.call(null,seq14587__$1);
var seq14587__$2 = cljs.core.next.call(null,seq14587__$1);
var G__14590 = cljs.core.first.call(null,seq14587__$2);
var seq14587__$3 = cljs.core.next.call(null,seq14587__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14588,G__14589,G__14590,seq14587__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14770 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14771){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14771 = meta14771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14772,meta14771__$1){
var self__ = this;
var _14772__$1 = this;
return (new cljs.core.async.t_cljs$core$async14770(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14771__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14772){
var self__ = this;
var _14772__$1 = this;
return self__.meta14771;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14771","meta14771",1717002327,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14770";

cljs.core.async.t_cljs$core$async14770.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async14770");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14770 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14770(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14771){
return (new cljs.core.async.t_cljs$core$async14770(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14771));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14770(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9866__auto___14937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14874){
var state_val_14875 = (state_14874[(1)]);
if((state_val_14875 === (7))){
var inst_14789 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14876_14938 = state_14874__$1;
(statearr_14876_14938[(2)] = inst_14789);

(statearr_14876_14938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (20))){
var inst_14801 = (state_14874[(7)]);
var state_14874__$1 = state_14874;
var statearr_14877_14939 = state_14874__$1;
(statearr_14877_14939[(2)] = inst_14801);

(statearr_14877_14939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (27))){
var state_14874__$1 = state_14874;
var statearr_14878_14940 = state_14874__$1;
(statearr_14878_14940[(2)] = null);

(statearr_14878_14940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (1))){
var inst_14776 = (state_14874[(8)]);
var inst_14776__$1 = calc_state.call(null);
var inst_14778 = (inst_14776__$1 == null);
var inst_14779 = cljs.core.not.call(null,inst_14778);
var state_14874__$1 = (function (){var statearr_14879 = state_14874;
(statearr_14879[(8)] = inst_14776__$1);

return statearr_14879;
})();
if(inst_14779){
var statearr_14880_14941 = state_14874__$1;
(statearr_14880_14941[(1)] = (2));

} else {
var statearr_14881_14942 = state_14874__$1;
(statearr_14881_14942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (24))){
var inst_14825 = (state_14874[(9)]);
var inst_14834 = (state_14874[(10)]);
var inst_14848 = (state_14874[(11)]);
var inst_14848__$1 = inst_14825.call(null,inst_14834);
var state_14874__$1 = (function (){var statearr_14882 = state_14874;
(statearr_14882[(11)] = inst_14848__$1);

return statearr_14882;
})();
if(cljs.core.truth_(inst_14848__$1)){
var statearr_14883_14943 = state_14874__$1;
(statearr_14883_14943[(1)] = (29));

} else {
var statearr_14884_14944 = state_14874__$1;
(statearr_14884_14944[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (4))){
var inst_14792 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14792)){
var statearr_14885_14945 = state_14874__$1;
(statearr_14885_14945[(1)] = (8));

} else {
var statearr_14886_14946 = state_14874__$1;
(statearr_14886_14946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (15))){
var inst_14819 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14819)){
var statearr_14887_14947 = state_14874__$1;
(statearr_14887_14947[(1)] = (19));

} else {
var statearr_14888_14948 = state_14874__$1;
(statearr_14888_14948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (21))){
var inst_14824 = (state_14874[(12)]);
var inst_14824__$1 = (state_14874[(2)]);
var inst_14825 = cljs.core.get.call(null,inst_14824__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14826 = cljs.core.get.call(null,inst_14824__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14827 = cljs.core.get.call(null,inst_14824__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14874__$1 = (function (){var statearr_14889 = state_14874;
(statearr_14889[(9)] = inst_14825);

(statearr_14889[(13)] = inst_14826);

(statearr_14889[(12)] = inst_14824__$1);

return statearr_14889;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14874__$1,(22),inst_14827);
} else {
if((state_val_14875 === (31))){
var inst_14856 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14856)){
var statearr_14890_14949 = state_14874__$1;
(statearr_14890_14949[(1)] = (32));

} else {
var statearr_14891_14950 = state_14874__$1;
(statearr_14891_14950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (32))){
var inst_14833 = (state_14874[(14)]);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14874__$1,(35),out,inst_14833);
} else {
if((state_val_14875 === (33))){
var inst_14824 = (state_14874[(12)]);
var inst_14801 = inst_14824;
var state_14874__$1 = (function (){var statearr_14892 = state_14874;
(statearr_14892[(7)] = inst_14801);

return statearr_14892;
})();
var statearr_14893_14951 = state_14874__$1;
(statearr_14893_14951[(2)] = null);

(statearr_14893_14951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (13))){
var inst_14801 = (state_14874[(7)]);
var inst_14808 = inst_14801.cljs$lang$protocol_mask$partition0$;
var inst_14809 = (inst_14808 & (64));
var inst_14810 = inst_14801.cljs$core$ISeq$;
var inst_14811 = (cljs.core.PROTOCOL_SENTINEL === inst_14810);
var inst_14812 = (inst_14809) || (inst_14811);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14812)){
var statearr_14894_14952 = state_14874__$1;
(statearr_14894_14952[(1)] = (16));

} else {
var statearr_14895_14953 = state_14874__$1;
(statearr_14895_14953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (22))){
var inst_14834 = (state_14874[(10)]);
var inst_14833 = (state_14874[(14)]);
var inst_14832 = (state_14874[(2)]);
var inst_14833__$1 = cljs.core.nth.call(null,inst_14832,(0),null);
var inst_14834__$1 = cljs.core.nth.call(null,inst_14832,(1),null);
var inst_14835 = (inst_14833__$1 == null);
var inst_14836 = cljs.core._EQ_.call(null,inst_14834__$1,change);
var inst_14837 = (inst_14835) || (inst_14836);
var state_14874__$1 = (function (){var statearr_14896 = state_14874;
(statearr_14896[(10)] = inst_14834__$1);

(statearr_14896[(14)] = inst_14833__$1);

return statearr_14896;
})();
if(cljs.core.truth_(inst_14837)){
var statearr_14897_14954 = state_14874__$1;
(statearr_14897_14954[(1)] = (23));

} else {
var statearr_14898_14955 = state_14874__$1;
(statearr_14898_14955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (36))){
var inst_14824 = (state_14874[(12)]);
var inst_14801 = inst_14824;
var state_14874__$1 = (function (){var statearr_14899 = state_14874;
(statearr_14899[(7)] = inst_14801);

return statearr_14899;
})();
var statearr_14900_14956 = state_14874__$1;
(statearr_14900_14956[(2)] = null);

(statearr_14900_14956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (29))){
var inst_14848 = (state_14874[(11)]);
var state_14874__$1 = state_14874;
var statearr_14901_14957 = state_14874__$1;
(statearr_14901_14957[(2)] = inst_14848);

(statearr_14901_14957[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (6))){
var state_14874__$1 = state_14874;
var statearr_14902_14958 = state_14874__$1;
(statearr_14902_14958[(2)] = false);

(statearr_14902_14958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (28))){
var inst_14844 = (state_14874[(2)]);
var inst_14845 = calc_state.call(null);
var inst_14801 = inst_14845;
var state_14874__$1 = (function (){var statearr_14903 = state_14874;
(statearr_14903[(15)] = inst_14844);

(statearr_14903[(7)] = inst_14801);

return statearr_14903;
})();
var statearr_14904_14959 = state_14874__$1;
(statearr_14904_14959[(2)] = null);

(statearr_14904_14959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (25))){
var inst_14870 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14905_14960 = state_14874__$1;
(statearr_14905_14960[(2)] = inst_14870);

(statearr_14905_14960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (34))){
var inst_14868 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14906_14961 = state_14874__$1;
(statearr_14906_14961[(2)] = inst_14868);

(statearr_14906_14961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (17))){
var state_14874__$1 = state_14874;
var statearr_14907_14962 = state_14874__$1;
(statearr_14907_14962[(2)] = false);

(statearr_14907_14962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (3))){
var state_14874__$1 = state_14874;
var statearr_14908_14963 = state_14874__$1;
(statearr_14908_14963[(2)] = false);

(statearr_14908_14963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (12))){
var inst_14872 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14874__$1,inst_14872);
} else {
if((state_val_14875 === (2))){
var inst_14776 = (state_14874[(8)]);
var inst_14781 = inst_14776.cljs$lang$protocol_mask$partition0$;
var inst_14782 = (inst_14781 & (64));
var inst_14783 = inst_14776.cljs$core$ISeq$;
var inst_14784 = (cljs.core.PROTOCOL_SENTINEL === inst_14783);
var inst_14785 = (inst_14782) || (inst_14784);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14785)){
var statearr_14909_14964 = state_14874__$1;
(statearr_14909_14964[(1)] = (5));

} else {
var statearr_14910_14965 = state_14874__$1;
(statearr_14910_14965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (23))){
var inst_14833 = (state_14874[(14)]);
var inst_14839 = (inst_14833 == null);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14839)){
var statearr_14911_14966 = state_14874__$1;
(statearr_14911_14966[(1)] = (26));

} else {
var statearr_14912_14967 = state_14874__$1;
(statearr_14912_14967[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (35))){
var inst_14859 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14859)){
var statearr_14913_14968 = state_14874__$1;
(statearr_14913_14968[(1)] = (36));

} else {
var statearr_14914_14969 = state_14874__$1;
(statearr_14914_14969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (19))){
var inst_14801 = (state_14874[(7)]);
var inst_14821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14801);
var state_14874__$1 = state_14874;
var statearr_14915_14970 = state_14874__$1;
(statearr_14915_14970[(2)] = inst_14821);

(statearr_14915_14970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (11))){
var inst_14801 = (state_14874[(7)]);
var inst_14805 = (inst_14801 == null);
var inst_14806 = cljs.core.not.call(null,inst_14805);
var state_14874__$1 = state_14874;
if(inst_14806){
var statearr_14916_14971 = state_14874__$1;
(statearr_14916_14971[(1)] = (13));

} else {
var statearr_14917_14972 = state_14874__$1;
(statearr_14917_14972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (9))){
var inst_14776 = (state_14874[(8)]);
var state_14874__$1 = state_14874;
var statearr_14918_14973 = state_14874__$1;
(statearr_14918_14973[(2)] = inst_14776);

(statearr_14918_14973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (5))){
var state_14874__$1 = state_14874;
var statearr_14919_14974 = state_14874__$1;
(statearr_14919_14974[(2)] = true);

(statearr_14919_14974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (14))){
var state_14874__$1 = state_14874;
var statearr_14920_14975 = state_14874__$1;
(statearr_14920_14975[(2)] = false);

(statearr_14920_14975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (26))){
var inst_14834 = (state_14874[(10)]);
var inst_14841 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14834);
var state_14874__$1 = state_14874;
var statearr_14921_14976 = state_14874__$1;
(statearr_14921_14976[(2)] = inst_14841);

(statearr_14921_14976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (16))){
var state_14874__$1 = state_14874;
var statearr_14922_14977 = state_14874__$1;
(statearr_14922_14977[(2)] = true);

(statearr_14922_14977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (38))){
var inst_14864 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14923_14978 = state_14874__$1;
(statearr_14923_14978[(2)] = inst_14864);

(statearr_14923_14978[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (30))){
var inst_14825 = (state_14874[(9)]);
var inst_14826 = (state_14874[(13)]);
var inst_14834 = (state_14874[(10)]);
var inst_14851 = cljs.core.empty_QMARK_.call(null,inst_14825);
var inst_14852 = inst_14826.call(null,inst_14834);
var inst_14853 = cljs.core.not.call(null,inst_14852);
var inst_14854 = (inst_14851) && (inst_14853);
var state_14874__$1 = state_14874;
var statearr_14924_14979 = state_14874__$1;
(statearr_14924_14979[(2)] = inst_14854);

(statearr_14924_14979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (10))){
var inst_14776 = (state_14874[(8)]);
var inst_14797 = (state_14874[(2)]);
var inst_14798 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14799 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14800 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14801 = inst_14776;
var state_14874__$1 = (function (){var statearr_14925 = state_14874;
(statearr_14925[(7)] = inst_14801);

(statearr_14925[(16)] = inst_14799);

(statearr_14925[(17)] = inst_14800);

(statearr_14925[(18)] = inst_14798);

return statearr_14925;
})();
var statearr_14926_14980 = state_14874__$1;
(statearr_14926_14980[(2)] = null);

(statearr_14926_14980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (18))){
var inst_14816 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14927_14981 = state_14874__$1;
(statearr_14927_14981[(2)] = inst_14816);

(statearr_14927_14981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (37))){
var state_14874__$1 = state_14874;
var statearr_14928_14982 = state_14874__$1;
(statearr_14928_14982[(2)] = null);

(statearr_14928_14982[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (8))){
var inst_14776 = (state_14874[(8)]);
var inst_14794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14776);
var state_14874__$1 = state_14874;
var statearr_14929_14983 = state_14874__$1;
(statearr_14929_14983[(2)] = inst_14794);

(statearr_14929_14983[(1)] = (10));


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
});})(c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9845__auto__,c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9846__auto__ = null;
var cljs$core$async$mix_$_state_machine__9846__auto____0 = (function (){
var statearr_14933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14933[(0)] = cljs$core$async$mix_$_state_machine__9846__auto__);

(statearr_14933[(1)] = (1));

return statearr_14933;
});
var cljs$core$async$mix_$_state_machine__9846__auto____1 = (function (state_14874){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_14874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e14934){if((e14934 instanceof Object)){
var ex__9849__auto__ = e14934;
var statearr_14935_14984 = state_14874;
(statearr_14935_14984[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14985 = state_14874;
state_14874 = G__14985;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9846__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9846__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9846__auto____0;
cljs$core$async$mix_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9846__auto____1;
return cljs$core$async$mix_$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9868__auto__ = (function (){var statearr_14936 = f__9867__auto__.call(null);
(statearr_14936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___14937);

return statearr_14936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___14937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args14986 = [];
var len__7923__auto___14989 = arguments.length;
var i__7924__auto___14990 = (0);
while(true){
if((i__7924__auto___14990 < len__7923__auto___14989)){
args14986.push((arguments[i__7924__auto___14990]));

var G__14991 = (i__7924__auto___14990 + (1));
i__7924__auto___14990 = G__14991;
continue;
} else {
}
break;
}

var G__14988 = args14986.length;
switch (G__14988) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14986.length)].join('')));

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
var args14994 = [];
var len__7923__auto___15119 = arguments.length;
var i__7924__auto___15120 = (0);
while(true){
if((i__7924__auto___15120 < len__7923__auto___15119)){
args14994.push((arguments[i__7924__auto___15120]));

var G__15121 = (i__7924__auto___15120 + (1));
i__7924__auto___15120 = G__15121;
continue;
} else {
}
break;
}

var G__14996 = args14994.length;
switch (G__14996) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14994.length)].join('')));

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
return (function (p1__14993_SHARP_){
if(cljs.core.truth_(p1__14993_SHARP_.call(null,topic))){
return p1__14993_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14993_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6814__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14998 = meta14998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14999,meta14998__$1){
var self__ = this;
var _14999__$1 = this;
return (new cljs.core.async.t_cljs$core$async14997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14998__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14999){
var self__ = this;
var _14999__$1 = this;
return self__.meta14998;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14998","meta14998",884678235,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14997";

cljs.core.async.t_cljs$core$async14997.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async14997");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14997 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14998){
return (new cljs.core.async.t_cljs$core$async14997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14998));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9866__auto___15123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15123,mults,ensure_mult,p){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15123,mults,ensure_mult,p){
return (function (state_15071){
var state_val_15072 = (state_15071[(1)]);
if((state_val_15072 === (7))){
var inst_15067 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15073_15124 = state_15071__$1;
(statearr_15073_15124[(2)] = inst_15067);

(statearr_15073_15124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (20))){
var state_15071__$1 = state_15071;
var statearr_15074_15125 = state_15071__$1;
(statearr_15074_15125[(2)] = null);

(statearr_15074_15125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (1))){
var state_15071__$1 = state_15071;
var statearr_15075_15126 = state_15071__$1;
(statearr_15075_15126[(2)] = null);

(statearr_15075_15126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (24))){
var inst_15050 = (state_15071[(7)]);
var inst_15059 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15050);
var state_15071__$1 = state_15071;
var statearr_15076_15127 = state_15071__$1;
(statearr_15076_15127[(2)] = inst_15059);

(statearr_15076_15127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (4))){
var inst_15002 = (state_15071[(8)]);
var inst_15002__$1 = (state_15071[(2)]);
var inst_15003 = (inst_15002__$1 == null);
var state_15071__$1 = (function (){var statearr_15077 = state_15071;
(statearr_15077[(8)] = inst_15002__$1);

return statearr_15077;
})();
if(cljs.core.truth_(inst_15003)){
var statearr_15078_15128 = state_15071__$1;
(statearr_15078_15128[(1)] = (5));

} else {
var statearr_15079_15129 = state_15071__$1;
(statearr_15079_15129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (15))){
var inst_15044 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15080_15130 = state_15071__$1;
(statearr_15080_15130[(2)] = inst_15044);

(statearr_15080_15130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (21))){
var inst_15064 = (state_15071[(2)]);
var state_15071__$1 = (function (){var statearr_15081 = state_15071;
(statearr_15081[(9)] = inst_15064);

return statearr_15081;
})();
var statearr_15082_15131 = state_15071__$1;
(statearr_15082_15131[(2)] = null);

(statearr_15082_15131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (13))){
var inst_15026 = (state_15071[(10)]);
var inst_15028 = cljs.core.chunked_seq_QMARK_.call(null,inst_15026);
var state_15071__$1 = state_15071;
if(inst_15028){
var statearr_15083_15132 = state_15071__$1;
(statearr_15083_15132[(1)] = (16));

} else {
var statearr_15084_15133 = state_15071__$1;
(statearr_15084_15133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (22))){
var inst_15056 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
if(cljs.core.truth_(inst_15056)){
var statearr_15085_15134 = state_15071__$1;
(statearr_15085_15134[(1)] = (23));

} else {
var statearr_15086_15135 = state_15071__$1;
(statearr_15086_15135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (6))){
var inst_15052 = (state_15071[(11)]);
var inst_15002 = (state_15071[(8)]);
var inst_15050 = (state_15071[(7)]);
var inst_15050__$1 = topic_fn.call(null,inst_15002);
var inst_15051 = cljs.core.deref.call(null,mults);
var inst_15052__$1 = cljs.core.get.call(null,inst_15051,inst_15050__$1);
var state_15071__$1 = (function (){var statearr_15087 = state_15071;
(statearr_15087[(11)] = inst_15052__$1);

(statearr_15087[(7)] = inst_15050__$1);

return statearr_15087;
})();
if(cljs.core.truth_(inst_15052__$1)){
var statearr_15088_15136 = state_15071__$1;
(statearr_15088_15136[(1)] = (19));

} else {
var statearr_15089_15137 = state_15071__$1;
(statearr_15089_15137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (25))){
var inst_15061 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15090_15138 = state_15071__$1;
(statearr_15090_15138[(2)] = inst_15061);

(statearr_15090_15138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (17))){
var inst_15026 = (state_15071[(10)]);
var inst_15035 = cljs.core.first.call(null,inst_15026);
var inst_15036 = cljs.core.async.muxch_STAR_.call(null,inst_15035);
var inst_15037 = cljs.core.async.close_BANG_.call(null,inst_15036);
var inst_15038 = cljs.core.next.call(null,inst_15026);
var inst_15012 = inst_15038;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15071__$1 = (function (){var statearr_15091 = state_15071;
(statearr_15091[(12)] = inst_15014);

(statearr_15091[(13)] = inst_15015);

(statearr_15091[(14)] = inst_15013);

(statearr_15091[(15)] = inst_15012);

(statearr_15091[(16)] = inst_15037);

return statearr_15091;
})();
var statearr_15092_15139 = state_15071__$1;
(statearr_15092_15139[(2)] = null);

(statearr_15092_15139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (3))){
var inst_15069 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15071__$1,inst_15069);
} else {
if((state_val_15072 === (12))){
var inst_15046 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15093_15140 = state_15071__$1;
(statearr_15093_15140[(2)] = inst_15046);

(statearr_15093_15140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (2))){
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15071__$1,(4),ch);
} else {
if((state_val_15072 === (23))){
var state_15071__$1 = state_15071;
var statearr_15094_15141 = state_15071__$1;
(statearr_15094_15141[(2)] = null);

(statearr_15094_15141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (19))){
var inst_15052 = (state_15071[(11)]);
var inst_15002 = (state_15071[(8)]);
var inst_15054 = cljs.core.async.muxch_STAR_.call(null,inst_15052);
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15071__$1,(22),inst_15054,inst_15002);
} else {
if((state_val_15072 === (11))){
var inst_15012 = (state_15071[(15)]);
var inst_15026 = (state_15071[(10)]);
var inst_15026__$1 = cljs.core.seq.call(null,inst_15012);
var state_15071__$1 = (function (){var statearr_15095 = state_15071;
(statearr_15095[(10)] = inst_15026__$1);

return statearr_15095;
})();
if(inst_15026__$1){
var statearr_15096_15142 = state_15071__$1;
(statearr_15096_15142[(1)] = (13));

} else {
var statearr_15097_15143 = state_15071__$1;
(statearr_15097_15143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (9))){
var inst_15048 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15098_15144 = state_15071__$1;
(statearr_15098_15144[(2)] = inst_15048);

(statearr_15098_15144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (5))){
var inst_15009 = cljs.core.deref.call(null,mults);
var inst_15010 = cljs.core.vals.call(null,inst_15009);
var inst_15011 = cljs.core.seq.call(null,inst_15010);
var inst_15012 = inst_15011;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15071__$1 = (function (){var statearr_15099 = state_15071;
(statearr_15099[(12)] = inst_15014);

(statearr_15099[(13)] = inst_15015);

(statearr_15099[(14)] = inst_15013);

(statearr_15099[(15)] = inst_15012);

return statearr_15099;
})();
var statearr_15100_15145 = state_15071__$1;
(statearr_15100_15145[(2)] = null);

(statearr_15100_15145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (14))){
var state_15071__$1 = state_15071;
var statearr_15104_15146 = state_15071__$1;
(statearr_15104_15146[(2)] = null);

(statearr_15104_15146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (16))){
var inst_15026 = (state_15071[(10)]);
var inst_15030 = cljs.core.chunk_first.call(null,inst_15026);
var inst_15031 = cljs.core.chunk_rest.call(null,inst_15026);
var inst_15032 = cljs.core.count.call(null,inst_15030);
var inst_15012 = inst_15031;
var inst_15013 = inst_15030;
var inst_15014 = inst_15032;
var inst_15015 = (0);
var state_15071__$1 = (function (){var statearr_15105 = state_15071;
(statearr_15105[(12)] = inst_15014);

(statearr_15105[(13)] = inst_15015);

(statearr_15105[(14)] = inst_15013);

(statearr_15105[(15)] = inst_15012);

return statearr_15105;
})();
var statearr_15106_15147 = state_15071__$1;
(statearr_15106_15147[(2)] = null);

(statearr_15106_15147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (10))){
var inst_15014 = (state_15071[(12)]);
var inst_15015 = (state_15071[(13)]);
var inst_15013 = (state_15071[(14)]);
var inst_15012 = (state_15071[(15)]);
var inst_15020 = cljs.core._nth.call(null,inst_15013,inst_15015);
var inst_15021 = cljs.core.async.muxch_STAR_.call(null,inst_15020);
var inst_15022 = cljs.core.async.close_BANG_.call(null,inst_15021);
var inst_15023 = (inst_15015 + (1));
var tmp15101 = inst_15014;
var tmp15102 = inst_15013;
var tmp15103 = inst_15012;
var inst_15012__$1 = tmp15103;
var inst_15013__$1 = tmp15102;
var inst_15014__$1 = tmp15101;
var inst_15015__$1 = inst_15023;
var state_15071__$1 = (function (){var statearr_15107 = state_15071;
(statearr_15107[(12)] = inst_15014__$1);

(statearr_15107[(17)] = inst_15022);

(statearr_15107[(13)] = inst_15015__$1);

(statearr_15107[(14)] = inst_15013__$1);

(statearr_15107[(15)] = inst_15012__$1);

return statearr_15107;
})();
var statearr_15108_15148 = state_15071__$1;
(statearr_15108_15148[(2)] = null);

(statearr_15108_15148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (18))){
var inst_15041 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15109_15149 = state_15071__$1;
(statearr_15109_15149[(2)] = inst_15041);

(statearr_15109_15149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (8))){
var inst_15014 = (state_15071[(12)]);
var inst_15015 = (state_15071[(13)]);
var inst_15017 = (inst_15015 < inst_15014);
var inst_15018 = inst_15017;
var state_15071__$1 = state_15071;
if(cljs.core.truth_(inst_15018)){
var statearr_15110_15150 = state_15071__$1;
(statearr_15110_15150[(1)] = (10));

} else {
var statearr_15111_15151 = state_15071__$1;
(statearr_15111_15151[(1)] = (11));

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
});})(c__9866__auto___15123,mults,ensure_mult,p))
;
return ((function (switch__9845__auto__,c__9866__auto___15123,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15115[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15115[(1)] = (1));

return statearr_15115;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15071){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15116){if((e15116 instanceof Object)){
var ex__9849__auto__ = e15116;
var statearr_15117_15152 = state_15071;
(statearr_15117_15152[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15153 = state_15071;
state_15071 = G__15153;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15123,mults,ensure_mult,p))
})();
var state__9868__auto__ = (function (){var statearr_15118 = f__9867__auto__.call(null);
(statearr_15118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15123);

return statearr_15118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15123,mults,ensure_mult,p))
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
var args15154 = [];
var len__7923__auto___15157 = arguments.length;
var i__7924__auto___15158 = (0);
while(true){
if((i__7924__auto___15158 < len__7923__auto___15157)){
args15154.push((arguments[i__7924__auto___15158]));

var G__15159 = (i__7924__auto___15158 + (1));
i__7924__auto___15158 = G__15159;
continue;
} else {
}
break;
}

var G__15156 = args15154.length;
switch (G__15156) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15154.length)].join('')));

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
var args15161 = [];
var len__7923__auto___15164 = arguments.length;
var i__7924__auto___15165 = (0);
while(true){
if((i__7924__auto___15165 < len__7923__auto___15164)){
args15161.push((arguments[i__7924__auto___15165]));

var G__15166 = (i__7924__auto___15165 + (1));
i__7924__auto___15165 = G__15166;
continue;
} else {
}
break;
}

var G__15163 = args15161.length;
switch (G__15163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15161.length)].join('')));

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
var args15168 = [];
var len__7923__auto___15239 = arguments.length;
var i__7924__auto___15240 = (0);
while(true){
if((i__7924__auto___15240 < len__7923__auto___15239)){
args15168.push((arguments[i__7924__auto___15240]));

var G__15241 = (i__7924__auto___15240 + (1));
i__7924__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var G__15170 = args15168.length;
switch (G__15170) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15168.length)].join('')));

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
var c__9866__auto___15243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15209){
var state_val_15210 = (state_15209[(1)]);
if((state_val_15210 === (7))){
var state_15209__$1 = state_15209;
var statearr_15211_15244 = state_15209__$1;
(statearr_15211_15244[(2)] = null);

(statearr_15211_15244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (1))){
var state_15209__$1 = state_15209;
var statearr_15212_15245 = state_15209__$1;
(statearr_15212_15245[(2)] = null);

(statearr_15212_15245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (4))){
var inst_15173 = (state_15209[(7)]);
var inst_15175 = (inst_15173 < cnt);
var state_15209__$1 = state_15209;
if(cljs.core.truth_(inst_15175)){
var statearr_15213_15246 = state_15209__$1;
(statearr_15213_15246[(1)] = (6));

} else {
var statearr_15214_15247 = state_15209__$1;
(statearr_15214_15247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (15))){
var inst_15205 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15215_15248 = state_15209__$1;
(statearr_15215_15248[(2)] = inst_15205);

(statearr_15215_15248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (13))){
var inst_15198 = cljs.core.async.close_BANG_.call(null,out);
var state_15209__$1 = state_15209;
var statearr_15216_15249 = state_15209__$1;
(statearr_15216_15249[(2)] = inst_15198);

(statearr_15216_15249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (6))){
var state_15209__$1 = state_15209;
var statearr_15217_15250 = state_15209__$1;
(statearr_15217_15250[(2)] = null);

(statearr_15217_15250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (3))){
var inst_15207 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15209__$1,inst_15207);
} else {
if((state_val_15210 === (12))){
var inst_15195 = (state_15209[(8)]);
var inst_15195__$1 = (state_15209[(2)]);
var inst_15196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15195__$1);
var state_15209__$1 = (function (){var statearr_15218 = state_15209;
(statearr_15218[(8)] = inst_15195__$1);

return statearr_15218;
})();
if(cljs.core.truth_(inst_15196)){
var statearr_15219_15251 = state_15209__$1;
(statearr_15219_15251[(1)] = (13));

} else {
var statearr_15220_15252 = state_15209__$1;
(statearr_15220_15252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (2))){
var inst_15172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15173 = (0);
var state_15209__$1 = (function (){var statearr_15221 = state_15209;
(statearr_15221[(7)] = inst_15173);

(statearr_15221[(9)] = inst_15172);

return statearr_15221;
})();
var statearr_15222_15253 = state_15209__$1;
(statearr_15222_15253[(2)] = null);

(statearr_15222_15253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (11))){
var inst_15173 = (state_15209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15209,(10),Object,null,(9));
var inst_15182 = chs__$1.call(null,inst_15173);
var inst_15183 = done.call(null,inst_15173);
var inst_15184 = cljs.core.async.take_BANG_.call(null,inst_15182,inst_15183);
var state_15209__$1 = state_15209;
var statearr_15223_15254 = state_15209__$1;
(statearr_15223_15254[(2)] = inst_15184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (9))){
var inst_15173 = (state_15209[(7)]);
var inst_15186 = (state_15209[(2)]);
var inst_15187 = (inst_15173 + (1));
var inst_15173__$1 = inst_15187;
var state_15209__$1 = (function (){var statearr_15224 = state_15209;
(statearr_15224[(7)] = inst_15173__$1);

(statearr_15224[(10)] = inst_15186);

return statearr_15224;
})();
var statearr_15225_15255 = state_15209__$1;
(statearr_15225_15255[(2)] = null);

(statearr_15225_15255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (5))){
var inst_15193 = (state_15209[(2)]);
var state_15209__$1 = (function (){var statearr_15226 = state_15209;
(statearr_15226[(11)] = inst_15193);

return statearr_15226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15209__$1,(12),dchan);
} else {
if((state_val_15210 === (14))){
var inst_15195 = (state_15209[(8)]);
var inst_15200 = cljs.core.apply.call(null,f,inst_15195);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15209__$1,(16),out,inst_15200);
} else {
if((state_val_15210 === (16))){
var inst_15202 = (state_15209[(2)]);
var state_15209__$1 = (function (){var statearr_15227 = state_15209;
(statearr_15227[(12)] = inst_15202);

return statearr_15227;
})();
var statearr_15228_15256 = state_15209__$1;
(statearr_15228_15256[(2)] = null);

(statearr_15228_15256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (10))){
var inst_15177 = (state_15209[(2)]);
var inst_15178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15209__$1 = (function (){var statearr_15229 = state_15209;
(statearr_15229[(13)] = inst_15177);

return statearr_15229;
})();
var statearr_15230_15257 = state_15209__$1;
(statearr_15230_15257[(2)] = inst_15178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (8))){
var inst_15191 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15231_15258 = state_15209__$1;
(statearr_15231_15258[(2)] = inst_15191);

(statearr_15231_15258[(1)] = (5));


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
});})(c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9845__auto__,c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15235[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15235[(1)] = (1));

return statearr_15235;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15209){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15236){if((e15236 instanceof Object)){
var ex__9849__auto__ = e15236;
var statearr_15237_15259 = state_15209;
(statearr_15237_15259[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15260 = state_15209;
state_15209 = G__15260;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9868__auto__ = (function (){var statearr_15238 = f__9867__auto__.call(null);
(statearr_15238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15243);

return statearr_15238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15243,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15262 = [];
var len__7923__auto___15320 = arguments.length;
var i__7924__auto___15321 = (0);
while(true){
if((i__7924__auto___15321 < len__7923__auto___15320)){
args15262.push((arguments[i__7924__auto___15321]));

var G__15322 = (i__7924__auto___15321 + (1));
i__7924__auto___15321 = G__15322;
continue;
} else {
}
break;
}

var G__15264 = args15262.length;
switch (G__15264) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15262.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15324,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15324,out){
return (function (state_15296){
var state_val_15297 = (state_15296[(1)]);
if((state_val_15297 === (7))){
var inst_15275 = (state_15296[(7)]);
var inst_15276 = (state_15296[(8)]);
var inst_15275__$1 = (state_15296[(2)]);
var inst_15276__$1 = cljs.core.nth.call(null,inst_15275__$1,(0),null);
var inst_15277 = cljs.core.nth.call(null,inst_15275__$1,(1),null);
var inst_15278 = (inst_15276__$1 == null);
var state_15296__$1 = (function (){var statearr_15298 = state_15296;
(statearr_15298[(9)] = inst_15277);

(statearr_15298[(7)] = inst_15275__$1);

(statearr_15298[(8)] = inst_15276__$1);

return statearr_15298;
})();
if(cljs.core.truth_(inst_15278)){
var statearr_15299_15325 = state_15296__$1;
(statearr_15299_15325[(1)] = (8));

} else {
var statearr_15300_15326 = state_15296__$1;
(statearr_15300_15326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (1))){
var inst_15265 = cljs.core.vec.call(null,chs);
var inst_15266 = inst_15265;
var state_15296__$1 = (function (){var statearr_15301 = state_15296;
(statearr_15301[(10)] = inst_15266);

return statearr_15301;
})();
var statearr_15302_15327 = state_15296__$1;
(statearr_15302_15327[(2)] = null);

(statearr_15302_15327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (4))){
var inst_15266 = (state_15296[(10)]);
var state_15296__$1 = state_15296;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15296__$1,(7),inst_15266);
} else {
if((state_val_15297 === (6))){
var inst_15292 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15303_15328 = state_15296__$1;
(statearr_15303_15328[(2)] = inst_15292);

(statearr_15303_15328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (3))){
var inst_15294 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15296__$1,inst_15294);
} else {
if((state_val_15297 === (2))){
var inst_15266 = (state_15296[(10)]);
var inst_15268 = cljs.core.count.call(null,inst_15266);
var inst_15269 = (inst_15268 > (0));
var state_15296__$1 = state_15296;
if(cljs.core.truth_(inst_15269)){
var statearr_15305_15329 = state_15296__$1;
(statearr_15305_15329[(1)] = (4));

} else {
var statearr_15306_15330 = state_15296__$1;
(statearr_15306_15330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (11))){
var inst_15266 = (state_15296[(10)]);
var inst_15285 = (state_15296[(2)]);
var tmp15304 = inst_15266;
var inst_15266__$1 = tmp15304;
var state_15296__$1 = (function (){var statearr_15307 = state_15296;
(statearr_15307[(10)] = inst_15266__$1);

(statearr_15307[(11)] = inst_15285);

return statearr_15307;
})();
var statearr_15308_15331 = state_15296__$1;
(statearr_15308_15331[(2)] = null);

(statearr_15308_15331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (9))){
var inst_15276 = (state_15296[(8)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15296__$1,(11),out,inst_15276);
} else {
if((state_val_15297 === (5))){
var inst_15290 = cljs.core.async.close_BANG_.call(null,out);
var state_15296__$1 = state_15296;
var statearr_15309_15332 = state_15296__$1;
(statearr_15309_15332[(2)] = inst_15290);

(statearr_15309_15332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (10))){
var inst_15288 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15310_15333 = state_15296__$1;
(statearr_15310_15333[(2)] = inst_15288);

(statearr_15310_15333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (8))){
var inst_15277 = (state_15296[(9)]);
var inst_15275 = (state_15296[(7)]);
var inst_15276 = (state_15296[(8)]);
var inst_15266 = (state_15296[(10)]);
var inst_15280 = (function (){var cs = inst_15266;
var vec__15271 = inst_15275;
var v = inst_15276;
var c = inst_15277;
return ((function (cs,vec__15271,v,c,inst_15277,inst_15275,inst_15276,inst_15266,state_val_15297,c__9866__auto___15324,out){
return (function (p1__15261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15261_SHARP_);
});
;})(cs,vec__15271,v,c,inst_15277,inst_15275,inst_15276,inst_15266,state_val_15297,c__9866__auto___15324,out))
})();
var inst_15281 = cljs.core.filterv.call(null,inst_15280,inst_15266);
var inst_15266__$1 = inst_15281;
var state_15296__$1 = (function (){var statearr_15311 = state_15296;
(statearr_15311[(10)] = inst_15266__$1);

return statearr_15311;
})();
var statearr_15312_15334 = state_15296__$1;
(statearr_15312_15334[(2)] = null);

(statearr_15312_15334[(1)] = (2));


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
});})(c__9866__auto___15324,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15324,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15316[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15316[(1)] = (1));

return statearr_15316;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15296){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15317){if((e15317 instanceof Object)){
var ex__9849__auto__ = e15317;
var statearr_15318_15335 = state_15296;
(statearr_15318_15335[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15336 = state_15296;
state_15296 = G__15336;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15324,out))
})();
var state__9868__auto__ = (function (){var statearr_15319 = f__9867__auto__.call(null);
(statearr_15319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15324);

return statearr_15319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15324,out))
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
var args15337 = [];
var len__7923__auto___15386 = arguments.length;
var i__7924__auto___15387 = (0);
while(true){
if((i__7924__auto___15387 < len__7923__auto___15386)){
args15337.push((arguments[i__7924__auto___15387]));

var G__15388 = (i__7924__auto___15387 + (1));
i__7924__auto___15387 = G__15388;
continue;
} else {
}
break;
}

var G__15339 = args15337.length;
switch (G__15339) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15337.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15390,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15390,out){
return (function (state_15363){
var state_val_15364 = (state_15363[(1)]);
if((state_val_15364 === (7))){
var inst_15345 = (state_15363[(7)]);
var inst_15345__$1 = (state_15363[(2)]);
var inst_15346 = (inst_15345__$1 == null);
var inst_15347 = cljs.core.not.call(null,inst_15346);
var state_15363__$1 = (function (){var statearr_15365 = state_15363;
(statearr_15365[(7)] = inst_15345__$1);

return statearr_15365;
})();
if(inst_15347){
var statearr_15366_15391 = state_15363__$1;
(statearr_15366_15391[(1)] = (8));

} else {
var statearr_15367_15392 = state_15363__$1;
(statearr_15367_15392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (1))){
var inst_15340 = (0);
var state_15363__$1 = (function (){var statearr_15368 = state_15363;
(statearr_15368[(8)] = inst_15340);

return statearr_15368;
})();
var statearr_15369_15393 = state_15363__$1;
(statearr_15369_15393[(2)] = null);

(statearr_15369_15393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (4))){
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15363__$1,(7),ch);
} else {
if((state_val_15364 === (6))){
var inst_15358 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15370_15394 = state_15363__$1;
(statearr_15370_15394[(2)] = inst_15358);

(statearr_15370_15394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (3))){
var inst_15360 = (state_15363[(2)]);
var inst_15361 = cljs.core.async.close_BANG_.call(null,out);
var state_15363__$1 = (function (){var statearr_15371 = state_15363;
(statearr_15371[(9)] = inst_15360);

return statearr_15371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15363__$1,inst_15361);
} else {
if((state_val_15364 === (2))){
var inst_15340 = (state_15363[(8)]);
var inst_15342 = (inst_15340 < n);
var state_15363__$1 = state_15363;
if(cljs.core.truth_(inst_15342)){
var statearr_15372_15395 = state_15363__$1;
(statearr_15372_15395[(1)] = (4));

} else {
var statearr_15373_15396 = state_15363__$1;
(statearr_15373_15396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (11))){
var inst_15340 = (state_15363[(8)]);
var inst_15350 = (state_15363[(2)]);
var inst_15351 = (inst_15340 + (1));
var inst_15340__$1 = inst_15351;
var state_15363__$1 = (function (){var statearr_15374 = state_15363;
(statearr_15374[(10)] = inst_15350);

(statearr_15374[(8)] = inst_15340__$1);

return statearr_15374;
})();
var statearr_15375_15397 = state_15363__$1;
(statearr_15375_15397[(2)] = null);

(statearr_15375_15397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (9))){
var state_15363__$1 = state_15363;
var statearr_15376_15398 = state_15363__$1;
(statearr_15376_15398[(2)] = null);

(statearr_15376_15398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (5))){
var state_15363__$1 = state_15363;
var statearr_15377_15399 = state_15363__$1;
(statearr_15377_15399[(2)] = null);

(statearr_15377_15399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (10))){
var inst_15355 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15378_15400 = state_15363__$1;
(statearr_15378_15400[(2)] = inst_15355);

(statearr_15378_15400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (8))){
var inst_15345 = (state_15363[(7)]);
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15363__$1,(11),out,inst_15345);
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
});})(c__9866__auto___15390,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15390,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15382[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15382[(1)] = (1));

return statearr_15382;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15363){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15383){if((e15383 instanceof Object)){
var ex__9849__auto__ = e15383;
var statearr_15384_15401 = state_15363;
(statearr_15384_15401[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15402 = state_15363;
state_15363 = G__15402;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15390,out))
})();
var state__9868__auto__ = (function (){var statearr_15385 = f__9867__auto__.call(null);
(statearr_15385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15390);

return statearr_15385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15390,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15410 = (function (f,ch,meta15411){
this.f = f;
this.ch = ch;
this.meta15411 = meta15411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15412,meta15411__$1){
var self__ = this;
var _15412__$1 = this;
return (new cljs.core.async.t_cljs$core$async15410(self__.f,self__.ch,meta15411__$1));
});

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15412){
var self__ = this;
var _15412__$1 = this;
return self__.meta15411;
});

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15413 = (function (f,ch,meta15411,_,fn1,meta15414){
this.f = f;
this.ch = ch;
this.meta15411 = meta15411;
this._ = _;
this.fn1 = fn1;
this.meta15414 = meta15414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15415,meta15414__$1){
var self__ = this;
var _15415__$1 = this;
return (new cljs.core.async.t_cljs$core$async15413(self__.f,self__.ch,self__.meta15411,self__._,self__.fn1,meta15414__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15415){
var self__ = this;
var _15415__$1 = this;
return self__.meta15414;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15403_SHARP_){
return f1.call(null,(((p1__15403_SHARP_ == null))?null:self__.f.call(null,p1__15403_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15411","meta15411",-656234058,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15410","cljs.core.async/t_cljs$core$async15410",-1513929125,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15414","meta15414",-1141689161,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15413";

cljs.core.async.t_cljs$core$async15413.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async15413");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15413 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15413(f__$1,ch__$1,meta15411__$1,___$2,fn1__$1,meta15414){
return (new cljs.core.async.t_cljs$core$async15413(f__$1,ch__$1,meta15411__$1,___$2,fn1__$1,meta15414));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15413(self__.f,self__.ch,self__.meta15411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15411","meta15411",-656234058,null)], null);
});

cljs.core.async.t_cljs$core$async15410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15410";

cljs.core.async.t_cljs$core$async15410.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async15410");
});

cljs.core.async.__GT_t_cljs$core$async15410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15410(f__$1,ch__$1,meta15411){
return (new cljs.core.async.t_cljs$core$async15410(f__$1,ch__$1,meta15411));
});

}

return (new cljs.core.async.t_cljs$core$async15410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15419 = (function (f,ch,meta15420){
this.f = f;
this.ch = ch;
this.meta15420 = meta15420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15421,meta15420__$1){
var self__ = this;
var _15421__$1 = this;
return (new cljs.core.async.t_cljs$core$async15419(self__.f,self__.ch,meta15420__$1));
});

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15421){
var self__ = this;
var _15421__$1 = this;
return self__.meta15420;
});

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15420","meta15420",2055448712,null)], null);
});

cljs.core.async.t_cljs$core$async15419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15419";

cljs.core.async.t_cljs$core$async15419.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async15419");
});

cljs.core.async.__GT_t_cljs$core$async15419 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15419(f__$1,ch__$1,meta15420){
return (new cljs.core.async.t_cljs$core$async15419(f__$1,ch__$1,meta15420));
});

}

return (new cljs.core.async.t_cljs$core$async15419(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15425 = (function (p,ch,meta15426){
this.p = p;
this.ch = ch;
this.meta15426 = meta15426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15427,meta15426__$1){
var self__ = this;
var _15427__$1 = this;
return (new cljs.core.async.t_cljs$core$async15425(self__.p,self__.ch,meta15426__$1));
});

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15427){
var self__ = this;
var _15427__$1 = this;
return self__.meta15426;
});

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15426","meta15426",1883746135,null)], null);
});

cljs.core.async.t_cljs$core$async15425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15425";

cljs.core.async.t_cljs$core$async15425.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async15425");
});

cljs.core.async.__GT_t_cljs$core$async15425 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15425(p__$1,ch__$1,meta15426){
return (new cljs.core.async.t_cljs$core$async15425(p__$1,ch__$1,meta15426));
});

}

return (new cljs.core.async.t_cljs$core$async15425(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15428 = [];
var len__7923__auto___15472 = arguments.length;
var i__7924__auto___15473 = (0);
while(true){
if((i__7924__auto___15473 < len__7923__auto___15472)){
args15428.push((arguments[i__7924__auto___15473]));

var G__15474 = (i__7924__auto___15473 + (1));
i__7924__auto___15473 = G__15474;
continue;
} else {
}
break;
}

var G__15430 = args15428.length;
switch (G__15430) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15428.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15476,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15476,out){
return (function (state_15451){
var state_val_15452 = (state_15451[(1)]);
if((state_val_15452 === (7))){
var inst_15447 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15453_15477 = state_15451__$1;
(statearr_15453_15477[(2)] = inst_15447);

(statearr_15453_15477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (1))){
var state_15451__$1 = state_15451;
var statearr_15454_15478 = state_15451__$1;
(statearr_15454_15478[(2)] = null);

(statearr_15454_15478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (4))){
var inst_15433 = (state_15451[(7)]);
var inst_15433__$1 = (state_15451[(2)]);
var inst_15434 = (inst_15433__$1 == null);
var state_15451__$1 = (function (){var statearr_15455 = state_15451;
(statearr_15455[(7)] = inst_15433__$1);

return statearr_15455;
})();
if(cljs.core.truth_(inst_15434)){
var statearr_15456_15479 = state_15451__$1;
(statearr_15456_15479[(1)] = (5));

} else {
var statearr_15457_15480 = state_15451__$1;
(statearr_15457_15480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (6))){
var inst_15433 = (state_15451[(7)]);
var inst_15438 = p.call(null,inst_15433);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15438)){
var statearr_15458_15481 = state_15451__$1;
(statearr_15458_15481[(1)] = (8));

} else {
var statearr_15459_15482 = state_15451__$1;
(statearr_15459_15482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (3))){
var inst_15449 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15451__$1,inst_15449);
} else {
if((state_val_15452 === (2))){
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15451__$1,(4),ch);
} else {
if((state_val_15452 === (11))){
var inst_15441 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15460_15483 = state_15451__$1;
(statearr_15460_15483[(2)] = inst_15441);

(statearr_15460_15483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (9))){
var state_15451__$1 = state_15451;
var statearr_15461_15484 = state_15451__$1;
(statearr_15461_15484[(2)] = null);

(statearr_15461_15484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (5))){
var inst_15436 = cljs.core.async.close_BANG_.call(null,out);
var state_15451__$1 = state_15451;
var statearr_15462_15485 = state_15451__$1;
(statearr_15462_15485[(2)] = inst_15436);

(statearr_15462_15485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (10))){
var inst_15444 = (state_15451[(2)]);
var state_15451__$1 = (function (){var statearr_15463 = state_15451;
(statearr_15463[(8)] = inst_15444);

return statearr_15463;
})();
var statearr_15464_15486 = state_15451__$1;
(statearr_15464_15486[(2)] = null);

(statearr_15464_15486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (8))){
var inst_15433 = (state_15451[(7)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15451__$1,(11),out,inst_15433);
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
});})(c__9866__auto___15476,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15476,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15468 = [null,null,null,null,null,null,null,null,null];
(statearr_15468[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15468[(1)] = (1));

return statearr_15468;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15451){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15469){if((e15469 instanceof Object)){
var ex__9849__auto__ = e15469;
var statearr_15470_15487 = state_15451;
(statearr_15470_15487[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15488 = state_15451;
state_15451 = G__15488;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15476,out))
})();
var state__9868__auto__ = (function (){var statearr_15471 = f__9867__auto__.call(null);
(statearr_15471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15476);

return statearr_15471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15476,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15489 = [];
var len__7923__auto___15492 = arguments.length;
var i__7924__auto___15493 = (0);
while(true){
if((i__7924__auto___15493 < len__7923__auto___15492)){
args15489.push((arguments[i__7924__auto___15493]));

var G__15494 = (i__7924__auto___15493 + (1));
i__7924__auto___15493 = G__15494;
continue;
} else {
}
break;
}

var G__15491 = args15489.length;
switch (G__15491) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15489.length)].join('')));

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
var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__){
return (function (state_15661){
var state_val_15662 = (state_15661[(1)]);
if((state_val_15662 === (7))){
var inst_15657 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15663_15704 = state_15661__$1;
(statearr_15663_15704[(2)] = inst_15657);

(statearr_15663_15704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (20))){
var inst_15627 = (state_15661[(7)]);
var inst_15638 = (state_15661[(2)]);
var inst_15639 = cljs.core.next.call(null,inst_15627);
var inst_15613 = inst_15639;
var inst_15614 = null;
var inst_15615 = (0);
var inst_15616 = (0);
var state_15661__$1 = (function (){var statearr_15664 = state_15661;
(statearr_15664[(8)] = inst_15616);

(statearr_15664[(9)] = inst_15613);

(statearr_15664[(10)] = inst_15615);

(statearr_15664[(11)] = inst_15614);

(statearr_15664[(12)] = inst_15638);

return statearr_15664;
})();
var statearr_15665_15705 = state_15661__$1;
(statearr_15665_15705[(2)] = null);

(statearr_15665_15705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (1))){
var state_15661__$1 = state_15661;
var statearr_15666_15706 = state_15661__$1;
(statearr_15666_15706[(2)] = null);

(statearr_15666_15706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (4))){
var inst_15602 = (state_15661[(13)]);
var inst_15602__$1 = (state_15661[(2)]);
var inst_15603 = (inst_15602__$1 == null);
var state_15661__$1 = (function (){var statearr_15667 = state_15661;
(statearr_15667[(13)] = inst_15602__$1);

return statearr_15667;
})();
if(cljs.core.truth_(inst_15603)){
var statearr_15668_15707 = state_15661__$1;
(statearr_15668_15707[(1)] = (5));

} else {
var statearr_15669_15708 = state_15661__$1;
(statearr_15669_15708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (15))){
var state_15661__$1 = state_15661;
var statearr_15673_15709 = state_15661__$1;
(statearr_15673_15709[(2)] = null);

(statearr_15673_15709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (21))){
var state_15661__$1 = state_15661;
var statearr_15674_15710 = state_15661__$1;
(statearr_15674_15710[(2)] = null);

(statearr_15674_15710[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (13))){
var inst_15616 = (state_15661[(8)]);
var inst_15613 = (state_15661[(9)]);
var inst_15615 = (state_15661[(10)]);
var inst_15614 = (state_15661[(11)]);
var inst_15623 = (state_15661[(2)]);
var inst_15624 = (inst_15616 + (1));
var tmp15670 = inst_15613;
var tmp15671 = inst_15615;
var tmp15672 = inst_15614;
var inst_15613__$1 = tmp15670;
var inst_15614__$1 = tmp15672;
var inst_15615__$1 = tmp15671;
var inst_15616__$1 = inst_15624;
var state_15661__$1 = (function (){var statearr_15675 = state_15661;
(statearr_15675[(8)] = inst_15616__$1);

(statearr_15675[(14)] = inst_15623);

(statearr_15675[(9)] = inst_15613__$1);

(statearr_15675[(10)] = inst_15615__$1);

(statearr_15675[(11)] = inst_15614__$1);

return statearr_15675;
})();
var statearr_15676_15711 = state_15661__$1;
(statearr_15676_15711[(2)] = null);

(statearr_15676_15711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (22))){
var state_15661__$1 = state_15661;
var statearr_15677_15712 = state_15661__$1;
(statearr_15677_15712[(2)] = null);

(statearr_15677_15712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (6))){
var inst_15602 = (state_15661[(13)]);
var inst_15611 = f.call(null,inst_15602);
var inst_15612 = cljs.core.seq.call(null,inst_15611);
var inst_15613 = inst_15612;
var inst_15614 = null;
var inst_15615 = (0);
var inst_15616 = (0);
var state_15661__$1 = (function (){var statearr_15678 = state_15661;
(statearr_15678[(8)] = inst_15616);

(statearr_15678[(9)] = inst_15613);

(statearr_15678[(10)] = inst_15615);

(statearr_15678[(11)] = inst_15614);

return statearr_15678;
})();
var statearr_15679_15713 = state_15661__$1;
(statearr_15679_15713[(2)] = null);

(statearr_15679_15713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (17))){
var inst_15627 = (state_15661[(7)]);
var inst_15631 = cljs.core.chunk_first.call(null,inst_15627);
var inst_15632 = cljs.core.chunk_rest.call(null,inst_15627);
var inst_15633 = cljs.core.count.call(null,inst_15631);
var inst_15613 = inst_15632;
var inst_15614 = inst_15631;
var inst_15615 = inst_15633;
var inst_15616 = (0);
var state_15661__$1 = (function (){var statearr_15680 = state_15661;
(statearr_15680[(8)] = inst_15616);

(statearr_15680[(9)] = inst_15613);

(statearr_15680[(10)] = inst_15615);

(statearr_15680[(11)] = inst_15614);

return statearr_15680;
})();
var statearr_15681_15714 = state_15661__$1;
(statearr_15681_15714[(2)] = null);

(statearr_15681_15714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (3))){
var inst_15659 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15661__$1,inst_15659);
} else {
if((state_val_15662 === (12))){
var inst_15647 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15682_15715 = state_15661__$1;
(statearr_15682_15715[(2)] = inst_15647);

(statearr_15682_15715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (2))){
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15661__$1,(4),in$);
} else {
if((state_val_15662 === (23))){
var inst_15655 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15683_15716 = state_15661__$1;
(statearr_15683_15716[(2)] = inst_15655);

(statearr_15683_15716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (19))){
var inst_15642 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15684_15717 = state_15661__$1;
(statearr_15684_15717[(2)] = inst_15642);

(statearr_15684_15717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (11))){
var inst_15613 = (state_15661[(9)]);
var inst_15627 = (state_15661[(7)]);
var inst_15627__$1 = cljs.core.seq.call(null,inst_15613);
var state_15661__$1 = (function (){var statearr_15685 = state_15661;
(statearr_15685[(7)] = inst_15627__$1);

return statearr_15685;
})();
if(inst_15627__$1){
var statearr_15686_15718 = state_15661__$1;
(statearr_15686_15718[(1)] = (14));

} else {
var statearr_15687_15719 = state_15661__$1;
(statearr_15687_15719[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (9))){
var inst_15649 = (state_15661[(2)]);
var inst_15650 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15661__$1 = (function (){var statearr_15688 = state_15661;
(statearr_15688[(15)] = inst_15649);

return statearr_15688;
})();
if(cljs.core.truth_(inst_15650)){
var statearr_15689_15720 = state_15661__$1;
(statearr_15689_15720[(1)] = (21));

} else {
var statearr_15690_15721 = state_15661__$1;
(statearr_15690_15721[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (5))){
var inst_15605 = cljs.core.async.close_BANG_.call(null,out);
var state_15661__$1 = state_15661;
var statearr_15691_15722 = state_15661__$1;
(statearr_15691_15722[(2)] = inst_15605);

(statearr_15691_15722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (14))){
var inst_15627 = (state_15661[(7)]);
var inst_15629 = cljs.core.chunked_seq_QMARK_.call(null,inst_15627);
var state_15661__$1 = state_15661;
if(inst_15629){
var statearr_15692_15723 = state_15661__$1;
(statearr_15692_15723[(1)] = (17));

} else {
var statearr_15693_15724 = state_15661__$1;
(statearr_15693_15724[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (16))){
var inst_15645 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15694_15725 = state_15661__$1;
(statearr_15694_15725[(2)] = inst_15645);

(statearr_15694_15725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (10))){
var inst_15616 = (state_15661[(8)]);
var inst_15614 = (state_15661[(11)]);
var inst_15621 = cljs.core._nth.call(null,inst_15614,inst_15616);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15661__$1,(13),out,inst_15621);
} else {
if((state_val_15662 === (18))){
var inst_15627 = (state_15661[(7)]);
var inst_15636 = cljs.core.first.call(null,inst_15627);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15661__$1,(20),out,inst_15636);
} else {
if((state_val_15662 === (8))){
var inst_15616 = (state_15661[(8)]);
var inst_15615 = (state_15661[(10)]);
var inst_15618 = (inst_15616 < inst_15615);
var inst_15619 = inst_15618;
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15619)){
var statearr_15695_15726 = state_15661__$1;
(statearr_15695_15726[(1)] = (10));

} else {
var statearr_15696_15727 = state_15661__$1;
(statearr_15696_15727[(1)] = (11));

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
});})(c__9866__auto__))
;
return ((function (switch__9845__auto__,c__9866__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____0 = (function (){
var statearr_15700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15700[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__);

(statearr_15700[(1)] = (1));

return statearr_15700;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____1 = (function (state_15661){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15701){if((e15701 instanceof Object)){
var ex__9849__auto__ = e15701;
var statearr_15702_15728 = state_15661;
(statearr_15702_15728[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15729 = state_15661;
state_15661 = G__15729;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__ = function(state_15661){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____1.call(this,state_15661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9846__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__))
})();
var state__9868__auto__ = (function (){var statearr_15703 = f__9867__auto__.call(null);
(statearr_15703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_15703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__))
);

return c__9866__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15730 = [];
var len__7923__auto___15733 = arguments.length;
var i__7924__auto___15734 = (0);
while(true){
if((i__7924__auto___15734 < len__7923__auto___15733)){
args15730.push((arguments[i__7924__auto___15734]));

var G__15735 = (i__7924__auto___15734 + (1));
i__7924__auto___15734 = G__15735;
continue;
} else {
}
break;
}

var G__15732 = args15730.length;
switch (G__15732) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15730.length)].join('')));

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
var args15737 = [];
var len__7923__auto___15740 = arguments.length;
var i__7924__auto___15741 = (0);
while(true){
if((i__7924__auto___15741 < len__7923__auto___15740)){
args15737.push((arguments[i__7924__auto___15741]));

var G__15742 = (i__7924__auto___15741 + (1));
i__7924__auto___15741 = G__15742;
continue;
} else {
}
break;
}

var G__15739 = args15737.length;
switch (G__15739) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15737.length)].join('')));

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
var args15744 = [];
var len__7923__auto___15795 = arguments.length;
var i__7924__auto___15796 = (0);
while(true){
if((i__7924__auto___15796 < len__7923__auto___15795)){
args15744.push((arguments[i__7924__auto___15796]));

var G__15797 = (i__7924__auto___15796 + (1));
i__7924__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var G__15746 = args15744.length;
switch (G__15746) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15744.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15799,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15799,out){
return (function (state_15770){
var state_val_15771 = (state_15770[(1)]);
if((state_val_15771 === (7))){
var inst_15765 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15772_15800 = state_15770__$1;
(statearr_15772_15800[(2)] = inst_15765);

(statearr_15772_15800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (1))){
var inst_15747 = null;
var state_15770__$1 = (function (){var statearr_15773 = state_15770;
(statearr_15773[(7)] = inst_15747);

return statearr_15773;
})();
var statearr_15774_15801 = state_15770__$1;
(statearr_15774_15801[(2)] = null);

(statearr_15774_15801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (4))){
var inst_15750 = (state_15770[(8)]);
var inst_15750__$1 = (state_15770[(2)]);
var inst_15751 = (inst_15750__$1 == null);
var inst_15752 = cljs.core.not.call(null,inst_15751);
var state_15770__$1 = (function (){var statearr_15775 = state_15770;
(statearr_15775[(8)] = inst_15750__$1);

return statearr_15775;
})();
if(inst_15752){
var statearr_15776_15802 = state_15770__$1;
(statearr_15776_15802[(1)] = (5));

} else {
var statearr_15777_15803 = state_15770__$1;
(statearr_15777_15803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (6))){
var state_15770__$1 = state_15770;
var statearr_15778_15804 = state_15770__$1;
(statearr_15778_15804[(2)] = null);

(statearr_15778_15804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (3))){
var inst_15767 = (state_15770[(2)]);
var inst_15768 = cljs.core.async.close_BANG_.call(null,out);
var state_15770__$1 = (function (){var statearr_15779 = state_15770;
(statearr_15779[(9)] = inst_15767);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15770__$1,inst_15768);
} else {
if((state_val_15771 === (2))){
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15770__$1,(4),ch);
} else {
if((state_val_15771 === (11))){
var inst_15750 = (state_15770[(8)]);
var inst_15759 = (state_15770[(2)]);
var inst_15747 = inst_15750;
var state_15770__$1 = (function (){var statearr_15780 = state_15770;
(statearr_15780[(10)] = inst_15759);

(statearr_15780[(7)] = inst_15747);

return statearr_15780;
})();
var statearr_15781_15805 = state_15770__$1;
(statearr_15781_15805[(2)] = null);

(statearr_15781_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (9))){
var inst_15750 = (state_15770[(8)]);
var state_15770__$1 = state_15770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15770__$1,(11),out,inst_15750);
} else {
if((state_val_15771 === (5))){
var inst_15750 = (state_15770[(8)]);
var inst_15747 = (state_15770[(7)]);
var inst_15754 = cljs.core._EQ_.call(null,inst_15750,inst_15747);
var state_15770__$1 = state_15770;
if(inst_15754){
var statearr_15783_15806 = state_15770__$1;
(statearr_15783_15806[(1)] = (8));

} else {
var statearr_15784_15807 = state_15770__$1;
(statearr_15784_15807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (10))){
var inst_15762 = (state_15770[(2)]);
var state_15770__$1 = state_15770;
var statearr_15785_15808 = state_15770__$1;
(statearr_15785_15808[(2)] = inst_15762);

(statearr_15785_15808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15771 === (8))){
var inst_15747 = (state_15770[(7)]);
var tmp15782 = inst_15747;
var inst_15747__$1 = tmp15782;
var state_15770__$1 = (function (){var statearr_15786 = state_15770;
(statearr_15786[(7)] = inst_15747__$1);

return statearr_15786;
})();
var statearr_15787_15809 = state_15770__$1;
(statearr_15787_15809[(2)] = null);

(statearr_15787_15809[(1)] = (2));


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
});})(c__9866__auto___15799,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15799,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15791[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15791[(1)] = (1));

return statearr_15791;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15770){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15792){if((e15792 instanceof Object)){
var ex__9849__auto__ = e15792;
var statearr_15793_15810 = state_15770;
(statearr_15793_15810[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15811 = state_15770;
state_15770 = G__15811;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15799,out))
})();
var state__9868__auto__ = (function (){var statearr_15794 = f__9867__auto__.call(null);
(statearr_15794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15799);

return statearr_15794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15799,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15812 = [];
var len__7923__auto___15882 = arguments.length;
var i__7924__auto___15883 = (0);
while(true){
if((i__7924__auto___15883 < len__7923__auto___15882)){
args15812.push((arguments[i__7924__auto___15883]));

var G__15884 = (i__7924__auto___15883 + (1));
i__7924__auto___15883 = G__15884;
continue;
} else {
}
break;
}

var G__15814 = args15812.length;
switch (G__15814) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15812.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15886,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15886,out){
return (function (state_15852){
var state_val_15853 = (state_15852[(1)]);
if((state_val_15853 === (7))){
var inst_15848 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15854_15887 = state_15852__$1;
(statearr_15854_15887[(2)] = inst_15848);

(statearr_15854_15887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (1))){
var inst_15815 = (new Array(n));
var inst_15816 = inst_15815;
var inst_15817 = (0);
var state_15852__$1 = (function (){var statearr_15855 = state_15852;
(statearr_15855[(7)] = inst_15816);

(statearr_15855[(8)] = inst_15817);

return statearr_15855;
})();
var statearr_15856_15888 = state_15852__$1;
(statearr_15856_15888[(2)] = null);

(statearr_15856_15888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (4))){
var inst_15820 = (state_15852[(9)]);
var inst_15820__$1 = (state_15852[(2)]);
var inst_15821 = (inst_15820__$1 == null);
var inst_15822 = cljs.core.not.call(null,inst_15821);
var state_15852__$1 = (function (){var statearr_15857 = state_15852;
(statearr_15857[(9)] = inst_15820__$1);

return statearr_15857;
})();
if(inst_15822){
var statearr_15858_15889 = state_15852__$1;
(statearr_15858_15889[(1)] = (5));

} else {
var statearr_15859_15890 = state_15852__$1;
(statearr_15859_15890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (15))){
var inst_15842 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15860_15891 = state_15852__$1;
(statearr_15860_15891[(2)] = inst_15842);

(statearr_15860_15891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (13))){
var state_15852__$1 = state_15852;
var statearr_15861_15892 = state_15852__$1;
(statearr_15861_15892[(2)] = null);

(statearr_15861_15892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (6))){
var inst_15817 = (state_15852[(8)]);
var inst_15838 = (inst_15817 > (0));
var state_15852__$1 = state_15852;
if(cljs.core.truth_(inst_15838)){
var statearr_15862_15893 = state_15852__$1;
(statearr_15862_15893[(1)] = (12));

} else {
var statearr_15863_15894 = state_15852__$1;
(statearr_15863_15894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (3))){
var inst_15850 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15852__$1,inst_15850);
} else {
if((state_val_15853 === (12))){
var inst_15816 = (state_15852[(7)]);
var inst_15840 = cljs.core.vec.call(null,inst_15816);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15852__$1,(15),out,inst_15840);
} else {
if((state_val_15853 === (2))){
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15852__$1,(4),ch);
} else {
if((state_val_15853 === (11))){
var inst_15832 = (state_15852[(2)]);
var inst_15833 = (new Array(n));
var inst_15816 = inst_15833;
var inst_15817 = (0);
var state_15852__$1 = (function (){var statearr_15864 = state_15852;
(statearr_15864[(7)] = inst_15816);

(statearr_15864[(8)] = inst_15817);

(statearr_15864[(10)] = inst_15832);

return statearr_15864;
})();
var statearr_15865_15895 = state_15852__$1;
(statearr_15865_15895[(2)] = null);

(statearr_15865_15895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (9))){
var inst_15816 = (state_15852[(7)]);
var inst_15830 = cljs.core.vec.call(null,inst_15816);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15852__$1,(11),out,inst_15830);
} else {
if((state_val_15853 === (5))){
var inst_15816 = (state_15852[(7)]);
var inst_15825 = (state_15852[(11)]);
var inst_15817 = (state_15852[(8)]);
var inst_15820 = (state_15852[(9)]);
var inst_15824 = (inst_15816[inst_15817] = inst_15820);
var inst_15825__$1 = (inst_15817 + (1));
var inst_15826 = (inst_15825__$1 < n);
var state_15852__$1 = (function (){var statearr_15866 = state_15852;
(statearr_15866[(11)] = inst_15825__$1);

(statearr_15866[(12)] = inst_15824);

return statearr_15866;
})();
if(cljs.core.truth_(inst_15826)){
var statearr_15867_15896 = state_15852__$1;
(statearr_15867_15896[(1)] = (8));

} else {
var statearr_15868_15897 = state_15852__$1;
(statearr_15868_15897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (14))){
var inst_15845 = (state_15852[(2)]);
var inst_15846 = cljs.core.async.close_BANG_.call(null,out);
var state_15852__$1 = (function (){var statearr_15870 = state_15852;
(statearr_15870[(13)] = inst_15845);

return statearr_15870;
})();
var statearr_15871_15898 = state_15852__$1;
(statearr_15871_15898[(2)] = inst_15846);

(statearr_15871_15898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (10))){
var inst_15836 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15872_15899 = state_15852__$1;
(statearr_15872_15899[(2)] = inst_15836);

(statearr_15872_15899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (8))){
var inst_15816 = (state_15852[(7)]);
var inst_15825 = (state_15852[(11)]);
var tmp15869 = inst_15816;
var inst_15816__$1 = tmp15869;
var inst_15817 = inst_15825;
var state_15852__$1 = (function (){var statearr_15873 = state_15852;
(statearr_15873[(7)] = inst_15816__$1);

(statearr_15873[(8)] = inst_15817);

return statearr_15873;
})();
var statearr_15874_15900 = state_15852__$1;
(statearr_15874_15900[(2)] = null);

(statearr_15874_15900[(1)] = (2));


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
});})(c__9866__auto___15886,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15886,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15878[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15878[(1)] = (1));

return statearr_15878;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15852){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15879){if((e15879 instanceof Object)){
var ex__9849__auto__ = e15879;
var statearr_15880_15901 = state_15852;
(statearr_15880_15901[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15902 = state_15852;
state_15852 = G__15902;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15886,out))
})();
var state__9868__auto__ = (function (){var statearr_15881 = f__9867__auto__.call(null);
(statearr_15881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15886);

return statearr_15881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15886,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15903 = [];
var len__7923__auto___15977 = arguments.length;
var i__7924__auto___15978 = (0);
while(true){
if((i__7924__auto___15978 < len__7923__auto___15977)){
args15903.push((arguments[i__7924__auto___15978]));

var G__15979 = (i__7924__auto___15978 + (1));
i__7924__auto___15978 = G__15979;
continue;
} else {
}
break;
}

var G__15905 = args15903.length;
switch (G__15905) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15903.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9866__auto___15981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___15981,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___15981,out){
return (function (state_15947){
var state_val_15948 = (state_15947[(1)]);
if((state_val_15948 === (7))){
var inst_15943 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15949_15982 = state_15947__$1;
(statearr_15949_15982[(2)] = inst_15943);

(statearr_15949_15982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (1))){
var inst_15906 = [];
var inst_15907 = inst_15906;
var inst_15908 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15947__$1 = (function (){var statearr_15950 = state_15947;
(statearr_15950[(7)] = inst_15908);

(statearr_15950[(8)] = inst_15907);

return statearr_15950;
})();
var statearr_15951_15983 = state_15947__$1;
(statearr_15951_15983[(2)] = null);

(statearr_15951_15983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (4))){
var inst_15911 = (state_15947[(9)]);
var inst_15911__$1 = (state_15947[(2)]);
var inst_15912 = (inst_15911__$1 == null);
var inst_15913 = cljs.core.not.call(null,inst_15912);
var state_15947__$1 = (function (){var statearr_15952 = state_15947;
(statearr_15952[(9)] = inst_15911__$1);

return statearr_15952;
})();
if(inst_15913){
var statearr_15953_15984 = state_15947__$1;
(statearr_15953_15984[(1)] = (5));

} else {
var statearr_15954_15985 = state_15947__$1;
(statearr_15954_15985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (15))){
var inst_15937 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15955_15986 = state_15947__$1;
(statearr_15955_15986[(2)] = inst_15937);

(statearr_15955_15986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (13))){
var state_15947__$1 = state_15947;
var statearr_15956_15987 = state_15947__$1;
(statearr_15956_15987[(2)] = null);

(statearr_15956_15987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (6))){
var inst_15907 = (state_15947[(8)]);
var inst_15932 = inst_15907.length;
var inst_15933 = (inst_15932 > (0));
var state_15947__$1 = state_15947;
if(cljs.core.truth_(inst_15933)){
var statearr_15957_15988 = state_15947__$1;
(statearr_15957_15988[(1)] = (12));

} else {
var statearr_15958_15989 = state_15947__$1;
(statearr_15958_15989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (3))){
var inst_15945 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15947__$1,inst_15945);
} else {
if((state_val_15948 === (12))){
var inst_15907 = (state_15947[(8)]);
var inst_15935 = cljs.core.vec.call(null,inst_15907);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15947__$1,(15),out,inst_15935);
} else {
if((state_val_15948 === (2))){
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15947__$1,(4),ch);
} else {
if((state_val_15948 === (11))){
var inst_15915 = (state_15947[(10)]);
var inst_15911 = (state_15947[(9)]);
var inst_15925 = (state_15947[(2)]);
var inst_15926 = [];
var inst_15927 = inst_15926.push(inst_15911);
var inst_15907 = inst_15926;
var inst_15908 = inst_15915;
var state_15947__$1 = (function (){var statearr_15959 = state_15947;
(statearr_15959[(11)] = inst_15927);

(statearr_15959[(12)] = inst_15925);

(statearr_15959[(7)] = inst_15908);

(statearr_15959[(8)] = inst_15907);

return statearr_15959;
})();
var statearr_15960_15990 = state_15947__$1;
(statearr_15960_15990[(2)] = null);

(statearr_15960_15990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (9))){
var inst_15907 = (state_15947[(8)]);
var inst_15923 = cljs.core.vec.call(null,inst_15907);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15947__$1,(11),out,inst_15923);
} else {
if((state_val_15948 === (5))){
var inst_15915 = (state_15947[(10)]);
var inst_15908 = (state_15947[(7)]);
var inst_15911 = (state_15947[(9)]);
var inst_15915__$1 = f.call(null,inst_15911);
var inst_15916 = cljs.core._EQ_.call(null,inst_15915__$1,inst_15908);
var inst_15917 = cljs.core.keyword_identical_QMARK_.call(null,inst_15908,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15918 = (inst_15916) || (inst_15917);
var state_15947__$1 = (function (){var statearr_15961 = state_15947;
(statearr_15961[(10)] = inst_15915__$1);

return statearr_15961;
})();
if(cljs.core.truth_(inst_15918)){
var statearr_15962_15991 = state_15947__$1;
(statearr_15962_15991[(1)] = (8));

} else {
var statearr_15963_15992 = state_15947__$1;
(statearr_15963_15992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (14))){
var inst_15940 = (state_15947[(2)]);
var inst_15941 = cljs.core.async.close_BANG_.call(null,out);
var state_15947__$1 = (function (){var statearr_15965 = state_15947;
(statearr_15965[(13)] = inst_15940);

return statearr_15965;
})();
var statearr_15966_15993 = state_15947__$1;
(statearr_15966_15993[(2)] = inst_15941);

(statearr_15966_15993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (10))){
var inst_15930 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15967_15994 = state_15947__$1;
(statearr_15967_15994[(2)] = inst_15930);

(statearr_15967_15994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (8))){
var inst_15915 = (state_15947[(10)]);
var inst_15907 = (state_15947[(8)]);
var inst_15911 = (state_15947[(9)]);
var inst_15920 = inst_15907.push(inst_15911);
var tmp15964 = inst_15907;
var inst_15907__$1 = tmp15964;
var inst_15908 = inst_15915;
var state_15947__$1 = (function (){var statearr_15968 = state_15947;
(statearr_15968[(14)] = inst_15920);

(statearr_15968[(7)] = inst_15908);

(statearr_15968[(8)] = inst_15907__$1);

return statearr_15968;
})();
var statearr_15969_15995 = state_15947__$1;
(statearr_15969_15995[(2)] = null);

(statearr_15969_15995[(1)] = (2));


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
});})(c__9866__auto___15981,out))
;
return ((function (switch__9845__auto__,c__9866__auto___15981,out){
return (function() {
var cljs$core$async$state_machine__9846__auto__ = null;
var cljs$core$async$state_machine__9846__auto____0 = (function (){
var statearr_15973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15973[(0)] = cljs$core$async$state_machine__9846__auto__);

(statearr_15973[(1)] = (1));

return statearr_15973;
});
var cljs$core$async$state_machine__9846__auto____1 = (function (state_15947){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_15947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e15974){if((e15974 instanceof Object)){
var ex__9849__auto__ = e15974;
var statearr_15975_15996 = state_15947;
(statearr_15975_15996[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15997 = state_15947;
state_15947 = G__15997;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
cljs$core$async$state_machine__9846__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9846__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9846__auto____0;
cljs$core$async$state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9846__auto____1;
return cljs$core$async$state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___15981,out))
})();
var state__9868__auto__ = (function (){var statearr_15976 = f__9867__auto__.call(null);
(statearr_15976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___15981);

return statearr_15976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___15981,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

