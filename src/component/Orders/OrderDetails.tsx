import { data, useParams, Link } from "react-router-dom";
import { useOrder } from "../../hooks/useOrder";
import Loading from "../../pages/Loading";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { data: order, isLoading, isError } = useOrder(orderId);
  console.log("orderDetails", data);

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

  if (isError || !order) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Order Not Found</h1>
          <p className="text-sm text-gray-500 mb-5">The order specification you are looking for does not exist or has been removed.</p>
          <Link to="/orders">
            <button className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
              ← Back to My Orders
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full space-y-6">
      
      {/* Dynamic Header Component */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <Link to="/orders" className="text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wider mb-2 inline-block transition">
            ← Back to orders
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Order Details</h1>
          <p className="text-sm font-mono text-gray-400 mt-0.5">ID: {order.id}</p>
        </div>
        <span className={`inline-flex items-center self-start sm:self-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusStyles(order.status)}`}>
          {order.status}
        </span>
      </div>

      {/* Grid container splitting layout cleanly */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Main Products Item Left Column panel */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Ordered Items</h2>
            </div>
            <div className="divide-y divide-gray-100 p-5 space-y-4">
              {order.items.map((item) => (
                <div key={item.productId} className="flex justify-between items-center pt-4 first:pt-0">
                  <div className="pr-4">
                    <p className="font-semibold text-sm text-gray-800 line-clamp-2">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">
                      ₹{item.price.toFixed(2)} <span className="mx-1 text-gray-300">×</span> {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-sm text-gray-900 flex-shrink-0">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Address Panel Block */}
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Shipping Address</h2>
            </div>
            <div className="p-5 text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-900 mb-2">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} — <span className="font-mono text-gray-900 font-medium">{order.shippingAddress.pincode}</span></p>
              <p className="pt-2 text-xs text-gray-400 font-medium">Phone: <span className="text-gray-700 font-mono">{order.shippingAddress.phone}</span></p>
            </div>
          </section>
        </div>

        {/* Payment Balance Right Column Sticky Panel */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden lg:sticky lg:top-24">
          <div className="p-5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Payment Summary</h2>
          </div>
          <div className="p-5 space-y-3.5 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span className="font-medium text-gray-700">₹{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping cost</span>
              <span className="font-medium text-gray-700">₹{order.shippingCost.toFixed(2)}</span>
            </div>
            <hr className="border-gray-100 my-2" />
            <div className="flex justify-between items-baseline pt-1">
              <span className="font-bold text-gray-900">Total Amount</span>
              <span className="text-xl font-black text-gray-900">₹{order.total.toFixed(2)}</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default OrderDetails;
