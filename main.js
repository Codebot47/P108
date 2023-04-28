function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9xCNJrG9-/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_label").innerHTML = 'I can hear - '+
      results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
      (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("
      +random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb("
      +random_number_r+","+random_number_g+","+random_number_b+")";

      img = document.getElementById('img');
     

      if (results[0].label == "Cat") {
        img.src = 'dog-01-png.png';
        
      } else if (results[0].label == "Dog") {
        img.src = 'cat-01.png';
       
      } else if (results[0].label == "Cow") {
        img.src = 'cow-01.png';
   
      } else if (results[0].label == "Monkey") {
        img.src = '—Pngtree—naughty monkey_856184.png';
      
      }else{
        img.src = 'https://media.tenor.com/ddgCZ7sdwJUAAAAM/music-listening.gif';
        

    }
  }
}