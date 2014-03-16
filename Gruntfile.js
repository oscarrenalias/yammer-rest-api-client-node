module.exports = function(grunt) {  
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.initConfig({ 
    jasmine_node: {
        coverage: {
        },
        options: {
          forceExit: true,
          match: '.',
          matchall: false,
          extensions: 'js',
          specNameMatcher: 'spec',
          captureExceptions: true,
          junitreport: {
            report: false,
            savePath : "./build/reports/jasmine/",
            useDotNotation: true,
            consolidate: true
          }
        }
    }  
  });

  // Default task.  
  grunt.registerTask('default', 'jasmine_node');  
};