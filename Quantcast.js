<!-- Quantcast Tag -->
<script type="text/javascript">
var _qevents = _qevents || [];

(function() {
var elem = document.createElement('script');
elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
})();
if (''.trim) {
	//if country match, we want categories; if not a match, we just want to report on traffic
	var geoIp = "US"; //GTM Macro for country code - two characters
	var countryList = "US|UK|AU|CA|NZ"; //list of countries we want category data on - english
	var geoCountry = countryList.indexOf(geoIp);
	if (geoCountry > -1){
		var categoryList = "{{IAB_A-L}}|{{IAB_M-Z}}"; //GTM Macro for category
		var cleanCatList = categoryList.replace(/{\{[a-zA-Z_{1}-]+}\}|^\s|\s$/g, "");
			var splitCat = cleanCatList.split("|");
			var country = geoIp;
			var scribdLabel = [];
				for (i = 0; i < splitCat.length; i++) {
					if (splitCat[i] !== ""){
					splitCat[i].trim();
						scribdLabel.push(splitCat[i].replace(" & ", "_"));
					}
				}
			var scribdCategory = scribdLabel.join(",");
			var label = scribdCategory.replace(/\s,|,\s/g,"");
			var category = label.trim();
			if(category.length > 0) {
				eval("_qevents.push({\nqacct:\"p-13DPpb-yg8ofc\",\nlabels:\"Scribd_" + country + "_Category." + category + "\"});");
			}
			else{
				eval("_qevents.push({\nqacct:\"p-13DPpb-yg8ofc\"});");
			}
	}
	else{
		eval("_qevents.push({\nqacct:\"p-13DPpb-yg8ofc\"});");
	}
}
</script>
<noscript>
<div style="display:none;">
<img src="//pixel.quantserve.com/pixel/p-13DPpb-yg8ofc.gif" border="0" height="1" width="1" alt="Quantcast"/>
</div>
</noscript>
 <!-- End Quantcast tag -->