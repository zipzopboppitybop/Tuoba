from app.models import db, Answer, environment, SCHEMA
from sqlalchemy.sql import text


def seed_answers():
    answer1 = Answer(
        content="A piccolo is a small flute and member of the woodwind family. The sound it produces is an octave higher than a standard flute. It's sometimes called the 'baby flute'.",
        userId=3,
        questionId=1
    )
    answer2 = Answer(
        content="Piccolo is a namekian from Dragon ball",
        userId=2,
        questionId=1
    )
    answer3 = Answer(
        content="A typical tuba is about 3 1/2 -feet high, has about 18 feet of tubing and weighs about 20 pounds.",
        userId=4,
        questionId=2
    )
    answer4 = Answer(
        content="A tuba weighs like nothing lol.",
        userId=5,
        questionId=2
    )
    answer5 = Answer(
        content=" Lower pitch sounds have longer wavelengths. Musical instruments are designed to resonate with the pitches they produce, meaning that music from an instrument has wavelengths that match the length of the instrument. This is why larger instruments have lower sounds.",
        userId=6,
        questionId=3
    )
    answer6 = Answer(
        content="Becuase it takes more air for a bigger instrument to make noise.",
        userId=7,
        questionId=3
    )
    answer7 = Answer(
        content="The oldest musical instrument in the world, a 60,000-year-old Neanderthal flute is a treasure of global significance. It was discovered in Divje babe cave near Cerkno and has been declared by experts to have been made by Neanderthals.",
        userId=8,
        questionId=4
    )
    answer8 = Answer(
        content="The oldest musical instrument in the world are some drums iirc.",
        userId=9,
        questionId=4
    )
    answer9 = Answer(
        content="Trumpets of old were made out of various materials, including wood, bamboo, bark, clay, human bone, and metal. There are some ancient trumpets made of clay found in Peru.",
        userId=10,
        questionId=5
    )
    answer10 = Answer(
        content="This is not a very good question. They make them like any other trumpet?",
        userId=11,
        questionId=5
    )
    answer11 = Answer(
        content="If you are just beginning, it will take you at least 3-4 months to have good command over the basics and then further take it to the level where you will be able to play along with certain songs and even hum it yourself.",
        userId=12,
        questionId=6
    )
    answer12 = Answer(
        content="If you don't suck you can learn an instrument in a day lol",
        userId=1,
        questionId=6
    )
    answer13 = Answer(
        content="The piano is one of the most difficult and rewarding instruments to learn; not only do you have to learn to read notes and translate them to the keys, but you have to do it with both hands at the same time. You'll also have to learn to play with correct technique or you could face injuries in the future.",
        userId=13,
        questionId=7
    )
    answer14 = Answer(
        content="The piano is one of the most difficult and rewarding instruments to learn; not only do you have to learn to read notes and translate them to the keys, but you have to do it with both hands at the same time. You'll also have to learn to play with correct technique or you could face injuries in the future.",
        userId=2,
        questionId=7
    )
    answer15 = Answer(
        content="I'd say you could learn a hundred instruments at once, and that general music knowledge you'd gain would give you an advantage going in to each, knowing what you know from the others. However, getting technically proficient on your instrument is difficult and time consuming.",
        userId=3,
        questionId=8
    )
    answer16 = Answer(
        content="I know 3 instruments so I guess that much.",
        userId=4,
        questionId=8
    )
    answer17 = Answer(
        content="It was the early 1970s and times were tougher than usual for the poorer parts of urban America. From a whole lot of nothing—and a whole lot of imagination—hip hop took form. DJ Kool Herc is credited with throwing the switch at an August 1973 dance bash.",
        userId=5,
        questionId=9
    )
    answer18 = Answer(
        content="I think hip hop has been around for centuries but I'm not sure.",
        userId=6,
        questionId=9
    )
    answer19 = Answer(
        content="One of the moral panics associated with the first wave of rock 'n' roll was the fear of race mixing - that young black and white kids would get together over this music that had a rhythmic, primitive, sensuous beat.",
        userId=7,
        questionId=10
    )
    answer20 = Answer(
        content="This is a stupid question lol. It's because it sucked then and it sucks now.",
        userId=8,
        questionId=10
    )
    answer21 = Answer(
        content="Because in the 60s rock was going through a change due to the cultural change around. The cold war, Vietnam, the world was changing and the music changed with it. ",
        userId=9,
        questionId=11
    )
    answer22 = Answer(
        content="Because it sucks. ",
        userId=10,
        questionId=11
    )
    answer23 = Answer(
        content="The Beatles had a short run of only 10 years from 1960 to 1970, but they're still the best-selling artists of all time by far. If you were to add in their solo albums and side groups, they'll hold that record forever.",
        userId=11,
        questionId=12
    )
    answer24 = Answer(
        content="Limp Bizkit, who doesn't love Break Stuff and Rollin? ",
        userId=12,
        questionId=12
    )
    answer25 = Answer(
        content="Years of singing as many as 100 songs per day had taken its toll, and he lost his voice completely for several months in 1950 because of vocal-chord hemorrhaging. ",
        userId=1,
        questionId=13
    )
    answer26 = Answer(
        content="He just wasn't good at singing I guess. ",
        userId=2,
        questionId=13
    )
    # answer27 = Answer(
    #     content="Al Green - Let`s Stay TogetherThis is perhaps the first time the world realised that Barack Obama might just have a singing voice in there somewhere. This speech, back in 2012, was attended by The Reverend Al Green, soul legend and owner of one of the most iconic voices in history.So the former-POTUS decided this would be the time to pay small tribute to a legend, by singing the opening line of Let`s Stay Together. Obama shows total ease with a high tenor line, sensitive and very much in tune. Even more impressive, he`s actually singing in the exactly correct key of the original recording, suggesting there might be something resembling perfect pitch (or at least great intuition) in Obama's musical arsenal.,",
    #     userId=13,
    #     questionId=14
    # )
    # answer28 = Answer(
    #     content="I have heard his singing voice and frankly I'm not impressed",
    #     userId=3,
    #     questionId=14
    # )
    # answer29 = Answer(
    #     content="Clinton was in the chorus and played the tenor saxophone, winning first chair in the state band's saxophone section. In 1961, Clinton became a member of the Hot Springs Chapter of the Order of DeMolay, a youth group affiliated with Freemasonry, but he never became a Freemason.",
    #     userId=4,
    #     questionId=15
    # )
    # answer30 = Answer(
    #     content="I don't know if he can play an instrument, but I sure do know his assistant can play a mean flute.",
    #     userId=5,
    #     questionId=15
    # )
    # answer31 = Answer(
    #     content="Eight presidents were musicians, Thomas Jefferson, John Quincy Adams, John Tyler, Warren G. Harding, Harry Truman, Richard Nixon, Bill Clinton, and Barack Obama",
    #     userId=6,
    #     questionId=16
    # )
    # answer32 = Answer(
    #     content="The only president I know was a musician was Bill Clinton.",
    #     userId=7,
    #     questionId=16
    # )
    # answer33 = Answer(
    #     content="No the composer you're thinking of is Ludwig van Beethoven.",
    #     userId=8,
    #     questionId=17
    # )
    # answer34 = Answer(
    #     content="Probably",
    #     userId=10,
    #     questionId=17
    # )
    # answer35 = Answer(
    #     content="Beethoven was able to compose even when he was deaf with the help of his 'inner ears', his recollection of sounds and imagination. He also used ear trumpets to channel sound into his ears, and often physical contact with his piano to 'feel' the sound waves.",
    #     userId=9,
    #     questionId=18
    # )
    # answer36 = Answer(
    #     content="Maybe he just knew?",
    #     userId=11,
    #     questionId=18
    # )
    # answer37 = Answer(
    #     content="The trombone is unique! Instead of having valves like the rest of the brass instruments, the trombone uses a metal slide to change the sounds. A standard trombone is made of long, slender metal tubing.",
    #     userId=13,
    #     questionId=19
    # )
    # answer38 = Answer(
    #     content="It sounds worse than most instruments.",
    #     userId=1,
    #     questionId=19
    # )
    # answer39 = Answer(
    #     content="It is estimated that there are over 1500 different musical instruments in the world. These instruments are segregated into different categories that include woodwind, percussion, brass, keyboard, and the guitar family.",
    #     userId=12,
    #     questionId=20
    # )
    # answer40 = Answer(
    #     content="Atleast 5.",
    #     userId=2,
    #     questionId=20
    # )
    # answer41 = Answer(
    #     content="A total of forty-four are used in full orchestras. The string family is the largest family in the orchestra, accounting for over half of the total number of musicians on stage.",
    #     userId=3,
    #     questionId=21
    # )
    # answer42 = Answer(
    #     content="I think like 3",
    #     userId=4,
    #     questionId=21
    # )
    # answer43 = Answer(
    #     content="What's the difference between the terms “symphony” and “orchestra”? A symphony is a large-scale musical composition, usually with three or four movements. An orchestra is a group of musicians with a variety of instruments, which usually includes the violin family.",
    #     userId=6,
    #     questionId=22
    # )
    # answer44 = Answer(
    #     content="One is named a symphony and the other is an orchestra.",
    #     userId=7,
    #     questionId=22
    # )
    # answer45 = Answer(
    #     content="A family of musical instruments is a grouping of several different but related sizes or types of instruments. Some schemes of musical instrument classification, such as the Hornbostel-Sachs system, are based on a hierarchy of instrument families and families of families.",
    #     userId=5,
    #     questionId=23
    # )
    # answer46 = Answer(
    #     content="When a mommy instrument and a daddy instrument love each other very much they make a baby instrument.",
    #     userId=8,
    #     questionId=23
    # )
    # answer47 = Answer(
    #     content="According to Guinness World Records, Irving Berlin's `White Christmas` (1942) as performed by Bing Crosby is the best-selling single worldwide, with estimated sales of over 50 million copies.",
    #     userId=9,
    #     questionId=24
    # )
    # answer48 = Answer(
    #     content="My Number One will always be Billie Jean.",
    #     userId=10,
    #     questionId=24
    # )
    # answer49 = Answer(
    #     content="No one has the rights to classical seeing as the original composers are dead and copyright didn't exist when they created their music.",
    #     userId=11,
    #     questionId=25
    # )
    # answer50 = Answer(
    #     content="I do.",
    #     userId=12,
    #     questionId=25
    # )
    # answer51 = Answer(
    #     content="Beethoven is widely regarded as the greatest composer who ever lived, in no small part because of his ability—unlike any before him—to translate feeling into music. His most famous compositions included Symphony No. 5 in C Minor, Op.",
    #     userId=13,
    #     questionId=26
    # )
    # answer52 = Answer(
    #     content="I personally belive Papa Roach is the greatest composer of all time.",
    #     userId=2,
    #     questionId=26
    # )

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.add(answer7)
    db.session.add(answer8)
    db.session.add(answer9)
    db.session.add(answer10)
    db.session.add(answer11)
    db.session.add(answer12)
    db.session.add(answer13)
    db.session.add(answer14)
    db.session.add(answer15)
    db.session.add(answer16)
    db.session.add(answer17)
    db.session.add(answer18)
    db.session.add(answer19)
    db.session.add(answer20)
    db.session.add(answer21)
    db.session.add(answer22)
    db.session.add(answer23)
    db.session.add(answer24)
    db.session.add(answer25)
    db.session.add(answer26)
    # db.session.add(answer27)
    # db.session.add(answer28)
    # db.session.add(answer29)
    # db.session.add(answer30)
    # db.session.add(answer31)
    # db.session.add(answer32)
    # db.session.add(answer33)
    # db.session.add(answer34)
    # db.session.add(answer35)
    # db.session.add(answer36)
    # db.session.add(answer37)
    # db.session.add(answer38)
    # db.session.add(answer39)
    # db.session.add(answer40)
    # db.session.add(answer41)
    # db.session.add(answer42)
    # db.session.add(answer43)
    # db.session.add(answer44)
    # db.session.add(answer45)
    # db.session.add(answer46)
    # db.session.add(answer47)
    # db.session.add(answer48)
    # db.session.add(answer49)
    # db.session.add(answer50)
    # db.session.add(answer51)
    # db.session.add(answer52)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM answers"))

    db.session.commit()
