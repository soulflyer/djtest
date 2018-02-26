// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12292__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12293__i = 0, G__12293__a = new Array(arguments.length -  0);
while (G__12293__i < G__12293__a.length) {G__12293__a[G__12293__i] = arguments[G__12293__i + 0]; ++G__12293__i;}
  args = new cljs.core.IndexedSeq(G__12293__a,0);
} 
return G__12292__delegate.call(this,args);};
G__12292.cljs$lang$maxFixedArity = 0;
G__12292.cljs$lang$applyTo = (function (arglist__12294){
var args = cljs.core.seq(arglist__12294);
return G__12292__delegate(args);
});
G__12292.cljs$core$IFn$_invoke$arity$variadic = G__12292__delegate;
return G__12292;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12295__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12296__i = 0, G__12296__a = new Array(arguments.length -  0);
while (G__12296__i < G__12296__a.length) {G__12296__a[G__12296__i] = arguments[G__12296__i + 0]; ++G__12296__i;}
  args = new cljs.core.IndexedSeq(G__12296__a,0);
} 
return G__12295__delegate.call(this,args);};
G__12295.cljs$lang$maxFixedArity = 0;
G__12295.cljs$lang$applyTo = (function (arglist__12297){
var args = cljs.core.seq(arglist__12297);
return G__12295__delegate(args);
});
G__12295.cljs$core$IFn$_invoke$arity$variadic = G__12295__delegate;
return G__12295;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
