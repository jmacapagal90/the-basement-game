puts "cleaning up"

Game.destroy_all

Score.destroy_all

Player.destroy_all

Decision.destroy_all

Outcome.destroy_all

puts "end cleanup"

puts "Starting Seeding"

puts "Seeding The Game"
Game.create!(
    id: 1,
    outcomes_id: 11
)


Game.create!(
    id:2,
    outcomes_id: 1
)
Game.create!(
    id:3,
    outcomes_id: 5
)
Game.create!(
    id:4,
    outcomes_id: 1
)

Game.create!(
    id: 5,
    outcomes_id: 3
)


Decision.create!(
    id: 1,
    prompt: "You wake up in a dark, dingy basement. \n You yell for help, but no one answers. \n You are trapped. \n Through the darkness, you can make out a door. You walk to the door.\n Do you open it?",
    answer: 0,
    prev_decision_id: nil
)

Outcome.create!(
    id:1,
    result: "An axe falls from the ceiling and slices your head off...\n  You are dead.\n  (Did you really think I would make it that easy?!)",
    summary: "Got the axe. #AxeBodySpray",
    decision_id: 1
)


Decision.create!(
    id:2,
    prompt: "You realize it won't be that easy- which is good.  If you turned that door knob, it would've cut a cord and sent an axe to chop off your head! \n Instead, you see the faint outline of a flashlight near the base of the door.\n You turn it on and look around.... There's not much else in this room- except for an old toolbox.\n Do you open it?",
    answer: 1,
    prev_decision_id: 1
)

Outcome.create!(
    id:2,
    result: "The flashlight burns out. You sit in darkness for the next 3 weeks until you die of starvation... \n You are dead.",
    summary: "Starved for attention. #AttentionAttention",
    decision_id: 2
)

Decision.create!(
    id:3,
    prompt: "You first see a hammer.\n Do you pick it up?",
    answer: 0,
    prev_decision_id: 2
)

Outcome.create!(
    id:3,
    result: "The hammer was a trip for a bear trap.\n You got trapped, and bled to death...\n You are dead.",
    summary: "It's (literally) A Trap!. #ItzATrap",
    decision_id: 3
)

Decision.create!(
    id:4,
    prompt: "You're smarter than that... \n Next to the hammer, you see a screw driver.\n Do you pick it up?",
    answer: 0,
    prev_decision_id: 3
)

Outcome.create!(
    id:4,
    result: "The screwdriver also was a trip for a bear trap.\n You got trapped, and bled to death...\n You are dead.",
    summary: "Trapped and Screwed. #CatchMeInTheTrap",
    decision_id: 4
)

Decision.create!(
    id:5,
    prompt: "You were about to reach for it, but you notice the faint outline of a tripwire.\n This looks like a trap... \n You feel around carefully and lift up the toolbox shelf. \n You find a walkie-talkie.\n Do you use it?",
    answer: 1,
    prev_decision_id: 4
)

Outcome.create!(
    id:5,
    result: "The walkie talkie was actually a bomb that set to be used within 30 seconds. You didn't use it, and, thus, it exploded...\n You are dead.",
    summary: "Trapped and Screwed. #CatchMeInTheTrap",
    decision_id: 5
)

Decision.create!(
    id:6,
    prompt: "\"Hello?\" \n In the silence, an old voice eeks out, \"What's a bear without an ear?\" \nSuddenly, the lights flash on and, with a sudden crash, a trap door flies open from the ceiling dropping a rope ladder.\n Do you climb the ladder?",
    answer: 0,
    prev_decision_id: 5
)

Outcome.create!(
    id:6,
    result: "You pull on the rope ladder, and a gigantic anvil drops and smashes your head like Wile E. Coyote... \nYou are dead.",
    summary: "Was a smash hit. #WouldGraveyardSmash",
    decision_id: 6
)

Decision.create!(
    id:7,
    prompt: "You were about to climb the ladder, but something doesn't feel right.  You decide to wait... Suddenly, water starts flooding the tiny room! \n You begin to regret this decision. The ladder looks like your only hope...\n Do you climb the ladder?" ,
    answer: 0,
    prev_decision_id: 6
)

Outcome.create!(
    id:7,
    result: "You pull on the rope ladder, and a gigantic anvil drops and smashes your head like a Wile E. Coyote... \nYou are dead.",
    summary: "Was a smash hit. #WouldGraveyardSmash",
    decision_id: 7
)

Decision.create!(
    id:8,
    prompt: "The water is nearly up to your eyes. You gasp for what little air is left in the tiny room. This is it. \n Suddenly, there's a drowned bang, and the water starts dropping! \n Tumbling through the trecherous waterslide (which, low-key, kinda fun), you plop down hard into another dark room. There's a faint chittering noise... Next to you is an emergency flare. \n Do you light it? ",  
    answer: 1,
    prev_decision_id: 7
)

Outcome.create!(
    id:8,
    result: "A thousand centipedes flood the room... You die of a heart of attack because centipedes are awful. \n You are dead.",
    summary: "Favorite Movie: #HumanCentipede",
    decision_id: 8
)

Decision.create!(
    id:9,
    prompt: "The minute you light the flare, you realize there are what looks to be thousands of centipedes surrounding you. Scared by your flare, they keep an wary arms length away from you. \n You scan the room, and make out a hallway.\n Do you make for the hallway?",  
    answer: 1,
    prev_decision_id: 8
)

Outcome.create!(
    id:9,
    result: "The flare burns out, and the centipedes are hungry... \n You die of a heart of attack because centipedes are awful. \n You are dead.",
    summary: "Favorite Movie: #HumanCentipede",
    decision_id: 9
)

Decision.create!(
    id:10,
    prompt: "With the centipedes chasing you, you run down the hallway and reach an impasse.\n There's a path left, and a path right. \n Do you go left?",  
    answer: 0,
    prev_decision_id: 9
)

Outcome.create!(
    id:10,
    result: "The floor drops out. \n You land in a pit of Anacondas, who squeeze the life out of you... \n You are dead.",
    summary: "Favorite Movie: #Anaconda",
    decision_id: 10
)

Decision.create!(
    id:11,
    prompt: "Do you go right?",  
    answer: 1,
    prev_decision_id: 10
)

Outcome.create!(
    id:11,
    result: "You didn't go left. You didn't go right. You stayed put. Which is great, because that left time for a gigantic boulder crash down on you... \n You are dead",
    summary: "Decisions, decisions... #RockAndAHardPlace",
    decision_id: 11
)

Decision.create!(
    id:12,
    prompt: "The centipedes are gaining on you. Running down the hallway, you see the faint outline of a door. \n This might be your only chance- do you bowl right through it? ",  
    answer: 0,
    prev_decision_id: 11
)

Outcome.create!(
    id:12,
    result: "You run really hard at the door, which would have worked in the movies, but, IRL, that's a reinforced steel door... \n You knock yourself out and the centipedes devour your remains. ",
    summary: "Knock knock! Who's there? Centipedes? Centipede who? I'm about to #centipede my pants, can I use your bathroom?",
    decision_id: 12
)

Decision.create!(
    id:13,
    prompt: "You frantically get to the door, and try the knob.\n It's surprisingly unlocked? You slide it open. Do you go inside?",  
    answer: 1,
    prev_decision_id: 12
)

Outcome.create!(
    id:13,
    result: "The centipedes catch up. I mean they do have 1000 legs... \n You are dead.",
    summary: "Knock knock! Who's there? Centipedes? Centipede who? I'm about to #centipede my pants, can I use your bathroom?",
    decision_id: 13
)

Decision.create!(
    id:14,
    prompt: "All that resides in the room is a sledgehammer, a Teddy Ruxbin stuffed bear missing an eye, and a decrepit old Chevelle SS.  You're fed up with this game.  Do you take the sledgehammer and smash the Chevelle?",  
    answer: 0,
    prev_decision_id: 13
)


Outcome.create!(
    id:14,
    result: "You smash the car, and, boy, does it feel good! Except, it explodes... \n You are dead. ",
    summary: "I lived my life a #QuarterMile at a time.",
    decision_id: 14
)

Decision.create!(
    id:15,
    prompt:  "The car turns on and starts billowing black fumes into the unventilated room.  You panic realizing you will suffocate. You try to open the Chevelle- it's locked!  \"The Bear...\"\n  Do you rip it's head off? ",
    answer: 0,
    prev_decision_id: 14
)

Outcome.create!(
    id:15,
    result: "You rip it's head off, and it sprays poisonous gas in your face... \n You are dead. ",
    summary: "Can't wait for Black Widow 2. #ScarJoFace",
    decision_id: 15
)

Decision.create!(
    id:16,
    prompt: "\"Bear without an ear...\" you mutter to yourself. You feel one of the ears- there's a key! You frantically open the door, and turn off the ignition. Suddenly, the glove compartment opens. There's an tablet in there.\n  Do you turn it on? ",
    answer: 1,
    prev_decision_id: 15
)

Outcome.create!(
    id:16,
    result: "The tablet was set to be used in 30 seconds. The car explodes...\n  You are dead. ",
    summary: "Drove Them All Crazy. #GetOnTheBus",
    decision_id: 16
)

Decision.create!(
    id:17,
    prompt: "You turn the tablet on. It's a video of another person trapped in another sadistic torture room!   The radio goes off, \"Here's your chance, slick. Get in the game...\"  Two buttons render on the screen:. \"LIVE.\" and \"DIE.\"\n   Do you kill this person?",
    answer: 0,
    prev_decision_id: 16
)

Outcome.create!(
    id:17,
    result: "You are sick, you know that?  The car fills with mayonaise, and you suffocate in mayo. Happy now, you psychopath?!",
    summary: "Actually said they would sacrifice another person for their survival. #SuperSus",
    decision_id: 17
)

Decision.create!(
    id:18,
    prompt: "\"Aww, what a little saint...\" creaks the radio voice. The tablet flickers off.  In the distance, a garage door opens. \n This is your one chance.\n Do you start the car and get out of here?  ",
    answer: 0,
    prev_decision_id: 17
)

Outcome.create!(
    id:18,
    result: "Just as you make it to the door, the door slams shut, and you crash head on into a titanium garage door...  You are dead. ",
    summary: "Didn't wear their seatbelt. #ClickItOrTicket",
    decision_id: 18
)

Decision.create!(
    id:19,
    prompt: "You can't just leave that person behind.  The voice mutters through the radio, \"You wanna save them?  Tell me and all the followers on my stream your deepest, darkest secret...\"  The disgusting truth hits you: this psycho is just trying to get his app off the ground!\n You start to think about your secrets... If I do, who knows what will happen?\n But if I don't, I'll have killed someone else to save my ego.\n  Do you broadcast your deepest, darkest secret over the Internet?",
    answer: 1,
    prev_decision_id: 18
)

Outcome.create!(
    id:19,
    result: "Screw it. Better 'em than you, amirite? You turn on the car. The voice says, \"Great minds think alike...\" The other person made the same choice... The car explodes. \n You are dead.",
    summary: "Messed around and found out. #FAFO",
    decision_id: 19
)

Decision.create!(
    id:20,
    prompt: "You utter your secret...\n A door opens.\n A scared kid runs into the car. In the distance, you see the garage door start to close... You slam on the gas, hoping this Chevelle still has some juice left.  You scrape the top of the car on the door as it slams behind you..  With the sun blinding your eyes, you contemplate what you just experience. The radio utters a final ominous message: \"Like and Subscribe.\" \n Well... do you?",
    answer: nil,
    prev_decision_id: 19
)

Outcome.create!(
    id:20,
    result: "Thanks for playing my game!  If you liked it, do not like and subscribe. Instead, go and live your life. And then maybe play it again. And then also follow my game on Instagram, @thebasementgame, for more updates, including maps, new features, and more!",
    summary: "Got out alive. Barely. #MadeIt",
    decision_id: 20
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

Score.create!(
    id: 5,
    player_id: 1,
    game_id: 5,
    points: 300
)

puts "Finished Seeding The Other Stuff"

Game.reset_pk_sequence
Score.reset_pk_sequence
Player.reset_pk_sequence
Decision.reset_pk_sequence
Outcome.reset_pk_sequence

puts "Seeding Finished"