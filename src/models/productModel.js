class Product {
  constructor(
    _id,
    code,
    name,
    brand,
    description,
    unitPrice,
    quantity,
    productImage,
    isActive,
    category,
    supplierId,
    purchases,
    views,
    imageUrl
  ) {
    this._id = id;
    this.code = code;
    this.name = name;
    this.brand = brand;
    this.description = description;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.productImage = productImage;
    this.isActive = isActive;
    this.category = category;
    this.supplierId = supplierId;
    this.purchases = purchases;
    this.views = views;
    this.imageUrl = imageUrl;
  }
}

export default Product;

/*
get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }*/
