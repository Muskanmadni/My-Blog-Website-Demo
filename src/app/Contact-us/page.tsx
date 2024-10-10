export default function Contact(){
    return(
        <div className="parentContainer">
            <div className="Form">
                <div className="text">For contact Fill this Form Thanks</div>
                <form >
                    <input className="form-details" type="text" name="name" placeholder="Enter your name"></input>
                    <br/>
                    <input className="form-details" type="email" name="email" placeholder="Enter your email"></input>
                    <br/>
                    <input className="form-details" type="Comment" name="Comment" placeholder="Write here your quiry"></input>
                    <br/>
                    <input className="form-details" type="submit" value="Submit"></input>
                    <br/>
                    </form>   
            </div>
        </div>
    );
}