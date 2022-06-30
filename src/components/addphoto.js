import React, {Component} from "react";
class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let link = event.target.elements.link.value;
        let description = event.target.elements.description.value;
        let post = {
            id: Number(new Date()),
            description: description,
            imageLink: link
        }
        if(description && link) {
            this.props.startAddingPost(post);
            this.props.navigate('/');
        }
    }
    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;