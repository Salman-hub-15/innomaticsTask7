
import { Button } from "react-bootstrap";
export default function Events(){
    return(
        <>
        <div className="container-fluid">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/04/WORKSHOP-copy.jpg" width="100%"/>
        </div>

        <div className="row justify-content-center mb-4">
       <div className="col-md-7 mx-auto">
        <h1 style={{ color: 'red' }} className="text-center">
          Join Our Nationwide Free 2-Days Data Science Workshop
        </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
        <h4>Are you curious about the fascinating world of data science?</h4>
        <p> Our boot camp is the perfect opportunity to explore this field and learn how Data Science and GenAI can revolutionize the way you work.</p>
        <p> <b>Hands-On Experience:</b> Our expert trainers will guide you through hands-on exercises and real-world examples, demonstrating how data is collected, processed, and used to enhance the user experience.</p>
        <p><b>Discover GenAI Applications:</b> In this demo, you’ll discover How GenAI is Revolutionizing various aspects of our life.</p>
      </div>
      </div>

      <div className="container-fluid" style={{backgroundColor:'black', padding:'20px'}}>
        <div className="row">
        <h3 className="col-md-8" style={{color:'white'}}>HURRY UP! Only a Few Slots Left</h3>
        <div className="col-md-4">
        <Button variant="danger" id="bt">Book Slot Now</Button>
        </div>
        </div>
      </div>
 


      <div className="container pt-5">
        <h3 className="text-center" style={{textDecoration:"underline"}}>Who Should Attend?</h3>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <div className="card">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/03/1.png" />
                </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <div className="card">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/03/5.png" />
                </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <div className="card">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/03/Untitled-design-2.png" />
                </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <div className="card">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/03/2.png" />
                </div>
                </div>
            </div>
        </div>

        
      <div className="container mt-5 mb-5">
        <div className="col-md-12">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/04/website.jpg" style={{borderRadius:'10px'}} width="100%" />
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="col-md-12">
            <h3>Bootcamp Outcomes:</h3>
            <ul>
                <li>Understanding of Data Science Fundamentals</li>
                <li>Exposure to Data Science Tools and Technologies</li>
                <li>Insight into GenAI Applications</li>
                <li>Inspiration to Pursue a Data Science Career</li>
                <li>Networking Opportunities: Connect with other data science enthusiasts and industry professionals.</li>
                <li>Guidance and Advice: Get personalized advice on how to improve your skills and advance your career in data science.</li>
                <li>Stay Updated: Learn about the latest trends and developments in data science and GenAI.</li>
            </ul>
        </div>
      </div>

        </>
    )
}