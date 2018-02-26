// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16268__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16269__i = 0, G__16269__a = new Array(arguments.length -  0);
while (G__16269__i < G__16269__a.length) {G__16269__a[G__16269__i] = arguments[G__16269__i + 0]; ++G__16269__i;}
  args = new cljs.core.IndexedSeq(G__16269__a,0);
} 
return G__16268__delegate.call(this,args);};
G__16268.cljs$lang$maxFixedArity = 0;
G__16268.cljs$lang$applyTo = (function (arglist__16270){
var args = cljs.core.seq(arglist__16270);
return G__16268__delegate(args);
});
G__16268.cljs$core$IFn$_invoke$arity$variadic = G__16268__delegate;
return G__16268;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16271__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16272__i = 0, G__16272__a = new Array(arguments.length -  0);
while (G__16272__i < G__16272__a.length) {G__16272__a[G__16272__i] = arguments[G__16272__i + 0]; ++G__16272__i;}
  args = new cljs.core.IndexedSeq(G__16272__a,0);
} 
return G__16271__delegate.call(this,args);};
G__16271.cljs$lang$maxFixedArity = 0;
G__16271.cljs$lang$applyTo = (function (arglist__16273){
var args = cljs.core.seq(arglist__16273);
return G__16271__delegate(args);
});
G__16271.cljs$core$IFn$_invoke$arity$variadic = G__16271__delegate;
return G__16271;
})()
;

return null;
});
