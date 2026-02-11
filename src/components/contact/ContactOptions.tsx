import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactOptions = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "sales@wewire.com",
    link: "mailto:sales@wewire.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+91 9XXXXXXXXX",
    link: "tel:+919XXXXXXXXX",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Our Location",
    detail: "Wuppertal, Germany",
    link: "#map",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    detail: "Mon–Fri | 9:00 AM – 6:00 PM",
    link: "",
  },
];

const ContactOptions: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose how you’d like to reach us. We’re here to help with your wire-harness projects.
          </p>
        </div>

        {/* Single Contact Card */}
        <div className="bg-white rounded-2xl border border-black/5 float-card card-shadow px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {contactOptions.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center icon-box rounded-lg">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-900 font-semibold hover:text-[var(--primary-color)] transition-colors"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold">
                      {item.detail}
                    </p>
                  )}
                </div>

                {index < contactOptions.length - 1 && (
                  <div className="hidden lg:block text-gray-300 px-4">|</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
