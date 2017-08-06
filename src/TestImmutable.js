import { fromJS } from 'immutable'

import sampleJson from './sample'

const feed = fromJS(sampleJson.feed)

console.log('Feed content', feed.keySeq().toArray())



const newPost = {
    "title": "Nanna Nenu Phone Calls - Things Dads Say || Mahathalli",
    "subtitle": "Mahathalli",
    "url": "https://www.youtube.com/watch?v=eD1vDVo1Sgc",
    "userId": "595f3e5365ac7f15c7a92b9c",
    "postedOn": "2017-07-13T07:37:05.658Z",
    "id": "5967232100766321e4ca0333"
}

const postDate = new Date().toDateString()

const feedEntry = feed.get(postDate)

let newFeedState

if (feedEntry) {
    newFeedState = feed.update(postDate, list => list.push(newPost.id))
} else {
    newFeedState = feed.set(postDate, [newPost.id])
}


console.log('New feed state', newFeedState.toJS())


console.log('###############################')

const date = new Date()
console.log(date.toDateString())

console.log('###############################')

const date2 = new Date("Thu Jul 13 2017")

console.log(date2.toISOString())
console.log('################################')

import moment from 'moment'
const dateString = moment('2017-08-05T06:30:00.000Z').calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
});
console.log('This is today ', dateString)
console.log('This is current time ',moment('2017-08-05T06:30:00.000Z').format('ll'))