## BASE URL = https://hotel-management-3-u1lv.onrender.com

# 🏨 Hotel Management API

## 📌 API Endpoints
## Rooms
| Method | Path             | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/rooms`     | List all rooms      |
| POST   | `/api/rooms`     | Create a new room   |
| GET    | `/api/rooms/:id` | Get a specific room |
| PUT    | `/api/rooms/:id` | Update a room       |
| DELETE | `/api/rooms/:id` | Delete a room       |

## Guests
| Method | Path              | Description          |
| ------ | ----------------- | -------------------- |
| GET    | `/api/guests`     | List all guests      |
| POST   | `/api/guests`     | Create a new guest   |
| GET    | `/api/guests/:id` | Get a specific guest |
| PUT    | `/api/guests/:id` | Update a guest       |
| DELETE | `/api/guests/:id` | Delete a guest       |

## Bookings
| Method | Path                | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/api/bookings`     | List all bookings      |
| POST   | `/api/bookings`     | Create a new booking   |
| GET    | `/api/bookings/:id` | Get a specific booking |
| PUT    | `/api/bookings/:id` | Update a booking       |
| DELETE | `/api/bookings/:id` | Delete a booking       |

# 🔑 Environment Variables
| Key         | Description                                |
| ----------- | ------------------------------------------ |
| `MONGO_URI` | MongoDB Atlas connection string            |
| `PORT`      | Port number for the server (default: 5000) |

