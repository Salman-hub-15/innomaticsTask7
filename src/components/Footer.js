import { Card } from "react-bootstrap";
export default function Footer(){
    return (
        <footer>
        <div className="container d-flex">

            <div className="col-md-8">
                <Card style={{ width: '100%', borderRadius: '15px', backgroundColor: 'black', color:"whitesmoke" }}>
                <Card.Img src="https://www.innomatics.in/wp-content/uploads/2023/01/innomatics-footer-logo.png" alt="Footer-logo"/>
                <Card.Body>
                    <div>
                A leading training institute, Innomatics Research Labs offers courses in areas such as NASSCOM Futureskills Prime Certified Data Science, Python,
                 AI, Data Analytics, Full Stack Development, and Digital Marketing. Our practical training is designed meticulously to meet industry needs and 
                 provide valuable certification upon completion, empowering individuals to excel in their careers.
                 </div>

                <div className="icons">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
            <a href=""><i className="fab fa-linkedin-in"></i></a>
             </div>
               </Card.Body>
             </Card>
            </div>

            <div className="col-md-4">
                <Card style={{ width: '100%', borderRadius: '15px', backgroundColor: 'black', color:"whitesmoke"}}>
                    <Card.Title className="text-center" style={{color:'red'}}><h4>Courses</h4></Card.Title>

                <Card.Body>
                    <ul className="ul-list">
                        <li>Data Science</li>
                        <li>Online Data Science</li>
                        <li>Advanced Generative AI</li>
                        <li>Full Stack Developement</li>
                        <li>Digital Marketing</li>
                        <li>Placements</li>
                        <li>Privacy</li>
                    </ul>
                </Card.Body>
                </Card>
            </div>  
            </div>


        <div className="container-fluid text-center" id="fot">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
    </footer>
    )
}