This tool allows to monitor for local changes on NetSuite project. Any changed file will be uploaded to the file cabinet and deployed automatically (when watch mode is active). Also you can download or upload all or single file using command line.
Config built using great tool https://github.com/suiteplus/nscabinet

1) Install npm
2) Download https://github.com/suiteplus/nscabinet/blob/master/restlet/nscabinet-restlet.js
3) Sign in to the NetSuite - Customization / Scripting / Scripts / New / RESTlet
4) Name => SCPQ-REST-NScabinet
5) ID => _scpq_rst_nscabinet
6) Script file / New 
7) File name => SCPQ-REST-NScabinet
8) Folder => SCPQ-RESTlets (from bundle)
9) Available for suitebundles => check 
10) Select file 
11) Save
12) Post function => post
13) Save / Deploy Script
14) ID => nscabinet_deployed
15) Roles => Administrator
16) Deployed => check
17) Save
18) In terminal: mkdir project_folder && cd project_folder
19) In terminal: git clone ...
20) In terminal: npm i
21) Copy bundles & all file structure 1 in 1 to filesystem folder
22) Configure connection params in nsconfig var gulpfile.js file
23) Run one of the following gulp tasks:
	gulp: (live mode, without parameters) will watch for any file changed in filesystem folder and auto upload to NS server
	gulp download: (run once) will download all files from NS server filesystem
	gulp download --file file_name: (run once) will download selected file from NS server filesystem
	gulp upload: will upload all files to NS server
	gulp upload --file file_name: (run once) will upload selected file to NS server