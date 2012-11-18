// Created by iWeb 3.0.4 local-build-20121109

function createMediaStream_id2()
{return IWCreatePhotocast("http://kikijo.com/Kikijo/albums/Pages/Portraits_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://kikijo.com/Kikijo/albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://kikijo.com/Kikijo/albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(6,new IWSize(99,99),new IWSize(99,30),new IWSize(119,144),27,27,0,new IWSize(10,10)),new IWPhotoFrame([IWCreateImage('Portraits_files/Modern_C_TL.png'),IWCreateImage('Portraits_files/Modern_S_T.png'),IWCreateImage('Portraits_files/Modern_C_TR.png'),IWCreateImage('Portraits_files/Modern_S_R.png'),IWCreateImage('Portraits_files/Modern_C_BR.png'),IWCreateImage('Portraits_files/Modern_S_B.png'),IWCreateImage('Portraits_files/Modern_C_BL.png'),IWCreateImage('Portraits_files/Modern_S_L.png')],null,2,0.250000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Portraits_files/PortraitsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
