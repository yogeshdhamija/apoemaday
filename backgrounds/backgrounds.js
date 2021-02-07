const BACKGROUNDS = [
    {
        name: "creek",
        linkToImage: "creek.jpg",
        fireflySettings: DEFAULT_FIREFLY_SETTINGS,
        widthInPixels: 1920,
        heightInPixels: 1280,
        chest: {
            pixelsFromTop: 765,
            pixelsFromLeft: 200,
            widthInPixels: 200,
            heightInPixels: 150,
        },
        fireflyGroups: [
            {
                fireflyCount: 120,
                pixelsFromTop: (765 - 150),
                pixelsFromLeft: (200 + (200 / 2)),
                positionVariation: {
                    y: 70,
                    x: 80
                }
            },
            {
                fireflyCount: 20,
                pixelsFromTop:1280/2,
                pixelsFromLeft:1920/2,
                positionVariation: {
                    y: (1280/2) - 50,
                    x: (1920/2) - 50
                }
            },
            {
                fireflyCount: 70,
                pixelsFromTop:400,
                pixelsFromLeft:900,
                positionVariation: {
                    y: 60,
                    x: 40
                }
            },
            {
                fireflyCount: 70,
                pixelsFromTop:800,
                pixelsFromLeft:1600,
                positionVariation: {
                    y: 60,
                    x: 40
                }
            },
        ]
    }
]