import Ember from 'ember';

export default Ember.Controller.extend({
  repo: Ember.inject.service(),
  remaining: Ember.computed.filterBy('model', 'completed', false),
  completed: Ember.computed.filterBy('model', 'completed'),
  actions: {
    createTodo(e) {
      if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
        var todo = this.get('store').createRecord('todo', { title: e.target.value.trim(), completed: false });
        todo.save();
        e.target.value = '';
      }
    },

    clearCompleted() {
      this.get('completed').forEach(todo => {
        todo.destroyRecord();
      });
    }
  }
});
