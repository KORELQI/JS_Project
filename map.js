//地图热区屏幕适配算法
function kq_map_area(){
	var kq_str = "";//定义接受数据的字符串
	var kq_data = [];//定义接受数据的数组
	var kq_size_x = $("#kq_map").width()/1070; //定义X轴变化量
	var kq_size_y = $("#kq_map").height()/796; //定义Y轴变化量
	
	$("#MapData").find("area").each(function(e){//遍例AREA元素
		kq_str = $("#MapData area").eq(e).attr("coords");//取作标数据
		kq_data = kq_str.split(",");//截取作标数据
		for(i=0;i<kq_data.length;i++){//遍例数据
			if(i%2 == 0){//如果是偶数位置
				kq_data[i] = kq_data[i] * kq_size_x;//将X轴变化量重新赋值
			}else{//如果是奇数位置
				kq_data[i] = kq_data[i] * kq_size_y;//将Y轴变化量重新赋值
			}
		}
		$("#MapData area").eq(e).attr("coords",kq_data);//回填正确的作标数据到地图
	});
}
