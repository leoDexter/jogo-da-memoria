var path = require('path')
export const Politicos = {
    data()
    {
        return {
            images: [
                { open: true, done: false, src: require('./assets/images/Aecio.png') },
                { open: true, done: false, src: require('./assets/images/collor.png') },
                { open: true, done: false, src: require('./assets/images/Dilminha.png') },
                { open: true, done: false, src: require('./assets/images/fhc.png') },
                { open: true, done: false, src: require('./assets/images/Lula.png') },
                { open: true, done: false, src: require('./assets/images/maia.png') },
                { open: true, done: false, src: require('./assets/images/paes.png') },
                { open: true, done: false, src: require('./assets/images/poste.png') }
            ],
            verso: { src: require('./assets/images/verso.jpg') }
        };
    }
};