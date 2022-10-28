const router = require("express").Router();
const { restart } = require("nodemon");
const { Model } = require("sequelize");
const { CartItem } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/api/cart/:id", withAuth, async (req, res) => {
  const newCart = await CartItem.create({
    ...req.body,
    user_id: req.session.userId,
  });

  res.status(200).json(newCart);
});

router.get("/api/cart", withAuth, async (req, res) => {
  try {
    const dbCartItems = await CartItem.findAll({
      where: {
        userId: req.session.userId,
      },
      include: [
        {
          Model: Product,
          attributes: ["name", "image", "description", "price"],
        },
      ],
    });
    const cartItems = dbCartItems.get({ plain: true });
    res.render("cart", {
      cartItems,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const cartData = await CartItem.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(cartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
