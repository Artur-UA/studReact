/* UsersContainer */

export const getInfo = (state) => {
    return state.usersPage.dataFriend
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export const getUsersInPage = (state) => {
    return state.usersPage.usersInPage
}

export const getNumberPage = (state) => {
    return state.usersPage.numberPage
}

export const getIsPreloader = (state) => {
    return state.usersPage.isPreloader
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}


/* HeaderContainer */

export const getId= (state) => {
    return state.auth.id
}
export const getLogin = (state) => {
    return state.auth.login
}
export const getEmail = (state) => {
    return state.auth.email
}