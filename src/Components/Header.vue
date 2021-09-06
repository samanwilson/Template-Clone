<template>
  <header class="sticky-top">


   <nav class="navbar navbar-expand-lg Blue-back ">
     <div class='Background-Css'>
       <router-link to="/" class="navbar-brand ">
         <h1 class="font-italic text-white  Brand-Css"><span style="color: black">D</span>reams</h1>
       </router-link>
     </div>

     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".NavBar" >
       <span class="navbar-toggler-icon "></span>
     </button>
     <div class="collapse navbar-collapse NavBar" id="">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item  ">
           <router-link class="nav-link text-white Nav-Link-Css" to="/" exact-active-class="active" >Home</router-link>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white Nav-Link-Css" v-on:click="DropDownTrue=!DropDownTrue"  >pages</a>
           <transition name="fade" v-if="DropDownTrue" >
             <ul class="DropDownMenu " v-on:mouseleave="DropDownTrue=!DropDownTrue">
               <li class="DropDownItem"> <router-link class="DropDownLink" to="/Faq" exact-active-class="active" >Faq</router-link></li>
               <li class="DropDownItem"><router-link class="DropDownLink" to="/CourseDetails" exact-active-class="active" >Course Details</router-link></li>
               <li class="DropDownItem"><a href="" class="DropDownLink">Blog Detail</a></li>
             </ul>
           </transition>

         </li>
         <li class="nav-item">
           <router-link class="nav-link text-white Nav-Link-Css" to="/Courses" active-class="active" >Courses</router-link>

         </li>
         <li class="nav-item">
           <router-link class="nav-link text-white Nav-Link-Css" to="/News" active-class="active" >News</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link text-white Nav-Link-Css" to="/Contacts" active-class="active" >Contacts</router-link>
         </li>
       </ul>


       <ul class="navbar-nav  d-flex flex-row justify-content-center Nav-Icon-Wrapper mr-auto">

         <li class="nav-item">
           <a class="nav-link Nav-Icon">
             <i class="fas fa-search  Nav-Search"></i>
           </a>
         </li>

         <li class="nav-item">
           <a class="nav-link Nav-Icon"> <i class="fab fa-facebook-square"></i></a>
         </li>
         <li class="nav-item">
           <a class="nav-link Nav-Icon"> <i class="fab fa-instagram"></i></a>
         </li>
         <li class="nav-item">
           <a class="nav-link Nav-Icon"> <i class="fab fa-twitter"></i></a>
         </li>
         <button class="btn  btn-lg yellow-back h-100 align-self-center ml-5 text-white Nav-Btn">Click me</button>
       </ul>

     </div>

   </nav>
  </header>
</template>

<script>
    export default {
data(){
    return{
        DropDownTrue:false
    }
}
    }
</script>

<style scoped>

.fade-enter{}

  .fade-enter-active{
    transition: 1s ease-in;
    transform: translateY(10px);
  }
.active{
  border-bottom: solid 1px  #f3bd00;
}

</style>
