import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    // Submit action to add new books title and author
    submit() {
      // set constants.
      const title = this.get('title');
      const author = this.get('author');

      this.get('onAdd')(title, author);
      this.set('title', "");
      this.set('author', "");

    }
  }

});