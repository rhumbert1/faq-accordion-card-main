document.querySelectorAll('.accordion_question').forEach((question) =>
  question.addEventListener('click', () => {

    const questions = question;
    const answers = question.nextElementSibling;

    question.addEventListener('focusout', () => {
      answers.classList.remove('open');
      questions.classList.remove('active');
    })

    //Statement to add classes to the variables above;
    if (question.classList.contains('active')) {

      answers.classList.toggle('open');
      questions.classList.toggle('active');

    } else {

      //Avoiding to open multiple accordions at the same time
      document.querySelectorAll('.accordion_question').forEach((question) =>
        question.classList.remove('active'));
      question.classList.add('active');

      document.querySelectorAll('.accordion_content').forEach((content) =>
        content.classList.remove('open'))
      answers.classList.add('open');
    }
  })
)