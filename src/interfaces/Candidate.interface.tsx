// TODO: Create an interface for the Candidate objects returned by the API
export default interface GithubUser {
    login: string ,
    avatar_url: string ,
    company: string | null,
    bio: string | null,
    name: string | null,
    location: string | null,
    email: string| null
}