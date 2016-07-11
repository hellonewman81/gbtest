// app/routes/index.js

import Ember from 'ember';

export default Ember.Route.extend({

  model() {



    return {
      books: [{
        title: "El Pooch",
        author: "Alex Nelson",
        thumb: 'assets/images/thumb-1.png'
      },
      {
        title: "The Flight",
        author: "Scott Masterson",
        thumb: 'assets/images/thumb-2.png'
       }],

       featured: [{
        title: "Number 10",
        place: "Whitehave Beach",
        description: "Whitsunday Island, Whitsunday Islands.",
        thumb: 'assets/images/thumb-3.png'
      }]


    };


  }


});