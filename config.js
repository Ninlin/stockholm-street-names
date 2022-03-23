var config = {
    style: 'mapbox://styles/ninlin/cl02yq5p9001014qi2d4ydzy3',
    accessToken: 'pk.eyJ1IjoibmlubGluIiwiYSI6ImNqanR0Zzc4bzI5b2Ezd2xlb2ZmbzdrOHMifQ.nhMfjVcApf7oZVzhlMnRLA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: 'Knowing Swedish geography might help you orient in Stockholm',
    byline: 'Someone once told me that you can guess where in Stockholm a street is located just by hearing its name. If a street bears a name of a southern or northern province, then it is located south or north of the city center respectively. I decided to make a quick check of whether this is true. \n\n\n Indeed, in 1885 there was a major street name revision that intentionally used “de södra landskapen” (southern provinces) and “de norra landskapen” (northern provinces) as a theme for streets south and north of the city center. There are some curious inconsistencies however. ',
    footer: 'Source: Stahre, Nils-Gustaf; Fogelström, Per Anders (2005). Stockholms gatunamn. \n\n Created by Nina Lindell using Mapbox, OpenstreetMap, Geojson.io, Mapshaper, Tableau and Figma',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: true,
            title: '',
            description: '',
            image: '',
            location: {
                center: [18.06288, 59.33593],
                zoom: 11.87,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vasastan',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'mid.png',
            description: 'During the street name revision in 1885 four streets in Vasastan were named after northern provinces of Dalarna, Hälsingland, Uppland, Västmanland. Gästrikland has "received" a street much later, in 1938 when Uppsalagatan was renamed into Gästrikegatan to avoid confusion with Uppsalavägen. ',
            location: {
                center: [18.04195, 59.34158],
                zoom: 14.08,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'farsta',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'varmland.png',
            description: 'Värmland, however, does not have a street named after it in central Stockholm. Only in 1950s Värmlandsvägen appeared all the way down in Farsta, where "värmländska ortnamn" (places in Värmland) is a common theme.',
            location: {
                center: [18.07628, 59.24625],
                zoom: 14.87,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'south',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'south.png',
            description: 'Streets on Södermalm bear the names of most southern provinces. There is no street named after Småland on the islands, however.',
            location: {
                center: [18.06865, 59.31318],
                zoom: 13.80,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'city',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'smaland.png',
            description: 'Confusingly, Smålandsgatan exists north of the city center. It already existed during the 1885 naming revision. Historians suggest that “Smålandsgatan” got its name not from the province on Småland, but from the name of the baker Jochum Småhl who used to own property on that street.',
            location: {
                center: [18.07219, 59.33373],
                zoom: 17.40,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'city2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'norrland.png',
            description: 'Another thing that might confuse those who want to follow this rule on thumb is that Norrlandsgatan instead of being the most northern of all is located right next to Smålandsgatan in the middle of the city. The question of why provinces in Norrland received just one combined name remains unanswered.',
            location: {
                center: [18.07044, 59.33432],
                zoom: 16.22,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                     layer: 'data-driven-lines-norr',
                     opacity: 1
                 },
                 {
                     layer: 'data-driven-lines-labels-norr',
                     opacity: 1
                 }
                 ],
            //onChapterExit: [{
            //         layer: 'data-driven-lines-norr',
            //         opacity: 0
            //     },
            //     {
            //         layer: 'data-driven-lines-labels-norr',
            //         opacity: 0
            //     }]
        },
        {
            id: 'city3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Knowing where Swedish provinces are located might indeed help you navigate in Stockholm. Or, instead, you can learn Swedish geography by wandering the streets of central Stockholm. Just remember the curious exceptions.',
            location: {
                center: [18.04318, 59.32769],
                zoom: 12.23,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
