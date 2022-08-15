puts "Starting Seeding"

puts "Seeding The Game"
Game.create!(
    id: 1,
    decision_id: 11
)

Game.create!(
    id:2,
    decision_id: 1
)
Game.create!(
    id:3,
    decision_id: 5
)
Game.create!(
    id:4,
    decision_id: 1
)


Decision.create!(
    id: 1,
    prompt: "You wake up in a dark, dingy basement. You yell for help, but no one answers. You are trapped. Through the darkness, you can make out a door. You walk to the door. Do you open it?",
    answer: 0,
    prev_decision_id: nil
)

Outcome.create!(
    id:1,
    result: "An axe falls from the ceiling and slices your head off... You are dead.  (Did you really think I would make it that easy?!)",
    summary: "Got the axe.",
    decision_id: 1
)


Decision.create!(
    id:2,
    prompt: "You realize it won't be that easy, which is good, because tied to the door knob is a cord. If you turned that door knob, it would've cut the cord and sent an axe to chop off your head. Instead, you see the faint outline of a flashlight near the base of the door. You turn it on and look around. There's not much else in this room, except for a toolbox.  You walk to the toolbox. Do you open it?",
    answer: 1,
    prev_decision_id: 1
)

Outcome.create!(
    id:2,
    result: "The flashlight burns out. You sit in darkness for the next 3 weeks until you die of starvation... You are dead.",
    summary: "Starved for attention.",
    decision_id: 2
)

Decision.create!(
    id:3,
    prompt: "You open the toolbox, and find a walkie-talkie. Do you use it?",
    answer: 1,
    prev_decision_id: 2
)

Outcome.create!(
    id:3,
    result: "The walkie-talkie was actually a bomb that set to be used within 30 seconds. You didn't use it, and, thus, it exploded... You are dead.",
    summary: "Was the Bomb.",
    decision_id: 3
)

Decision.create!(
    id:4,
    prompt: "You realize a faint ticking noise, but it silenced once you pressed the talk button of the walkie and mutter, \"Hello?\" In the silence, a crackly, old voice eeks out, \"What's a bear without an ear?\" The lights flash on. Aside from the chair and the door, there isn't much else in this lonely room. Suddenly, there's a large crash, and a trap door in the ceiling opens dropping a rope ladder. As you walk to the ladder, another trap door opens on the wall and starts spewing water and filling this tiny room!  You have seconds to decide before certain death.  Do you climb the ladder? ",
    answer: 0,
    prev_decision_id: 3
)

Outcome.create!(
    id:4,
    result: "You frantically pull on the rope ladder, and feel the slack give out. And then a gigantic anvil drops and smashes your head like a Wile E. Coyote... You are dead.",
    summary: "Was a smash hit",
    decision_id: 4
)

Decision.create!(
    id:5,
    prompt: "You were about to climb the ladder, when you see a glint of metal above. Something doesn't feel right.  You decide to wait. The ladder gets pulled up. The water starts climbing. You begin to regret this decision. The water is nearly up to your eyes as you gasp for air when suddenly there's another loud click and you get flushed down through where once resided your chair!  You travel through a long tube until you plop down hard into another room. You're in a larger, but equally as plain room.  All that resides in the room is a sledgehammer, a Teddy Ruxbin stuffed bear missing an eye, and a decrepit old Chevelle SS.  You're fed up with this game- you could've been gaming!  Do you take the sledgehammer and smash the Chevelle?",
    answer: 0,
    prev_decision_id: 4
)

Outcome.create!(
    id:5,
    result: "You've had enough, and smash every window in the Chevelle. In your anger, you fail to notice a single Black Widow spider erupt from the head of the Teddy Ruxbin. Starving for flesh, they overwhelm you as you spend your last moments with a spider in your eyeball... You are dead. ",
    summary: "Loves Natasha Romanoff",
    decision_id: 5
)

Decision.create!(
    id:6,
    prompt: "You decide to let your cooler head preail. A voice echos from the walkie-talkie, \"I knew I got someone with intelligence.\" You reply, \"Just you wait.\"
    The car turns on and starts billowing black fumes into the unventilated room.  You panic realizing you will suffocate inhaling unleaded 80 exhaust. You try to open the Chevelle- it's locked!  Thinking fast, you realize there must be weird, creepy significance with the bear.  You decide to investigate. Do you start by ripping it's head off? ",
    answer: 0,
    prev_decision_id: 5
)

Outcome.create!(
    id:6,
    result: "A single Black Widow spider climbs out of the neck and stings you. You convulse on the ground... You are dead. ",
    summary: "Can't wait for Black Widow 2",
    decision_id: 6
)

Decision.create!(
    id:7,
    prompt: "Ripping it's head off seems too easy. You feel around the head, and in one of the ears, you feel a key.  You rip it off, stick the key into the Chevelle, and open the door.  You turn the other key in the ignition off. Suddenly, the glove compartment opens. There's an tablet in there. Do you turn it on? ",
    answer: 1,
    prev_decision_id: 6
)

Outcome.create!(
    id:7,
    result: "You're being a little too untrustworthy, and this is getting old, no? The car explodes... You are dead. ",
    summary: "Drove Them All Crazy",
    decision_id: 7
)

Decision.create!(
    id:8,
    prompt: "You turn the tablet on. It's a video of another person trapped in another sadistic torture room!   The walkie goes off, \"Here's your chance, slick. Get in the game...\"  Two buttons render on the screen (this guy must be a programmer). One button says, \"LIVE.\" The other button says, \"DIE.\"  Do you kill this other poor soul?",
    answer: 0,
    prev_decision_id: 7
)

Outcome.create!(
    id:8,
    result: "You are sick, you know that?  Just for that, the car fills with mayonaise, and you suffocate in mayo. Happy now, you psychopath?!",
    summary: "Actually said they would sacrifice another person for their survival.",
    decision_id: 8
)

Decision.create!(
    id:9,
    prompt: "\"Aww, what a little saint...\"  The tablet flickers off.  In the distance, light cuts through the darkness of this room. You realize this is just one big warehouse!  This is your one chance.  Do you start the car and get out of here?  ",
    answer: 0,
    prev_decision_id: 8
)

Outcome.create!(
    id:9,
    result: "Just as you make it to the door, the door slams shut, and you crash head on into a titanium garage door...  You are dead. ",
    summary: "Didn't wear their seatbelt",
    decision_id: 9
)

Decision.create!(
    id:10,
    prompt: "You can't just leave that person behind.  The voice mutters through the walkie, \"You want them?  Tell me, them, and all my followers on my new snuff-inspired livestreaming app, TwitchBlade, your deepest, darkest secret, and they're all yours...\"  You finally get it now.  This sick f*** is trying to get his app off the ground!   All just for people's entertainment, at the expense of someone's life, sent over HTTP.  You think about the deepest, darkest secret you have. Everyone will know it. But if I don't, they'll think of me as a coward who let some poor soul die, all because of a secret.  Do you broadcast your deepest, darkest secret over the Internet? ",
    answer: 1,
    prev_decision_id: 7
)

Outcome.create!(
    id:10,
    result: "You decide to turn on the car to get out of here. Better them than you, amirite?.  The voice says, \"Great minds think alike...\"  You realize the other person got the same choice- and decided to kill you.  A huge boulder rolls down and smashes the car... You are dead.",
    summary: "Messed around and found out",
    decision_id: 10
)

Decision.create!(
    id:11,
    prompt: "You mutter your secret. A door opens. The other victim gets in the car. In the distance you see the door start to close from the top.  You only have a few minutes to get out.  You slam on the gas, hoping this Chevelle can relive it's glory days once more.  You barely make it out, scrapping the top of the car on the door.  You drive out, with the sun blinding your eyes, and contemplate what you just experience. The walkie utters a final ominous message, \"Like and Subscribe.\" Well... they certainly have a use-case... do you Like and Subscribe?",
    answer: nil,
    prev_decision_id: 7
)

Outcome.create!(
    id:11,
    result: "Thanks for playing my game!  If you liked it, do not like and subscribe. Instead, go and live your life. And then maybe play it again. And then also follow my game on Instagram, @thebasementgame, for more updates, including maps, new features, and more!",
    summary: "Got out alive. Barely.",
    decision_id: 11
)
puts "Finished Seeding The Game"
puts "Seeding The Other Stuff"


Player.create!(
    id: 1,
    username: "jmac90",
    password: "test",
    email: "j.macapagal90@gmail.com"
)

Player.create!(
    id: 2,
    username: "ramm9490",
    password: "test",
    email: "ramm9490@gmail.com"
)

Player.create!(
    id: 3,
    username: "nobleToad",
    password: "test",
    email: "nobleToad@gmail.com"
)

Player.create!(
    id: 4,
    username: "ShooterMcFahey",
    password: "test",
    email: "ShooterMcFahey@gmail.com"
)

Score.create!(
    id: 1, 
    player_id: 1,
    game_id: 1,
    points: 1000
)
Score.create!(
    id: 2,
    player_id: 2,
    game_id: 2,
    points: 100
)

Score.create!(
    id: 3,
    player_id: 3,
    game_id: 3,
    points: 500
)

Score.create!(
    id: 4,
    player_id: 4,
    game_id: 4,
    points: 0
)

puts "Finished Seeding The Other Stuff"

puts "Seeding Finished"