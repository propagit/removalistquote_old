var OxO4dba=["top","dialogArguments","opener","_dialog_arguments","document","editor","window","element","changed","propertyName","value","checked","trim","prototype",""]; function Window_GetDialogTop(Ox140){return Ox140[OxO4dba[0x0]];}  ; function Window_FindDialogArguments(Ox140){var Ox141=Ox140[OxO4dba[0x0]];if(Ox141[OxO4dba[0x1]]){return Ox141[OxO4dba[0x1]];} ;var Ox142=Ox141[OxO4dba[0x2]];if(Ox142==null){return Ox141[OxO4dba[0x4]][OxO4dba[0x3]];} ;var Ox143=Ox142[OxO4dba[0x4]][OxO4dba[0x3]];if(Ox143==null){return Window_FindDialogArguments(Ox142);} ;return Ox143;}  ;var arg=Window_FindDialogArguments(window);var editor=arg[OxO4dba[0x5]];var editwin=arg[OxO4dba[0x6]];var editdoc=arg[OxO4dba[0x4]];var element=arg[OxO4dba[0x7]];var syncingtoview=false; Window_GetDialogTop(window)[OxO4dba[0x8]]=Window_GetDialogTop(window)[OxO4dba[0x8]]||arg[OxO4dba[0x8]] ; function OnPropertyChange(){if(syncingtoview){return ;} ;var Ox24f=Event_GetEvent();if(Ox24f[OxO4dba[0x9]]!=OxO4dba[0xa]&&Ox24f[OxO4dba[0x9]]!=OxO4dba[0xb]){return ;} ; FireUIChanged() ;}  ; function FireUIChanged(){ Window_GetDialogTop(window)[OxO4dba[0x8]]=true ; SyncTo(element) ; UpdateState() ;}  ; function SyncToViewInternal(){ syncingtoview=true ;try{ SyncToView() ; UpdateState() ;} finally{ syncingtoview=false ;} ;}  ; String[OxO4dba[0xd]][OxO4dba[0xc]]=function (){return this.replace(/(^\s*)|(\s*$)/g,OxO4dba[0xe]);}  ; function UpdateState(){}  ; function SyncTo(element){}  ; function SyncToView(){}  ;