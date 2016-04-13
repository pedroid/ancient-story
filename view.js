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

function repeat(fn) {
	if (window.requestAnimationFrame) {
	  var advance = function() {fn(); requestAnimationFrame(advance);};
	  requestAnimationFrame(advance);
	} else window.setInterval(fn, 50);
}

function html_initialize(){	
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