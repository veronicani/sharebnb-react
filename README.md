<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- To start a screen record on Mac: Shift + Cmd + 5 -->
  <a href="https://github.com/veronicani/sharebnb-react">
    <img src="/public/sharebnb-demo.gif" alt="Demo recording">
  </a>

<h3 align="center">Sharebnb</h3>

  <p align="center">
    Tired of indoor game nights, Netflux watch parties, but not *that* interested in camping / glamping / 5-hour hiking through the woods with your friends? Planning a birthday bash, a family reunion, a yoga retreat, and your 500sq.ft apartment isn't making the cut? Look no further than Sharebnb, where we connect backyard oases(ises?)🏕️ and sparkly cerulean pools🏝️ with eager guests looking to plan their next mildly-outdoor getaway!
    <br />
    <a href="https://sharebnb.veronicani.dev">View Demo ▶️</a>
    ·
    <a href="https://github.com/veronicani/sharebnb-react/issues">Report Bug 🐛</a>
    ·
    <a href="https://github.com/veronicani/sharebnb-react/issues">Request Feature 🙏</a>
  </p>
</div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
![Top Languages](https://img.shields.io/github/languages/top/veronicani/sharebnb-react)
![GitHub repo size](https://img.shields.io/github/repo-size/veronicani/sharebnb-react)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/veronicani/sharebnb-react)
![Contributors](https://img.shields.io/github/last-commit/veronicani/sharebnb-react)
![GitHub last commit](https://img.shields.io/github/last-commit/veronicani/sharebnb-react)
![Contributors](https://img.shields.io/github/contributors/veronicani/sharebnb-react)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Sharebnb is a space sharing app where users can browse, like, and rent out outdoor spaces. 

This is the frontend application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Bootstrap](https://getbootstrap.com/) for styling, and is deployed through [Render](https://render.com/).  

It includes a RESTful API to interface with Python-based [Sharebnb Flask Backend](https://github.com/veronicani/sharebnb-flask), and integrates AWS S3 for file storage with a PostgreSQL database, hosted on ElephantSQL.

Both frontend and backend were originally built as a project during a 4-day sprint in the [Rithm School](https://www.rithmschool.com/) curriculum.

### Project Architecture & Tooling
![Component diagram](/public/component-diagram.png?raw=true)

Topics explored in this project:
- Building RESTful APIs and consuming them via AJAX
- Separation of concerns between frontend and backend
- React component design and state management
- Separation of components based on logic and display functionalities
- React Router
- Relational database design and modeling
- Integrating AWS S3 services for secure file handling to reduce database load

This project a WIP -- Please refer to the [roadmap](#roadmap) for the list of features we plan to add in the future.

<!-- 
To avoid retyping too much info. Do a search and replace with your text editor for the following: `veronicani`, `sharebnb-react`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

Front-end:
* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Render][Render.com]][Render-url]

Back-end:
* [![Flask][Flask.com]][Flask-url]
* [![AWS][AWS.com]][AWS-url]
* [![PostgreSQL][PostgreSQL.com]][PostgreSQL-url]
* [![SQLAlchemy][SQLAlchemy.org]][SQLAlchemy-url]
* [![ElephantSQL][ElephantSQL.com]][Render-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, please follow these steps.

1. Follow the instructions for cloning and setting up the [backend repo](https://github.com/veronicani/sharebnb-flask).
2. In a new terminal, clone the frontend repo.
   ```sh
   git clone https://github.com/veronicani/sharebnb-react.git
   ```
3. Install frontend dependencies.
  ```sh
  npm install
  ```
4. Run the app in the development mode.
  ```sh
  npm start
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Build MVP front end homepage
- [ ] Implement search feature
- [ ] Add test suite for implemented features
- [ ] Implement user authentication & authorization
    - [ ] Signup Form
    - [ ] Login Form
- [ ] Add test suite authentication & authorization
- [ ] More as needed

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Veronica Ni - [veronicani.dev](https://veronicani.dev) - hello.veronicani@gmail.com
[![LinkedIn][linkedin-shield]][linkedin-url]

Project Front End Link: [https://github.com/veronicani/sharebnb-react](https://github.com/veronicani/sharebnb-react)

Project Back End Link: [https://github.com/veronicani/sharebnb-flask](https://github.com/veronicani/sharebnb-flask)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This is a project Jia Gan and I completed during a 1 week sprint at Rithm School. Many thanks to the staff team and their excellent curriculum and support!

* Co-authored with: [Jia Gan](https://github.com/jgan21)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Img-shields](https://shields.io)
* [simpleicons](https://simpleicons.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/veronicani/sharebnb-react.svg?style=for-the-badge
[forks-url]: https://github.com/veronicani/sharebnb-react/network/members
[stars-shield]: https://img.shields.io/github/stars/veronicani/sharebnb-react.svg?style=for-the-badge
[stars-url]: https://github.com/veronicani/sharebnb-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/veronicani/sharebnb-react.svg?style=for-the-badge
[issues-url]: https://github.com/veronicani/sharebnb-react/issues
[license-shield]: https://img.shields.io/github/license/veronicani/sharebnb-react.svg?style=for-the-badge
[license-url]: https://github.com/veronicani/sharebnb-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/veronicani
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white  
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Render.com]: https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white
[Render-url]: https://render.com
[Flask.com]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=81D9FF
[Flask-url]: https://flask.palletsprojects.com
[AWS.com]: https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900
[AWS-url]: aws.amazon.com
[PostgreSQL.com]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[SQLAlchemy.org]: https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white
[SQLAlchemy-url]: https://www.sqlalchemy.org/
[ElephantSQL.com]: https://img.shields.io/badge/ElephantSQL-96D3F4?style=for-the-badge&logo=elephantsql&logoColor=white
[ElephantSQL-url]: https://www.elephantsql.com/
