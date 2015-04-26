'use strict';

angular.module('laManette', [])

.controller('controller', [function () {
    var self = this;

    self.submitted = false;
    self.score = 0;

    self.questions = {
        question1: {
            number: 1,
            image: "images/1.jpg",
            question: "How ready are you?",
            answer1: "Pumped, bring on the adventure!",
            answer2: "I was about to go for a bike ride but I am curious to see where this is going...",
            answer3: "Excited but I hope its not too much effort",
            answer4: "Not going to lie, I'm a little bit scared...",
            answer: "",
            theAnswer: "1"
        },
        question2: {
            number: 2,
            image: "images/2.jpg",
            question: "What is the likelihood that Mark will piss the bed tonight?",
            answer1: "Not at all likely",
            answer2: "Quite Likely",
            answer3: "Very Likely",
            answer4: "Definitely",
            answer: "",
            theAnswer: "4"
        },
        question3: {
            number: 3,
            image: "images/3.jpg",
            question: "It's humid in...",
            answer1: "Thailand",
            answer2: "Bangkok",
            answer3: "Chang Mai",
            answer4: "Laos",
            answer: "",
            theAnswer: "3"
        },
        question4: {
            number: 4,
            image: "images/4.jpg",
            question: "How full is the glass?",
            answer1: "Half full",
            answer2: "If its not Buca I'm not interested!",
            answer3: "Half empty",
            answer4: "Who cares? Im drinking the rest of it!",
            answer: "",
            theAnswer: "3"
        },
        question5: {
            number: 5,
            image: "images/5.jpg",
            question: "What is the maturity rating of the cheese around Jonny's mouth?",
            answer1: "Fresh and mild like a Baby Mozzarella",
            answer2: "Tangy Greek Feta",
            answer3: "Full flavoured English Cheddar",
            answer4: "Crusty and stinky like a vintage Stilton",
            answer: "",
            theAnswer: "4"
        },
        question6: {
            number: 6,
            image: "images/6.jpg",
            question: "Andy, I WANT you to...",
            answer1: "Join us for a beer",
            answer2: "Come tubing with us",
            answer3: "FUCK OFF!",
            answer4: "Share this bucket with me",
            answer: "",
            theAnswer: "3"
        },
        question7: {
            number: 7,
            image: "images/7.jpg",
            question: "What is the correct sequence for a Buca Shaker?",
            answer1: "Swig and swallow",
            answer2: "Swig, Spit, shake",
            answer3: "Shake, swig, swallow, spit",
            answer4: "Swig, shake, spit, swig, swallow",
            answer: "",
            theAnswer: "4"
        },
        question8: {
            number: 8,
            image: "images/8.jpg",
            question: "How long ago was it that Luke Jarmey's cousin and Luke Jarmey's mate first had their lives enriched by Dan?",
            answer1: "6 years, 4 months, and 27 days",
            answer2: "5 years, 4 months, and 15 days.",
            answer3: "6 years, 5 months, and 27 days.",
            answer4: "6 years, 4 months, and 3 days.",
            answer: "",
            theAnswer: "1"
        },
        question9: {
            number: 9,
            image: "images/9.jpg",
            question: "How many grams of sugar go into a good Onion Soup?",
            answer1: "Just a pinch should do",
            answer2: "A generous handful",
            answer3: "A whole packet",
            answer4: "As much as you can physically find",
            answer: "",
            theAnswer: "4"
        },
        question91: {
            number: 10,
            image: "images/10.jpg",
            question: "#ScoreGoalsNot",
            answer1: "Drugs",
            answer2: "Girls",
            answer3: "Paper",
            answer4: "Holes",
            answer: "",
            theAnswer: "2"
        }
    };

    self.submit = function () {
        self.score = 0;
        angular.forEach(self.questions, function (value, key) {
            if (value.answer == value.theAnswer) {
                self.score += 1;
            }
        });
        self.submitted = true;
    };

}]);