Twitter Hack project!

1. Seeds: create 100 user with 100 tweets per user and 100 comments per tweet

2. Create user:
    GET /users/new
    POST /users

3. Login
    GET /login
    POST /login
    
4. Home
    GET / -> show all tweets

5. Create Tweet
    POST /teeets

6. Logout
    POST /logout

7. Profile
    GET /:username -> user tweets

8. Search
    GET /?search=blablabla

9. Tweet detail
    GET /tweets/:id -> show tweet and comments

10. Like tweet using ajax
    POST /tweets/:id/like
