/*
This is a script that 'improves' the huffduffer bookmarklet for the micro.blog discover page.

It is used as a bookmarklet
If used on any page other than https://micro.blog/discover/podcasts 
it will act like the huffduffer bookmarklet

If used on the micro.blog podcast discover page it adds a wee Ⓗ after the timestamp. Clicking on these Ⓗs will open the huffduffer popup with the linked page as the target.

No error checking as I don't know how

This would be the link that goes in a bookmarklet. 
javascript:(function()%7Bdocument.body.appendChild(document.createElement('script')).src='https://johnj.info/mbhd.js';%7D)();
*/

console.log("mbhd");

var runthis =function(){
	
	$('.post_time a').after(function(){
		var u=encodeURIComponent($(this).attr('href'));
		return '<span style="cursor:pointer" onclick="huffdufferclick(\''+u+'\');"> &#9405;<span>';
	
	});
}

if (location.href=='https://micro.blog/discover/podcasts'){
runthis();
}else{
	console.log(encodeURIComponent(location.href));
	 var w=window.open('https://huffduffer.com/add?popup=true&page='+encodeURIComponent(location.href),'huffduff','scrollbars=1,status=0,resizable=1,location=0,toolbar=0,width=360,height=480');
console.log("w"+w);
}


var huffdufferclick=function(u){

	window.open('https://huffduffer.com/add?popup=true&page='+u,'huffduff','scrollbars=1,status=0,resizable=1,location=0,toolbar=0,width=360,height=480');

}
 



 
