module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'themes/demo/**',
                    dest: 'build/'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: 'build/themes/demo',
                    src: ['**'],
                    dest: 'themes/sjae-core/'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'build/themes/demo/assets/fonts',
                    src: ['**'],
                    dest: 'fonts/'
                }]
            }
        },
        concat: {
            dist: {
                src: ['lib/**/*.js'],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },
        useminPrepare: {
            html: 'build/themes/demo/layouts/*.htm',

        },
        usemin: {
            html: ['build/themes/demo/layouts/*.htm'],
            options: {
                dest: 'dist'
                }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('build', ['concat:dist']);
    


};