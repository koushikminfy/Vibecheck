

---

###  `README.md`

```markdown
#  VibeCheck API



##  Features

- Bun instead of npm as npm is not working in my laptop 
- Express.js to serve HTTP endpoints

##  Sample Vibes Data (in `data/sampleVibes.js`)

```js
[
  {
    id: 1,
    mood: ' ',
    song: ' ',
    user: ' '
  },
]

like this i have taken , three 3 songs from 3 different mmovies
```


###  Start the server

```bash
bun server.js
```

> Server will start on port `5000` and display:
>
> ```
>  Server blasting off on port 5000
> ```

---

##  API Endpoints

### `GET /`

Returns a simple welcome message:

```
 Welcome to VibeCheck API – Check your vibe, share your tribe!
```
![1](https://github.com/user-attachments/assets/860cf6f8-cbf4-46e4-99b5-60a52b368d32)

---

### `GET /api/v1/vibes`

Returns a list of all sample vibes in JSON format:

```json
[
  {
    "id": 1,
    "mood": " ",
    "song": " ",
    "user": " "
  },
  ........... SO ON.. end of the list
]
```
![2](https://github.com/user-attachments/assets/c9657056-0b3d-4a91-9349-2e48c08f66c6)

---

### `GET /api/v1/vibes/:id`

Returns a single vibe matching the provided ID.

**Example:**

`GET /api/v1/vibes/2`

```json
{
  "id":  ,
  "mood": "_",
  "song": "_",
  "user": "_"
}
```
![3](https://github.com/user-attachments/assets/487d53b3-c14b-4ea8-8313-90bc7bb6c8cd)

If the ID is not found:

```json
{
  "success": false,
  "message": "That vibe is off the grid, not found."
}
```
![4](https://github.com/user-attachments/assets/952abfd3-d0cb-465a-b1b0-8aac24711ab9)

---

##  Testing with Postman 

Examples:

* `GET http://localhost:5000/`
* `GET http://localhost:5000/api/v1/vibes`
* `GET http://localhost:5000/api/v1/vibes/1`
* `GET http://localhost:5000/api/v1/vibes/99` (not found)

---

