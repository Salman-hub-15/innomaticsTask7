import { Card } from "react-bootstrap";
function Home(){
    return (
        <div>

        {/* Slides */}
    <section className="section mt-5 mb-5" id="features">
     <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.innomatics.in/wp-content/uploads/2024/09/full-stack-internship.jpg" className="d-block w-100" alt="First slide" height="500px"/>
                </div>

              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.innomatics.in/wp-content/uploads/2023/01/AWARD-PAGE.jpg" alt="Second slide" height="500px"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.innomatics.in/wp-content/uploads/2023/12/mb-banner.jpg" alt="Third slide" height="500px"/>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
     </div>
     </section>

{/* Courses */}
    <section className="section" id="courses">
        <div className="container">
            <h2 className="text-center mb-5 mt-3">Courses</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg" 
                        alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">Data Science</h5>
                          <p className="card-text">Data science is extracting insights from data using algorithms, analysis and also data minig</p>
                          <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img class="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png" 
                        alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">Full Stack Development</h5>
                          <p className="card-text">Full stack development involves building both front-end and back-end components of web applications, ensuring functionality.</p>
                          <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg" 
                        alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">AWS</h5>
                          <p className="card-text">AWS provides cloud computing solutions, offering storage, networking, databases, analytics and scalability.</p>
                          <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

            
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg" 
                        alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">Digital Marketing</h5>
                          <p className="card-text">Digital marketing promotes products or services online using strategies like SEO, social media, and email campaigns.</p>
                          <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img className="card-img-top" src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg" 
                        alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">Big Data Analytics</h5>
                          <p className="card-text">Big Data analytics involves analyzing large, complex datasets to uncover patterns, trends, and valuable insights.</p>
                          <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <img className="card-img-top" src=" https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg" 
                        alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">DevOps</h5>
                          <p className="card-text">DevOps integrates development and operations, automation, and continuous delivery for efficient software deployment.</p>
                          <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                      </div>
                </div>

            </div>
        </div>
    </section>

{/* Classes */}
   <section className="content-section" id="class">
        <div className="container">
            <h2 className="text-center mb-5 mt-3">Our Classes</h2>
            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto"  src=" https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5450-scaled/2374760138.jpg" alt="Class1" width="500px"/>
                </div>

                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto" src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5414-scaled/2727721008.jpg" alt="Class1" width="500px"/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto"  src=" https://www.innomatics.in/wp-content/uploads/2023/01/IMG_5431-scaled.jpg" alt="Class1" width="500px"/>
                </div>

                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto" src="https://www.innomatics.in/wp-content/uploads/2023/01/IMG_5452-scaled.jpg" alt="Class1" width="500px"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto"  src="https://www.innomatics.in/wp-content/uploads/2023/01/IMG_5449-scaled.jpg" alt="Class1" width="500px"/>
                </div>

                <div className="col-lg-6 col-sm-12 mb-5 mx-auto">
                    <img className="img-fluid mx-auto" src="https://www.innomatics.in/wp-content/uploads/2023/01/IMG_5427-scaled.jpg" alt="Class1" width="500px"/>
                </div>
            </div>
        </div>
    </section>

        </div>
    );
}
export default Home;