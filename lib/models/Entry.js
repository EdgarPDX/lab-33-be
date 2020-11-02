const pool = require('../utils/pool');

module.exports = class Entry {
    id;
    date;
    gratefulEntry;
    favoriteEntry;
    stressRating;
    stressDescription;
    stressManagement;

    constructor(row) {
      this.id = row.id;
      this.journalDate = row.journal_date;
      this.gratefulEntry = row.grateful_entry;
      this.favoriteEntry = row.favorite_entry;
      this.stressRating = row.stress_rating;
      this.stressDescription = row.stress_description;
      this.stressManagement = row.stress_management;
    }

    static async insert(entry) {
      const { rows } = await pool.query(
        'INSERT INTO entries (journal_date, grateful_entry, favorite_entry, stress_rating, stress_description, stress_management) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        [entry.journalDate, entry.gratefulEntry, entry.favoriteEntry, entry.stressRating, entry.stressDescription, entry.stressManagement]
      );

      return new Entry(rows[0]);
    }

};
