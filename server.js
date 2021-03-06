var express = require('express');
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

con.connect(function(err) {
	if (err) throw err;
   
		 console.log("Connected!");
});


class Haiku{
	constructor(id_code,author,line_1,line_2,line_3){
		this.id_code = id_code;
		this.author = author;
		this.line_1 = line_1;
		this.line_2 = line_2;
		this.line_3 = line_3;
	}
}


app.get('/',function (req,res) {
	res.send('Homepage');
});

app.use('/test', express.static(__dirname + '/test'));

app.get('/haikus',function (req,res) {
	
		 con.query(`SELECT id,author,line_1,line_2,line_3 FROM HAIKUS ORDER BY id DESC`, function (err, result) {
			    if (err) throw err;
			    res.json(result);
		    });
		 console.log("request recieved")
	

});

app.post('/add_haiku',function(req,res){
		console.log(req.body)
		for (haiku in req.body){			
			if (err) throw err;
			    console.log("Connected!");
				con.query(`Insert INTO haikus (author,line_1,line_2,line_3) VALUES ?`,
					[haiku.author,haiku.line_1,haiku.line_2,haiku_1.line_3], function (err, result) {
				    	if (err) res.status(500).json({ error: err.message });;
					});
		}
		res.send(200)
		
});
app.post('/test',function(req,res){
	console.log(req.body)
	res.send(200)
})

app.listen(3000, function(){
	console.log('Server listening on port 3000')
})


