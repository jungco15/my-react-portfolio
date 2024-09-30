import myPic from './assets/mi 1.png'

function About(){
    return(
        <section>
        <div className="about">
        <div className="container-about">
            <div className="section-header">
            <h5>About Me</h5>
            <div className="line-header"></div>
            </div>  
            <div className="content-about">
                <div className="body-left">
                <p>Hi, I'm Jm and I grew up in Antique province. Now, I live in a dorm in San Miguel. My interest in computer started when I was 12 years old and I learned a lot of stuff through the internet. I did my upper secondary education in ICT from Wright Technological College of Antique.</p>
                <p>Now, I’m a student at Western Institute of Technology. My hobbies these days is building a accessible website through React and play League of legends on my free time. Meanwhile, my main focus is UX design and become a Entry-level UX designer. My career goal is either to be a Motion designer or a Visual designer and I plan to pursue UI design and Game design.</p>
            <div className="bottom-content">
                <div className="bottom-list-header">
                <p>Here are some technologies I’ve been working on lately:</p>
                </div>
            <div className="bottom-list">
                <ul></ul>
            </div>
            </div>
                 </div>
            <div className="body-right">
                    <img src={myPic} alt="pic ni bossing"></img>
            </div>
            <div className="list">
                <ul>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </section>
    );

}

export default About