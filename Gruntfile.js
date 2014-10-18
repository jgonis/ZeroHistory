/**
 * Created by jgonis on 17/10/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['cpp/example.js', 'js/GravityWellWorker.js'],
                dest: 'js/concat/GravityWellWorkerConcat.js'

            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat'])
};