import { Col, Row, Button } from "react-bootstrap";
import MyAchievements from "./myAchievements/index";
import ProjectInProcess from "./projectInProcess/index";

const Landing = () => {
    return (
    <>
        <Row>
            <Col sm={4}>
                My picture
            </Col>
            <Col sm={7}>
                <Row>
                    <Col>
                    <div style={{ position: 'relative', zIndex: '2' }}>
                    about me
                    </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Suleman Itmer
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Ever since I was a kid, I have been passionate 
                        about computers and how they impact us. 
                        My dad was a Cyber Security Engineer, 
                        which began my curiosity. As he worked 
                        from home most of the time, I would just 
                        sit there and ask him a million questions. 
                        As my passion grew for development, 
                        I learned C++, C#, Java, Adobe Photoshop, 
                        and Illustrator at age 15 to create my first 
                        PC game "Evolution".
                    </Col>
                </Row>
                <Row>
                    <Col>
                        (high) This passion carried me through my degree in 
                        Computer Science at the University of Texas at
                        Dallas. (high) Alongside my higher-level education,
                        I was able to compete in many different CS 
                        competitions. I realized how programming 
                        is changing the world for the better and 
                        it is extemely exciting to a part of this 
                        positive change. I hope to someday become 
                        the person to drive a change for the 
                        betterment of our society using my 
                        engineering skills. 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Technical Skills
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Programming Languages:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        C++, Java, SQL, HTML, CSS, 
                        Python, C#, Unity Scripting, 
                        MIPS, Linux/Unix, PHP, 
                        JavaScript, Git bash
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Software:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Microsoft SQL, Android Studio, 
                        Visual Studio Code, Cherwell, 
                        Meraki, Windows Active Directory Software, 
                        Eclipse, Jupyter, Adobe Photoshop 
                        and Illustrator, Microsoft Office, 
                        Unity and 3d Max
                    </Col>
                </Row>			
            </Col>
        </Row>
        <Row>
            <Col>
                <Button>
                    Load my Resume
                </Button>
            </Col>
        </Row>
        <ProjectInProcess/>
        <MyAchievements/>
        <Row>
            <Col>
                Do something today that your future self 
                will thank you for!
            </Col>
            <Col>
                <Button>
                    Contact ME
                </Button>
            </Col>
        </Row>
    </>
    );
}

export default Landing