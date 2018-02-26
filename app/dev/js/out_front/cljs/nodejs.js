// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10368__i = 0, G__10368__a = new Array(arguments.length -  0);
while (G__10368__i < G__10368__a.length) {G__10368__a[G__10368__i] = arguments[G__10368__i + 0]; ++G__10368__i;}
  args = new cljs.core.IndexedSeq(G__10368__a,0);
} 
return G__10367__delegate.call(this,args);};
G__10367.cljs$lang$maxFixedArity = 0;
G__10367.cljs$lang$applyTo = (function (arglist__10369){
var args = cljs.core.seq(arglist__10369);
return G__10367__delegate(args);
});
G__10367.cljs$core$IFn$_invoke$arity$variadic = G__10367__delegate;
return G__10367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10371__i = 0, G__10371__a = new Array(arguments.length -  0);
while (G__10371__i < G__10371__a.length) {G__10371__a[G__10371__i] = arguments[G__10371__i + 0]; ++G__10371__i;}
  args = new cljs.core.IndexedSeq(G__10371__a,0);
} 
return G__10370__delegate.call(this,args);};
G__10370.cljs$lang$maxFixedArity = 0;
G__10370.cljs$lang$applyTo = (function (arglist__10372){
var args = cljs.core.seq(arglist__10372);
return G__10370__delegate(args);
});
G__10370.cljs$core$IFn$_invoke$arity$variadic = G__10370__delegate;
return G__10370;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map