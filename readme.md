## Installation Instruction

---

1. Run **npm install** after you download the project.
2. Run **npm run dev** which would fire the server.

## Discussion of Technolgies used

---

1. **Node.js** - a back-end, Javascript runtime environment that executes Javascript code outside of a web browser.
2. **Express** - a lightweight web application framework which helps you to make robust API qucik and easy.
3. **Cors** - to handle a secure cross-origin requests and data transfers between browsers and servers.
4. **Nodemon** - automatically fires the server or node application when file changes in the directory are detected.
5. **Jest** - a testing library used to test the code.
6. **MonogoDb Atlas** - a fully managed cloud database for modern applications. Atlas is the best way to run MongoDB, the leading modern database.

---

## Implemented CRUD feature

1. I have been able to implement create, read, update and delete service for the customer information for the application.
2. The API for these services and their functionality are mentioned below. Since, I have not deployed the applicaiton, the API will be served from my localhost and also the data is being stored in my cloud Customer database,

http://localhost:3000/ => returns the list with all the customers information (READ)
http://localhost:3000/create => createst the new customer infromation and stores in the database(CREATE)
http://localhost:3000/customerId => updates the information of the customer, by searching through the ID (UPDATE)
http://localhost:3000/delete/customerId => deletes the infromation of the particular customer according to the id. (DELETE)

**Note:** => You need to install HTTP Rest client extension in the VScode to make the API call inside VScode and see the response inside there as well. I have made a requests folder with api.http file where you can see the different CRUD request sent.
Also for the MongoURI key in default.json file inside config folder, I am sending it as empty for the application, because it would show my password and username, but if you want to connect you can generate your connection string with the help of the database. For exapmle, it would look something like this, you have to get your own username and password:

**mongodb+srv://<username>:<password>@cluster0.nslkm.mongodb.net/<dbname>?retryWrites=true&w=majority**
