$(document).ready(function(){
	var v1 = $('#zhiyuanyi').val();
	var v2 = $('#zhiyuaner').val();
	var v3 = $('#zhiyuansan').val();
	$('#zhiyuanyi').change(function(){
		v1 = $('#zhiyuanyi').val();
		console.log(v1);
		if (v1 == '校团委') {
			$('#zhiyuanyi2').empty();
			$('#zhiyuanyi2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuanyi2').append("<option value='实践部'>实践部</option>");
			$('#zhiyuanyi2').append("<option value='文化事业部'>文化事业部</option>");
			$('#zhiyuanyi2').append("<option value='网络与新媒体部'>网络与新媒体部</option>");
		}
		else if(v1 == '校学生会'){
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='媒体部'>媒体部</option>");
			$('#zhiyuanyi2').append("<option value='学习实践部'>学习实践部</option>");
			$('#zhiyuanyi2').append("<option value='文艺部'>文艺部</option>");
			$('#zhiyuanyi2').append("<option value='网络推广部'>网络推广部</option>");
			$('#zhiyuanyi2').append("<option value='体育部'>体育部</option>");
			$('#zhiyuanyi2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuanyi2').append("<option value='生活权益部'>生活权益部</option>");
			$('#zhiyuanyi2').append("<option value='民族部'>民族部</option>");
			$('#zhiyuanyi2').append("<option value='技术部'>技术部</option>");
		}
		else if(v1 == '社团联合会'){
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuanyi2').append("<option value='公益学术部'>公益学术部</option>");
			$('#zhiyuanyi2').append("<option value='艺术体育部'>艺术体育部</option>");
			$('#zhiyuanyi2').append("<option value='网络新媒体部'>网络新媒体部</option>");
			$('#zhiyuanyi2').append("<option value='信息出版部'>信息出版部</option>");
			$('#zhiyuanyi2').append("<option value='外联部'>外联部</option>");
		}
		else if(v1 == '青年志愿者协会'){
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='牵手计划团'>牵手计划团</option>");
			$('#zhiyuanyi2').append("<option value='手语团'>手语团</option>");
			$('#zhiyuanyi2').append("<option value='阳光公益团'>阳光公益团</option>");
			$('#zhiyuanyi2').append("<option value='秘书企划部'>秘书企划部</option>");
			$('#zhiyuanyi2').append("<option value='校园行动团'>校园行动团</option>");
			$('#zhiyuanyi2').append("<option value='关爱之家团'>关爱之家团</option>");
		}
		else if (v1 == '传媒红会') {
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='爱心部'>爱心部</option>");
			$('#zhiyuanyi2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuanyi2').append("<option value='同伴部'>同伴部</option>");
			$('#zhiyuanyi2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='急救部'>急救部</option>");
		}
		else if (v1 == '校研究生会') {
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuanyi2').append("<option value='学术实践部'>学术实践部</option>");
			$('#zhiyuanyi2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuanyi2').append("<option value='期刊编辑部'>期刊编辑部</option>");
			$('#zhiyuanyi2').append("<option value='宣传推广部'>宣传推广部</option>");
			$('#zhiyuanyi2').append("<option value='文体部'>文体部</option>");
			$('#zhiyuanyi2').append("<option value='文体部（艺术团）'>文体部（艺术团）</option>");
		}
		else if (v1 == '《传媒青年》杂志社') {
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='美编部'>美编部</option>");
			$('#zhiyuanyi2').append("<option value='编辑中心'>编辑中心</option>");
		}
		else if (v1 == '校广播台') {
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='新闻组'>新闻组</option>");
			$('#zhiyuanyi2').append("<option value='音乐即时听'>音乐即时听节目组</option>");
			$('#zhiyuanyi2').append("<option value='阳光不休假'>阳光不休假节目组</option>");
			$('#zhiyuanyi2').append("<option value='体育大看台'>体育大看台节目组</option>");
			$('#zhiyuanyi2').append("<option value='有事大家谈'>有事大家谈节目组</option>");
			$('#zhiyuanyi2').append("<option value='魅力第六天'>魅力第六天节目组</option>");
			$('#zhiyuanyi2').append("<option value='ICQ Station'>ICQ Station节目组</option>");
			$('#zhiyuanyi2').append("<option value='生活MIX'>生活MIX节目组</option>");
			$('#zhiyuanyi2').append("<option value='专题组'>专题组</option>");
			$('#zhiyuanyi2').append("<option value='非常点播'>非常点播节目组</option>");
			$('#zhiyuanyi2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuanyi2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuanyi2').append("<option value='活动部'>活动部</option>");
			$('#zhiyuanyi2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuanyi2').append("<option value='台宣部（图文、视频）'>台宣部（图文、视频）</option>");
			
			
		}
		else if (v1 == '校礼仪队') {
			$("#zhiyuanyi2").empty();
			$('#zhiyuanyi2').append("<option value='礼仪部'>礼仪部</option>");
			$('#zhiyuanyi2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuanyi2').append("<option value='公关部'>公关部</option>");
			$('#zhiyuanyi2').append("<option value='行政部'>行政部</option>");
		}
	});
$('#zhiyuaner').change(function(){
		v2 = $('#zhiyuaner').val();
		console.log(v2);
		if (v2 == '校团委') {
			$('#zhiyuaner2').empty();
			$('#zhiyuaner2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuaner2').append("<option value='实践部'>实践部</option>");
			$('#zhiyuaner2').append("<option value='文化事业部'>文化事业部</option>");
			$('#zhiyuaner2').append("<option value='网络与新媒体部'>网络与新媒体部</option>");
		}
		else if(v2 == '校学生会'){
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='媒体部'>媒体部</option>");
			$('#zhiyuaner2').append("<option value='学习实践部'>学习实践部</option>");
			$('#zhiyuaner2').append("<option value='文艺部'>文艺部</option>");
			$('#zhiyuaner2').append("<option value='网络推广部'>网络推广部</option>");
			$('#zhiyuaner2').append("<option value='体育部'>体育部</option>");
			$('#zhiyuaner2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuaner2').append("<option value='生活权益部'>生活权益部</option>");
			$('#zhiyuaner2').append("<option value='民族部'>民族部</option>");
			$('#zhiyuaner2').append("<option value='技术部'>技术部</option>");
		}
		else if(v2 == '社团联合会'){
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuaner2').append("<option value='公益学术部'>公益学术部</option>");
			$('#zhiyuaner2').append("<option value='艺术体育部'>艺术体育部</option>");
			$('#zhiyuaner2').append("<option value='网络新媒体部'>网络新媒体部</option>");
			$('#zhiyuaner2').append("<option value='信息出版部'>信息出版部</option>");
			$('#zhiyuaner2').append("<option value='外联部'>外联部</option>");
		}
		else if(v2 == '青年志愿者协会'){
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='牵手计划团'>牵手计划团</option>");
			$('#zhiyuaner2').append("<option value='手语团'>手语团</option>");
			$('#zhiyuaner2').append("<option value='阳光公益团'>阳光公益团</option>");
			$('#zhiyuaner2').append("<option value='秘书企划部'>秘书企划部</option>");
			$('#zhiyuaner2').append("<option value='校园行动团'>校园行动团</option>");
			$('#zhiyuaner2').append("<option value='关爱之家团'>关爱之家团</option>");
		}
		else if (v2 == '传媒红会') {
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='爱心部'>爱心部</option>");
			$('#zhiyuaner2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuaner2').append("<option value='同伴部'>同伴部</option>");
			$('#zhiyuaner2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='急救部'>急救部</option>");
		}
		else if (v2 == '校研究生会') {
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuaner2').append("<option value='学术实践部'>学术实践部</option>");
			$('#zhiyuaner2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuaner2').append("<option value='期刊编辑部'>期刊编辑部</option>");
			$('#zhiyuaner2').append("<option value='宣传推广部'>宣传推广部</option>");
			$('#zhiyuaner2').append("<option value='文体部'>文体部</option>");
			$('#zhiyuaner2').append("<option value='文体部（艺术团）'>文体部（艺术团）</option>");
		}
		else if (v2 == '《传媒青年》杂志社') {
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='美编部'>美编部</option>");
			$('#zhiyuaner2').append("<option value='编辑中心'>编辑中心</option>");
		}
		else if (v2 == '校广播台') {
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='新闻组'>新闻组</option>");
			$('#zhiyuaner2').append("<option value='音乐即时听'>音乐即时听节目组</option>");
			$('#zhiyuaner2').append("<option value='阳光不休假'>阳光不休假节目组</option>");
			$('#zhiyuaner2').append("<option value='体育大看台'>体育大看台节目组</option>");
			$('#zhiyuaner2').append("<option value='有事大家谈'>有事大家谈节目组</option>");
			$('#zhiyuaner2').append("<option value='魅力第六天'>魅力第六天节目组</option>");
			$('#zhiyuaner2').append("<option value='ICQ Station'>ICQ Station节目组</option>");
			$('#zhiyuaner2').append("<option value='生活MIX'>生活MIX节目组</option>");
			$('#zhiyuaner2').append("<option value='专题组'>专题组</option>");
			$('#zhiyuaner2').append("<option value='非常点播'>非常点播节目组</option>");
			$('#zhiyuaner2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuaner2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuaner2').append("<option value='活动部'>活动部</option>");
			$('#zhiyuaner2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuaner2').append("<option value='台宣部（图文、视频节目组）'>台宣部（图文、视频）</option>");
			
			
		}
		else if (v2 == '校礼仪队') {
			$("#zhiyuaner2").empty();
			$('#zhiyuaner2').append("<option value='礼仪部'>礼仪部</option>");
			$('#zhiyuaner2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuaner2').append("<option value='公关部'>公关部</option>");
			$('#zhiyuaner2').append("<option value='行政部'>行政部</option>");
		}
	});
$('#zhiyuansan').change(function(){
		v3 = $('#zhiyuansan').val();
		console.log(v3);
		if (v3 == '校团委') {
			$('#zhiyuansan2').empty();
			$('#zhiyuansan2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuansan2').append("<option value='实践部'>实践部</option>");
			$('#zhiyuansan2').append("<option value='文化事业部'>文化事业部</option>");
			$('#zhiyuansan2').append("<option value='网络与新媒体部'>网络与新媒体部</option>");
		}
		else if(v3 == '校学生会'){
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='媒体部'>媒体部</option>");
			$('#zhiyuansan2').append("<option value='学习实践部'>学习实践部</option>");
			$('#zhiyuansan2').append("<option value='文艺部'>文艺部</option>");
			$('#zhiyuansan2').append("<option value='网络推广部'>网络推广部</option>");
			$('#zhiyuansan2').append("<option value='体育部'>体育部</option>");
			$('#zhiyuansan2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuansan2').append("<option value='生活权益部'>生活权益部</option>");
			$('#zhiyuansan2').append("<option value='民族部'>民族部</option>");
			$('#zhiyuansan2').append("<option value='技术部'>技术部</option>");
		}
		else if(v3 == '社团联合会'){
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='组织部'>组织部</option>");
			$('#zhiyuansan2').append("<option value='公益学术部'>公益学术部</option>");
			$('#zhiyuansan2').append("<option value='艺术体育部'>艺术体育部</option>");
			$('#zhiyuansan2').append("<option value='网络新媒体部'>网络新媒体部</option>");
			$('#zhiyuansan2').append("<option value='信息出版部'>信息出版部</option>");
			$('#zhiyuansan2').append("<option value='外联部'>外联部</option>");
		}
		else if(v3 == '青年志愿者协会'){
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='牵手计划团'>牵手计划团</option>");
			$('#zhiyuansan2').append("<option value='手语团'>手语团</option>");
			$('#zhiyuansan2').append("<option value='阳光公益团'>阳光公益团</option>");
			$('#zhiyuansan2').append("<option value='秘书企划部'>秘书企划部</option>");
			$('#zhiyuansan2').append("<option value='校园行动团'>校园行动团</option>");
			$('#zhiyuansan2').append("<option value='关爱之家团'>关爱之家团</option>");
		}
		else if (v3 == '传媒红会') {
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='爱心部'>爱心部</option>");
			$('#zhiyuansan2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuansan2').append("<option value='同伴部'>同伴部</option>");
			$('#zhiyuansan2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='急救部'>急救部</option>");
		}
		else if (v3 == '校研究生会') {
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='办公室'>办公室</option>");
			$('#zhiyuansan2').append("<option value='学术实践部'>学术实践部</option>");
			$('#zhiyuansan2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuansan2').append("<option value='期刊编辑部'>期刊编辑部</option>");
			$('#zhiyuansan2').append("<option value='宣传推广部'>宣传推广部</option>");
			$('#zhiyuansan2').append("<option value='文体部'>文体部</option>");
			$('#zhiyuansan2').append("<option value='文体部（艺术团）'>文体部（艺术团）</option>");
		}
		else if (v3 == '《传媒青年》杂志社') {
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='美编部'>美编部</option>");
			$('#zhiyuansan2').append("<option value='编辑中心'>编辑中心</option>");
		}
		else if (v3 == '校广播台') {
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='新闻组'>新闻组</option>");			
			$('#zhiyuansan2').append("<option value='音乐即时听'>音乐即时听节目组</option>");
			$('#zhiyuansan2').append("<option value='阳光不休假'>阳光不休假节目组</option>");
			$('#zhiyuansan2').append("<option value='体育大看台'>体育大看台节目组</option>");
			$('#zhiyuansan2').append("<option value='有事大家谈'>有事大家谈节目组</option>");
			$('#zhiyuansan2').append("<option value='魅力第六天'>魅力第六天节目组</option>");
			$('#zhiyuansan2').append("<option value='ICQ Station'>ICQ Station节目组</option>");
			$('#zhiyuansan2').append("<option value='生活MIX节目组'>生活MIX节目组</option>");
			$('#zhiyuansan2').append("<option value='专题组'>专题组</option>");
			$('#zhiyuansan2').append("<option value='非常点播'>非常点播节目组</option>");
			$('#zhiyuansan2').append("<option value='行政部'>行政部</option>");
			$('#zhiyuansan2').append("<option value='外联部'>外联部</option>");
			$('#zhiyuansan2').append("<option value='活动部'>活动部</option>");
			$('#zhiyuansan2').append("<option value='新媒体部'>新媒体部</option>");
			$('#zhiyuansan2').append("<option value='台宣部（图文、视频）'>台宣部（图文、视频）</option>");
			
			
		}
		else if (v3 == '校礼仪队') {
			$("#zhiyuansan2").empty();
			$('#zhiyuansan2').append("<option value='礼仪部'>礼仪部</option>");
			$('#zhiyuansan2').append("<option value='宣传部'>宣传部</option>");
			$('#zhiyuansan2').append("<option value='公关部'>公关部</option>");
			$('#zhiyuansan2').append("<option value='行政部'>行政部</option>");
		}
	});
})