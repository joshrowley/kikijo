// Created by iWeb 3.0.4 local-build-20121109

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_0:new IWPhotoFrame([IWCreateImage('Journal_files/FormalShadow_01_1.png'),IWCreateImage('Journal_files/FormalShadow_02_1.png'),IWCreateImage('Journal_files/FormalShadow_03_1.png'),IWCreateImage('Journal_files/FormalShadow_06_1.png'),IWCreateImage('Journal_files/FormalShadow_12_1.png'),IWCreateImage('Journal_files/FormalShadow_11_1.png'),IWCreateImage('Journal_files/FormalShadow_10_1.png'),IWCreateImage('Journal_files/FormalShadow_04_1.png')],null,2,0.700000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://kikijo.com/Kikijo/Journal/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Journal_files/JournalMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
