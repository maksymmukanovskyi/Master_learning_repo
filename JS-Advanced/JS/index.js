"use strict";


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should
 include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data
         structure here, array, object, etc.)
c) correct answer (I would use a number for this);

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible 
answers (each question should have a number) (Hint: write a method for the Question 
        objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should
 input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct
 ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So 
make sure that all your code is private and doesn't interfere with the other programmers
 code (Hint: we learned a special technique to do exactly that).
*/


// =======================LITTLE QUESTIONNAIRE FOR KATYA==========================

(function(){
        let form, selectedObj;

        let questionsAndAnswers = [
                {
                question: 'How old Kateryna is? (1/10)',
                answers: ['I don\'t know', '26', '24'],
                correct: 1,
                },
                {
                question: 'When Kateryna was born?(2/10)',
                answers: ['June 5th in Nizhyn', 'April 26 in Chernobyl', 
                'Under process...)'] ,
                correct: 0,
                },
                {
                question: 'What Kateryna\'s address is?(3/10)',
                answers: ['Halytska 28, Kyiv', 'Halytska 23, San Francisco', 
                'Halytska 15, Zhmerynka'],
                correct: 0,
                },
                {
                question: 'Favourite Katya\'s city?(4/10)',
                answers: ['Zhmerynka', 'Kozyaryn', 'Irpin'],
                correct: 0,

                },
                {
                question: 'Name of Katya\'s boifriend?(5/10)',
                answers: ['Valdemart', 'Muhamed', 'Maksushka'],
                correct: 1,

                },
                {
                question: 'Where Katya works?(6/10)',
                answers: ['Fora', 'Fura', 'Andriivska Tserkva'],
                correct: 2,

                },
                {
                question: 'Katya\'s biggest advantage?(7/10)',
                answers: ['She is farting a lot', 'She is very inteligent', 'Coock well'],
                correct: 1,

                },
                {
                question: 'What time Katrusya go to bed?(8/10)',
                answers: ['23:30', 'Midnight', 'When she drink Farmatsetron'],
                correct: 2,
        
                },
                {
                question: 'Katya\'s favourite sport?(9/10)',
                answers: ['Hiking', 'Dziu Dzitsu', 'Make Maksym upset'],
                correct: 2,
                
                },
                {
                question: 'Katya\'s favourite occupation?(10/10)',
                answers: ['Programmer', 'Dietologist', 'Project Manager'],
                correct: 2,
                        
                },
                {
                question: 'Thank You for your time Kotjun)!',
                answers: [],
                correct: '',
        
                }
        ];
        function Question(question, answers, correctAnswer){
                this.question = question;
                this.answers = answers;
                this.currectAnswer = correctAnswer;
        };
        let questions = [];
        questionsAndAnswers.map(el =>{
                questions.push(
                new Question(
                el.question,
                el.answers,
                el.correct,
                ))
        })

        function createMarkup(obj){
        let questionMarkup = `<h1>${obj.question}</h1>`;

        let markup = [questionMarkup];
        obj.answers.map(function(el){
        markup.push(`<input type="checkbox" class="checked" name="schools" /><label class="q-texts">${el}</label><br>`)
        })
        return markup;
        }

        let prevBtn = document.querySelector('.previous');
        let nextBtn = document.querySelector('.next');
        let randomBtn = document.querySelector('.random');
        form = document.querySelector('.form');
        nextBtn.addEventListener('click', nextClickHandler);
        randomBtn.addEventListener('click', randomClickHandler);

        function generateMarkup(indx){
        selectedObj = indx;
        form = document.querySelector('.form');
        let arrMarkup = createMarkup(indx);
        let stringified = arrMarkup.reduce((acc,el) => acc + el, '');
        form.innerHTML = stringified;
        }
        generateMarkup(questions[0]);
        form.addEventListener('click', checkAnswer);
        let totalScore = 0;

        function checkAnswer(e){
                let typeName = e.target.type;
                let nodName = e.target.nodeName;
                let inputs = document.querySelectorAll('input');
                let converted = Array.from(inputs);
                   function selection(arr){
                   let localArr = [];
                   for(let i = 0; i < arr.length; i++){
                        if(nodName == 'INPUT'){
                                 if(arr[i].checked){
                                   localArr.push(arr[i])
                           }else{
                                   arr[i].disabled = true;
                                  
                           }
                        }
                   } 
                   return localArr;
                   }
                   let result = selection(converted);
                   let checked = result.map(el => el.nextSibling.textContent);
                 let message = document.querySelector('.message');
                if(typeName !== 'checkbox') return;
                
                   if(selectedObj.answers.indexOf(...checked) === selectedObj.currectAnswer){
                           totalScore += 1
                           message.textContent = 'CORRECT';
                           message.style.color = 'green';
                           document.querySelector('.total').textContent = `Your total of correct answers is: ${totalScore}`;
                           console.log(`total${totalScore}`)            
                           form.removeEventListener('click', checkAnswer);
                   }else{
                           message.textContent = 'WRONG';
                           message.style.color = 'red';
                           form.removeEventListener('click', checkAnswer);
                   }
           }

        let  currentIndexOfElement = 0;
               
        function nextClickHandler(e){
                e.preventDefault();
                if(e.target.nodeName !== 'BUTTON') return;

                function next(arr){
                        if(arr.length -1 >= currentIndexOfElement && currentIndexOfElement >= 0){
                        currentIndexOfElement += 1
                        let result = arr[currentIndexOfElement];
                        return result;
                }
                }
                if(currentIndexOfElement === questions.length - 3){
                        document.querySelector('.next').textContent = 'FINISH';
                        generateMarkup(next(questions));
                }else if(currentIndexOfElement >= questions.length - 3){
                        document.querySelector('.previous').style.display = 'none';
                        document.querySelector('.next').style.display = 'none';
                        document.querySelector('.random').style.display = 'none';
                        document.querySelector('.message').style.display = 'none';
                        document.querySelector('.total').style.display = 'block';
                        document.querySelector('.source').style.display = 'block';
                        generateMarkup(next(questions));
                }else if(currentIndexOfElement < questions.length){
                        generateMarkup(next(questions));
                        document.querySelector('.title').textContent = '..................Ho-ho-ho, wish you best of luck Dear!...................'
                        document.querySelector('.title').style.color = 'rgb(245, 223, 223)';
                        document.querySelector('.next').textContent = 'NEXT';
                        prevBtn.addEventListener('click', prevClickHandler);
                        document.querySelector('.message').style.color = 'rgb(90, 90, 88)';
                }
        form.addEventListener('click', checkAnswer);
        document.querySelector('.message').textContent = 'ANSWER';
        console.log(currentIndexOfElement);

        }

        function prevClickHandler(e){
                e.preventDefault();
                if(e.target.nodeName !== 'BUTTON') return;
                function prev(arr){
                        let result = arr[currentIndexOfElement-1];
                        if(currentIndexOfElement >= 0 ){
                                currentIndexOfElement -= 1
                                return result
                        }
                }
                if(currentIndexOfElement > 1){
                generateMarkup(prev(questions));
                document.querySelector('.next').textContent = 'NEXT';
                document.querySelector('.message').style.color = 'rgb(90, 90, 88)';
        }else if(currentIndexOfElement === 1){
                prevBtn.removeEventListener('click', prevClickHandler);
                generateMarkup(prev(questions));
        }
                form.addEventListener('click', checkAnswer);
        document.querySelector('.message').textContent = 'ANSWER';
        console.log(currentIndexOfElement);
        }

        function randomClickHandler(e){
                e.preventDefault();
                if(e.target.nodeName !== 'BUTTON') return;
                function pickRandomQuestion(data){
                        currentIndexOfElement = Math.round(Math.random() * (data.length - 2));
                        return data[currentIndexOfElement];
                }
                document.querySelector('.message').style.color = 'rgb(90, 90, 88)';
                document.querySelector('.title').textContent = '..................Ho-ho-ho, wish you best of luck Dear!...................';
                document.querySelector('.title').style.color = 'rgb(245, 223, 223)'
                generateMarkup(pickRandomQuestion(questions));
                form.addEventListener('click', checkAnswer);
        document.querySelector('.message').textContent = 'ANSWER';
        console.log(currentIndexOfElement);
        }
}
)();