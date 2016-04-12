var script_text;
var script_lines;
window.onload = function(){
	initialize();
    $('#info').click(function(e){show_switch();});
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

picture = []
function initialize(){
	//database
	pic_db = []
	pic_db[0] = {"file":"firefighter01.jpg", "type":"滅火"};
	pic_db[1] = {"file":"firefighter02.jpg", "type":"滅火"};
	pic_db[2] = {"file":"firefighter03.png", "type":"滅火"};
	pic_db[3] = {"file":"firefighter04.png", "type":"滅火"};
	pic_db[4] = {"file":"bath01.jpg","type":"洗澡"}
	pic_db[5] = {"file":"bath02.png","type":"洗澡"};
	pic_db[6] = {"file":"wash01.jpg","type":"洗衣"};
	pic_db[7] = {"file":"brita01.jpg","type":"讓水變乾淨"};
	pic_db[8] = {"file":"toilet01.jpg","type":"廁所"};
	pic_db[9] = {"file":"wash02.jpg","type":"洗衣"};
	pic_db[10] = {"file":"wash03.png","type":"洗衣"};
	pic_db[11] = {"file":"bath03.png","type":"洗澡"};
	pic_db[12] = {"file":"brita02.jpg","type":"讓水變乾淨"};
	pic_db[13] = {"file":"toilet02.jpg","type":"廁所"};
	pic_db[14] = {"file":"toilet03.jpg","type":"廁所"};
	pic_db[15] = {"file":"brita04.png","type":"讓水變乾淨"};
	pic_db[16] = {"file":"brita03.jpg","type":"讓水變乾淨"};
	pic_db[17] = {"file":"bath04.png","type":"洗澡"};
	pic_db[18] = {"file":"wash04.jpg","type":"洗衣"};
	pic_db[19] = {"file":"toilet04.jpg","type":"廁所"};



	table_to_picture = [];
	for(var i=0;i<20;i=i+1){
		table_to_picture[i] = i;

	}
	table_to_picture = shuffle(table_to_picture);
	for(var i=0;i<pic_db.length;i=i+1){
		picture[i] = new Picture;
		picture[i].file = pic_db[i].file;
		picture[i].type = pic_db[i].type;
		picture[i].show = false;
	}
	html_initialize();
}

//View
repeat(function(){
	if(display_t_f){
		$('#content').show();
	}else{
		$('#content').hide();
	}
	for(var i=0;i<20;i=i+1){
		var table_id = '#table_'+i+' img';
		if(picture[i].show){
			$(table_id).attr('src','db/'+pic_db[i].file);
		}else{
			$(table_id).attr('src','db/blank.png');
		}
	}
	for(var i=0;i<20;i=i+1){
		id_table = '#table_'+i+' img';
		pic_path = 'db/'+ pic_db[i].file;
		if(picture[i].is_choosen){
			picture[i].show = true;
		}
	}





})
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
function repeat(fn) {
	if (window.requestAnimationFrame) {
	  var advance = function() {fn(); requestAnimationFrame(advance);};
	  requestAnimationFrame(advance);
	} else window.setInterval(fn, 50);
}
var img_selected = tmp = Array.apply(null, Array(20)).map(function(){return false});
var num_choose = 0;
var picture_set_id=[];
function img_show_switch(id_picture){
	table_src = '#table_'+id_picture;
	console.log(id_picture);
	picture[id_picture].is_choosen = true;
	setTimeout(//wait 2000ms to proc...
		function(){
			if(pic_db[id_picture]){
				if(num_choose==0){
					console.log('id_picture:'+id_picture);
					console.log('picture['+id_picture+'] selected');
					console.log('file:'+pic_db[id_picture].file + ', type:' + pic_db[id_picture].type, ' is selected.');
					num_choose=1;
					picture_set_id[0] = id_picture;

				}else if(num_choose == 1){
					console.log('picture['+id_picture+'] selected');
					console.log('file:'+pic_db[id_picture].file + ', type:' + pic_db[id_picture].type, ' is selected.');
					picture_set_id[1] = id_picture;
					num_choose=0;
					img_is_match(picture_set_id);
				}
			}
			var all_match = inspect_complete();
			if(all_match){
			alert('complete');
	}
		}
	,2000);
}
function to_show(id_picture){

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




//model
function Picture () {
	this.file;
	this.type;
	this.match = false;
	this.is_choosen = false;
	this.show = false;
	this.got_match = function(){
		console.log(this.file+':'+this.match);
		this.match = true;
		this.is_choosen = false;
		this.show = true;
	};
	this.reset = function(){
		this.is_choosen = false;
		this.show = false;
	}
}
function html_initialize(){
	$('#info').html('hello world');
	$('#content').html('content');
	$('#picture_table').append('<table>');
	the_table = $('#picture_table table')[0];
	for(i=0;i<num_use_way;i++){
		var row = the_table.insertRow(i);
		//$('#picture_table').find('table')[0].append('<tr>');
		for(j=0;j<num_pictures_of_use_way;j++){

			var cell = row.insertCell(j)
			id_picture = i*num_pictures_of_use_way+j;
			//cell.innerHTML = "<img src="+img_src+" id='pic_" + id_picture + "' />";//
			var id_picture = table_to_picture[i*num_pictures_of_use_way+j];
			var img_src = "db/"+"blank.png";//pic_db[id_picture].file;
			if(pic_db[id_picture]){
				cell.innerHTML = "<img src='"+img_src+"' />"//pic_db[id_picture].file;
			}else{
				cell.innerHTML = "n/a";
			}

			cell.setAttribute('id', 'table_'+id_picture);
			cell.setAttribute('class', 'table');
			//$('#picture_table').append('<td>');
			//img_src = (i*num_pictures_of_use_way+j) + ".jpg";
			//$('#picture_table').append('<img src=img_src />');
			//$('#picture_table').append(i+j);
			//$('#picture_table').append('</td>');

		}

	}
	//$('#picture_table').append('</table>');

}
//control
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
