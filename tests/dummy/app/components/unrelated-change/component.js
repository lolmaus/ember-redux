import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <button class="unrelated-change" onclick={{action update}}>update</button>
  `
});
