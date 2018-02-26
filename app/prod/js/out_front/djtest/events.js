// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('djtest.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('djtest.db');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__23216){
var vec__23217 = p__23216;
var _ = cljs.core.nth.call(null,vec__23217,(0),null);
var new_time = cljs.core.nth.call(null,vec__23217,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-colour-change","time-colour-change",-762834020),(function (db,p__23220){
var vec__23221 = p__23220;
var _ = cljs.core.nth.call(null,vec__23221,(0),null);
var new_colour_value = cljs.core.nth.call(null,vec__23221,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-colour","time-colour",1630643633),new_colour_value);
}));
