console.log("workin");


var tFreq = 3;

var firstTrain = "03:30";

var firstTrainConvert = moment(fistTrain, "HH:mm").subtract(1, "years");
console.log(firstTrainConvert);

var currentTrain = moment();
console.log("CURRENT TIME: " + moment(currentTrain).format("hh:mm"));


var diffTime = moment().diff(moment(firstTrainConvert), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);


