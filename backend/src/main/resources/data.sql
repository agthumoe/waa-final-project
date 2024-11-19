INSERT INTO users (created_at, last_modified_at, name, email, password) VALUES
(now(), now(), 'Alice', 'alice@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), now(), 'Berry', 'berry@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), now(), 'Clark', 'clark@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), now(), 'Diana', 'diana@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), now(), 'Elliot', 'elliot@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq');

INSERT INTO authorities (created_at, name) VALUES
(now(), 'ADMIN'),
(now(), 'BUYER'),
(now(), 'SELLER');

INSERT INTO users_authorities (users_id, authorities_id) VALUES
(1, 1), (1, 2),
(2, 2),
(3, 1), (3, 2),
(4, 1),
(5, 2);