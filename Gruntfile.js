'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    browserify: {
      js: {
        // A single entry point for our app
        src: 'app/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'app/bundle.js',
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'app/bundle.js',
        dest: 'dist/app/app.min.js'
      },
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'app/style/main.css': 'app/style/main.scss'
            }
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/style/main.min.css': ['app/style/main.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'app',
        src: ['**/*.html', '*.html'],
        dest: 'dist/'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['assets/**/*'], dest: 'dist/'}
        ]
      }
    },
    watch: {
      scripts: {
        files: ['app/*.js', 'app/**/*.js'],
        tasks: ['browserify', 'uglify'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: 'app/style/*.scss',
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: true,
        },
      },
      configFiles: {
        files: [ 'app/**/*.html' ],
        tasks: ['htmlmin'],
        options: {
          reload: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-sass');

  // Default task.
  grunt.registerTask('default', ['browserify', 'sass', 'uglify', 'cssmin', 'htmlmin', 'copy', 'watch']);

};
