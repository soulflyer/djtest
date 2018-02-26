// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.11";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args49045 = [];
var len__46230__auto___49048 = arguments.length;
var i__46231__auto___49049 = (0);
while(true){
if((i__46231__auto___49049 < len__46230__auto___49048)){
args49045.push((arguments[i__46231__auto___49049]));

var G__49050 = (i__46231__auto___49049 + (1));
i__46231__auto___49049 = G__49050;
continue;
} else {
}
break;
}

var G__49047 = args49045.length;
switch (G__49047) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49045.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__46237__auto__ = [];
var len__46230__auto___49053 = arguments.length;
var i__46231__auto___49054 = (0);
while(true){
if((i__46231__auto___49054 < len__46230__auto___49053)){
args__46237__auto__.push((arguments[i__46231__auto___49054]));

var G__49055 = (i__46231__auto___49054 + (1));
i__46231__auto___49054 = G__49055;
continue;
} else {
}
break;
}

var argseq__46238__auto__ = ((((0) < args__46237__auto__.length))?(new cljs.core.IndexedSeq(args__46237__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__46238__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49052){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49052));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__46237__auto__ = [];
var len__46230__auto___49057 = arguments.length;
var i__46231__auto___49058 = (0);
while(true){
if((i__46231__auto___49058 < len__46230__auto___49057)){
args__46237__auto__.push((arguments[i__46231__auto___49058]));

var G__49059 = (i__46231__auto___49058 + (1));
i__46231__auto___49058 = G__49059;
continue;
} else {
}
break;
}

var argseq__46238__auto__ = ((((0) < args__46237__auto__.length))?(new cljs.core.IndexedSeq(args__46237__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__46238__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49056){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49056));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49060){
var map__49063 = p__49060;
var map__49063__$1 = ((((!((map__49063 == null)))?((((map__49063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49063):map__49063);
var message = cljs.core.get.call(null,map__49063__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49063__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__45121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__45121__auto__)){
return or__45121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__45109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__45109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__45109__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__47332__auto___49225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto___49225,ch){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto___49225,ch){
return (function (state_49194){
var state_val_49195 = (state_49194[(1)]);
if((state_val_49195 === (7))){
var inst_49190 = (state_49194[(2)]);
var state_49194__$1 = state_49194;
var statearr_49196_49226 = state_49194__$1;
(statearr_49196_49226[(2)] = inst_49190);

(statearr_49196_49226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (1))){
var state_49194__$1 = state_49194;
var statearr_49197_49227 = state_49194__$1;
(statearr_49197_49227[(2)] = null);

(statearr_49197_49227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (4))){
var inst_49147 = (state_49194[(7)]);
var inst_49147__$1 = (state_49194[(2)]);
var state_49194__$1 = (function (){var statearr_49198 = state_49194;
(statearr_49198[(7)] = inst_49147__$1);

return statearr_49198;
})();
if(cljs.core.truth_(inst_49147__$1)){
var statearr_49199_49228 = state_49194__$1;
(statearr_49199_49228[(1)] = (5));

} else {
var statearr_49200_49229 = state_49194__$1;
(statearr_49200_49229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (15))){
var inst_49154 = (state_49194[(8)]);
var inst_49169 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49154);
var inst_49170 = cljs.core.first.call(null,inst_49169);
var inst_49171 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49170);
var inst_49172 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49171)].join('');
var inst_49173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49172);
var state_49194__$1 = state_49194;
var statearr_49201_49230 = state_49194__$1;
(statearr_49201_49230[(2)] = inst_49173);

(statearr_49201_49230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (13))){
var inst_49178 = (state_49194[(2)]);
var state_49194__$1 = state_49194;
var statearr_49202_49231 = state_49194__$1;
(statearr_49202_49231[(2)] = inst_49178);

(statearr_49202_49231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (6))){
var state_49194__$1 = state_49194;
var statearr_49203_49232 = state_49194__$1;
(statearr_49203_49232[(2)] = null);

(statearr_49203_49232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (17))){
var inst_49176 = (state_49194[(2)]);
var state_49194__$1 = state_49194;
var statearr_49204_49233 = state_49194__$1;
(statearr_49204_49233[(2)] = inst_49176);

(statearr_49204_49233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (3))){
var inst_49192 = (state_49194[(2)]);
var state_49194__$1 = state_49194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49194__$1,inst_49192);
} else {
if((state_val_49195 === (12))){
var inst_49153 = (state_49194[(9)]);
var inst_49167 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49153,opts);
var state_49194__$1 = state_49194;
if(cljs.core.truth_(inst_49167)){
var statearr_49205_49234 = state_49194__$1;
(statearr_49205_49234[(1)] = (15));

} else {
var statearr_49206_49235 = state_49194__$1;
(statearr_49206_49235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (2))){
var state_49194__$1 = state_49194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49194__$1,(4),ch);
} else {
if((state_val_49195 === (11))){
var inst_49154 = (state_49194[(8)]);
var inst_49159 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49160 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49154);
var inst_49161 = cljs.core.async.timeout.call(null,(1000));
var inst_49162 = [inst_49160,inst_49161];
var inst_49163 = (new cljs.core.PersistentVector(null,2,(5),inst_49159,inst_49162,null));
var state_49194__$1 = state_49194;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49194__$1,(14),inst_49163);
} else {
if((state_val_49195 === (9))){
var inst_49154 = (state_49194[(8)]);
var inst_49180 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49181 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49154);
var inst_49182 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49181);
var inst_49183 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49182)].join('');
var inst_49184 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49183);
var state_49194__$1 = (function (){var statearr_49207 = state_49194;
(statearr_49207[(10)] = inst_49180);

return statearr_49207;
})();
var statearr_49208_49236 = state_49194__$1;
(statearr_49208_49236[(2)] = inst_49184);

(statearr_49208_49236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (5))){
var inst_49147 = (state_49194[(7)]);
var inst_49149 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49150 = (new cljs.core.PersistentArrayMap(null,2,inst_49149,null));
var inst_49151 = (new cljs.core.PersistentHashSet(null,inst_49150,null));
var inst_49152 = figwheel.client.focus_msgs.call(null,inst_49151,inst_49147);
var inst_49153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49152);
var inst_49154 = cljs.core.first.call(null,inst_49152);
var inst_49155 = figwheel.client.autoload_QMARK_.call(null);
var state_49194__$1 = (function (){var statearr_49209 = state_49194;
(statearr_49209[(9)] = inst_49153);

(statearr_49209[(8)] = inst_49154);

return statearr_49209;
})();
if(cljs.core.truth_(inst_49155)){
var statearr_49210_49237 = state_49194__$1;
(statearr_49210_49237[(1)] = (8));

} else {
var statearr_49211_49238 = state_49194__$1;
(statearr_49211_49238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (14))){
var inst_49165 = (state_49194[(2)]);
var state_49194__$1 = state_49194;
var statearr_49212_49239 = state_49194__$1;
(statearr_49212_49239[(2)] = inst_49165);

(statearr_49212_49239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (16))){
var state_49194__$1 = state_49194;
var statearr_49213_49240 = state_49194__$1;
(statearr_49213_49240[(2)] = null);

(statearr_49213_49240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (10))){
var inst_49186 = (state_49194[(2)]);
var state_49194__$1 = (function (){var statearr_49214 = state_49194;
(statearr_49214[(11)] = inst_49186);

return statearr_49214;
})();
var statearr_49215_49241 = state_49194__$1;
(statearr_49215_49241[(2)] = null);

(statearr_49215_49241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49195 === (8))){
var inst_49153 = (state_49194[(9)]);
var inst_49157 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49153,opts);
var state_49194__$1 = state_49194;
if(cljs.core.truth_(inst_49157)){
var statearr_49216_49242 = state_49194__$1;
(statearr_49216_49242[(1)] = (11));

} else {
var statearr_49217_49243 = state_49194__$1;
(statearr_49217_49243[(1)] = (12));

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
});})(c__47332__auto___49225,ch))
;
return ((function (switch__47311__auto__,c__47332__auto___49225,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____0 = (function (){
var statearr_49221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49221[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__);

(statearr_49221[(1)] = (1));

return statearr_49221;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____1 = (function (state_49194){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_49194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e49222){if((e49222 instanceof Object)){
var ex__47315__auto__ = e49222;
var statearr_49223_49244 = state_49194;
(statearr_49223_49244[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49245 = state_49194;
state_49194 = G__49245;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__ = function(state_49194){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____1.call(this,state_49194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47312__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto___49225,ch))
})();
var state__47334__auto__ = (function (){var statearr_49224 = f__47333__auto__.call(null);
(statearr_49224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto___49225);

return statearr_49224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto___49225,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49246_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49246_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_49249 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49249){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49248){if((e49248 instanceof Error)){
var e = e49248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49249], null));
} else {
var e = e49248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49249))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49250){
var map__49259 = p__49250;
var map__49259__$1 = ((((!((map__49259 == null)))?((((map__49259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49259):map__49259);
var opts = map__49259__$1;
var build_id = cljs.core.get.call(null,map__49259__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49259,map__49259__$1,opts,build_id){
return (function (p__49261){
var vec__49262 = p__49261;
var seq__49263 = cljs.core.seq.call(null,vec__49262);
var first__49264 = cljs.core.first.call(null,seq__49263);
var seq__49263__$1 = cljs.core.next.call(null,seq__49263);
var map__49265 = first__49264;
var map__49265__$1 = ((((!((map__49265 == null)))?((((map__49265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49265):map__49265);
var msg = map__49265__$1;
var msg_name = cljs.core.get.call(null,map__49265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49263__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49262,seq__49263,first__49264,seq__49263__$1,map__49265,map__49265__$1,msg,msg_name,_,map__49259,map__49259__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49262,seq__49263,first__49264,seq__49263__$1,map__49265,map__49265__$1,msg,msg_name,_,map__49259,map__49259__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49259,map__49259__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49273){
var vec__49274 = p__49273;
var seq__49275 = cljs.core.seq.call(null,vec__49274);
var first__49276 = cljs.core.first.call(null,seq__49275);
var seq__49275__$1 = cljs.core.next.call(null,seq__49275);
var map__49277 = first__49276;
var map__49277__$1 = ((((!((map__49277 == null)))?((((map__49277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49277):map__49277);
var msg = map__49277__$1;
var msg_name = cljs.core.get.call(null,map__49277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49275__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49279){
var map__49291 = p__49279;
var map__49291__$1 = ((((!((map__49291 == null)))?((((map__49291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49291):map__49291);
var on_compile_warning = cljs.core.get.call(null,map__49291__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49291__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49291,map__49291__$1,on_compile_warning,on_compile_fail){
return (function (p__49293){
var vec__49294 = p__49293;
var seq__49295 = cljs.core.seq.call(null,vec__49294);
var first__49296 = cljs.core.first.call(null,seq__49295);
var seq__49295__$1 = cljs.core.next.call(null,seq__49295);
var map__49297 = first__49296;
var map__49297__$1 = ((((!((map__49297 == null)))?((((map__49297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49297):map__49297);
var msg = map__49297__$1;
var msg_name = cljs.core.get.call(null,map__49297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49295__$1;
var pred__49299 = cljs.core._EQ_;
var expr__49300 = msg_name;
if(cljs.core.truth_(pred__49299.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49300))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49299.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49300))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49291,map__49291__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__,msg_hist,msg_names,msg){
return (function (state_49528){
var state_val_49529 = (state_49528[(1)]);
if((state_val_49529 === (7))){
var inst_49448 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49448)){
var statearr_49530_49580 = state_49528__$1;
(statearr_49530_49580[(1)] = (8));

} else {
var statearr_49531_49581 = state_49528__$1;
(statearr_49531_49581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (20))){
var inst_49522 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49532_49582 = state_49528__$1;
(statearr_49532_49582[(2)] = inst_49522);

(statearr_49532_49582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (27))){
var inst_49518 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49533_49583 = state_49528__$1;
(statearr_49533_49583[(2)] = inst_49518);

(statearr_49533_49583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (1))){
var inst_49441 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49441)){
var statearr_49534_49584 = state_49528__$1;
(statearr_49534_49584[(1)] = (2));

} else {
var statearr_49535_49585 = state_49528__$1;
(statearr_49535_49585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (24))){
var inst_49520 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49536_49586 = state_49528__$1;
(statearr_49536_49586[(2)] = inst_49520);

(statearr_49536_49586[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (4))){
var inst_49526 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49528__$1,inst_49526);
} else {
if((state_val_49529 === (15))){
var inst_49524 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49537_49587 = state_49528__$1;
(statearr_49537_49587[(2)] = inst_49524);

(statearr_49537_49587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (21))){
var inst_49477 = (state_49528[(2)]);
var inst_49478 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49479 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49478);
var state_49528__$1 = (function (){var statearr_49538 = state_49528;
(statearr_49538[(7)] = inst_49477);

return statearr_49538;
})();
var statearr_49539_49588 = state_49528__$1;
(statearr_49539_49588[(2)] = inst_49479);

(statearr_49539_49588[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (31))){
var inst_49507 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49507)){
var statearr_49540_49589 = state_49528__$1;
(statearr_49540_49589[(1)] = (34));

} else {
var statearr_49541_49590 = state_49528__$1;
(statearr_49541_49590[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (32))){
var inst_49516 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49542_49591 = state_49528__$1;
(statearr_49542_49591[(2)] = inst_49516);

(statearr_49542_49591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (33))){
var inst_49503 = (state_49528[(2)]);
var inst_49504 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49505 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49504);
var state_49528__$1 = (function (){var statearr_49543 = state_49528;
(statearr_49543[(8)] = inst_49503);

return statearr_49543;
})();
var statearr_49544_49592 = state_49528__$1;
(statearr_49544_49592[(2)] = inst_49505);

(statearr_49544_49592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (13))){
var inst_49462 = figwheel.client.heads_up.clear.call(null);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(16),inst_49462);
} else {
if((state_val_49529 === (22))){
var inst_49483 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49484 = figwheel.client.heads_up.append_warning_message.call(null,inst_49483);
var state_49528__$1 = state_49528;
var statearr_49545_49593 = state_49528__$1;
(statearr_49545_49593[(2)] = inst_49484);

(statearr_49545_49593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (36))){
var inst_49514 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49546_49594 = state_49528__$1;
(statearr_49546_49594[(2)] = inst_49514);

(statearr_49546_49594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (29))){
var inst_49494 = (state_49528[(2)]);
var inst_49495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49496 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49495);
var state_49528__$1 = (function (){var statearr_49547 = state_49528;
(statearr_49547[(9)] = inst_49494);

return statearr_49547;
})();
var statearr_49548_49595 = state_49528__$1;
(statearr_49548_49595[(2)] = inst_49496);

(statearr_49548_49595[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (6))){
var inst_49443 = (state_49528[(10)]);
var state_49528__$1 = state_49528;
var statearr_49549_49596 = state_49528__$1;
(statearr_49549_49596[(2)] = inst_49443);

(statearr_49549_49596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (28))){
var inst_49490 = (state_49528[(2)]);
var inst_49491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49492 = figwheel.client.heads_up.display_warning.call(null,inst_49491);
var state_49528__$1 = (function (){var statearr_49550 = state_49528;
(statearr_49550[(11)] = inst_49490);

return statearr_49550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(29),inst_49492);
} else {
if((state_val_49529 === (25))){
var inst_49488 = figwheel.client.heads_up.clear.call(null);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(28),inst_49488);
} else {
if((state_val_49529 === (34))){
var inst_49509 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(37),inst_49509);
} else {
if((state_val_49529 === (17))){
var inst_49468 = (state_49528[(2)]);
var inst_49469 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49470 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49469);
var state_49528__$1 = (function (){var statearr_49551 = state_49528;
(statearr_49551[(12)] = inst_49468);

return statearr_49551;
})();
var statearr_49552_49597 = state_49528__$1;
(statearr_49552_49597[(2)] = inst_49470);

(statearr_49552_49597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (3))){
var inst_49460 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49460)){
var statearr_49553_49598 = state_49528__$1;
(statearr_49553_49598[(1)] = (13));

} else {
var statearr_49554_49599 = state_49528__$1;
(statearr_49554_49599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (12))){
var inst_49456 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49555_49600 = state_49528__$1;
(statearr_49555_49600[(2)] = inst_49456);

(statearr_49555_49600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (2))){
var inst_49443 = (state_49528[(10)]);
var inst_49443__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49528__$1 = (function (){var statearr_49556 = state_49528;
(statearr_49556[(10)] = inst_49443__$1);

return statearr_49556;
})();
if(cljs.core.truth_(inst_49443__$1)){
var statearr_49557_49601 = state_49528__$1;
(statearr_49557_49601[(1)] = (5));

} else {
var statearr_49558_49602 = state_49528__$1;
(statearr_49558_49602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (23))){
var inst_49486 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49486)){
var statearr_49559_49603 = state_49528__$1;
(statearr_49559_49603[(1)] = (25));

} else {
var statearr_49560_49604 = state_49528__$1;
(statearr_49560_49604[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (35))){
var state_49528__$1 = state_49528;
var statearr_49561_49605 = state_49528__$1;
(statearr_49561_49605[(2)] = null);

(statearr_49561_49605[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (19))){
var inst_49481 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49481)){
var statearr_49562_49606 = state_49528__$1;
(statearr_49562_49606[(1)] = (22));

} else {
var statearr_49563_49607 = state_49528__$1;
(statearr_49563_49607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (11))){
var inst_49452 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49564_49608 = state_49528__$1;
(statearr_49564_49608[(2)] = inst_49452);

(statearr_49564_49608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (9))){
var inst_49454 = figwheel.client.heads_up.clear.call(null);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(12),inst_49454);
} else {
if((state_val_49529 === (5))){
var inst_49445 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49528__$1 = state_49528;
var statearr_49565_49609 = state_49528__$1;
(statearr_49565_49609[(2)] = inst_49445);

(statearr_49565_49609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (14))){
var inst_49472 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49472)){
var statearr_49566_49610 = state_49528__$1;
(statearr_49566_49610[(1)] = (18));

} else {
var statearr_49567_49611 = state_49528__$1;
(statearr_49567_49611[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (26))){
var inst_49498 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49498)){
var statearr_49568_49612 = state_49528__$1;
(statearr_49568_49612[(1)] = (30));

} else {
var statearr_49569_49613 = state_49528__$1;
(statearr_49569_49613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (16))){
var inst_49464 = (state_49528[(2)]);
var inst_49465 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49466 = figwheel.client.heads_up.display_exception.call(null,inst_49465);
var state_49528__$1 = (function (){var statearr_49570 = state_49528;
(statearr_49570[(13)] = inst_49464);

return statearr_49570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(17),inst_49466);
} else {
if((state_val_49529 === (30))){
var inst_49500 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49501 = figwheel.client.heads_up.display_warning.call(null,inst_49500);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(33),inst_49501);
} else {
if((state_val_49529 === (10))){
var inst_49458 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49571_49614 = state_49528__$1;
(statearr_49571_49614[(2)] = inst_49458);

(statearr_49571_49614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (18))){
var inst_49474 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49475 = figwheel.client.heads_up.display_exception.call(null,inst_49474);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(21),inst_49475);
} else {
if((state_val_49529 === (37))){
var inst_49511 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49572_49615 = state_49528__$1;
(statearr_49572_49615[(2)] = inst_49511);

(statearr_49572_49615[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (8))){
var inst_49450 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(11),inst_49450);
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
});})(c__47332__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47311__auto__,c__47332__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____0 = (function (){
var statearr_49576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49576[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__);

(statearr_49576[(1)] = (1));

return statearr_49576;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____1 = (function (state_49528){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_49528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e49577){if((e49577 instanceof Object)){
var ex__47315__auto__ = e49577;
var statearr_49578_49616 = state_49528;
(statearr_49578_49616[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49617 = state_49528;
state_49528 = G__49617;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__ = function(state_49528){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____1.call(this,state_49528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__,msg_hist,msg_names,msg))
})();
var state__47334__auto__ = (function (){var statearr_49579 = f__47333__auto__.call(null);
(statearr_49579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_49579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__,msg_hist,msg_names,msg))
);

return c__47332__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47332__auto___49680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto___49680,ch){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto___49680,ch){
return (function (state_49663){
var state_val_49664 = (state_49663[(1)]);
if((state_val_49664 === (1))){
var state_49663__$1 = state_49663;
var statearr_49665_49681 = state_49663__$1;
(statearr_49665_49681[(2)] = null);

(statearr_49665_49681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (2))){
var state_49663__$1 = state_49663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49663__$1,(4),ch);
} else {
if((state_val_49664 === (3))){
var inst_49661 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49663__$1,inst_49661);
} else {
if((state_val_49664 === (4))){
var inst_49651 = (state_49663[(7)]);
var inst_49651__$1 = (state_49663[(2)]);
var state_49663__$1 = (function (){var statearr_49666 = state_49663;
(statearr_49666[(7)] = inst_49651__$1);

return statearr_49666;
})();
if(cljs.core.truth_(inst_49651__$1)){
var statearr_49667_49682 = state_49663__$1;
(statearr_49667_49682[(1)] = (5));

} else {
var statearr_49668_49683 = state_49663__$1;
(statearr_49668_49683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (5))){
var inst_49651 = (state_49663[(7)]);
var inst_49653 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49651);
var state_49663__$1 = state_49663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49663__$1,(8),inst_49653);
} else {
if((state_val_49664 === (6))){
var state_49663__$1 = state_49663;
var statearr_49669_49684 = state_49663__$1;
(statearr_49669_49684[(2)] = null);

(statearr_49669_49684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (7))){
var inst_49659 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
var statearr_49670_49685 = state_49663__$1;
(statearr_49670_49685[(2)] = inst_49659);

(statearr_49670_49685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (8))){
var inst_49655 = (state_49663[(2)]);
var state_49663__$1 = (function (){var statearr_49671 = state_49663;
(statearr_49671[(8)] = inst_49655);

return statearr_49671;
})();
var statearr_49672_49686 = state_49663__$1;
(statearr_49672_49686[(2)] = null);

(statearr_49672_49686[(1)] = (2));


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
});})(c__47332__auto___49680,ch))
;
return ((function (switch__47311__auto__,c__47332__auto___49680,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47312__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47312__auto____0 = (function (){
var statearr_49676 = [null,null,null,null,null,null,null,null,null];
(statearr_49676[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47312__auto__);

(statearr_49676[(1)] = (1));

return statearr_49676;
});
var figwheel$client$heads_up_plugin_$_state_machine__47312__auto____1 = (function (state_49663){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_49663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e49677){if((e49677 instanceof Object)){
var ex__47315__auto__ = e49677;
var statearr_49678_49687 = state_49663;
(statearr_49678_49687[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49688 = state_49663;
state_49663 = G__49688;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47312__auto__ = function(state_49663){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47312__auto____1.call(this,state_49663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47312__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47312__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto___49680,ch))
})();
var state__47334__auto__ = (function (){var statearr_49679 = f__47333__auto__.call(null);
(statearr_49679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto___49680);

return statearr_49679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto___49680,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__){
return (function (state_49709){
var state_val_49710 = (state_49709[(1)]);
if((state_val_49710 === (1))){
var inst_49704 = cljs.core.async.timeout.call(null,(3000));
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49709__$1,(2),inst_49704);
} else {
if((state_val_49710 === (2))){
var inst_49706 = (state_49709[(2)]);
var inst_49707 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49709__$1 = (function (){var statearr_49711 = state_49709;
(statearr_49711[(7)] = inst_49706);

return statearr_49711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49709__$1,inst_49707);
} else {
return null;
}
}
});})(c__47332__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____0 = (function (){
var statearr_49715 = [null,null,null,null,null,null,null,null];
(statearr_49715[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__);

(statearr_49715[(1)] = (1));

return statearr_49715;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____1 = (function (state_49709){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_49709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e49716){if((e49716 instanceof Object)){
var ex__47315__auto__ = e49716;
var statearr_49717_49719 = state_49709;
(statearr_49717_49719[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49720 = state_49709;
state_49709 = G__49720;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__ = function(state_49709){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____1.call(this,state_49709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47312__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__))
})();
var state__47334__auto__ = (function (){var statearr_49718 = f__47333__auto__.call(null);
(statearr_49718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_49718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__))
);

return c__47332__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49743){
var state_val_49744 = (state_49743[(1)]);
if((state_val_49744 === (1))){
var inst_49737 = cljs.core.async.timeout.call(null,(2000));
var state_49743__$1 = state_49743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49743__$1,(2),inst_49737);
} else {
if((state_val_49744 === (2))){
var inst_49739 = (state_49743[(2)]);
var inst_49740 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_49741 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49740);
var state_49743__$1 = (function (){var statearr_49745 = state_49743;
(statearr_49745[(7)] = inst_49739);

return statearr_49745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49743__$1,inst_49741);
} else {
return null;
}
}
});})(c__47332__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____0 = (function (){
var statearr_49749 = [null,null,null,null,null,null,null,null];
(statearr_49749[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__);

(statearr_49749[(1)] = (1));

return statearr_49749;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____1 = (function (state_49743){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_49743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e49750){if((e49750 instanceof Object)){
var ex__47315__auto__ = e49750;
var statearr_49751_49753 = state_49743;
(statearr_49751_49753[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49754 = state_49743;
state_49743 = G__49754;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__ = function(state_49743){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____1.call(this,state_49743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__,figwheel_version,temp__4657__auto__))
})();
var state__47334__auto__ = (function (){var statearr_49752 = f__47333__auto__.call(null);
(statearr_49752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_49752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__,figwheel_version,temp__4657__auto__))
);

return c__47332__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49755){
var map__49759 = p__49755;
var map__49759__$1 = ((((!((map__49759 == null)))?((((map__49759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49759):map__49759);
var file = cljs.core.get.call(null,map__49759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49759__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49759__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49761 = "";
var G__49761__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49761),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49761);
var G__49761__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49761__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49761__$1);
if(cljs.core.truth_((function (){var and__45109__auto__ = line;
if(cljs.core.truth_(and__45109__auto__)){
return column;
} else {
return and__45109__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49761__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49761__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49762){
var map__49769 = p__49762;
var map__49769__$1 = ((((!((map__49769 == null)))?((((map__49769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49769):map__49769);
var ed = map__49769__$1;
var formatted_exception = cljs.core.get.call(null,map__49769__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49769__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49769__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49771_49775 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49772_49776 = null;
var count__49773_49777 = (0);
var i__49774_49778 = (0);
while(true){
if((i__49774_49778 < count__49773_49777)){
var msg_49779 = cljs.core._nth.call(null,chunk__49772_49776,i__49774_49778);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49779);

var G__49780 = seq__49771_49775;
var G__49781 = chunk__49772_49776;
var G__49782 = count__49773_49777;
var G__49783 = (i__49774_49778 + (1));
seq__49771_49775 = G__49780;
chunk__49772_49776 = G__49781;
count__49773_49777 = G__49782;
i__49774_49778 = G__49783;
continue;
} else {
var temp__4657__auto___49784 = cljs.core.seq.call(null,seq__49771_49775);
if(temp__4657__auto___49784){
var seq__49771_49785__$1 = temp__4657__auto___49784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49771_49785__$1)){
var c__45940__auto___49786 = cljs.core.chunk_first.call(null,seq__49771_49785__$1);
var G__49787 = cljs.core.chunk_rest.call(null,seq__49771_49785__$1);
var G__49788 = c__45940__auto___49786;
var G__49789 = cljs.core.count.call(null,c__45940__auto___49786);
var G__49790 = (0);
seq__49771_49775 = G__49787;
chunk__49772_49776 = G__49788;
count__49773_49777 = G__49789;
i__49774_49778 = G__49790;
continue;
} else {
var msg_49791 = cljs.core.first.call(null,seq__49771_49785__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49791);

var G__49792 = cljs.core.next.call(null,seq__49771_49785__$1);
var G__49793 = null;
var G__49794 = (0);
var G__49795 = (0);
seq__49771_49775 = G__49792;
chunk__49772_49776 = G__49793;
count__49773_49777 = G__49794;
i__49774_49778 = G__49795;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49796){
var map__49799 = p__49796;
var map__49799__$1 = ((((!((map__49799 == null)))?((((map__49799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49799):map__49799);
var w = map__49799__$1;
var message = cljs.core.get.call(null,map__49799__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__45109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__45109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__45109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49811 = cljs.core.seq.call(null,plugins);
var chunk__49812 = null;
var count__49813 = (0);
var i__49814 = (0);
while(true){
if((i__49814 < count__49813)){
var vec__49815 = cljs.core._nth.call(null,chunk__49812,i__49814);
var k = cljs.core.nth.call(null,vec__49815,(0),null);
var plugin = cljs.core.nth.call(null,vec__49815,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49821 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49811,chunk__49812,count__49813,i__49814,pl_49821,vec__49815,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49821.call(null,msg_hist);
});})(seq__49811,chunk__49812,count__49813,i__49814,pl_49821,vec__49815,k,plugin))
);
} else {
}

var G__49822 = seq__49811;
var G__49823 = chunk__49812;
var G__49824 = count__49813;
var G__49825 = (i__49814 + (1));
seq__49811 = G__49822;
chunk__49812 = G__49823;
count__49813 = G__49824;
i__49814 = G__49825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49811);
if(temp__4657__auto__){
var seq__49811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49811__$1)){
var c__45940__auto__ = cljs.core.chunk_first.call(null,seq__49811__$1);
var G__49826 = cljs.core.chunk_rest.call(null,seq__49811__$1);
var G__49827 = c__45940__auto__;
var G__49828 = cljs.core.count.call(null,c__45940__auto__);
var G__49829 = (0);
seq__49811 = G__49826;
chunk__49812 = G__49827;
count__49813 = G__49828;
i__49814 = G__49829;
continue;
} else {
var vec__49818 = cljs.core.first.call(null,seq__49811__$1);
var k = cljs.core.nth.call(null,vec__49818,(0),null);
var plugin = cljs.core.nth.call(null,vec__49818,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49830 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49811,chunk__49812,count__49813,i__49814,pl_49830,vec__49818,k,plugin,seq__49811__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49830.call(null,msg_hist);
});})(seq__49811,chunk__49812,count__49813,i__49814,pl_49830,vec__49818,k,plugin,seq__49811__$1,temp__4657__auto__))
);
} else {
}

var G__49831 = cljs.core.next.call(null,seq__49811__$1);
var G__49832 = null;
var G__49833 = (0);
var G__49834 = (0);
seq__49811 = G__49831;
chunk__49812 = G__49832;
count__49813 = G__49833;
i__49814 = G__49834;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args49835 = [];
var len__46230__auto___49842 = arguments.length;
var i__46231__auto___49843 = (0);
while(true){
if((i__46231__auto___49843 < len__46230__auto___49842)){
args49835.push((arguments[i__46231__auto___49843]));

var G__49844 = (i__46231__auto___49843 + (1));
i__46231__auto___49843 = G__49844;
continue;
} else {
}
break;
}

var G__49837 = args49835.length;
switch (G__49837) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49835.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49838_49846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49839_49847 = null;
var count__49840_49848 = (0);
var i__49841_49849 = (0);
while(true){
if((i__49841_49849 < count__49840_49848)){
var msg_49850 = cljs.core._nth.call(null,chunk__49839_49847,i__49841_49849);
figwheel.client.socket.handle_incoming_message.call(null,msg_49850);

var G__49851 = seq__49838_49846;
var G__49852 = chunk__49839_49847;
var G__49853 = count__49840_49848;
var G__49854 = (i__49841_49849 + (1));
seq__49838_49846 = G__49851;
chunk__49839_49847 = G__49852;
count__49840_49848 = G__49853;
i__49841_49849 = G__49854;
continue;
} else {
var temp__4657__auto___49855 = cljs.core.seq.call(null,seq__49838_49846);
if(temp__4657__auto___49855){
var seq__49838_49856__$1 = temp__4657__auto___49855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49838_49856__$1)){
var c__45940__auto___49857 = cljs.core.chunk_first.call(null,seq__49838_49856__$1);
var G__49858 = cljs.core.chunk_rest.call(null,seq__49838_49856__$1);
var G__49859 = c__45940__auto___49857;
var G__49860 = cljs.core.count.call(null,c__45940__auto___49857);
var G__49861 = (0);
seq__49838_49846 = G__49858;
chunk__49839_49847 = G__49859;
count__49840_49848 = G__49860;
i__49841_49849 = G__49861;
continue;
} else {
var msg_49862 = cljs.core.first.call(null,seq__49838_49856__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49862);

var G__49863 = cljs.core.next.call(null,seq__49838_49856__$1);
var G__49864 = null;
var G__49865 = (0);
var G__49866 = (0);
seq__49838_49846 = G__49863;
chunk__49839_49847 = G__49864;
count__49840_49848 = G__49865;
i__49841_49849 = G__49866;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__46237__auto__ = [];
var len__46230__auto___49871 = arguments.length;
var i__46231__auto___49872 = (0);
while(true){
if((i__46231__auto___49872 < len__46230__auto___49871)){
args__46237__auto__.push((arguments[i__46231__auto___49872]));

var G__49873 = (i__46231__auto___49872 + (1));
i__46231__auto___49872 = G__49873;
continue;
} else {
}
break;
}

var argseq__46238__auto__ = ((((0) < args__46237__auto__.length))?(new cljs.core.IndexedSeq(args__46237__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__46238__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49868){
var map__49869 = p__49868;
var map__49869__$1 = ((((!((map__49869 == null)))?((((map__49869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49869):map__49869);
var opts = map__49869__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49867){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49867));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49875){if((e49875 instanceof Error)){
var e = e49875;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49875;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49879){
var map__49880 = p__49879;
var map__49880__$1 = ((((!((map__49880 == null)))?((((map__49880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49880):map__49880);
var msg_name = cljs.core.get.call(null,map__49880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map