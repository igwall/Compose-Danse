import { defaultFetchedUserState } from '../store'

export default (state = defaultFetchedUserState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PROFILE_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_USER_PROFILE_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: Object.assign(action.payload, {realisations: []}) // Trick not to have an error about realisations undefined on profile page
      }
    }
    case 'FETCH_USER_PROFILE_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'UPDATE_USER_PROFILE_PAGE': {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          username: action.payload.username,
          picture: action.payload.picture,
          bio: action.payload.bio
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
