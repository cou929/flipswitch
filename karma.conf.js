module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/power-assert/build/power-assert.js',
            'test/fixture/*.html',
            'src/js/flipswitch.js',
            'espowered/**/*.js'
        ],
        preprocessors: {
            'test/fixture/*.html': ['html2js']
        },
        exclude: [],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
