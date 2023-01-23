import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";

const state =  {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you',
            likesCount: 12,
            title: "https://bipbap.ru/wp-content/uploads/2020/11/kartinki-koshek_30.jpg"
        },
        {
            id: 2,
            message: 'It is my first post',
            likesCount: 11,
            title: "https://printovo.ru/10735-large_default/kot-sajmona.jpg"
        },
        {
            id: 3,
            message: 'It is my second post',
            likesCount: 11,
            title: "https://images.ua.prom.st/441474411_w640_h640_vinilovaya-naklejka-sajmon.jpg"
        }
    ]
}

test('new post should be added', () => {
    let action = addPostActionCreator('Svetik');

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

test('message should be correct', () => {
    let action = addPostActionCreator('Svetik');

    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('Svetik')
})

test('message should be deleted', () => {
    let action = deletePostActionCreator(1);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

test('id incorrect', () => {
    let action = deletePostActionCreator(1000);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})