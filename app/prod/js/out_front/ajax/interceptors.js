// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k22094,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__22096 = (((k22094 instanceof cljs.core.Keyword))?k22094.fqn:null);
switch (G__22096) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22094,else__7578__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__22097,opts){
var self__ = this;
var map__22098 = p__22097;
var map__22098__$1 = ((((!((map__22098 == null)))?((((map__22098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22098):map__22098);
var request__$1 = cljs.core.get.call(null,map__22098__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__22100 = this;
var map__22100__$1 = ((((!((map__22100 == null)))?((((map__22100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22100):map__22100);
var request__$2 = cljs.core.get.call(null,map__22100__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__22102,xhrio){
var self__ = this;
var map__22103 = p__22102;
var map__22103__$1 = ((((!((map__22103 == null)))?((((map__22103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22103):map__22103);
var response__$1 = cljs.core.get.call(null,map__22103__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__22105 = this;
var map__22105__$1 = ((((!((map__22105 == null)))?((((map__22105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22105):map__22105);
var response__$2 = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22093){
var self__ = this;
var G__22093__$1 = this;
return (new cljs.core.RecordIter((0),G__22093__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__22093){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__22107 = cljs.core.keyword_identical_QMARK_;
var expr__22108 = k__7583__auto__;
if(cljs.core.truth_(pred__22107.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22108))){
return (new ajax.interceptors.StandardInterceptor(G__22093,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22107.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__22108))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__22093,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22107.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__22108))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__22093,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__22093),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__22093){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__22093,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__22095){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22095),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__22095),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__22095),null,cljs.core.dissoc.call(null,G__22095,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__22111,xhrio){
var map__22114 = p__22111;
var map__22114__$1 = ((((!((map__22114 == null)))?((((map__22114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22114):map__22114);
var description = cljs.core.get.call(null,map__22114__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__8064__auto__ = [];
var len__8057__auto___22120 = arguments.length;
var i__8058__auto___22121 = (0);
while(true){
if((i__8058__auto___22121 < len__8057__auto___22120)){
args__8064__auto__.push((arguments[i__8058__auto___22121]));

var G__22122 = (i__8058__auto___22121 + (1));
i__8058__auto___22121 = G__22122;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((3) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8065__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq22116){
var G__22117 = cljs.core.first.call(null,seq22116);
var seq22116__$1 = cljs.core.next.call(null,seq22116);
var G__22118 = cljs.core.first.call(null,seq22116__$1);
var seq22116__$2 = cljs.core.next.call(null,seq22116__$1);
var G__22119 = cljs.core.first.call(null,seq22116__$2);
var seq22116__$3 = cljs.core.next.call(null,seq22116__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__22117,G__22118,G__22119,seq22116__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k22125,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__22127 = (((k22125 instanceof cljs.core.Keyword))?k22125.fqn:null);
switch (G__22127) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22125,else__7578__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__22128,request){
var self__ = this;
var map__22129 = p__22128;
var map__22129__$1 = ((((!((map__22129 == null)))?((((map__22129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22129):map__22129);
var content_type__$1 = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__22131 = this;
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22131):map__22131);
var content_type__$2 = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__22131,map__22131__$1,content_type__$2,map__22129,map__22129__$1,content_type__$1){
return (function (p1__22123_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__6948__auto__ = p1__22123_SHARP_;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__22131,map__22131__$1,content_type__$2,map__22129,map__22129__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__22133,xhrio){
var self__ = this;
var map__22134 = p__22133;
var map__22134__$1 = ((((!((map__22134 == null)))?((((map__22134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22134):map__22134);
var format = map__22134__$1;
var read__$1 = cljs.core.get.call(null,map__22134__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__22136 = this;
var map__22136__$1 = ((((!((map__22136 == null)))?((((map__22136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22136):map__22136);
var format__$1 = map__22136__$1;
var read__$2 = cljs.core.get.call(null,map__22136__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__22139 = status;
switch (G__22139) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e22140){if((e22140 instanceof Object)){
var e = e22140;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e22140;

}
}
}
}catch (e22138){if((e22138 instanceof Object)){
var e = e22138;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e22138;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22124){
var self__ = this;
var G__22124__$1 = this;
return (new cljs.core.RecordIter((0),G__22124__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__22124){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__22141 = cljs.core.keyword_identical_QMARK_;
var expr__22142 = k__7583__auto__;
if(cljs.core.truth_(pred__22141.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__22142))){
return (new ajax.interceptors.ResponseFormat(G__22124,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22141.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__22142))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__22124,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22141.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__22142))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__22124,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__22124),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__22124){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__22124,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__22126){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__22126),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__22126),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__22126),null,cljs.core.dissoc.call(null,G__22126,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k22147,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__22149 = k22147;
switch (G__22149) {
default:
return cljs.core.get.call(null,self__.__extmap,k22147,else__7578__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22150){
var self__ = this;
var map__22151 = p__22150;
var map__22151__$1 = ((((!((map__22151 == null)))?((((map__22151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22151):map__22151);
var request = map__22151__$1;
var uri = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__22153 = ajax.interceptors.get_request_format.call(null,format);
var map__22153__$1 = ((((!((map__22153 == null)))?((((map__22153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22153):map__22153);
var write = cljs.core.get.call(null,map__22153__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__22153__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6948__auto__ = headers;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22146){
var self__ = this;
var G__22146__$1 = this;
return (new cljs.core.RecordIter((0),G__22146__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__22146){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__22155 = cljs.core.keyword_identical_QMARK_;
var expr__22156 = k__7583__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__22146),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__22146){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__22146,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__22148){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__22148),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var args22159 = [];
var len__8057__auto___22168 = arguments.length;
var i__8058__auto___22169 = (0);
while(true){
if((i__8058__auto___22169 < len__8057__auto___22168)){
args22159.push((arguments[i__8058__auto___22169]));

var G__22170 = (i__8058__auto___22169 + (1));
i__8058__auto___22169 = G__22170;
continue;
} else {
}
break;
}

var G__22161 = args22159.length;
switch (G__22161) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22159.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__22162,uri){
var map__22163 = p__22162;
var map__22163__$1 = ((((!((map__22163 == null)))?((((map__22163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22163):map__22163);
var vec_strategy = cljs.core.get.call(null,map__22163__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__22163__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__22165){
var map__22166 = p__22165;
var map__22166__$1 = ((((!((map__22166 == null)))?((((map__22166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22166):map__22166);
var vec_strategy = cljs.core.get.call(null,map__22166__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__22166__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__22166,map__22166__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__22166,map__22166__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k22173,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__22175 = k22173;
switch (G__22175) {
default:
return cljs.core.get.call(null,self__.__extmap,k22173,else__7578__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22176){
var self__ = this;
var map__22177 = p__22176;
var map__22177__$1 = ((((!((map__22177 == null)))?((((map__22177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22177):map__22177);
var request = map__22177__$1;
var method = cljs.core.get.call(null,map__22177__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22172){
var self__ = this;
var G__22172__$1 = this;
return (new cljs.core.RecordIter((0),G__22172__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__22172){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__22179 = cljs.core.keyword_identical_QMARK_;
var expr__22180 = k__7583__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__22172),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__22172){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__22172,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__22174){
return (new ajax.interceptors.ProcessGet(null,cljs.core.dissoc.call(null,G__22174),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k22184,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__22186 = k22184;
switch (G__22186) {
default:
return cljs.core.get.call(null,self__.__extmap,k22184,else__7578__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22187){
var self__ = this;
var map__22188 = p__22187;
var map__22188__$1 = ((((!((map__22188 == null)))?((((map__22188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22188):map__22188);
var request = map__22188__$1;
var body = cljs.core.get.call(null,map__22188__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22183){
var self__ = this;
var G__22183__$1 = this;
return (new cljs.core.RecordIter((0),G__22183__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__22183){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__22190 = cljs.core.keyword_identical_QMARK_;
var expr__22191 = k__7583__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__22183),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__22183){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__22183,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__22185){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.dissoc.call(null,G__22185),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__22194){
var map__22197 = p__22194;
var map__22197__$1 = ((((!((map__22197 == null)))?((((map__22197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22197):map__22197);
var opts = map__22197__$1;
var response_format = cljs.core.get.call(null,map__22197__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
