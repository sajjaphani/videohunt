import { ADD_SUBSCRIPTION } from './constants'

export const addSubscription = (data) => {
    return {
        type: ADD_SUBSCRIPTION,
        data: data
    }
}
