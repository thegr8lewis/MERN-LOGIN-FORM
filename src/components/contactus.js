

const Contact = () => {
    return ( 
        <section className="contact">
            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                    <div className="contact-left-title">
                        <h2>Get in touch </h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="a0ea1116-911f-4bee-a7cd-99b8e361cf08"></input>
                    <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
                    <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required></input>
                    <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                    <button type="submit">SUBMIT </button>
                </form>
            </div>
            <div className="contact-right">
            
            </div>
        </section>
     );
}
 
export default Contact;