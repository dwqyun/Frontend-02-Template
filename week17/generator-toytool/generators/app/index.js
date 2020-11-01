var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  async initPackage() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      }]);
    const pkgJson = {
      "name": this.answers.name,
      "version": "1.0.0",
      "description": "",
      "files": [
        "generators"
      ],
      "main": "src/main.js",
      "scripts": {
        "build": "webpack",
        "test": "mocha --require @babel/register",
        "coverage": "nyc mocha --require @babel/register"
      },
      "author": "",
      "license": "ISC",
      "keywords": [
        "yeoman-generator"
      ],
      "dependencies": {
      },
      "devDependencies": {
      }
    }

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall(["vue"], { 'save-dev': false });
    this.npmInstall([
      "webpack",
      "webpack-cli",
      "vue-loader",
      "vue-style-loader",
      "css-loader",
      "copy-webpack-plugin",
      "vue-template-compiler",
      "babel-loader",
      "babel-plugin-istanbul",
      "@istanbuljs/nyc-config-babel",
      "mocha",
      "nyc",
      "@babel/core",
      "@babel/preset-env",
      "@babel/register",
    ], { 'save-dev': true });
  }

  copyFiles() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      { title: this.answers.name }
    );
    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('sample-test.js'),
      this.destinationPath('test/sample-test.js'), {}
    );
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'), {}
    );
    this.fs.copyTpl(
      this.templatePath('.nycrc'),
      this.destinationPath('.nycrc'), {}
    );
  }
};