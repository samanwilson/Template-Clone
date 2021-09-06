<template>
<section id="News">
<!--- breadcrumb --->
  <div class="container mt-3 ">
    <div class="col-md-2">
      <ol class="breadcrumb" style="background-color: transparent">
        <li class="breadcrumb-item "><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active">News</li>
      </ol>
    </div>
    <!--- Title --->
    <div class="row my-3 ">
      <div class="col-md-4 mx-auto text-center mt-4">
        <h5 class="yellow-color font-weight-bold">Get Special Offer</h5>
        <h2 class="text-dark font-italic font-weight-bold">Our Pricing</h2>
      </div>
    </div>
    <!--- News Box --->
    <div class="row">
      <div class="col-md-6">
        <img src="/src/assets/Index-Second-Pic.jpg" alt="SecondPIc" class="img-fluid">
      </div>
      <div class="col-md-6 p-5 ">
        <h6 class="yellow-color">Driving tips</h6>
        <br>
        <h3>Driving Instructor caught without Drivers Driving License During Lesson</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">18 November 2019</li>
          <li class="breadcrumb-item">03 Comments</li>
        </ol>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem fuga non praesentium, velit veritatis voluptate!
        </p>
        <a href="#" class="h5 Courses-Card-Btn">Read more</a>

      </div>
    </div>
    <!--- Cards --->
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 Courses-Card" v-for="(index) in NewsCard" :key="index">
        <img src="../assets/Courses-First-Pic.jpg" class="img-fluid mb-2"/>
        <h4 class="yellow-color">Driving Tips</h4>
        <h5 class="text-dark">Driving Instructor caught without Drivers Driving License During Lesson</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sapiente?</p>
        <a href="#" class="h4 Courses-Card-Btn">View Details</a>
      </div>
    </div>
    <!--- Pagination --->
    <div class="row">
      <div class="col-md-3 mx-auto">
        <ul class="Pagination d-flex">
          <li class="PageItem">1</li>
          <li class="PageItem">2</li>
          <li class="PageItem">3</li>
        </ul>
      </div>
    </div>

  </div>
</section>
</template>

<script>
    export default {
        data(){
            return{
              NewsCard:[1,2,3,4,5,6]
            }
        }

    }
</script>

<style scoped>

</style>
