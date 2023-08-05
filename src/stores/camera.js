



export const videoOppen = () => {

    const videoElment = document.getElementById('viedoElement')

    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {

        videoElment.srcObject = stream
    })

        .catch(function (error) {
            console.log('ERROR', error)
        })


}