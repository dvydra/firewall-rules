App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.hosts = this.options.hosts;
        this.render();
    },

    render: function() {
        if(this.hosts.length > 0) {
            var out = "<h3><a href='#new'>Create New</a></h3><ul>";
            _(this.hosts).each(function(item) {
                out += "<li><a href='#hosts/" + item.id + "'>" + item.escape('name') + "</a></li>";
            });
            out += "</ul>";
        } else {
            out = "<h3>No hosts! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});