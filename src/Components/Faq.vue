<template>
<section id="Faq">
  <div class="container">
    <!--- BreadCrumb --->
    <div class="row">
      <div class="col-md-4">
        <ol class="breadcrumb" style="background: transparent">
          <li class="breadcrumb-item active"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item">Pages</li>
          <li class="breadcrumb-item">Faq</li>
        </ol>
      </div>
    </div>
    <!--- Questions --->
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <h4 class="yellow-color">Customer Support</h4>
        <h2>Frequently Asked Questions</h2>
        <br>
        <a href="#Collapse" class="Collapse-Btn-Css h4" data-toggle="collapse">am I Able to Have Driving Lessons on my Own?</a>
        <br>
        <br>
        <div class="collapse" id="Collapse">
          <p >Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur eligendi excepturi laudantium molestias, officia reiciendis! Molestias odio porro quis sequi?</p>
        </div>
        <br>
        <a href="#Collapse2" class="Collapse-Btn-Css h4" data-toggle="collapse">What is The Proccess To Getting my License?</a>
        <br>
        <br>
        <div class="collapse" id="Collapse2">
          <p >Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur eligendi excepturi laudantium molestias, officia reiciendis! Molestias odio porro quis sequi?</p>
        </div>
        <br>
        <a href="#Collapse3" class="Collapse-Btn-Css h4" data-toggle="collapse">Can I Get my Driver License In NYC?</a>
        <br>
        <br>
        <div class="collapse" id="Collapse3">
          <p >Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur eligendi excepturi laudantium molestias, officia reiciendis! Molestias odio porro quis sequi?</p>
        </div>
        <br>
        <a href="#Collapse4" class="Collapse-Btn-Css h4" data-toggle="collapse">How Many Lessons Should I learn?</a>
        <br>
        <br>
        <div class="collapse" id="Collapse4">
          <p >Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur eligendi excepturi laudantium molestias, officia reiciendis! Molestias odio porro quis sequi?</p>
        </div>
      </div>
      <!--- Submit a Q --->
      <div class="col-md-12 col-lg-6">
        <h4 class="yellow-color">Customer Support</h4>
        <h2>Frequently Asked Questions</h2>
        <br>
        <div class="form-group">
          <form action="">
            <input type="text" placeholder="enter Value" class="form-control">
            <br>
            <input type="text" placeholder="enter Value" class="form-control">
            <br>
            <input type="text" placeholder="enter Value" class="form-control">
            <br>
            <button class="Blue-back text-white Feature-btn Faq-Btn-Css w-100">Click Me</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
