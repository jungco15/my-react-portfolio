import myLogo from './assets/logo.png'


function Header(){
    return(
        <header>
            <div className="logo">
                <img src={myLogo} alt="logo yan dapat dito kasi"></img>
            </div>
            <div className="navlinks">
                <a href="about" className="nav-btn">ABOUT ME</a>
                <a href="project" className="nav-btn">PROJECTS</a>
                <a href="contact" className="nav-btn">CONTACT ME</a>
            </div>
        </header>

    );
}

export default Header