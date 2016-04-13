	pic_db = []
	pic_db[0] = {"file":"firefighter01.jpg", "type":"firefighter"};
	pic_db[1] = {"file":"firefighter02.jpg", "type":"firefighter"};
	pic_db[2] = {"file":"firefighter03.png", "type":"firefighter"};
	pic_db[3] = {"file":"firefighter04.png", "type":"firefighter"};
	pic_db[4] = {"file":"bath01.jpg","type":"bath"}
	pic_db[5] = {"file":"bath02.png","type":"bath"};
	pic_db[6] = {"file":"wash01.jpg","type":"wash"};
	pic_db[7] = {"file":"brita01.jpg","type":"brita"};
	pic_db[8] = {"file":"toilet01.jpg","type":"toilet"};
	pic_db[9] = {"file":"wash02.jpg","type":"wash"};
	pic_db[10] = {"file":"wash03.png","type":"wash"};
	pic_db[11] = {"file":"bath03.png","type":"bath"};
	pic_db[12] = {"file":"brita02.jpg","type":"brita"};
	pic_db[13] = {"file":"toilet02.jpg","type":"toilet"};
	pic_db[14] = {"file":"toilet03.jpg","type":"toilet"};
	pic_db[15] = {"file":"brita04.png","type":"brita"};
	pic_db[16] = {"file":"brita03.jpg","type":"brita"};
	pic_db[17] = {"file":"bath04.png","type":"bath"};
	pic_db[18] = {"file":"wash04.jpg","type":"wash"};
	pic_db[19] = {"file":"toilet04.jpg","type":"toilet"};



	table_to_picture = [];
	for(var i=0;i<20;i=i+1){
		table_to_picture[i] = i;

	}
	table_to_picture = shuffle(table_to_picture);
	picture = []
	for(var i=0;i<pic_db.length;i=i+1){
		picture[i] = new Picture;
		picture[i].file = pic_db[i].file;
		picture[i].type = pic_db[i].type;
		picture[i].show = false;
	}
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

function Picture () {
	this.file;
	this.type;
	this.match = false;
	this.is_choosen = false;
	this.show = false;
	this.got_match = function(){
		//console.log(this.file+':'+this.match);
		this.match = true;
		this.is_choosen = false;
		this.show = true;
	};
	this.reset = function(){
		this.is_choosen = false;
		this.show = false;
	}
}