<iframe name="__bkframe" height="0" width="0" frameborder="0" src="javascript:void(0)"></iframe>
<script type="text/javascript" src="http://www.bkrtx.com/js/bk-static.js"></script>
<script type="text/javascript">
// check for 
if (''.trim){
//if country not null, pass category, extension, and language to bk in their tag; if country match but no category, nothing provided bk.
var geo = "{{Country}}";
var geoIp = geo.trim();
var countryString = "US:4072|UK:5692|AU:5694|CA:5693|DE:6228|IT:6226|FR:6224|BR:6222|ES:6230|NL:6232|MX:6234|AR:6239|RU:6237|NZ:6241|JP:6243|CL:6245";
var matchCountry = countryString.search(geoIp);	
if (matchCountry > -1 && geo !== "") {
	var countryCode = countryString.substr(matchCountry+3,4);
	var categoryTop = "{{IAB_A-L}}|{{IAB_M-Z}}";
	var categorySub = "{{IAB_A-L_SUB}}|{{IAB_M-Z_SUB}}";	
	var additionalSegments = "Extension,{{Extension}}|Language,{{Language}}";
	var cleaning = additionalSegments.replace(/{\{[a-zA-Z_{1}-]+}}|undefined/g, "NULL")
	var cleanAdditionalSegments = cleaning.replace(/,\||,\s+\|/g,",NULL|")
	var catTopClean = categoryTop.replace(/{\{[a-zA-Z_{1}-]+}\}|\s{2}|_|[a-zA-Z]+_$|undefined|::[a-zA-Z\s\w\&\/]+/g,"");
	var catSubClean = categorySub.replace(/{\{[a-zA-Z_{1}-]+}\}|\s{2}|_|[a-zA-Z]+_$|undefined|[a-zA-Z\s\w\&\/]+::/g,"");
	var catSubFinal = catSubClean.replace(/[aids\/hiv|arthritis|brain tumor|cancer|depression|diabetes|epilepsy|gerd\/acid reflux|incest\/abuse support|incontinence|psychology\/psychiatry|sexuality|thyroid disease]+/g,"");
	var catTopSub = catTopClean + "|" + catSubFinal;
	var catStringClean = catTopSub.replace(/[\s&\/\\]+/g,"_");
	var catString = catStringClean.replace(/\|[_\s]+/g, "|");
	var splitCatString = catString.split("|");
	var catObj = {};
		for (i = 0; i < splitCatString.length; i++) {
			if(splitCatString[i] !== ""){
				catObj[splitCatString[i]] = i;
			}
		}
	var cleanCatObj = [];
		for(var key in catObj){
			cleanCatObj.push(key);
		}
	var fixedCats = []
	for (i = 0; i < cleanCatObj.length; i++) {
		if(cleanCatObj[i] !== ""){
			fixedCats.push("Category," + cleanCatObj[i]);
		}
	}
	var processedCats = fixedCats.join("|");
	var cleanBKString = cleanAdditionalSegments + "|" + processedCats;
	var categoryMacro = cleanBKString.split("|");
	var segments = [];
		for (var i = 0; i < categoryMacro.length; i++) {
				var checkNull = categoryMacro[i].search("NULL")
			if (checkNull == -1 && categoryMacro[i] !== ""){
				segments.push(categoryMacro[i]);
			}
		}
	var bkTag = [];
		for (var i = 0; i < segments.length; i++){
			var cleanSegments = segments[i].replace(",", "\",\"");
			bkTag.push("bk_addPageCtx(\"" + cleanSegments + "\");");
		}
	var bkSegment = bkTag.join("\n");
		if (bkSegment !== ""){
			var myScript = document.createElement("script");
			myScript.setAttribute("type","text/javascript");
			document.body.appendChild(myScript);
			myScript.innerHTML = bkSegment + "\n"+"bk_doJSTag(" + countryCode + ", 8);\n";
		}
}
}
</script>