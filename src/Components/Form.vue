<template>
  <section id="Form">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 mx-auto text-center">
          <h5 class="yellow-color">Giving Best Options For you</h5>
          <h2 class="text-dark font-italic">ApplicationForm</h2>

        </div>
      </div>
      <div class="row mt mt-3">
        <div class="col-md-12 mx-auto  ">
          <div class="form-group d-flex ">
            <div class="col-md-4 col-sm-6 mt-2  ">
              <input type="text" placeholder="Your Name" class="form-control Form-Control-Css"
                     v-model="Name" @input="$v.Name.$touch()" :class="{Invalid : $v.Name.$error}">
                  <p v-if="$v.Name.$dirty&& !$v.Name.required ">Name requird</p>
              <br>
              <input type="text" placeholder="Your Email" class="form-control Form-Control-Css" v-model="Email" @input="$v.Email.$touch()"
              :class="{Invalid : $v.Email.$error}"
              >
              <p v-if="!$v.Email.email">Email is Not Valid</p>

            </div>
            <div class="col-md-4  col-sm-6 mt-2  ">
              <input type="text" placeholder="Your Phone" class="form-control Form-Control-Css" v-model="Phone">
              <br>
              <input type="date" placeholder="Date And Time" class="form-control Form-Control-Css">

            </div>
            <div class="col-md-4 col-sm-6 mt-2  ">
              <input type="text" list="TypeOfCourse" class="form-control Form-Control-Css" placeholder="Select Type Of Course">
              <datalist id="TypeOfCourse">
                <option value="Safe Driving"></option>
                <option value="Motor Home Drivers"></option>
              </datalist>
              <br>
              <input type="text" list="TypeOfCar" class="form-control Form-Control-Css" placeholder="Select Type Of Car">
              <datalist id="TypeOfCar">
                <option value="Sedan"></option>
                <option value="HatchBack"></option>
                <option value="Truck"></option>
              </datalist>

            </div>
          </div>
          <div class="col-md-2 mx-auto my-3">
            <button class="Blue-back Feature-btn btn text-white w-100 h-25">Click Me</button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import{required,maxLength,email} from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
                Name:'',
                Email:'',
                Phone:'',
            }
        },
        validations:{
            Name:{
                required
            },
            Email:{
                email
            }
        }

    }
</script>

<style scoped>
.Invalid{
  background-color: red;
}
</style>
