var App = {
    Views: {},
    Routers: {},
    init: function() {
        new App.Routers.Hosts();
        Backbone.history.start();
    }
};