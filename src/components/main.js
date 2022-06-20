import React, { Component } from "react";
import Title from "./title";
import PhotoWall from "./photowall";
import AddPhoto from "./addphoto";
class Main extends Component {
    constructor() {
        super();
        this.state = {
          posts : [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
            screen: 'photos'
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
    }
    render() {
      return <div>
        {
          this.state.screen === 'photos' && (
          <div>
            <Title titletext={"PhotoWall here"}/>
            <PhotoWall posts = {this.state.posts} onRemovephoto={this.removePhoto} onNavigate={this.navigate} />
          </div>
          )
        }
        {
          this.state.screen === 'addPhoto' && (
            <div>
              <AddPhoto/>
            </div>
          )
        }
      </div>
    }
    removePhoto(postRemoved) {
      this.setState(state => {
        return { 
          posts: state.posts.filter(post => post !== postRemoved)
        }
      });
    }
    navigate() {
      this.setState({
        screen : 'addPhoto' 
      })
    }
  }

export default Main;