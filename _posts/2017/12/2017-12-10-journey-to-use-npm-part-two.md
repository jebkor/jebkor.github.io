---
layout: post
title: Journey to use NPM in your projects. Part Two - Installing, managing and updating packages
description: A journey of learning how to use NPM and update packages, by jebkor
draft: false
---


Welcome back. I hope you gained a little bit of insight from my last blog post.
I thought it would be a great place to start for people to either brush up on old knowledge or gain new knowledge.

<br>

# What happened last?
Hopefully I explained myself properly in my last post, but last time we went over the process of installing everything, both Node.js and NPM, and started to show some VERY basic examples of how to use NPM correctly.

Before we go in to build-systems and bundlers, I would like to take this time, to explain some of the many **flags** that you can use with NPM.

<br>

# Erhm... Flags?
Yup, flags. I know, confusing. When you are installing packages, you are more than likely to come across this command:
> npm install bootstrap --save-dev

<br>

What I want to focus on with this post, is the **--save-dev** part of the command. That is called a flag; A kind of parameter to the command that, in this case, chooses how to install the package.

<br>

# Okay, flags. How many are there then?
Almost as many as there are countries in the world. Well, maybe not as many, but there are a lot of flags.

Here is a small list of some of the most important and used flags:
* --save
* --save-dev
* -D
* -global
* -g

These are the most commonly used flags when installing packages with NPM, and below here, I will go into some detail on what they mean, how to use them, and why you should care. Here we goooo...

<br>

# Knowledge comes with a price...
... and that price is confusion. Any new developer working with NPM will get confused about two sections in the package.json file: The **"dependencies"** section and the **"devDependencies"** section. These sections determines if the application you are developing is dependant on the package to run, or if it's *just* a library that gets compiled. A rule of thumb:
> if it's a compiler, transpiler or some other application-running package, install it with --save-dev or -D flag. Otherwise use --save or nothing

Using **"--save-dev"** will make the package appear in the **"devDependencies"** section, and using **"--save"** will make the package appear in the **"dependencies"** section.

<br>

## Dependencies
This section is for all the packages you have installed, that is used in your application, and are not necessary for the app to run; Bootstrap, Moment.js or lodash would appear here, because they are libraries to be used in your application. As long as the package isn't a compiler or transpiler, this is where they should go.

<br>

## DevDependencies
This section is the opposite of **dependencies**. This is where the packages that are needed for the application to run, is installed. Such packages includes, but are not limited to Gulp and Webpack, because they are needed to compile the code, for it to run in the browser. Installing with the **"--save-dev"** or **"-D"** flag, will install the packages under **"devDependencies"**.

<br>

# Okay, I get it now... But could I get more info, please?
I have briefly mentioned some of the flags in the previous section, but I will try and list them all for you here, now.

<br>

## --save or nothing
These flags will make the package appear in the **"dependencies"** section, and be installed as a package, that is just used inside of your application.
Before NPM v.5.5.0, you **had** to specify the **--save** flag, for the package to appear in the **"dependencies"** section, but now, if you leave out any flag, it will by default, behind the scenes, use the **"--save"** flag, without you having to do anything. Neat.

<br>

## --save-dev or -D
These flags will make the package appear in the **"devDependencies"** section, and be installed as a package, that is required for your application to run, for example, Webpack or Gulp.js.

A relatively new flag can be used instead; **"-D"**. This flag does the same as **"--save-dev"**, but is just a shorthand. A nice little knowledge-bomb.

<br>

## --global or -g
These flags will install the package to the global scope. What does that mean?

Let us take Gulp.js as an example. For you to use Gulp commands in your "Command Prompt" or "Terminal", you would just type:
> gulp "taskname"

But, if you haven't installed Gulp globally, the **"Gulp"** keyword, won't be recognised, and therefore, you can't use it. You *CAN* however do this, if you have installed Gulp.js globally to your computer:
> npm install gulp --global

Now, the gulp keyword can be recognised, and you can run a task in your project, whenever it pleases you. This also applies to webpack and *MANY* other packages.

<br>

## Bonus: install or i
People use different syntaxes when writing their documentation for how you should install their package. Some will write:
> npm install gulp --save-dev

And others will write:
> npm i gulp --save-dev

The **"install"** and **"i"** keyword, does the same. No difference. This is just another one of those nifty shorthands to use.

<br>

# Check for updates
Sometimes, a package developer releases a new version of a package. It could be a major update. Maybe a minor update. Or even an update that no one notices because it's a bugfix-update. It matters not for you, because in a moment, you will be armed with the knowledge of how to check for and update the... updates, that might or might not appear. This is all you have to do:

In the root of your project, where your package.json file is, open a command line and type the following:
> npm outdated

That's it! After a short while, it should list all of the packages with an update available, and some verison information:

<img src="/public/images/packages-and-their-updates.png" title="Screenshot of the list of package updates" alt="Screenshot of the list of package updates"/>



Next, if you are fine with the changes that is coming, all you have to do, is type:
> npm update

<img src="/public/images/packages-after-update.png" title="Screenshot after the updated process" alt="Screenshot after the updated process"/>


This should start the update process, and that's it. You have successfully updated the packages of your application.

### Protip: It's a good idea to commit your application to your version control before, for a easy way back IF one of the packages comes with a unforseen bug.

<br>

# Final thoughts
Hopefully, you have a better understanding of how the flags work now. In the beginning, it's going to take some getting used to, always considering if you should use the **"--save-dev"** or the **"--save"** flag, and whether to use the shorthand or not.

Next time, I will write about how NPM and Gulp.js works together, how to setup a build-system to compile SASS (SCSS) and hopefully get you interested in getting comfortable with using SASS (SCSS) instead of regular CSS.

As always, I would always like to know what you thought about the post, so shoot me a DM on my [Twitter]("https://twitter.com/jebkor_") and let me know.

Take care