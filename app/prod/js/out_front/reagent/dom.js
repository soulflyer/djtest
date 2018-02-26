// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6814__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12598 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12598){
return (function (){
var _STAR_always_update_STAR_12599 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12599;
}});})(_STAR_always_update_STAR_12598))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12598;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12600 = [];
var len__7923__auto___12603 = arguments.length;
var i__7924__auto___12604 = (0);
while(true){
if((i__7924__auto___12604 < len__7923__auto___12603)){
args12600.push((arguments[i__7924__auto___12604]));

var G__12605 = (i__7924__auto___12604 + (1));
i__7924__auto___12604 = G__12605;
continue;
} else {
}
break;
}

var G__12602 = args12600.length;
switch (G__12602) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12600.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__12611_12615 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12612_12616 = null;
var count__12613_12617 = (0);
var i__12614_12618 = (0);
while(true){
if((i__12614_12618 < count__12613_12617)){
var v_12619 = cljs.core._nth.call(null,chunk__12612_12616,i__12614_12618);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12619);

var G__12620 = seq__12611_12615;
var G__12621 = chunk__12612_12616;
var G__12622 = count__12613_12617;
var G__12623 = (i__12614_12618 + (1));
seq__12611_12615 = G__12620;
chunk__12612_12616 = G__12621;
count__12613_12617 = G__12622;
i__12614_12618 = G__12623;
continue;
} else {
var temp__4657__auto___12624 = cljs.core.seq.call(null,seq__12611_12615);
if(temp__4657__auto___12624){
var seq__12611_12625__$1 = temp__4657__auto___12624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12611_12625__$1)){
var c__7633__auto___12626 = cljs.core.chunk_first.call(null,seq__12611_12625__$1);
var G__12627 = cljs.core.chunk_rest.call(null,seq__12611_12625__$1);
var G__12628 = c__7633__auto___12626;
var G__12629 = cljs.core.count.call(null,c__7633__auto___12626);
var G__12630 = (0);
seq__12611_12615 = G__12627;
chunk__12612_12616 = G__12628;
count__12613_12617 = G__12629;
i__12614_12618 = G__12630;
continue;
} else {
var v_12631 = cljs.core.first.call(null,seq__12611_12625__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12631);

var G__12632 = cljs.core.next.call(null,seq__12611_12625__$1);
var G__12633 = null;
var G__12634 = (0);
var G__12635 = (0);
seq__12611_12615 = G__12632;
chunk__12612_12616 = G__12633;
count__12613_12617 = G__12634;
i__12614_12618 = G__12635;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
