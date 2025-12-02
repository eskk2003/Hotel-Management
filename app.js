require('dotenv').config();
const mongoose = require('mongoose');
const Room = require('./models/Room');
const Guest = require('./models/Guest');
const Booking = require('./models/Booking');

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  try {
    // ✔ Correct connection without old options
    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB for seeding');

    // Seed rooms
    const roomsCount = await Room.countDocuments();
    if (roomsCount === 0) {
      await Room.insertMany([
        { number: '101', type: 'single', price: 50, status: 'available' },
        { number: '102', type: 'double', price: 80, status: 'available' },
        { number: '201', type: 'suite', price: 150, status: 'available' },
      ]);
      console.log('Rooms seeded');
    }

    // Seed guests
    const guestsCount = await Guest.countDocuments();
    let guests = [];
    if (guestsCount === 0) {
      guests = await Guest.insertMany([
        { name: 'Alice Gomez', email: 'alice@example.com', phone: '09170000001' },
        { name: 'Bob Santos', email: 'bob@example.com', phone: '09170000002' },
      ]);
      console.log('Guests seeded');
    } else {
      guests = await Guest.find();
    }

    // Seed bookings
    const bookingsCount = await Booking.countDocuments();
    if (bookingsCount === 0) {
      const room101 = await Room.findOne({ number: '101' });
      if (room101) {
        await Booking.create({
          guestId: guests[0]._id,
          roomId: room101._id,
          checkIn: new Date(),
          checkOut: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          status: 'booked',
        });
        await Room.findByIdAndUpdate(room101._id, { status: 'occupied' });
        console.log('Booking created for Room 101');
      }
    }

    console.log('Seeding complete!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Seeding Error:', err);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seed();
