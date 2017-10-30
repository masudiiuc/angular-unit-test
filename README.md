# `angular-Unit-Test` 



## Getting Started

To get you started you can simply clone the `angular-unit-test` repository and install the dependencies:

### Prerequisites


We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-seed`

Clone the `angular-seed` repository using git:

```
git git@github.com:masudiiuc/angular-unit-test.git
cd angular-unit-test
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*


## Testing

There are two kinds of tests in the `angular-seed` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `angular-unit-test` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.

To run the Test,
```
karma start
```

Enjoy......