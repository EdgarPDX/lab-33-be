DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    journal_date TEXT NOT NULL,
    grateful_entry TEXT NOT NULL,
    favorite_entry TEXT NOT NULL,
    stress_rating INT NOT NULL,
    stress_description TEXT NOT NULL,
    stress_management TEXT NOT NULL
)