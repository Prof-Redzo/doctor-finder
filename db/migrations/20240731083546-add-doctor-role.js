import bcrypt from 'bcrypt';

export async function up(db, client) {
  const hashedPassword = await bcrypt.hash('12345678', 10);
  await db.collection('users').insertOne({
    username: "Bob-doctor",
    password: hashedPassword,
    role: 'doctor',
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

export async function down(db, client) {
  await db.collection('users').deleteOne({ username: 'Bob-doctor' });
}