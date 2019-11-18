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
                games_played: 3,
                win: 2,
                tie: 1,
                loss: 0,
                points: 7
            },
            {
                team: "U2",
                games_played: 3,
                win: 1,
                tie: 0,
                loss: 2,
                points: 3
            },
            {
                team: "U3",
                games_played: 3,
                win: 0,
                tie: 1,
                loss: 2,
                points: 1
            },
            {
                team: "U4",
                games_played: 3,
                win: 2,
                tie: 0,
                loss: 1,
                points: 6
            },
            {
                team: "U5",
                games_played: 2,
                win: 1,
                tie: 0,
                loss: 1,
                points: 3
            },
            {
                team: "U6",
                games_played: 2,
                win: 0,
                tie: 2,
                loss: 0,
                points: 2
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
        message: "",
        messages: [],
        loginStatus: false
    },
    created() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.

                app.getPosts();
                console.log("user logged in")
                loginStatus = true;

            } else {
                // No user is signed in.
                console.log("user logged out")
                loginStatus = false;
            }
        });
    },

    methods: {
        saveMessage() {

            // https://firebase.google.com/docs/database/web/read-and-write

            // Values
            var text = this.message;
            var userName = firebase.auth().currentUser.displayName;
            var email = firebase.auth().currentUser.email;


            // A post entry

            var post = {
                name: userName,
                body: text,
                email: email
            };

            // Get a key for a new Post.
            var newPostKey = firebase.database().ref().child('chat').push().key;

            //Write data
            var updates = {};
            updates[newPostKey] = post;
            this.message = "";
            setTimeout(this.scrollToEnd, 5);
            return firebase.database().ref('chat').update(updates);
        },

        getPosts() {

            firebase.database().ref('chat').on('value', function (data) {
                app.messages = data.val(); //messages inside  the database
            })
            setTimeout(this.scrollToEnd, 2000);
        },
        login() {

            // https://firebase.google.com/docs/auth/web/google-signin

            // Provider
            var provider = new firebase.auth.GoogleAuthProvider();

            // How to Log In
            firebase.auth().signInWithPopup(provider);
            loginStatus = true
            setTimeout(this.scrollToEnd, 2000);
            console.log("login");
        },
        logout() {
            firebase.auth().signOut();
            loginStatus = false
            console.log("logout")
        },
        scrollToEnd() {
            var container = document.querySelector(".scroll");
            var scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        }
    },
    mounted() {
        this.scrollToEnd();
    },
    computed: {
        gameDayAM() {
            return this.schedule
        },
        gameDayPM() {
            return this.schedulePM
        },
        sortResult() {
            return this.result.sort(function (b, a) {
                return a.points - b.points;
            });
        }
    }
});