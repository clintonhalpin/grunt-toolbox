module.exports = function(grunt) {
    grunt.initConfig({
            less: {
                production: {
                    options: {
                            yuicompress: true
                        },
                    files: {
                        "public/assets/stylesheets/style.css": "public/assets/stylesheets/style.less"
                    }
                }
            },
            watch: {
                styles: {
                    files: [ 'public/assets/stylesheets/style.less' ],
                    tasks: [ 'less' ]
                },
                options: {
                    livereload: true,
                }
            }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'watch', 'less' ]);
};