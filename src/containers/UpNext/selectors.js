import { createSelector } from 'reselect'

const getUpNext = (state) => (state.upNext)

export const getIsLoading = createSelector([getUpNext], (upNext) => (upNext.get('loading')))

export const getPosts = createSelector([getUpNext], (upNext) => (upNext.get('posts').toJS()))

export const getInitialized = createSelector([getUpNext], (upNext) => (upNext.get('postId') !== null))
