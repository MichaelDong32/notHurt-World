var Super = require('superagent')
var Cheerio = require('cheerio')

const url = "http://www.stretch-exercises.com/exercises/upper-body/index.html"

var shell = {
      "title": "",
      "time": 2,
      "instructions": [],
      "imageUrls": []
}

var newData = {
  "upperBodyExercises": [],
  "midBodyExercises": [],
  "lowerBodyExercises": []
}

console.log('this is the shell: ', shell)
console.log('this is the newData: ', newData)

Super
.get(url)
.end(function(err,res){
  if (err) {
    console.log(err)
  } else {
    var $ = Cheerio.load(res.text)
    // Adding the title
    for (var i=0; i<$('a').length ; i++){
    	if($('a')[i].attribs.name !== undefined){
    		var title = $('a')[i].children[0].data
    		title = title.split(' - ') 
    		var type = title[0].split(' ')
    		switch(type[0]) {
    			case 'Neck':
    				shell.title = title[1]
    				newData.upperBodyExercises.push(shell)
						break
					case 'Shoulder':
						shell.title = title[1]
    				newData.upperBodyExercises.push(shell)
						break
					case 'Chest':
						shell.title = title[1]
    				newData.midBodyExercises.push(shell)
						break
					case 'Abs':
						shell.title = title[1]
    				newData.midBodyExercises.push(shell)
						break
					case 'Back':
						shell.title = title[1]
    				newData.midBodyExercises.push(shell)
						break
					default:
    				console.log('Type not recognized :`(' ) //
						break
    		}
  		// console.log(newData)
			}

    }

    // var img = $('img')
    // console.log('this is the img: ', img)
  }
})



