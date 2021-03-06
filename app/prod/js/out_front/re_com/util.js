// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7602__auto__ = (function re_com$util$fmap_$_iter__12228(s__12229){
return (new cljs.core.LazySeq(null,(function (){
var s__12229__$1 = s__12229;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12229__$1);
if(temp__4657__auto__){
var s__12229__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12229__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__12229__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__12231 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__12230 = (0);
while(true){
if((i__12230 < size__7601__auto__)){
var vec__12238 = cljs.core._nth.call(null,c__7600__auto__,i__12230);
var k = cljs.core.nth.call(null,vec__12238,(0),null);
var val = cljs.core.nth.call(null,vec__12238,(1),null);
cljs.core.chunk_append.call(null,b__12231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__12244 = (i__12230 + (1));
i__12230 = G__12244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12231),re_com$util$fmap_$_iter__12228.call(null,cljs.core.chunk_rest.call(null,s__12229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12231),null);
}
} else {
var vec__12241 = cljs.core.first.call(null,s__12229__$2);
var k = cljs.core.nth.call(null,vec__12241,(0),null);
var val = cljs.core.nth.call(null,vec__12241,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__12228.call(null,cljs.core.rest.call(null,s__12229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12246 = arguments.length;
var i__7924__auto___12247 = (0);
while(true){
if((i__7924__auto___12247 < len__7923__auto___12246)){
args__7930__auto__.push((arguments[i__7924__auto___12247]));

var G__12248 = (i__7924__auto___12247 + (1));
i__7924__auto___12247 = G__12248;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq12245){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12245));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12253 = arguments.length;
var i__7924__auto___12254 = (0);
while(true){
if((i__7924__auto___12254 < len__7923__auto___12253)){
args__7930__auto__.push((arguments[i__7924__auto___12254]));

var G__12255 = (i__7924__auto___12254 + (1));
i__7924__auto___12254 = G__12255;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((1) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7931__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq12251){
var G__12252 = cljs.core.first.call(null,seq12251);
var seq12251__$1 = cljs.core.next.call(null,seq12251);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__12252,seq12251__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12262 = arguments.length;
var i__7924__auto___12263 = (0);
while(true){
if((i__7924__auto___12263 < len__7923__auto___12262)){
args__7930__auto__.push((arguments[i__7924__auto___12263]));

var G__12264 = (i__7924__auto___12263 + (1));
i__7924__auto___12263 = G__12264;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((2) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7931__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12259){
var map__12260 = p__12259;
var map__12260__$1 = ((((!((map__12260 == null)))?((((map__12260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12260):map__12260);
var id_fn = cljs.core.get.call(null,map__12260__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__12260,map__12260__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__12260,map__12260__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq12256){
var G__12257 = cljs.core.first.call(null,seq12256);
var seq12256__$1 = cljs.core.next.call(null,seq12256);
var G__12258 = cljs.core.first.call(null,seq12256__$1);
var seq12256__$2 = cljs.core.next.call(null,seq12256__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12257,G__12258,seq12256__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12272 = arguments.length;
var i__7924__auto___12273 = (0);
while(true){
if((i__7924__auto___12273 < len__7923__auto___12272)){
args__7930__auto__.push((arguments[i__7924__auto___12273]));

var G__12274 = (i__7924__auto___12273 + (1));
i__7924__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((2) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7931__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12269){
var map__12270 = p__12269;
var map__12270__$1 = ((((!((map__12270 == null)))?((((map__12270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);
var id_fn = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__12270,map__12270__$1,id_fn){
return (function (p1__12265_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__12265_SHARP_),id);
});})(map__12270,map__12270__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq12266){
var G__12267 = cljs.core.first.call(null,seq12266);
var seq12266__$1 = cljs.core.next.call(null,seq12266);
var G__12268 = cljs.core.first.call(null,seq12266__$1);
var seq12266__$2 = cljs.core.next.call(null,seq12266__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12267,G__12268,seq12266__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__7930__auto__ = [];
var len__7923__auto___12282 = arguments.length;
var i__7924__auto___12283 = (0);
while(true){
if((i__7924__auto___12283 < len__7923__auto___12282)){
args__7930__auto__.push((arguments[i__7924__auto___12283]));

var G__12284 = (i__7924__auto___12283 + (1));
i__7924__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((2) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7931__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12279){
var map__12280 = p__12279;
var map__12280__$1 = ((((!((map__12280 == null)))?((((map__12280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12280):map__12280);
var id_fn = cljs.core.get.call(null,map__12280__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__12280,map__12280__$1,id_fn){
return (function (p1__12275_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__12275_SHARP_),id);
});})(map__12280,map__12280__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq12276){
var G__12277 = cljs.core.first.call(null,seq12276);
var seq12276__$1 = cljs.core.next.call(null,seq12276);
var G__12278 = cljs.core.first.call(null,seq12276__$1);
var seq12276__$2 = cljs.core.next.call(null,seq12276__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__12277,G__12278,seq12276__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__12285 = current_node.parentNode;
var G__12286 = (sum_scroll_left + current_node.scrollLeft);
var G__12287 = (sum_scroll_top + current_node.scrollTop);
current_node = G__12285;
sum_scroll_left = G__12286;
sum_scroll_top = G__12287;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});
