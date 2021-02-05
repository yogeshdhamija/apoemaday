const FIREFLIES_DEFAULT = {
    averageOffSeconds: 9,
    offTimeVariation: 5,

    averageOnSeconds: 2,
    onTimeVariation: 0.6,

    averageSizeInPixels: 5,
    sizeVariation: 3,

    smallGroup: {
        fireflyCount: 20,
        positionVariation: {
            y: 60,
            x: 40
        }
    },

    largeGroup: {
        fireflyCount: 70,
        positionVariation: {
            y: 120,
            x: 80
        }
    }
}
const BACKGROUNDS = [
    {
        name: "slovakia",
        linkToImage: "backgrounds/slovakia.jpg",
        fireflies: {
            ...FIREFLIES_DEFAULT,
            largeGroup: {
                fireflyCount: 70,
                positionVariation: {
                    y: 50,
                    x: 30
                }
            }
        },
        widthInPixels: 1600,
        heightInPixels: 1200,
        chest: {
            pixelsFromTop: 400,
            pixelsFromLeft: 70,
            widthInPixels: 100,
            heightInPixels: 70,
        },
        fireflyGroups: [ ]
    },
    {
        name: "creek",
        linkToImage: "backgrounds/creek.jpg",
        fireflies: FIREFLIES_DEFAULT,
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
                pixelsFromTop:400,
                pixelsFromLeft:900,
            },
            {
                pixelsFromTop:1000,
                pixelsFromLeft:1600,
            },
        ]
    }
]