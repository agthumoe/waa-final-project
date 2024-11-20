INSERT INTO users (created_at, created_by, last_modified_at, last_modified_by, name, email, password) VALUES
(now(), 'system', now(), 'system', 'Alice', 'alice@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'system', now(),'system',  'Berry', 'berry@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'system', now(),'system',  'Clark', 'clark@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'system', now(),'system',  'Diana', 'diana@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq'),
(now(), 'system', now(),'system',  'Elliot', 'elliot@gmail.com', '$2a$10$kbAybEmK.q0H4AyDy/.PouLUK4owgIFIc.Wts0oAV4YSBrc41pAWq');

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

-- Insert sample data into brands
INSERT INTO brands (name, created_at, last_modified_at, created_by, last_modified_by) VALUES
('Nike', NOW(), NOW(), 'system', 'system'),
('Adidas', NOW(), NOW(), 'system', 'system'),
('Puma', NOW(), NOW(), 'system', 'system'),
('Under Armour', NOW(), NOW(), 'system', 'system'),
('Reebok', NOW(), NOW(), 'system', 'system'),
('New Balance', NOW(), NOW(), 'system', 'system'),
('Asics', NOW(), NOW(), 'system', 'system'),
('Converse', NOW(), NOW(), 'system', 'system'),
('Vans', NOW(), NOW(), 'system', 'system'),
('Sketchers', NOW(), NOW(), 'system', 'system'),
('Fila', NOW(), NOW(), 'system', 'system'),
('Hoka One One', NOW(), NOW(), 'system', 'system'),
('Brooks', NOW(), NOW(), 'system', 'system'),
('Saucony', NOW(), NOW(), 'system', 'system'),
('Mizuno', NOW(), NOW(), 'system', 'system'),
('Salomon', NOW(), NOW(), 'system', 'system'),
('Merrell', NOW(), NOW(), 'system', 'system'),
('La Sportiva', NOW(), NOW(), 'system', 'system'),
('Timberland', NOW(), NOW(), 'system', 'system'),
('Columbia', NOW(), NOW(), 'system', 'system');

-- Insert sample data into categories
INSERT INTO categories (name, created_at, last_modified_at, created_by, last_modified_by) VALUES
('Electronics', NOW(), NOW(), 'system', 'system'),
('Fashion', NOW(), NOW(), 'system', 'system'),
('Home Appliances', NOW(), NOW(), 'system', 'system'),
('Sports', NOW(), NOW(), 'system', 'system'),
('Books', NOW(), NOW(), 'system', 'system'),
('Toys', NOW(), NOW(), 'system', 'system'),
('Beauty & Personal Care', NOW(), NOW(), 'system', 'system'),
('Groceries', NOW(), NOW(), 'system', 'system'),
('Automotive', NOW(), NOW(), 'system', 'system'),
('Furniture', NOW(), NOW(), 'system', 'system'),
('Garden & Outdoors', NOW(), NOW(), 'system', 'system'),
('Health & Wellness', NOW(), NOW(), 'system', 'system'),
('Jewelry', NOW(), NOW(), 'system', 'system'),
('Stationery', NOW(), NOW(), 'system', 'system'),
('Musical Instruments', NOW(), NOW(), 'system', 'system'),
('Pet Supplies', NOW(), NOW(), 'system', 'system'),
('Baby Products', NOW(), NOW(), 'system', 'system'),
('Video Games', NOW(), NOW(), 'system', 'system'),
('Office Supplies', NOW(), NOW(), 'system', 'system'),
('Travel Accessories', NOW(), NOW(), 'system', 'system');

-- Insert sample data into sub_categories
INSERT INTO sub_categories (name, category_id, created_at, last_modified_at, created_by, last_modified_by) VALUES
('Smartphones', 1, NOW(), NOW(), 'system', 'system'),
('Laptops', 1, NOW(), NOW(), 'system', 'system'),
('Mens Clothing', 2, NOW(), NOW(), 'system', 'system'),
('Womens Clothing', 2, NOW(), NOW(), 'system', 'system'),
('Kitchen Appliances', 3, NOW(), NOW(), 'system', 'system'),
('Refrigerators', 3, NOW(), NOW(), 'system', 'system'),
('Outdoor Sports', 4, NOW(), NOW(), 'system', 'system'),
('Indoor Sports', 4, NOW(), NOW(), 'system', 'system'),
('Fiction', 5, NOW(), NOW(), 'system', 'system'),
('Non-Fiction', 5, NOW(), NOW(), 'system', 'system'),
('Action Figures', 6, NOW(), NOW(), 'system', 'system'),
('Board Games', 6, NOW(), NOW(), 'system', 'system'),
('Makeup', 7, NOW(), NOW(), 'system', 'system'),
('Skincare', 7, NOW(), NOW(), 'system', 'system'),
('Snacks', 8, NOW(), NOW(), 'system', 'system'),
('Beverages', 8, NOW(), NOW(), 'system', 'system'),
('Car Accessories', 9, NOW(), NOW(), 'system', 'system'),
('Motorcycle Accessories', 9, NOW(), NOW(), 'system', 'system'),
('Sofas', 10, NOW(), NOW(), 'system', 'system'),
('Beds', 10, NOW(), NOW(), 'system', 'system'),
('Tablets', 1, NOW(), NOW(), 'system', 'system'),
('Wearables', 1, NOW(), NOW(), 'system', 'system'),
('Footwear - Men', 2, NOW(), NOW(), 'system', 'system'),
('Footwear - Women', 2, NOW(), NOW(), 'system', 'system'),
('Washing Machines', 3, NOW(), NOW(), 'system', 'system'),
('Microwaves', 3, NOW(), NOW(), 'system', 'system'),
('Camping Gear', 4, NOW(), NOW(), 'system', 'system'),
('Cycling', 4, NOW(), NOW(), 'system', 'system'),
('Science Fiction', 5, NOW(), NOW(), 'system', 'system'),
('Self-Help', 5, NOW(), NOW(), 'system', 'system'),
('Dolls', 6, NOW(), NOW(), 'system', 'system'),
('Puzzles', 6, NOW(), NOW(), 'system', 'system'),
('Haircare', 7, NOW(), NOW(), 'system', 'system'),
('Fragrances', 7, NOW(), NOW(), 'system', 'system'),
('Dairy Products', 8, NOW(), NOW(), 'system', 'system'),
('Canned Goods', 8, NOW(), NOW(), 'system', 'system'),
('Tires', 9, NOW(), NOW(), 'system', 'system'),
('Engine Oil', 9, NOW(), NOW(), 'system', 'system'),
('Dining Tables', 10, NOW(), NOW(), 'system', 'system'),
('Wardrobes', 10, NOW(), NOW(), 'system', 'system');

-- Insert sample data into the meta table
INSERT INTO metas (name, type, created_at, last_modified_at, created_by, last_modified_by) VALUES
-- GENDER
('Male', 'GENDER', NOW(), NOW(), 'system', 'system'),
('Female', 'GENDER', NOW(), NOW(), 'system', 'system'),
('Non-Binary', 'GENDER', NOW(), NOW(), 'system', 'system'),
('Unspecified', 'GENDER', NOW(), NOW(), 'system', 'system'),

-- AGE_GROUP
('Kids', 'AGE_GROUP', NOW(), NOW(), 'system', 'system'),
('Teens', 'AGE_GROUP', NOW(), NOW(), 'system', 'system'),
('Adults', 'AGE_GROUP', NOW(), NOW(), 'system', 'system'),
('Seniors', 'AGE_GROUP', NOW(), NOW(), 'system', 'system'),

-- USAGE
('Casual Wear', 'USAGE', NOW(), NOW(), 'system', 'system'),
('Formal Wear', 'USAGE', NOW(), NOW(), 'system', 'system'),
('Outdoor Gear', 'USAGE', NOW(), NOW(), 'system', 'system'),
('Workwear', 'USAGE', NOW(), NOW(), 'system', 'system'),
('Sportswear', 'USAGE', NOW(), NOW(), 'system', 'system'),
('Loungewear', 'USAGE', NOW(), NOW(), 'system', 'system'),

-- OCCASION
('Wedding', 'OCCASION', NOW(), NOW(), 'system', 'system'),
('Party', 'OCCASION', NOW(), NOW(), 'system', 'system'),
('Holiday', 'OCCASION', NOW(), NOW(), 'system', 'system'),
('Business Meeting', 'OCCASION', NOW(), NOW(), 'system', 'system'),
('Birthday', 'OCCASION', NOW(), NOW(), 'system', 'system'),
('Anniversary', 'OCCASION', NOW(), NOW(), 'system', 'system');

INSERT INTO products (name, description, base_price, brand_id, sub_category_id, created_at, last_modified_at, created_by, last_modified_by) VALUES
-- Clothing
('Premium Cotton T-Shirt', 'Soft and breathable cotton t-shirt for everyday use', 25.99, 1, 1, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Slim Fit Formal Shirt', 'Smart formal shirt suitable for office wear', 45.99, 2, 2, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Evening Gown', 'Elegant evening gown perfect for parties', 120.00, 3, 3, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Accessories
('Leather Wallet', 'Compact and stylish wallet made from genuine leather', 30.50, 4, 4, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Sun Hat', 'Lightweight and comfortable hat for sunny days', 15.00, 5, 5, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Crystal Pendant Necklace', 'Exquisite necklace with a crystal pendant', 75.99, 6, 6, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Footwear
('Casual Sneakers', 'Trendy sneakers perfect for casual outings', 55.00, 7, 7, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Oxford Formal Shoes', 'Elegant leather shoes for formal occasions', 85.00, 8, 8, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Beach Sandals', 'Durable and comfortable sandals for the beach', 20.00, 9, 9, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Outdoor Gear
('Waterproof Jacket', 'Lightweight and waterproof jacket for hiking', 100.00, 10, 10, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Polarized Sunglasses', 'Stylish and protective sunglasses for outdoor activities', 60.00, 11, 11, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Travel Backpack', 'Spacious and durable backpack for traveling', 80.00, 12, 12, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Kids Wear
('Kids Graphic T-Shirt', 'Fun and colorful t-shirt for kids', 18.99, 13, 13, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Kids Sports Shoes', 'Comfortable and durable shoes for kids', 35.00, 14, 14, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Additional Clothing Products
('Classic Polo Shirt', 'Timeless polo shirt made with premium fabric', 30.00, 1, 1, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Cotton Casual Shirt', 'Relaxed fit shirt for weekend outings', 40.00, 2, 2, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Cocktail Dress', 'Chic cocktail dress ideal for semi-formal events', 150.00, 3, 3, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Additional Accessories
('Leather Belt', 'Adjustable belt made from premium leather', 25.00, 4, 4, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Sports Cap', 'Breathable cap suitable for outdoor activities', 12.00, 5, 5, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Gold Hoop Earrings', 'Minimalist gold-plated hoop earrings', 55.00, 6, 6, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Additional Footwear
('High-Top Sneakers', 'Bold sneakers with a high-top design', 70.00, 7, 7, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Derby Leather Shoes', 'Classic derby shoes for professional wear', 95.00, 8, 8, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Summer Flip-Flops', 'Light and easy flip-flops for summer', 15.00, 9, 9, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Additional Outdoor Gear
('Windbreaker Jacket', 'Lightweight windbreaker for windy conditions', 90.00, 10, 10, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Hiking Sunglasses', 'Rugged sunglasses for outdoor adventures', 65.00, 11, 11, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Daypack Backpack', 'Compact backpack for daily use', 50.00, 12, 12, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),

-- Additional Kids Wear
('Kids Hoodie', 'Soft hoodie to keep kids warm', 25.00, 13, 13, NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
('Kids Running Shoes', 'Light and flexible shoes for active kids', 40.00, 14, 14, NOW(), NOW(), 'anonymousUser', 'anonymousUser');

INSERT INTO variants (product_id, sku, type, size, color, material, stock, price, fixed, percentage, model, description, created_at, last_modified_at, created_by, last_modified_by) VALUES
(1, gen_random_uuid(), 'FIXED', 'S', 'Red', 'Cotton', 50, 20, 8, 0, 'Model-S', 'Small size red T-shirt', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(1, gen_random_uuid(), 'FIXED', 'M', 'Blue', 'Cotton', 60, 20, 8, 0, 'Model-M', 'Medium size blue T-shirt', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(1, gen_random_uuid(), 'FIXED', 'L', 'Green', 'Cotton', 40, 20, 8, 0, 'Model-L', 'Large size green T-shirt', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(2, gen_random_uuid(), NULL, 'M', 'White', 'Cotton', 30, 30, 0, 0, 'Model-M', 'Medium formal white shirt', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(2, gen_random_uuid(), NULL, 'L', 'Light Blue', 'Cotton', 20, 30, 0, 0, 'Model-L', 'Large formal light blue shirt', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(3, gen_random_uuid(), NULL, 'M', 'Black', 'Leather', 25, 100, 0, 0, 'Model-M', 'Medium-sized black leather jacket', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(3, gen_random_uuid(), 'FIXED', 'L', 'Brown', 'Leather', 15, 120, 10, 0,'Model-L', 'Large-sized brown leather jacket', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(4, gen_random_uuid(), NULL, NULL, 'Gray', 'Synthetic', 40, 10, 0, 0, 'Model-SHOE', 'Gray running shoes with 10% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(4, gen_random_uuid(), 'PERCENTAGE', NULL, 'Black', 'Synthetic', 35, 15, 0, 15, 'Model-SHOE', 'Black running shoes with 15% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(5, gen_random_uuid(), 'FIXED', NULL, 'Navy Blue', 'Polyester', 100, 10, 0,40, 'Model-BP', 'Navy blue backpack with spacious compartments', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(5, gen_random_uuid(), NULL, NULL, 'Gray', 'Polyester', 85, 40, 0, 0, 'Model-BP', 'Gray backpack with laptop sleeve', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(6, gen_random_uuid(), NULL, 'S', 'Red', 'Silk', 20, 150, 0, 0, 'Model-S', 'Small-sized red silk party dress', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(6, gen_random_uuid(), NULL, 'M', 'Emerald Green', 'Silk', 25, 180, 0, 0, 'Model-M', 'Medium-sized emerald green silk party dress', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(7, gen_random_uuid(), 'FIXED', 'M', 'Beige', 'Cotton', 40, 50, 10, 0,'Model-32', 'Medium beige casual trousers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(7, gen_random_uuid(), NULL, 'L', 'Olive Green', 'Cotton', 30, 50, 0, 0, 'Model-34', 'Large olive green casual trousers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(7, gen_random_uuid(), 'FIXED', 'M', 'Navy Blue', 'Wool', 15, 180, 10, 0,'Model-M', 'Medium size navy blue wool coat', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(7, gen_random_uuid(), NULL, 'L', 'Black', 'Wool', 20, 200, 0, 0, 'Model-L', 'Large size black wool coat', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(7, gen_random_uuid(), NULL, 'XL', 'Gray', 'Wool', 10, 15, 0, 0, 'Model-XL', 'Extra large gray wool coat with 15% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(8, gen_random_uuid(), NULL, 'S', 'Dark Blue', 'Denim', 30, 50, 0, 0, 'Model-S', 'Small size dark blue jeans', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(8, gen_random_uuid(), NULL, 'M', 'Black', 'Denim', 25, 55, 0, 0, 'Model-M', 'Medium size black jeans', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(8, gen_random_uuid(), 'PERCENTAGE', 'L', 'Light Blue', 'Denim', 20, 10, 0, 20, 'Model-L', 'Large size light blue jeans with 10% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(9, gen_random_uuid(), 'PERCENTAGE', NULL, 'White', 'Canvas', 50, 15, 0, 10, 'Model-SNK', 'White canvas sneakers with 15% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(9, gen_random_uuid(), NULL, NULL, 'Black', 'Canvas', 40, 60, 0, 0, 'Model-SNK', 'Black canvas sneakers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(9, gen_random_uuid(), NULL, NULL, 'Gray', 'Canvas', 30, 55, 0, 0, 'Model-SNK', 'Gray canvas sneakers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(10, gen_random_uuid(), NULL, NULL, 'Tan', 'Leather', 25, 120, 0, 0, 'Model-HB', 'Tan leather handbag', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(10, gen_random_uuid(), NULL, NULL, 'Black', 'Leather', 30, 140, 0, 0, 'Model-HB', 'Black leather handbag', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(10, gen_random_uuid(), 'PERCENTAGE', NULL, 'Red', 'Leather', 20, 20, 0, 10, 'Model-HB', 'Red leather handbag with 20% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(11, gen_random_uuid(), 'FIXED', NULL, 'Beige', 'Straw', 40, 30, 10, 0,'Model-SH', 'Beige straw summer hat', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(11, gen_random_uuid(), 'FIXED', NULL, 'White', 'Cotton', 50, 35, 10, 0,'Model-SH', 'White cotton summer hat', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(11, gen_random_uuid(), 'PERCENTAGE', NULL, 'Navy', 'Cotton', 35, 10, 0, 5, 'Model-SH', 'Navy cotton summer hat with 10% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(12, gen_random_uuid(), 'PERCENTAGE', 'M', 'Red', 'Polyester', 50, 15, 0, 5, 'Model-SW', 'Medium size red polyester sportswear with 15% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(12, gen_random_uuid(), NULL, 'L', 'Blue', 'Polyester', 40, 45, 0, 0, 'Model-SW', 'Large size blue polyester sportswear', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(12, gen_random_uuid(), NULL, 'S', 'Black', 'Polyester', 30, 40, 0, 0, 'Model-SW', 'Small size black polyester sportswear', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(13, gen_random_uuid(), NULL, 'M', 'Maroon', 'Silk', 20, 250, 0, 0, 'Model-M', 'Medium size maroon silk evening gown', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(13, gen_random_uuid(), NULL, 'L', 'Navy Blue', 'Silk', 15, 300, 0, 0, 'Model-L', 'Large size navy blue silk evening gown', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(13, gen_random_uuid(), NULL, 'S', 'Emerald Green', 'Silk', 10, 10, 0, 0, 'Model-S', 'Small size emerald green evening gown with 10% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(14, gen_random_uuid(), NULL, NULL, 'Gold', 'Metal', 20, 350, 0, 0, 'Model-WT', 'Gold metallic watch', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(14, gen_random_uuid(), NULL, NULL, 'Silver', 'Metal', 25, 300, 0, 0, 'Model-WT', 'Silver metallic watch', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(14, gen_random_uuid(), 'PERCENTAGE', NULL, 'Black', 'Leather', 15, 20, 0, 5, 'Model-WT', 'Black leather watch with 20% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(15, gen_random_uuid(), NULL, 'M', 'Khaki', 'Cotton', 30, 45, 0, 0, 'Model-CT', 'Medium size khaki cotton trousers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(15, gen_random_uuid(), NULL, 'L', 'Gray', 'Cotton', 20, 50, 0, 0, 'Model-CT', 'Large size gray cotton trousers', NOW(), NOW(), 'anonymousUser', 'anonymousUser'),
(15, gen_random_uuid(), NULL, 'S', 'Navy', 'Cotton', 25, 10, 0, 0, 'Model-CT', 'Small size navy cotton trousers with 10% discount', NOW(), NOW(), 'anonymousUser', 'anonymousUser');
