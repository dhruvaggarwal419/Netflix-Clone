let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll(".answer");
let plus = document.querySelectorAll(".plus");
let accordian = document.querySelector(".accordian");
let accordian1 = document.querySelector(".accordian-section-2");
let doubleClick = false;
let height = accordian.clientHeight;

const AddClassHide = () => {
    answers.forEach((answer) => {
        answer.classList.add("answer");
    })
}

const addShow = (question, idx) => {
    AddClassHide();
    answers[idx].classList.remove('answer');
    doubleClick = true;
    plus[idx].style.transform = "rotate(135deg)";
}

questions.forEach((question, idx) => {
    question.addEventListener('click', () => {
        if (doubleClick === true) {
            AddClassHide();
            doubleClick = false;
            plus[idx].style.transform = "rotate(0deg)";
            let varHeight = answers[idx].clientHeight;
            accordian1.style.marginTop = "0px";
            let height1 = height;
            varHeight += height;
            accordian.style.height = "varHeight";
        } else {
            addShow(question, idx);
            let varHeight = answers[idx].clientHeight;
            let height1 = height;
            height1 -= varHeight;
            accordian1.style.marginTop = varHeight + 'px';
            accordian.style.height = "varHeight";
        }
    })
})