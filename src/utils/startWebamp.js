import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "Rick Astley",
                    title: "Never Gonna Give You Up"
                },
                url: `${process.env.PUBLIC_URL}/songs-for-webamp/never-gonna-give-you-up.mp3`,
                duration: 213
            },
            {
                metaData: {
                    artist: "LCD Soundsystem",
                    title: "Dance Yrself Clean"
                },
                url: `${process.env.PUBLIC_URL}/songs-for-webamp/dance-yrself-clean.mp3`,
                duration: 213
            },
            {
                metaData: {
                    artist: "Maggie Rogers",
                    title: "Want Want"
                },
                url: `${process.env.PUBLIC_URL}/songs-for-webamp/want-want.mp3`,
                duration: 213
            },
            {
                metaData: {
                    artist: "Taylor Swift",
                    title: "All Too Well (10 Minute Version)"
                },
                url: `${process.env.PUBLIC_URL}/songs-for-webamp/all-too-well.mp3`,
                duration: 213
            },
            {
                metaData: {
                    artist: "Noah Kahan",
                    title: "Stick Season"
                },
                url: `${process.env.PUBLIC_URL}/songs-for-webamp/stick-season.mp3`,
                duration: 213
            }
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 