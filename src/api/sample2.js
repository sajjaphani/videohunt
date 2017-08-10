const samplejson = {
    "data": {
        "feed": {
            "2017-07-27T06:30:00.000Z": [
                "5979815a37552e2b24679d8c",
                "5979819137552e2b24679d8d"
            ],
            "2017-07-26T06:30:00.000Z": [
                "597844acc8cb59186c256853",
                "597844eec8cb59186c256854"
            ],
            "2017-07-25T06:30:00.000Z": [
                "59784446c8cb59186c256852",
                "59784515c8cb59186c256855"
            ]
        },
        "posts": {
            "59784446c8cb59186c256852": {
                "title": "DUNKIRK - OFFICIAL MAIN TRAILER [HD]",
                "subtitle": " Warner Bros. Pictures",
                "url": "https://www.youtube.com/watch?v=T7O7BtBnsG4",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-25T06:52:07.859Z",
                "likes": [],
                "comments": ['comment1', 'comment2', 'comment3'],
                "id": "59784446c8cb59186c256852"
            },
            "597844acc8cb59186c256853": {
                "title": "MR. Productions 'Shaadi' Short Film 2017 ",
                "subtitle": "Subash Chandra",
                "url": "https://www.youtube.com/watch?v=IN1jSU267ZA",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-26T06:52:07.859Z",
                "likes": [],
                "comments": [],
                "id": "597844acc8cb59186c256853"
            },
            "597844eec8cb59186c256854": {
                "title": "Pelli Pusthakam Short Film ",
                "subtitle": "mr productions",
                "url": "https://www.youtube.com/watch?v=roRVv4Rrj6M",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-26T07:52:07.859Z",
                "likes": [],
                "comments": [],
                "id": "597844eec8cb59186c256854"
            },
            "59784515c8cb59186c256855": {
                "title": "Naathicharaami | Telugu short film ",
                "subtitle": "Klapboard Productions",
                "url": "https://www.youtube.com/watch?v=6RLMDBZ3ZPY",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-25T07:52:07.859Z",
                "likes": [],
                "comments": [],
                "id": "59784515c8cb59186c256855"
            },
            "5979815a37552e2b24679d8c": {
                "title": "Vachinde Song With Lyrics | Fidaa Songs ",
                "subtitle": "Aditya Music",
                "url": "https://www.youtube.com/watch?v=z3ZNX_2gPD8",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-27T05:52:07.859Z",
                "likes": [],
                "comments": [
                    'comment4', 'comment5', 'comment6'
                ],
                "id": "5979815a37552e2b24679d8c"
            },
            "5979819137552e2b24679d8d": {
                "title": " Natyam Latest Short Film 2016 - Sandhya Raju ",
                "subtitle": "Natyam",
                "url": "https://www.youtube.com/watch?v=5gtSFseugFo",
                "userId": "595f3e5365ac7f15c7a92b9c",
                "postedOn": "2017-07-27T06:52:07.859Z",
                "likes": [],
                "comments": [],
                "id": "5979819137552e2b24679d8d"
            }
        },
        "users": {
            "595f3e5365ac7f15c7a92b9c": {
                "id": "595f3e5365ac7f15c7a92b9c",
                "name": "Phani Sajja",
                "headline": "Some Headline...",
                "email": "sajja.phani@gmail.com",
                "memberSince": "2017-07-07T07:54:59.864Z"
            },
            "595f459865ac7f15c7a92b9d": {
                "id": "595f459865ac7f15c7a92b9d",
                "name": "Nischal Srinivas",
                "headline": "Some Headline...",
                "email": "nischal.srinivas@gmail.com",
                "memberSince": "2017-07-07T08:26:00.723Z",
                "picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/19059568_10212456734831929_5171602577296152885_n.jpg?oh=bf54ffa8c51dd22687020ae061a151d8&oe=59F4FF15"
            },
            "595f45b565ac7f15c7a92b9e": {
                "id": "595f45b565ac7f15c7a92b9e",
                "name": "Kiran Kumar",
                "headline": "Some Headline...",
                "email": "kirankumar.iiit@gmail.com",
                "memberSince": "2017-07-07T08:26:29.090Z"
            }
        },
        "comments": {
            "comment1": {
                "id": "comment1",
                "text": "This is a sample comment1",
                "userId": "595f459865ac7f15c7a92b9d"
            },
            "comment2": {
                "id": "comment2",
                "text": "This is another comment2",
                "userId": "595f3e5365ac7f15c7a92b9c"
            },
            "comment3": {
                "id": "comment3",
                "text": "This is a sample comment3",
                "userId": "595f45b565ac7f15c7a92b9e"
            },
            "comment4": {
                "id": "comment4",
                "text": "This is another comment4",
                "userId": "595f459865ac7f15c7a92b9d"
            },
            "comment5": {
                "id": "comment5",
                "text": "This is a sample comment5",
                "userId": "595f45b565ac7f15c7a92b9e"
            },
            "comment6": {
                "id": "comment6",
                "text": "This is another comment6",
                "userId": "595f459865ac7f15c7a92b9d"
            }
        }
    },
    "pagination": {
        "next": "http://localhost:3000/api/v1/posts?limit=3&until=1500877800000"
    }
}

export default samplejson