// Compiled by ClojureScript 1.9.473 {:elide-asserts true, :target :nodejs}
goog.provide('djtest.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
djtest.core.path = cljs.nodejs.require.call(null,"path");
djtest.core.Electron = cljs.nodejs.require.call(null,"electron");
djtest.core.BrowserWindow = djtest.core.Electron.BrowserWindow;
djtest.core.crash_reporter = djtest.core.Electron.crashReporter;
djtest.core.Os = cljs.nodejs.require.call(null,"os");
djtest.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
djtest.core.app = djtest.core.Electron.app;
djtest.core._main = (function djtest$core$_main(){
djtest.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"soulflyer",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"https://github.com/soulflyer"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

djtest.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return djtest.core.app.quit();
} else {
return null;
}
}));

return djtest.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,djtest.core._STAR_win_STAR_,(new djtest.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,djtest.core._STAR_win_STAR_).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(djtest.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,djtest.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,djtest.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Start descjop application on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(djtest.core.Os.type()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = djtest.core._main;
