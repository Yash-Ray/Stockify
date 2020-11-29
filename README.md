
install Python Program(Anaconda)
open anaconda prompt
Activate the environment having packages:-
Numpy
Pandas
sckitlearn
tensorflow
matplotlib
keras
dash
dash html components
(If these packages are not installed then install it using anconda navigator)
now open the file directory containing NIFTY50_train.csv,saved_model.h5,stock_app.py,stock_data.csv
run the command line:-
python stock_app.py
Run the file on the localhost given by python.

To run the model:-
Open Python IDE
run the model.py file
(Follow the above statements for downloading packages)

To run web app:

Install mongodb,git bash,node.js and hyper terminal.

For setting hyper terminal:

https://gist.github.com/coco-napky/404220405435b3d0373e37ec43e54a23

After installing hyper terminal ,copy the code from the above mentioned link of github repo and paste it in preferences(in edit option)   top left bar in hyper after deleting previous code in it and then save it .


Close the hyper terminal, restart your computer and then again open it .

Now after installing git bash and node.js make sure to check if these are properly installed by running command  node --version

For setting mongodb in your system follow this link: https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514

Now open the hyper terminal and run command  
cd ~   and press enter and then run command mongod to start mongodb server on your system.

Now open another tab in hyper terminal and run command  
cd ~ and press enter and then run command  mongo to open mongoshell where you can fin all the database and their tables.

Now open third terminal in hyper and go to the root directory where you have downloaded the project folder .


And then type ls and if you find the above folder like app.js,login.html ,sighnup.htlml then you are at the correct directory but if not then cd to the directory like below to find the correct directory of the folder and then again run command ls to make sure that you are at the correct directory. 



 
After this install npm so that you can install npm packages to run the web app
.To install it , run command npm inin -y and press enter.

Install npm packages like express,mongoose ,ejs,body-parser by running the command 
npm i express body-parser mongoose ejs and press enter.


The it will show tha packages are installed and 0 vulnerabilities.

Now install nodemon by running the command npm i -g nodemon
To run the app ,run the command nodemon app.js and press enter.
On the browser search bar type localhost:3000/index to run app on browser.

Now to check data in the database :

Switch to to tab where you start mongo shell in hyper and run the command use UserDB to switch to the web app database.
To show the tables/collections in the UserDB database run show collections and to see the data in each collections run command db.collection.find() where collection represent the name of the tables/collections like (invests , users , mfts,c_datas , invs, c_os , ras , sers).
 
