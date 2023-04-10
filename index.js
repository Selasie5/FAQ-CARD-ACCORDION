
 let questions= document.querySelcectorAll('.question');
 questions.forEach(function(question)
 {
    question.addEventListener('click',()=>
    {
        let answer= question.nextElementSibling;
        let dropDown =questions.querySelector('.arrow-down');
        let allAnswers= document.querySelectorAll('.answer');
        isExpanded = answer.classList.contains('expanded');

        allAnswers.forEach((answer) =>
        {
            answer.classList.remove('expanded');
            answer.previousElementSibling.querySelector('.arrow-down').classList.remove('rotate');
            answer.previousElementSibling.classList.remove('bold');
        });
         if (!isExpanded)
         {
            answer.classList.add('expanded');
            dropDown.classList.add('rotate');
            question.classList.add('bold');
         }
    })
 })