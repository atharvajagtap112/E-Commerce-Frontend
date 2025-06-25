import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    const statusColors = {
      'PENDING': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'CONFIRMED': 'bg-blue-100 text-blue-800 border-blue-200',
      'SHIPPED': 'bg-purple-100 text-purple-800 border-purple-200',
      'DELIVERED': 'bg-green-100 text-green-800 border-green-200',
      'CANCELLED': 'bg-red-100 text-red-800 border-red-200',
    };
    return statusColors[status?.toUpperCase()] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPaymentStatusColor = (status) => {
    return status?.toLowerCase() === 'completed' || status?.toLowerCase() === 'paid'
      ? 'text-green-600'
      : 'text-orange-600';
  };

  return (
    <div
      onClick={() => navigate(`/account/order/${order.id}`)}
      className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 cursor-pointer transition-all duration-200 transform hover:-translate-y-1"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute text-left inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-200"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">#{order.id.toString().slice(-2)}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
              <p className="text-sm text-gray-500">
                Placed on {new Date(order.orderDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.orderStatus)}`}>
            {order.orderStatus}
          </span>
        </div>

        <div className="grid grid-cols-1 text-left lg:grid-cols-3 gap-6">
          {/* Order Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Order Details</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {order.totalItem} {order.totalItem === 1 ? 'Item' : 'Items'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Total: <span className="font-semibold text-gray-900">₹{order.totalPrice.toLocaleString()}</span>
                </span>
              </div>
              {order.discount > 0 && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm text-emerald-600 font-medium">
                    Saved ₹{order.discount.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <PaymentIcon sx={{ fontSize: 16, color: '#6B7280' }} />
                <span className={`text-sm font-medium ${getPaymentStatusColor(order.paymentDetails.status)}`}>
                  Payment {order.paymentDetails.status}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Delivery Info</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5"></div>
                <div>
                  <p className="text-sm text-gray-600">Expected Delivery</p>
                  <p className="text-sm font-medium text-gray-900">
                    {order.deliveryDate 
                      ? new Date(order.deliveryDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })
                      : 'Pending'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Shipping To</h4>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="text-sm font-medium text-gray-900">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>
              <p className="text-sm text-gray-600">{order.shippingAddress.streetAddress}, {order.shippingAddress?.zipCode}</p>
              <p className="text-sm text-gray-600">
                {order.shippingAddress.city}, {order.shippingAddress.state}
              </p>
              <p className="text-sm text-gray-600">📱 {order.shippingAddress.mobile}</p>
            </div>
          </div>
        </div>

        {/* Footer with Action Hint */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-600 transition-colors">
              <span className="text-sm">Click to view details</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="text-xs text-gray-400">
              Order ID: {order.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
