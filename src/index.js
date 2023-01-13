import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css'
import './css/style.css'
import post from './img/food1.jpg'
import user from './img/user1.jpg'
import comment from './img/comment.png'
import share from './img/share.png'
import like from './img/thumbsUp.png'

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__avatar" src={user} alt="avatar" />
        <div className="post__user-info">
          <span className="post__author">John Doe</span>
          <br></br>
          <span className="post__date">Today at 5:00PM</span>
        </div>
      </div>
      <div className="post__content">
        <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc elit ultricies nunc, eget ultricies lorem nisl eget nunc. Sed euismod, nisl nec ultricies tincidunt, nunc elit ultricies nunc, eget ultricies lorem nisl eget nunc.</p>
        <img className="post__image" src={post} alt="post" />
      </div>
      <div className="post__footer">
        <div className="post__stats">
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <div className="post__stat">
                  <img className="post__icon" src={like} />
                  <span className="post__stat-number">2.3K</span>
                </div>
              </div>
              <div className='col-4'>
                <div className="post__stat">
                  <img className="post__icon" src={comment} />
                  <span className="post__stat-number">2.3K</span>
                </div>
              </div>
              <div className='col-4'>
                <div className="post__stat">
                  <img className="post__icon" src={share} />
                  <span className="post__stat-number">2.3K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Post />, document.querySelector("#root"));