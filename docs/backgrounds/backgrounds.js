const DEFAULT_FIREFLY_SETTINGS = {
    averageOffSeconds: 9,
    offTimeVariation: 5,

    averageOnSeconds: 2,
    onTimeVariation: 0.6,

    averageSizeInPixels: 2.3,
    sizeVariation: 2,

    averageBlurSizeInPixels: 1,
    blurSizeVariation: 1,
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
                    y: 1280/2,
                    x: 1920/2
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