<template>
<section id="CourseDetails">
<div class="container">
  <div class="row mt-3">
    <div class="col-md-4">
      <ol class="breadcrumb" style="background-color: transparent">
        <li class="breadcrumb-item "><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item "><router-link to="/Courses">Courses</router-link></li>
        <li class="breadcrumb-item active">CourseDetail</li>
      </ol>
    </div>
  </div>
  <div class="row my-3">
    <div class="col-md-8">
      <img src="../assets/Courses-Second-Pic.jpg"class="img-fluid"/>
      <br>
      <h2>Defensive Driving Course</h2>

      <h4 class="yellow-color "> $199</h4>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda blanditiis distinctio in incidunt
        modi molestias natus non quis rerum sit tempora, velit voluptates. Atque debitis dolorum eius enim eveniet id nemo nisi quae
        quis quos recusandae sed suscipit, velit! Alias, dignissimos dolore eos iure minus officiis praesentium vel? Aliquam aperiam
        beatae consectetur corporis culpa debitis doloremque dolorum error et eum explicabo fugit hic illum impedit incidunt ipsam magni
        maiores modi molestiae odio officia provident quae quas quasi sapiente sit ullam vitae voluptas voluptate, voluptatum!
        Ipsum magni maiores nam officia recusandae repellendus unde veritatis voluptates. Error perferendis, saepe! Delectus, tempore.</p>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <ul>
            <h4>Programs Available</h4>
            <li>Complete Course Option</li>
            <li>Partial Course Option</li>
            <li>Additional Practice Hour</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <h4>Requirements</h4>
            <li>Complete Course Option</li>
            <li>Partial Course Option</li>
            <li>Additional Practice Hour</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
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
