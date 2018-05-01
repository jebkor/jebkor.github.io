---
layout: post
title: Journey to use NPM in your projects. Part One - Installing and using NPM
description: Part One of many blogposts about NPM and how you can use them, in your own projects
draft: false
---

Why hello there.

My first real blog post. How exciting! And this blog post will be the first of, likely, many to teach *you* about NPM and how you can use it in *your* projects. If you've always wanted the ‘a-ha’ moment, when trying to figure out NPM, hopefully this journey will help you get there. Hopefully I can lift the veil and show you the ways of NPM.

<br>

## What is NPM?
NPM, or *Node Package Manager*, is as the name implies, a manager for packages used with/for Node.js. Packages can be a lot of different things: A CSS framework, a javascript framework or bits and pieces of reusable code you want to use in your projects.

<br>

## Why would I use NPM?
If you want to do everything the round-about and tough way, go ahead: rely on CDN's or zip-downloaded files to use some library or chunk of code. If you, on the other hand would like to do everything the ‘short’ and easy way, use NPM.

**Disclaimer:** To use NPM packages to their fullest, it's recommended that you look into build-systems or bundlers. If you know nothing about them, I will have a piece on it at a later date, but it could be worth checking out [Gulp.js](https://gulpjs.com) or [Webpack](https://webpack.js.org/).

With build-systems or bundlers, you can just include the package in your code, and when the code compiles, the package will be included on your website/in your application, without the need to rely on CDN's to be up and running, or local files to exist. Neat, right?

<br>

## Okay, you've sold me. How do I get NPM?
To be able to use NPM on your machine, you need to install Node.js. Node.js, if you don't know, *Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.* - 
[Node.js](https://nodejs.org)

To install Node.js, head to the webpage, and download the *recommended* version (as of writing this, it's 8.9.1 LTS). The *latest features* version, is the most bleeding and cutting edge version, and are more likely to contain bugs that can impede your workflow, or stop NPM from working. In most cases, download the recommended version.

You can check if you've successfully installed Node.js by opening a CMD or Terminal window, and type:

> node -v

A version number should now appear. Congrats! You've successfully installed Node.js

Next, is to install NPM. You can do this by typing:

> npm install npm@latest -g

This will install the latest, stable version of NPM. the *-g*, or *-global* flag, means NPM will be installed globally, so the NPM keyword can be accessed anywhere on your computer. Other flags are available, and we will explore these later.

To check if NPM is installed correctly, simply type the following in a CMD window:

> npm -v

A version number should appear, and that means you have successfully installed NPM. Way to go!
Now you should be ready to get started with NPM. Go explore some packages!

<br>

## Don't leave me yet, Jesper!
What, you want and example of usage as well? Fine, I'll show you, how use your packages in the simplest yet worst way possible, just to get you started.

Say you wanted to use the framework Moment.js to handle all kinds of dates, all you need to do is: 

> npm install moment --save

This will install Moment.js as a dependency to your application, and download the files to a *node_modules* folder in your project root. Don't worry, I will show the flow of installation as well as usage with Gulp.js next time.

Next what you can do, which I **highly** suggest **not** doing, is link the node_modules file directly as a script:
```html
<script src="./node_modules/moment/dist/moment.min.js"/> //or whatever the path is
```


<br>

I don't want you to do this, because when your application hits production, the *node_modules* folder won't exist on the server. Or rather, it shouldn't exist on the server. This is why you would want a build-system or bundler to handle the compilation, where Moment.js is included.

As my final demonstration, because I've already talked for a *loooong* while, this is how a file, that is compiled using Gulp.js and Babel, could look like:
```javascript
import Moment from 'moment'; //import the moment library
console.log(Moment().format('MMMM Do YYYY'));  // December 3rd 2017
```

<br>

That's it!. When the javascript file is compiled and the *bundles/built* file is included on your page, the output should show the current date in a console.log.

<br>

## Final words
This is the end of Part One of the *Journey to use NPM in your project. Part One - Installing and using NPM*.

My next post, will be explaining how to setup a simple Gulp.js project to compile Javascript files, explaining the --save and --save-dev flags in NPM and when to use either --save or --save-dev.

Untill then, keep it frosty! ⛄
