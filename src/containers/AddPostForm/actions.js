import * as ActionTypes from './constants';
import { push } from 'react-router-redux'
import videoApi from '../../api/videoApi';

export const addNewVideoPost = (post) => {
    const newPost = post
    newPost.comments = []
    newPost.likes = []
    // response should have postedOn as well
    newPost.postedOn = new Date().toISOString()
    // id should be retrieved from rest call
    newPost.id = new Date().toISOString()
    return postNewVideo(newPost)
} 

export function postNewVideo(newPost) {
    return {
            type: ActionTypes.ADD_NEW_VIDEO,
            payload: newPost
        }
        // dispatch(push('/'))
    
}
