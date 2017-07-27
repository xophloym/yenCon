var mainArray = {
  eightBall: [],

  arrayCleaner: function() { //clears the array for the next use
    this.eightBall.pop();
  }
}

var handlers = {
  eightPointGrab: function() {     //Gets and sends all yenInputs to the mainArray.eightBall
    // This gets the element and checks its value for NaN values and sets them to zero
    var ichiOku = document.getElementById('ichiOku');
    if (isNaN(ichiOku.valueAsNumber)) ichiOku.valueAsNumber = 0;

    var senMan = document.getElementById('senMan');
    if (isNaN(senMan.valueAsNumber)) senMan.valueAsNumber = 0;

    var hyakuMan = document.getElementById('hyakuMan');
    if (isNaN(hyakuMan.valueAsNumber)) hyakuMan.valueAsNumber = 0;

    var juMan = document.getElementById('juMan');
    if (isNaN(juMan.valueAsNumber)) juMan.valueAsNumber = 0;

    var ichiMan = document.getElementById('ichiMan');
    if (isNaN(ichiMan.valueAsNumber)) ichiMan.valueAsNumber = 0;

    var sen = document.getElementById('sen');
    if (isNaN(sen.valueAsNumber)) sen.valueAsNumber = 0;

    var belowSen = document.getElementById('belowSen');
    if (isNaN(belowSen.valueAsNumber)) belowSen.valueAsNumber = 0;

    var todayRate = document.getElementById('todayRate');
    if (isNaN(todayRate.valueAsNumber)) todayRate.valueAsNumber = 0;

    // this pushes the values from the DOM into an the mainArray.eightBall Array as an object
    mainArray.eightBall.push({
      ichiOku: ichiOku.valueAsNumber,
      senMan: senMan.valueAsNumber,
      hyakuMan: hyakuMan.valueAsNumber,
      juMan: juMan.valueAsNumber,
      ichiMan: ichiMan.valueAsNumber,
      sen: sen.valueAsNumber,
      belowSen: belowSen.valueAsNumber,
      todayRate: todayRate.valueAsNumber
    });

    mainDisplay.displayAnswer();
    mainArray.arrayCleaner();

    // this clears out the aquired values so the app can be run again with new values
    ichiOku.value = '';
    senMan.value = '';
    hyakuMan.value = '';
    juMan.value = '';
    ichiMan.value = '';
    sen.value = '';
    belowSen.value = '';
    todayRate.value = '';
  },

  buttonRemove: function(){
    var buttonPlace = document.getElementById('buttonPlace');
    buttonPlace.innerHTML = '';
  }
}

var mathBot = {
  centralProcessor: function() {
    // this computes the array values to their true value
    var ichiOkuTotal = mainArray.eightBall[0].ichiOku * 100000000;
    var senManTotal = mainArray.eightBall[0].senMan * 10000000;
    var hyakuManTotal = mainArray.eightBall[0].hyakuMan * 1000000;
    var juManTotal = mainArray.eightBall[0].juMan * 100000;
    var ichiManTotal = mainArray.eightBall[0].ichiMan * 10000;
    var senTotal = mainArray.eightBall[0].sen * 1000;
    var belowSenTotal = mainArray.eightBall[0].belowSen;
    var todayRateTotal = mainArray.eightBall[0].todayRate;
    // finishes totaling the values and multiplies this with the rate entered
    var trueValueTotal = ichiOkuTotal + senManTotal + hyakuManTotal + juManTotal + ichiManTotal + senTotal + belowSenTotal;
    var rateTotal = trueValueTotal * todayRateTotal;
    return rateTotal;
  }
}

var mainDisplay = {
  displayAnswer: function() {
    var buttonPlace = document.getElementById('buttonPlace');
    buttonPlace.innerHTML = '';
    var answer = document.createElement('button');
    answer.textContent = mathBot.centralProcessor();
    answer.id = "answerId";
    answer.onclick = handlers.buttonRemove;
    var message = document.createElement('p');
    message.textContent = 'Click here to delete!';
    message.id = "messageId";
    answer.appendChild(message);
    buttonPlace.appendChild(answer);
  }
}
