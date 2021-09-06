<template>
<section id="Contact">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <ol class="breadcrumb" style="background: transparent">
          <li class="breadcrumb-item active"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item">Contacts</li>
        </ol>
      </div>
    </div>
    <!--- map --->
    <div class="row">
      <div class="col-md-12">
        <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12151.768494963275!2d-3.6896306743798095!3d40.41013290938907!2m3!
        1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
        !3m3!1m2!1s0xd422625ba7cdef7%3A0x977d5ab3b6c73435!2sMadrid-Puerta%20de%20Atocha!5e0!3m2!1sen!2sde!4v1605167526119!5m2!1sen!2sde"
                width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </div>
  <!--- Contact --->

  <div class="container my-5">
    <div class="row">
      <div class="col-md-3 col-sm-12 mx-auto">
        <h2 class="font-weight-bold font-italic">Contact Info</h2>
        <div class="d-flex align-items-center ">
          <i class="fas fa-phone-alt Contact-Icon align-self-center"></i>
          <ul class="Info-Wrapper">
            <li class="">support@gmail.com</li>

            <li class="">09022301202</li>
          </ul>
        </div>
        <br>
        <div class="d-flex align-items-center ">
          <i class="fas fa-map-marker-alt Contact-Icon align-self-center"></i>
          <ul class="Info-Wrapper">
            <li class="">245 queens st brooklyn  new york city new york america</li>
          </ul>
        </div>
        <br>
        <div class="d-flex align-items-center ">
          <i class="far fa-clock Contact-Icon align-self-center"></i>
          <ul class="Info-Wrapper">
            <li class="">mon-sat 9AM-8PM </li>


          </ul>
        </div>
      </div>
      <!--- message --->
      <div class="col-md-9 col-sm-12 mx-auto">
        <h2 class="font-weight-bold font-italic">leave a message</h2>
        <div class="form-group">
          <form action="#">
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="Enter Value" class="form-control">
              </div>

              <div class="col-md-6">
                <input type="text" placeholder="Enter Value" class="form-control">
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <textarea name="" id="" placeholder="Enter Value" style="padding: 10px"></textarea>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-12 ">
                <button class="btn btn-primary mx-auto">Click me</button>
              </div>

            </div>
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
