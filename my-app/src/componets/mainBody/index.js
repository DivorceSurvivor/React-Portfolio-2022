import React from "react"
import "./style.css"

function mainBody () {
return(
    <>
    
    <nav>
      
      <a href="#aboutme">About Me</a>
      <a href="#Portfolio">Portfolio</a>
      <a href="/assets/images/PDF resume early 21.6 word (1).pdf">Resume</a>
      <a href="https://www.linkedin.com/in/divorcesurvivor/">LinkedIn</a>
      <a href="https://github.com/DivorceSurvivor"> Github</a>
    
    </nav>

   
    <main>
      
      <aside>
        <h2 id="aboutme">About Me</h2> 
        <img src={require("./assets/images/my_apple_pic.jpg")} alt={ "its me" } width="200" height="200"/> 
        <p> <strong> Kristopher is a hardworking member of his community. Takes part in food drives, back to school drives, Turkey giveaways, and toys for tots.  </strong> </p>
        <p>
          <strong> Kristopher has worked for  since 2010. First starting off as a vendor, it wasnt until 2012 where Kristopher was able to get on board with the company in a part-time capacity. Opportuities came, and Kristopher was able to work his way up into a supervisory capactiy within the call ceter ranks. Currently, Kristopher sits as a specialist in Apple's new Health department. </strong> </p>
      </aside>
      
      <div className="products">
        <section className="card">
          <header>Code Refractor</header>
          <a href={"https://divorcesurvivor.github.io/coderefactor.2022/"}>  <img src={require("./assets/images/codeRefractor.jpg")} alt={"code refractor"} /></a>
          <p> <a href={"https://github.com/DivorceSurvivor/coderefactor.2022"}> Github </a> </p>
        </section>
        <section className="card">
          <header> Password Generator</header>
          
          <a href={"https://divorcesurvivor.github.io/passwordgenerator_hw3/"}>  <img src={require("./assets/images/password generator SS.png")} alt={"Password Generator"} />  </a>
          <p> <a href={"https://github.com/DivorceSurvivor/passwordgenerator_hw3"}> Github/Password Generator </a> </p>
        </section>
   
          <section className="card">
            <header>HardBack Life </header>
            <a href={"https://a-hardback-life.herokuapp.com/"}>  <img src={require("./assets/images/Hardback life SS.png")} alt={"Weather Dashboard"} />  </a>
            <p> <a href={"https://github.com/DivorceSurvivor/its_a_hardback_life_book_club"}> Github/HardBack Life  </a> </p>
            
             
            
          </section>

        <section className="card">
          <header>Weather Dashboard </header>
          <a href={"https://divorcesurvivor.github.io/weather_dashboard_hw/"}>  <img src={require("./assets/images/weather dashboard ss.png")} alt={"Weather Dashboard"} />  </a>
          <p> <a href={"https://github.com/DivorceSurvivor/weather_dashboard_hw"}> Github/Weather Dashboard </a> </p>
          
           
          
        </section>
      </div>
      
    </main>
    
    
    <footer>
      <h3>
        Reach me at: https://www.linkedin.com/in/divorcesurvivor/
      </h3>
    </footer>
    
    
    
    </>



)

};

export default mainBody;