module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"

                ],
                "dest": "server/public/vendor/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: "css/style.css",
                "dest": "server/public/"
            },
            views: {
                expand: true,
                cwd: "client/",
                src: [
                    "views/routes/car_input.html",
                    "views/routes/home.html"
                ],

                "dest": "server/public/"
            },
            controller: {
                expand: true,
                cwd: "client/",
                src: [
                    "scripts/controllers/mpg_controller.js",
                    "scripts/controllers/auto_info.js"
                ],
                "dest": "server/public/"
            },
            notmini: {
                expand: true,
                cwd: "client/",
                src: [
                    "scripts/app.js"
                ],
                "dest": "server/public/"
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};