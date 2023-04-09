
    const toggleAnswer=(index)=>
{
    var questions=document.querySelectorAll(".question");
    var answers =document.querySelectorAll(".answer");
    var dropDowns =document.querySelectorAll(".arrow-down");

    questions.forEach(function(question, i)
    {
        if(i === index)
        {
            var answer=answers[i];
            var dropdown =dropDowns[i];
            var  questionHeader = question.querySelector("h3");

            if (answer.style.display === "block")
            {
                answer.style.display="none";
                dropDowns.classList.remove("rotate");
                questionHeader.classList.remove("bold");
            }
            else{
                answer.style.display="block";
                dropDowns.classList.add("rotate");
                questionHeader.classList.add("bold");
            }
        }
        else{
            answers[i].style.display="none";
            dropdown[i].classList.remove("rotate");
            question[i].querySelector("h3").classList.remove("bold");
        }
    })
}
