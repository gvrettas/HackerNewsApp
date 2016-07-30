# HackerNews Demo App

This is a simple demonstration app that fetches the top stories from [HackerNews](https://news.ycombinator.com/) 
using its API.


## Downloading and Running

To download and run the app, you must clone the repository and install the dependencies:

### Prerequisites

To clone the repository, you need to download git. You can get git from
[http://git-scm.com/](http://git-scm.com/).

The dependencies for this app are managed using npm.
You can download npm from [http://nodejs.org/](http://nodejs.org/).

### Clone HackerNewsApp

Clone the HackerNews Apps repository using git:

```
git clone https://github.com/gvrettas/HackerNewsApp.git
cd HackerNewsApp
```

### Install Dependencies

The dependencies for this app are installed using npm and bower.

`npm` has been configured to automatically run `bower` so you just need to run:

```
npm install
```

This will also call `bower install`.

### Run the Application

This application is configured to be run using [Gulp](http://gulpjs.com/).
Gulp will have been installed as one of the dependencies above.
To run the app, simply use

```
gulp serve
```
