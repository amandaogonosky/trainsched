console.log("workin");


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCo5IXJy7DBbRlROZWzV9wJRlwkovAkLWE",
    authDomain: "trainschedule-127fc.firebaseapp.com",
    databaseURL: "https://trainschedule-127fc.firebaseio.com",
    projectId: "trainschedule-127fc",
    storageBucket: "trainschedule-127fc.appspot.com",
    messagingSenderId: "157573037517"
  };

  
  firebase.initializeApp(config);

// moment().format();
var date;
var format;
var result =moment(date)
var database = firebase.database();
var tFreq = 3;

var firstTrain = "03:30";

var firstTrainConvert = moment(firstTrain, "HH:mm").subtract(1, "years");
console.log(firstTrainConvert);

var currentTrain = moment();
console.log("CURRENT TIME: " + moment(currentTrain).format("hh:mm"));


var diffTime = moment().diff(moment(firstTrainConvert), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);
{

// node modules directory

}
