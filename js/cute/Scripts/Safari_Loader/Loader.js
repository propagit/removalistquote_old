var OxOdbfb=["isWinIE","isGecko","isSafari","isOpera","userAgent","ua","opera","safari","gecko","msie","compatMode","document","CSS1Compat","head","script","language","javascript","type","text/javascript","src","id","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","event","_fireEventFunction","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Images/t-minus.gif\x22\x3E","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onclick","onmousedown","none","/Images/t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation",";CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Themes/","/Images/all.png","/Images/blank2020.png","IMG","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","CuteEditor_ButtonCommandOver(this)","onmouseover","CuteEditor_ButtonCommandOut(this)","onmouseout","CuteEditor_ButtonCommandDown(this)","CuteEditor_ButtonCommandUp(this)","onmouseup","oncontextmenu","ondragstart","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","View","Code","Edit","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Scripts/Safar_Implementation/CuteEditorImplementation.js?i=1","CuteEditorImplementation","function","GET","\x26getModified=1","status","Failed to load impl time!","Failed to load impl code!","body","InitializeCode","block","contentEditable"," \x3Cbr /\x3E ","designMode","CuteEditorInitialize"];var _Browser_TypeInfo=null; function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox147={}; Ox147[OxOdbfb[0x5]]=navigator[OxOdbfb[0x4]].toLowerCase(),Ox147[OxOdbfb[0x3]]=(Ox147[OxOdbfb[0x5]].indexOf(OxOdbfb[0x6])>-0x1),Ox147[OxOdbfb[0x2]]=(Ox147[OxOdbfb[0x5]].indexOf(OxOdbfb[0x7])>-0x1),Ox147[OxOdbfb[0x1]]=(!Ox147[OxOdbfb[0x3]]&&!Ox147[OxOdbfb[0x2]]&&Ox147[OxOdbfb[0x5]].indexOf(OxOdbfb[0x8])>-0x1),Ox147[OxOdbfb[0x0]]=(!Ox147[OxOdbfb[0x3]]&&Ox147[OxOdbfb[0x5]].indexOf(OxOdbfb[0x9])>-0x1) ; _Browser_TypeInfo=Ox147 ;}  ; Browser__InitType() ; function Browser_IsWinIE(){return _Browser_TypeInfo[OxOdbfb[0x0]];}  ; function Browser_IsGecko(){return _Browser_TypeInfo[OxOdbfb[0x1]];}  ; function Browser_IsOpera(){return _Browser_TypeInfo[OxOdbfb[0x3]];}  ; function Browser_IsSafari(){return _Browser_TypeInfo[OxOdbfb[0x2]];}  ; function Browser_UseIESelection(){return _Browser_TypeInfo[OxOdbfb[0x0]];}  ; function Browser_IsCSS1Compat(){return window[OxOdbfb[0xb]][OxOdbfb[0xa]]==OxOdbfb[0xc];}  ; function include(Ox8ef,Ox2bc){var Ox8f0=document.getElementsByTagName(OxOdbfb[0xd]).item(0x0);var Ox8f1=document.getElementById(Ox8ef);if(Ox8f1){ Ox8f0.removeChild(Ox8f1) ;} ;var Ox8f2=document.createElement(OxOdbfb[0xe]); Ox8f2.setAttribute(OxOdbfb[0xf],OxOdbfb[0x10]) ; Ox8f2.setAttribute(OxOdbfb[0x11],OxOdbfb[0x12]) ; Ox8f2.setAttribute(OxOdbfb[0x13],Ox2bc) ; Ox8f2.setAttribute(OxOdbfb[0x14],Ox8ef) ; Ox8f0.appendChild(Ox8f2) ;}  ; function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOdbfb[0x15]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOdbfb[0x15]){return  new ActiveXObject(OxOdbfb[0x16]);} ;} catch(x){return null;} ;}  ; function LoadXMLAsync(Ox8f4,Ox2bc,Ox153,Ox8f5){var Ox79a=CreateXMLHttpRequest(); function Ox8f6(){if(Ox79a[OxOdbfb[0x17]]!=0x4){return ;} ; Ox79a[OxOdbfb[0x18]]= new Function() ;var Ox1a7=Ox79a; Ox79a=null ;if(Ox153){ Ox153(Ox1a7) ;} ;}  ; Ox79a[OxOdbfb[0x18]]=Ox8f6 ; Ox79a.open(Ox8f4,Ox2bc,true) ; Ox79a.send(Ox8f5||OxOdbfb[0x19]) ;}  ; function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0x0;i<p[OxOdbfb[0x1b]][OxOdbfb[0x1a]];i++){ arr.push(p[OxOdbfb[0x1b]].item(i)) ;} ;return arr;} ; Ox15d(p) ; function Ox15d(Oxd){var Ox15e=Oxd[OxOdbfb[0x1c]];var Ox10=Ox15e[OxOdbfb[0x1a]];for(var i=0x0;i<Ox10;i++){var Ox91=Ox15e.item(i);if(Ox91[OxOdbfb[0x1d]]!=0x1){continue ;} ; arr.push(Ox91) ; Ox15d(Ox91) ;} ;}  ;return arr;}  ;var __ISDEBUG=false; function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOdbfb[0x1e]+Debug_Todo.caller));}  ; function Window_GetElement(Ox140,Ox11d,Ox15b){var Oxd=Ox140[OxOdbfb[0xb]].getElementById(Ox11d);if(Oxd){return Oxd;} ;var Oxc2=Ox140[OxOdbfb[0xb]].getElementsByName(Ox11d);if(Oxc2[OxOdbfb[0x1a]]>0x0){return Oxc2.item(0x0);} ;return null;}  ; function CuteEditor_AddMainMenuItems(Ox56c){}  ; function CuteEditor_AddDropMenuItems(Ox56c,Ox573){}  ; function CuteEditor_AddTagMenuItems(Ox56c,Ox575){}  ; function CuteEditor_AddVerbMenuItems(Ox56c,Ox575){}  ; function CuteEditor_OnInitialized(editor){}  ; function CuteEditor_OnCommand(editor,Ox579,Ox57a,Oxad){}  ; function CuteEditor_OnChange(editor){}  ; function CuteEditor_FilterCode(editor,Ox188){return Ox188;}  ; function CuteEditor_FilterHTML(editor,Ox19e){return Ox19e;}  ; function CuteEditor_FireChange(editor){ window.CuteEditor_OnChange(editor) ; CuteEditor_FireEvent(editor,OxOdbfb[0x1f],null) ;}  ; function CuteEditor_FireInitialized(editor){ window.CuteEditor_OnInitialized(editor) ; CuteEditor_FireEvent(editor,OxOdbfb[0x20],null) ;}  ; function CuteEditor_FireCommand(editor,Ox579,Ox57a,Oxad){var Oxca=window.CuteEditor_OnCommand(editor,Ox579,Ox57a,Oxad);if(Oxca==true){return true;} ;var Ox581={}; Ox581[OxOdbfb[0x21]]=Ox579 ; Ox581[OxOdbfb[0x22]]=Ox57a ; Ox581[OxOdbfb[0x23]]=Oxad ; Ox581[OxOdbfb[0x24]]=true ; CuteEditor_FireEvent(editor,OxOdbfb[0x25],Ox581) ;if(Ox581[OxOdbfb[0x24]]==false){return true;} ;}  ; function CuteEditor_FireEvent(editor,Ox583,Ox584){if(Ox584==null){ Ox584={} ;} ;var Ox585=editor.getAttribute(Ox583);if(Ox585){if( typeof (Ox585)==OxOdbfb[0x26]){ editor[OxOdbfb[0x28]]= new Function(OxOdbfb[0x27],Ox585) ;} else { editor[OxOdbfb[0x28]]=Ox585 ;} ; editor._fireEventFunction(Ox584) ;} ;}  ; function CuteEditor_GetEditor(element){for(var Oxdc=element;Oxdc!=null;Oxdc=Oxdc[OxOdbfb[0x29]]){if(Oxdc.getAttribute(OxOdbfb[0x2a])==OxOdbfb[0x2b]){return Oxdc;} ;} ;return null;}  ; function CuteEditor_DropDownCommand(element,Ox8f8){var editor=CuteEditor_GetEditor(element);if(editor[OxOdbfb[0x2c]]){return ;} ;if(element.getAttribute(OxOdbfb[0x2d])==OxOdbfb[0x2b]){var Oxce=element.GetValue();if(Oxce==OxOdbfb[0x2e]){ Oxce=OxOdbfb[0x19] ;} ;var Ox117=element.GetText();if(Ox117==OxOdbfb[0x2e]){ Ox117=OxOdbfb[0x19] ;} ; element.SetSelectedIndex(0x0) ; editor.ExecCommand(Ox8f8,false,Oxce,Ox117) ;} else {if(element[OxOdbfb[0x2f]]){var Oxce=element[OxOdbfb[0x2f]];if(Oxce==OxOdbfb[0x2e]){ Oxce=OxOdbfb[0x19] ;} ; element[OxOdbfb[0x30]]=0x0 ; editor.ExecCommand(Ox8f8,false,Oxce,Ox117) ;} else { element[OxOdbfb[0x30]]=0x0 ;} ;} ; editor.FocusDocument() ;}  ; function CuteEditor_ExpandTreeDropDownItem(src,Ox643){var Ox611=null;while(src!=null){if(src[OxOdbfb[0x31]]==OxOdbfb[0x32]){ Ox611=src ;break ;} ; src=src[OxOdbfb[0x29]] ;} ;var Ox16=Ox611[OxOdbfb[0x33]].item(0x0); Ox611[OxOdbfb[0x36]][OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x19] ; Ox16[OxOdbfb[0x37]]=OxOdbfb[0x38]+Ox643+OxOdbfb[0x39] ; Ox611[OxOdbfb[0x3c]]= new Function(OxOdbfb[0x3a]+Ox643+OxOdbfb[0x3b]) ; Ox611[OxOdbfb[0x3d]]= new Function(OxOdbfb[0x3a]+Ox643+OxOdbfb[0x3b]) ;}  ; function CuteEditor_CollapseTreeDropDownItem(src,Ox643){var Ox611=null;while(src!=null){if(src[OxOdbfb[0x31]]==OxOdbfb[0x32]){ Ox611=src ;break ;} ; src=src[OxOdbfb[0x29]] ;} ;var Ox16=Ox611[OxOdbfb[0x33]].item(0x0); Ox611[OxOdbfb[0x36]][OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x3e] ; Ox16[OxOdbfb[0x37]]=OxOdbfb[0x38]+Ox643+OxOdbfb[0x3f] ; Ox611[OxOdbfb[0x3c]]= new Function(OxOdbfb[0x40]+Ox643+OxOdbfb[0x3b]) ; Ox611[OxOdbfb[0x3d]]= new Function(OxOdbfb[0x40]+Ox643+OxOdbfb[0x3b]) ;}  ; function Element_Contains(element,Ox106){if(!Browser_IsOpera()){if(element[OxOdbfb[0x41]]){return element.contains(Ox106);} ;} ;for(;Ox106!=null;Ox106=Ox106[OxOdbfb[0x29]]){if(element==Ox106){return true;} ;} ;return false;}  ; function Element_SetUnselectable(element){ element.setAttribute(OxOdbfb[0x42],OxOdbfb[0x43]) ; element.setAttribute(OxOdbfb[0x44],OxOdbfb[0x45]) ;var arr=Element_GetAllElements(element);var len=arr[OxOdbfb[0x1a]];if(!len){return ;} ;for(var i=0x0;i<len;i++){ arr[i].setAttribute(OxOdbfb[0x42],OxOdbfb[0x43]) ; arr[i].setAttribute(OxOdbfb[0x44],OxOdbfb[0x45]) ;} ;}  ; function Event_GetEvent(Ox161){ Ox161=Event_FindEvent(Ox161) ;if(Ox161==null){ Debug_Todo(OxOdbfb[0x46]) ;} ;return Ox161;}  ; function Frame_GetContentWindow(Ox266){if(Ox266[OxOdbfb[0x47]]){return Ox266[OxOdbfb[0x47]];} ;if(Ox266[OxOdbfb[0x48]]){if(Ox266[OxOdbfb[0x48]][OxOdbfb[0x49]]){return Ox266[OxOdbfb[0x48]][OxOdbfb[0x49]];} ;} ;var Ox140;if(Ox266[OxOdbfb[0x14]]){ Ox140=window[OxOdbfb[0x4a]][Ox266[OxOdbfb[0x14]]] ;if(Ox140){return Ox140;} ;} ;var len=window[OxOdbfb[0x4a]][OxOdbfb[0x1a]];for(var i=0x0;i<len;i++){ Ox140=window[OxOdbfb[0x4a]][i] ;if(Ox140[OxOdbfb[0x4b]]==Ox266){return Ox140;} ;if(Ox140[OxOdbfb[0xb]]==Ox266[OxOdbfb[0x48]]){return Ox140;} ;} ; Debug_Todo(OxOdbfb[0x4c]) ;}  ; function Array_IndexOf(arr,Ox163){for(var i=0x0;i<arr[OxOdbfb[0x1a]];i++){if(arr[i]==Ox163){return i;} ;} ;return -0x1;}  ; function Array_Contains(arr,Ox163){return Array_IndexOf(arr,Ox163)!=-0x1;}  ; function Event_FindEvent(Ox161){if(Ox161&&Ox161[OxOdbfb[0x4d]]){return Ox161;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOdbfb[0x27]]){return window[OxOdbfb[0x27]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;}  ; function Event_FindEvent_FindEventFromCallers(){var Ox169=Event_GetEvent[OxOdbfb[0x4e]];for(var i=0x0;i<0x64;i++){if(!Ox169){break ;} ;var Ox161=Ox169[OxOdbfb[0x4f]][0x0];if(Ox161&&Ox161[OxOdbfb[0x4d]]){return Ox161;} ; Ox169=Ox169[OxOdbfb[0x4e]] ;} ;}  ; function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox16b(window); function Ox16b(Ox140){if(Ox140==null){return null;} ;if(Ox140[OxOdbfb[0x27]]){return Ox140[OxOdbfb[0x27]];} ;if(Array_Contains(arr,Ox140)){return null;} ; arr.push(Ox140) ;var Ox16c=[];if(Ox140[OxOdbfb[0x50]]!=Ox140){ Ox16c.push(Ox140.parent) ;} ;if(Ox140[OxOdbfb[0x51]]!=Ox140[OxOdbfb[0x50]]){ Ox16c.push(Ox140.top) ;} ;if(Ox140[OxOdbfb[0x52]]){ Ox16c.push(Ox140.opener) ;} ;for(var i=0x0;i<Ox140[OxOdbfb[0x4a]][OxOdbfb[0x1a]];i++){ Ox16c.push(Ox140[OxOdbfb[0x4a]][i]) ;} ;for(var i=0x0;i<Ox16c[OxOdbfb[0x1a]];i++){try{var Ox161=Ox16b(Ox16c[i]);if(Ox161){return Ox161;} ;} catch(x){} ;} ;return null;}  ;}  ; function Event_GetSrcElement(Ox161){ Ox161=Event_GetEvent(Ox161) ;if(Ox161[OxOdbfb[0x53]]){return Ox161[OxOdbfb[0x53]];} ;if(Ox161[OxOdbfb[0x54]]){return Ox161[OxOdbfb[0x54]];} ; Debug_Todo(OxOdbfb[0x55]) ;return null;}  ; function Event_GetFromElement(Ox161){ Ox161=Event_GetEvent(Ox161) ;if(Ox161[OxOdbfb[0x56]]){return Ox161[OxOdbfb[0x56]];} ;if(Ox161[OxOdbfb[0x57]]){return Ox161[OxOdbfb[0x57]];} ;return null;}  ; function Event_GetToElement(Ox161){ Ox161=Event_GetEvent(Ox161) ;if(Ox161[OxOdbfb[0x58]]){return Ox161[OxOdbfb[0x58]];} ;if(Ox161[OxOdbfb[0x57]]){return Ox161[OxOdbfb[0x57]];} ;return null;}  ; function Event_GetKeyCode(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x59]];}  ; function Event_GetClientX(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x5a]];}  ; function Event_GetClientY(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x5b]];}  ; function Event_GetOffsetX(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x5c]];}  ; function Event_GetOffsetY(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x5d]];}  ; function Event_IsLeftButton(Ox161){ Ox161=Event_GetEvent(Ox161) ;if(Browser_IsWinIE()){return Ox161[OxOdbfb[0x5e]]==0x1;} ;if(Browser_IsGecko()){return Ox161[OxOdbfb[0x5e]]==0x0;} ;return Ox161[OxOdbfb[0x5e]]==0x0;}  ; function Event_IsCtrlKey(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x5f]];}  ; function Event_IsAltKey(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x60]];}  ; function Event_IsShiftKey(Ox161){ Ox161=Event_GetEvent(Ox161) ;return Ox161[OxOdbfb[0x61]];}  ; function Event_PreventDefault(Ox161){ Ox161=Event_GetEvent(Ox161) ; Ox161[OxOdbfb[0x24]]=false ;if(Ox161[OxOdbfb[0x4d]]){ Ox161.preventDefault() ;} ;}  ; function Event_CancelBubble(Ox161){ Ox161=Event_GetEvent(Ox161) ; Ox161[OxOdbfb[0x62]]=true ;if(Ox161[OxOdbfb[0x63]]){ Ox161.stopPropagation() ;} ;return false;}  ; function Event_CancelEvent(Ox161){ Ox161=Event_GetEvent(Ox161) ; Event_PreventDefault(Ox161) ;return Event_CancelBubble(Ox161);}  ; function CuteEditor_BasicInitialize(editor){var Ox8fc=Browser_IsOpera();var Ox60b= new Function(OxOdbfb[0x64]);var Ox8fd= new Function(OxOdbfb[0x65]);var Ox8fe=editor.GetScriptProperty(OxOdbfb[0x66]);var Ox8ff=editor.GetScriptProperty(OxOdbfb[0x67]);var Ox900=Ox8fe+OxOdbfb[0x68]+Ox8ff+OxOdbfb[0x69];var Ox901=Ox8fe+OxOdbfb[0x6a];var images=editor.getElementsByTagName(OxOdbfb[0x6b]);var len=images[OxOdbfb[0x1a]];for(var i=0x0;i<len;i++){var img=images[i];var Oxc1=img.getAttribute(OxOdbfb[0x6c]);var Ox573=img.getAttribute(OxOdbfb[0x6d]);if(!(Oxc1||Ox573)){continue ;} ;var Ox902=img.getAttribute(OxOdbfb[0x6e]);if(parseInt(Ox902)>=0x0){ img[OxOdbfb[0x35]][OxOdbfb[0x6f]]=OxOdbfb[0x70] ; img[OxOdbfb[0x35]][OxOdbfb[0x71]]=OxOdbfb[0x70] ; img[OxOdbfb[0x13]]=Ox901 ; img[OxOdbfb[0x35]][OxOdbfb[0x72]]=OxOdbfb[0x73]+Ox900+OxOdbfb[0x74] ; img[OxOdbfb[0x35]][OxOdbfb[0x75]]=OxOdbfb[0x76]+(Ox902*0x14)+OxOdbfb[0x77] ; img[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x19] ;} ;if(!Oxc1&&!Ox573){if(Ox8fc){ img[OxOdbfb[0x78]]=CuteEditor_OperaHandleImageLoaded ;} ;continue ;} ;if(img[OxOdbfb[0x79]]!=OxOdbfb[0x7a]){ img[OxOdbfb[0x79]]=OxOdbfb[0x7b] ; img[OxOdbfb[0x7d]]= new Function(OxOdbfb[0x7c]) ; img[OxOdbfb[0x7f]]= new Function(OxOdbfb[0x7e]) ; img[OxOdbfb[0x3d]]= new Function(OxOdbfb[0x80]) ; img[OxOdbfb[0x82]]= new Function(OxOdbfb[0x81]) ;} ;if(!img[OxOdbfb[0x83]]){ img[OxOdbfb[0x83]]=Event_CancelEvent ;} ;if(!img[OxOdbfb[0x84]]){ img[OxOdbfb[0x84]]=Event_CancelEvent ;} ;if(Oxc1){var Ox169=Ox60b;if(img[OxOdbfb[0x3c]]==null){ img[OxOdbfb[0x3c]]=Ox169 ;} ;if(img[OxOdbfb[0x85]]==null){ img[OxOdbfb[0x85]]=Ox169 ;} ;} else {if(Ox573){if(img[OxOdbfb[0x3c]]==null){ img[OxOdbfb[0x3c]]=Ox8fd ;} ;} ;} ;} ;var Ox677=Window_GetElement(window,editor.GetScriptProperty(OxOdbfb[0x86]),true);var Ox678=Window_GetElement(window,editor.GetScriptProperty(OxOdbfb[0x87]),true);var Ox674=Window_GetElement(window,editor.GetScriptProperty(OxOdbfb[0x88]),true); Ox674[OxOdbfb[0x79]]+=OxOdbfb[0x89] ; Ox677[OxOdbfb[0x79]]+=OxOdbfb[0x8a] ; Ox678[OxOdbfb[0x79]]+=OxOdbfb[0x8a] ; Element_SetUnselectable(Ox677) ; Element_SetUnselectable(Ox678) ;try{ editor[OxOdbfb[0x35]][OxOdbfb[0x8b]]=OxOdbfb[0x8c] ;} catch(x){} ;var Ox6f6=editor.GetScriptProperty(OxOdbfb[0x8d]);switch(Ox6f6){case OxOdbfb[0x90]: Ox677[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x19] ;break ;case OxOdbfb[0x8f]: Ox678[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x19] ;break ;case OxOdbfb[0x8e]:break ;;;;} ;}  ; function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOdbfb[0x35]][OxOdbfb[0x34]]){ img[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x3e] ; setTimeout(function Ox904(){ img[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0x19] ;} ,0x1) ;} ;}  ; function CuteEditor_ButtonOver(element){if(!element[OxOdbfb[0x91]]){ element[OxOdbfb[0x83]]=Event_CancelEvent ; element[OxOdbfb[0x7f]]=CuteEditor_ButtonOut ; element[OxOdbfb[0x3d]]=CuteEditor_ButtonDown ; element[OxOdbfb[0x82]]=CuteEditor_ButtonUp ; Element_SetUnselectable(element) ; element[OxOdbfb[0x91]]=true ;} ; element[OxOdbfb[0x92]]=true ; element[OxOdbfb[0x79]]=OxOdbfb[0x93] ;}  ; function CuteEditor_ButtonOut(){var element=this; element[OxOdbfb[0x79]]=OxOdbfb[0x7b] ; element[OxOdbfb[0x92]]=false ;}  ; function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this; element[OxOdbfb[0x79]]=OxOdbfb[0x94] ;}  ; function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOdbfb[0x92]]){ element[OxOdbfb[0x79]]=OxOdbfb[0x93] ;} else { element[OxOdbfb[0x79]]=OxOdbfb[0x95] ;} ;}  ; function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOdbfb[0x91]]){ element[OxOdbfb[0x83]]=Event_CancelEvent ; element[OxOdbfb[0x7f]]=CuteEditor_ColorPicker_ButtonOut ; element[OxOdbfb[0x3d]]=CuteEditor_ColorPicker_ButtonDown ; Element_SetUnselectable(element) ; element[OxOdbfb[0x91]]=true ;} ; element[OxOdbfb[0x92]]=true ; element[OxOdbfb[0x35]][OxOdbfb[0x96]]=OxOdbfb[0x97] ; element[OxOdbfb[0x35]][OxOdbfb[0x98]]=OxOdbfb[0x99] ; element[OxOdbfb[0x35]][OxOdbfb[0x9a]]=OxOdbfb[0x9b] ;}  ; function CuteEditor_ColorPicker_ButtonOut(){var element=this; element[OxOdbfb[0x92]]=false ; element[OxOdbfb[0x35]][OxOdbfb[0x96]]=OxOdbfb[0x9c] ; element[OxOdbfb[0x35]][OxOdbfb[0x98]]=OxOdbfb[0x19] ; element[OxOdbfb[0x35]][OxOdbfb[0x9a]]=OxOdbfb[0x9b] ;}  ; function CuteEditor_ColorPicker_ButtonDown(){var element=this; element[OxOdbfb[0x35]][OxOdbfb[0x96]]=OxOdbfb[0x9d] ; element[OxOdbfb[0x35]][OxOdbfb[0x98]]=OxOdbfb[0x19] ; element[OxOdbfb[0x35]][OxOdbfb[0x9a]]=OxOdbfb[0x9b] ;}  ; function CuteEditor_ButtonCommandOver(element){ element[OxOdbfb[0x92]]=true ;if(element[OxOdbfb[0x9e]]){ element[OxOdbfb[0x79]]=OxOdbfb[0x9f] ;} else { element[OxOdbfb[0x79]]=OxOdbfb[0x93] ;} ;}  ; function CuteEditor_ButtonCommandOut(element){ element[OxOdbfb[0x92]]=false ;if(element[OxOdbfb[0xa0]]){ element[OxOdbfb[0x79]]=OxOdbfb[0xa1] ;} else {if(element[OxOdbfb[0x9e]]){ element[OxOdbfb[0x79]]=OxOdbfb[0x9f] ;} else {if(element[OxOdbfb[0x14]]!=OxOdbfb[0xa2]){ element[OxOdbfb[0x79]]=OxOdbfb[0x7b] ;} ;} ;} ;}  ; function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ; element[OxOdbfb[0x79]]=OxOdbfb[0x94] ;}  ; function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOdbfb[0x9e]]){ element[OxOdbfb[0x79]]=OxOdbfb[0x9f] ;return ;} ;if(element[OxOdbfb[0x92]]){ element[OxOdbfb[0x79]]=OxOdbfb[0x93] ;} else {if(element[OxOdbfb[0xa0]]){ element[OxOdbfb[0x79]]=OxOdbfb[0xa1] ;} else { element[OxOdbfb[0x79]]=OxOdbfb[0x7b] ;} ;} ;}  ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML]; function SetupCuteEditorGlobalFunctions(){for(var i=0x0;i<CuteEditorGlobalFunctions[OxOdbfb[0x1a]];i++){var Ox169=CuteEditorGlobalFunctions[i];var name=Ox169+OxOdbfb[0x19]; name=name.substr(0x8,name.indexOf(OxOdbfb[0xa3])-0x8).replace(/\s/g,OxOdbfb[0x19]) ;if(!window[name]){ window[name]=Ox169 ;} ;} ;}  ; SetupCuteEditorGlobalFunctions() ;var __danainfo=null;var danaurl=window[OxOdbfb[0xa5]][OxOdbfb[0xa4]];var danapos=danaurl.indexOf(OxOdbfb[0xa6]);if(danapos!=-0x1){var pluspos1=danaurl.indexOf(OxOdbfb[0xa7],danapos+0xa);var pluspos2=danaurl.indexOf(OxOdbfb[0xa8],danapos+0xa);if(pluspos1!=-0x1&&pluspos1<pluspos2){ pluspos2=pluspos1 ;} ; __danainfo=danaurl.substring(danapos,pluspos2)+OxOdbfb[0xa8] ;} ; function CuteEditor_GetScriptProperty(name){return this[OxOdbfb[0xa9]][name];}  ; function CuteEditor_SetScriptProperty(name,Oxce){if(Oxce==null){ this[OxOdbfb[0xa9]][name]=null ;} else { this[OxOdbfb[0xa9]][name]=String(Oxce) ;} ;}  ; function CuteEditorInitialize(Ox90f,Ox910){var editor=Window_GetElement(window,Ox90f,true); editor[OxOdbfb[0xa9]]=Ox910 ; editor[OxOdbfb[0xaa]]=CuteEditor_GetScriptProperty ;var Ox674=Window_GetElement(window,editor.GetScriptProperty(OxOdbfb[0x88]),true);var editwin,editdoc;try{ editwin=Frame_GetContentWindow(Ox674) ; editdoc=editwin[OxOdbfb[0xb]] ;} catch(x){} ;var Ox911=false;var Ox912;var Ox913=false;var Ox914=editor.GetScriptProperty(OxOdbfb[0x66])+OxOdbfb[0xab]; function Ox915(){if( typeof (window[OxOdbfb[0xac]])==OxOdbfb[0xad]){return ;} ; LoadXMLAsync(OxOdbfb[0xae],Ox914+OxOdbfb[0xaf],Ox916) ;}  ; function Ox916(Ox1a7){if(Ox1a7[OxOdbfb[0xb0]]!=0xc8){ alert(OxOdbfb[0xb1]) ;return ;} ; CuteEditorInstallScriptCode(Ox1a7.responseText,OxOdbfb[0xac]) ;if(Ox911){ Ox918() ;} ;}  ; function Ox917(Ox1a7){if(Ox1a7[OxOdbfb[0xb0]]!=0xc8){ alert(OxOdbfb[0xb2]) ;return ;} ; CuteEditorInstallScriptCode(Ox1a7.responseText,OxOdbfb[0xac]) ;if(Ox911){ Ox918() ;} ;}  ; function Ox918(){if(Ox913){return ;} ; Ox913=true ; window.CuteEditorImplementation(editor) ;try{ editor[OxOdbfb[0x35]][OxOdbfb[0x8b]]=OxOdbfb[0x19] ;} catch(x){} ;try{ editdoc[OxOdbfb[0xb3]][OxOdbfb[0x35]][OxOdbfb[0x8b]]=OxOdbfb[0x19] ;} catch(x){} ;var Ox919=editor.GetScriptProperty(OxOdbfb[0xb4]);if(Ox919){ editor.Eval(Ox919) ;} ;}  ; function Ox91a(){if(!Element_Contains(window[OxOdbfb[0xb]].body,editor)){return ;} ;try{ Ox674=Window_GetElement(window,editor.GetScriptProperty(OxOdbfb[0x88]),true) ; editwin=Frame_GetContentWindow(Ox674) ; editdoc=editwin[OxOdbfb[0xb]] ;var Ox1f0=editdoc[OxOdbfb[0xb3]];} catch(x){ setTimeout(Ox91a,0x64) ;return ;} ;if(!editdoc[OxOdbfb[0xb3]]){ setTimeout(Ox91a,0x64) ;return ;} ;if(!Ox911){ Ox674[OxOdbfb[0x35]][OxOdbfb[0x34]]=OxOdbfb[0xb5] ;if(Browser_IsOpera()){ editdoc[OxOdbfb[0xb3]][OxOdbfb[0xb6]]=true ;} else {if(Browser_IsGecko()){ editdoc[OxOdbfb[0xb3]][OxOdbfb[0x37]]=OxOdbfb[0xb7] ;} ; editdoc[OxOdbfb[0xb8]]=OxOdbfb[0x43] ;} ; Ox911=true ; setTimeout(Ox91a,0x32) ;return ;} ;if( typeof (window[OxOdbfb[0xac]])==OxOdbfb[0xad]){ Ox918() ;} else {try{ editdoc[OxOdbfb[0xb3]][OxOdbfb[0x35]][OxOdbfb[0x8b]]=OxOdbfb[0x8c] ;} catch(x){} ;} ;}  ;var Ox91b=0x0;var Oxdc=CuteEditor_Find_DisplayNone(editor);if(Oxdc){ function Ox91c(){if(Oxdc[OxOdbfb[0x35]][OxOdbfb[0x34]]!=OxOdbfb[0x3e]){ window.clearInterval(Ox91b) ; Ox91b=OxOdbfb[0x19] ; CuteEditorInitialize(Ox90f,Ox910) ;} ;}  ; Ox91b=setInterval(Ox91c,0x3e8) ;} else { CuteEditor_BasicInitialize(editor) ; Ox915() ; Ox91a() ;} ; function CuteEditor_Find_DisplayNone(element){var Ox91e;for(var Oxdc=element;Oxdc!=null;Oxdc=Oxdc[OxOdbfb[0x29]]){if(Oxdc[OxOdbfb[0x35]]&&Oxdc[OxOdbfb[0x35]][OxOdbfb[0x34]]==OxOdbfb[0x3e]){ Ox91e=Oxdc ;break ;} ;} ;return Ox91e;}  ;}  ; function CuteEditorInstallScriptCode(Ox896,Ox897){ eval(Ox896) ; window[Ox897]=eval(Ox897) ;}  ; window[OxOdbfb[0xb9]]=CuteEditorInitialize ;