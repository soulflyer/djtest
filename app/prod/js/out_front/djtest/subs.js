// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('djtest.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("djtest.subs","name","djtest.subs/name",1605403784),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-colour","time-colour",1630643633),(function (db,_){
return new cljs.core.Keyword(null,"time-colour","time-colour",1630643633).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-str","time-str",413463172),(function (_,___$1){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null));
}),(function (t,_){
return cljs.core.first.call(null,clojure.string.split.call(null,t.toTimeString()," "));
}));
