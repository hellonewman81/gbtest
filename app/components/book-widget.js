import Ember from 'ember';

export default Ember.Component.extend({
  displayForm: false,
  responseMessage: '',
  actions: {
    addBook(title, author) {

      alert(Ember.isEmpty(this.get('books').findBy('title', title)));
      // Check if title exists or shows an empty value
      if( !Ember.isEmpty(this.get('books').findBy('title', title)) || Ember.isEmpty(title) ){

        // return an error message
        this.set('responseMessage', 'Book already exists and has not been added.');


      }else {
        // Title is not empty and doesnt already exist.
        this.get('books').insertAt(0, { title: title, author: author, thumb: 'assets/images/thumb-1.png' });

        this.set('responseMessage', '');
      }
    },
    offerShow() {
        this.set('displayForm', true);
    },
    offerHide() {
        this.set('displayForm', false);
    }
  }

});