import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useOrders } from "../../hooks/useOrders";
import Loading from "../../pages/Loading";

const Orders = () => {
  const { data: user } = useCurrentUser();

  const {
    data: orders,
    isLoading,
    isError,
  } = useOrders(user?.id);

  if (isLoading) {
    return <div className="p-8"><Loading/></div>;
  }

  if (isError) {
    return <div className="p-8">Failed to load orders.</div>;
  }

  if (!orders || orders.length === 0) {
    return <div className="p-8">You have no orders yet.</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-6"
          >
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">
                  Order #{order.id}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <span className="capitalize">
                {order.status}
              </span>
            </div>

            <div className="space-y-2">
              {order.items.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <span>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Orders;