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

/* LoginContainer */

export const getAuth = (state) => {
    return state.auth.inAuth
}
export const getCaptcha = (state) => {
    return state.auth.captcha
}

/* MessageContainer */
export const getValueMessage = (state) => {
    return state.messagePage.textTest
}
export const getItemMessage = (state) => {
    return state.messagePage.people
}
export const getDialogsMessage = (state) => {
    return state.messagePage.dialogs
}

/* NavbarFriendsContainer */

export const getDatatFriends = (state) => {
    return state.navbarPage.friends
}
export const getTextFriends = (state) => {
    return state.navbarPage.texts
}

/* ProfileContainer */

export const getProfileValue = (state) => {
    return state.profilePage.textBeforePost
}
export const getProfileMessage = (state) => {
    return state.profilePage.message
}
export const getProfileData = (state) => {
    return state.profilePage.profileData
}
export const getProfileStatus = (state) => {
    return state.profilePage.status
}


