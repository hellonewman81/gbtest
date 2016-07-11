import Ember from 'ember';

export default Ember.Component.extend({
  displayForm: false,
  responseMessage: '',
  actions: {
    addBook(title, author) {

      // Check if title exists or shows an empty value
      if( !Ember.isEmpty(this.get('books').findBy('title', title)) || Ember.isEmpty(title) ){

        // return an error message
        this.set('responseMessage', 'Book already exists and has not been added.');

      }else {

        // title is not empty and doesnt already exist.
        this.get('books').insertAt(0, { title: title, author: author, thumb: 'assets/images/thumb-1.png' });

        // reset the error message
        this.set('responseMessage', '');
      }
    },
    // hide and show the form
    formShow() {
        this.set('displayForm', true);
    },
    formHide() {
        this.set('displayForm', false);
    }
  }

});