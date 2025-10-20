-- PostgreSQL Script
-- Generated & optimized for PostgreSQL 16+
-- Model: Product Table (simple version)

-- Gunakan schema (opsional)
CREATE SCHEMA IF NOT EXISTS aufa_db;
SET search_path TO aufa_db, public;

-- Table: product
CREATE TABLE IF NOT EXISTS product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Comment untuk dokumentasi internal
COMMENT ON TABLE product IS 'Products yang dapat dimiliki oleh user';
COMMENT ON COLUMN product.product_name IS 'Nama produk';
COMMENT ON COLUMN product.price IS 'Harga produk dalam satuan mata uang lokal';
COMMENT ON COLUMN product.stock IS 'Jumlah stok produk';
