import { Button } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Services(){
    return (
        <div className="main-content">
        <div className="container mt-5">
           <h1 className="text-center">Our Services</h1>
           <p>Innomatics Research Labs is a pioneer in “Transforming Career and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM FutureSkills Prime Certified Data Science, Machine Learning, Artificial Intelligence (AI), Full Stack Development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, and Digital Marketing. We are passionate about bridging the gap between learning and real-time implementation, so empowering individuals to be industry-ready and help firms in reaping huge benefits is our primary goal.</p>
        </div>

        <div className="row gap-2 d-flex justify-content-center btns">
        <NavLink to="/services/placements"><Button variant="primary" className="col-md-12 col-sm-12" >Our Placements</Button></NavLink>
        <NavLink to="/services/events"><Button variant="primary" className="col-md-12 col-sm-12" >Our Events</Button></NavLink>  
        </div>
        </div>
    )
}
export default Services;