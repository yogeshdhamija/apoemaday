const CHEST = {
    closed: {
        linkToImage: "chest.png",
    },
    open: {
        fireflySettings: {
            ...DEFAULT_FIREFLY_SETTINGS,
            averageSizeInPixels: 12,
            sizeVariation: 8,
            averageBlurSizeInPixels: 2,
            averageOffSeconds: 25,
            offTimeVariation: 10
        },
        linkToImage: "inside.jpg",
        widthInPixels: 5760,
        heightInPixels: 3840,
        bottomSurface: {
            pixelsFromTop: 850,
            pixelsFromLeft: 950,
            widthInPixels: 4000,
            heightInPixels: 2620
        },
        fireflyGroups: [
            {
                fireflyCount: 20,
                pixelsFromTop: (0.1 * 3840),
                pixelsFromLeft: 0,
                positionVariation: {
                    y: 200,
                    x: 300
                }
            },
            {
                fireflyCount: 30,
                pixelsFromTop: (0.2 * 3840),
                pixelsFromLeft: (5760 - 300 - 1000),
                positionVariation: {
                    y: 200,
                    x: 300
                }
            },
            {
                fireflyCount: 10,
                pixelsFromTop: (3840 - 200 - 800),
                pixelsFromLeft: (0.3 * 5760),
                positionVariation: {
                    y: 200,
                    x: 300
                }
            }
        ]
    }
}