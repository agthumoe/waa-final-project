INSERT INTO users (created_at, created_by, last_modified_at, last_modified_by, name, email, password) VALUES
(now(), 'anonymousUser', now(), 'anonymousUser', 'Alice', 'alice@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'anonymousUser', now(),'anonymousUser',  'Berry', 'berry@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'anonymousUser', now(),'anonymousUser',  'Clark', 'clark@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'anonymousUser', now(),'anonymousUser',  'Diana', 'diana@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'anonymousUser', now(),'anonymousUser',  'Elliot', 'elliot@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq');

INSERT INTO roles (name) VALUES
( 'ROLE_ADMIN'),
( 'ROLE_BUYER'),
('ROLE_SELLER');

INSERT INTO users_roles (users_id, roles_id) VALUES
(1, 1), (1, 2),
(2, 2),
(3, 1), (3, 2),
(4, 1),
(5, 2);