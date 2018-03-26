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
var database = firebase.database();

var date;
// var format;
// var result =moment(date)
var name = "";
var tFreq = 3;
var firstTrain = "03:30";
var destination = "";
var nextArrival = "";
var currentTime = moment();

// on click event for getting the user train info input

$("#submit").on("click", function(){
event.preventDefault();

destination = $("#destination").val().trim();
name = $("#train-name").val().trim();
firstTraintime = $("#firstTraintime").val().trim();
frequency = $("#frequency").val().trim();

database.ref().push({
  destination: destination,
  name: name,
  firstTraintime: firstTraintime, 
  frequency: frequency,
});
})
  
database.ref().on("child_added", function(childSnapshot)
  {
  // if (!childSnapshot) {
// return;

  // }
  console.log(childSnapshot.val().firstTraintime);
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().frequency);
});


// invoke function by itself no argument
// var firstTrainConvert = moment(firstTrain, "HH:mm").subtract(1, "years");
// console.log(firstTrainConvert);

// var currentTrain = moment();
// console.log("CURRENT TIME: " + moment(currentTrain).format("hh:mm"));

// var diffTime = moment().diff(moment(firstTrainConvert), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);
// {

// // .append(tFreq)
// // node modules directory

// }
// var tRemainder = diffTime % tFreq;
// console.log(tRemainder);

// // next train
// var tMinutesTillTrain = tFreq - tRemainder;
// // console.log("Minutes To Train: " + moment(nextArrival).format("hh:mm:");
