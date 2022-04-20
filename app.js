const image = document.getElementById('avatar');

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files)
};


async function upload(e) {
	var image = document.getElementById('output');
	var message1 = document.getElementById('message1');
	var message2 = document.getElementById('message2');
	message1.innerHTML = 'Loading Prediction Values.....';
	message2.innerHTML = '';
	image.src = URL.createObjectURL(e.target.files[0]);
	let data = new FormData();
	data.append('file', e.target.files[0])
	await fetch('http://localhost:8000/predict', {

	  method: 'POST',
	//   headers: {
	//     'Content-Type': 'multipart/form-data'
	//   },
	  body: data
	}).then((response)=>{
		return response.json();
	}).then((response)=>{
		message1.innerHTML = 'Predicted Class : '+ response.class;
		message2.innerHTML = 'Confidence : '+ response.confidence;
		console.log(response)
	})
  }
