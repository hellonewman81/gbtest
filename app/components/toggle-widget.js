import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function(){
        Ember.$('body').addClass('js_navInactive');

        // Close mobile navigation if the backdrop is clicked
        Ember.$('html').on('click', '.backdrop', function(){
            Ember.$('body').addClass('js_navInactive');
            Ember.$('body').removeClass('js_navActive');
        });

    },
    actions: {
        toggleNav(){
            Ember.$('body').toggleClass('js_navInactive');
            Ember.$('body').toggleClass('js_navActive');
        }
    }
});
