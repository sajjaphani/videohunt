import { postNewVideo } from '../HomePage/actions'

export const addNewVideoPost = (post) => {
    console.log('This is the post',post)
    const newPost = {
        date: new Date().toDateString(),
        annotation: 'above date',
        posts: [post]
    }
    return postNewVideo(newPost)
} 