// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('djtest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('djtest.events');
goog.require('djtest.views');
goog.require('djtest.config');
djtest.core.mount_root = (function djtest$core$mount_root(setting){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [djtest.views.main_panel], null),document.getElementById("app"));
});
djtest.core.init_BANG_ = (function djtest$core$init_BANG_(setting){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("djtest.events","initialize-db","djtest.events/initialize-db",-1321307379)], null));

return djtest.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map