import React, { Component } from "react";
import Title from "./title";
import PhotoWall from "./photowall";
import AddPhoto from "./addphoto";
import { Routes,Route,useNavigate } from "react-router-dom";
class Main extends Component {
    render() {
      return <div>
        <Routes >
          <Route exact path="/" element={<div>
              <Title titletext={"PhotoWall here"}/>
              <PhotoWall posts = {this.props.posts} />
            </div>}/>
          {/* <Route exact path="/addPhoto" element={<div><AddPhoto onAddPhoto={(postSubmit) =>{
              this.addphoto(postSubmit);
              this.props.navigate('/');
            }} /></div>} /> */}
        </Routes>
      </div>
    }
  }

  function MainComp(props) {
    return <Main  {...props} navigate={useNavigate()}/>
  }

  export default MainComp;