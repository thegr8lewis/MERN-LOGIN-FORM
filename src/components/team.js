import member  from "../assets/team.jpeg"


const Team = () => {
    return ( 
        <section className="container-team">
              <h1 className="words word-1">
                  <span>T</span>
                  <span>H</span>
                  <span>E</span>
            </h1>
            <h1 className="words word-2">
                  <span>T</span>
                  <span>E</span>
                  <span>A</span>
                  <span>M</span>
            </h1>

             <div class="members">
                
                    <div class="team-mem">
                        <img src={member}></img>
                        <h4>Mrs. Emma</h4>
                        <p>Graphic Designer</p>
                    </div>
                    <div class="team-mem">
                        <img src={member}></img>
                        <h4>Mr. David</h4>
                        <p>Soft - Engineer</p>
                    </div>
                    <div class="team-mem">
                        <img src={member}></img>
                        <h4>Mr. Liam</h4>
                        <p>Web Developer</p>
                    </div>
                    <div class="team-mem">
                        <img src={member}></img>
                        <h4>Mrs. Sophia</h4>
                        <p>Product Manager</p>
                    </div>
             </div>
        </section>
     );
}
 
export default Team;