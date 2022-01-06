import React from "react";


const About = () => {
    return(
        <section className="container">
        <div className="profile-grid my-1">
         
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src="https://icons-for-free.com/iconfiles/png/512/business+finance+marketing+notebook+woman+icon-1320073244553154330.png"
            //src="https://previews.123rf.com/images/powerart/powerart1708/powerart170804949/84519682-isolated-programmer-icon-symbol-on-clean-background-vector-coder-element-in-trendy-style-.jpg"
            alt=""
          />
          <h1 className="large">Anju M S</h1>
          <p className="lead">Systems Engineer at Infosys</p>
          
        </div>

        <div className="profile-about bg-light p-2">
          {/* <h2 className="text-primary">About</h2>
          <p>
            Just another lost Soul
          </p>
          <div className="line"></div> */}
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            <div className="p-1"><i className="fa fa-check"></i> HTML</div>
            <div className="p-1"><i className="fa fa-check"></i> CSS</div>
            <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
            <div className="p-1"><i className="fa fa-check"></i> React</div>
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          <div>
            <h3 className="text-dark">Infosys</h3>
            <p>July 2021 - Current</p>
            <p><strong>Position: </strong>System Engineer</p>
            <p>
              <strong>Description: </strong>MERN Stack Developer
            </p>
          </div>
        </div>


        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          <div>
            <h3>Narayanaguru College Of Engineering</h3>
            <p>2016 - 2020</p>
            <p><strong>Degree: </strong>B.E</p>
            <p><strong>Field Of Study: </strong>Electrical and Electronics Engineering</p>
          </div>
        </div>


      </div>
    </section>
   )
}
  
  export default About;