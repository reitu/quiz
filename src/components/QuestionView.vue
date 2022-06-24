<template>
    <div>
        hello Ashy
    </div>

       <select v-model="answer">
            <option disabled value="">Please select one</option>
            <option>Nene</option>
            <option>Porsha</option>
            <option>Marlo</option>
        </select>
    
</template>



 <script>
export default {
    name: 'QuestionView',
    //components: QuestionView
}

   
</script>