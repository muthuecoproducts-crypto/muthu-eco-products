const ShippingPolicy = () => {
  return (
    <div className="pt-0 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shipping Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Areas</h2>
            <p className="text-gray-600 leading-relaxed">
              We currently deliver fresh organic products to the following areas:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Chennai city and surrounding areas</li>
              <li>Perambur, Vyasarpadi, Korukkupet</li>
              <li>Kilpauk, Egmore, Central Chennai</li>
              <li>Other areas on request (delivery charges may apply)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Charges</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">FREE DELIVERY on orders above ₹1,500</p>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              For orders below ₹1,500:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Within 5km: ₹50 delivery charge</li>
              <li>5-10km: ₹80 delivery charge</li>
              <li>10-15km: ₹120 delivery charge</li>
              <li>Beyond 15km: Contact us for custom rates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Timeframes</h2>
            <p className="text-gray-600 leading-relaxed">
              We ensure fresh delivery of organic products with the following schedule:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Standard delivery: 2-3 business days</li>
              <li>Express delivery: Next day (additional ₹100)</li>
              <li>Bulk orders: 3-5 business days (advance notice required)</li>
              <li>Weekend delivery: Available on Saturdays</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Process</h2>
            <p className="text-gray-600 leading-relaxed">
              Our delivery process ensures product freshness:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Products packed in eco-friendly, breathable materials</li>
              <li>Temperature-controlled transport for perishables</li>
              <li>Delivery confirmation call before arrival</li>
              <li>Direct handover to customer or authorized person</li>
              <li>Quality check at delivery point</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special Handling</h2>
            <p className="text-gray-600 leading-relaxed">
              For organic products requiring special care:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Cold-pressed oils: Protected from heat and light</li>
              <li>Fresh produce: Delivered within 24 hours of harvest</li>
              <li>Grains and millets: Moisture-proof packaging</li>
              <li>Spices: Airtight containers to preserve aroma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Issues</h2>
            <p className="text-gray-600 leading-relaxed">
              If you experience any delivery issues:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>Contact us immediately at +91 7358260527</li>
              <li>Report damaged products within 2 hours</li>
              <li>We will arrange re-delivery or full refund</li>
              <li>Customer satisfaction is our priority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact for Delivery</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 leading-relaxed">
                For delivery inquiries and tracking:
              </p>
              <div className="mt-3 text-gray-600">
                <p>📞 Phone: +91 7358260527 | +91 9489790011</p>
                <p>📧 Email: muthuecoproducts@gmail.com</p>
                <p>🕒 Business Hours: Monday-Saturday 9AM-6PM, Sunday 10AM-4PM</p>
              </div>
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

export default ShippingPolicy