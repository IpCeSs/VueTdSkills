<template>
  <div class="hello">
<!-- double brackets = interpolation de js
    {{name}}
    condition ternaire : btn state est true ? si oui on affiche le premier message : si non on affiche le deuxième message
    {{btnState?'The button is disabled': 'the button is acitve'}}
    <button @click="changeName" v-bind:disabled="btnState">ChangeName</button>-->
 <div class="holder">
      <ul>
     <!--  on boucle sur le tableau des skills  -->
        <li v-for="(data, index) in skills" :key='index'>
          {{index}}. {{data.skill}}
        </li>
      </ul>
    </div>
    <div v-bind:class="{alert: showAlert}"></div>
  </div>
</template>

<script>

export default {
  name: 'Skills',
  data(){
    return{
      skills: [
      {"skill": "Vue.js"},
      {"skill": "FrontEnd Developer"},
      {"skill": "Chocolate cake"}
      ],
      showAlert:true
    }
  }
  }

</script>


<style scoped>
.alert{
  background-color:navy;
  width:100%;
  height:30%;
}
</style>
