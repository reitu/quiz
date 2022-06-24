<template>
    <div v-if="!showResults">
        <h1>Welcome to bye Ashy Quiz</h1>
        <button :disabled="pageStart < 1" @click="pageStart--"> back</button>
        <div>
            {{ pageStart + 1 }}. {{ currentQuestion.question }}
            <div v-for="(option, index) in  currentQuestion.options" :key="(index)">
                <input type="radio" name="options" :value="option" v-model="currentQuestion.selected">
                <span>{{ option }}</span>
            </div>
            <button :disabled="!currentQuestion.selected" @click="checkAnswer">Next</button>
        </div>
        <p>time</p>

    </div>

    <div class="results" v-else>
        <ResultsView :results="getResults()" :totalQ="getTotalQ()" :comment="getComments()" />
    </div>
</template>





 <script>
import QuestionView from '@/components/QuestionView.vue';
import ResultsView from '@/components/ResultsView.vue';

export default {
    name: 'QuizView',
    components: {
        QuestionView,
        ResultsView
    },

    data() {
        return {
            arrPoints: [],
            pageStart: 0,
            showResults: false,
            comment: "",
            quizzes: [{
                point: 0,
                selected: "",
                question: "Who said bye ashy?",
                options: [
                    "kenya",
                    "kandi",
                    "porsha"
                ]
                ,
                answer: "porsha",
            }, {
                point: 0,
                selected: "",
                question: "Who said close your legs?",
                options: [
                    "kenya",
                    "nene",
                    "porsha"
                ],
                answer: "nene"
            }, {
                point: 0,
                selected: "",
                question: "Who called peter patricia?",
                options: [
                    "nene",
                    "marlo",
                    "porsha"
                ],
                answer: "nene"
            },
            {
                point: 0,
                selected: "",
                question: "Who was married to Greg?",
                options: [
                    "nene",
                    "marlo",
                    "porsha"
                ],
                answer: "nene"
            },
            {
                point: 0,
                selected: "",
                question: "Who dated big poppa?",
                options: [
                    "nene",
                    "kim",
                    "porsha"
                ],
                answer: "kim"
            },
            {
                point: 0,
                selected: "",
                question: "who pulled kenya hair?",
                options: [
                    "nene",
                    "marlo",
                    "porsha"
                ],
                answer: "porsha"
            },
            {
                point: 0,
                selected: "",
                question: "Who was a stripper?",
                options: [
                    "nene",
                    "marlo",
                    "porsha"
                ],
                answer: "nene"
            },
            {
                point: 0,
                selected: "",
                question: "Who was a prostitute?",
                options: [
                    "nene",
                    "marlo",
                    "porsha"
                ],
                answer: "marlo"
            },
            {
                point: 0,
                selected: "",
                question: "Who is the richest hw in atl?",
                options: [
                    "nene",
                    "marlo",
                    "kandi"
                ],
                answer: "kandi"
            },
            {
                point: 0,
                selected: "",
                question: "Who's nickname is 50 cynt?",
                options: [
                    "cynthia",
                    "marlo",
                    "porsha"
                ],
                answer: "cynthia"
            }
            ]
        }
    },
    computed: {
        lastPage() {
            return this.quizzes.length
        },
        currentQuestion() {
            return this.quizzes[this.pageStart]
        }
    },

    methods: {
        checkAnswer() {

            if (this.currentQuestion.selected === this.currentQuestion.answer) {
                console.log("malane")
                this.currentQuestion.point = 10
                console.log(this.currentQuestion.point, "one")

            } else {
                this.currentQuestion.point = 0
                console.log(this.currentQuestion.point, "zero")

            }//ref vs value, and the space on computer, objects, ask again
            //numbers are always passed by value, you're always passing around the number itself.
            //but with object, you pass by ref 
            
            this.nexPage()
            console.log(this.pageStart)
        },//to do: sum of the points and result, prev and next pagonation and done

        //at least something must be selected, or mustt select something to go to neext

        getTotalQ() {
            this.totalQ = this.quizzes.length
            return this.quizzes.length
        },

        getResults() {
            const sumall = this.quizzes.map(item => item.point).reduce((prev, curr) => prev + curr, 0);
            console.log("show the sum now: ")
            console.log(sumall + "%");
            return sumall
        },

        getComments() {
            var totalPoints = this.getResults()
            console.log("the points read as: ", totalPoints)
            if (totalPoints < 40) {
                console.log("points result", totalPoints)
                return "Chile, chile! You are actually not a housewife fan. Poor performance. Do better"
            } else if (totalPoints > 40 && totalPoints < 70) {
                return "You tried. Improve and you'll be one us"
            } else if (totalPoints > 70) {
                return "Amazing! Nene would be proud"
            }
        },

        nexPage() {
            if (this.lastPage == (this.pageStart + 1)) {
                this.showResults = true
            } else {
                this.pageStart++
            }
        },
        timeOut() {
            setTimeout(this.nexPage(), 30000);
            //returnt and show the time
        }


    }

}


</script>


<style>
</style>