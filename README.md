# yoCordovaAngularStack
[![Build Status](https://api.travis-ci.org/piecyk/yoCordovaAngularStack.png?branch=master)](https://travis-ci.org/piecyk/yoCordovaAngularStack) [![Dependency Status](https://david-dm.org/piecyk/yoCordovaAngularStack.png)](https://david-dm.org/piecyk/yoCordovaAngularStack) [![devDependency Status](https://david-dm.org/piecyk/yoCordovaAngularStack/dev-status.png)](https://david-dm.org/piecyk/yoCordovaAngularStack#info=devDependencies)
>Quick and simple stack for starting to hack with angularjs cordova with yo!

## Getting started
- Make sure you have the following installed:
    - [yo](https://github.com/yeoman/yo): 'npm install -g yo'
    - [grunt-cli](https://github.com/gruntjs/grunt): 'npm install -g grunt-cli'
    - [cordova-cli](https://github.com/apache/cordova-cli): 'npm install -g cordova'
    - [bower](https://github.com/bower/bower) : 'npm install -g bower'
    - Make sure Ruby (gem -v) and Compass (gem install compass) are installed.

- Install any SDKs you need for developing platform applications:
    - [iOS](https://developer.apple.com/xcode/)
    - [Android](http://developer.android.com/sdk/index.html#ExistingIDE)
    - etc...
    
- Install dependencies:
  - clone: 'git clone git@github.com:piecyk/yoCordovaAngularStack.git'
  - next: 'cd yoCordovaAngularStack'
  - install: 'npm install'
  - and get Bower Packages: 'bower install'
  - run (make the magic): 'grunt'
  - for test: 'grunt test'
  - for dev: 'grunt serve'
- Install dependencies for cordova:
  - next go to: 'cd yoCordovaAngularStack/cordova'
  - add: 'cordova platform add android' or for ios: 'cordova platform add ios'
- Run on phone:
  - run on phone (from yoCordovaAngularStack/cordova): 'cordova run android'
  - or run on phone from yoCordovaAngularStack/ : 'grunt run' or for ios: 'grunt run:i'
- Build and run:
  - build and run on android phone: 'grunt go'

## Lib:
0. http://yeoman.io/
1. http://angularjs.org/
2. http://cordova.apache.org/docs/en/3.4.0/guide_cli_index.md.html
3. https://github.com/ftlabs/fastclick
4. http://gruntjs.com/
5. http://bower.io/

## Release History
0.0.1 init hack  