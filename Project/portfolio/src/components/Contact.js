


export default function Contact(){
     
    return(<div>
        <div className="footer" id='contact'>
          <div className="footr-container">
            <div className="footer-box1" >
              <h2> Get in Touch</h2>
              <p>Interested inworking together or having aquestion<br/>
              feel free to reach out and I'm always open to new opportunities<br/>
              and collaborations.</p>
              
              
            </div>
                 <div className="footer-box2">
                  <p> Email: atsedeb650@gmail.com</p>

                     <p>Phone #:-+251945-083316 </p>
                    <form className="footer-full" >
                      <label for='email'> Email </label>
                      <input id='email' type='email'/>
                      <label className="footer-m"> Message </label>
                      <textarea className="footer-c" cols={60} rows={5}></textarea>
                    </form>
                    <button className="btn"> Submit </button>
                 </div>
                 </div>
                 </div>
                 </div>)}