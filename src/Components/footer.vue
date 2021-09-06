<template>
<footer id="footer" class="Blue-back">
  <div class="container ">
    <div class="row py-5">
      <div class="col-md-3" v-for="Heading in FooterHeading" :key="Heading">
        <ul class="list-group text-white">
          <h2 class="text-white">{{Heading}}</h2>
          <li class="list-group-item Footer-List-Css  text-white">Lorem</li>
          <li class="list-group-item  Footer-List-Css text-white">Ipsum</li>
          <li class="list-group-item Footer-List-Css text-white ">Dolor</li>
          <li class="list-group-item Footer-List-Css text-white ">Sit</li>
          <li class="list-group-item Footer-List-Css text-white ">Amet</li>
        </ul>
      </div>
      <div class="col-md-3 text-white">
          <h2 class="font-italic text-white  Brand-Css w-50"><span style="color:  #f3bd00">D</span>reams</h2>
            <p>Address : 15 Division Street, New York, NY 12032, United States of America</p>
        <ul>
          <li>Phone : +0 (123) 456789</li>
          <li>Email : Kaseo@gmail.com</li>
          <li>Fax : +8 (123) 456 789</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
    export default {
    data(){
        return{
            FooterHeading:['News','Courses','Useful links']
        }
    }
    }
</script>

<style scoped>

</style>
