<template>
    <div class="results">
        You answered {{totalQ}} questions
        <h2>Score: {{results}}%</h2>
        <p>Comments: {{comment}} </p>
    </div>

    
</template>



 <script>

export default {
    name: 'ResultsView',
    props: ['results', 'totalQ', 'comment'],
}

   
</script>

<style>
.results {
    margin-top: 16px;
    padding:16px;
    border: black 0.5px solid;
}
</style>