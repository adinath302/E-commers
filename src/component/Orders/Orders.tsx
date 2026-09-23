import { Link } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useOrders } from "../../hooks/useOrders";
import Loading from "../../pages/Loading";

const Orders = () => {
  const { data: user } = useCurrentUser();
  const { data: orders, isLoading, isError } = useOrders(user?.id);

  // Status mapping utility for consistent badge visuals
  const getStatusStyles = (status: string) => {
    const s = status?.toLowerCase();
    if (s === "completed" || s === "delivered") return "bg-green-50 text-green-700 border-green-200";
    if (s === "pending" || s === "processing") return "bg-amber-50 text-amber-700 border-amber-200";
    if (s === "cancelled" || s === "failed") return "bg-red-50 text-red-700 border-red-200";
    return "bg-gray-50 text-gray-700 border-gray-200";
  };

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-8">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600 font-medium">
          Failed to load orders. Please try again later.
        </div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-400 mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
        <p className="text-gray-500 font-medium mb-4">You have no orders yet.</p>
        <Link to="/profile" className="text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wider transition">
          ← Back to Profile
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
      {/* Header Area with the new Back Button */}
      <div className="mb-8 pb-4 border-b border-gray-200">
        <Link to="/profile" className="text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wider mb-2 inline-block transition">
          ← Back to Profile
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">My Orders</h1>
        <p className="text-sm text-gray-500 mt-1">Review and track your recent purchase history.</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Link key={order.id} to={`/orders/${order.id}`} className="block group">
            <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-5 sm:p-6 shadow-sm transition duration-200 group-hover:shadow-md">
              
              {/* Card Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 mb-4">
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition duration-150">
                    Order #{order.id}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <span className={`inline-flex items-center self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${getStatusStyles(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Items Block Summary */}
              <div className="space-y-2 mb-4">
                {order.items.map((item) => (
                  <div key={item.productId} className="flex justify-between items-baseline text-sm text-gray-600">
                    <span className="truncate max-w-xs sm:max-w-md">
                      {item.title} <span className="text-gray-400 text-xs font-medium ml-1">× {item.quantity}</span>
                    </span>
                    <span className="font-medium text-gray-700 flex-shrink-0">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals Summary Footer */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Amount</span>
                <span className="text-lg font-bold text-gray-900">₹{order.total.toFixed(2)}</span>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Orders;
