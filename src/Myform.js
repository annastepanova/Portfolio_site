import React from "react"
import './myform.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    }
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact">
        <p className="paragraph">I am available for hire and open to any ideas of cooperation.</p>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mbjlovdg"
          method="POST"
        >
          <div class="form-input">
            <input
              placeholder="Your Name"
              id="your-name"
              type="text"
              name="your-name"
              autocomplete="off"
              required
            />
          </div>    
          <div class="form-input">
            <input
            placeholder="Enter email" 
            type="email" 
            name="email"
            required
            />  
          </div>
          <div class="form-input">
              <textarea
                placeholder="Your Message"
                id="your-message"
                name="your-message"
                cols="100"
                rows="10"
                required
              ></textarea>
            </div>
          {status === "SUCCESS" ? <p>Thank you for your message!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}  <input type="reset" />
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}