// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_com.selection_list');
goog.require('cljs.core');
goog.require('re_com.text');
goog.require('re_com.misc');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.util');
re_com.selection_list.label_style = (function re_com$selection_list$label_style(var_args){
var args17256 = [];
var len__7923__auto___17259 = arguments.length;
var i__7924__auto___17260 = (0);
while(true){
if((i__7924__auto___17260 < len__7923__auto___17259)){
args17256.push((arguments[i__7924__auto___17260]));

var G__17261 = (i__7924__auto___17260 + (1));
i__7924__auto___17260 = G__17261;
continue;
} else {
}
break;
}

var G__17258 = args17256.length;
switch (G__17258) {
case 2:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17256.length)].join('')));

}
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.selection_list.label_style.call(null,selected_QMARK_,as_exclusions_QMARK_,null);
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1px"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__6802__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__6802__auto__)){
return as_exclusions_QMARK_;
} else {
return and__6802__auto__;
}
})())?cljs.core.merge.call(null,base_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__6802__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__6802__auto__)){
return selected_color;
} else {
return and__6802__auto__;
}
})())?cljs.core.merge.call(null,base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),selected_color], null)):base_style__$1);
return base_style__$2;
});

re_com.selection_list.label_style.cljs$lang$maxFixedArity = 3;

re_com.selection_list.check_clicked = (function re_com$selection_list$check_clicked(selections,item_id,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count.call(null,selections);
var only_item = ((cljs.core._EQ_.call(null,(1),num_selected))?cljs.core.first.call(null,selections):null);
if(cljs.core.truth_((function (){var and__6802__auto__ = required_QMARK_;
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core._EQ_.call(null,only_item,item_id);
} else {
return and__6802__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.call(null,selections,item_id);
} else {
return cljs.core.disj.call(null,selections,item_id);
}
}
});
re_com.selection_list.as_checked = (function re_com$selection_list$as_checked(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = id_fn.call(null,item);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item compact",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
on_change.call(null,re_com.selection_list.check_clicked.call(null,selections,item_id,cljs.core.not.call(null,selections.call(null,item_id)),required_QMARK_));
}

return null;
});})(item_id))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.checkbox,new cljs.core.Keyword(null,"model","model",331153215),selections.call(null,item_id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.call(null,selections.call(null,item_id),as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,item)], null)], null);
});
re_com.selection_list.radio_clicked = (function re_com$selection_list$radio_clicked(selections,item_id,required_QMARK_){
if(cljs.core.truth_((function (){var and__6802__auto__ = required_QMARK_;
if(cljs.core.truth_(and__6802__auto__)){
return selections.call(null,item_id);
} else {
return and__6802__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(selections.call(null,item_id))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([item_id], true);
}
}
});
re_com.selection_list.as_radio = (function re_com$selection_list$as_radio(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = id_fn.call(null,item);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item compact",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
on_change.call(null,re_com.selection_list.radio_clicked.call(null,selections,item_id,required_QMARK_));
}

return null;
});})(item_id))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.radio_button,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.first.call(null,selections),new cljs.core.Keyword(null,"value","value",305978217),item_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.call(null,selections.call(null,item_id),as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,item)], null)], null);
});
re_com.selection_list.list_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
re_com.selection_list.spacing_bordered = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null);
re_com.selection_list.spacing_unbordered = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null);
re_com.selection_list.selection_list_args_desc = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of choices | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids within :choices | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.set_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids -> nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a callback which will be passed set of the ids (as defined by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),") of the selected items"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null)], null);
re_com.selection_list.list_container = (function re_com$selection_list$list_container(p__17266){
var map__17269 = p__17266;
var map__17269__$1 = ((((!((map__17269 == null)))?((((map__17269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17269):map__17269);
var args = map__17269__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var item_renderer = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410));
var model = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_fn = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var required_QMARK_ = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var as_exclusions_QMARK_ = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285));
var hide_border_QMARK_ = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var choices = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var multi_select_QMARK_ = cljs.core.get.call(null,map__17269__$1,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151));

var selected = (cljs.core.truth_(multi_select_QMARK_)?model:cljs.core.set.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,model)],null))));
var items = cljs.core.map.call(null,(cljs.core.truth_(item_renderer)?((function (selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_){
return (function (p1__17263_SHARP_){
return item_renderer.call(null,p1__17263_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_))
:(cljs.core.truth_(multi_select_QMARK_)?((function (selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_){
return (function (p1__17264_SHARP_){
return re_com.selection_list.as_checked.call(null,p1__17264_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_))
:((function (selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_){
return (function (p1__17265_SHARP_){
return re_com.selection_list.as_radio.call(null,p1__17265_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__17269,map__17269__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,id_fn,multi_select_QMARK_))
)),choices);
var bounds = cljs.core.select_keys.call(null,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"max-height","max-height",-612563804)], null));
var spacing = (cljs.core.truth_(hide_border_QMARK_)?re_com.selection_list.spacing_unbordered:re_com.selection_list.spacing_bordered);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group noselect",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.selection_list.list_style,bounds,spacing)], null)], null),items)], null);
});
/**
 * Augment passed attributes with defaults and deref any atoms
 */
re_com.selection_list.configure = (function re_com$selection_list$configure(attributes){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),false,new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),false,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804)], null),re_com.util.fmap.call(null,re_com.util.deref_or_value,attributes));
});
/**
 * Produce a list box with items arranged vertically
 */
re_com.selection_list.selection_list = (function re_com$selection_list$selection_list(var_args){
var args__7930__auto__ = [];
var len__7923__auto___17278 = arguments.length;
var i__7924__auto___17279 = (0);
while(true){
if((i__7924__auto___17279 < len__7923__auto___17278)){
args__7930__auto__.push((arguments[i__7924__auto___17279]));

var G__17280 = (i__7924__auto___17279 + (1));
i__7924__auto___17279 = G__17280;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__17272){
var map__17273 = p__17272;
var map__17273__$1 = ((((!((map__17273 == null)))?((((map__17273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17273):map__17273);
var args = map__17273__$1;

return ((function (map__17273,map__17273__$1,args){
return (function() { 
var G__17281__delegate = function (p__17275){
var map__17276 = p__17275;
var map__17276__$1 = ((((!((map__17276 == null)))?((((map__17276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17276):map__17276);
var args__$1 = map__17276__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.list_container,re_com.selection_list.configure.call(null,args__$1)], null);
};
var G__17281 = function (var_args){
var p__17275 = null;
if (arguments.length > 0) {
var G__17282__i = 0, G__17282__a = new Array(arguments.length -  0);
while (G__17282__i < G__17282__a.length) {G__17282__a[G__17282__i] = arguments[G__17282__i + 0]; ++G__17282__i;}
  p__17275 = new cljs.core.IndexedSeq(G__17282__a,0);
} 
return G__17281__delegate.call(this,p__17275);};
G__17281.cljs$lang$maxFixedArity = 0;
G__17281.cljs$lang$applyTo = (function (arglist__17283){
var p__17275 = cljs.core.seq(arglist__17283);
return G__17281__delegate(p__17275);
});
G__17281.cljs$core$IFn$_invoke$arity$variadic = G__17281__delegate;
return G__17281;
})()
;
;})(map__17273,map__17273__$1,args))
});

re_com.selection_list.selection_list.cljs$lang$maxFixedArity = (0);

re_com.selection_list.selection_list.cljs$lang$applyTo = (function (seq17271){
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17271));
});

