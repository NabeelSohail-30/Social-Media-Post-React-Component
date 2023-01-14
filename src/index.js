import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css'
import './css/style.css'
import post from './img/food1.jpg'
import user from './img/user1.jpg'

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

ReactDOM.render(<div>
  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />

  <Post
    name='Alice'
    date='10th Jan, 2023'
    postText='10th Jan, 2023'
    likes='2k'
    comments='25'
    shares='10'
  />
</div>, document.querySelector("#root"));

