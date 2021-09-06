<template>
 <section id="Courses">
   <!--- breadcrumb --->
   <div class="container">
     <div class="row mt-3">
       <div class="col-md-2">
         <ol class="breadcrumb" style="background-color: transparent">
           <li class="breadcrumb-item "><router-link to="/">Home</router-link></li>
           <li class="breadcrumb-item active">Courses</li>
         </ol>
       </div>
     </div>
   </div>
   <!--- Form --->
   <AppForm></AppForm>
<div class="container">
  <div class="row">
    <div class="col-md-12 d-flex justify-content-between">
      <h2 class="yellow-color">Our Instructors</h2>
      <button class="btn Blue-back Feature-btn ml-auto text-white">Click me</button>
    </div>
  </div>
  <div class="row">
<div class="col-lg-4 col-md-6 col-sm-12 Courses-Card" v-for="(Value,Key) in CardPrice" :key="Key">
  <img src="../assets/Courses-First-Pic.jpg" class="img-fluid mb-2"/>
  <h3 class="text-dark">{{Key}}</h3>
  <h4 class="yellow-color">{{'$'+Value}}</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sapiente?</p>
  <a href="#" class="h4 Courses-Card-Btn">View Details</a>
</div>
  </div>
</div>
 </section>

</template>

<script>

    import Form from "./Form";

    export default {
        data(){
            return{
                CardPrice:{WinterDriving:119,ProgramForSeniors:220,AdultInCarLessons:300,TeenDriver:90,DefensiveDriving:260,StickShit:160}
            }
        },
        components:{
            AppForm:Form
        }

    }
</script>

<style scoped>

</style>
