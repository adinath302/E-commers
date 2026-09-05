import { useState } from "react";
import useCartStore from "../../store/useCartStore";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Link } from "react-router-dom";
import type { Order } from "../../types/orders";

const Checkout = () => {
  const { data: user, isLoading } = useCurrentUser();

  const cart = useCartStore((state) => state.cart);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  if (isLoading) {
    return <div className="p-8">Loading checkout...</div>;
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingCost = 2.35;

  const total = subtotal + shippingCost;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const requiredFields = Object.values(address); // here the object gets converted into array of string

    const isEmpty = requiredFields.some((value) => value.trim() === ""); // it checks if the any value is empty form the requireFields

    if (isEmpty) {
      alert("Please fill in all shipping details");
      return;
    }

    if (!/^\d{6}$/.test(address.pincode)) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    if (!/^\d{10}$/.test(address.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!user) {
      alert("Please login before placing an order");
      return;
    }

    const order: Order = {
      id: crypto.randomUUID(),
      userId: user.id,

      items: cart.map((item) => ({
        productId: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),

      shippingAddress: address,

      subtotal,
      shippingCost,
      total,

      status: "pending",

      createdAt: new Date().toISOString(),
    };

    console.log("Order created:", order);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <section className="lg:col-span-2 space-y-8">
          {/* User Information */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            {user ? (
              <div>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="px-2 py-1 bg-purple-300 rounded-xl">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Shipping Address */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="First name"
                value={address.firstName}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    firstName: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                required
                type="text"
                placeholder="Last name"
                value={address.lastName}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    lastName: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                required
                type="text"
                placeholder="Address"
                value={address.address}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    address: e.target.value,
                  })
                }
                className="border rounded-lg p-3 md:col-span-2"
              />

              <input
                required
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                required
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    state: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    pincode: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={address.phone}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    phone: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <aside className="border rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between gap-4">
                <div>
                  <p className="font-medium">{item.title}</p>

                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-3">
            <span>Shipping</span>
            <span>₹{shippingCost.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            type="button"
            className="w-full mt-6 bg-black text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
