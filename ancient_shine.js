var script_text;
var script_lines;
window.onload = function(){
	initialize();

	$('#table_0').click(function(e){img_show_switch(0);});
	$('#table_1').click(function(e){img_show_switch(1);});
	$('#table_2').click(function(e){img_show_switch(2);});
	$('#table_3').click(function(e){img_show_switch(3);});
	$('#table_4').click(function(e){img_show_switch(4);});
	$('#table_5').click(function(e){img_show_switch(5);});
	$('#table_6').click(function(e){img_show_switch(6);});
	$('#table_7').click(function(e){img_show_switch(7);});
	$('#table_8').click(function(e){img_show_switch(8);});
	$('#table_9').click(function(e){img_show_switch(9);});
	$('#table_10').click(function(e){img_show_switch(10);});
	$('#table_11').click(function(e){img_show_switch(11);});
	$('#table_12').click(function(e){img_show_switch(12);});
	$('#table_13').click(function(e){img_show_switch(13);});
	$('#table_14').click(function(e){img_show_switch(14);});
	$('#table_15').click(function(e){img_show_switch(15);});
	$('#table_16').click(function(e){img_show_switch(16);});
	$('#table_17').click(function(e){img_show_switch(17);});
	$('#table_18').click(function(e){img_show_switch(18);});
	$('#table_19').click(function(e){img_show_switch(19);});

}

var display_t_f=true;
function show_switch(){
		display_t_f = !display_t_f;

}


var num_use_way=5;
var num_pictures_of_use_way = 4;
var the_table;


function initialize(){
	html_initialize();
}


function inspect_complete(){
	var all_match = false;
	for (var i =0;i<20;i = i+1){
		if(picture[i].match){all_match = true;}
		else{
			all_match = false;
			break;
		}
	}
	return all_match;
}

var img_selected = tmp = Array.apply(null, Array(20)).map(function(){return false});
var num_choose = 0;
var picture_set_id=[];
var busy_checking = 0;
function img_show_switch(id_picture){
	if(picture[id_picture].match){return}
	if(busy_checking){/*console.log('system is busy')*/;return;}
	console.log('id_picture:'+id_picture+';picture['+id_picture+'] selected');	
	//console.log('file:'+pic_db[id_picture].file + ', type:' + pic_db[id_picture].type, ' is selected.');
	table_src = '#table_'+id_picture;
	//console.log(id_picture);
	picture[id_picture].is_choosen = true;

	if(num_choose==0){
		num_choose = 1;
		picture_set_id[0] = id_picture;
	}else if (num_choose == 1){
		num_choose = 2;
		picture_set_id[1] = id_picture;
	}
	
	if(num_choose==2){busy_checking=1;}	
	//console.log('num:'+num_choose);
	setTimeout(
		function(){			
			if(busy_checking){					
				num_choose=0;
				img_is_match(picture_set_id);
				busy_checking = 0;
			}

			var all_match = inspect_complete();
			if(all_match){
			alert('complete');
	}
		}
	,2500);//wait 2500ms to proc...
	
}


function img_is_match(picture_set_id){
	var is_match = (picture[picture_set_id[0]].type == picture[picture_set_id[1]].type)
	var table_id;
	if(is_match){
		console.log('match');
		picture[picture_set_id[0]].got_match();
		picture[picture_set_id[1]].got_match();
	}else{
		console.log('not match');
		picture[picture_set_id[0]].is_choosen = false;
		picture[picture_set_id[1]].is_choosen = false;
		picture[picture_set_id[0]].show = false;
		picture[picture_set_id[1]].show = false;


		//
		//picture[picture_set_id[1]].reset();
	}


}


//control

