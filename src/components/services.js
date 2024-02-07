import webDev  from "../assets/wendev.jpeg"
import seo  from "../assets/seo.jpeg"
import influencerMarketing  from "../assets/InfluencerMarketing.jpg"
import social   from "../assets/SocialMediaManagement.jpeg"
import  email from "../assets/EmailMarketing.jpeg"
import  analytic  from "../assets/AnalyticsandReporting.jpeg"

const Services = () => {
    return (
        <section className="services">
            <div className="container-service">
                <div className="card">
                    <div className="imgBx">
                         <img src={webDev}></img>
                        <h2>Web development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={seo}></img>
                        <h2>SEO(Search Engine Optimizatio)</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={influencerMarketing}></img>
                        <h2>Influencer Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                         <img src={social}></img>
                        <h2>Social Media Management</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={email}></img>
                        <h2>Email Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={analytic}></img>
                        <h2>Analytics and Reporting</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={analytic}></img>
                        <h2>Analytics and Reporting</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Libero eius nostrum 
                             obcaecati facere dicta debitis odit
                              provident cum laboriosam eos, soluta 
                            tempora perspiciatis deleniti sint adipisci 
                            id saepe illo optio.</p>
                    </div>
                </div>
            </div>
        </section>
      );
}
 
export default Services;