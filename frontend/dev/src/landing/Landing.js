import './Landing.css';
import logo from './Untitled_drawing_6.png';


//links on nav bar
function NavBar(props){
    return(
      
      <li><a href={props.linkPath} className="text">{props.displayString}</a></li>
             
    );
  }

  //Button on nav bar 
  function NavButton(props){
    return(
      
      <li><a href={props.linkPath} className="login">{props.displayString}</a></li>
             
      );
  }


function LandingPage(){
    return(
        <section className='landing_main'>
            <header>
            <a href = "#" ><img src = {logo} class = "logo" /></a>
                <ul>
                
                    <NavBar displayString="Home" linkPath="Home"/>
                    <NavBar displayString="Projects" linkPath="Projects"/>
                    <NavBar displayString="About" linkPath="About"/>
                    <NavBar displayString="Contact" linkPath="Contact"/>
                    <NavButton displayString="Login" linkPath="/login"/>
                
                </ul>
            </header>   
            <div class = "content">
                <div class = "textBox">
                    <h2>Welcome to <span>bidOS</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>                 
        </section>

    );
}

export {NavBar, LandingPage};