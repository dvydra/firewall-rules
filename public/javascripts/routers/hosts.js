App.Routers.Hosts = Backbone.Router.extend({
    routes: {
        "hosts/:id":   "edit",
        "":            "index",
        "new":         "newHost"
    },

    edit: function(id) {
        var host = new Host({ id: id });
        host.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: host });
            },
            error: function() {
                new Error({ message: 'Could not find that host.' });
                window.location.hash = '#';
            }
        });
    },

    index: function() {
        $.getJSON('/hosts', function(data) {
            if(data) {
                var hosts = _(data).map(function(i) { return new Host(i); });
                new App.Views.Index({ hosts: hosts });
            } else {
                new Error({ message: "Error loading hosts." });
            }
        });
    },

    newHost: function() {
        new App.Views.Edit({ model: new Host() });
    }
});