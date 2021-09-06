<template>
  <div id="app">
    <div class="container-fluid  " style="padding: 0px">
      <section id="Heading">
        <div class="row mx-auto Index-Heading">
          <div class="col-md-7 mx-auto  text-white text-center Heading-Margin">
            <h3 class="">Best Options For You</h3>
            <br>
            <h2>Drive Safe & Get License</h2>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary Heading-Btn">Click Me</button>

              <button class="btn btn-primary Heading-Btn">Click Me</button>
            </div>
          </div>
        </div>
      </section>
      <!--- Heading --->


      <!--- Features --->
      <section id="Features">


      <div class="container h-50">
        <div class="row mt-5">
          <div class="col-lg-4 col-md-6 mx-auto d-flex flex-column  justify-content-center text-left">
            <h5 class="yellow-color"> Why Choose Us?</h5>
            <h2 class="text-dark">Our Feature</h2>
            <p class=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore iusto laborum, minus pariatur placeat reiciendis!</p>
            <button class="btn Blue-back text-white w-50 Feature-btn"> See Courses</button>
          </div>
          <div class="col-lg-4 col-md-6 ">
            <div class="Custom Blue-back mx-auto">
              <i class="fas fa-cog CogIcon"></i>
              <h3 class="text-white text-center">Unlimited Car Support</h3>
            </div>
            <div class="Custom Blue-back mx-auto">
              <i class="fas fa-car-side CogIcon"></i>
              <h3 class="text-white text-center">Driving School Insures</h3>
            </div>
          </div>

          <div class="col-lg-4 col-md-6  d-flex align-self-center  ">
            <div class="Custom Blue-back mx-auto ">
              <i class="fas fa-car-side CogIcon"></i>
              <h3 class="text-white text-center">Driving School Insures</h3>
            </div></div>
        </div>
      </div>

      <div class="container mt-3 ">
        <div class="row">
          <div class="col-md-6">
            <i class="fas fa-play-circle CircleIcon "></i>
            <img src="/src/assets/Index-Second-Pic.jpg" alt="SecondPIc" class="img-fluid">
          </div>
          <div class="col-md-6 p-5 ">
            <h4 class="yellow-color">Welcome To Online Traffic School</h4>
            <br>
            <h3><i>Looking For Lessons? </i></h3>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem fuga non praesentium, velit veritatis voluptate!
            </p>
            <button class="btn Blue-back text-white Feature-btn">Click Me</button>
          </div>
        </div>
      </div>
      </section>
      <!--- Form --->
     <AppForm></AppForm>
    </div>

    <!--- Pricing --->
    <section id="Pricing " class="Index-Pricing">
      <div class="container  mt-3 ">
        <div class="row ">
          <div class="col-md-4 mx-auto text-center mt-4">
            <h5 class="yellow-color font-weight-bold">Get Special Offer</h5>
            <h2 class="text-dark font-italic font-weight-bold">Our Pricing</h2>
          </div>
        </div>
        <!--- Card--->
        <div class="row mt-3">
          <div class="col-lg-4 col-md-6 col-sm-12 p-5 Card-css mx-auto" v-for="(Value,Key) in Pricing" :key="Key">
              <h5 class="text-center text-white">{{PricingHeading}}</h5>
                <h3 class="text-center yellow-color">{{"$"+Value }}</h3>
            <h4 class="text-center text-white">{{Key}}</h4>
            <ul class="list-group  ">
              <li class="List-Group-Item-Css">asdf</li>
              <li class="List-Group-Item-Css">sadads</li>
              <li class="List-Group-Item-Css">asdad</li>
              <li class="List-Group-Item-Css">adsasd</li>
              <li class="List-Group-Item-Css">asdasd</li>
            </ul>
            <button class="btn Blue-back d-flex align-self-center text-white mt-3 Margin-Btn">Click Me</button>
          </div>
        </div>
      </div>
    </section>
    <!--- Instructors --->
    <section id="Instructors" class="mt-4">
      <div class="container ">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-between">
            <h2 class="yellow-color">Our Instructors</h2>
            <button class="btn Blue-back Feature-btn ml-auto text-white">Click me</button>
          </div>


          <div class="col-lg-6 col-md-12 col-sm-12 mx-auto Instructors-Card mt-5 d-flex " v-for="name in Instructors" :key="name">
            <img src="../assets/Index-Forth-Pic.jpg" width="165px" height="140px"/>
            <div class="ml-2">
              <h3 class="yellow-color">{{name}}</h3>
              <h4 class="text-dark">Instructor</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vero!</p>
              <div class="Icon-Wrapper">
                <a class="Instructor-Icon"> <i class="fab fa-twitter"></i></a>
                <a class="Instructor-Icon"> <i class="fab fa-instagram"></i></a>
                <a class="Instructor-Icon"> <i class="fab fa-facebook-square"></i></a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  </div>


</template>

<script>
    import Form from "./Form";

    export default {
        data(){
            return{
                Pricing:{PersonalDriving:199,PowerBoost:379,FreightDriving:259},
                Instructors:['ahmad','saman','matin','mmd'],
                PricingHeading:'20% Off'
            }
        },
        components:{
            AppForm:Form
        }
    }
</script>

<style scoped>

</style>
