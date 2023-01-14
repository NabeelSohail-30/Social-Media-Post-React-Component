import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css'
import './css/style.css'
import post from './img/food1.jpg'
import user from './img/user1.jpg'
import github from './img/github.png'
import email from './img/email.png'
import linkedin from './img/linkedin.png'
import whatsapp from './img/whatsapp.png'

function Header() {
  return (
    <div className="header">
      <div>Social Media Post</div>
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">

      <div className="post__header">
        <img className="post__avatar" src={user} alt="avatar" />
        <div className="post__user-info">
          <span className="post__author">{props.name}</span>
          <br></br>
          <span className="post__date">{props.date}</span>
        </div>
      </div>

      <div className="post__content">
        <p className="post__text">{props.postText}</p>
        <img className="post__image" src={post} alt="post" />
      </div>

      <div className="post__footer">
        <div className="post__stats">
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <div className="post__stat">
                  <i className="fa-solid fa-thumbs-up icon fa-xl"></i>
                  <span className="post__stat-number">{props.likes}</span>
                </div>
              </div>
              <div className='col-4'>
                <div className="post__stat">
                  <i className="fa-solid fa-comment icon fa-xl"></i>
                  <span className="post__stat-number">{props.comments}</span>
                </div>
              </div>
              <div className='col-4'>
                <div className="post__stat">
                  <i className="fa-solid fa-share icon fa-xl"></i>
                  <span className="post__stat-number">{props.shares}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col watermark">
            Developed and Maintained by Nabeel Sohail
          </div>
        </div>
        <div class="row">
          <div class="col copyright">
            Copyright &copy; - All Rights Reserved
          </div>
        </div>

        <div class="row">
          <div class="col portfolio">
            <a href="https://nabeelsohail2630.wixsite.com/portfolio"
              target="_blank">nabeelsohail2630.wixsite.com/portfolio</a>
          </div>
        </div>

        <div className='row'>
          <div className='col social'>
            <ul class="media-icons">
              <li>
                <a href='https://github.com/NabeelSohail-30' target='_blank'>
                  <img src={github} alt=""></img>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/nabeel-sohail-a63508200/' target='_blank'>
                  <img src={linkedin} alt=""></img>
                </a>
              </li>
              <li>
                <a href='mailto:nabeel.sohail2630@outlook.com' target='_blank'>
                  <img src={email} alt=""></img>
                </a>
              </li>
              <li>
                <a href='https://wa.me/923453628868' target='_blank'>
                  <img src={whatsapp} alt=""></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer >
  );
}

ReactDOM.render(<div>
  <Header />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='John'
    date='11 hr ago'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Jasmine'
    date='18th Dec 2022'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Tony'
    date='11th March 2021'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Salman'
    date='yesterday'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Sallar'
    date='1st Feb 2022'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Elizabeth'
    date='10th June, 2022'
    postText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vivamus at augue eget arcu. In ornare quam viverra orci sagittis eu volutpat odio. Nam libero justo laoreet sit. Aliquet eget sit amet tellus.'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Footer />
</div>, document.querySelector("#root"));

