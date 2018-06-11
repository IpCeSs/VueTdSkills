<template>
  <div class="hello">
<!-- double brackets = interpolation de js
    {{name}}
    condition ternaire : btn state est true ? si oui on affiche le premier message : si non on affiche le deuxième message
    {{btnState?'The button is disabled': 'the button is acitve'}}
    <button @click="changeName" v-bind:disabled="btnState">ChangeName</button>-->
<div class="container">
  <!-- v model : skill est donc à définir dans le script (ici juste après return, vide de base). on aura lorsque l'on tape du texte dans l'input un affichage dynamique juste en dessous du même message grâce à {{skill}} -->
  <!-- @submit soumet on enter v-on:submit -->
  <form @submit.prevent="addSkill">
  <input type="text" placeholder="Entrer une skill" v-model="skill" v-validate="'min:5'" name="inputValidationTest">
  {{skill}}
  <!-- transition = animation : fonctionne seulement si on a un v-if ou v-show dans le contenu à animer
  on procède à l'animation dans le css en appellant le nom de la classe de <transition/>
  soit "alert-in" sur laquelle on définira un comportement lors du premier affichage alert-in-enter et son "reverse" alert-in-leave
  lorsque l'on arrete l'affichage du message -->
      <transition name="alert-in" enter-active-class="lightSpeedIn" leave-active-class="lightSpeedOut">
  <!-- Si la condition de validation (5 caractères mini n'est pas remplie le message d'alert suivant
    sera affiché pour indiquer à l'user ce qu'il doit faire-->
        <p class="alert" v-if="errors.has('inputValidationTest')">{{errors.first('inputValidationTest')}}</p>
      </transition>
  </form>
  </div>
   <div class="holder">
    <p>Mes Skills</p>
      <ul>
        <!-- On utilise enter/leave-active-class qui sont des classes relatives à animated.css transition-group marche
          avec v-fornpm-->
       <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>{{data.skill}}
            <i class="fa fa-minus-circle" v-on:click="removeSkill(index)"></i>
          </li>
        </transition-group>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skill: "",

      skills: [
        { skill: "Vue.js" },
        { skill: "FrontEnd Developer" },
        { skill: "Chocolate cake" }
      ]
    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
          console.log("skill non soumise!!");
        }
      });
    },
    removeSkill(id) {
      this.skills.splice(id, 1);
      
    }
  }
};
</script>


<style scoped>
/*On importe la bibliothèque animate.css grâce au CDN
On peut donc accéder aux animations qu'elle propose et celle de fontawesome*/
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2" ;
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fd2cd;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
/* On définit le comportement de l'animation quand elle s'affiche .alert-in-enter-active et quand elle s'enlève .alert-in-leave-active 
(leave active et enter active sont relatifs à la classe transition*/
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
/* @keyframes gère la "transparence" du bounce-in lors du déroulement de l'animation de 0(transparent/moins visible) à + (opaque/très visible)*/
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(15);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
