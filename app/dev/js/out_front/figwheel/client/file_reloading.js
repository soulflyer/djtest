// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__45121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__45121__auto__){
return or__45121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__45121__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__45121__auto__)){
return or__45121__auto__;
} else {
var or__45121__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__45121__auto____$1)){
return or__45121__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47411_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47411_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47416 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47417 = null;
var count__47418 = (0);
var i__47419 = (0);
while(true){
if((i__47419 < count__47418)){
var n = cljs.core._nth.call(null,chunk__47417,i__47419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47420 = seq__47416;
var G__47421 = chunk__47417;
var G__47422 = count__47418;
var G__47423 = (i__47419 + (1));
seq__47416 = G__47420;
chunk__47417 = G__47421;
count__47418 = G__47422;
i__47419 = G__47423;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47416);
if(temp__4657__auto__){
var seq__47416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47416__$1)){
var c__45940__auto__ = cljs.core.chunk_first.call(null,seq__47416__$1);
var G__47424 = cljs.core.chunk_rest.call(null,seq__47416__$1);
var G__47425 = c__45940__auto__;
var G__47426 = cljs.core.count.call(null,c__45940__auto__);
var G__47427 = (0);
seq__47416 = G__47424;
chunk__47417 = G__47425;
count__47418 = G__47426;
i__47419 = G__47427;
continue;
} else {
var n = cljs.core.first.call(null,seq__47416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47428 = cljs.core.next.call(null,seq__47416__$1);
var G__47429 = null;
var G__47430 = (0);
var G__47431 = (0);
seq__47416 = G__47428;
chunk__47417 = G__47429;
count__47418 = G__47430;
i__47419 = G__47431;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47482_47493 = cljs.core.seq.call(null,deps);
var chunk__47483_47494 = null;
var count__47484_47495 = (0);
var i__47485_47496 = (0);
while(true){
if((i__47485_47496 < count__47484_47495)){
var dep_47497 = cljs.core._nth.call(null,chunk__47483_47494,i__47485_47496);
topo_sort_helper_STAR_.call(null,dep_47497,(depth + (1)),state);

var G__47498 = seq__47482_47493;
var G__47499 = chunk__47483_47494;
var G__47500 = count__47484_47495;
var G__47501 = (i__47485_47496 + (1));
seq__47482_47493 = G__47498;
chunk__47483_47494 = G__47499;
count__47484_47495 = G__47500;
i__47485_47496 = G__47501;
continue;
} else {
var temp__4657__auto___47502 = cljs.core.seq.call(null,seq__47482_47493);
if(temp__4657__auto___47502){
var seq__47482_47503__$1 = temp__4657__auto___47502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47482_47503__$1)){
var c__45940__auto___47504 = cljs.core.chunk_first.call(null,seq__47482_47503__$1);
var G__47505 = cljs.core.chunk_rest.call(null,seq__47482_47503__$1);
var G__47506 = c__45940__auto___47504;
var G__47507 = cljs.core.count.call(null,c__45940__auto___47504);
var G__47508 = (0);
seq__47482_47493 = G__47505;
chunk__47483_47494 = G__47506;
count__47484_47495 = G__47507;
i__47485_47496 = G__47508;
continue;
} else {
var dep_47509 = cljs.core.first.call(null,seq__47482_47503__$1);
topo_sort_helper_STAR_.call(null,dep_47509,(depth + (1)),state);

var G__47510 = cljs.core.next.call(null,seq__47482_47503__$1);
var G__47511 = null;
var G__47512 = (0);
var G__47513 = (0);
seq__47482_47493 = G__47510;
chunk__47483_47494 = G__47511;
count__47484_47495 = G__47512;
i__47485_47496 = G__47513;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47486){
var vec__47490 = p__47486;
var seq__47491 = cljs.core.seq.call(null,vec__47490);
var first__47492 = cljs.core.first.call(null,seq__47491);
var seq__47491__$1 = cljs.core.next.call(null,seq__47491);
var x = first__47492;
var xs = seq__47491__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47490,seq__47491,first__47492,seq__47491__$1,x,xs,get_deps__$1){
return (function (p1__47432_SHARP_){
return clojure.set.difference.call(null,p1__47432_SHARP_,x);
});})(vec__47490,seq__47491,first__47492,seq__47491__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47526 = cljs.core.seq.call(null,provides);
var chunk__47527 = null;
var count__47528 = (0);
var i__47529 = (0);
while(true){
if((i__47529 < count__47528)){
var prov = cljs.core._nth.call(null,chunk__47527,i__47529);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47530_47538 = cljs.core.seq.call(null,requires);
var chunk__47531_47539 = null;
var count__47532_47540 = (0);
var i__47533_47541 = (0);
while(true){
if((i__47533_47541 < count__47532_47540)){
var req_47542 = cljs.core._nth.call(null,chunk__47531_47539,i__47533_47541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47542,prov);

var G__47543 = seq__47530_47538;
var G__47544 = chunk__47531_47539;
var G__47545 = count__47532_47540;
var G__47546 = (i__47533_47541 + (1));
seq__47530_47538 = G__47543;
chunk__47531_47539 = G__47544;
count__47532_47540 = G__47545;
i__47533_47541 = G__47546;
continue;
} else {
var temp__4657__auto___47547 = cljs.core.seq.call(null,seq__47530_47538);
if(temp__4657__auto___47547){
var seq__47530_47548__$1 = temp__4657__auto___47547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47530_47548__$1)){
var c__45940__auto___47549 = cljs.core.chunk_first.call(null,seq__47530_47548__$1);
var G__47550 = cljs.core.chunk_rest.call(null,seq__47530_47548__$1);
var G__47551 = c__45940__auto___47549;
var G__47552 = cljs.core.count.call(null,c__45940__auto___47549);
var G__47553 = (0);
seq__47530_47538 = G__47550;
chunk__47531_47539 = G__47551;
count__47532_47540 = G__47552;
i__47533_47541 = G__47553;
continue;
} else {
var req_47554 = cljs.core.first.call(null,seq__47530_47548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47554,prov);

var G__47555 = cljs.core.next.call(null,seq__47530_47548__$1);
var G__47556 = null;
var G__47557 = (0);
var G__47558 = (0);
seq__47530_47538 = G__47555;
chunk__47531_47539 = G__47556;
count__47532_47540 = G__47557;
i__47533_47541 = G__47558;
continue;
}
} else {
}
}
break;
}

var G__47559 = seq__47526;
var G__47560 = chunk__47527;
var G__47561 = count__47528;
var G__47562 = (i__47529 + (1));
seq__47526 = G__47559;
chunk__47527 = G__47560;
count__47528 = G__47561;
i__47529 = G__47562;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47526);
if(temp__4657__auto__){
var seq__47526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47526__$1)){
var c__45940__auto__ = cljs.core.chunk_first.call(null,seq__47526__$1);
var G__47563 = cljs.core.chunk_rest.call(null,seq__47526__$1);
var G__47564 = c__45940__auto__;
var G__47565 = cljs.core.count.call(null,c__45940__auto__);
var G__47566 = (0);
seq__47526 = G__47563;
chunk__47527 = G__47564;
count__47528 = G__47565;
i__47529 = G__47566;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47526__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47534_47567 = cljs.core.seq.call(null,requires);
var chunk__47535_47568 = null;
var count__47536_47569 = (0);
var i__47537_47570 = (0);
while(true){
if((i__47537_47570 < count__47536_47569)){
var req_47571 = cljs.core._nth.call(null,chunk__47535_47568,i__47537_47570);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47571,prov);

var G__47572 = seq__47534_47567;
var G__47573 = chunk__47535_47568;
var G__47574 = count__47536_47569;
var G__47575 = (i__47537_47570 + (1));
seq__47534_47567 = G__47572;
chunk__47535_47568 = G__47573;
count__47536_47569 = G__47574;
i__47537_47570 = G__47575;
continue;
} else {
var temp__4657__auto___47576__$1 = cljs.core.seq.call(null,seq__47534_47567);
if(temp__4657__auto___47576__$1){
var seq__47534_47577__$1 = temp__4657__auto___47576__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47534_47577__$1)){
var c__45940__auto___47578 = cljs.core.chunk_first.call(null,seq__47534_47577__$1);
var G__47579 = cljs.core.chunk_rest.call(null,seq__47534_47577__$1);
var G__47580 = c__45940__auto___47578;
var G__47581 = cljs.core.count.call(null,c__45940__auto___47578);
var G__47582 = (0);
seq__47534_47567 = G__47579;
chunk__47535_47568 = G__47580;
count__47536_47569 = G__47581;
i__47537_47570 = G__47582;
continue;
} else {
var req_47583 = cljs.core.first.call(null,seq__47534_47577__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47583,prov);

var G__47584 = cljs.core.next.call(null,seq__47534_47577__$1);
var G__47585 = null;
var G__47586 = (0);
var G__47587 = (0);
seq__47534_47567 = G__47584;
chunk__47535_47568 = G__47585;
count__47536_47569 = G__47586;
i__47537_47570 = G__47587;
continue;
}
} else {
}
}
break;
}

var G__47588 = cljs.core.next.call(null,seq__47526__$1);
var G__47589 = null;
var G__47590 = (0);
var G__47591 = (0);
seq__47526 = G__47588;
chunk__47527 = G__47589;
count__47528 = G__47590;
i__47529 = G__47591;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47596_47600 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47597_47601 = null;
var count__47598_47602 = (0);
var i__47599_47603 = (0);
while(true){
if((i__47599_47603 < count__47598_47602)){
var ns_47604 = cljs.core._nth.call(null,chunk__47597_47601,i__47599_47603);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47604);

var G__47605 = seq__47596_47600;
var G__47606 = chunk__47597_47601;
var G__47607 = count__47598_47602;
var G__47608 = (i__47599_47603 + (1));
seq__47596_47600 = G__47605;
chunk__47597_47601 = G__47606;
count__47598_47602 = G__47607;
i__47599_47603 = G__47608;
continue;
} else {
var temp__4657__auto___47609 = cljs.core.seq.call(null,seq__47596_47600);
if(temp__4657__auto___47609){
var seq__47596_47610__$1 = temp__4657__auto___47609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47596_47610__$1)){
var c__45940__auto___47611 = cljs.core.chunk_first.call(null,seq__47596_47610__$1);
var G__47612 = cljs.core.chunk_rest.call(null,seq__47596_47610__$1);
var G__47613 = c__45940__auto___47611;
var G__47614 = cljs.core.count.call(null,c__45940__auto___47611);
var G__47615 = (0);
seq__47596_47600 = G__47612;
chunk__47597_47601 = G__47613;
count__47598_47602 = G__47614;
i__47599_47603 = G__47615;
continue;
} else {
var ns_47616 = cljs.core.first.call(null,seq__47596_47610__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47616);

var G__47617 = cljs.core.next.call(null,seq__47596_47610__$1);
var G__47618 = null;
var G__47619 = (0);
var G__47620 = (0);
seq__47596_47600 = G__47617;
chunk__47597_47601 = G__47618;
count__47598_47602 = G__47619;
i__47599_47603 = G__47620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__45121__auto__ = goog.require__;
if(cljs.core.truth_(or__45121__auto__)){
return or__45121__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47621__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47622__i = 0, G__47622__a = new Array(arguments.length -  0);
while (G__47622__i < G__47622__a.length) {G__47622__a[G__47622__i] = arguments[G__47622__i + 0]; ++G__47622__i;}
  args = new cljs.core.IndexedSeq(G__47622__a,0);
} 
return G__47621__delegate.call(this,args);};
G__47621.cljs$lang$maxFixedArity = 0;
G__47621.cljs$lang$applyTo = (function (arglist__47623){
var args = cljs.core.seq(arglist__47623);
return G__47621__delegate(args);
});
G__47621.cljs$core$IFn$_invoke$arity$variadic = G__47621__delegate;
return G__47621;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47624 = cljs.core._EQ_;
var expr__47625 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47624.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47625))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__47624,expr__47625){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__47624,expr__47625))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__47624,expr__47625){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47627){if((e47627 instanceof Error)){
var e = e47627;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47627;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__47624,expr__47625))
} else {
if(cljs.core.truth_(pred__47624.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47624.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__47625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47624.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47625))){
return ((function (pred__47624,expr__47625){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47628){if((e47628 instanceof Error)){
var e = e47628;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47628;

}
}})());
});
;})(pred__47624,expr__47625))
} else {
return ((function (pred__47624,expr__47625){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47624,expr__47625))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47629,callback){
var map__47632 = p__47629;
var map__47632__$1 = ((((!((map__47632 == null)))?((((map__47632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47632):map__47632);
var file_msg = map__47632__$1;
var request_url = cljs.core.get.call(null,map__47632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47632,map__47632__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47632,map__47632__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__){
return (function (state_47656){
var state_val_47657 = (state_47656[(1)]);
if((state_val_47657 === (7))){
var inst_47652 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47658_47678 = state_47656__$1;
(statearr_47658_47678[(2)] = inst_47652);

(statearr_47658_47678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (1))){
var state_47656__$1 = state_47656;
var statearr_47659_47679 = state_47656__$1;
(statearr_47659_47679[(2)] = null);

(statearr_47659_47679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (4))){
var inst_47636 = (state_47656[(7)]);
var inst_47636__$1 = (state_47656[(2)]);
var state_47656__$1 = (function (){var statearr_47660 = state_47656;
(statearr_47660[(7)] = inst_47636__$1);

return statearr_47660;
})();
if(cljs.core.truth_(inst_47636__$1)){
var statearr_47661_47680 = state_47656__$1;
(statearr_47661_47680[(1)] = (5));

} else {
var statearr_47662_47681 = state_47656__$1;
(statearr_47662_47681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (6))){
var state_47656__$1 = state_47656;
var statearr_47663_47682 = state_47656__$1;
(statearr_47663_47682[(2)] = null);

(statearr_47663_47682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (3))){
var inst_47654 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47656__$1,inst_47654);
} else {
if((state_val_47657 === (2))){
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47657 === (11))){
var inst_47648 = (state_47656[(2)]);
var state_47656__$1 = (function (){var statearr_47664 = state_47656;
(statearr_47664[(8)] = inst_47648);

return statearr_47664;
})();
var statearr_47665_47683 = state_47656__$1;
(statearr_47665_47683[(2)] = null);

(statearr_47665_47683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (9))){
var inst_47642 = (state_47656[(9)]);
var inst_47640 = (state_47656[(10)]);
var inst_47644 = inst_47642.call(null,inst_47640);
var state_47656__$1 = state_47656;
var statearr_47666_47684 = state_47656__$1;
(statearr_47666_47684[(2)] = inst_47644);

(statearr_47666_47684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (5))){
var inst_47636 = (state_47656[(7)]);
var inst_47638 = figwheel.client.file_reloading.blocking_load.call(null,inst_47636);
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(8),inst_47638);
} else {
if((state_val_47657 === (10))){
var inst_47640 = (state_47656[(10)]);
var inst_47646 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47640);
var state_47656__$1 = state_47656;
var statearr_47667_47685 = state_47656__$1;
(statearr_47667_47685[(2)] = inst_47646);

(statearr_47667_47685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (8))){
var inst_47636 = (state_47656[(7)]);
var inst_47642 = (state_47656[(9)]);
var inst_47640 = (state_47656[(2)]);
var inst_47641 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47642__$1 = cljs.core.get.call(null,inst_47641,inst_47636);
var state_47656__$1 = (function (){var statearr_47668 = state_47656;
(statearr_47668[(9)] = inst_47642__$1);

(statearr_47668[(10)] = inst_47640);

return statearr_47668;
})();
if(cljs.core.truth_(inst_47642__$1)){
var statearr_47669_47686 = state_47656__$1;
(statearr_47669_47686[(1)] = (9));

} else {
var statearr_47670_47687 = state_47656__$1;
(statearr_47670_47687[(1)] = (10));

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
});})(c__47332__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47312__auto__ = null;
var figwheel$client$file_reloading$state_machine__47312__auto____0 = (function (){
var statearr_47674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47674[(0)] = figwheel$client$file_reloading$state_machine__47312__auto__);

(statearr_47674[(1)] = (1));

return statearr_47674;
});
var figwheel$client$file_reloading$state_machine__47312__auto____1 = (function (state_47656){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_47656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e47675){if((e47675 instanceof Object)){
var ex__47315__auto__ = e47675;
var statearr_47676_47688 = state_47656;
(statearr_47676_47688[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47689 = state_47656;
state_47656 = G__47689;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47312__auto__ = function(state_47656){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47312__auto____1.call(this,state_47656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47312__auto____0;
figwheel$client$file_reloading$state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47312__auto____1;
return figwheel$client$file_reloading$state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__))
})();
var state__47334__auto__ = (function (){var statearr_47677 = f__47333__auto__.call(null);
(statearr_47677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_47677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__))
);

return c__47332__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47690,callback){
var map__47693 = p__47690;
var map__47693__$1 = ((((!((map__47693 == null)))?((((map__47693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47693):map__47693);
var file_msg = map__47693__$1;
var namespace = cljs.core.get.call(null,map__47693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47693,map__47693__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47693,map__47693__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47695){
var map__47698 = p__47695;
var map__47698__$1 = ((((!((map__47698 == null)))?((((map__47698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47698):map__47698);
var file_msg = map__47698__$1;
var namespace = cljs.core.get.call(null,map__47698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47700){
var map__47703 = p__47700;
var map__47703__$1 = ((((!((map__47703 == null)))?((((map__47703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47703):map__47703);
var file_msg = map__47703__$1;
var namespace = cljs.core.get.call(null,map__47703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__45109__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__45109__auto__){
var or__45121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45121__auto__)){
return or__45121__auto__;
} else {
var or__45121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45121__auto____$1)){
return or__45121__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__45109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47705,callback){
var map__47708 = p__47705;
var map__47708__$1 = ((((!((map__47708 == null)))?((((map__47708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47708):map__47708);
var file_msg = map__47708__$1;
var request_url = cljs.core.get.call(null,map__47708__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47332__auto___47812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto___47812,out){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto___47812,out){
return (function (state_47794){
var state_val_47795 = (state_47794[(1)]);
if((state_val_47795 === (1))){
var inst_47768 = cljs.core.seq.call(null,files);
var inst_47769 = cljs.core.first.call(null,inst_47768);
var inst_47770 = cljs.core.next.call(null,inst_47768);
var inst_47771 = files;
var state_47794__$1 = (function (){var statearr_47796 = state_47794;
(statearr_47796[(7)] = inst_47769);

(statearr_47796[(8)] = inst_47771);

(statearr_47796[(9)] = inst_47770);

return statearr_47796;
})();
var statearr_47797_47813 = state_47794__$1;
(statearr_47797_47813[(2)] = null);

(statearr_47797_47813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (2))){
var inst_47771 = (state_47794[(8)]);
var inst_47777 = (state_47794[(10)]);
var inst_47776 = cljs.core.seq.call(null,inst_47771);
var inst_47777__$1 = cljs.core.first.call(null,inst_47776);
var inst_47778 = cljs.core.next.call(null,inst_47776);
var inst_47779 = (inst_47777__$1 == null);
var inst_47780 = cljs.core.not.call(null,inst_47779);
var state_47794__$1 = (function (){var statearr_47798 = state_47794;
(statearr_47798[(11)] = inst_47778);

(statearr_47798[(10)] = inst_47777__$1);

return statearr_47798;
})();
if(inst_47780){
var statearr_47799_47814 = state_47794__$1;
(statearr_47799_47814[(1)] = (4));

} else {
var statearr_47800_47815 = state_47794__$1;
(statearr_47800_47815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (3))){
var inst_47792 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47794__$1,inst_47792);
} else {
if((state_val_47795 === (4))){
var inst_47777 = (state_47794[(10)]);
var inst_47782 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47777);
var state_47794__$1 = state_47794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47794__$1,(7),inst_47782);
} else {
if((state_val_47795 === (5))){
var inst_47788 = cljs.core.async.close_BANG_.call(null,out);
var state_47794__$1 = state_47794;
var statearr_47801_47816 = state_47794__$1;
(statearr_47801_47816[(2)] = inst_47788);

(statearr_47801_47816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (6))){
var inst_47790 = (state_47794[(2)]);
var state_47794__$1 = state_47794;
var statearr_47802_47817 = state_47794__$1;
(statearr_47802_47817[(2)] = inst_47790);

(statearr_47802_47817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47795 === (7))){
var inst_47778 = (state_47794[(11)]);
var inst_47784 = (state_47794[(2)]);
var inst_47785 = cljs.core.async.put_BANG_.call(null,out,inst_47784);
var inst_47771 = inst_47778;
var state_47794__$1 = (function (){var statearr_47803 = state_47794;
(statearr_47803[(8)] = inst_47771);

(statearr_47803[(12)] = inst_47785);

return statearr_47803;
})();
var statearr_47804_47818 = state_47794__$1;
(statearr_47804_47818[(2)] = null);

(statearr_47804_47818[(1)] = (2));


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
});})(c__47332__auto___47812,out))
;
return ((function (switch__47311__auto__,c__47332__auto___47812,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____0 = (function (){
var statearr_47808 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47808[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__);

(statearr_47808[(1)] = (1));

return statearr_47808;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____1 = (function (state_47794){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_47794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e47809){if((e47809 instanceof Object)){
var ex__47315__auto__ = e47809;
var statearr_47810_47819 = state_47794;
(statearr_47810_47819[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47820 = state_47794;
state_47794 = G__47820;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__ = function(state_47794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____1.call(this,state_47794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto___47812,out))
})();
var state__47334__auto__ = (function (){var statearr_47811 = f__47333__auto__.call(null);
(statearr_47811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto___47812);

return statearr_47811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto___47812,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47821,opts){
var map__47825 = p__47821;
var map__47825__$1 = ((((!((map__47825 == null)))?((((map__47825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47825):map__47825);
var eval_body = cljs.core.get.call(null,map__47825__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__45109__auto__ = eval_body;
if(cljs.core.truth_(and__45109__auto__)){
return typeof eval_body === 'string';
} else {
return and__45109__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47827){var e = e47827;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47828_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47828_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47837){
var vec__47838 = p__47837;
var k = cljs.core.nth.call(null,vec__47838,(0),null);
var v = cljs.core.nth.call(null,vec__47838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47841){
var vec__47842 = p__47841;
var k = cljs.core.nth.call(null,vec__47842,(0),null);
var v = cljs.core.nth.call(null,vec__47842,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47848,p__47849){
var map__48097 = p__47848;
var map__48097__$1 = ((((!((map__48097 == null)))?((((map__48097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48097):map__48097);
var opts = map__48097__$1;
var before_jsload = cljs.core.get.call(null,map__48097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48098 = p__47849;
var map__48098__$1 = ((((!((map__48098 == null)))?((((map__48098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48098):map__48098);
var msg = map__48098__$1;
var files = cljs.core.get.call(null,map__48098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48252){
var state_val_48253 = (state_48252[(1)]);
if((state_val_48253 === (7))){
var inst_48112 = (state_48252[(7)]);
var inst_48115 = (state_48252[(8)]);
var inst_48114 = (state_48252[(9)]);
var inst_48113 = (state_48252[(10)]);
var inst_48120 = cljs.core._nth.call(null,inst_48113,inst_48115);
var inst_48121 = figwheel.client.file_reloading.eval_body.call(null,inst_48120,opts);
var inst_48122 = (inst_48115 + (1));
var tmp48254 = inst_48112;
var tmp48255 = inst_48114;
var tmp48256 = inst_48113;
var inst_48112__$1 = tmp48254;
var inst_48113__$1 = tmp48256;
var inst_48114__$1 = tmp48255;
var inst_48115__$1 = inst_48122;
var state_48252__$1 = (function (){var statearr_48257 = state_48252;
(statearr_48257[(11)] = inst_48121);

(statearr_48257[(7)] = inst_48112__$1);

(statearr_48257[(8)] = inst_48115__$1);

(statearr_48257[(9)] = inst_48114__$1);

(statearr_48257[(10)] = inst_48113__$1);

return statearr_48257;
})();
var statearr_48258_48344 = state_48252__$1;
(statearr_48258_48344[(2)] = null);

(statearr_48258_48344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (20))){
var inst_48155 = (state_48252[(12)]);
var inst_48163 = figwheel.client.file_reloading.sort_files.call(null,inst_48155);
var state_48252__$1 = state_48252;
var statearr_48259_48345 = state_48252__$1;
(statearr_48259_48345[(2)] = inst_48163);

(statearr_48259_48345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (27))){
var state_48252__$1 = state_48252;
var statearr_48260_48346 = state_48252__$1;
(statearr_48260_48346[(2)] = null);

(statearr_48260_48346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (1))){
var inst_48104 = (state_48252[(13)]);
var inst_48101 = before_jsload.call(null,files);
var inst_48102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48103 = (function (){return ((function (inst_48104,inst_48101,inst_48102,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47845_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47845_SHARP_);
});
;})(inst_48104,inst_48101,inst_48102,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48104__$1 = cljs.core.filter.call(null,inst_48103,files);
var inst_48105 = cljs.core.not_empty.call(null,inst_48104__$1);
var state_48252__$1 = (function (){var statearr_48261 = state_48252;
(statearr_48261[(13)] = inst_48104__$1);

(statearr_48261[(14)] = inst_48102);

(statearr_48261[(15)] = inst_48101);

return statearr_48261;
})();
if(cljs.core.truth_(inst_48105)){
var statearr_48262_48347 = state_48252__$1;
(statearr_48262_48347[(1)] = (2));

} else {
var statearr_48263_48348 = state_48252__$1;
(statearr_48263_48348[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (24))){
var state_48252__$1 = state_48252;
var statearr_48264_48349 = state_48252__$1;
(statearr_48264_48349[(2)] = null);

(statearr_48264_48349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (39))){
var inst_48205 = (state_48252[(16)]);
var state_48252__$1 = state_48252;
var statearr_48265_48350 = state_48252__$1;
(statearr_48265_48350[(2)] = inst_48205);

(statearr_48265_48350[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (46))){
var inst_48247 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48266_48351 = state_48252__$1;
(statearr_48266_48351[(2)] = inst_48247);

(statearr_48266_48351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (4))){
var inst_48149 = (state_48252[(2)]);
var inst_48150 = cljs.core.List.EMPTY;
var inst_48151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48150);
var inst_48152 = (function (){return ((function (inst_48149,inst_48150,inst_48151,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47846_SHARP_){
var and__45109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47846_SHARP_);
if(cljs.core.truth_(and__45109__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47846_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47846_SHARP_)));
} else {
return and__45109__auto__;
}
});
;})(inst_48149,inst_48150,inst_48151,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48153 = cljs.core.filter.call(null,inst_48152,files);
var inst_48154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48155 = cljs.core.concat.call(null,inst_48153,inst_48154);
var state_48252__$1 = (function (){var statearr_48267 = state_48252;
(statearr_48267[(17)] = inst_48151);

(statearr_48267[(18)] = inst_48149);

(statearr_48267[(12)] = inst_48155);

return statearr_48267;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48268_48352 = state_48252__$1;
(statearr_48268_48352[(1)] = (16));

} else {
var statearr_48269_48353 = state_48252__$1;
(statearr_48269_48353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (15))){
var inst_48139 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48270_48354 = state_48252__$1;
(statearr_48270_48354[(2)] = inst_48139);

(statearr_48270_48354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (21))){
var inst_48165 = (state_48252[(19)]);
var inst_48165__$1 = (state_48252[(2)]);
var inst_48166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48165__$1);
var state_48252__$1 = (function (){var statearr_48271 = state_48252;
(statearr_48271[(19)] = inst_48165__$1);

return statearr_48271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48252__$1,(22),inst_48166);
} else {
if((state_val_48253 === (31))){
var inst_48250 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48252__$1,inst_48250);
} else {
if((state_val_48253 === (32))){
var inst_48205 = (state_48252[(16)]);
var inst_48210 = inst_48205.cljs$lang$protocol_mask$partition0$;
var inst_48211 = (inst_48210 & (64));
var inst_48212 = inst_48205.cljs$core$ISeq$;
var inst_48213 = (cljs.core.PROTOCOL_SENTINEL === inst_48212);
var inst_48214 = (inst_48211) || (inst_48213);
var state_48252__$1 = state_48252;
if(cljs.core.truth_(inst_48214)){
var statearr_48272_48355 = state_48252__$1;
(statearr_48272_48355[(1)] = (35));

} else {
var statearr_48273_48356 = state_48252__$1;
(statearr_48273_48356[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (40))){
var inst_48227 = (state_48252[(20)]);
var inst_48226 = (state_48252[(2)]);
var inst_48227__$1 = cljs.core.get.call(null,inst_48226,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48228 = cljs.core.get.call(null,inst_48226,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48229 = cljs.core.not_empty.call(null,inst_48227__$1);
var state_48252__$1 = (function (){var statearr_48274 = state_48252;
(statearr_48274[(20)] = inst_48227__$1);

(statearr_48274[(21)] = inst_48228);

return statearr_48274;
})();
if(cljs.core.truth_(inst_48229)){
var statearr_48275_48357 = state_48252__$1;
(statearr_48275_48357[(1)] = (41));

} else {
var statearr_48276_48358 = state_48252__$1;
(statearr_48276_48358[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (33))){
var state_48252__$1 = state_48252;
var statearr_48277_48359 = state_48252__$1;
(statearr_48277_48359[(2)] = false);

(statearr_48277_48359[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (13))){
var inst_48125 = (state_48252[(22)]);
var inst_48129 = cljs.core.chunk_first.call(null,inst_48125);
var inst_48130 = cljs.core.chunk_rest.call(null,inst_48125);
var inst_48131 = cljs.core.count.call(null,inst_48129);
var inst_48112 = inst_48130;
var inst_48113 = inst_48129;
var inst_48114 = inst_48131;
var inst_48115 = (0);
var state_48252__$1 = (function (){var statearr_48278 = state_48252;
(statearr_48278[(7)] = inst_48112);

(statearr_48278[(8)] = inst_48115);

(statearr_48278[(9)] = inst_48114);

(statearr_48278[(10)] = inst_48113);

return statearr_48278;
})();
var statearr_48279_48360 = state_48252__$1;
(statearr_48279_48360[(2)] = null);

(statearr_48279_48360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (22))){
var inst_48173 = (state_48252[(23)]);
var inst_48168 = (state_48252[(24)]);
var inst_48165 = (state_48252[(19)]);
var inst_48169 = (state_48252[(25)]);
var inst_48168__$1 = (state_48252[(2)]);
var inst_48169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48168__$1);
var inst_48170 = (function (){var all_files = inst_48165;
var res_SINGLEQUOTE_ = inst_48168__$1;
var res = inst_48169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48173,inst_48168,inst_48165,inst_48169,inst_48168__$1,inst_48169__$1,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47847_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47847_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48173,inst_48168,inst_48165,inst_48169,inst_48168__$1,inst_48169__$1,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48171 = cljs.core.filter.call(null,inst_48170,inst_48168__$1);
var inst_48172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48172);
var inst_48174 = cljs.core.not_empty.call(null,inst_48173__$1);
var state_48252__$1 = (function (){var statearr_48280 = state_48252;
(statearr_48280[(23)] = inst_48173__$1);

(statearr_48280[(24)] = inst_48168__$1);

(statearr_48280[(26)] = inst_48171);

(statearr_48280[(25)] = inst_48169__$1);

return statearr_48280;
})();
if(cljs.core.truth_(inst_48174)){
var statearr_48281_48361 = state_48252__$1;
(statearr_48281_48361[(1)] = (23));

} else {
var statearr_48282_48362 = state_48252__$1;
(statearr_48282_48362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (36))){
var state_48252__$1 = state_48252;
var statearr_48283_48363 = state_48252__$1;
(statearr_48283_48363[(2)] = false);

(statearr_48283_48363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (41))){
var inst_48227 = (state_48252[(20)]);
var inst_48231 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48232 = cljs.core.map.call(null,inst_48231,inst_48227);
var inst_48233 = cljs.core.pr_str.call(null,inst_48232);
var inst_48234 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48233)].join('');
var inst_48235 = figwheel.client.utils.log.call(null,inst_48234);
var state_48252__$1 = state_48252;
var statearr_48284_48364 = state_48252__$1;
(statearr_48284_48364[(2)] = inst_48235);

(statearr_48284_48364[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (43))){
var inst_48228 = (state_48252[(21)]);
var inst_48238 = (state_48252[(2)]);
var inst_48239 = cljs.core.not_empty.call(null,inst_48228);
var state_48252__$1 = (function (){var statearr_48285 = state_48252;
(statearr_48285[(27)] = inst_48238);

return statearr_48285;
})();
if(cljs.core.truth_(inst_48239)){
var statearr_48286_48365 = state_48252__$1;
(statearr_48286_48365[(1)] = (44));

} else {
var statearr_48287_48366 = state_48252__$1;
(statearr_48287_48366[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (29))){
var inst_48173 = (state_48252[(23)]);
var inst_48168 = (state_48252[(24)]);
var inst_48165 = (state_48252[(19)]);
var inst_48171 = (state_48252[(26)]);
var inst_48169 = (state_48252[(25)]);
var inst_48205 = (state_48252[(16)]);
var inst_48201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48204 = (function (){var all_files = inst_48165;
var res_SINGLEQUOTE_ = inst_48168;
var res = inst_48169;
var files_not_loaded = inst_48171;
var dependencies_that_loaded = inst_48173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48205,inst_48201,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48203){
var map__48288 = p__48203;
var map__48288__$1 = ((((!((map__48288 == null)))?((((map__48288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48288):map__48288);
var namespace = cljs.core.get.call(null,map__48288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48205,inst_48201,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48205__$1 = cljs.core.group_by.call(null,inst_48204,inst_48171);
var inst_48207 = (inst_48205__$1 == null);
var inst_48208 = cljs.core.not.call(null,inst_48207);
var state_48252__$1 = (function (){var statearr_48290 = state_48252;
(statearr_48290[(28)] = inst_48201);

(statearr_48290[(16)] = inst_48205__$1);

return statearr_48290;
})();
if(inst_48208){
var statearr_48291_48367 = state_48252__$1;
(statearr_48291_48367[(1)] = (32));

} else {
var statearr_48292_48368 = state_48252__$1;
(statearr_48292_48368[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (44))){
var inst_48228 = (state_48252[(21)]);
var inst_48241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48228);
var inst_48242 = cljs.core.pr_str.call(null,inst_48241);
var inst_48243 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48242)].join('');
var inst_48244 = figwheel.client.utils.log.call(null,inst_48243);
var state_48252__$1 = state_48252;
var statearr_48293_48369 = state_48252__$1;
(statearr_48293_48369[(2)] = inst_48244);

(statearr_48293_48369[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (6))){
var inst_48146 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48294_48370 = state_48252__$1;
(statearr_48294_48370[(2)] = inst_48146);

(statearr_48294_48370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (28))){
var inst_48171 = (state_48252[(26)]);
var inst_48198 = (state_48252[(2)]);
var inst_48199 = cljs.core.not_empty.call(null,inst_48171);
var state_48252__$1 = (function (){var statearr_48295 = state_48252;
(statearr_48295[(29)] = inst_48198);

return statearr_48295;
})();
if(cljs.core.truth_(inst_48199)){
var statearr_48296_48371 = state_48252__$1;
(statearr_48296_48371[(1)] = (29));

} else {
var statearr_48297_48372 = state_48252__$1;
(statearr_48297_48372[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (25))){
var inst_48169 = (state_48252[(25)]);
var inst_48185 = (state_48252[(2)]);
var inst_48186 = cljs.core.not_empty.call(null,inst_48169);
var state_48252__$1 = (function (){var statearr_48298 = state_48252;
(statearr_48298[(30)] = inst_48185);

return statearr_48298;
})();
if(cljs.core.truth_(inst_48186)){
var statearr_48299_48373 = state_48252__$1;
(statearr_48299_48373[(1)] = (26));

} else {
var statearr_48300_48374 = state_48252__$1;
(statearr_48300_48374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (34))){
var inst_48221 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
if(cljs.core.truth_(inst_48221)){
var statearr_48301_48375 = state_48252__$1;
(statearr_48301_48375[(1)] = (38));

} else {
var statearr_48302_48376 = state_48252__$1;
(statearr_48302_48376[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (17))){
var state_48252__$1 = state_48252;
var statearr_48303_48377 = state_48252__$1;
(statearr_48303_48377[(2)] = recompile_dependents);

(statearr_48303_48377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (3))){
var state_48252__$1 = state_48252;
var statearr_48304_48378 = state_48252__$1;
(statearr_48304_48378[(2)] = null);

(statearr_48304_48378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (12))){
var inst_48142 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48305_48379 = state_48252__$1;
(statearr_48305_48379[(2)] = inst_48142);

(statearr_48305_48379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (2))){
var inst_48104 = (state_48252[(13)]);
var inst_48111 = cljs.core.seq.call(null,inst_48104);
var inst_48112 = inst_48111;
var inst_48113 = null;
var inst_48114 = (0);
var inst_48115 = (0);
var state_48252__$1 = (function (){var statearr_48306 = state_48252;
(statearr_48306[(7)] = inst_48112);

(statearr_48306[(8)] = inst_48115);

(statearr_48306[(9)] = inst_48114);

(statearr_48306[(10)] = inst_48113);

return statearr_48306;
})();
var statearr_48307_48380 = state_48252__$1;
(statearr_48307_48380[(2)] = null);

(statearr_48307_48380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (23))){
var inst_48173 = (state_48252[(23)]);
var inst_48168 = (state_48252[(24)]);
var inst_48165 = (state_48252[(19)]);
var inst_48171 = (state_48252[(26)]);
var inst_48169 = (state_48252[(25)]);
var inst_48176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48178 = (function (){var all_files = inst_48165;
var res_SINGLEQUOTE_ = inst_48168;
var res = inst_48169;
var files_not_loaded = inst_48171;
var dependencies_that_loaded = inst_48173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48176,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48177){
var map__48308 = p__48177;
var map__48308__$1 = ((((!((map__48308 == null)))?((((map__48308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48308):map__48308);
var request_url = cljs.core.get.call(null,map__48308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48176,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48179 = cljs.core.reverse.call(null,inst_48173);
var inst_48180 = cljs.core.map.call(null,inst_48178,inst_48179);
var inst_48181 = cljs.core.pr_str.call(null,inst_48180);
var inst_48182 = figwheel.client.utils.log.call(null,inst_48181);
var state_48252__$1 = (function (){var statearr_48310 = state_48252;
(statearr_48310[(31)] = inst_48176);

return statearr_48310;
})();
var statearr_48311_48381 = state_48252__$1;
(statearr_48311_48381[(2)] = inst_48182);

(statearr_48311_48381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (35))){
var state_48252__$1 = state_48252;
var statearr_48312_48382 = state_48252__$1;
(statearr_48312_48382[(2)] = true);

(statearr_48312_48382[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (19))){
var inst_48155 = (state_48252[(12)]);
var inst_48161 = figwheel.client.file_reloading.expand_files.call(null,inst_48155);
var state_48252__$1 = state_48252;
var statearr_48313_48383 = state_48252__$1;
(statearr_48313_48383[(2)] = inst_48161);

(statearr_48313_48383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (11))){
var state_48252__$1 = state_48252;
var statearr_48314_48384 = state_48252__$1;
(statearr_48314_48384[(2)] = null);

(statearr_48314_48384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (9))){
var inst_48144 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48315_48385 = state_48252__$1;
(statearr_48315_48385[(2)] = inst_48144);

(statearr_48315_48385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (5))){
var inst_48115 = (state_48252[(8)]);
var inst_48114 = (state_48252[(9)]);
var inst_48117 = (inst_48115 < inst_48114);
var inst_48118 = inst_48117;
var state_48252__$1 = state_48252;
if(cljs.core.truth_(inst_48118)){
var statearr_48316_48386 = state_48252__$1;
(statearr_48316_48386[(1)] = (7));

} else {
var statearr_48317_48387 = state_48252__$1;
(statearr_48317_48387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (14))){
var inst_48125 = (state_48252[(22)]);
var inst_48134 = cljs.core.first.call(null,inst_48125);
var inst_48135 = figwheel.client.file_reloading.eval_body.call(null,inst_48134,opts);
var inst_48136 = cljs.core.next.call(null,inst_48125);
var inst_48112 = inst_48136;
var inst_48113 = null;
var inst_48114 = (0);
var inst_48115 = (0);
var state_48252__$1 = (function (){var statearr_48318 = state_48252;
(statearr_48318[(32)] = inst_48135);

(statearr_48318[(7)] = inst_48112);

(statearr_48318[(8)] = inst_48115);

(statearr_48318[(9)] = inst_48114);

(statearr_48318[(10)] = inst_48113);

return statearr_48318;
})();
var statearr_48319_48388 = state_48252__$1;
(statearr_48319_48388[(2)] = null);

(statearr_48319_48388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (45))){
var state_48252__$1 = state_48252;
var statearr_48320_48389 = state_48252__$1;
(statearr_48320_48389[(2)] = null);

(statearr_48320_48389[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (26))){
var inst_48173 = (state_48252[(23)]);
var inst_48168 = (state_48252[(24)]);
var inst_48165 = (state_48252[(19)]);
var inst_48171 = (state_48252[(26)]);
var inst_48169 = (state_48252[(25)]);
var inst_48188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48190 = (function (){var all_files = inst_48165;
var res_SINGLEQUOTE_ = inst_48168;
var res = inst_48169;
var files_not_loaded = inst_48171;
var dependencies_that_loaded = inst_48173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48188,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48189){
var map__48321 = p__48189;
var map__48321__$1 = ((((!((map__48321 == null)))?((((map__48321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48321):map__48321);
var namespace = cljs.core.get.call(null,map__48321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48188,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48191 = cljs.core.map.call(null,inst_48190,inst_48169);
var inst_48192 = cljs.core.pr_str.call(null,inst_48191);
var inst_48193 = figwheel.client.utils.log.call(null,inst_48192);
var inst_48194 = (function (){var all_files = inst_48165;
var res_SINGLEQUOTE_ = inst_48168;
var res = inst_48169;
var files_not_loaded = inst_48171;
var dependencies_that_loaded = inst_48173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48188,inst_48190,inst_48191,inst_48192,inst_48193,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48173,inst_48168,inst_48165,inst_48171,inst_48169,inst_48188,inst_48190,inst_48191,inst_48192,inst_48193,state_val_48253,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48195 = setTimeout(inst_48194,(10));
var state_48252__$1 = (function (){var statearr_48323 = state_48252;
(statearr_48323[(33)] = inst_48188);

(statearr_48323[(34)] = inst_48193);

return statearr_48323;
})();
var statearr_48324_48390 = state_48252__$1;
(statearr_48324_48390[(2)] = inst_48195);

(statearr_48324_48390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (16))){
var state_48252__$1 = state_48252;
var statearr_48325_48391 = state_48252__$1;
(statearr_48325_48391[(2)] = reload_dependents);

(statearr_48325_48391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (38))){
var inst_48205 = (state_48252[(16)]);
var inst_48223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48205);
var state_48252__$1 = state_48252;
var statearr_48326_48392 = state_48252__$1;
(statearr_48326_48392[(2)] = inst_48223);

(statearr_48326_48392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (30))){
var state_48252__$1 = state_48252;
var statearr_48327_48393 = state_48252__$1;
(statearr_48327_48393[(2)] = null);

(statearr_48327_48393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (10))){
var inst_48125 = (state_48252[(22)]);
var inst_48127 = cljs.core.chunked_seq_QMARK_.call(null,inst_48125);
var state_48252__$1 = state_48252;
if(inst_48127){
var statearr_48328_48394 = state_48252__$1;
(statearr_48328_48394[(1)] = (13));

} else {
var statearr_48329_48395 = state_48252__$1;
(statearr_48329_48395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (18))){
var inst_48159 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
if(cljs.core.truth_(inst_48159)){
var statearr_48330_48396 = state_48252__$1;
(statearr_48330_48396[(1)] = (19));

} else {
var statearr_48331_48397 = state_48252__$1;
(statearr_48331_48397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (42))){
var state_48252__$1 = state_48252;
var statearr_48332_48398 = state_48252__$1;
(statearr_48332_48398[(2)] = null);

(statearr_48332_48398[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (37))){
var inst_48218 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48333_48399 = state_48252__$1;
(statearr_48333_48399[(2)] = inst_48218);

(statearr_48333_48399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (8))){
var inst_48112 = (state_48252[(7)]);
var inst_48125 = (state_48252[(22)]);
var inst_48125__$1 = cljs.core.seq.call(null,inst_48112);
var state_48252__$1 = (function (){var statearr_48334 = state_48252;
(statearr_48334[(22)] = inst_48125__$1);

return statearr_48334;
})();
if(inst_48125__$1){
var statearr_48335_48400 = state_48252__$1;
(statearr_48335_48400[(1)] = (10));

} else {
var statearr_48336_48401 = state_48252__$1;
(statearr_48336_48401[(1)] = (11));

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
}
});})(c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47311__auto__,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____0 = (function (){
var statearr_48340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48340[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__);

(statearr_48340[(1)] = (1));

return statearr_48340;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____1 = (function (state_48252){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_48252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e48341){if((e48341 instanceof Object)){
var ex__47315__auto__ = e48341;
var statearr_48342_48402 = state_48252;
(statearr_48342_48402[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48403 = state_48252;
state_48252 = G__48403;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__ = function(state_48252){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____1.call(this,state_48252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47334__auto__ = (function (){var statearr_48343 = f__47333__auto__.call(null);
(statearr_48343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_48343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__,map__48097,map__48097__$1,opts,before_jsload,on_jsload,reload_dependents,map__48098,map__48098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47332__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48406,link){
var map__48409 = p__48406;
var map__48409__$1 = ((((!((map__48409 == null)))?((((map__48409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48409):map__48409);
var file = cljs.core.get.call(null,map__48409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48409,map__48409__$1,file){
return (function (p1__48404_SHARP_,p2__48405_SHARP_){
if(cljs.core._EQ_.call(null,p1__48404_SHARP_,p2__48405_SHARP_)){
return p1__48404_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48409,map__48409__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48415){
var map__48416 = p__48415;
var map__48416__$1 = ((((!((map__48416 == null)))?((((map__48416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48416):map__48416);
var match_length = cljs.core.get.call(null,map__48416__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48416__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48411_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48411_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48418_SHARP_,p2__48419_SHARP_){
return cljs.core.assoc.call(null,p1__48418_SHARP_,cljs.core.get.call(null,p2__48419_SHARP_,key),p2__48419_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_48420 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48420);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48420);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48421,p__48422){
var map__48427 = p__48421;
var map__48427__$1 = ((((!((map__48427 == null)))?((((map__48427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48427):map__48427);
var on_cssload = cljs.core.get.call(null,map__48427__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48428 = p__48422;
var map__48428__$1 = ((((!((map__48428 == null)))?((((map__48428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48428):map__48428);
var files_msg = map__48428__$1;
var files = cljs.core.get.call(null,map__48428__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map