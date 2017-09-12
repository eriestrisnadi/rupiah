module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
      ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
      ' * <%= pkg.description %>\n' +
      ' *\n' +
      ' * Made by <%= pkg.author %>\n' +
      ' * Under <%= pkg.license %> License\n' +
      ' */\n',
    uglify: {
      plugin: {
        options: {
            banner: '<%= banner %>',
            sourceMap: true,
            sourceMapName: 'dist/<%= pkg.name %>.js.map'
        },
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>'
      },
      build: {
        src: 'src/*.js',
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
        lib: {
        src: ['src/*.js']
      },
    },
    connect: {
      server : {
        options: {
          open: true,
          port: 3000,
          keepalive: true,
          hostname: 'localhost'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.registerTask('default', ['jshint', 'concat', 'uglify'])
  grunt.registerTask('serve', ['connect:server'])
}
