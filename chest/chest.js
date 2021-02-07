const CHEST = {
    closed: {
        linkToImage: "chest.png",
    },
    open: {
        fireflySettings: {
            ...DEFAULT_FIREFLY_SETTINGS
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
                fireflyCount: 120,
                pixelsFromTop: (765 - 150),
                pixelsFromLeft: (200 + (200 / 2)),
                positionVariation: {
                    y: 70,
                    x: 80
                }
            }
        ]
    }
}