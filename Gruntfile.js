/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

module.exports = function(grunt) {
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        clean : ['www'],
        
        copy : {
            angular : {
                src:'www_dev/bower_components/angular/angular.min.js',
                dest:'www/bower_components/angular/angular.min.js'
            },
            
            ionic : {
                files: [
                {
                    src:'www_dev/bower_components/ionic/release/js/ionic.min.js',
                    dest:'www/bower_components/ionic/release/js/ionic.min.js'
                },
                {
                    src:'www_dev/bower_components/ionic/release/js/ionic-angular.min.js',
                    dest:'www/bower_components/ionic/release/js/ionic-angular.min.js'
                }]
            },
            angular_ui_router : {
                src:'www_dev/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                dest:'www/bower_components/angular-ui-router/release/angular-ui-router.min.js'
            },
            
            angular_animate : {
                src:'www_dev/bower_components/angular-animate/angular-animate.min.js',
                dest:'www/bower_components/angular-animate/angular-animate.min.js'
            },
            
            angular_sanitaze : {
                src:'www_dev/bower_components/angular-sanitize/angular-sanitize.min.js',
                dest:'www/bower_components/angular-sanitize/angular-sanitize.min.js'
            },
            
            collide : {
                src:'www_dev/bower_components/collide/collide.js',
                dest:'www/bower_components/collide/collide.js',
            },
            angular_translate: {
                src:'www_dev/bower_components/angular-translate/angular-translate.min.js',
                dest:'www/bower_components/angular-translate/angular-translate.min.js'
            },
            
            ng_storage: {
                src:'www_dev/bower_components/ngstorage/ngStorage.min.js',
                dest:'www/bower_components/ngstorage/ngStorage.min.js'
            },
            
            app : {
                files : [
                {
                    src:'www_dev/index.html',
                    dest:'www/index.html'
                },
                {
                    src:'www_dev/app.js',
                    dest:'www/app.js'
                },
                {
                    src:'www_dev/config.xml',
                    dest:'www/config.xml'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/menu/',
                    src:'**',
                    dest:'www/modules/menu/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/remote/',
                    src:'**',
                    dest:'www/modules/remote/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/sound/',
                    src:'**',
                    dest:'www/modules/sound/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/light/',
                    src:'**',
                    dest:'www/modules/light/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/settings/',
                    src:'**',
                    dest:'www/modules/settings/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/translations/',
                    src:'**',
                    dest:'www/modules/translations/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/modules/btletest/',
                    src:'**',
                    dest:'www/modules/btletest/'
                },
                
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/assets/css/',
                    src:'*.min.css',
                    dest:'www/assets/css/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/assets/img/',
                    src:'**',
                    dest:'www/assets/img/'
                },
                {
                    flatten:true,
                    expand:true,
                    cwd:'www_dev/assets/fonts/',
                    src:'**',
                    dest:'www/assets/fonts/'
                }]
            },
            
            ionicons_dev : {
                flatten:true,
                expand:true,
                cwd:'www_dev/bower_components/ionic/release/fonts',
                src:'**',
                dest:'www_dev/assets/fonts/'
            }
        },
            
        sass: {
            dist:{
                files:{
                    'www_dev/assets/css/ionic_make.css':'www_dev/assets/scss/make.scss'
                }
            }
        },
        
        cssmin: {
            minify: {
                expand: true,
                cwd: 'www_dev/assets/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'www_dev/assets/css/',
                ext: '.min.css'
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html2js');
    
    grunt.registerTask('default', ['clean']);
    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('css', ['sass', 'cssmin']);
    
    grunt.registerTask('ionicons-dev', ['copy:ionicons_dev']);
}
