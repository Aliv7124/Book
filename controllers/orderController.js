import Order from "../model/orderModel.js"
export const placeOrder = async (req, res) => {
  try {
    const { bookId, name, price, address,number, paymentMethod } = req.body;
    if (!bookId || !name || !price || !address ||!number) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const numericPrice = typeof price === "string" ? Number(price.replace(/[^0-9.]/g, "")) : price;

    const newOrder = new Order({
      bookId,
      name,
      price: numericPrice,
      address,
      number,
      paymentMethod: paymentMethod || "COD",
    });

    await newOrder.save();

    res.status(201).json({ success: true, message: "Order placed!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
