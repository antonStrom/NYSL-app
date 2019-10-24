const app = new Vue({
    el: '#app',
    data: {
        schedule: [{
                date: "01/9/2019",
                home_team: "U1",
                away_team: "U4",
                field: "AJ Katzenmaier",
                time: "9:30AM"
            },
            {
                date: "08/9/2019",
                home_team: "U5",
                away_team: "U6",
                field: "North",
                time: "9:30AM"
            },
            {
                date: "15/9/2019",
                home_team: "U2",
                away_team: "U4",
                field: "Greenbay",
                time: "9:30AM"
            },
            {
                date: "22/9/2019",
                home_team: "U1",
                away_team: "U3",
                field: "AJ Katzenmaier",
                time: "9:30AM"
            },
            {
                date: "29/9/2019",
                home_team: "U4",
                away_team: "U5",
                field: "Marjorie P Hart",
                time: "9:30AM"
            },
            {
                date: "06/10/2019",
                home_team: "U2",
                away_team: "U5",
                field: "Greenbay",
                time: "9:30AM"
            },
            {
                date: "08/10/2019",
                home_team: "U3",
                away_team: "U4",
                field: "Howard A Yeager",
                time: "9:30AM"
            },
            {
                date: "20/10/2019",
                home_team: "U6",
                away_team: "U3",
                field: "South",
                time: "9:30AM"
            },
            {
                date: "27/10/2019",
                home_team: "U3",
                away_team: "U1",
                field: "Howard A Yeager",
                time: "9:30AM"
            }
        ],
        schedulePM: [{
                date: "01/9/2019",
                home_team: "U3",
                vs: "VS.",
                away_team: "U2",
                field: "Location: Howard A Yeager",
                time: "1:00PM"
            },
            {
                date: "08/9/2019",
                home_team: "U6",
                vs: "VS.",
                away_team: "U1",
                field: "Location: South",
                time: "1:00PM"
            },
            {
                date: "15/9/2019",
                home_team: "U3",
                vs: "VS.",
                away_team: "U5",
                field: "Location: Howard A Yeager",
                time: "1:00PM"
            },
            {
                date: "22/9/2019",
                home_team: "U2",
                vs: "VS.",
                away_team: "U6",
                field: "Location: Greenbay",
                time: "1:00PM"
            },
            {
                date: "",
                home_team: "",
                away_team: "",
                field: "",
                time: ""
            },
            {
                date: "06/10/2019",
                home_team: "U1",
                vs: "VS.",
                away_team: "U6",
                field: "Location: AJ Katzenmaier",
                time: "1:00PM"
            },
            {
                date: "08/10/2019",
                home_team: "U5",
                vs: "VS.",
                away_team: "U1",
                field: "Location: North",
                time: "1:00PM"
            },
            {
                date: "20/10/2019",
                home_team: "U2",
                vs: "VS.",
                away_team: "U4",
                field: "Location: Greenbay",
                time: "1:00PM"
            },
            {
                date: "27/10/2019",
                home_team: "U5",
                vs: "VS.",
                away_team: "U6",
                field: "Location: North",
                time: "1:00PM"
            }
        ],
        result: [{
                team: "U1",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            },
            {
                team: "U2",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            },
            {
                team: "U3",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            },
            {
                team: "U4",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            },
            {
                team: "U5",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            },
            {
                team: "U6",
                games_played: "",
                win: "",
                tie: "",
                loss: "",
                points: ""
            }
        ],
        location: [{
                field: 'AJ Katzenmaier',
                adress: '1829 Kennedy Dr, North Chicago, IL 60088, USA',
            },
            {
                field: 'Greenbay',
                adress: '2100 Green Bay Rd, North Chicago, IL 60064, USA'
            },
            {
                field: 'Howard A Yeager',
                adress: '1811 Morrow Ave, North Chicago, IL 60064, USA'
            },
            {
                field: 'Marjorie P Hart',
                adress: 'N Orchard St, Chicago, IL 60614, USA'
            },
            {
                field: 'North',
                adress: '1717 17th St, North Chicago, IL 60064, USA'
            },
            {
                field: 'South',
                adress: '8255 S Houston Ave, Chicago, IL 60617'
            }
        ],
        n: 0,
        j: 0,
    },
    created() {

    },
    methods: {

    },
    computed: {
        gameDayAM() {
            return this.schedule
        },
        gameDayPM() {
            return this.schedulePM
        }
    }
});