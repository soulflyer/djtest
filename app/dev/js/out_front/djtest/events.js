// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('djtest.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('djtest.db');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('djtest.config');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("djtest.events","initialize-db","djtest.events/initialize-db",-1321307379),(function (_,___$1){
return djtest.db.default_db;
}));
djtest.events.dispatch_timer_event = (function djtest$events$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
if(typeof djtest.events.do_timer !== 'undefined'){
} else {
djtest.events.do_timer = setInterval(djtest.events.dispatch_timer_event,(1000));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__48940){
var vec__48941 = p__48940;
var _ = cljs.core.nth.call(null,vec__48941,(0),null);
var new_time = cljs.core.nth.call(null,vec__48941,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-colour-change","time-colour-change",-762834020),(function (db,p__48944){
var vec__48945 = p__48944;
var _ = cljs.core.nth.call(null,vec__48945,(0),null);
var new_colour_value = cljs.core.nth.call(null,vec__48945,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-colour","time-colour",1630643633),new_colour_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__48948){
var vec__48949 = p__48948;
var _ = cljs.core.nth.call(null,vec__48949,(0),null);
var response = cljs.core.nth.call(null,vec__48949,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"project-string","project-string",-617556642),cljs.core.js__GT_clj.call(null,response));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__48952){
var vec__48953 = p__48952;
var _ = cljs.core.nth.call(null,vec__48953,(0),null);
var response = cljs.core.nth.call(null,vec__48953,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"error","error",-978969032),"Project load failed");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__48956,_){
var map__48957 = p__48956;
var map__48957__$1 = ((((!((map__48957 == null)))?((((map__48957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48957):map__48957);
var db = cljs.core.get.call(null,map__48957__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210),true,new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(djtest.config.api_root),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/projects")].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));

//# sourceMappingURL=events.js.map