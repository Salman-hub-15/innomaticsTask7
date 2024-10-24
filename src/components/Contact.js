import { Form,InputGroup,Button } from "react-bootstrap";

function Contact(){
    return (
        <>
        <div className="container-fluid">

            <div className="text-center mt-4">
                <h1>Get In Touch with us!!</h1>
            </div>

            <div className="col-md-8 mx-auto mt-4">
                <h3>We are ready to help you.
                For immediate inquiry or joining, please call us..</h3>
                <h3>Hyderabad: <b style={{color:'red'}}>+91-1800 412 0923</b>, Pune: <b style={{color:'red'}}>+91-9951666671</b></h3>
            </div>
            

<Form className="form p-4">
    <div className="mb-3">
        <input type="text" name="firstName" className="form-control" placeholder="First Name" required />
    </div>
    <div className="mb-3">
        <input type="number" name="contact" className="form-control" placeholder="Contact Number" required />
    </div>
    <div className="mb-3">
        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
    </div>
    <div className="mb-3">
        <select className="form-select" required>
            <option value="">Select Course..</option>
            <option value="Full Stack">Full Stack</option>
            <option value="AWS">AWS</option>
            <option value="Data Science">Data Science</option>
        </select>
    </div>
    <div className="mb-3">
        <select className="form-select" required>
            <option value="">Select Training Mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
        </select>
    </div>
    <div className="text-center">
        <Button type="submit" variant="primary">Register</Button>
    </div>
</Form>
</div>


<div className="container mt-5 mb-5">
    <h5>Our Location</h5>
<iframe id='if' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60897.29703817055!2d78.31035309485968!3d17.455833700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sinnomatics%20research%20labs!5e0!3m2!1sen!2sin!4v1727348044787!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </>
    )
}
export default Contact;