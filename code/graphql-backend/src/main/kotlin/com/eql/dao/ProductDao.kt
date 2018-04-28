package com.eql.dao

import com.eql.model.Product

class ProductDao {

    private var key = 100
    private var productData = mutableMapOf<String, Product>()

    init {
        val onePlusSix = Product(
                id = null,
                name = "One Plus Six",
                cost = 35000.99,
                tags = listOf("Mobile", "Phone"))
        addProduct(onePlusSix)

        val surfacePro = Product(
                id = null,
                name = "Surface Pro",
                cost = 125000.95,
                tags = listOf("Tab", "Microsoft"))
        addProduct(surfacePro)
    }

    fun getProducts(ids: List<String>): Collection<Product> {
        return productData.filter { p -> ids!!.contains(p.key) }.values
    }

    fun getAllProducts(): MutableCollection<Product> {
        return productData.values
    }

    fun addProduct(product: Product): Product? {
        val productKey = key.toString()
        product.id = productKey
        productData[productKey] = product
        key++
        return productData[productKey]
    }
}