<div id="precisionMatch" style="display: none;"></div>
<script type="text/javascript">
var categoryTop = "{{IAB_A-L}}|{{IAB_M-Z}}";
var categorySub = "{{IAB_A-L_SUB}}|{{IAB_M-Z_SUB}}";
var catTopClean = categoryTop.replace(/{\{[a-zA-Z_{1}-]+}\}|\s{2}|_|[a-zA-Z]+_$|undefined|::[a-zA-Z\s\w\&]+/g,"");
var catSubClean = categorySub.replace(/{\{[a-zA-Z_{1}-]+}\}|\s{2}|_|[a-zA-Z]+_$|undefined|[a-zA-Z\s\w\&]+::/g,"");
var catTopSub = catTopClean + "|" + catSubClean;
var catStringClean = catTopSub.replace(/[\s&\/\\]+/g,"_"); //need to clean all characters and whitespace
var catString = catStringClean.replace(/\|[_\s]+/g, "|"); //need to clean any underscores and additional whitespace
var splitCats = catString.split("|");
var categoryArray = [];
var catObj = {};
for (i = 0; i < splitCats.length; i++) {
	if(splitCats[i] !== ""){
		catObj[splitCats[i]] = i;
	}
}
cleanCatObj = [];
for(var key in catObj){
	cleanCatObj.push(key);
}
if(cleanCatObj.length > 0){
	for (x = 0; x < cleanCatObj.length; x++){
		if(cleanCatObj[x] !== ""){
		categoryArray.push("\'SC121_" + cleanCatObj[x] + "\': \'yes\'");
		}
	}
	var categoryValues = categoryArray.join(",");
	var dataLayerScript = document.createElement("script");
	document.body.appendChild(dataLayerScript);
	dataLayerScript.innerHTML="pmDataLayer = [{\'PubId\':\'PUBSC121\'," + categoryValues + "}];";
}
</script>
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W73B"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script> 
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'http://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','pmDataLayer','GTM-7TMD');</script>