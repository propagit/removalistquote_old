var OxO9fce=["inp_name","inp_access","inp_id","inp_index","inp_size","inp_Multiple","inp_Disabled","inp_item_text","inp_item_value","btnInsertItem","btnUpdateItem","btnDeleteItem","btnMoveUpItem","btnMoveDownItem","list_options","list_options2","inp_item_forecolor","inp_item_forecolor_Preview","inp_item_backcolor_Preview","value","text","color","style","backgroundColor","selectedIndex","options","Please select an item first","length","ondblclick","onclick","OPTION","document","id","cssText","Name","name","size","disabled","checked","multiple","tabIndex","","accessKey"];var inp_name=Window_GetElement(window,OxO9fce[0x0],true);var inp_access=Window_GetElement(window,OxO9fce[0x1],true);var inp_id=Window_GetElement(window,OxO9fce[0x2],true);var inp_index=Window_GetElement(window,OxO9fce[0x3],true);var inp_size=Window_GetElement(window,OxO9fce[0x4],true);var inp_Multiple=Window_GetElement(window,OxO9fce[0x5],true);var inp_Disabled=Window_GetElement(window,OxO9fce[0x6],true);var inp_item_text=Window_GetElement(window,OxO9fce[0x7],true);var inp_item_value=Window_GetElement(window,OxO9fce[0x8],true);var btnInsertItem=Window_GetElement(window,OxO9fce[0x9],true);var btnUpdateItem=Window_GetElement(window,OxO9fce[0xa],true);var btnDeleteItem=Window_GetElement(window,OxO9fce[0xb],true);var btnMoveUpItem=Window_GetElement(window,OxO9fce[0xc],true);var btnMoveDownItem=Window_GetElement(window,OxO9fce[0xd],true);var list_options=Window_GetElement(window,OxO9fce[0xe],true);var list_options2=Window_GetElement(window,OxO9fce[0xf],true);var inp_item_forecolor=Window_GetElement(window,OxO9fce[0x10],true);var inp_item_forecolor=Window_GetElement(window,OxO9fce[0x10],true);var inp_item_forecolor_Preview=Window_GetElement(window,OxO9fce[0x11],true);var inp_item_backcolor_Preview=Window_GetElement(window,OxO9fce[0x12],true); function SetOption(Ox49b){ Ox49b[OxO9fce[0x14]]=inp_item_text[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x13]]=inp_item_value[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x16]][OxO9fce[0x15]]=inp_item_forecolor[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x16]][OxO9fce[0x17]]=inp_item_backcolor[OxO9fce[0x13]] ;}  ; function SetOption2(Ox49b){ Ox49b[OxO9fce[0x14]]=inp_item_value[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x13]]=inp_item_text[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x16]][OxO9fce[0x15]]=inp_item_forecolor[OxO9fce[0x13]] ; Ox49b[OxO9fce[0x16]][OxO9fce[0x17]]=inp_item_backcolor[OxO9fce[0x13]] ;}  ; function Select(Ox49b){var Ox49e=Ox49b[OxO9fce[0x18]]; list_options[OxO9fce[0x18]]=Ox49e ; list_options2[OxO9fce[0x18]]=Ox49e ; inp_item_text[OxO9fce[0x13]]=list_options2[OxO9fce[0x13]] ; inp_item_value[OxO9fce[0x13]]=list_options[OxO9fce[0x13]] ;}  ; function Insert(){var Ox49b= new Option(); SetOption(Ox49b) ; list_options[OxO9fce[0x19]].add(Ox49b) ;var Ox4a0= new Option(); SetOption2(Ox4a0) ; list_options2[OxO9fce[0x19]].add(Ox4a0) ; FireUIChanged() ;}  ; function Update(){if(list_options[OxO9fce[0x18]]==-0x1){ alert(OxO9fce[0x1a]) ;return ;} ;var Ox49b=list_options.options(list_options.selectedIndex); SetOption(Ox49b) ;var Ox4a0=list_options2.options(list_options2.selectedIndex); SetOption2(Ox4a0) ; FireUIChanged() ;}  ; function Move(Oxce){var Ox49e=list_options[OxO9fce[0x18]];if(Ox49e<0x0){return ;} ;var Ox4a3=Ox49e-Oxce;if(Ox4a3<0x0){ Ox4a3=0x0 ;} ;if(Ox4a3>(list_options[OxO9fce[0x19]][OxO9fce[0x1b]]-0x1)){ Ox4a3=list_options[OxO9fce[0x19]][OxO9fce[0x1b]]-0x1 ;} ;if(Ox49e==Ox4a3){return ;} ;var Ox49b=list_options.options(list_options.selectedIndex);var Oxde=list_options2[OxO9fce[0x13]];var Ox3a9=list_options[OxO9fce[0x13]]; Delete() ; inp_item_text[OxO9fce[0x13]]=Oxde ; inp_item_value[OxO9fce[0x13]]=Ox3a9 ;var Ox49b= new Option(); SetOption(Ox49b) ; list_options[OxO9fce[0x19]].add(Ox49b,Ox4a3) ;var Ox4a0= new Option(); SetOption2(Ox4a0) ; list_options2[OxO9fce[0x19]].add(Ox4a0,Ox4a3) ; list_options[OxO9fce[0x18]]=Ox4a3 ; list_options2[OxO9fce[0x18]]=Ox4a3 ; FireUIChanged() ;}  ; function Delete(){if(list_options[OxO9fce[0x18]]==-0x1||list_options[OxO9fce[0x18]]==-0x1){ alert(OxO9fce[0x1a]) ;return ;} ;var Ox4a5=list_options[OxO9fce[0x18]];var Ox49b=list_options.options(list_options.selectedIndex); Ox49b.removeNode(true) ; Ox49b=list_options2.options(list_options2.selectedIndex) ; Ox49b.removeNode(true) ;if(list_options[OxO9fce[0x19]][OxO9fce[0x1b]]>Ox4a5){ list_options[OxO9fce[0x18]]=Ox4a5 ;} else {if(list_options[OxO9fce[0x19]][OxO9fce[0x1b]]){ list_options[OxO9fce[0x18]]=list_options[OxO9fce[0x19]][OxO9fce[0x1b]]-0x1 ;} ;} ; list_options.ondblclick() ;if(list_options2[OxO9fce[0x19]][OxO9fce[0x1b]]>Ox4a5){ list_options2[OxO9fce[0x18]]=Ox4a5 ;} else {if(list_options2[OxO9fce[0x19]][OxO9fce[0x1b]]){ list_options2[OxO9fce[0x18]]=list_options2[OxO9fce[0x19]][OxO9fce[0x1b]]-0x1 ;} ;} ; FireUIChanged() ;}  ; list_options[OxO9fce[0x1c]]=function list_options_ondblclick(){if(list_options[OxO9fce[0x18]]==-0x1){return ;} ;var Ox49b=list_options.options(list_options.selectedIndex); inp_item_text[OxO9fce[0x13]]=Ox49b[OxO9fce[0x14]] ; inp_item_value[OxO9fce[0x13]]=Ox49b[OxO9fce[0x13]] ; inp_item_forecolor[OxO9fce[0x13]]=inp_item_forecolor[OxO9fce[0x16]][OxO9fce[0x17]]=inp_item_forecolor_Preview[OxO9fce[0x16]][OxO9fce[0x17]]=Ox49b[OxO9fce[0x16]][OxO9fce[0x15]] ; inp_item_backcolor[OxO9fce[0x13]]=inp_item_backcolor[OxO9fce[0x16]][OxO9fce[0x17]]=inp_item_backcolor_Preview[OxO9fce[0x16]][OxO9fce[0x17]]=Ox49b[OxO9fce[0x16]][OxO9fce[0x17]] ;}  ; inp_item_forecolor[OxO9fce[0x1d]]=inp_item_forecolor_Preview[OxO9fce[0x1d]]=function inp_item_forecolor_onclick(){ SelectColor(inp_item_forecolor,inp_item_forecolor_Preview) ;}  ; inp_item_backcolor[OxO9fce[0x1d]]=inp_item_backcolor_Preview[OxO9fce[0x1d]]=function inp_item_backcolor_onclick(){ SelectColor(inp_item_backcolor,inp_item_backcolor_Preview) ;}  ; function CopySelect(Ox4aa,Ox4ab){ Ox4ab[OxO9fce[0x19]][OxO9fce[0x1b]]=0x0 ;for(var i=0x0;i<Ox4aa[OxO9fce[0x19]][OxO9fce[0x1b]];i++){var Ox4ac=Ox4aa[OxO9fce[0x19]][i];var Ox4a0;if(Browser_IsWinIE()){ Ox4a0=Ox4ab[OxO9fce[0x1f]].createElement(OxO9fce[0x1e]) ;} else { Ox4a0=document.createElement(OxO9fce[0x1e]) ;} ;if(Ox4ab[OxO9fce[0x20]]!=OxO9fce[0xf]){ Ox4a0[OxO9fce[0x13]]=Ox4ac[OxO9fce[0x13]] ; Ox4a0[OxO9fce[0x14]]=Ox4ac[OxO9fce[0x14]] ;} else { Ox4a0[OxO9fce[0x13]]=Ox4ac[OxO9fce[0x14]] ; Ox4a0[OxO9fce[0x14]]=Ox4ac[OxO9fce[0x13]] ;} ; Ox4a0[OxO9fce[0x16]][OxO9fce[0x21]]=Ox4ac[OxO9fce[0x16]][OxO9fce[0x21]] ; Ox4ab[OxO9fce[0x19]].add(Ox4a0) ;} ; Ox4ab[OxO9fce[0x18]]=Ox4aa[OxO9fce[0x18]] ;}  ; UpdateState=function UpdateState_Select(){}  ; SyncToView=function SyncToView_Select(){if(element[OxO9fce[0x22]]){ inp_name[OxO9fce[0x13]]=element[OxO9fce[0x22]] ;} ;if(element[OxO9fce[0x23]]){ inp_name[OxO9fce[0x13]]=element[OxO9fce[0x23]] ;} ; inp_id[OxO9fce[0x13]]=element[OxO9fce[0x20]] ; inp_size[OxO9fce[0x13]]=element[OxO9fce[0x24]] ; CopySelect(element,list_options) ; CopySelect(element,list_options2) ; inp_Disabled[OxO9fce[0x26]]=element[OxO9fce[0x25]] ; inp_Multiple[OxO9fce[0x26]]=element[OxO9fce[0x27]] ;if(element[OxO9fce[0x28]]==0x0){ inp_index[OxO9fce[0x13]]=OxO9fce[0x29] ;} else { inp_index[OxO9fce[0x13]]=element[OxO9fce[0x28]] ;} ;if(element[OxO9fce[0x2a]]){ inp_access[OxO9fce[0x13]]=element[OxO9fce[0x2a]] ;} ;}  ; SyncTo=function SyncTo_Select(element){ element[OxO9fce[0x23]]=inp_name[OxO9fce[0x13]] ;if(element[OxO9fce[0x22]]){ element[OxO9fce[0x22]]=inp_name[OxO9fce[0x13]] ;} else {if(element[OxO9fce[0x23]]){ element.removeAttribute(OxO9fce[0x23],0x0) ; element[OxO9fce[0x22]]=inp_name[OxO9fce[0x13]] ;} else { element[OxO9fce[0x22]]=inp_name[OxO9fce[0x13]] ;} ;} ; element[OxO9fce[0x20]]=inp_id[OxO9fce[0x13]] ; element[OxO9fce[0x24]]=inp_size[OxO9fce[0x13]] ; element[OxO9fce[0x25]]=inp_Disabled[OxO9fce[0x26]] ; element[OxO9fce[0x27]]=inp_Multiple[OxO9fce[0x26]] ; element[OxO9fce[0x2a]]=inp_access[OxO9fce[0x13]] ; element[OxO9fce[0x28]]=inp_index[OxO9fce[0x13]] ;if(element[OxO9fce[0x28]]==OxO9fce[0x29]){ element.removeAttribute(OxO9fce[0x28]) ;} ;if(element[OxO9fce[0x2a]]==OxO9fce[0x29]){ element.removeAttribute(OxO9fce[0x2a]) ;} ; CopySelect(list_options,element) ;}  ;