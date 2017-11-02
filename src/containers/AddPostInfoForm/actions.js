import * as ActionTypes from './constants';
import { push } from 'react-router-redux'
import videoApi from '../../api/VideoApi';

export const addNewVideoPost = (post) => {
    return {
        type: ActionTypes.ADD_NEW_VIDEO,
        payload: post
    }
} 

export function redirectToFirstPage() {
    return {
            type: ActionTypes.ADD_NEW_VIDEO_REDIRECT
        }    
}
