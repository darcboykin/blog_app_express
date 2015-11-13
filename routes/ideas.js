var entries = [
	{"id":1, "title":"Helping the poor", "body":"The ratio of homeless people to empty homes in the US is 2:1", "published":"11/05/2015"}
	{"id":2, "title":"Career Guidance", "body":"Urban youth should be introduced to tech as a viable career path", "published":"11/05/2015"}
	{"id":3, "title":"Operation: Health", "body":"Urban areas are heavily populated with trashy areas to eat", "published":"11/05/2015"}
	{"id":4, "title":"Adressing Police Brutality", "body":"The Police all over the United States are throwing their weight around", "published":"11/05/2015"}
	{"id":5, "title":"Beyond School", "body":"Establishments like General Assembly can lead people to viable ", "published":"11/05/2015"}
	];

exports.getIdeas = function(){
	return entries;
}

exports.getOneIdea = function(id){
	for(var i = 0; i < entries.length; i++){
		if(entries[i].id === id){

			return entries[i];
		};
	};
}