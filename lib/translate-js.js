var $29004=function(type$29006){var f$29009;(f$29009=type$29006["::check"]);if((f$29009===(void 0))){return function(value$29014){return (value$29014 instanceof type$29006);};}else{return function(value$29017){return f$29009.call(type$29006,value$29017);};}};
var $29019=(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}});
var $29020=function(dest$29022,values$29023){var k$29028;(k$29028=null);$29026:for(k$29028 in values$29023){if(values$29023.hasOwnProperty(k$29028)){(dest$29022[k$29028]=values$29023[k$29028]);}}return dest$29022;};
var $29035=function($29036$29038){var ph$29042;(ph$29042=$29036$29038);var $29040$29047;($29040$29047=ph$29042);var bridge$29041$29052;var x$29056;(bridge$29041$29052=$29040$29047);if((((typeof(bridge$29041$29052)==="string")&&((x$29056=bridge$29041$29052),true))||((typeof(bridge$29041$29052)==="number")&&((x$29056=bridge$29041$29052),true)))){return ["value",x$29056];}else{var other$29066;(other$29066=$29040$29047);return other$29066["::serialize_ast"]();}};
var send$28811;(send$28811=function(obj$28816,$28814$28817){var ph$28821;var msg$28822;var t0$28824;(t0$28824=$28814$28817);(msg$28822=t0$28824);(ph$28821=t0$28824);var $28819$28831;($28819$28831=ph$28821);var bridge$28820$28836;(bridge$28820$28836=$28819$28831);if(((typeof(bridge$28820$28836)==="string")||(typeof(bridge$28820$28836)==="number"))){return obj$28816[msg$28822];}else{var other$28847;(other$28847=$28819$28831);return obj$28816["::send"](msg$28822);}});(Array[":::project"]=function($28852$28854){var ph$28857;var value$28858;var t0$28860;(t0$28860=$28852$28854);(value$28858=t0$28860);(ph$28857=t0$28860);var $28856$28867;($28856$28867=ph$28857);if($29004(Array)($28856$28867)){return [true,value$28858];}else{$28856$28867;return [true,[value$28858]];}});(Array.prototype["::check"]=function(value$28884){if((value$28884 instanceof Array)){var i$28889;(i$28889=0);$28887:for(;(i$28889<this.length);(i$28889++)){if(($29019(this,i$28889)!==$29019(value$28884,i$28889))){return false;}}return true;}else{return false;}});(Array.prototype["::clone"]=function(){return $29020(this.slice(0),this);});(Array.prototype[":::project"]=function(value$28906){if((value$28906 instanceof Array)){var i$28911;(i$28911=0);$28909:for(;(i$28911<this.length);(i$28911++)){if(($29019(this,i$28911)!==$29019(value$28906,i$28911))){return [true,[value$28906]];}}return [true,value$28906.slice(this.length)];}else{return [true,[value$28906]];}});(Array.prototype["::serialize_ast"]=function(){return ["array"].concat(this.map($29035));});(RegExp.prototype["::check"]=function($28927$28929){var ph$28932;(ph$28932=$28927$28929);var $28931$28937;($28931$28937=ph$28932);var value$28945;if((typeof($28931$28937)==="string")){(value$28945=$28931$28937);if(value$28945.match(this)){return true;}else{return false;}}else{var other$28950;(other$28950=$28931$28937);return false;}});(RegExp.prototype[":::project"]=function($28955$28957){var ph$28960;(ph$28960=$28955$28957);var $28959$28965;($28959$28965=ph$28960);var value$28973;if((typeof($28959$28965)==="string")){(value$28973=$28959$28965);var $28976$28978;($28976$28978=value$28973.match(this));var m$28986;if(($28976$28978===null)){(m$28986=$28976$28978);return [false,null];}else{var m$28991;(m$28991=$28976$28978);return [true,m$28991];}}else{var other$28995;(other$28995=$28959$28965);return [false,null];}});(Function.prototype["::send"]=function(args$29001){return this.apply(this,args$29001);});
var $31030=function(arr$31032){var results$31036;var l$31037;(results$31036=[]);(l$31037=arr$31032.length);var i$31045;(i$31045=0);$31035:for(;(i$31045<l$31037);(i$31045++)){results$31036.push([i$31045,$29019(arr$31032,i$31045)]);}return results$31036;};
var $30834=function(){var $30835$30837;($30835$30837=function(tags$30841){var it$0$30844;(it$0$30844=function(){if((!$29004($30835$30837)(this))){return Object.create($30835$30837.prototype);}else{return this;}}());(it$0$30844["tags"]=tags$30841);return it$0$30844;});($30835$30837.prototype["create"]=function(){var $30856$30858;($30856$30858=arguments);var t0$30863;var message$30867;var args$30868;(t0$30863=$30856$30858.length);if((t0$30863>=0)){(message$30867=function(){if((0>=t0$30863)){return "";}else{return $30856$30858[0];}}());(args$30868=Array.prototype.slice.call($30856$30858,1));var it$0$30875;(it$0$30875=this);var self$30880;(self$30880=this);var e$30885;(e$30885=Error(message$30867));(e$30885["::tags"]=it$0$30875.tags);(e$30885["args"]=args$30868);var temp$30899;(temp$30899=$31030(args$30868));var $length$30904;($length$30904=temp$30899.length);var $index$30909;($index$30909=0);$30886:for(;($index$30909<$length$30904);($index$30909++)){var m$30917;(m$30917=temp$30899[$index$30909]);var t0$30922;var t1$30923;var i$30927;var arg$30928;(t0$30922=m$30917);if(((t0$30922 instanceof Array)&&(((t1$30923=t0$30922.length)),(t1$30923===2)))){(i$30927=t0$30922[0]);(arg$30928=t0$30922[1]);(e$30885[i$30927]=arg$30928);}else{$30818(m$30917);}}(e$30885["length"]=args$30868.length);(e$30885["name"]=["E"].concat(it$0$30875.tags).join("."));return e$30885;}else{$30818($30856$30858);}});($30835$30837.prototype["::check"]=function(e$30954){var it$0$30957;(it$0$30957=this);var self$30962;(self$30962=this);var tags$30967;if(((!e$30954)||(!$29004(Error)(e$30954)))){return false;}(tags$30967=(e$30954["::tags"]||[]));var temp$30976;(temp$30976=it$0$30957.tags);var $length$30981;($length$30981=temp$30976.length);var $index$30986;($index$30986=0);$30968:for(;($index$30986<$length$30981);($index$30986++)){var m$30994;(m$30994=temp$30976[$index$30986]);var tag$31002;(tag$31002=m$30994);if((tags$30967.indexOf(tag$31002)===-1)){return false;}else{false;}}return true;});($30835$30837.prototype["::deconstruct"]=function(e$31010){var it$0$31013;(it$0$31013=this);var self$31018;(self$31018=this);return e$31010.args;});$29020($30835$30837,$29020(function(){var accum$31023;(accum$31023=({}));(accum$31023["::name"]="$30835");return accum$31023;}(),function(){var accum$31027;(accum$31027=({}));(accum$31027["::egclass"]=true);return accum$31027;}()));return $30835$30837;}();
var $30818=function(value$30820,url$30821,start$30822,end$30823){var err$30826;(err$30826=$30834(["match"]).create("Could not find a match for value",({"value":value$30820})));if(url$30821){(err$30826["location"]=["location",url$30821,start$30822,end$30823]);}throw err$30826;};
var $31052=function(type$31054){return function(value$31057){var f$31060;(f$31060=type$31054[":::project"]);if((f$31060===(void 0))){(f$31060=type$31054["::project"]);if((f$31060===(void 0))){return [true,type$31054(value$31057)];}else{var rval$31069;(rval$31069=false);try{(rval$31069=[true,f$31060(value$31057)]);}catch(excv$31078){var e$31084;(e$31084=excv$31078);(rval$31069=[false,null]);}return rval$31069;}}else{return f$31060.call(type$31054,value$31057);}};};
var $31089=function($31090$31092,key$31093){var ph$31097;(ph$31097=$31090$31092);var $31095$31102;($31095$31102=ph$31097);var bridge$31096$31107;(bridge$31096$31107=$31095$31102);if(((bridge$31096$31107===null)||(bridge$31096$31107===(void 0)))){return false;}else{var x$31118;if((typeof($31095$31102)==="string")){(x$31118=$31095$31102);return (key$31093 in String.prototype);}else{var x$31123;if((typeof($31095$31102)==="number")){(x$31123=$31095$31102);return (key$31093 in Number.prototype);}else{var x$31128;(x$31128=$31095$31102);return (key$31093 in x$31128);}}}};var accum$30788;var accum$30792;var $29070$29072;var gensym$29073;var $29071$29074;var __lt____gt__$29075;var js_op_table2$29076;var js_op_table$29077;var Translator$29078;var translate$29079;($29070$29072=require("./util"));(gensym$29073=$29070$29072.gensym);($29071$29074=require("./pp"));(__lt____gt__$29075=$29071$29074["<>"]);(js_op_table2$29076=({"+":"+","-":"-","*":"*","/":"/","mod":"%","&.":"&","|.":"|","^.":"^","~":"~","and":"&&","or":"||","not":"!","==":"===","!=":"!==","===":"===","!==":"!==","<":"<",">":">","<=":"<=",">=":">=","<<":"<<",">>":">>",">>>":">>>","in":" in ","instanceof":" instanceof ","++":"++","--":"--"}));(js_op_table$29077=({"___plus":"+","___minus":"-","___times":"*","___div":"/","___mod":"%","___binxor":"^","___binand":"&","___binor":"|","___binnot":"~","___and":"&&","___or":"||","___not":"!","___is":"===","___isnt":"!==","___eq":"===","___neq":"!==","___lt":"<","___gt":">","___lte":"<=","___gte":">=","___shl":"<<","___shr":">>","___shr2":">>>","___in":" in ","___instanceof":" instanceof ","___plusplus":"++","___minusminus":"--"}));(Translator$29078=function(){var it$0$29119;var prelude$29112;var t0$29108;var $29101$29103;($29101$29103=arguments);(t0$29108=$29101$29103.length);if(((t0$29108>=0)&&(t0$29108<=1))){(prelude$29112=function(){if((0>=t0$29108)){return null;}else{return $29101$29103[0];}}());(it$0$29119=function(){if((!$29004(Translator$29078)(this))){return Object.create(Translator$29078.prototype);}else{return this;}}());(it$0$29119["cache"]=({}));(it$0$29119["prepend"]=[]);if(prelude$29112){it$0$29119.prepend.push(it$0$29119.translate($29035(prelude$29112),"stmt"));}return it$0$29119;}else{$30818($29101$29103);}});(Translator$29078.prototype["register_value"]=function(v$29138,id$29139){var temp$29164;var name$29173;var $29147$29153;var self$29148;var it$0$29142;(it$0$29142=this);(self$29148=this);($29147$29153=$29019(it$0$29142.cache,id$29139));if(($29147$29153===(void 0))){(temp$29164=["symbol",gensym$29073()]);(it$0$29142.cache[id$29139]=temp$29164);it$0$29142.prepend.push(it$0$29142.translate(["declare",temp$29164,$29035(v$29138)],"stmt"));return temp$29164;}else{(name$29173=$29147$29153);return name$29173;}});(Translator$29078.prototype["register_raw"]=function(raw$29178,id$29179){var temp$29204;var name$29213;var $29187$29193;var self$29188;var it$0$29182;(it$0$29182=this);(self$29188=this);($29187$29193=$29019(it$0$29182.cache,id$29179));if(($29187$29193===(void 0))){(temp$29204=["symbol",gensym$29073()]);(it$0$29182.cache[id$29179]=temp$29204);it$0$29182.prepend.push(it$0$29182.translate(["declare",temp$29204,["raw",raw$29178]],"stmt"));return temp$29204;}else{(name$29213=$29187$29193);return name$29213;}});(Translator$29078.prototype["dump_store"]=function(){var rval$29230;var self$29225;var it$0$29220;(it$0$29220=this);(self$29225=this);(rval$29230=it$0$29220.prepend.join("\n"));(it$0$29220["prepend"]=[]);return rval$29230;});(Translator$29078.prototype["mangle"]=function(name$29240){var i$29263;var tr$29254;var r$29255;var self$29248;var it$0$29243;(it$0$29243=this);(self$29248=this);(tr$29254=({"+":"__plus__","-":"__minus__","*":"__asterisk__","/":"__slash__","%":"__percent__","^":"__caret__","#":"__hash__","&":"__amp__","|":"__pipe__","@":"__at__","!":"__bang__","?":"__qmark__","=":"__equal__","<":"__lt__",">":"__gt__","~":"__tilde__",".":"__dot__",":":"__colon__"}));(r$29255=[]);(i$29263=0);$29253:for(;(i$29263<name$29240.length);(++i$29263)){var c$29271;(c$29271=$29019(name$29240,i$29263));r$29255.push(($29019(tr$29254,c$29271)||c$29271));}return r$29255.join("");});(Translator$29078.prototype["body"]=function(orig$29278,mode$29279){var t0$29296;var t1$29297;var t2$29298;var x$29331;var stmts$29340;var ret$29341;var other$29354;var $29292$29320;var b$29293;var trst$29294;var self$29287;var it$0$29282;(it$0$29282=this);(self$29287=this);(t0$29296=$31052(["multi"])(orig$29278));if((t0$29296[0]&&(((t1$29297=t0$29296[1])),(((t2$29298=t1$29297.length)),(t2$29298>=0))))){(b$29293=Array.prototype.slice.call(t1$29297,0));}else{$30818(orig$29278,"/home/olivier/git/earl-grey/src/translate-js.eg",3071,3075);}(trst$29294=function(stmt$29316){return it$0$29282.translate(stmt$29316,"stmt");});($29292$29320=mode$29279);if(($29292$29320==="expr")){(x$29331=["send",["lambda",[],orig$29278],["array"]]);return it$0$29282.translate(x$29331,mode$29279);}else{if(($29292$29320==="return")){(stmts$29340=b$29293.slice(0,-1));(ret$29341=$29019(b$29293,(b$29293.length-1)));return (stmts$29340.map(trst$29294).join("")+it$0$29282.translate(ret$29341,"return"));}else{if(($29292$29320==="stmt")){return b$29293.map(trst$29294).join("");}else{(other$29354=$29292$29320);throw $30834(["syntax","mode"]).create("Unknown mode",({"mode":mode$29279}));}}}});(Translator$29078.prototype["expr"]=function(x$29359,mode$29360){var other$29394;var $29368$29374;var self$29369;var it$0$29363;(it$0$29363=this);(self$29369=this);($29368$29374=mode$29360);if(($29368$29374==="expr")){return x$29359;}else{if(($29368$29374==="stmt")){return (x$29359+";");}else{if(($29368$29374==="return")){return (("return "+x$29359)+";");}else{(other$29394=$29368$29374);throw "OopsI";}}}});(Translator$29078.prototype["op"]=function(op$29399,a$29400,b$29401){var $29418$29431;var $29419$29432;var $29420$29433;var t0$29427;var t1$29428;var t2$29429;var $29417$29422;var e$29414;var self$29409;var it$0$29404;(it$0$29404=this);(self$29409=this);(e$29414=((($29417$29422=[a$29400,b$29401])),function(){if((($29418$29431=($29417$29422 instanceof Array))&&(((t0$29427=$29417$29422.length)),(($29420$29433=(t0$29427===2))&&(((t1$29428=$29417$29422[0])),((t1$29428 instanceof Array)&&(((t2$29429=t1$29428.length)),((t2$29429===1)&&(t1$29428[0]==="void"))))))))){$29417$29422[1];return (op$29399+it$0$29404.translate(b$29401,"expr"));}else{if(($29420$29433&&($29417$29422[0],(((t1$29428=$29417$29422[1])),((t1$29428 instanceof Array)&&(((t2$29429=t1$29428.length)),((t2$29429===1)&&(t1$29428[0]==="void")))))))){return (it$0$29404.translate(a$29400,"expr")+op$29399);}else{$29417$29422;return ((it$0$29404.translate(a$29400,"expr")+op$29399)+it$0$29404.translate(b$29401,"expr"));}}}()));return (("("+e$29414)+")");});(Translator$29078.prototype["translate"]=function(expr$29470,mode$29471){var repl$29549;var it$0$29583;var it$0$29578;var it$0$29573;var it$0$29568;var bridge$29535$29600;var bridge$29534$29594;var other$29614;var id$29608;var bridge$29533$29542;var $29532$29537;var r$29529;var t0$29648;var t0$29654;var trf$29669;var trmsg$29670;var trf$29707;var trmsg$29708;var trf$29720;var trmsg$29721;var otherwise$29717;var $29694$29696;var x$29773;var x$29764;var $29748$29759;var $29749$29760;var $29750$29761;var t0$29757;var $29747$29752;var $index$29806;var $length$29801;var temp$29796;var acc$29791;var trf$29781;var trargs$29782;var op$29744;var code$29841;var code$29853;var t0$29835;var t1$29836;var trf$29858;var trmsg$29859;var codevar$29833;var f$29876;var r$29872;var f$29939;var f$29977;var v$29972;var all_strings$29890;var r$29891;var $index$30048;var $length$30043;var temp$30038;var acc$30033;var a$30022;var b$30023;var name$30017;var a$30104;var b$30105;var other$30101;var $30087$30089;var a$30136;var b$30137;var c$30138;var other$30133;var $30119$30121;var a$30184;var other$30181;var bridge$30163$30170;var $30162$30165;var a$30216;var b$30217;var other$30213;var bridge$30195$30202;var $30194$30197;var a$30240;var b$30241;var c$30242;var a$30259;var b$30260;var $index$30352;var $length$30347;var temp$30342;var acc$30337;var $index$30392;var $length$30387;var temp$30382;var acc$30377;var xs$30331;var $30278$30321;var $30277$30315;var isdecl$30279;var $index$30455;var $length$30450;var temp$30445;var acc$30440;var decls$30434;var f$30485;var r$30481;var other$30592;var $30578$30580;var a$30617;var b$30618;var other$30614;var $30600$30602;var a$30650;var b$30651;var c$30652;var d$30653;var other$30647;var $30633$30635;var a$30690;var b$30691;var c$30692;var other$30687;var $30673$30675;var t0$30730;var t0$30737;var a$30770;var b$30771;var other$30767;var $30753$30755;var other$30785;var x$30780;var attempt$30704;var v$30705;var body$30706;var x$30668;var y$30669;var body$30670;var x$30627;var y$30628;var z$30629;var body$30630;var test$30596;var body$30597;var label$30566;var body$30567;var value$30561;var value$30556;var value$30551;var label$30538;var label$30525;var value$30520;var args$30477;var vars$30429;var body$30430;var s$30424;var args$30419;var args$30273;var lhs$30254;var rhs$30255;var obj$30226;var msg$30227;var rhs$30228;var binding$30190;var value$30191;var binding$30150;var test$30114;var pos$30115;var neg$30116;var test$30073;var pos$30074;var bindings$30012;var body$30013;var args$29886;var args$29868;var f$29828;var msg$29829;var f$29730;var args$29731;var f$29679;var msg$29680;var s$29681;var f$29640;var msg$29641;var f$29619;var v$29525;var s$29512;var $29482$29506;var $29483$29507;var $29484$29508;var $29485$29509;var t0$29496;var t1$29497;var t2$29498;var t3$29499;var t4$29500;var bridge$29480$29501;var bridge$29481$29502;var t5$29503;var t6$29504;var $29479$29491;var self$29486;var it$0$29474;(it$0$29474=this);(self$29486=this);($29479$29491=expr$29470);if((($29482$29506=($29479$29491 instanceof Array))&&(((t0$29496=$29479$29491.length)),((t0$29496===2)&&($29479$29491[0]==="symbol"))))){(s$29512=$29479$29491[1]);return it$0$29474.expr(it$0$29474.mangle(s$29512),mode$29471);}else{if(($29482$29506&&((t0$29496===1)&&($29479$29491[0]==="void")))){return it$0$29474.expr("null",mode$29471);}else{if(($29482$29506&&((t0$29496===2)&&($29479$29491[0]==="value")))){(v$29525=$29479$29491[1]);(r$29529=((($29532$29537=v$29525)),function(){if((typeof($29532$29537)==="string")){(repl$29549=({"\"":"\\\"","\n":"\\n","\\":"\\\\"}));(v$29525=v$29525.replace(RegExp("((?:(?:\"|\\\\)|\n))","g"),function(m$29556){return $29019(repl$29549,m$29556);}));return (("\""+v$29525)+"\"");}else{if(($29532$29537===(void 0))){return "(void 0)";}else{if($29004(RegExp)($29532$29537)){(it$0$29568=String(v$29525));(it$0$29573=it$0$29568.slice(1,-1));(it$0$29578=it$0$29573.replace(RegExp("/","g"),"\\/"));(it$0$29583=it$0$29578.replace(RegExp("\n","g"),"\\n"));return "/".concat(it$0$29583).concat("/");}else{(bridge$29533$29542=$29532$29537);if(((((bridge$29534$29594=bridge$29533$29542)),((((bridge$29535$29600=bridge$29534$29594)),((typeof(bridge$29535$29600)==="number")||(bridge$29535$29600===true)))||(bridge$29534$29594===false)))||(bridge$29533$29542===null))){return String(v$29525);}else{if(($31089($29532$29537,"::id")&&((id$29608=$29532$29537["::id"]),id$29608))){return it$0$29474.translate(it$0$29474.register_value(v$29525,id$29608),mode$29471);}else{(other$29614=$29532$29537);throw $30834(["cannot_serialize"]).create("Cannot serialize value",({"value":v$29525}));}}}}}}()));return it$0$29474.expr(r$29529,mode$29471);}else{if(($29482$29506&&(($29484$29508=(t0$29496===3))&&(($29485$29509=($29479$29491[0]==="send"))&&(((t1$29497=$29479$29491[1])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&((t1$29497[0]==="variable")&&((t1$29497[1]==="___node")&&(((t3$29499=$29479$29491[2])),((t3$29499 instanceof Array)&&(((t4$29500=t3$29499.length)),((t4$29500===2)&&(t3$29499[0]==="value"))))))))))))))){(f$29619=t3$29499[1]);return f$29619;}else{if(($29485$29509&&(((bridge$29480$29501=$29479$29491[1])),((((bridge$29480$29501 instanceof Array)&&(((t0$29648=bridge$29480$29501.length)),((t0$29648===2)&&((bridge$29480$29501[0]==="symbol")&&(bridge$29480$29501[1]==="___js_fetch")))))||((bridge$29480$29501 instanceof Array)&&(((t0$29654=bridge$29480$29501.length)),((t0$29654===2)&&((bridge$29480$29501[0]==="variable")&&(bridge$29480$29501[1]==="___js_fetch"))))))&&(((t1$29497=$29479$29491[2])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===3)&&(t1$29497[0]==="array"))))))))){(f$29640=t1$29497[1]);(msg$29641=t1$29497[2]);(trf$29669=it$0$29474.translate(f$29640,"expr"));(trmsg$29670=it$0$29474.translate(msg$29641,"expr"));return it$0$29474.expr((((trf$29669+"[")+trmsg$29670)+"]"),mode$29471);}else{if(($29485$29509&&((f$29679=$29479$29491[1]),(((t1$29497=$29479$29491[2])),((msg$29680=t1$29497),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&(t1$29497[0]==="value"))))))))){(s$29681=t1$29497[1]);($29694$29696=null);$29694$29696;if(((typeof(s$29681)==="string")&&s$29681.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)","")))){(trf$29707=it$0$29474.translate(f$29679,"expr"));(trmsg$29708=it$0$29474.translate(["symbol",s$29681],"expr"));return it$0$29474.expr(((trf$29707+".")+trmsg$29708),mode$29471);}else{(otherwise$29717=$29694$29696);(trf$29720=it$0$29474.translate(f$29679,"expr"));(trmsg$29721=it$0$29474.translate(msg$29680,"expr"));return it$0$29474.expr((((trf$29720+"[")+trmsg$29721)+"]"),mode$29471);}}else{if(($29485$29509&&((f$29730=$29479$29491[1]),(((t1$29497=$29479$29491[2])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498>=1)&&(t1$29497[0]==="array")))))))){(args$29731=Array.prototype.slice.call(t1$29497,1));(op$29744=((($29747$29752=f$29730)),function(){if((($29748$29759=($29747$29752 instanceof Array))&&(((t0$29757=$29747$29752.length)),(($29750$29761=(t0$29757===2))&&($29747$29752[0]==="symbol"))))){(x$29764=$29747$29752[1]);return $29019(js_op_table$29077,x$29764);}else{if(($29750$29761&&($29747$29752[0]==="variable"))){(x$29773=$29747$29752[1]);return $29019(js_op_table2$29076,x$29773);}else{$29747$29752;return null;}}}()));if(op$29744){return it$0$29474.expr(it$0$29474.op(op$29744,args$29731[0],args$29731[1]),mode$29471);}else{(trf$29781=it$0$29474.translate(f$29730,"expr"));(trargs$29782=(((acc$29791=[])),(((temp$29796=args$29731)),((($length$29801=temp$29796.length)),((($index$29806=0)),function(){$29788:for(;($index$29806<$length$29801);($index$29806++)){var x$29822;var m$29814;(m$29814=temp$29796[$index$29806]);(x$29822=m$29814);acc$29791.push(it$0$29474.translate(x$29822,"expr"));}}()))),acc$29791));return it$0$29474.expr((((trf$29781+"(")+trargs$29782.join(","))+")"),mode$29471);}}else{if($29485$29509){(f$29828=$29479$29491[1]);(msg$29829=$29479$29491[2]);(t0$29835=(((code$29841="(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}})")),it$0$29474.register_raw(code$29841,"~send")));if(((t0$29835 instanceof Array)&&(((t1$29836=t0$29835.length)),((t1$29836===2)&&(t0$29835[0]==="symbol"))))){(codevar$29833=t0$29835[1]);}else{$30818((((code$29853="(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}})")),it$0$29474.register_raw(code$29853,"~send")),"/home/olivier/git/earl-grey/src/translate-js.eg",6694,6904);}(trf$29858=it$0$29474.translate(f$29828,"expr"));(trmsg$29859=it$0$29474.translate(msg$29829,"expr"));return it$0$29474.expr((((((codevar$29833+"(")+trf$29858)+",")+trmsg$29859)+")"),mode$29471);}else{if(($29482$29506&&(($29484$29508=(t0$29496>=1))&&($29479$29491[0]==="array")))){(args$29868=Array.prototype.slice.call($29479$29491,1));(r$29872=(((f$29876=function(x$29880){return it$0$29474.translate(x$29880,"expr");})),(("["+args$29868.map(f$29876).join(","))+"]")));return it$0$29474.expr(r$29872,mode$29471);}else{if(($29484$29508&&($29479$29491[0]==="object"))){(args$29886=Array.prototype.slice.call($29479$29491,1));(all_strings$29890=args$29886.every(function($29894$29896){var t0$29902;var t1$29903;var other$29933;var v$29924;var t0$29920;var $29898$29915;var ph$29899;var y$29900;(t0$29902=$29894$29896);if(((t0$29902 instanceof Array)&&(((t1$29903=t0$29902.length)),((t1$29903===3)&&(t0$29902[0]==="array"))))){(ph$29899=t0$29902[1]);(y$29900=t0$29902[2]);}else{$30818($29894$29896);}($29898$29915=ph$29899);if((($29898$29915 instanceof Array)&&(((t0$29920=$29898$29915.length)),((t0$29920===2)&&($29898$29915[0]==="value"))))){(v$29924=$29898$29915[1]);return true;}else{(other$29933=$29898$29915);return false;}}));(r$29891=function(){if(all_strings$29890){(f$29939=function($29942$29944){var t0$29949;var t1$29950;var a$29962;var b$29963;var x$29946;var y$29947;(t0$29949=$29942$29944);if(((t0$29949 instanceof Array)&&(((t1$29950=t0$29949.length)),((t1$29950===3)&&(t0$29949[0]==="array"))))){(x$29946=t0$29949[1]);(y$29947=t0$29949[2]);}else{$30818($29942$29944);}(a$29962=it$0$29474.translate(x$29946,"expr"));(b$29963=it$0$29474.translate(y$29947,"expr"));return ((a$29962+":")+b$29963);});return (("({"+args$29886.map(f$29939).join(","))+"})");}else{(v$29972=gensym$29073());(f$29977=function($29980$29982){var t0$29987;var t1$29988;var a$30000;var b$30001;var x$29984;var y$29985;(t0$29987=$29980$29982);if(((t0$29987 instanceof Array)&&(((t1$29988=t0$29987.length)),((t1$29988===3)&&(t0$29987[0]==="array"))))){(x$29984=t0$29987[1]);(y$29985=t0$29987[2]);}else{$30818($29980$29982);}(a$30000=it$0$29474.translate(x$29984,"expr"));(b$30001=it$0$29474.translate(y$29985,"expr"));return (((((v$29972+"[")+a$30000)+"]=")+b$30001)+";");});return ((((((("(function(){"+"var ")+v$29972)+"={};")+args$29886.map(f$29977).join(""))+";return ")+v$29972)+";}())");}}());return it$0$29474.expr(r$29891,mode$29471);}else{if(($29482$29506&&((t0$29496===3)&&($29479$29491[0]==="lambda")))){(bindings$30012=$29479$29491[1]);(body$30013=$29479$29491[2]);(name$30017=function(){if($29004(RegExp("^[$_a-zA-Z]*$",""))(expr$29470.name)){return (expr$29470.name+" ");}else{return "";}}());(a$30022=(((acc$30033=[])),(((temp$30038=bindings$30012)),((($length$30043=temp$30038.length)),((($index$30048=0)),function(){$30030:for(;($index$30048<$length$30043);($index$30048++)){var x$30064;var m$30056;(m$30056=temp$30038[$index$30048]);(x$30064=m$30056);acc$30033.push(it$0$29474.translate(x$30064,"expr"));}}()))),acc$30033).join(","));(b$30023=it$0$29474.body(body$30013,"return"));return it$0$29474.expr((((((("function"+name$30017)+"(")+a$30022)+"){")+b$30023)+"}"),mode$29471);}else{if(($29482$29506&&(($29484$29508=(t0$29496===4))&&(($29485$29509=($29479$29491[0]==="if"))&&((test$30073=$29479$29491[1]),((pos$30074=$29479$29491[2]),(((t1$29497=$29479$29491[3])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&((t1$29497[0]==="value")&&(t1$29497[1]===(void 0))))))))))))){($30087$30089=mode$29471);if(($30087$30089==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30101=$30087$30089);(a$30104=it$0$29474.translate(test$30073,"expr"));(b$30105=it$0$29474.translate(pos$30074,mode$29471));return (((("if("+a$30104)+"){")+b$30105)+"}");}}else{if($29485$29509){(test$30114=$29479$29491[1]);(pos$30115=$29479$29491[2]);(neg$30116=$29479$29491[3]);($30119$30121=mode$29471);if(($30119$30121==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30133=$30119$30121);(a$30136=it$0$29474.translate(test$30114,"expr"));(b$30137=it$0$29474.translate(pos$30115,mode$29471));(c$30138=it$0$29474.translate(neg$30116,mode$29471));return (((((("if("+a$30136)+"){")+b$30137)+"}else{")+c$30138)+"}");}}else{if(($29482$29506&&(($29484$29508=(t0$29496===3))&&(($29485$29509=($29479$29491[0]==="declare"))&&((binding$30150=$29479$29491[1]),(((t1$29497=$29479$29491[2])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&((t1$29497[0]==="value")&&(t1$29497[1]===(void 0)))))))))))){($30162$30165=mode$29471);(bridge$30163$30170=$30162$30165);if(((bridge$30163$30170==="expr")||(bridge$30163$30170==="return"))){throw "Invalid in expr ctx";}else{(other$30181=$30162$30165);(a$30184=it$0$29474.translate(binding$30150,"expr"));return (("var "+a$30184)+";");}}else{if($29485$29509){(binding$30190=$29479$29491[1]);(value$30191=$29479$29491[2]);($30194$30197=mode$29471);(bridge$30195$30202=$30194$30197);if(((bridge$30195$30202==="expr")||(bridge$30195$30202==="return"))){throw "Invalid in expr ctx";}else{(other$30213=$30194$30197);(a$30216=it$0$29474.translate(binding$30190,"expr"));(b$30217=it$0$29474.translate(value$30191,"expr"));return (((("var "+a$30216)+"=")+b$30217)+";");}}else{if(($29484$29508&&(($29485$29509=($29479$29491[0]==="assign"))&&(((t1$29497=$29479$29491[1])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===3)&&(t1$29497[0]==="send")))))))){(obj$30226=t1$29497[1]);(msg$30227=t1$29497[2]);(rhs$30228=$29479$29491[2]);(a$30240=it$0$29474.translate(obj$30226,"expr"));(b$30241=it$0$29474.translate(msg$30227,"expr"));(c$30242=it$0$29474.translate(rhs$30228,"expr"));return it$0$29474.expr((((((("("+a$30240)+"[")+b$30241)+"]=")+c$30242)+")"),mode$29471);}else{if($29485$29509){(lhs$30254=$29479$29491[1]);(rhs$30255=$29479$29491[2]);(a$30259=it$0$29474.translate(lhs$30254,"expr"));(b$30260=it$0$29474.translate(rhs$30255,"expr"));return it$0$29474.expr((((("("+a$30259)+"=")+b$30260)+")"),mode$29471);}else{if(($29482$29506&&((t0$29496===1)&&($29479$29491[0]==="multi")))){return "";}else{if(($29482$29506&&(($29484$29508=(t0$29496>=1))&&($29479$29491[0]==="multi")))){(args$30273=Array.prototype.slice.call($29479$29491,1));(isdecl$30279=function($30282$30284){var other$30311;var variable$30301;var value$30302;var t0$30297;var $30286$30292;var ph$30287;(ph$30287=$30282$30284);($30286$30292=ph$30287);if((($30286$30292 instanceof Array)&&(((t0$30297=$30286$30292.length)),((t0$30297===3)&&($30286$30292[0]==="declare"))))){(variable$30301=$30286$30292[1]);(value$30302=$30286$30292[2]);return true;}else{(other$30311=$30286$30292);return false;}});($30277$30315=null);$30277$30315;if((args$30273.length===1)){return it$0$29474.translate(args$30273[0],mode$29471);}else{if(((mode$29471==="expr")&&(!args$30273.some(isdecl$30279)))){(xs$30331=(((acc$30337=[])),(((temp$30342=args$30273)),((($length$30347=temp$30342.length)),((($index$30352=0)),function(){$30334:for(;($index$30352<$length$30347);($index$30352++)){var x$30368;var m$30360;(m$30360=temp$30342[$index$30352]);(x$30368=m$30360);acc$30337.push(it$0$29474.translate(x$30368,"expr"));}}()))),acc$30337));(xs$30331=(((acc$30377=[])),(((temp$30382=xs$30331)),((($length$30387=temp$30382.length)),((($index$30392=0)),function(){$30374:for(;($index$30392<$length$30387);($index$30392++)){var x$30408;var m$30400;(m$30400=temp$30382[$index$30392]);(x$30408=m$30400);if((x$30408!=="")){acc$30377.push(x$30408);}else{false;}}}()))),acc$30377));return (("("+xs$30331.join(","))+")");}else{return it$0$29474.body(expr$29470,mode$29471);}}}else{if(($29484$29508&&($29479$29491[0]==="splice"))){(args$30419=Array.prototype.slice.call($29479$29491,1));return it$0$29474.translate(["multi"].concat(args$30419),mode$29471);}else{if(($29482$29506&&((t0$29496===2)&&($29479$29491[0]==="variable")))){(s$30424=$29479$29491[1]);return it$0$29474.expr(it$0$29474.mangle(s$30424),mode$29471);}else{if(($29482$29506&&((t0$29496===3)&&($29479$29491[0]==="scope")))){(vars$30429=$29479$29491[1]);(body$30430=$29479$29491[2]);(decls$30434=(((acc$30440=[])),(((temp$30445=vars$30429)),((($length$30450=temp$30445.length)),((($index$30455=0)),function(){$30437:for(;($index$30455<$length$30450);($index$30455++)){var v$30471;var m$30463;(m$30463=temp$30445[$index$30455]);(v$30471=m$30463);acc$30440.push(["declare",v$30471,["value",(void 0)]]);}}()))),acc$30440));return it$0$29474.translate(["multi"].concat(decls$30434).concat([body$30430]),mode$29471);}else{if(($29482$29506&&((t0$29496>=1)&&($29479$29491[0]==="object2")))){(args$30477=Array.prototype.slice.call($29479$29491,1));(r$30481=(((f$30485=function($30488$30490){var t0$30495;var t1$30496;var a$30508;var b$30509;var x$30492;var y$30493;(t0$30495=$30488$30490);if(((t0$30495 instanceof Array)&&(((t1$30496=t0$30495.length)),(t1$30496===2)))){(x$30492=t0$30495[0]);(y$30493=t0$30495[1]);}else{$30818($30488$30490);}(a$30508=it$0$29474.translate(x$30492,"expr"));(b$30509=it$0$29474.translate(y$30493,"expr"));return ((a$30508+":")+b$30509);})),(("({"+args$30477.map(f$30485).join(","))+"})")));return it$0$29474.expr(r$30481,mode$29471);}else{if(($29482$29506&&((t0$29496===2)&&($29479$29491[0]==="js_new")))){(value$30520=$29479$29491[1]);return it$0$29474.expr((("(new "+it$0$29474.translate(value$30520,"expr"))+")"),mode$29471);}else{if(($29482$29506&&(($29484$29508=((t0$29496>=1)&&(t0$29496<=2)))&&(($29479$29491[0]==="js_break")&&(((t1$29497=function(){if((1>=t0$29496)){return ["value",null];}else{return $29479$29491[1];}}())),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&(t1$29497[0]==="value"))))))))){(label$30525=t1$29497[1]);if((mode$29471==="expr")){throw "Invalid break in ctx";}else{return (("break"+function(){if(label$30525){return (" "+label$30525);}else{return "";}}())+";");}}else{if(($29484$29508&&(($29479$29491[0]==="js_continue")&&(((t1$29497=function(){if((1>=t0$29496)){return ["value",null];}else{return $29479$29491[1];}}())),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&(t1$29497[0]==="value")))))))){(label$30538=t1$29497[1]);if((mode$29471==="expr")){throw "Invalid continue in ctx";}else{return (("continue"+function(){if(label$30538){return (" "+label$30538);}else{return "";}}())+";");}}else{if(($29482$29506&&(($29484$29508=(t0$29496===2))&&($29479$29491[0]==="js_return")))){(value$30551=$29479$29491[1]);if((mode$29471==="expr")){throw "Invalid return in ctx";}else{return (("return "+it$0$29474.translate(value$30551,"expr"))+";");}}else{if(($29484$29508&&($29479$29491[0]==="js_delete"))){(value$30556=$29479$29491[1]);if((mode$29471==="expr")){throw "Invalid delete in ctx";}else{return (("delete "+it$0$29474.translate(value$30556,"expr"))+";");}}else{if(($29484$29508&&($29479$29491[0]==="js_throw"))){(value$30561=$29479$29491[1]);if((mode$29471==="expr")){return (("function(){throw "+it$0$29474.translate(value$30561,"expr"))+";}()");}else{return (("throw "+it$0$29474.translate(value$30561,"expr"))+";");}}else{if(($29482$29506&&(($29484$29508=(t0$29496===3))&&(($29479$29491[0]==="js_label")&&(((t1$29497=$29479$29491[1])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===2)&&(t1$29497[0]==="value"))))))))){(label$30566=t1$29497[1]);(body$30567=$29479$29491[2]);($30578$30580=mode$29471);if(($30578$30580==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30592=$30578$30580);return ((label$30566+":")+it$0$29474.translate(body$30567,other$30592));}}else{if(($29484$29508&&($29479$29491[0]==="js_while"))){(test$30596=$29479$29491[1]);(body$30597=$29479$29491[2]);($30600$30602=mode$29471);if(($30600$30602==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30614=$30600$30602);(a$30617=it$0$29474.translate(test$30596,"expr"));(b$30618=it$0$29474.translate(body$30597,"stmt"));return (((("while("+a$30617)+"){")+b$30618)+"}");}}else{if(($29482$29506&&((t0$29496===5)&&($29479$29491[0]==="js_for")))){(x$30627=$29479$29491[1]);(y$30628=$29479$29491[2]);(z$30629=$29479$29491[3]);(body$30630=$29479$29491[4]);($30633$30635=mode$29471);if(($30633$30635==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30647=$30633$30635);(a$30650=it$0$29474.translate(x$30627,"expr"));(b$30651=it$0$29474.translate(y$30628,"expr"));(c$30652=it$0$29474.translate(z$30629,"expr"));(d$30653=it$0$29474.translate(body$30630,"stmt"));return (((((((("for("+a$30650)+";")+b$30651)+";")+c$30652)+"){")+d$30653)+"}");}}else{if(($29482$29506&&(($29484$29508=(t0$29496===4))&&($29479$29491[0]==="js_for_in")))){(x$30668=$29479$29491[1]);(y$30669=$29479$29491[2]);(body$30670=$29479$29491[3]);($30673$30675=mode$29471);if(($30673$30675==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30687=$30673$30675);(a$30690=it$0$29474.translate(x$30668,"expr"));(b$30691=it$0$29474.translate(y$30669,"expr"));(c$30692=it$0$29474.translate(body$30670,"stmt"));return (((((("for("+a$30690)+" in ")+b$30691)+"){")+c$30692)+"}");}}else{if(($29484$29508&&(($29479$29491[0]==="js_try")&&((attempt$30704=$29479$29491[1]),(((t1$29497=$29479$29491[2])),((t1$29497 instanceof Array)&&(((t2$29498=t1$29497.length)),((t2$29498===3)&&((t1$29497[0]==="lambda")&&(((t3$29499=t1$29497[1])),((t3$29499 instanceof Array)&&(((t4$29500=t3$29499.length)),((t4$29500===1)&&(((bridge$29481$29502=t3$29499[0])),((((bridge$29481$29502 instanceof Array)&&(((t0$30730=bridge$29481$29502.length)),((t0$30730===2)&&((bridge$29481$29502[0]==="symbol")&&((v$30705=bridge$29481$29502[1]),true)))))||((bridge$29481$29502 instanceof Array)&&(((t0$30737=bridge$29481$29502.length)),((t0$30737===2)&&((bridge$29481$29502[0]==="variable")&&((v$30705=bridge$29481$29502[1]),true))))))&&((body$30706=t1$29497[2]),(((t5$29503=$29479$29491[3])),((t5$29503 instanceof Array)&&(((t6$29504=t5$29503.length)),((t6$29504===1)&&(t5$29503[0]==="void"))))))))))))))))))))){($30753$30755=mode$29471);if(($30753$30755==="expr")){return it$0$29474.body(expr$29470,"expr");}else{(other$30767=$30753$30755);(a$30770=it$0$29474.translate(attempt$30704,"stmt"));(b$30771=it$0$29474.translate(body$30706,"stmt"));return (((((("try{"+a$30770)+"}catch(")+v$30705)+"){")+b$30771)+"}");}}else{if(($29482$29506&&((t0$29496===2)&&($29479$29491[0]==="raw")))){(x$30780=$29479$29491[1]);return x$30780;}else{(other$30785=$29479$29491);throw other$30785;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}});$29020(Translator$29078,$29020(((accum$30788=({})),((accum$30788["::name"]="Translator"),accum$30788)),((accum$30792=({})),((accum$30792["::egclass"]=true),accum$30792))));Translator$29078;(translate$29079=function(expr$30798,mode$30799){var tr$30802;var t$30803;(tr$30802=Translator$29078());(t$30803=tr$30802.translate(expr$30798,mode$30799));return (tr$30802.dump_store()+t$30803);});(exports["Translator"]=Translator$29078);(exports["translate"]=translate$29079);