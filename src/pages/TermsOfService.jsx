const TermsOfService = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Quality & Authenticity</h2>
            <p className="text-gray-600 leading-relaxed">
              All products sold by Muthu Eco Products are certified organic and sourced directly from trusted farms. We guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>100% organic certification for all products</li>
              <li>Chemical-free grains, millets, and spices</li>
              <li>Fresh products with proper storage and handling</li>
              <li>Authentic Tamil Nadu organic produce</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders & Payment</h2>
            <p className="text-gray-600 leading-relaxed">
              By placing an order with us, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Provide accurate contact and delivery information</li>
              <li>Pay the full amount before product delivery</li>
              <li>Accept that prices may vary based on seasonal availability</li>
              <li>Understand that bulk orders may require advance notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We deliver fresh organic products across Chennai with the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Free delivery for orders above ₹1,500</li>
              <li>Delivery charges apply for orders below ₹1,500</li>
              <li>Delivery within 2-3 business days</li>
              <li>Customer must be available to receive fresh products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return & Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Due to the nature of fresh organic products:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Returns accepted only for damaged or incorrect products</li>
              <li>Report issues within 24 hours of delivery</li>
              <li>Refunds processed within 3-5 business days</li>
              <li>Quality guarantee on all organic products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              As our valued customer, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Store organic products properly after delivery</li>
              <li>Use products within recommended timeframes</li>
              <li>Provide feedback to help us improve our services</li>
              <li>Respect our staff and delivery personnel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding these terms, contact us:
            </p>
            <div className="mt-3 text-gray-600">
              <p>Email: muthuecoproducts@gmail.com</p>
              <p>Phone: +91 7358260527 | +91 9489790011</p>
              <p>Address: No.22A-2/2, 1st Main Road, Jawahar Nagar, Perambur, Chennai – 600 082</p>
            </div>
          </section>

          <div className="text-sm text-gray-500 pt-6 border-t">
            Last updated: December 27, 2024
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService