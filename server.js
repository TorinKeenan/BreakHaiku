var express = require('express');
var syllable = require('syllable');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  insecureAuth : true,
  database: 'haikus'
});



class Haiku{
	constructor(author,line_1,line_2,line_3){
		this.author = author;
		this.line_1 = line_1;
		this.line_2 = line_2;
		this.line_3 = line_3;
	}
}
function check_haiku(haiku){
	//checks for 5/7/5 and reference to bread
	return (syllable(haiku.line_1) == 5 && syllable(haiku.line_2) == 7 && syllable(haiku.line_3) == 5 ) && 
	(haiku.line_1.tolowercase().includes('bread') || haiku.line_2.tolowercase().includes('bread') || 
		haiku.line_3.tolowercase().includes('bread'));
};

app.get('/',function (req,res) {
	res.send('Fuck You RACHEL INVEST MORE');
});

app.get('/haikus',function (req,res) {
		con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	 con.connect(function(err) {
	  if (err) console.error(err.message);
	  
	  console.log("Connected!");
	  con.query(`SELECT author,line_1,line_2,line_3 FROM HAIKUS ORDER BY id DESC`, function (err, result) {
	    if (err) throw err;
	    console.log(result);
	  });
	});
	});
});

app.post('/add_haiku',function(req,req){
	console.log(req.body)
	for (haiku in req.body){
		new_haiku = Haiku(haiku.author,haiku.line_1,haiku.line_2,haiku_1.line_3)
	
			con.connect(function(err) {
			  if (err) throw err;
			  console.log("Connected!");
			  con.query(`INESERT  * From Haikus
			  			 Order By id DESC`, function (err, result) {
			    if (err) throw err;
			    res.status() result;
			  });
	});
		
	}

});

app.listen(3000, function(){
	console.log('Server listening on port 3000')
})

