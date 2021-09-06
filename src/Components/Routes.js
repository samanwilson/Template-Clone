


var Index = resolve => {
  require.ensure(['./index.vue'], () => {
    resolve(require('./index.vue'));
  });
};
var Courses = resolve => {
  require.ensure(['./Courses.vue'], () => {
    resolve(require('./Courses.vue'));
  });
};
var News = resolve => {
  require.ensure(['./News.vue'], () => {
    resolve(require('./News.vue'));
  });
};
var Contacts = resolve => {
  require.ensure(['./Contacts.vue'], () => {
    resolve(require('./Contacts.vue'));
  });
};
var Faq = resolve => {
  require.ensure(['./Faq.vue'], () => {
    resolve(require('./Faq.vue'));
  });
};
var CourseDetails = resolve => {
  require.ensure(['./Course Details.vue'], () => {
    resolve(require('./Course Details.vue'));
  });
};

export const Routes =[
  {
    path:'/',
    component:Index

  },
  {
    path: '/Courses',
    component: Courses
  },
  {
    path:'/News',
    component:News
  },
  {
    path:'/Contacts',
    component:Contacts
  },
  {
    path:'/Faq',
    component:Faq
  },
  {
    path:'/CourseDetails',
    component:CourseDetails
  }
  ,{
  path:'*',
  redirect:'/',
    beforeEnter:(to,from,next)=>{
    alert("Page not Found")
      next();
}
  }


]

