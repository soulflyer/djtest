// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__16068){
var map__16072 = p__16068;
var map__16072__$1 = ((((!((map__16072 == null)))?((((map__16072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16072):map__16072);
var args = map__16072__$1;
var on_change = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__16072__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__16074 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__6814__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__16074,external_model_value);
} else {
return G__16074;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__16075,event){
var map__16079 = p__16075;
var map__16079__$1 = ((((!((map__16079 == null)))?((((map__16079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16079):map__16079);
var state = map__16079__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__16081 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__16081) {
case "input-text-blurred":
var and__6802__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__6802__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__6814__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__16083,event){
var map__16087 = p__16083;
var map__16087__$1 = ((((!((map__16087 == null)))?((((map__16087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16087):map__16087);
var state = map__16087__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16087__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__16089 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__16089) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__16091,new_value){
var map__16094 = p__16091;
var map__16094__$1 = ((((!((map__16094 == null)))?((((map__16094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16094):map__16094);
var state = map__16094__$1;
var on_change = cljs.core.get.call(null,map__16094__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__16096,suggestion){
var map__16100 = p__16096;
var map__16100__$1 = ((((!((map__16100 == null)))?((((map__16100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16100):map__16100);
var state = map__16100__$1;
var suggestion_to_string = cljs.core.get.call(null,map__16100__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__16102 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__16102,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__16102;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__16103,index){
var map__16107 = p__16103;
var map__16107__$1 = ((((!((map__16107 == null)))?((((map__16107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16107):map__16107);
var state = map__16107__$1;
var suggestions = cljs.core.get.call(null,map__16107__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__16109 = state;
var G__16109__$1 = cljs.core.assoc.call(null,G__16109,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__16109__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__16109__$1,suggestion):G__16109__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__16109__$2,suggestion);
} else {
return G__16109__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__16110,index){
var map__16113 = p__16110;
var map__16113__$1 = ((((!((map__16113 == null)))?((((map__16113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16113):map__16113);
var state = map__16113__$1;
var suggestions = cljs.core.get.call(null,map__16113__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__16115){
var map__16119 = p__16115;
var map__16119__$1 = ((((!((map__16119 == null)))?((((map__16119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16119):map__16119);
var state = map__16119__$1;
var suggestion_active_index = cljs.core.get.call(null,map__16119__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16121 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__16121,suggestion_active_index);
} else {
return G__16121;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__16122){
var map__16126 = p__16122;
var map__16126__$1 = ((((!((map__16126 == null)))?((((map__16126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16126):map__16126);
var state = map__16126__$1;
var suggestions = cljs.core.get.call(null,map__16126__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16126__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16128 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16128,re_com.typeahead.wrap.call(null,((function (){var or__6814__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16128;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__16129){
var map__16133 = p__16129;
var map__16133__$1 = ((((!((map__16133 == null)))?((((map__16133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16133):map__16133);
var state = map__16133__$1;
var suggestions = cljs.core.get.call(null,map__16133__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16133__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16135 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16135,re_com.typeahead.wrap.call(null,((function (){var or__6814__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16135;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__16137 = state;
var G__16137__$1 = re_com.typeahead.clear_suggestions.call(null,G__16137)
;
var G__16137__$2 = cljs.core.assoc.call(null,G__16137__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16137__$2,null);
} else {
return G__16137__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__16138){
var map__16142 = p__16138;
var map__16142__$1 = ((((!((map__16142 == null)))?((((map__16142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16142):map__16142);
var state = map__16142__$1;
var input_text = cljs.core.get.call(null,map__16142__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__16142__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__16144 = state;
if(cljs.core.truth_((function (){var and__6802__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__6802__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__6802__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__16144,input_text);
} else {
return G__16144;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__16145_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__16145_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__9866__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto__){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto__){
return (function (state_16195){
var state_val_16196 = (state_16195[(1)]);
if((state_val_16196 === (1))){
var state_16195__$1 = state_16195;
var statearr_16197_16212 = state_16195__$1;
(statearr_16197_16212[(2)] = null);

(statearr_16197_16212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16196 === (2))){
var state_16195__$1 = state_16195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16195__$1,(4),c_search);
} else {
if((state_val_16196 === (3))){
var inst_16193 = (state_16195[(2)]);
var state_16195__$1 = state_16195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16195__$1,inst_16193);
} else {
if((state_val_16196 === (4))){
var inst_16181 = (state_16195[(7)]);
var inst_16181__$1 = (state_16195[(2)]);
var inst_16182 = cljs.core.deref.call(null,state_atom);
var inst_16183 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_16182);
var inst_16184 = cljs.core._EQ_.call(null,"",inst_16181__$1);
var state_16195__$1 = (function (){var statearr_16198 = state_16195;
(statearr_16198[(8)] = inst_16183);

(statearr_16198[(7)] = inst_16181__$1);

return statearr_16198;
})();
if(inst_16184){
var statearr_16199_16213 = state_16195__$1;
(statearr_16199_16213[(1)] = (5));

} else {
var statearr_16200_16214 = state_16195__$1;
(statearr_16200_16214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16196 === (5))){
var inst_16186 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_16195__$1 = state_16195;
var statearr_16201_16215 = state_16195__$1;
(statearr_16201_16215[(2)] = inst_16186);

(statearr_16201_16215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16196 === (6))){
var inst_16183 = (state_16195[(8)]);
var inst_16181 = (state_16195[(7)]);
var inst_16188 = re_com.typeahead.search_data_source_BANG_.call(null,inst_16183,state_atom,inst_16181);
var state_16195__$1 = state_16195;
var statearr_16202_16216 = state_16195__$1;
(statearr_16202_16216[(2)] = inst_16188);

(statearr_16202_16216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16196 === (7))){
var inst_16190 = (state_16195[(2)]);
var state_16195__$1 = (function (){var statearr_16203 = state_16195;
(statearr_16203[(9)] = inst_16190);

return statearr_16203;
})();
var statearr_16204_16217 = state_16195__$1;
(statearr_16204_16217[(2)] = null);

(statearr_16204_16217[(1)] = (2));


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
});})(c__9866__auto__))
;
return ((function (switch__9845__auto__,c__9866__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____1 = (function (state_16195){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_16195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e16209){if((e16209 instanceof Object)){
var ex__9849__auto__ = e16209;
var statearr_16210_16218 = state_16195;
(statearr_16210_16218[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16219 = state_16195;
state_16195 = G__16219;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__ = function(state_16195){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____1.call(this,state_16195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto__))
})();
var state__9868__auto__ = (function (){var statearr_16211 = f__9867__auto__.call(null);
(statearr_16211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto__);

return statearr_16211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto__))
);

return c__9866__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__16224 = cljs.core.deref.call(null,state_atom);
var map__16224__$1 = ((((!((map__16224 == null)))?((((map__16224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16224):map__16224);
var state = map__16224__$1;
var input_text = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__16224,map__16224__$1,state,input_text,c_input){
return (function (p1__16220_SHARP_){
var G__16226 = p1__16220_SHARP_;
var G__16226__$1 = cljs.core.assoc.call(null,G__16226,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16226__$1,new_text);
} else {
return G__16226__$1;
}
});})(map__16224,map__16224__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__16230 = cljs.core._EQ_;
var expr__16231 = event.which;
if(cljs.core.truth_(pred__16230.call(null,goog.events.KeyCodes.UP,expr__16231))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__16230.call(null,goog.events.KeyCodes.DOWN,expr__16231))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__16230.call(null,goog.events.KeyCodes.ENTER,expr__16231))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__16230.call(null,goog.events.KeyCodes.ESC,expr__16231))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__16230.call(null,goog.events.KeyCodes.TAB,expr__16231))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__7930__auto__ = [];
var len__7923__auto___16261 = arguments.length;
var i__7924__auto___16262 = (0);
while(true){
if((i__7924__auto___16262 < len__7923__auto___16261)){
args__7930__auto__.push((arguments[i__7924__auto___16262]));

var G__16263 = (i__7924__auto___16262 + (1));
i__7924__auto___16262 = G__16263;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__16235){
var map__16236 = p__16235;
var map__16236__$1 = ((((!((map__16236 == null)))?((((map__16236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16236):map__16236);
var args = map__16236__$1;
var data_source = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));

var map__16238 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__16238__$1 = ((((!((map__16238 == null)))?((((map__16238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16238):map__16238);
var state = map__16238__$1;
var c_search = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__16264__delegate = function (p__16240){
var map__16241 = p__16240;
var map__16241__$1 = ((((!((map__16241 == null)))?((((map__16241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16241):map__16241);
var args__$1 = map__16241__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"class","class",-2030961996));

var map__16243 = cljs.core.deref.call(null,state_atom);
var map__16243__$1 = ((((!((map__16243 == null)))?((((map__16243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16243):map__16243);
var state__$1 = map__16243__$1;
var suggestions = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__6814__auto__ = width;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__6814__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__7602__auto__ = ((function (map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__16245(s__16246){
return (new cljs.core.LazySeq(null,((function (map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__16246__$1 = s__16246;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16246__$1);
if(temp__4657__auto__){
var s__16246__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16246__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__16246__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__16248 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__16247 = (0);
while(true){
if((i__16247 < size__7601__auto__)){
var vec__16255 = cljs.core._nth.call(null,c__7600__auto__,i__16247);
var i = cljs.core.nth.call(null,vec__16255,(0),null);
var s = cljs.core.nth.call(null,vec__16255,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__16248,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__16247,selected_QMARK_,vec__16255,i,s,c__7600__auto__,size__7601__auto__,b__16248,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__16247,selected_QMARK_,vec__16255,i,s,c__7600__auto__,size__7601__auto__,b__16248,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__16247,selected_QMARK_,vec__16255,i,s,c__7600__auto__,size__7601__auto__,b__16248,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__16233_SHARP_){
p1__16233_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__16247,selected_QMARK_,vec__16255,i,s,c__7600__auto__,size__7601__auto__,b__16248,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__16265 = (i__16247 + (1));
i__16247 = G__16265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16248),re_com$typeahead$iter__16245.call(null,cljs.core.chunk_rest.call(null,s__16246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16248),null);
}
} else {
var vec__16258 = cljs.core.first.call(null,s__16246__$2);
var i = cljs.core.nth.call(null,vec__16258,(0),null);
var s = cljs.core.nth.call(null,vec__16258,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__16258,i,s,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__16258,i,s,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__16258,i,s,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__16233_SHARP_){
p1__16233_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__16258,i,s,s__16246__$2,temp__4657__auto__,map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__16245.call(null,cljs.core.rest.call(null,s__16246__$2)));
}
} else {
return null;
}
break;
}
});})(map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__16243,map__16243__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16241,map__16241__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__7602__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__16264 = function (var_args){
var p__16240 = null;
if (arguments.length > 0) {
var G__16266__i = 0, G__16266__a = new Array(arguments.length -  0);
while (G__16266__i < G__16266__a.length) {G__16266__a[G__16266__i] = arguments[G__16266__i + 0]; ++G__16266__i;}
  p__16240 = new cljs.core.IndexedSeq(G__16266__a,0);
} 
return G__16264__delegate.call(this,p__16240);};
G__16264.cljs$lang$maxFixedArity = 0;
G__16264.cljs$lang$applyTo = (function (arglist__16267){
var p__16240 = cljs.core.seq(arglist__16267);
return G__16264__delegate(p__16240);
});
G__16264.cljs$core$IFn$_invoke$arity$variadic = G__16264__delegate;
return G__16264;
})()
;
;})(map__16238,map__16238__$1,state,c_search,c_input,state_atom,input_text_model,map__16236,map__16236__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq16234){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16234));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__9866__auto___16434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9866__auto___16434,out){
return (function (){
var f__9867__auto__ = (function (){var switch__9845__auto__ = ((function (c__9866__auto___16434,out){
return (function (state_16401){
var state_val_16402 = (state_16401[(1)]);
if((state_val_16402 === (7))){
var inst_16356 = (state_16401[(2)]);
var state_16401__$1 = state_16401;
var statearr_16403_16435 = state_16401__$1;
(statearr_16403_16435[(2)] = inst_16356);

(statearr_16403_16435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (1))){
var inst_16351 = null;
var state_16401__$1 = (function (){var statearr_16404 = state_16401;
(statearr_16404[(7)] = inst_16351);

return statearr_16404;
})();
var statearr_16405_16436 = state_16401__$1;
(statearr_16405_16436[(2)] = null);

(statearr_16405_16436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (4))){
var state_16401__$1 = state_16401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16401__$1,(7),in$);
} else {
if((state_val_16402 === (15))){
var inst_16386 = (state_16401[(2)]);
var state_16401__$1 = (function (){var statearr_16406 = state_16401;
(statearr_16406[(8)] = inst_16386);

return statearr_16406;
})();
var statearr_16407_16437 = state_16401__$1;
(statearr_16407_16437[(2)] = null);

(statearr_16407_16437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (13))){
var inst_16374 = (state_16401[(9)]);
var inst_16388 = cljs.core._EQ_.call(null,inst_16374,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_16401__$1 = state_16401;
if(inst_16388){
var statearr_16408_16438 = state_16401__$1;
(statearr_16408_16438[(1)] = (16));

} else {
var statearr_16409_16439 = state_16401__$1;
(statearr_16409_16439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (6))){
var inst_16360 = (state_16401[(10)]);
var inst_16359 = (state_16401[(2)]);
var inst_16360__$1 = cljs.core.async.timeout.call(null,ms);
var inst_16368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16369 = [in$,inst_16360__$1];
var inst_16370 = (new cljs.core.PersistentVector(null,2,(5),inst_16368,inst_16369,null));
var state_16401__$1 = (function (){var statearr_16410 = state_16401;
(statearr_16410[(11)] = inst_16359);

(statearr_16410[(10)] = inst_16360__$1);

return statearr_16410;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16401__$1,(8),inst_16370);
} else {
if((state_val_16402 === (17))){
var state_16401__$1 = state_16401;
var statearr_16411_16440 = state_16401__$1;
(statearr_16411_16440[(2)] = null);

(statearr_16411_16440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (3))){
var inst_16399 = (state_16401[(2)]);
var state_16401__$1 = state_16401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16401__$1,inst_16399);
} else {
if((state_val_16402 === (12))){
var inst_16359 = (state_16401[(11)]);
var state_16401__$1 = state_16401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16401__$1,(15),out,inst_16359);
} else {
if((state_val_16402 === (2))){
var inst_16351 = (state_16401[(7)]);
var inst_16353 = (inst_16351 == null);
var state_16401__$1 = state_16401;
if(cljs.core.truth_(inst_16353)){
var statearr_16412_16441 = state_16401__$1;
(statearr_16412_16441[(1)] = (4));

} else {
var statearr_16413_16442 = state_16401__$1;
(statearr_16413_16442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (11))){
var inst_16396 = (state_16401[(2)]);
var inst_16351 = inst_16396;
var state_16401__$1 = (function (){var statearr_16414 = state_16401;
(statearr_16414[(7)] = inst_16351);

return statearr_16414;
})();
var statearr_16415_16443 = state_16401__$1;
(statearr_16415_16443[(2)] = null);

(statearr_16415_16443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (9))){
var inst_16372 = (state_16401[(12)]);
var inst_16380 = cljs.core.nth.call(null,inst_16372,(0),null);
var inst_16381 = cljs.core.nth.call(null,inst_16372,(1),null);
var state_16401__$1 = (function (){var statearr_16416 = state_16401;
(statearr_16416[(13)] = inst_16381);

return statearr_16416;
})();
var statearr_16417_16444 = state_16401__$1;
(statearr_16417_16444[(2)] = inst_16380);

(statearr_16417_16444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (5))){
var inst_16351 = (state_16401[(7)]);
var state_16401__$1 = state_16401;
var statearr_16418_16445 = state_16401__$1;
(statearr_16418_16445[(2)] = inst_16351);

(statearr_16418_16445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (14))){
var inst_16394 = (state_16401[(2)]);
var state_16401__$1 = state_16401;
var statearr_16419_16446 = state_16401__$1;
(statearr_16419_16446[(2)] = inst_16394);

(statearr_16419_16446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (16))){
var inst_16373 = (state_16401[(14)]);
var state_16401__$1 = state_16401;
var statearr_16420_16447 = state_16401__$1;
(statearr_16420_16447[(2)] = inst_16373);

(statearr_16420_16447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (10))){
var inst_16360 = (state_16401[(10)]);
var inst_16374 = (state_16401[(9)]);
var inst_16383 = cljs.core._EQ_.call(null,inst_16374,inst_16360);
var state_16401__$1 = state_16401;
if(inst_16383){
var statearr_16421_16448 = state_16401__$1;
(statearr_16421_16448[(1)] = (12));

} else {
var statearr_16422_16449 = state_16401__$1;
(statearr_16422_16449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (18))){
var inst_16392 = (state_16401[(2)]);
var state_16401__$1 = state_16401;
var statearr_16423_16450 = state_16401__$1;
(statearr_16423_16450[(2)] = inst_16392);

(statearr_16423_16450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16402 === (8))){
var inst_16372 = (state_16401[(12)]);
var inst_16374 = (state_16401[(9)]);
var inst_16372__$1 = (state_16401[(2)]);
var inst_16373 = cljs.core.nth.call(null,inst_16372__$1,(0),null);
var inst_16374__$1 = cljs.core.nth.call(null,inst_16372__$1,(1),null);
var inst_16375 = cljs.core._EQ_.call(null,inst_16374__$1,in$);
var state_16401__$1 = (function (){var statearr_16424 = state_16401;
(statearr_16424[(12)] = inst_16372__$1);

(statearr_16424[(9)] = inst_16374__$1);

(statearr_16424[(14)] = inst_16373);

return statearr_16424;
})();
if(inst_16375){
var statearr_16425_16451 = state_16401__$1;
(statearr_16425_16451[(1)] = (9));

} else {
var statearr_16426_16452 = state_16401__$1;
(statearr_16426_16452[(1)] = (10));

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
}
});})(c__9866__auto___16434,out))
;
return ((function (switch__9845__auto__,c__9866__auto___16434,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__9846__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__9846__auto____0 = (function (){
var statearr_16430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16430[(0)] = re_com$typeahead$debounce_$_state_machine__9846__auto__);

(statearr_16430[(1)] = (1));

return statearr_16430;
});
var re_com$typeahead$debounce_$_state_machine__9846__auto____1 = (function (state_16401){
while(true){
var ret_value__9847__auto__ = (function (){try{while(true){
var result__9848__auto__ = switch__9845__auto__.call(null,state_16401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9848__auto__;
}
break;
}
}catch (e16431){if((e16431 instanceof Object)){
var ex__9849__auto__ = e16431;
var statearr_16432_16453 = state_16401;
(statearr_16432_16453[(5)] = ex__9849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16454 = state_16401;
state_16401 = G__16454;
continue;
} else {
return ret_value__9847__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__9846__auto__ = function(state_16401){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__9846__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__9846__auto____1.call(this,state_16401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__9846__auto____0;
re_com$typeahead$debounce_$_state_machine__9846__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__9846__auto____1;
return re_com$typeahead$debounce_$_state_machine__9846__auto__;
})()
;})(switch__9845__auto__,c__9866__auto___16434,out))
})();
var state__9868__auto__ = (function (){var statearr_16433 = f__9867__auto__.call(null);
(statearr_16433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9866__auto___16434);

return statearr_16433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9868__auto__);
});})(c__9866__auto___16434,out))
);


return out;
});
