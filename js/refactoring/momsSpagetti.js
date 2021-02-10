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
function momsSpaghetti(lyrics) {

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

// Left comments in the function instead of here for clarity about what I'm referencing.
// We could do some fun documentation here though. We love to see docs. :D

/**
 * Takes an object and returns it in the form of the result of a successful Promise.
 * 
 * This could have just been a plain old const, but we love a re-usable piece of code!
 * 
 * @param {object} resolvedResult - The object to be returned as a successful promise.
 * 
 * @returns {Promise} - a successfully resolved promise with the `lyrics` parameter as the result.
 */
function returnAsPromise(resolvedResult) {
    return new Promise((resolve, reject) => {
        resolve(resolvedResult)

        // A reject, just for fun. ;)
        // Would never actually hit this.
        reject(new Error("Something went wrong!"))
    }) 
}

/**
 * Takes an object of lyrics from 2002 and returns them as a string.
 * 
 * @param {object} lyrics - The lyrics object to be formatted into a string.
 *                          Wouldn't actually pass this in if it were a real API call.
 * 
 * @returns {Promise} - A promise that resolves into a compiled lyrics string. 
 */
function momsSpaghettiRefactored(lyrics) {
    // Not sure if you wanted each object in lyrics treated like a separate promise; I'm treating
    // it like one. If there were more I'd probably compiling my own internal lyrics object to 
    // reference from the results with a Promise.all() and proceeding the same from there.

    // Also returning a Promise from this function so that whatever is using it can wait for the fake API 
    // to finish if it needs the result.
    // If this function was just managing the app state we could update it from inside this .then() method. 
    return returnAsPromise(lyrics)
        .then(
            (result) => {
                // De-structure the lyrics object for clarity and so things are easier to reference.
                const { intro, choruses, refrain, ending, refrainRepeat } = result

                // Going to work with the lyrics as an array until we actually need it as a string,
                // so that it's easier to manage and debug.

                // Assembling the middle section using a reducer so we can have immutable arrays and
                // so we don't need to manually manage an index/iterator. Could have used a for-of
                // loop if I wasn't also adding refrains as a separate array item (ie: if I was still 
                // working with this as a raw string, the for-of loop would work).
                const middle = choruses.reduce((accumlatedChorus, chorusObject) => { 
                    const { chorus } = chorusObject;
                    
                    return [
                        ...accumlatedChorus, 
                        chorus, 
                        // Repeat the refrain X times after each chorus, but without manual iteration.
                        ...Array(refrainRepeat).fill(refrain)  
                    ]
                }, [])

                // All the lyrics. Could just return this + the join in one line, but I like the extra
                // clarity.
                const compiledLyrics = [ intro, ...middle, ending ]

                // Was using this to assert that the results are the same, in place of test coverage.
                // console.log(momsSpaghetti(lyrics) === compiledLyrics.join(''))

                // Return the array we've been working with as a string.
                return compiledLyrics.join(' ')    
            },
            (error) => {
                // Again, just for fun. We wont actually hit this with out code as-is.
                return `${error} / An error case that triggers if the promise was rejected.`
            }
        )
}