var timer;
const data = [
    {
        question: "What does a car do when it's tires pop?",
        answer: "It retires "
    },
    {
        question: "A Big Moron and a little Moron are on a roof, who falls off first?",
        answer: "The big moron. The litte moron was a little more on"
    },
    {
        question: "What is the inside temperature of a Taun Taun?",
        answer: "Luke-warm"
    },
    {
        question: "What do you call a small midget who escapes from jail?",
        answer: "A small medium at large"
    },
    {
        question: "Why shouldn't you use your left hand to brush your teeth?",
        answer: "Because a toothbrush works much better!"
    },
    {
        question: "Did you know that the American Alligator can grow up to 15 feet?",
        answer: "They can! However, most of them just have four."
    },
    {
        question: "How do you hide and elephant?",
        answer: "Paint it's toes red and put it in a cherry tree, you'd think it wouldn't work, but have you seen any elephants in any cherry trees?"
    },
    {
        question: "How do you put an elephant in a fridge?",
        answer: "Pull the elephant out of the cherry tree, open the fridge, put the elephant in, then close the door"
    },
    {
        question: "How do you put a giraffe in a fridge?",
        answer: "Open the door, take the elephant out, put the giraffe in, then close the door."
    },
    {
        question: "The King of Animals is holding a meeting and he wants everyone there, as your heading there, you get to alligator river, how do you cross it?",
        answer: "Just swim across, all of the alligators are at the meeting, none of which it turns out have 15 feet"
    },  
    {
        question: "Once you get to the meeting the King of Animals is upset because not everyone is there, who is missing?",
        answer: "The giraffe, they're still stuck in the refridgerator"
    }
];
$(document).ready(function() {
    for (i = 0; i < data.length;  i++){
        let $container = $("<div></div>").addClass("joke-container");
        let $question = $("<p></p>").addClass("question-text").text(data[i].question);
        let $button = $("<button>").addClass("joke-button").text("Show Answer").on("click", clickedButton);
        let $answer = $("<p></p>").addClass("answer-text").text(data[i].answer);
        $("div.main-container").append($container);
        $("div.joke-container:last").append($question);
        $("div.joke-container:last").append($button);
        $("div.joke-container:last").append($answer);
        let $allanswer = $("p.answer-text");
        $allanswer.hide()
    }
    let $buttons = $('button');
    let $allanswer = $("p.answer-text");
    $('input').on('change', function() {
        if ($('input').is(':checked')){
          $buttons.prop('disabled', true);
          $buttons.html("Hide Answer")
          clearTimeout(timer);
          $allanswer.clearQueue().finish().show()
        }
        else {
          $buttons.prop('disabled', false);
          $buttons.html("Show Answer")
          clearTimeout(timer);
          $allanswer.clearQueue().finish().hide()
        }
      });
});



function clickedButton(event) {
    var target = $(event.target);
    let answertext = target.next("p.answer-text");
    var startTimer = function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            answertext.clearQueue().finish().hide("slow");
            target = target.html("Show Answer");
        },5000)
    }
    if($(answertext).is(":visible")){
        answertext.clearQueue().finish().hide("slow");
        clearTimeout(timer);
        target = target.html("Show Answer");
    }else{
        answertext.clearQueue().finish().show("slow");
        target = target.html("Hide Answer");
        startTimer()
        }
        

}