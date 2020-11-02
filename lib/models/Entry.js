const pool = require('../utils/pool');

module.exports = class Entry {
    id;
    date;
    gratefulFor;
    favoritePart;
    stressRating;
    stressDescription;
    stressManagement;
    procrastinationRating;
    procrastinationReasoning;
    procrastinationManagement;

    constructor(row) {
      this.id = row.id;
      this.journalDate = row.journal_date;
      this.gratefulFor = row.grateful_for;
      this.favoritePart = row.favorite_part;
      this.stressRating = row.stress_rating;
      this.stressDescription = row.stress_description;
      this.stressManagement = row.stress_management;
      this.procrastinationRating = row.procrastination_rating;
      this.procrastinationReasoning = row.procrastination_reasoning;
      this.procrastinationManagement = row.procrastination_management;
    }

    static async insert(entry) {
      const { rows } = await pool.query(
        'INSERT INTO entries (journal_date, grateful_for, favorite_part, stress_rating, stress_description, stress_management, procrastination_rating, procrastination_reasoning, procrastination_management) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [entry.journalDate, entry.gratefulFor, entry.favoritePart, entry.stressRating, entry.stressDescription, entry.stressManagement, entry.procrastinationRating, entry.procrastinationReasoning, entry.procrastinationManagement]
      );

      return new Entry(rows[0]);
    }

};
