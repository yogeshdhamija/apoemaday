const CHEST = {
    closed: {
        linkToImage: "chest.png",
    },
    open: {
        fireflySettings: {
            ...DEFAULT_FIREFLY_SETTINGS,
            averageSizeInPixels: 8,
            averageBlurSizeInPixels: 2,
            averageOffSeconds: 14,
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
                    y: 70,
                    x: 80
                }
            },
            {
                fireflyCount: 30,
                pixelsFromTop: (0.2 * 3840),
                pixelsFromLeft: (5760 - 80 - 300),
                positionVariation: {
                    y: 70,
                    x: 80
                }
            },
            {
                fireflyCount: 10,
                pixelsFromTop: (3840 - 70 - 300),
                pixelsFromLeft: (0.3 * 5760),
                positionVariation: {
                    y: 70,
                    x: 80
                }
            }
        ]
    }
}