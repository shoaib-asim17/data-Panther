import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Hero from "./components/hero/Hero"
import ContactPage from "./components/contact/contact";
import { motion } from "framer-motion";
import QuotesComponent from "./components/QuotesComp";
import Footer from "./components/Footer/footer";
import React from 'react';




const App = () => {
  return <div>
   
    {/* <div className="NavigationBar"><Navbar /> </div>
     <div className="Hero"><Hero/></div> */}
 
    <section  id="Home"><Navbar/>
    
     {/* <div className="Hero "><Hero/></div> */}
     <Hero/>
     <br />
    </section>
    <br /><br />
    <section id="Company">
      <div className="container">
        <div className="background-image" style={{ backgroundImage: 'url("/mission and vision.png")' }}></div>
        <div className="text-overlay">
          <div className="mission-statement">
            Our mission is to [mission statement].
          </div>
          <div className="vision-statement">
            We envision a future where [vision statement].
          </div>
        </div>
      </div>
    </section>
    <section id="Solutions"> 
          <div className="sol">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officia minus laborum quidem veniam voluptates vitae earum repudiandae ad alias, repellat at ut error nisi! Corporis facilis delectus ducimus porro?
          </div>
    </section>
    <section id="Services"> 
          <div className="services">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum delectus qui omnis cum molestiae deserunt est tempora porro, reprehenderit amet quibusdam dignissimos assumenda autem magni velit quaerat quidem deleniti facilis.</div>
    </section>
    <section id="Projects"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rerum autem harum dolor numquam non debitis explicabo obcaecati id ullam similique? Provident aliquid voluptatum dignissimos, repellat vitae alias accusantium voluptatem modi veritatis ea laboriosam voluptatibus deleniti, aut dolorem odio eius similique rerum fuga? Libero fugit ipsum exercitationem voluptas esse quos, laborum tenetur vel ab? Error, repellat modi? Corrupti, a officia, maxime repellendus velit expedita quisquam ex, animi suscipit debitis ipsa consequuntur vero nemo. Odit maiores praesentium ex eos, perferendis, sunt corporis recusandae unde similique, sit quis earum at soluta a culpa ad et possimus expedita!</section>
    <section id="Contact"> <ContactPage/> </section> 
  

     <section>
        <QuotesComponent/>
     </section>
    
      <div className="footer">
         <Footer/>
          
      </div>
    
    
   
    
  </div>;
};

export default App;
