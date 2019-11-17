const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    ID:Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product' // 指向联合查询的model
    },
    createDate: { type: Date, default: Date.now() }
});

mongoose.model('Cart',cartSchema);