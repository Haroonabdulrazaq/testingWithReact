import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button/Button';
import ListItem from './components/listItem/ListItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './App.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];
 

class App extends Component {

  constructor(props){
    super(props);
 
    this.state = {
      hideBtn: false
    }
    this.fetch = this.fetch.bind(this);
    this.updateState =  this.updateBtnState.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
    this.updateBtnState()
  }

  updateBtnState(){
    this.setState({
      hideBtn: !this.state.hideBtn
    })
  }

  render() {
   const { posts } = this.props;
 

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          {!this.state.hideBtn && <SharedButton {...configButton} />}
          
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);