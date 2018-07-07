interface ProfileState {
    id: string;
    username: string;
    email: string;
    fullName: string;
    permissions: string[];
    language: string;

    isLoggedIn: boolean;
    rememberMe: boolean;
    token: string;
}

export default ProfileState;
