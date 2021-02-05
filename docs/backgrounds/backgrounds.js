const DEFAULT_FIREFLY_SETTINGS = {
    averageOffSeconds: 9,
    offTimeVariation: 5,

    averageOnSeconds: 2,
    onTimeVariation: 0.6,

    averageSizeInPixels: 5,
    sizeVariation: 3,
}

const BACKGROUNDS = [
    {
        name: "creek",
        linkToImage: "backgrounds/creek.jpg",
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
                fireflyCount: 70,
                pixelsFromTop: (765 - (1.5 * 150)),
                pixelsFromLeft: (200 + (200 / 2)),
                positionVariation: {
                    y: 120,
                    x: 80
                }
            },
            {
                fireflyCount: 20,
                pixelsFromTop:400,
                pixelsFromLeft:900,
                positionVariation: {
                    y: 60,
                    x: 40
                }
            },
            {
                fireflyCount: 20,
                pixelsFromTop:1000,
                pixelsFromLeft:1600,
                positionVariation: {
                    y: 60,
                    x: 40
                }
            },
        ]
    }
]