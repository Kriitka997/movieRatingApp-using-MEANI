exports.message = {
    notVerify: { status: 400, message: "User not found with this email address please enter a valid email.." },
    required: { status: 400, message: "fields are required.." },
    email: { status: 400, message: "email is not valid" },
    password: { status: 400, message: "password is not valid it should contains '@#$125 Az Za' length should be minimum 8 or maximum 12 " },
    notSame: { status: 400, message: "password and confirm password are not same" },
    token: { status: 400, message: "token not created yet" },
    confirmPass: { status: 400, message: "confirm password is required" },
    hassPass: { status: 400, message: "confirm password is required" },
    desc: { status: 400, message: "description should be grater than 10 or less than 100 words" },
    notFound: { status: 400, message: "user not founded with this ID" },
    add: { status: 400, message: "movie not added now try again.." },
    movie: { status: 400, message: "not finding movie with this ID" },
    deleteMovie: { status: 400, message: "delete movie not done" },
    admin: { status: 400, message: "Only movie admin can perform this operation" },
    login: { status: 400, message: "you need to login first" },
    update: { status: 400, message: "movie not updated " },
    list: { status: 400, message: "movie not founded by this id " },
    rated: { status: 400, message: "You have already rate this movie" },
    emailExit: { status: 400, message: "User is already exits with this email address" },
    chnagePass: { status: 400, message: "Password has not changged" },
    length: {
        status: 400, message: "password length should be minimum 8 or maximum 12"
    },
    wrong: {
        status: 400, message: "password is not valid please enter a valid password"
    },
    story: { status: 400, message: "Story line limit should be 200 words" },
    
}