import React, { Component } from "react";
import Title from "./title";
import PhotoWall from "./photowall";
import AddPhoto from "./addphoto";
import { Routes,Route,useNavigate,Link } from "react-router-dom";
import { removePost } from "../redux/actions";
class Main extends Component {
    render() {
      return <div>
        <h1>
          <Link to="/">
              Photowall
          </Link>
        </h1>
        <Routes >
          <Route exact path="/" element={<div>
              <PhotoWall {...this.props} />
            </div>}/>
          <Route exact path="/addPhoto" element={<AddPhoto {...this.props}/>} />
        </Routes>
      </div>
    }
  }

  function MainComp(props) {
    return <Main  {...props} navigate={useNavigate()}/>
  }

  export default MainComp;