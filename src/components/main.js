import React, { Component } from "react";
import { Routes,Route,useNavigate,Link } from "react-router-dom";
import PhotoWall from "./photowall";
import AddPhoto from "./addphoto";
import Single from "./Single";

class Main extends Component {
    componentDidMount() {
      this.props.startLoadingPosts();
    }
    render() {
      return <div>
        <h1>
          <Link to="/">
              Photowall
          </Link>
        </h1>
        <Routes >
          <Route exact path="/" element={<PhotoWall {...this.props} />} />
          <Route exact path="/addPhoto" element={<AddPhoto {...this.props}/>} />
          <Route path="/single/:id" element={<Single {...this.props} />} />
        </Routes>
      </div>
    }
  }

  function MainComp(props) {
    return <Main  {...props} navigate={useNavigate()}/>
  }

  export default MainComp;