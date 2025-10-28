const PrivacyPolicy = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              At Muthu Eco Products, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Place an order for our organic products</li>
              <li>Contact us through our website or phone</li>
              <li>Subscribe to our newsletter</li>
              <li>Provide feedback or reviews</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Process and fulfill your organic food orders</li>
              <li>Communicate with you about your orders and deliveries</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send you updates about new organic products and offers</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>With delivery partners to fulfill your orders</li>
              <li>With payment processors to handle transactions</li>
              <li>When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 text-gray-600">
              <p>Email: muthuecoproducts@gmail.com</p>
              <p>Phone: +91 7358260527</p>
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

export default PrivacyPolicy