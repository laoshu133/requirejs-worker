define(function() {
    return {
        version: '1.0.0',
        load: function(name, req, onLoad, config) {
            if(config.isBuild) {
                onLoad();

                return;
            }

            onLoad(function() {
                var url = req.toUrl(name);

                // auto pad ext
                if(url.slice(-3) !== '.js') {
                    url += '.js';
                }

                return new Worker(url);
            });
        }
    };
});