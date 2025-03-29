'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?20ec49f431d5844b2f368193989';
    script.defer = true;
    script.async = true;

    const container = document.getElementById('trustindex-widget');
    if (container) {
      container.appendChild(script);
    } else {
      document.body.appendChild(script); // Fallback if container not found
    }
  }, []);

  return (
    <main className="p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to SETENG</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are a leading engineering company delivering top-tier industrial and technological solutions.
        </p>
      </section>

      {/* Services Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Project Management', desc: 'Efficiently managed engineering projects.' },
            { title: 'Custom Fabrication', desc: 'Tailored solutions for complex builds.' },
            { title: 'Maintenance & Support', desc: 'Reliable after-project support and maintenance.' },
          ].map((service) => (
            <div key={service.title} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-medium text-blue-700">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Highlighted Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg">Oil Rig Automation</h3>
            <p className="text-gray-600">End-to-end automation system implemented on offshore rigs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg">Pipeline Monitoring</h3>
            <p className="text-gray-600">AI-powered monitoring for pipeline integrity and safety.</p>
          </div>
        </div>
      </section>

      {/* ⭐ Google Reviews Section */}
      <section className="mb-16 bg-gray-100 py-12">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">
          What Our Clients Say
        </h2>
        <div id="trustindex-widget" className="w-full"></div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Start a Project?</h2>
        <p className="mb-6 text-gray-600">Let’s build something innovative together.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
