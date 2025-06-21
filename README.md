

---

###  `README.md`

```markdown
#  VibeCheck API



##  Features

- Bun instead of npm as npm is not working in my laptop 
- Express.js to serve HTTP endpoints


### 2. Start the server

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
]
```

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

If the ID is not found:

```json
{
  "success": false,
  "message": "That vibe is off the grid, not found."
}
```

---

##  Testing with Postman 

Examples:

* `GET http://localhost:5000/`
* `GET http://localhost:5000/api/v1/vibes`
* `GET http://localhost:5000/api/v1/vibes/1`
* `GET http://localhost:5000/api/v1/vibes/99` (not found)

---

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
```

---

##  Completion Checklist

* [x] Project structure in place
* [x] Server responds on port 5000
* [x] Root endpoint returns welcome message
* [x] `GET /api/v1/vibes` returns all vibes
* [x] `GET /api/v1/vibes/:id` returns single vibe or 404

---

