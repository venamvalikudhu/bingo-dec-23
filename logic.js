const questions = [
    {
        question: "who is most likely to be mistaken for a celebrity?",
        correctOption1: "Ragav",
		Votes1:5,
		correctOption2: "Swaminathan",
		Votes2:4,
		correctOption3: "Gopu - Santhana Gopalan",
		Votes3:3
    },
	{
        question: "who is most likely to become next James Bond?",
        correctOption1: "Swaminathan",
		Votes1:5,
		correctOption2: "Raghu",
		Votes2:4,
		correctOption3: "Arun",
		Votes3:3
    },
	{
        question: "who is most likely to become professional wrestler?",
        correctOption1: "Varun",
		Votes1:8,
		correctOption2: "Aditya",
		Votes2:3,
		correctOption3: "Kumar",
		Votes3:2
    },
	{
        question: "who is most likely to become internet meme?",
        correctOption1: "Raghu",
		Votes1:6,
		correctOption2: "Aditya",
		Votes2:4,
		correctOption3: "shankari",
		Votes3:4
    },
	{
        question: "who is most likely to start a heist?",
        correctOption1: "Ramanan",
		Votes1:5,
		correctOption2: "Raghu",
		Votes2:3,
		correctOption3: "Swaminathan",
		Votes3:2
    },
	{
        question: "who is most likely to be killed first if they were in a horror movie?",
        correctOption1: "Varshini",
		Votes1:3,
		correctOption2: "shankari",
		Votes2:3,
		correctOption3: "Harish",
		Votes3:3
    },
	{
        question: "who is mostly likely to lock themselves out of their own home?",
        correctOption1: "Swaminathan",
		Votes1:5,
		correctOption2: "Deepak",
		Votes2:3,
		correctOption3: "shankari",
		Votes3:2
    },
	{
        question: "who is mostly likely to go a week without a shower?",
        correctOption1: "Varshini",
		Votes1:7,
		correctOption2: "Varun",
		Votes2:4,
		correctOption3: "Harish",
		Votes3:2
    }
	
]

let shuffledQuestions = []
let questionNumber = 1 //holds the current question number
let indexNumber = 0 //will be used in displaying next question
let answerIndex = 0


function handleQuestions() { 
//function to shuffle and push 4 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 7) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

// function for displaying next question in the array to dom
//also handles displaying quiz information to dom
function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("display-question").innerHTML = currentQuestion.question;
}

// function to check if the answer is right or wrong
function handleAnswer(value) 
{
    const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question 
	
    //checking if answer entered is correct and set border colour accordingly
        if (value.toUpperCase() === currentQuestion.correctOption1.toUpperCase()) {
            document.getElementById('option1').innerText=currentQuestion.correctOption1.toUpperCase();
			document.getElementById('votes1').innerText=currentQuestion.Votes1;	
        }
		else if (value.toUpperCase() === currentQuestion.correctOption2.toUpperCase()) {
            document.getElementById('option2').innerText=currentQuestion.correctOption2.toUpperCase();
			document.getElementById('votes2').innerText=currentQuestion.Votes2;	
        }
		else if (value.toUpperCase() === currentQuestion.correctOption3.toUpperCase()) {
            document.getElementById('option3').innerText=currentQuestion.correctOption3.toUpperCase();
			document.getElementById('votes3').innerText=currentQuestion.Votes3;	
        }
		else{
			if(answerIndex === 0)
			{
			document.getElementById('user-ans1').style.display='none';
			document.getElementById('image1').style.display='inline-block';
			answerIndex++;
			}
			else if(answerIndex === 1)
			{
			document.getElementById('user-ans2').style.display='none';
			document.getElementById('image2').style.display='inline-block';
			answerIndex++;
			}
			else 
			{
			document.getElementById('user-ans4').style.display='none';
			document.getElementById('image4').style.display='inline-block';
			
			setTimeout(() => {
			document.getElementById('user-ans4').style.display='inline-block';
			document.getElementById('image4').style.display='none';
			}, 3000);
			}
		}
}

//called when the next button is called
function handleNextQuestion() 
	{
	answerIndex = 0;
	answerStatus = false;
	setTimeout(() => {
	resetOptionBackground();
	}, 1000);
    
		setTimeout(() => {
        if (indexNumber <= 7) {
			indexNumber++;
			//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber);	
        }
	}, 1000);
	}
	
function resetOptionBackground()
{
			document.getElementById('user-ans1').style.display='inline-block';
			document.getElementById('image1').style.display='none';
			
			document.getElementById('user-ans2').style.display='inline-block';
			document.getElementById('image2').style.display='none';
			
			document.getElementById('user-ans4').style.display='inline-block';
			document.getElementById('image4').style.display='none';
			
			document.getElementById('option1').innerText="*****************************************************************************************************";
			document.getElementById('votes1').innerText="*******";	
			
			document.getElementById('option2').innerText="*****************************************************************************************************";
			document.getElementById('votes2').innerText="*******";	
			
			document.getElementById('option3').innerText="*****************************************************************************************************";
			document.getElementById('votes3').innerText="*******";	
}