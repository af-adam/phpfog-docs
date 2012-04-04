---
layout: doc-page
title: PF Command Line Tool
weight: 2
---

PHP Fog uses git to give you access to your code, modify it, and push changes to the server. Git is an extremely powerful and flexible tool for managing code, but it's also pretty complex and can be intimidating for developers who haven't used it before. SSH key management can also be pretty complicated and error-prone. That's why we created the PF Command Line Tool: to allow developers to jump into PHP Fog as quickly and simply as possible.

PF is a command line tool for managing PHP Fog apps from the terminal. The tool allows you to list, view, and delete apps. It also does more advanced operations for you, like set up your SSH keys for multiple PHP Fog accounts and deploy apps using git submodules. 

Note: PF modifies your SSH configuration, so we highly recommend that once you install the PF tool, you use it to clone and deploy apps instead of git. 

Prefer to just use git? Comfortable with SSH keys already? PF is completely optional! Feel free to skip ahead to the section on [SSH keys](/getting-started/ssh) or [git](/getting-started/git).

### 1. Download and install PF.

    $ curl -s https://raw.github.com/phpfog/pf/master/bin/installer | php 

### 2. Set up your credentials in PF.

    $ pf setup 

### 3. List your apps.

    $ pf list apps 

This will allow you to pick the name/id to use to download an app in the next step.

### 4. Download your source code.

To get the code we'll use the "pf clone" command. You can use the "ID" or the "Name" of the app list in the previous step. 

    $ pf clone 811 

Note: The first time you run this command, it will ask you to authorize the SSH address. Make sure to type in 'yes'.

Running into problems with this step? Check out our guide on [troubleshooting ssh](/troubleshooting#ssh).

### 5. Add a new file and push the change to the server.

Change your current working directory to the git repo.

     cd foo.phpfogapp.com/  

Create a new file called `helloworld.php` and populate it with some text.

     
	<?php
	echo "hello world";
	?>
 

### 6. Add the file to staging.

    $ git add . 

This command tells git to "stage" the file to get ready to commit to your repository. The "." adds all the files in this directory recursively.

### 7. Commit your changes.

    $ git commit -m "my first update" 

This commits the new file to your git repository. It's still local, but now it's ready to be uploaded (i.e. "pushed"). 

### 8. Push your changes.

    $ pf push 

This command uploads the committed changes to PHP Fog.

### Done!

That's it! Wait a couple of minutes for your code to deploy and you should be able to see your changes live!

Ready for more? Continue on to [customize your app](/customize/).
