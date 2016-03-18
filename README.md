# Gulp-Email-Pack with Foundation for Email

It aims to help speed up email template production by allowing you to use SCSS and inlining the generated CSS for you.

# Installation

To use Gulp-Email-Pack you need to have both [Node.js](http://nodejs.org/) and [Gulp.js](http://gulpjs.com/) installed . 

You can install it by cloning this repository to a local folder and running the following from inside the directory.

```javascript
    npm i && bower i
```
This will install all dependencies.

If the install fails try running the install as root. For some reason browsersync seemed to fail for me unless installed as root.

```javascript
    sudo npm install
```

This now uses [MailChimp's](http://mailchimp.com/) CSS inliner as I've found it to work better across browsers. You will now need a Mailchimp API key which you can add to the `config.json` file.
You can get a Mailchimp API by creating one in your Mailchimp account. [Instructions Here](http://kb.mailchimp.com/accounts/management/about-api-keys)

# Using the package

You can use the Gulp-Email-Creator workflow by creating your HTML in the `./src/html/` directory and your SCSS in the `./src/scss/` directory.

## Compile Templates
Running `gulp` from the terminal will build the new HTML email template into the `./output/` directory and the proceed to watch `./src/html/` and `./src/scss/` for any updates.

The gulpfile has browsersync built in and will reload on any HTML or CSS edit, allowing you to focus on your code.
