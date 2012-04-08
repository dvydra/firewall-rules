App.Views.Edit = Backbone.View.extend({
  events: {
    "submit form": "save"
  },

  initialize: function() {
    this.render();
  },

  save: function() {
    var self = this;
    var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";

    this.model.save({ name: this.$('[name=name]').val(), location: this.$('[name=location]').val() }, {
      success: function(model, resp) {
        //new App.Views.Notice({ message: msg });

        self.model = model;
        self.render();
        self.delegateEvents();

        Backbone.history.navigate('hosts/' + model.id);
      },
      error: function() {
        new App.Views.Error();
      }
    });

    return false;
  },

  render: function() {
    var out = '<form>';
    out += "<label for='name'>Name</label>";
    out += "<input name='name' type='text' />";

    out += "<label for='location'>Location</label>";
    out += "<input name='location' type='text' />";

    var submitText = this.model.isNew() ? 'Create' : 'Save';

    out += "<button>" + submitText + "</button>";
    out += "</form>";

    $(this.el).html(out);
    $('#app').html(this.el);

    this.$('[name=name]').val(this.model.get('name')); // use val, for security reasons
    this.$('[name=location]').val(this.model.get('location')); // use val, for security reasons
  }
});