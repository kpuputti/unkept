/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        meta: {
            version: '0.1.0',
            banner: '/*! unkept - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* https://github.com/kpuputti/unkept\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'Kimmo Puputti <kpuputti@gmail.com>; Licensed MIT */'
        },
        lint: {
            files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
        },
        test: {
            files: ['test/**/*.js']
        },
        concat: {
            dist: {
                src: ['<banner:meta.banner>', '<file_strip_banner:lib/unkept.js>'],
                dest: 'dist/unkept.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'dist/unkept.min.js'
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint test'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },
        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'lint test concat min');

};
