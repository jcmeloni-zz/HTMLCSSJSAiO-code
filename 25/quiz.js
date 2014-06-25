// global variable qn is the current question number
var qn=0;

// load the questions from the XML file
function getQuestions() {
   obj=document.getElementById("question");
   obj.firstChild.nodeValue="(please wait)";
   ajaxCallback = nextQuestion;
   ajaxRequest("questions.xml");
}

// display the next question
function nextQuestion() {
   questions = ajaxreq.responseXML.getElementsByTagName("q");
   obj=document.getElementById("question");
   if (qn < questions.length) {
      q = questions[qn].firstChild.nodeValue;
      obj.firstChild.nodeValue=q;
   } else {
      obj.firstChild.nodeValue="(no more questions)";
   }
}

// check the user's answer
function checkAnswer() {
   answers = ajaxreq.responseXML.getElementsByTagName("a");
   a = answers[qn].firstChild.nodeValue;
   answerfield = document.getElementById("answer");
   if (a == answerfield.value) {
      alert("Correct!");
   }
   else {
      alert("Incorrect. The correct answer is: " + a);
   }
   qn = qn + 1;
   answerfield.value="";
   nextQuestion();
}

// Set up the event handlers for the buttons
obj=document.getElementById("start_quiz");
obj.onclick=getQuestions;
ans=document.getElementById("submit");
ans.onclick=checkAnswer; 
