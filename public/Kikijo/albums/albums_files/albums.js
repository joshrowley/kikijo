// Created by iWeb 3.0.4 local-build-20121109

function createMediaStream_id1()
{return IWCreateMediaCollection("http://kikijo.com/Kikijo/albums/albums_files/rss.xml",true,2,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://kikijo.com/Kikijo/albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://kikijo.com/Kikijo/albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(268,201),new IWSize(268,38),new IWSize(329,254),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-1,1,2,199),url:'albums_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'albums_files/stroke_1.png'},{rect:new IWRect(1,-1,266,2),url:'albums_files/stroke_2.png'},{rect:new IWRect(267,-1,2,2),url:'albums_files/stroke_3.png'},{rect:new IWRect(267,1,2,199),url:'albums_files/stroke_4.png'},{rect:new IWRect(267,200,2,2),url:'albums_files/stroke_5.png'},{rect:new IWRect(1,200,266,2),url:'albums_files/stroke_6.png'},{rect:new IWRect(-1,200,2,2),url:'albums_files/stroke_7.png'}],new IWSize(268,201)),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('albums_files/albumsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
