System.register([],(function(n){"use strict";return{execute:function(){var e=/^\s*([\w.-]+)\s*=\s*("[^"]*"|'[^']*'|.*?)(\s+#.*)?$/,t=/\\n/g,r=/\r\n|\n|\r/,i=function(n,i){for(var l=Boolean(i&&i.debug),s=Boolean(i&&i.multiline),a={},g=n.toString().split(r),u=0;u<g.length;u++){var o=g[u],c=o.match(e);if(null!=c){var f=c[1],v=c[2]||"",h=v.length-1,b='"'===v[0]&&'"'===v[h],m="'"===v[0]&&"'"===v[h],d='"'===v[0]&&'"'!==v[h],_="'"===v[0]&&"'"!==v[h];if(s&&(d||_)){var p=d?'"':"'";for(v=v.substring(1);u++<g.length-1;){if((o=g[u])[h=o.length-1]===p){v+="\n"+o.substring(0,h);break}v+="\n"+o}}else m||b?(v=v.substring(1,h),b&&(v=v.replace(t,"\n"))):v=v.trim();a[f]=v}else if(l){var B=o.trim();B.length&&"#"!==B[0]&&log("Failed to match key and value when parsing line ${idx + 1}: ${line}")}}return a}(`VITE_NAME=vite-plugin-dotenv
`,{});n("v",Object.assign(i,{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}))}}}));
