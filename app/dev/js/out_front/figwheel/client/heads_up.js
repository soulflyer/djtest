// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__46237__auto__ = [];
var len__46230__auto___48453 = arguments.length;
var i__46231__auto___48454 = (0);
while(true){
if((i__46231__auto___48454 < len__46230__auto___48453)){
args__46237__auto__.push((arguments[i__46231__auto___48454]));

var G__48455 = (i__46231__auto___48454 + (1));
i__46231__auto___48454 = G__48455;
continue;
} else {
}
break;
}

var argseq__46238__auto__ = ((((2) < args__46237__auto__.length))?(new cljs.core.IndexedSeq(args__46237__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__46238__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__48445_48456 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__48446_48457 = null;
var count__48447_48458 = (0);
var i__48448_48459 = (0);
while(true){
if((i__48448_48459 < count__48447_48458)){
var k_48460 = cljs.core._nth.call(null,chunk__48446_48457,i__48448_48459);
e.setAttribute(cljs.core.name.call(null,k_48460),cljs.core.get.call(null,attrs,k_48460));

var G__48461 = seq__48445_48456;
var G__48462 = chunk__48446_48457;
var G__48463 = count__48447_48458;
var G__48464 = (i__48448_48459 + (1));
seq__48445_48456 = G__48461;
chunk__48446_48457 = G__48462;
count__48447_48458 = G__48463;
i__48448_48459 = G__48464;
continue;
} else {
var temp__4657__auto___48465 = cljs.core.seq.call(null,seq__48445_48456);
if(temp__4657__auto___48465){
var seq__48445_48466__$1 = temp__4657__auto___48465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48445_48466__$1)){
var c__45940__auto___48467 = cljs.core.chunk_first.call(null,seq__48445_48466__$1);
var G__48468 = cljs.core.chunk_rest.call(null,seq__48445_48466__$1);
var G__48469 = c__45940__auto___48467;
var G__48470 = cljs.core.count.call(null,c__45940__auto___48467);
var G__48471 = (0);
seq__48445_48456 = G__48468;
chunk__48446_48457 = G__48469;
count__48447_48458 = G__48470;
i__48448_48459 = G__48471;
continue;
} else {
var k_48472 = cljs.core.first.call(null,seq__48445_48466__$1);
e.setAttribute(cljs.core.name.call(null,k_48472),cljs.core.get.call(null,attrs,k_48472));

var G__48473 = cljs.core.next.call(null,seq__48445_48466__$1);
var G__48474 = null;
var G__48475 = (0);
var G__48476 = (0);
seq__48445_48456 = G__48473;
chunk__48446_48457 = G__48474;
count__48447_48458 = G__48475;
i__48448_48459 = G__48476;
continue;
}
} else {
}
}
break;
}

var seq__48449_48477 = cljs.core.seq.call(null,children);
var chunk__48450_48478 = null;
var count__48451_48479 = (0);
var i__48452_48480 = (0);
while(true){
if((i__48452_48480 < count__48451_48479)){
var ch_48481 = cljs.core._nth.call(null,chunk__48450_48478,i__48452_48480);
e.appendChild(ch_48481);

var G__48482 = seq__48449_48477;
var G__48483 = chunk__48450_48478;
var G__48484 = count__48451_48479;
var G__48485 = (i__48452_48480 + (1));
seq__48449_48477 = G__48482;
chunk__48450_48478 = G__48483;
count__48451_48479 = G__48484;
i__48452_48480 = G__48485;
continue;
} else {
var temp__4657__auto___48486 = cljs.core.seq.call(null,seq__48449_48477);
if(temp__4657__auto___48486){
var seq__48449_48487__$1 = temp__4657__auto___48486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48449_48487__$1)){
var c__45940__auto___48488 = cljs.core.chunk_first.call(null,seq__48449_48487__$1);
var G__48489 = cljs.core.chunk_rest.call(null,seq__48449_48487__$1);
var G__48490 = c__45940__auto___48488;
var G__48491 = cljs.core.count.call(null,c__45940__auto___48488);
var G__48492 = (0);
seq__48449_48477 = G__48489;
chunk__48450_48478 = G__48490;
count__48451_48479 = G__48491;
i__48452_48480 = G__48492;
continue;
} else {
var ch_48493 = cljs.core.first.call(null,seq__48449_48487__$1);
e.appendChild(ch_48493);

var G__48494 = cljs.core.next.call(null,seq__48449_48487__$1);
var G__48495 = null;
var G__48496 = (0);
var G__48497 = (0);
seq__48449_48477 = G__48494;
chunk__48450_48478 = G__48495;
count__48451_48479 = G__48496;
i__48452_48480 = G__48497;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq48442){
var G__48443 = cljs.core.first.call(null,seq48442);
var seq48442__$1 = cljs.core.next.call(null,seq48442);
var G__48444 = cljs.core.first.call(null,seq48442__$1);
var seq48442__$2 = cljs.core.next.call(null,seq48442__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__48443,G__48444,seq48442__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__46054__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__46055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__46056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__46057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__46058__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__46054__auto__,prefer_table__46055__auto__,method_cache__46056__auto__,cached_hierarchy__46057__auto__,hierarchy__46058__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__46054__auto__,prefer_table__46055__auto__,method_cache__46056__auto__,cached_hierarchy__46057__auto__,hierarchy__46058__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__46058__auto__,method_table__46054__auto__,prefer_table__46055__auto__,method_cache__46056__auto__,cached_hierarchy__46057__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_48498 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_48498.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_48498.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_48498.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_48498);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__48499,st_map){
var map__48506 = p__48499;
var map__48506__$1 = ((((!((map__48506 == null)))?((((map__48506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48506):map__48506);
var container_el = cljs.core.get.call(null,map__48506__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__48506,map__48506__$1,container_el){
return (function (p__48508){
var vec__48509 = p__48508;
var k = cljs.core.nth.call(null,vec__48509,(0),null);
var v = cljs.core.nth.call(null,vec__48509,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__48506,map__48506__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__48512,dom_str){
var map__48515 = p__48512;
var map__48515__$1 = ((((!((map__48515 == null)))?((((map__48515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48515):map__48515);
var c = map__48515__$1;
var content_area_el = cljs.core.get.call(null,map__48515__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__48517){
var map__48520 = p__48517;
var map__48520__$1 = ((((!((map__48520 == null)))?((((map__48520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48520):map__48520);
var content_area_el = cljs.core.get.call(null,map__48520__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__){
return (function (state_48563){
var state_val_48564 = (state_48563[(1)]);
if((state_val_48564 === (1))){
var inst_48548 = (state_48563[(7)]);
var inst_48548__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48549 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48550 = ["10px","10px","100%","68px","1.0"];
var inst_48551 = cljs.core.PersistentHashMap.fromArrays(inst_48549,inst_48550);
var inst_48552 = cljs.core.merge.call(null,inst_48551,style);
var inst_48553 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48548__$1,inst_48552);
var inst_48554 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48548__$1,msg);
var inst_48555 = cljs.core.async.timeout.call(null,(300));
var state_48563__$1 = (function (){var statearr_48565 = state_48563;
(statearr_48565[(8)] = inst_48553);

(statearr_48565[(9)] = inst_48554);

(statearr_48565[(7)] = inst_48548__$1);

return statearr_48565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48563__$1,(2),inst_48555);
} else {
if((state_val_48564 === (2))){
var inst_48548 = (state_48563[(7)]);
var inst_48557 = (state_48563[(2)]);
var inst_48558 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_48559 = ["auto"];
var inst_48560 = cljs.core.PersistentHashMap.fromArrays(inst_48558,inst_48559);
var inst_48561 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48548,inst_48560);
var state_48563__$1 = (function (){var statearr_48566 = state_48563;
(statearr_48566[(10)] = inst_48557);

return statearr_48566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48563__$1,inst_48561);
} else {
return null;
}
}
});})(c__47332__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____0 = (function (){
var statearr_48570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48570[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__);

(statearr_48570[(1)] = (1));

return statearr_48570;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____1 = (function (state_48563){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_48563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e48571){if((e48571 instanceof Object)){
var ex__47315__auto__ = e48571;
var statearr_48572_48574 = state_48563;
(statearr_48572_48574[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48575 = state_48563;
state_48563 = G__48575;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__ = function(state_48563){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____1.call(this,state_48563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__))
})();
var state__47334__auto__ = (function (){var statearr_48573 = f__47333__auto__.call(null);
(statearr_48573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_48573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__))
);

return c__47332__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args48576 = [];
var len__46230__auto___48579 = arguments.length;
var i__46231__auto___48580 = (0);
while(true){
if((i__46231__auto___48580 < len__46230__auto___48579)){
args48576.push((arguments[i__46231__auto___48580]));

var G__48581 = (i__46231__auto___48580 + (1));
i__46231__auto___48580 = G__48581;
continue;
} else {
}
break;
}

var G__48578 = args48576.length;
switch (G__48578) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48576.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__48583){
var map__48586 = p__48583;
var map__48586__$1 = ((((!((map__48586 == null)))?((((map__48586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48586):map__48586);
var file = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__45121__auto__ = file;
if(cljs.core.truth_(or__45121__auto__)){
return or__45121__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__48588){
var vec__48595 = p__48588;
var typ = cljs.core.nth.call(null,vec__48595,(0),null);
var line_number = cljs.core.nth.call(null,vec__48595,(1),null);
var line = cljs.core.nth.call(null,vec__48595,(2),null);
var pred__48598 = cljs.core._EQ_;
var expr__48599 = typ;
if(cljs.core.truth_(pred__48598.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__48599))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__48598.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__48599))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__48598.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__48599))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__48601_SHARP_){
return cljs.core.update_in.call(null,p1__48601_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__48602_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__48602_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__48605){
var map__48608 = p__48605;
var map__48608__$1 = ((((!((map__48608 == null)))?((((map__48608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48608):map__48608);
var exception = map__48608__$1;
var message = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__48608__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__45109__auto__ = file;
if(cljs.core.truth_(and__45109__auto__)){
return line;
} else {
return and__45109__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48608,map__48608__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48603_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48603_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__48608,map__48608__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__48608,map__48608__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48604_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__48604_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__48604_SHARP_)))].join('');
});})(last_message,map__48608,map__48608__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__48610){
var map__48613 = p__48610;
var map__48613__$1 = ((((!((map__48613 == null)))?((((map__48613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48613):map__48613);
var file = cljs.core.get.call(null,map__48613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48613__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48613__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__48618 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__48618__$1 = ((((!((map__48618 == null)))?((((map__48618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48618):map__48618);
var head = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48618__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__48621){
var map__48624 = p__48621;
var map__48624__$1 = ((((!((map__48624 == null)))?((((map__48624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48624):map__48624);
var warning_data = map__48624__$1;
var file = cljs.core.get.call(null,map__48624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__48624__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__48624__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__45109__auto__ = file;
if(cljs.core.truth_(and__45109__auto__)){
return line;
} else {
return and__45109__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48624,map__48624__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__48620_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48620_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__48624,map__48624__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__48628 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__48628__$1 = ((((!((map__48628 == null)))?((((map__48628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48628):map__48628);
var head = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48628__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__48630){
var map__48634 = p__48630;
var map__48634__$1 = ((((!((map__48634 == null)))?((((map__48634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48634):map__48634);
var warning_data = map__48634__$1;
var message = cljs.core.get.call(null,map__48634__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48634__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48634__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48636 = message;
var G__48636__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48636),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48636);
var G__48636__$2 = (cljs.core.truth_((function (){var and__45109__auto__ = line;
if(cljs.core.truth_(and__45109__auto__)){
return column;
} else {
return and__45109__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48636__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__48636__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48636__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__48636__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__48637){
var map__48642 = p__48637;
var map__48642__$1 = ((((!((map__48642 == null)))?((((map__48642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48642):map__48642);
var warning_data = map__48642__$1;
var message = cljs.core.get.call(null,map__48642__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__48644 = figwheel.client.heads_up.ensure_container.call(null);
var map__48644__$1 = ((((!((map__48644 == null)))?((((map__48644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48644):map__48644);
var content_area_el = cljs.core.get.call(null,map__48644__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__){
return (function (state_48692){
var state_val_48693 = (state_48692[(1)]);
if((state_val_48693 === (1))){
var inst_48675 = (state_48692[(7)]);
var inst_48675__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48676 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48677 = ["0.0"];
var inst_48678 = cljs.core.PersistentHashMap.fromArrays(inst_48676,inst_48677);
var inst_48679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48675__$1,inst_48678);
var inst_48680 = cljs.core.async.timeout.call(null,(300));
var state_48692__$1 = (function (){var statearr_48694 = state_48692;
(statearr_48694[(8)] = inst_48679);

(statearr_48694[(7)] = inst_48675__$1);

return statearr_48694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48692__$1,(2),inst_48680);
} else {
if((state_val_48693 === (2))){
var inst_48675 = (state_48692[(7)]);
var inst_48682 = (state_48692[(2)]);
var inst_48683 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_48684 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_48685 = cljs.core.PersistentHashMap.fromArrays(inst_48683,inst_48684);
var inst_48686 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48675,inst_48685);
var inst_48687 = cljs.core.async.timeout.call(null,(200));
var state_48692__$1 = (function (){var statearr_48695 = state_48692;
(statearr_48695[(9)] = inst_48682);

(statearr_48695[(10)] = inst_48686);

return statearr_48695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48692__$1,(3),inst_48687);
} else {
if((state_val_48693 === (3))){
var inst_48675 = (state_48692[(7)]);
var inst_48689 = (state_48692[(2)]);
var inst_48690 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48675,"");
var state_48692__$1 = (function (){var statearr_48696 = state_48692;
(statearr_48696[(11)] = inst_48689);

return statearr_48696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48692__$1,inst_48690);
} else {
return null;
}
}
}
});})(c__47332__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__47312__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__47312__auto____0 = (function (){
var statearr_48700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48700[(0)] = figwheel$client$heads_up$clear_$_state_machine__47312__auto__);

(statearr_48700[(1)] = (1));

return statearr_48700;
});
var figwheel$client$heads_up$clear_$_state_machine__47312__auto____1 = (function (state_48692){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_48692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e48701){if((e48701 instanceof Object)){
var ex__47315__auto__ = e48701;
var statearr_48702_48704 = state_48692;
(statearr_48702_48704[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48705 = state_48692;
state_48692 = G__48705;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__47312__auto__ = function(state_48692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__47312__auto____1.call(this,state_48692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__47312__auto____0;
figwheel$client$heads_up$clear_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__47312__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__))
})();
var state__47334__auto__ = (function (){var statearr_48703 = f__47333__auto__.call(null);
(statearr_48703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_48703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__))
);

return c__47332__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__47332__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47332__auto__){
return (function (){
var f__47333__auto__ = (function (){var switch__47311__auto__ = ((function (c__47332__auto__){
return (function (state_48737){
var state_val_48738 = (state_48737[(1)]);
if((state_val_48738 === (1))){
var inst_48727 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_48737__$1 = state_48737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48737__$1,(2),inst_48727);
} else {
if((state_val_48738 === (2))){
var inst_48729 = (state_48737[(2)]);
var inst_48730 = cljs.core.async.timeout.call(null,(400));
var state_48737__$1 = (function (){var statearr_48739 = state_48737;
(statearr_48739[(7)] = inst_48729);

return statearr_48739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48737__$1,(3),inst_48730);
} else {
if((state_val_48738 === (3))){
var inst_48732 = (state_48737[(2)]);
var inst_48733 = figwheel.client.heads_up.clear.call(null);
var state_48737__$1 = (function (){var statearr_48740 = state_48737;
(statearr_48740[(8)] = inst_48732);

return statearr_48740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48737__$1,(4),inst_48733);
} else {
if((state_val_48738 === (4))){
var inst_48735 = (state_48737[(2)]);
var state_48737__$1 = state_48737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48737__$1,inst_48735);
} else {
return null;
}
}
}
}
});})(c__47332__auto__))
;
return ((function (switch__47311__auto__,c__47332__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____0 = (function (){
var statearr_48744 = [null,null,null,null,null,null,null,null,null];
(statearr_48744[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__);

(statearr_48744[(1)] = (1));

return statearr_48744;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____1 = (function (state_48737){
while(true){
var ret_value__47313__auto__ = (function (){try{while(true){
var result__47314__auto__ = switch__47311__auto__.call(null,state_48737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47314__auto__;
}
break;
}
}catch (e48745){if((e48745 instanceof Object)){
var ex__47315__auto__ = e48745;
var statearr_48746_48748 = state_48737;
(statearr_48746_48748[(5)] = ex__47315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48749 = state_48737;
state_48737 = G__48749;
continue;
} else {
return ret_value__47313__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__ = function(state_48737){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____1.call(this,state_48737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__47312__auto__;
})()
;})(switch__47311__auto__,c__47332__auto__))
})();
var state__47334__auto__ = (function (){var statearr_48747 = f__47333__auto__.call(null);
(statearr_48747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47332__auto__);

return statearr_48747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47334__auto__);
});})(c__47332__auto__))
);

return c__47332__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map