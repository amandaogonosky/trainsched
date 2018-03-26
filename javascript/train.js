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


var name = "";
var frequency = "";
var firstTrain = "";
var destination = "";
var nextArrival = "";
var currentTime = moment();
// on click event for getting the user train info input on submit

$("#submit").on("click", function(event){
event.preventDefault();

destination = $("#destination").val().trim();
name = $("#train-name").val().trim();
firstTrain = $("#firstTraintime").val().trim();
frequency = $("#frequency").val().trim();

database.ref().push({
  destination: destination,
  name: name,
  firstTrain: firstTrain, 
  frequency: frequency,
});
$('#destination').val('');
$('#train-name').val('');
$('#firstTrainTime').val('');
$('#frequency').val('');
});
  
database.ref().on("child_added", function(childSnapshot){
  
      var tFreq =(childSnapshot.val().frequency);
      // var tFreqconvert = moment(tFreq,  "minutes");
      var firstTime =childSnapshot.val().firstTrain;
      
      var firstTimeconvert= moment(firstTime, "HH:mm").subtract(1, "years");
      
      var diffTime = moment().diff(moment(firstTimeconvert), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);
      console.log(tFreq);
      
      var tRemainder = diffTime %  tFreq;
        console.log("Remainder: " + tRemainder);
      
      var tMinutesTillTrain = tFreq - tRemainder;
      console.log("Minutes To Train: " + tMinutesTillTrain);
    
      var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("kk:mm");
        console.log("ARRIVAL TIME: " + nextTrain);

//   if (!childSnapshot) {
// return;
  console.log("Train time is: " + childSnapshot.val().firstTrain);
  console.log("Train name is: " + childSnapshot.val().name);
  console.log("Destination is: " + childSnapshot.val().destination);
  console.log("Frequency is: " + childSnapshot.val().frequency);

    $("#trainTable").append(`
    <tr>
        <td>${childSnapshot.val().name}</td>
        <td>${childSnapshot.val().destination}</td>
        <td>${childSnapshot.val().frequency}</td>
        <td>${nextTrain}</td>
        <td>${(tMinutesTillTrain)}</td>
    </tr>
    `);
    // / invoke function by itself no argument
   
    var currentTrain = moment();
    console.log("CURRENT TIME: " + moment(currentTrain).format("hh: mm"));
    
    // {
    // // .append(tFreq)
    // // node modules directory
    // 
  
  })
// function for handling errors
  // },function(errorObject){
  //   console.log("errors handled: " + errorObject.code);
 
