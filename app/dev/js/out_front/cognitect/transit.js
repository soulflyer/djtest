// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9690_9694 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9691_9695 = null;
var count__9692_9696 = (0);
var i__9693_9697 = (0);
while(true){
if((i__9693_9697 < count__9692_9696)){
var k_9698 = cljs.core._nth.call(null,chunk__9691_9695,i__9693_9697);
var v_9699 = (b[k_9698]);
(a[k_9698] = v_9699);

var G__9700 = seq__9690_9694;
var G__9701 = chunk__9691_9695;
var G__9702 = count__9692_9696;
var G__9703 = (i__9693_9697 + (1));
seq__9690_9694 = G__9700;
chunk__9691_9695 = G__9701;
count__9692_9696 = G__9702;
i__9693_9697 = G__9703;
continue;
} else {
var temp__4657__auto___9704 = cljs.core.seq.call(null,seq__9690_9694);
if(temp__4657__auto___9704){
var seq__9690_9705__$1 = temp__4657__auto___9704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690_9705__$1)){
var c__7767__auto___9706 = cljs.core.chunk_first.call(null,seq__9690_9705__$1);
var G__9707 = cljs.core.chunk_rest.call(null,seq__9690_9705__$1);
var G__9708 = c__7767__auto___9706;
var G__9709 = cljs.core.count.call(null,c__7767__auto___9706);
var G__9710 = (0);
seq__9690_9694 = G__9707;
chunk__9691_9695 = G__9708;
count__9692_9696 = G__9709;
i__9693_9697 = G__9710;
continue;
} else {
var k_9711 = cljs.core.first.call(null,seq__9690_9705__$1);
var v_9712 = (b[k_9711]);
(a[k_9711] = v_9712);

var G__9713 = cljs.core.next.call(null,seq__9690_9705__$1);
var G__9714 = null;
var G__9715 = (0);
var G__9716 = (0);
seq__9690_9694 = G__9713;
chunk__9691_9695 = G__9714;
count__9692_9696 = G__9715;
i__9693_9697 = G__9716;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args9717 = [];
var len__8057__auto___9720 = arguments.length;
var i__8058__auto___9721 = (0);
while(true){
if((i__8058__auto___9721 < len__8057__auto___9720)){
args9717.push((arguments[i__8058__auto___9721]));

var G__9722 = (i__8058__auto___9721 + (1));
i__8058__auto___9721 = G__9722;
continue;
} else {
}
break;
}

var G__9719 = args9717.length;
switch (G__9719) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9717.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9724 = (i + (2));
var G__9725 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9724;
ret = G__9725;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9726_9730 = cljs.core.seq.call(null,v);
var chunk__9727_9731 = null;
var count__9728_9732 = (0);
var i__9729_9733 = (0);
while(true){
if((i__9729_9733 < count__9728_9732)){
var x_9734 = cljs.core._nth.call(null,chunk__9727_9731,i__9729_9733);
ret.push(x_9734);

var G__9735 = seq__9726_9730;
var G__9736 = chunk__9727_9731;
var G__9737 = count__9728_9732;
var G__9738 = (i__9729_9733 + (1));
seq__9726_9730 = G__9735;
chunk__9727_9731 = G__9736;
count__9728_9732 = G__9737;
i__9729_9733 = G__9738;
continue;
} else {
var temp__4657__auto___9739 = cljs.core.seq.call(null,seq__9726_9730);
if(temp__4657__auto___9739){
var seq__9726_9740__$1 = temp__4657__auto___9739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9726_9740__$1)){
var c__7767__auto___9741 = cljs.core.chunk_first.call(null,seq__9726_9740__$1);
var G__9742 = cljs.core.chunk_rest.call(null,seq__9726_9740__$1);
var G__9743 = c__7767__auto___9741;
var G__9744 = cljs.core.count.call(null,c__7767__auto___9741);
var G__9745 = (0);
seq__9726_9730 = G__9742;
chunk__9727_9731 = G__9743;
count__9728_9732 = G__9744;
i__9729_9733 = G__9745;
continue;
} else {
var x_9746 = cljs.core.first.call(null,seq__9726_9740__$1);
ret.push(x_9746);

var G__9747 = cljs.core.next.call(null,seq__9726_9740__$1);
var G__9748 = null;
var G__9749 = (0);
var G__9750 = (0);
seq__9726_9730 = G__9747;
chunk__9727_9731 = G__9748;
count__9728_9732 = G__9749;
i__9729_9733 = G__9750;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9751_9755 = cljs.core.seq.call(null,v);
var chunk__9752_9756 = null;
var count__9753_9757 = (0);
var i__9754_9758 = (0);
while(true){
if((i__9754_9758 < count__9753_9757)){
var x_9759 = cljs.core._nth.call(null,chunk__9752_9756,i__9754_9758);
ret.push(x_9759);

var G__9760 = seq__9751_9755;
var G__9761 = chunk__9752_9756;
var G__9762 = count__9753_9757;
var G__9763 = (i__9754_9758 + (1));
seq__9751_9755 = G__9760;
chunk__9752_9756 = G__9761;
count__9753_9757 = G__9762;
i__9754_9758 = G__9763;
continue;
} else {
var temp__4657__auto___9764 = cljs.core.seq.call(null,seq__9751_9755);
if(temp__4657__auto___9764){
var seq__9751_9765__$1 = temp__4657__auto___9764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9751_9765__$1)){
var c__7767__auto___9766 = cljs.core.chunk_first.call(null,seq__9751_9765__$1);
var G__9767 = cljs.core.chunk_rest.call(null,seq__9751_9765__$1);
var G__9768 = c__7767__auto___9766;
var G__9769 = cljs.core.count.call(null,c__7767__auto___9766);
var G__9770 = (0);
seq__9751_9755 = G__9767;
chunk__9752_9756 = G__9768;
count__9753_9757 = G__9769;
i__9754_9758 = G__9770;
continue;
} else {
var x_9771 = cljs.core.first.call(null,seq__9751_9765__$1);
ret.push(x_9771);

var G__9772 = cljs.core.next.call(null,seq__9751_9765__$1);
var G__9773 = null;
var G__9774 = (0);
var G__9775 = (0);
seq__9751_9755 = G__9772;
chunk__9752_9756 = G__9773;
count__9753_9757 = G__9774;
i__9754_9758 = G__9775;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9776_9780 = cljs.core.seq.call(null,v);
var chunk__9777_9781 = null;
var count__9778_9782 = (0);
var i__9779_9783 = (0);
while(true){
if((i__9779_9783 < count__9778_9782)){
var x_9784 = cljs.core._nth.call(null,chunk__9777_9781,i__9779_9783);
ret.push(x_9784);

var G__9785 = seq__9776_9780;
var G__9786 = chunk__9777_9781;
var G__9787 = count__9778_9782;
var G__9788 = (i__9779_9783 + (1));
seq__9776_9780 = G__9785;
chunk__9777_9781 = G__9786;
count__9778_9782 = G__9787;
i__9779_9783 = G__9788;
continue;
} else {
var temp__4657__auto___9789 = cljs.core.seq.call(null,seq__9776_9780);
if(temp__4657__auto___9789){
var seq__9776_9790__$1 = temp__4657__auto___9789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9776_9790__$1)){
var c__7767__auto___9791 = cljs.core.chunk_first.call(null,seq__9776_9790__$1);
var G__9792 = cljs.core.chunk_rest.call(null,seq__9776_9790__$1);
var G__9793 = c__7767__auto___9791;
var G__9794 = cljs.core.count.call(null,c__7767__auto___9791);
var G__9795 = (0);
seq__9776_9780 = G__9792;
chunk__9777_9781 = G__9793;
count__9778_9782 = G__9794;
i__9779_9783 = G__9795;
continue;
} else {
var x_9796 = cljs.core.first.call(null,seq__9776_9790__$1);
ret.push(x_9796);

var G__9797 = cljs.core.next.call(null,seq__9776_9790__$1);
var G__9798 = null;
var G__9799 = (0);
var G__9800 = (0);
seq__9776_9780 = G__9797;
chunk__9777_9781 = G__9798;
count__9778_9782 = G__9799;
i__9779_9783 = G__9800;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args9801 = [];
var len__8057__auto___9816 = arguments.length;
var i__8058__auto___9817 = (0);
while(true){
if((i__8058__auto___9817 < len__8057__auto___9816)){
args9801.push((arguments[i__8058__auto___9817]));

var G__9818 = (i__8058__auto___9817 + (1));
i__8058__auto___9817 = G__9818;
continue;
} else {
}
break;
}

var G__9803 = args9801.length;
switch (G__9803) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9801.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__9804 = obj;
G__9804.push(kfn.call(null,k),vfn.call(null,v));

return G__9804;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9805 = cljs.core.clone.call(null,handlers);
x9805.forEach = ((function (x9805,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9806 = cljs.core.seq.call(null,coll);
var chunk__9807 = null;
var count__9808 = (0);
var i__9809 = (0);
while(true){
if((i__9809 < count__9808)){
var vec__9810 = cljs.core._nth.call(null,chunk__9807,i__9809);
var k = cljs.core.nth.call(null,vec__9810,(0),null);
var v = cljs.core.nth.call(null,vec__9810,(1),null);
f.call(null,v,k);

var G__9820 = seq__9806;
var G__9821 = chunk__9807;
var G__9822 = count__9808;
var G__9823 = (i__9809 + (1));
seq__9806 = G__9820;
chunk__9807 = G__9821;
count__9808 = G__9822;
i__9809 = G__9823;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9806);
if(temp__4657__auto__){
var seq__9806__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9806__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__9806__$1);
var G__9824 = cljs.core.chunk_rest.call(null,seq__9806__$1);
var G__9825 = c__7767__auto__;
var G__9826 = cljs.core.count.call(null,c__7767__auto__);
var G__9827 = (0);
seq__9806 = G__9824;
chunk__9807 = G__9825;
count__9808 = G__9826;
i__9809 = G__9827;
continue;
} else {
var vec__9813 = cljs.core.first.call(null,seq__9806__$1);
var k = cljs.core.nth.call(null,vec__9813,(0),null);
var v = cljs.core.nth.call(null,vec__9813,(1),null);
f.call(null,v,k);

var G__9828 = cljs.core.next.call(null,seq__9806__$1);
var G__9829 = null;
var G__9830 = (0);
var G__9831 = (0);
seq__9806 = G__9828;
chunk__9807 = G__9829;
count__9808 = G__9830;
i__9809 = G__9831;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9805,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9805;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args9832 = [];
var len__8057__auto___9838 = arguments.length;
var i__8058__auto___9839 = (0);
while(true){
if((i__8058__auto___9839 < len__8057__auto___9838)){
args9832.push((arguments[i__8058__auto___9839]));

var G__9840 = (i__8058__auto___9839 + (1));
i__8058__auto___9839 = G__9840;
continue;
} else {
}
break;
}

var G__9834 = args9832.length;
switch (G__9834) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9832.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit9835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit9835 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9836){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9836 = meta9836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit9835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9837,meta9836__$1){
var self__ = this;
var _9837__$1 = this;
return (new cognitect.transit.t_cognitect$transit9835(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9836__$1));
});

cognitect.transit.t_cognitect$transit9835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9837){
var self__ = this;
var _9837__$1 = this;
return self__.meta9836;
});

cognitect.transit.t_cognitect$transit9835.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9835.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9835.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9835.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9836","meta9836",809099357,null)], null);
});

cognitect.transit.t_cognitect$transit9835.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit9835.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit9835";

cognitect.transit.t_cognitect$transit9835.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cognitect.transit/t_cognitect$transit9835");
});

cognitect.transit.__GT_t_cognitect$transit9835 = (function cognitect$transit$__GT_t_cognitect$transit9835(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9836){
return (new cognitect.transit.t_cognitect$transit9835(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9836));
});

}

return (new cognitect.transit.t_cognitect$transit9835(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6948__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map