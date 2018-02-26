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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__9842){
var map__9846 = p__9842;
var map__9846__$1 = ((((!((map__9846 == null)))?((((map__9846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9846):map__9846);
var args = map__9846__$1;
var on_change = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__9846__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__9848 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__6814__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__9848,external_model_value);
} else {
return G__9848;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__9849,event){
var map__9853 = p__9849;
var map__9853__$1 = ((((!((map__9853 == null)))?((((map__9853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9853):map__9853);
var state = map__9853__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__9853__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__9853__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__9855 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__9855) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__9857,event){
var map__9861 = p__9857;
var map__9861__$1 = ((((!((map__9861 == null)))?((((map__9861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9861):map__9861);
var state = map__9861__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__9861__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__9863 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__9863) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__9865,new_value){
var map__9868 = p__9865;
var map__9868__$1 = ((((!((map__9868 == null)))?((((map__9868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9868):map__9868);
var state = map__9868__$1;
var on_change = cljs.core.get.call(null,map__9868__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__9870,suggestion){
var map__9874 = p__9870;
var map__9874__$1 = ((((!((map__9874 == null)))?((((map__9874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9874):map__9874);
var state = map__9874__$1;
var suggestion_to_string = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__9876 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__9876,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__9876;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__9877,index){
var map__9881 = p__9877;
var map__9881__$1 = ((((!((map__9881 == null)))?((((map__9881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9881):map__9881);
var state = map__9881__$1;
var suggestions = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__9883 = state;
var G__9883__$1 = cljs.core.assoc.call(null,G__9883,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__9883__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__9883__$1,suggestion):G__9883__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__9883__$2,suggestion);
} else {
return G__9883__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__9884,index){
var map__9887 = p__9884;
var map__9887__$1 = ((((!((map__9887 == null)))?((((map__9887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9887):map__9887);
var state = map__9887__$1;
var suggestions = cljs.core.get.call(null,map__9887__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__9889){
var map__9893 = p__9889;
var map__9893__$1 = ((((!((map__9893 == null)))?((((map__9893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9893):map__9893);
var state = map__9893__$1;
var suggestion_active_index = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__9895 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__9895,suggestion_active_index);
} else {
return G__9895;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__9896){
var map__9900 = p__9896;
var map__9900__$1 = ((((!((map__9900 == null)))?((((map__9900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9900):map__9900);
var state = map__9900__$1;
var suggestions = cljs.core.get.call(null,map__9900__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__9900__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__9902 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__9902,re_com.typeahead.wrap.call(null,((function (){var or__6814__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__9902;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__9903){
var map__9907 = p__9903;
var map__9907__$1 = ((((!((map__9907 == null)))?((((map__9907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9907):map__9907);
var state = map__9907__$1;
var suggestions = cljs.core.get.call(null,map__9907__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__9907__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__9909 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__9909,re_com.typeahead.wrap.call(null,((function (){var or__6814__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__9909;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__9911 = state;
var G__9911__$1 = re_com.typeahead.clear_suggestions.call(null,G__9911)
;
var G__9911__$2 = cljs.core.assoc.call(null,G__9911__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__9911__$2,null);
} else {
return G__9911__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__9912){
var map__9916 = p__9912;
var map__9916__$1 = ((((!((map__9916 == null)))?((((map__9916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9916):map__9916);
var state = map__9916__$1;
var input_text = cljs.core.get.call(null,map__9916__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__9916__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__9918 = state;
if(cljs.core.truth_((function (){var and__6802__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__6802__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__6802__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__9918,input_text);
} else {
return G__9918;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__9919_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__9919_SHARP_);
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
var c__9797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9797__auto__){
return (function (){
var f__9798__auto__ = (function (){var switch__9776__auto__ = ((function (c__9797__auto__){
return (function (state_9969){
var state_val_9970 = (state_9969[(1)]);
if((state_val_9970 === (1))){
var state_9969__$1 = state_9969;
var statearr_9971_9986 = state_9969__$1;
(statearr_9971_9986[(2)] = null);

(statearr_9971_9986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9970 === (2))){
var state_9969__$1 = state_9969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9969__$1,(4),c_search);
} else {
if((state_val_9970 === (3))){
var inst_9967 = (state_9969[(2)]);
var state_9969__$1 = state_9969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9969__$1,inst_9967);
} else {
if((state_val_9970 === (4))){
var inst_9955 = (state_9969[(7)]);
var inst_9955__$1 = (state_9969[(2)]);
var inst_9956 = cljs.core.deref.call(null,state_atom);
var inst_9957 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_9956);
var inst_9958 = cljs.core._EQ_.call(null,"",inst_9955__$1);
var state_9969__$1 = (function (){var statearr_9972 = state_9969;
(statearr_9972[(7)] = inst_9955__$1);

(statearr_9972[(8)] = inst_9957);

return statearr_9972;
})();
if(inst_9958){
var statearr_9973_9987 = state_9969__$1;
(statearr_9973_9987[(1)] = (5));

} else {
var statearr_9974_9988 = state_9969__$1;
(statearr_9974_9988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9970 === (5))){
var inst_9960 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_9969__$1 = state_9969;
var statearr_9975_9989 = state_9969__$1;
(statearr_9975_9989[(2)] = inst_9960);

(statearr_9975_9989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9970 === (6))){
var inst_9955 = (state_9969[(7)]);
var inst_9957 = (state_9969[(8)]);
var inst_9962 = re_com.typeahead.search_data_source_BANG_.call(null,inst_9957,state_atom,inst_9955);
var state_9969__$1 = state_9969;
var statearr_9976_9990 = state_9969__$1;
(statearr_9976_9990[(2)] = inst_9962);

(statearr_9976_9990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9970 === (7))){
var inst_9964 = (state_9969[(2)]);
var state_9969__$1 = (function (){var statearr_9977 = state_9969;
(statearr_9977[(9)] = inst_9964);

return statearr_9977;
})();
var statearr_9978_9991 = state_9969__$1;
(statearr_9978_9991[(2)] = null);

(statearr_9978_9991[(1)] = (2));


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
});})(c__9797__auto__))
;
return ((function (switch__9776__auto__,c__9797__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____0 = (function (){
var statearr_9982 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9982[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__);

(statearr_9982[(1)] = (1));

return statearr_9982;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____1 = (function (state_9969){
while(true){
var ret_value__9778__auto__ = (function (){try{while(true){
var result__9779__auto__ = switch__9776__auto__.call(null,state_9969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9779__auto__;
}
break;
}
}catch (e9983){if((e9983 instanceof Object)){
var ex__9780__auto__ = e9983;
var statearr_9984_9992 = state_9969;
(statearr_9984_9992[(5)] = ex__9780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9993 = state_9969;
state_9969 = G__9993;
continue;
} else {
return ret_value__9778__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__ = function(state_9969){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____1.call(this,state_9969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__9777__auto__;
})()
;})(switch__9776__auto__,c__9797__auto__))
})();
var state__9799__auto__ = (function (){var statearr_9985 = f__9798__auto__.call(null);
(statearr_9985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9797__auto__);

return statearr_9985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9799__auto__);
});})(c__9797__auto__))
);

return c__9797__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__9998 = cljs.core.deref.call(null,state_atom);
var map__9998__$1 = ((((!((map__9998 == null)))?((((map__9998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9998):map__9998);
var state = map__9998__$1;
var input_text = cljs.core.get.call(null,map__9998__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__9998__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__9998,map__9998__$1,state,input_text,c_input){
return (function (p1__9994_SHARP_){
var G__10000 = p1__9994_SHARP_;
var G__10000__$1 = cljs.core.assoc.call(null,G__10000,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__10000__$1,new_text);
} else {
return G__10000__$1;
}
});})(map__9998,map__9998__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__10004 = cljs.core._EQ_;
var expr__10005 = event.which;
if(cljs.core.truth_(pred__10004.call(null,goog.events.KeyCodes.UP,expr__10005))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__10004.call(null,goog.events.KeyCodes.DOWN,expr__10005))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__10004.call(null,goog.events.KeyCodes.ENTER,expr__10005))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__10004.call(null,goog.events.KeyCodes.ESC,expr__10005))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__10004.call(null,goog.events.KeyCodes.TAB,expr__10005))){
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
var len__7923__auto___10035 = arguments.length;
var i__7924__auto___10036 = (0);
while(true){
if((i__7924__auto___10036 < len__7923__auto___10035)){
args__7930__auto__.push((arguments[i__7924__auto___10036]));

var G__10037 = (i__7924__auto___10036 + (1));
i__7924__auto___10036 = G__10037;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__10009){
var map__10010 = p__10009;
var map__10010__$1 = ((((!((map__10010 == null)))?((((map__10010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10010):map__10010);
var args = map__10010__$1;
var data_source = cljs.core.get.call(null,map__10010__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__10010__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__10010__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__10010__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));

var map__10012 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__10012__$1 = ((((!((map__10012 == null)))?((((map__10012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10012):map__10012);
var state = map__10012__$1;
var c_search = cljs.core.get.call(null,map__10012__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__10012__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__10038__delegate = function (p__10014){
var map__10015 = p__10014;
var map__10015__$1 = ((((!((map__10015 == null)))?((((map__10015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10015):map__10015);
var args__$1 = map__10015__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"class","class",-2030961996));

var map__10017 = cljs.core.deref.call(null,state_atom);
var map__10017__$1 = ((((!((map__10017 == null)))?((((map__10017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10017):map__10017);
var state__$1 = map__10017__$1;
var suggestions = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__7602__auto__ = ((function (map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__10019(s__10020){
return (new cljs.core.LazySeq(null,((function (map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__10020__$1 = s__10020;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10020__$1);
if(temp__4657__auto__){
var s__10020__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10020__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__10020__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__10022 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__10021 = (0);
while(true){
if((i__10021 < size__7601__auto__)){
var vec__10029 = cljs.core._nth.call(null,c__7600__auto__,i__10021);
var i = cljs.core.nth.call(null,vec__10029,(0),null);
var s = cljs.core.nth.call(null,vec__10029,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__10022,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__10021,selected_QMARK_,vec__10029,i,s,c__7600__auto__,size__7601__auto__,b__10022,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__10021,selected_QMARK_,vec__10029,i,s,c__7600__auto__,size__7601__auto__,b__10022,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__10021,selected_QMARK_,vec__10029,i,s,c__7600__auto__,size__7601__auto__,b__10022,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__10007_SHARP_){
p1__10007_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__10021,selected_QMARK_,vec__10029,i,s,c__7600__auto__,size__7601__auto__,b__10022,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__10039 = (i__10021 + (1));
i__10021 = G__10039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10022),re_com$typeahead$iter__10019.call(null,cljs.core.chunk_rest.call(null,s__10020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10022),null);
}
} else {
var vec__10032 = cljs.core.first.call(null,s__10020__$2);
var i = cljs.core.nth.call(null,vec__10032,(0),null);
var s = cljs.core.nth.call(null,vec__10032,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__10032,i,s,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__10032,i,s,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__10032,i,s,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__10007_SHARP_){
p1__10007_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__10032,i,s,s__10020__$2,temp__4657__auto__,map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__10019.call(null,cljs.core.rest.call(null,s__10020__$2)));
}
} else {
return null;
}
break;
}
});})(map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__10017,map__10017__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10015,map__10015__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__7602__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__10038 = function (var_args){
var p__10014 = null;
if (arguments.length > 0) {
var G__10040__i = 0, G__10040__a = new Array(arguments.length -  0);
while (G__10040__i < G__10040__a.length) {G__10040__a[G__10040__i] = arguments[G__10040__i + 0]; ++G__10040__i;}
  p__10014 = new cljs.core.IndexedSeq(G__10040__a,0);
} 
return G__10038__delegate.call(this,p__10014);};
G__10038.cljs$lang$maxFixedArity = 0;
G__10038.cljs$lang$applyTo = (function (arglist__10041){
var p__10014 = cljs.core.seq(arglist__10041);
return G__10038__delegate(p__10014);
});
G__10038.cljs$core$IFn$_invoke$arity$variadic = G__10038__delegate;
return G__10038;
})()
;
;})(map__10012,map__10012__$1,state,c_search,c_input,state_atom,input_text_model,map__10010,map__10010__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq10008){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10008));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__9797__auto___10208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9797__auto___10208,out){
return (function (){
var f__9798__auto__ = (function (){var switch__9776__auto__ = ((function (c__9797__auto___10208,out){
return (function (state_10175){
var state_val_10176 = (state_10175[(1)]);
if((state_val_10176 === (7))){
var inst_10130 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
var statearr_10177_10209 = state_10175__$1;
(statearr_10177_10209[(2)] = inst_10130);

(statearr_10177_10209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (1))){
var inst_10125 = null;
var state_10175__$1 = (function (){var statearr_10178 = state_10175;
(statearr_10178[(7)] = inst_10125);

return statearr_10178;
})();
var statearr_10179_10210 = state_10175__$1;
(statearr_10179_10210[(2)] = null);

(statearr_10179_10210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (4))){
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10175__$1,(7),in$);
} else {
if((state_val_10176 === (15))){
var inst_10160 = (state_10175[(2)]);
var state_10175__$1 = (function (){var statearr_10180 = state_10175;
(statearr_10180[(8)] = inst_10160);

return statearr_10180;
})();
var statearr_10181_10211 = state_10175__$1;
(statearr_10181_10211[(2)] = null);

(statearr_10181_10211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (13))){
var inst_10148 = (state_10175[(9)]);
var inst_10162 = cljs.core._EQ_.call(null,inst_10148,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_10175__$1 = state_10175;
if(inst_10162){
var statearr_10182_10212 = state_10175__$1;
(statearr_10182_10212[(1)] = (16));

} else {
var statearr_10183_10213 = state_10175__$1;
(statearr_10183_10213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (6))){
var inst_10134 = (state_10175[(10)]);
var inst_10133 = (state_10175[(2)]);
var inst_10134__$1 = cljs.core.async.timeout.call(null,ms);
var inst_10142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10143 = [in$,inst_10134__$1];
var inst_10144 = (new cljs.core.PersistentVector(null,2,(5),inst_10142,inst_10143,null));
var state_10175__$1 = (function (){var statearr_10184 = state_10175;
(statearr_10184[(11)] = inst_10133);

(statearr_10184[(10)] = inst_10134__$1);

return statearr_10184;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10175__$1,(8),inst_10144);
} else {
if((state_val_10176 === (17))){
var state_10175__$1 = state_10175;
var statearr_10185_10214 = state_10175__$1;
(statearr_10185_10214[(2)] = null);

(statearr_10185_10214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (3))){
var inst_10173 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10175__$1,inst_10173);
} else {
if((state_val_10176 === (12))){
var inst_10133 = (state_10175[(11)]);
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10175__$1,(15),out,inst_10133);
} else {
if((state_val_10176 === (2))){
var inst_10125 = (state_10175[(7)]);
var inst_10127 = (inst_10125 == null);
var state_10175__$1 = state_10175;
if(cljs.core.truth_(inst_10127)){
var statearr_10186_10215 = state_10175__$1;
(statearr_10186_10215[(1)] = (4));

} else {
var statearr_10187_10216 = state_10175__$1;
(statearr_10187_10216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (11))){
var inst_10170 = (state_10175[(2)]);
var inst_10125 = inst_10170;
var state_10175__$1 = (function (){var statearr_10188 = state_10175;
(statearr_10188[(7)] = inst_10125);

return statearr_10188;
})();
var statearr_10189_10217 = state_10175__$1;
(statearr_10189_10217[(2)] = null);

(statearr_10189_10217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (9))){
var inst_10146 = (state_10175[(12)]);
var inst_10154 = cljs.core.nth.call(null,inst_10146,(0),null);
var inst_10155 = cljs.core.nth.call(null,inst_10146,(1),null);
var state_10175__$1 = (function (){var statearr_10190 = state_10175;
(statearr_10190[(13)] = inst_10155);

return statearr_10190;
})();
var statearr_10191_10218 = state_10175__$1;
(statearr_10191_10218[(2)] = inst_10154);

(statearr_10191_10218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (5))){
var inst_10125 = (state_10175[(7)]);
var state_10175__$1 = state_10175;
var statearr_10192_10219 = state_10175__$1;
(statearr_10192_10219[(2)] = inst_10125);

(statearr_10192_10219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (14))){
var inst_10168 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
var statearr_10193_10220 = state_10175__$1;
(statearr_10193_10220[(2)] = inst_10168);

(statearr_10193_10220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (16))){
var inst_10147 = (state_10175[(14)]);
var state_10175__$1 = state_10175;
var statearr_10194_10221 = state_10175__$1;
(statearr_10194_10221[(2)] = inst_10147);

(statearr_10194_10221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (10))){
var inst_10148 = (state_10175[(9)]);
var inst_10134 = (state_10175[(10)]);
var inst_10157 = cljs.core._EQ_.call(null,inst_10148,inst_10134);
var state_10175__$1 = state_10175;
if(inst_10157){
var statearr_10195_10222 = state_10175__$1;
(statearr_10195_10222[(1)] = (12));

} else {
var statearr_10196_10223 = state_10175__$1;
(statearr_10196_10223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (18))){
var inst_10166 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
var statearr_10197_10224 = state_10175__$1;
(statearr_10197_10224[(2)] = inst_10166);

(statearr_10197_10224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (8))){
var inst_10148 = (state_10175[(9)]);
var inst_10146 = (state_10175[(12)]);
var inst_10146__$1 = (state_10175[(2)]);
var inst_10147 = cljs.core.nth.call(null,inst_10146__$1,(0),null);
var inst_10148__$1 = cljs.core.nth.call(null,inst_10146__$1,(1),null);
var inst_10149 = cljs.core._EQ_.call(null,inst_10148__$1,in$);
var state_10175__$1 = (function (){var statearr_10198 = state_10175;
(statearr_10198[(9)] = inst_10148__$1);

(statearr_10198[(12)] = inst_10146__$1);

(statearr_10198[(14)] = inst_10147);

return statearr_10198;
})();
if(inst_10149){
var statearr_10199_10225 = state_10175__$1;
(statearr_10199_10225[(1)] = (9));

} else {
var statearr_10200_10226 = state_10175__$1;
(statearr_10200_10226[(1)] = (10));

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
});})(c__9797__auto___10208,out))
;
return ((function (switch__9776__auto__,c__9797__auto___10208,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__9777__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__9777__auto____0 = (function (){
var statearr_10204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10204[(0)] = re_com$typeahead$debounce_$_state_machine__9777__auto__);

(statearr_10204[(1)] = (1));

return statearr_10204;
});
var re_com$typeahead$debounce_$_state_machine__9777__auto____1 = (function (state_10175){
while(true){
var ret_value__9778__auto__ = (function (){try{while(true){
var result__9779__auto__ = switch__9776__auto__.call(null,state_10175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9779__auto__;
}
break;
}
}catch (e10205){if((e10205 instanceof Object)){
var ex__9780__auto__ = e10205;
var statearr_10206_10227 = state_10175;
(statearr_10206_10227[(5)] = ex__9780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10228 = state_10175;
state_10175 = G__10228;
continue;
} else {
return ret_value__9778__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__9777__auto__ = function(state_10175){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__9777__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__9777__auto____1.call(this,state_10175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__9777__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__9777__auto____0;
re_com$typeahead$debounce_$_state_machine__9777__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__9777__auto____1;
return re_com$typeahead$debounce_$_state_machine__9777__auto__;
})()
;})(switch__9776__auto__,c__9797__auto___10208,out))
})();
var state__9799__auto__ = (function (){var statearr_10207 = f__9798__auto__.call(null);
(statearr_10207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9797__auto___10208);

return statearr_10207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9799__auto__);
});})(c__9797__auto___10208,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map