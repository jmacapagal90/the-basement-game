import { Container,List } from 'semantic-ui-react'; 

function AboutPage(){
    return (
        <Container textAlign='center'>
            <div class="ui inverted segment">
                <br></br>
                <br></br>
                <h1>
                    About The Game
                </h1>
                <p>Thank you for playing! This game was my capstone project of my Software Engineering Bootcamp at the Flatiron School Bootcamp. It was coded primarily using React and Ruby on Rails. 
                    I got the inspiration for this game from many things- including my twisted imagination- but mainly Squid Games, Saw, and Escape from Tarkov.  The primary mechanic is 
                    a turn-based system which re-renders the decisions, and deaths, on to the browser.  I'm proud of this game, and I hope you enjoy it. Thank you again for playing! 
                </p>
                <List>
                    <List.Item>
                        <a target="_blank" href="https://github.com/jmacapagal90/the-basement-game">Github Repo</a>
                    </List.Item>
                </List>
                <h1>
                    About Me
                </h1>
                <p>Hello! My name is James Macapagal, and I'm a Software Engineer based out of Chicago, IL.  I enjoy making weird, fun games. </p>
                <h2>Find Me At:</h2>
                <List>
                    <List.Item>
                        <a target="_blank" href="https://www.linkedin.com/in/jamesmacapagal/">LinkedIn</a>
                    </List.Item>
                    <List.Item>
                        <a target="_blank" href="https://github.com/jmacapagal90">Github</a>
                    </List.Item>
                    <List.Item>
                        <a target="_blank" href="https://dev.to/jmacapagal90">DEV Blog</a>
                    </List.Item>
                    <List.Item>
                        <a target="_blank" href="mailto:j.macapagal90@gmail.com">Email</a>
                    </List.Item>
                </List>
            </div>
        </Container>
    )
}

export default AboutPage;