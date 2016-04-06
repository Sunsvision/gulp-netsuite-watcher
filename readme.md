# Gulp NetSuite Watcher

This tool allows to monitor for local changes on NetSuite project. Any changed file will be uploaded to the file cabinet and deployed automatically (when watch mode is active). Also you can download or upload all or single file using command line.  

Config built using great tool https://github.com/suiteplus/nscabinet

## Installation

### Actions in your NetSuite account

1) Download https://github.com/suiteplus/nscabinet/blob/master/restlet/nscabinet-restlet.js  
2) Sign in to the NetSuite  
3) Customization / Scripting / Scripts / New / RESTlet  
4) Name => REST-NScabinet  
5) ID => _rest_nscabinet  
6) Script file / New  
7) File name => REST-NScabinet  
8) Folder => RESTlets (from bundle)  
9) Available for suitebundles => check  
10) Select nscabinet-restlet.js file  
11) Save  
12) Post function => post  
13) Save / Deploy Script  
14) ID => nscabinet_deployed  
15) Roles => Administrator  
16) Deployed => check  
17) Save  

### Local actions

1) Install latest npm (come with NodeJS https://nodejs.org/)  
2) In terminal: git clone https://github.com/Sunsvision/gulp-netsuite-watcher.git  
3) In terminal: cd gulp-netsuite-watcher  
4) In terminal: npm i  
5) Copy all NetSuite file structure 1 in 1 to gulp-netsuite-watcher root folder  
6) Configure connection params to "nsconfig" variable in gulpfile.js file  
7) If you have some project or IDE specific folder or file that should not be loaded to NetSuite file cabinet - add it as exclude to "filesystem" variable in gulpfile.js file (eg. "!node_modules/**" will ignore all node_modules files)  

## Using it

Run one of the following gulp tasks:

* gulp: (live mode, without parameters) will watch for any file changed in filesystem folder and auto upload to NS server - so just run it, start working on your project and your changings will be uploaded to NetSuite filecabinet automatically  
* gulp download: (run once) will download all files from NS server filesystem  
* gulp download --file file_name: (run once) will download selected file from NS server filesystem  
* gulp upload: (run once) will upload all files to NS server  
* gulp upload --file file_name: (run once) will upload selected file to NS server  