
import chunk from 'lodash/chunk'
import zip from 'lodash/zip'
import map from 'lodash/map'
import sum from 'lodash/sum'
const { sqrt, pow } = Math


export async function calculateSimilarityOfSVGs(svgElement1, svgElement2) 
{
    const NUMBER_OF_CHANNELS = 3
    const BASE64_PREFIX = "data:image/svg+xml;base64,"

    const svgString1 = new XMLSerializer().serializeToString(svgElement1)
    const svgString2 = new XMLSerializer().serializeToString(svgElement2)

    const encodedSVGString1 = BASE64_PREFIX + window.btoa(svgString1);
    const encodedSVGString2 = BASE64_PREFIX + window.btoa(svgString2);
    
    const image1ByteChunks = await toImage(encodedSVGString1)
    const image2ByteChunks = await toImage(encodedSVGString2)

    const sumOfDists = imageDist(image1ByteChunks, image2ByteChunks)
    const maxDistance = (image1ByteChunks.length) * sqrt(NUMBER_OF_CHANNELS)

    return (1.0 - (sumOfDists / maxDistance))
}

function imageDist(image1, image2) {
    const pixelPairs = zip(image1, image2)
    const imageDistResult = map(pixelPairs, (pixelsPair) => {
        return pixelDist(pixelsPair[0], pixelsPair[1])
    })
    return sum(imageDistResult)
}

function pixelDist(pixel1, pixel2) {
    const CHANNEL_MAX_VALUE = 255
    const channelPairs = zip(pixel1, pixel2)
    const channelDists = map(
        channelPairs, (colorChannelPair) => {
            return pow((colorChannelPair[0] - colorChannelPair[1]) / CHANNEL_MAX_VALUE, 2)
        }
    )
    return sqrt(sum(channelDists))
}

async function toImage(svg) {
    return new Promise((resolve) => 
    {
        const RESOLUTION_WIDTH = 100
        const RGB_WHITE = [ 255, 255, 255 ]
        const ALPHA_CHANNEL_INDEX = 3
        const PIXEL_BYTE_LENGTH = 4 // bytes per pixel
        
        let img = document.createElement('img');
        img.onload = (event) => {
            console.log("onload event", event)

            document.body.appendChild(img);
            let canvas = document.createElement("canvas");
            let ratio = (img.clientWidth / img.clientHeight) || 1;
            document.body.removeChild(img);
            canvas.width = RESOLUTION_WIDTH;
            canvas.height = RESOLUTION_WIDTH / ratio;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data
            const imageByteChunks = chunk(imageData, PIXEL_BYTE_LENGTH)
            const processedImageByteChunks = imageByteChunks.map(chunk => 
            {
                if(chunk[ALPHA_CHANNEL_INDEX] === 0)
                {
                    return RGB_WHITE
                }
                else
                {
                    return [ ...chunk.slice(0, ALPHA_CHANNEL_INDEX) ]
                }
            })
        
            resolve(processedImageByteChunks)
        };
        img.src = svg;
    })    
}