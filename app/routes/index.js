// app/routes/todos.js

import Ember from 'ember';

export default Ember.Route.extend({

  model() {



    return {
      books: [{
        title: "Create Ember app",
        author: "Create Ember 212",
        thumb: 'assets/images/thumb-1.png'
      },
      {
        title: "Read Ember Igniter",
        author: "Master Ember",
        thumb: 'assets/images/thumb-2.png'
       }],

       featured: [{
        title: "Create Ember app",
        author: "Create Ember 212",
        thumb: 'assets/images/thumb-3.png'
      }]


    };


  }


});