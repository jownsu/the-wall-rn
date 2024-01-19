export const DUMMY_POSTS = [
    {
        id: 1,
        user_id: 99,
        user: "Jhones Digno",
        created_at: "2023-12-10T12:00:00Z",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comments: [
            {
                id: 1,
                user_id: 99,
                user: "Jhones Digno",
                created_at: "2023-12-10T12:00:00Z",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                id: 2,
                user_id: 41,
                user: "Muman Reyes",
                created_at: "2023-12-10T12:00:00Z",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    }
];

export const DUMMY_USERS = [
    {
        id: 99,
        email: "test@gmail.com",
        name: "Test User",
        password: "aaaaaaaa"
    }
];