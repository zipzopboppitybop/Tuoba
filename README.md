# TUOBA

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
Tuoba is a soft clone of Quora. Here you can ask any music related question and get answers from fellow users. You can also answer other user's questions.

<br />

Check out [Tuoba](https://tuoba.onrender.com)!

## Index

[MVP Feature List](https://github.com/zipzopboppitybop/Tuoba/wiki/Features) | [Database Schema](https://github.com/zipzopboppitybop/Tuoba/wiki/Database-Schema) |
[User Stories](https://github.com/zipzopboppitybop/Tuoba/wiki/User-Stories) | [WireFrame](https://github.com/zipzopboppitybop/Tuoba/wiki/Wireframe)

## Technologies Used
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white" /><img src="https://img.shields.io/badge/Render-46E3B7.svg?style=for-the-badge&logo=Render&logoColor=white" />


## Splash Page

### Not Logged In
![Splash](./react-app/images/splash.png)

### Logged In
![Splash-Gif](./react-app/images/splash-gif.gif)

### Single Question And Answers
![Single-Question](./react-app/images/single-question.png)

## Getting started
1. Clone this repository:

   `
   https://github.com/zipzopboppitybop/Tuoba
   `
2. Install denpendencies into the root of the repository with the following:

   * `pipenv install -r requirements.txt`

3. Create a **.env** file using the **.envexample** provided

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed:

   * `pipenv shell`
   * `flask db upgrade`
   * `flask seed all

5. Start the app for backend using:

   * `flask run`

6. Install denpendencies into the frontend repository with the following:

   * `npm install`

7. Start the app for frontend using:

   * `npm start`

8. Now you can use the Demo User or Create an account

***

# Features

## Questions
* Logged in Users can ask a Queston
* Users can read/view other Question
* Logged in Users can update their Question
* Logged in Users can delete their Question

## Answers
* Logged in Users can answer Questions
* Users can read/view all of the Answers on a Question
* Logged in Users can delete their Answers on a Question
* Logged in Users can update their Answers on a Question

## Follows
Logged-in Users can
* Follow other users
* Unfollow other users

## Likes
Logged-in Users can
* Like Answers on Questions
* UnLike Answers on Questions


## Future Features

### Search Feature
* Users can search for questions

### User Profile
* Users can update and delete their profile

## My Links

([GitHub](https://github.com/zipzopboppitybop) | [LinkedIn](https://www.linkedin.com/in/brian-washington-668129244/))
