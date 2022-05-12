function NavBar (props) {
    function clickHandler(event){
        const id = event.target.id;
        props.setPageRender(id)
    }
    return (
        <header>
        <nav className="textFit header">
            <h1>Alberto Barrientos</h1>
            <div className="justify-content-end">
                <a className="navMenu" href="#aboutme" id="about" onClick={clickHandler}>About Me</a>
                <a className="navMenu" href="#work" id="projects" onClick={clickHandler}>Portfolio</a>
                <a className="navMenu" href="#contacts" id="contacts" onClick={clickHandler}>Contact Me</a>
                <a className="navMenu" href="https://docs.google.com/document/d/1HjyytWuwsF4TBvHPir8sXwuJ_MYEV78a8yBbD2MBH3g/edit">Resume</a>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;