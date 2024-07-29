
  export async function up(db, client) {
    await db.createCollection('users');
    await db.collection('users').createIndex({ username: 1 }, { unique: true });
  }
  
  export async function down(db, client) {
    await db.collection('users').drop();
  }

