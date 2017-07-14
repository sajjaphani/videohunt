import { postNewVideo } from '../Feed/actions'

export const addNewVideoPost = (post) => {
    console.log('This is the post',post)
    const newPost = post
    newPost.comments = []
    newPost.likes = []
    newPost.postedOn = new Date()
    newPost.id = new Date().toString()
    return postNewVideo(newPost)
} 

// {
// 		"title": "Nanna Nenu Phone Calls - Things Dads Say || Mahathalli",
// 		"subtitle": "Mahathalli",
// 		"url": "https://www.youtube.com/watch?v=eD1vDVo1Sgc",
// 		"userId": "595f3e5365ac7f15c7a92b9c",
// 		"_id": "5967232100766321e4ca0c82"
// 	}