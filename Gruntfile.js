module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                indent: 4,
                undef: true,
                trailing: true,
                laxbreak: true,
                funcscope: false,
                node: true,
                jquery: true,
                browser: true,
                es3: true,
                globals: {
                    describe: false,
                    it: false,
                    before: false,
                    after: false,
                    assert: false
                }
            },
            files: [
                'Gruntfile.js',
                'karma.conf.js',
                'src/js/*.js',
                'test/spec/*.js'
            ]
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['src/**/*'],
                tasks: ['less', 'copy']
            }
        },
        connect: {
            local: {
                options: {
                    port: 1234
                }
            }
        },
        less: {
            style: {
                options: {
                    paths: ['src/less'],
                    cleancss: true
                },
                files: {
                    "build/flipswitch.css": "src/less/flipswitch.less"
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/flipswitch.min.js': ['src/js/flipswitch.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['*.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {src: 'src/js/flipswitch.js', dest: 'dist/flipswitch.js'},
                    {src: 'build/flipswitch.css', dest: 'dist/flipswitch.css'}
                ]
            }
        },
        espower: {
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test/',
                        src: ['**/*.spec.js'],
                        dest: 'espowered/',
                        ext: '.js'
                    }
                ]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-espower");
    grunt.loadNpmTasks("grunt-karma");

    grunt.registerTask('default', ['jshint', 'espower', 'karma']);
    grunt.registerTask('test', ['jshint', 'espower', 'karma']);
    grunt.registerTask('build', ['less', 'uglify', 'cssmin', 'copy']);
    grunt.registerTask('server', ['less', 'uglify', 'cssmin', 'copy', 'connect', 'watch']);
};