puts "Starting Seeding"
Decision.destroy_all

Outcome.destroy_all


Decision.create!(
    id: 1,
    prompt: "You wake up in a dark, dingy basement. You yell for help, but no one answers. You are trapped. Through the darkness, you can make out a door. You walk to the door. Do you open it?",
    answer: 0,
    prev_decision_id: nil
)

Outcome.create!(
    id:1,
    result: "An axe falls from the ceiling and slices your head off",
    decision_id: 1
)


Decision.create!(
    id:2,
    prompt: "Good choice, because you see an axe right above tied to the door. You decide to look around and find a flashlight. You shine it at a toolbox. Do you open it?",
    answer: 1,
    prev_decision_id: 1
)

Outcome.create!(
    id:2,
    result: "You don't open the toolbox, and instead wait out the next 3 week in misery until you starve to death.",
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
    result: "The walkie-talkie was actually a bomb that set to be used within 30 seconds. You didn't use it, and, thus, it exploded.",
    decision_id: 3
)

puts "Seeding Finished"