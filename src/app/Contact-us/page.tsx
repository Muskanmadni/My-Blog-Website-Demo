export default function ContactForm() {
    return (
      <div className="parentContainer">
        <div className="form">
          <div className="text">For Contact fill this Form Thanks</div>
          <input className="form-details" type="text" name="name" placeholder="Enter your name" />
          <br />
          <input className="form-details" type="email" name="email" placeholder="Enter your email" />
          <br />
          <input className="form-details" type="text" name="Comment" placeholder="Write here your query" />
          <br />
          <input className="form-details" type="submit" value="Submit" />
        </div>
      </div>
    );
  }