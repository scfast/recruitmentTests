//Task:
// Create a refactored version of the following code at the bottom of this file using ES6 conventions
// Also leave a commented section breifly outlining some of the techniques, style choice, and reasons for your refactoring choices
// The refactored version of this code should be promise based and consider standard linting practices

// DO NOT REFACTOR THIS SECTION //
const lyrics = {
    intro: "Look\
    If you had\
    One shot\
    Or one opportunity\
    To seize everything you ever wanted\
    In one moment\
    Would you capture\
    Or just let it slip?",
    choruses: [{
        chorus: "Yo\
        His palms are sweaty, knees weak, arms are heavy\
        There's vomit on his sweater already, mom's spaghetti\
        He's nervous, but on the surface he looks calm and ready\
        To drop bombs, but he keeps on forgettin'\
        What he wrote down, the whole crowd goes so loud\
        He opens his mouth, but the words won't come out\
        He's chokin', how, everybody's jokin' now\
        The clocks run out, times up, over, blaow!\
        Snap back to reality, oh there goes gravity\
        Oh, there goes Rabbit, he choked\
        He's so mad, but he won't give up that easy? No\
        He won't have it, he knows his whole back city's ropes\
        It don't matter, he's dope, he knows that, but he's broke\
        He's so stacked that he knows, when he goes back to his mobile home, that's when its\
        Back to the lab again yo, this whole rhapsody\
        He better go capture this moment and hope it don't pass him"
    },
    {
        chorus: "The souls escaping, through this hole that its gaping\
        This world is mine for the taking\
        Make me king, as we move toward a, new world order\
        A normal life is borin', but super stardom's close to post mortem\
        It only grows harder, only grows hotter\
        He blows us all over these hoes is all on him\
        Coast to coast shows, he's known as the globetrotter\
        Lonely roads, God only knows, he's grown farther from home, he's no father\
        He goes home and barely knows his own daughter\
        But hold your nose 'cause here goes the cold water\
        His hoes don't want him no mo, he's cold product\
        They moved on to the next schmo who flows, he nose dove and sold nada\
        So the soap opera is told and unfolds, I suppose it's old partna, but the beat goes on\
        Da da dumb da dumb da da"
    },
    {
        chorus: "No more games, I'm a change what you call rage\
        Tear this roof off like two dogs caged\
        I was playin' in the beginnin', the mood all changed\
        I been chewed up and spit out and booed off stage\
        But I kept rhymin' and stepwritin' the next cipher\
        Best believe somebody's payin' the pied piper\
        All the pain inside amplified by the\
        Fact that I can't get by with my nine to\
        Five and I can't provide the right type of\
        Life for my family 'cause man, these God damn food stamps don't buy diapers\
        And its no movie, there's no Mekhi Phifer\
        This is my life and these times are so hard\
        And it's getting even harder tryin' to feed and water my seed, plus\
        See dishonor caught up between bein' a father and a prima-donna\
        Baby mama drama screamin' on and too much\
        For me to want to say in one spot, another jam or not\
        Has gotten me to the point, I'm like a snail I've got\
        To formulate a plot fore I end up in jail or shot\
        Success is my only option, failures not\
        Mom, I love you, but this trail has got to go, I cannot grow old in Salem's lot\
        So here I go is my shot\
        Feet fail me not 'cause maybe the only opportunity that I got"
    }],
    refrain:"You better lose yourself in the music, the moment \
    You own it, you better never let it go \
    You only get one shot, do not miss your chance to blow \
    This opportunity comes once in a lifetime you better",
    refrainRepeat: 2, // number of times that refrain get repeated between choruses
    ending: "You can do anything you set your mind to, man"
}
// DO NOT REFACTOR THIS SECTION //


// REFACTOR THIS CODE //
// This code assembles the above object into a string with the lyrics for Eminem's "lose Yourself". 
// The result should look like https://www.google.ca/search?rlz=1C5CHFA_enCA764CA764&ei=4iFbWs_VG43CjwOJ465Q&q=lose+yourself+lyrics&oq=lose+yoursle&gs_l=psy-ab.3.0.0i10k1l10.6780.11717.0.12640.28.24.0.2.2.0.275.2686.4j13j2.20.0....0...1c.1.64.psy-ab..15.12.1403.0..0j0i67k1j0i131k1j0i131i67k1.234.XSGvMUvV4XY
function momsSpagetti(lyrics) {

    var loseYourself;
    var internalCounter = 0
    loseYourself = lyrics.intro;

    for(i = 0; i < lyrics.choruses.length; i++) {
        loseYourself = loseYourself + lyrics.choruses[i].chorus;
        if(internalCounter == 0) {
            internalCounter++
            loseYourself = loseYourself + lyrics.refrain
        }
        if(internalCounter == 1) {
            internalCounter++
            loseYourself = loseYourself + lyrics.refrain
        }
        if(internalCounter == 2) {
            internalCounter = 0
        }
    }

    loseYourself = loseYourself + lyrics.ending;

    return loseYourself;
}

// REFACTORED VERSION HERE //
//
// An array of promises is created, with each element
// consisting of a section of song lyrics. 
// After all lyric sections are retrieved, the complete
// song lyrics are returned. 
// 
// If these lyrics were being accessed over the Internet, for example,
// a promise-based solution would allow the lyrics to be accessed
// independently of each other, at the same time. 
// The array of promises ensures that
// all the lyrics are displayed at the same time and in order,
// even if some are initially returned sooner than others.
//
// In the original code, the refrainRepeat property was unused,
// so in this version it is used.
//
// Additionally, ES6 recommends the use of let rather than var
// for declaring variables. 

function getLyricElement(lyricElement) {
    return new Promise(function(resolve) {
        resolve(lyricElement);
    });
}

function assembleLyrics() {
    let promises = [];
    let finalLyrics = lyrics.intro;
    promises.push(getLyricElement(lyrics.intro));
    
    for(i = 0; i < lyrics.choruses.length; i += 1) {
        promises.push(getLyricElement(lyrics.choruses[i].chorus));
        for(j = 0; j < lyrics.refrainRepeat; j += 1) {
            promises.push(getLyricElement(lyrics.refrain));
        }
    }
    promises.push(getLyricElement(lyrics.ending));

    Promise.all(promises)
        .then(function(results) {
            for(i = 0; i < results.length; i += 1) {
                finalLyrics += results[i];
            }
            console.log(finalLyrics);
            return finalLyrics;
        })
        .catch(function(error) {
            console.error("There was an error \
                retrieving the lyrics", error.message);
        });

}

assembleLyrics();