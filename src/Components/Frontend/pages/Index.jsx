import React, { Component } from 'react';
import axios from "axios";
import '../frontendscss/_index.scss';
import bg from '../../../Admin/Assets/background.jpg'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
      title: "",
      content: ""
    }
    
  }

  getData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/app/get-all-content");
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      title: "",
      content: ""

    });
  };
  componentDidMount() {  
    this.getData();
  }
  render() {
    return (
      <>
      <div className='index-page'>
      
      <div className='contentsection'>
      {
        this.state.data.map(item=>(
                  <div className='mainsection'>
                  <p className='maintitle'>{item.title}</p>
                  <p className='maincontent'>{item.content}</p>
                  <br />
                  <br />
                  <br />
                  
                  </div>   
              ))
      }
                  <div className='mainsection'>
                  <p className='maintitle'>Front-End Web UI Frameworks and Tools: Bootstrap 4: Course Overview</p>
                  <p className='maincontent'>Welcome to front end Web UI Frameworks and Tools: Bootstrap 4. I'm glad you decided to join this course to learn about the most popular front end Web UI Framework: Bootstrap. We'll look at various aspects of Bootstrap. Through several examples, you will learn by doing exercises as part of this course. Let's look at some details next. Before you begin this course, please make sure that you have sufficient background to be able to succeed in this course. You should have a good knowledge of HTML, CSS, and JavaScript before you start the course. From my perspective, web design and development consists of two aspects: one is the design of the website and the web page, the second one is the actual building and deployment of the web page itself. From the design perspective, what I mean is the design of the user interface and the user experience, the visual design, the prototyping, the elements of colors, graphics and animation that might be of interest. In this Specialization, we are not looking at this aspect of web development. Instead, we are looking at that second aspect, which is the development, building, and deployment of websites and web pages, using technologies like the front end web UI frameworks like Bootstrap, maybe JavaScript framework like Angular or a Library like React and hybrid mobile frameworks to design mobile applications and also server-side development using Node, Express, MongoDB, the main stack in more detail. If you are looking at the Specialization, thinking about the design aspect of website, then you may wish to rethink again. This Specialization concentrates on the development building and deployment of website and web pages, a purely technical knowledge on using the HTML, CSS, and JavaScript-based skills for actual website development. You're also probably wondering about what is meant by full stack web development. We'll look at more details of full stack web development in the next lesson. In particular, if you're looking at how this course is positioned in the general context of full stack web development, in this course, we are dealing with front end web UI development. In particular, the UI Framework Bootstrap 4. We'll be looking at the remaining aspects of full stack web development in the rest of this specialization. This course looks at Bootstrap in great detail. We will also look at responsive web design and how Bootstrap supports responsive web design through the Bootstrap Grid system. We'll look at the CSS and JavaScript-based components in Bootstrap and how you can make use of them in building your website and your web pages. Along the way, we'll learn about that web development using the command line. So we'll learn a lot of web tools that are based on the command line and the Node.js ecosystem. We'll briefly review Git, add Node.js and look at Noje.js based tools including task runners like Grunt and Gulp. This course, itself, is structured into full modules. Each module roughly corresponding to one week of work. In the first module, we'll get the big picture view of full stack web development, then you'll get a quick introduction to Git and Node.js. Then we'll introduce you to the Bootstrap and then review the Bootstrap Grid system. That will lead you up to the first assignment in this course. The second module deals with Bootstrap CSS components. We'll look at the design of the Bootstrap navigation bar and how we can make use of it to support navigation. We'll look at user input through buttons and forms then we'll look at how we can display content using tables and cards. Then we'll look at how we can include images and media into our Web page using images, thumbnails, and media objects. And then, finally, we look at how we alert users using tags, alerts and progress bars. This should lead you up to your second assignment. The third module deals with Bootstrap JavaScript components. We'll look at the big picture view of how Bootstrap JavaScript components work, we'll review tabs, pills and tabbed navigation, then we'll look at how collapse and accordion can be used to show and hide content. And then we'll look at the use of tooltips, popovers and modals to reveal content to be displayed in your page. And then we'll look at the carousel component, which allows you to display sliding information on your web page. This should lead you up to the third assignment in this course. The last module deals with Bootstrap and the JQuery and various dev tools. We'll, in particular, look at how Bootstrap and JQuery interact and how you can write JQuery and JavaScript code in order to control your Bootstrap JavaScript component. We look at the various methods that are supported by the Bootstrap JavaScript components, which can be leveraged to write JavaScript code to control the behavior of these components. Then we'll review CSS pre-processing language is like LESS and Sass. Then, finally, we'll look at how we can build and deploy our website using NPM scripts or task runners like Grunt and Gulp. This should take you all the way to the final assignment in this course. I hope you will have a lot of fun doing the various parts of this course and also enjoy the exercises that you'll encounter at each stage that enable you to better understand various aspects of the Bootstrap web UI framework.</p>
                  <br />
                  <br />
                  <br />
                  
                  </div>   

      </div>

      <div className='ads-section'>
        <p>hello this is ads </p>
        <p>buy this buy that</p>
      </div>

      </div>
      </>
    )
  }
}
