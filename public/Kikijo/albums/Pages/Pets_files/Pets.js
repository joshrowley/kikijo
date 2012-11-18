// Created by iWeb 3.0.4 local-build-20121109

function createMediaStream_id1()
{return IWCreatePhotocast("http://kikijo.com/Kikijo/albums/Pages/Pets_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://kikijo.com/Kikijo/albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://kikijo.com/Kikijo/albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(181,181),new IWSize(181,30),new IWSize(217,226),27,27,0,new IWSize(18,19)),new IWPhotoFrame([IWCreateImage('Pets_files/Modern_C_TL.png'),IWCreateImage('Pets_files/Modern_S_T.png'),IWCreateImage('Pets_files/Modern_C_TR.png'),IWCreateImage('Pets_files/Modern_S_R.png'),IWCreateImage('Pets_files/Modern_C_BR.png'),IWCreateImage('Pets_files/Modern_S_B.png'),IWCreateImage('Pets_files/Modern_C_BL.png'),IWCreateImage('Pets_files/Modern_S_L.png')],null,2,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Pets_files/PetsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
