import React, { Component } from "react";
import PhotoWall from "./photowall";
import AddPhoto from "./addphoto";
import { Routes,Route,useNavigate,Link,useParams } from "react-router-dom";
import Single from "./Single";
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
          <Route path="/single/:id" element={<Single {...this.props.params}/>} />
        </Routes>
      </div>
    }
  }

  function MainComp(props) {
    const params = useParams();
    return <Main  {...props} navigate={useNavigate()} params={params}/>
  }

  export default MainComp;