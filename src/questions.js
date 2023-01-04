
const questions = [
    {
        id:1,
        questionText:"What was the first national park?",
        answerOptions: [
            {answerText:"Grand Canyon (Arizona)", isCorrect: false},
            {answerText:"Yosemite (California)", isCorrect: false},
            {answerText:"Theodore Roosevelt (North Dakota)", isCorrect: false},
            {answerText:"Yellowstone (Wyoming, Montana, Idaho)", isCorrect: true},
        ],
    },
    {
        id: 2,
        questionText: "Which national park has the deepest lake in the U.S.?",
        answerOptions: [
            {answerText:"Lake Clark (Alaska)", isCorrect: false},
            {answerText:"Grand Teton (Wyoming)", isCorrect: false},
            {answerText:"Shenandoah (Virginia)", isCorrect: false},
            {answerText:"Crater Lake (Oregon)", isCorrect: true},
        ],
        
    },
    {
        id: 3,
        questionText:"What causes the blue haze for which Great Smoky Mountains National Park is named?",
        answerOptions: [
            {answerText:"Cars",isCorrect: false},
            {answerText:"Fires",isCorrect: false},
            {answerText:"Animals",isCorrect: false},
            {answerText:"Plants", isCorrect: true},
        ],
    },
    {
        id: 4,
        questionText:"Which president signed the National Park Service into being in 1916?",
        answerOptions: [
            {answerText:"Theodore Roosevelt", isCorrect: false},
            {answerText:"Franklin Roosevelt", isCorrect: false},
            {answerText:"William Taft", isCorrect: false},
            {answerText:"Woodrow Wilson", isCorrect: true},
        ],
        
    },
    {
        id: 5,
        questionText:"What is the highest number of visits Yellowstone has recorded in a single year - and when was it?",
        answerOptions: [
            {answerText:"About 5.2 million in 2019",isCorrect: false},
            {answerText:"About 2.74 million in 2020",isCorrect: false},
            {answerText:"About 3 million in 2019",isCorrect: false},
            {answerText:"About 4.86 million in 2021", isCorrect: true},
        ],
         
    },
    {
        id: 6,
        questionText:"Butch Cassidy and his Wild Bunch hid out in the canyons of which national park?",
        answerOptions: [
            {answerText:"Grand Canyon (Arizona)", isCorrect: false},
            {answerText:"Rocky Mountains (Colorado)",isCorrect: false},
            {answerText:"Great Basin (Nevada)", isCorrect: false},
            {answerText:"Canyonlands (Utah)", isCorrect: true},
        ],
         
    },
    {
        id: 7,
        questionText:"An early 20th-century newspaper described which national park as offering 'all the adversity of hell without the inconveniences'?",
        answerOptions: [
            {answerText:"Arches (Utah)", isCorrect: false},
            {answerText:"Joshua Tree (California)", isCorrect: false},
            {answerText:"Mojave National Preserve (California)", isCorrect: false},
            {answerText:"Death Valley (California and Nevada)", isCorrect: true},
        ],
         
    },
    {
        id: 8,
        questionText:"Carbon Glacier in this national park has the greatest thickness and volume of any glacier in the continental U.S.",
        answerOptions: [
            {answerText:"Glacier (Montana)", isCorrect: false},
            {answerText:"Denali (Alaska)", isCorrect: false},
            {answerText:"Zion (Utah)", isCorrect: false},
            {answerText:"Mount Rainier (Washington)", isCorrect: true},
        ],
         
    },
    {
        id: 9,
        questionText:"Which national park includes the largest wilderness area east of the Mississippi River?",
        answerOptions: [
            {answerText:"Acadia (Maine)", isCorrect: false},
            {answerText:"Isle Royale (Michigan)", isCorrect: false},
            {answerText:"Cuyahoga Valley (Ohio)", isCorrect: false},
            {answerText:"Everglades (Florida)", isCorrect: true},
        ],
         
    },
    {
        id: 10,
        questionText:"The most massive single mountain on Earth is located in which national park?",
        answerOptions: [
            {answerText:"Rocky Mountain (Colorado)", isCorrect: false},
            {answerText:"Yosemite (California)", isCorrect: false},
            {answerText:"Guadalupe Mountains (Texas)", isCorrect: false},
            {answerText:"Hawaii Volcanoes (Hawaii)", isCorrect: true},
        ],
         
    },
    {
        id: 11,
        questionText:"Which of the following national parks is the newest?",
        answerOptions: [
            {answerText:"Great Sand Dunes National Park, Colorado", isCorrect: false},
            {answerText:"Gateway Arch National Park, Missouri", isCorrect: false},
            {answerText:"Indiana Dunes National Park, Indiana", isCorrect: false},
            {answerText:"New River Gorge National Park and Preserve, West Virginia", isCorrect: true},
        ],
         
    },
    {
        id: 12,
        questionText:"What is the only US state without a national park?",
        answerOptions: [
            {answerText:"Rhode Island", isCorrect: false},
            {answerText:"Kentucky", isCorrect: false},
            {answerText:"Nebraska", isCorrect: false},
            {answerText:"Delaware", isCorrect: true},
        ],
         
    },
    {
        id: 13,
        questionText:"What is the smallest US national park?",
        answerOptions: [
            {answerText:"Death Valley National Park, California", isCorrect: false},
            {answerText:"Great Smoky Mountains National Park, Tennessee and North Carolina", isCorrect: false},
            {answerText:"Wrangell-St. Elias National Park & Preserve, Alaska", isCorrect: false},
            {answerText:"Hot Springs National Park, Arkansas", isCorrect: true},
        ],
         
    },
    {
        id: 14,
        questionText:"What national park is 99% under water?",
        answerOptions: [
            {answerText:"Glacier Bay National Park and Preserve, Alaska", isCorrect: false},
            {answerText:"Crater Lake National Park, Oregon", isCorrect: false},
            {answerText:"Everglades National Park, Florida", isCorrect: false},
            {answerText:"Dry Tortugas National Park, Florida Keys", isCorrect: true},
        ],
         
    },
    {
        id: 15,
        questionText:"What is the hardest national park to visit?",
        answerOptions: [
            {answerText:"Isle Royale National Park, Michigan", isCorrect: false},
            {answerText:"Haleakala National Park, Maui, Hawaii", isCorrect: false},
            {answerText:"Yosemite National Park, California", isCorrect: false},
            {answerText:"Gates of the Arctic National Park and Preserve, Alaska", isCorrect: true},
        ],
         
    },
    {
        id: 16,
        questionText:"What is the hottest national park?",
        answerOptions: [
            {answerText:"Arches National Park, Utah", isCorrect: false},
            {answerText:"Zion National Park, Utah", isCorrect: false},
            {answerText:"Joshua Tree National Park, California", isCorrect: false},
            {answerText:"Death Valley, California", isCorrect: true},
        ],
         
    },
    {
        id: 17,
        questionText:"How did Death Valley National Park get its name?",
        answerOptions: [
            {answerText:"Travelors have all mysteriously died here throughout history due to lack of water and extreme heat", isCorrect: false},
            {answerText:"There is no water here to support life", isCorrect: false},
            {answerText:"There is no life, including plantlife, found in Death Valley", isCorrect: false},
            {answerText:"It was named by group of pioneers who got lost here and died in the winter of 1849", isCorrect: true},
        ],
         
    },
    {
        id: 18,
        questionText:"What is the distance between Grand Teton National Park and Yellowstone National Park?",
        answerOptions: [
            {answerText:"5280 feet", isCorrect: false},
            {answerText:"100 yards", isCorrect: false},
            {answerText:"250 miles", isCorrect: false},
            {answerText:"16 kilometers", isCorrect: true},
        ],
         
    },
    {
        id: 19,
        questionText:"Which movie was filmed in Redwood National Park, California?",
        answerOptions: [
            {answerText:"The Shining (1980)", isCorrect: false},
            {answerText:"Planet of the Apes (1968)", isCorrect: false},
            {answerText:"Forrest Gump (1994)", isCorrect: false},
            {answerText:"The Lost World: Jurassic Park (1997)", isCorrect: true},
        ],
         
    },
    {
        id: 20,
        questionText:"Which national park has it's very own unique flower?",
        answerOptions: [
            {answerText:"Seguaro National Park, Arizona (saguaro cactus)", isCorrect: false},
            {answerText:"Rocky Mountain National Park, Colorado (Mountain wood lily)", isCorrect: false},
            {answerText:"Great Smoky Mountains National Park, Tennessee and North Carolina (lady slipper orchids)", isCorrect: false},
            {answerText:"Yellowstone, Wyoming (sand verbena)", isCorrect: true},
        ],
         
    }
].sort(() => 0.5 - Math.random())
export default questions
    