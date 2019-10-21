const app = new Vue({
    el: '#app',
    data: {
        schedule: [{
                date: "01/9",
                home_team: "U1",
                away_team: "U4",
                field: "AJ Katzenmaier",
                time: "9:30AM"
            },
            {
                date: "01/9",
                home_team: "U3",
                away_team: "U2",
                field: "Howard A Yeager",
                time: "1:00PM"
            },
            {
                date: "08/9",
                home_team: "U5",
                away_team: "U6",
                field: "North",
                time: "9:30AM"
            },
            {
                date: "08/9",
                home_team: "U6",
                away_team: "U1",
                field: "South",
                time: "1:00PM"
            },
            {
                date: "15/9",
                home_team: "U2",
                away_team: "U4",
                field: "Greenbay",
                time: "9:30AM"
            },
            {
                date: "15/9",
                home_team: "U3",
                away_team: "U5",
                field: "Howard A Yeager",
                time: "1:00PM"
            },
            {
                date: "22/9",
                home_team: "U1",
                away_team: "U3",
                field: "AJ Katzenmaier",
                time: "9:30AM"
            },
            {
                date: "22/9",
                home_team: "U2",
                away_team: "U6",
                field: "Greenbay",
                time: "1:00PM"
            },
            {
                date: "29/9",
                home_team: "U4",
                away_team: "U5",
                field: "Marjorie P Hart",
                time: "9:30AM"
            },
            {
                date: "06/10",
                home_team: "U2",
                away_team: "U5",
                field: "Greenbay",
                time: "9:30AM"
            },
            {
                date: "06/10",
                home_team: "U1",
                away_team: "U6",
                field: "AJ Katzenmaier",
                time: "1:00PM"
            },
            {
                date: "08/10",
                home_team: "U3",
                away_team: "U4",
                field: "Howard A Yeager",
                time: "9:30AM"
            },
            {
                date: "08/10",
                home_team: "U5",
                away_team: "U1",
                field: "North",
                time: "1:00PM"
            },
            {
                date: "20/10",
                home_team: "U6",
                away_team: "U3",
                field: "South",
                time: "9:30AM"
            },
            {
                date: "20/10",
                home_team: "U2",
                away_team: "U4",
                field: "Greenbay",
                time: "1:00PM"
            },
            {
                date: "27/10",
                home_team: "U3",
                away_team: "U1",
                field: "Howard A Yeager",
                time: "9:30AM"
            },
            {
                date: "27/10",
                home_team: "U5",
                away_team: "U6",
                field: "North",
                time: "1:00PM"
            }
        ]
    },
    created() {

    },
    methods: {

    },
    computed: {
        gameDayAM() {
            return this.schedule[0]
        },
        gameDayPM() {
            return this.schedule[1]
        }
    }
});


// new Date().toLocaleString()

// teams: [{
//     team: "U1",
//     home_field: "AJ Katzenmaier",
//     id: "111",
//     logo: ""
// },
// {
//     team: "U2",
//     home_field: "Greenbay",
//     id: "222",
//     logo: ""
// },
// {
//     team: "U3",
//     home_field: "Howard A Yeager",
//     id: "333",
//     logo: ""
// },
// {
//     team: "U4",
//     home_field: "Marjorie P Hart",
//     id: "444",
//     logo: ""
// },
// {
//     team: "U5",
//     home_field: "North",
//     id: "555",
//     logo: ""
// },
// {
//     team: "U6",
//     home_field: "South",
//     id: "666",
//     logo: ""
// }
// ],