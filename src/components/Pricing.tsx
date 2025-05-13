
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    period: "monthly",
    description: "Perfect for beginners looking to start their fitness journey",
    features: [
      "Access to gym facilities",
      "Basic fitness assessment",
      "2 group classes per week",
      "Standard gym equipment access",
      "Online workout library",
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: "Premium",
    price: 59,
    period: "monthly",
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Unlimited gym access",
      "Comprehensive fitness assessment",
      "Unlimited group classes",
      "Full equipment access",
      "Personalized workout plan",
      "Nutrition consultation",
      "Progress tracking app",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Ultimate",
    price: 99,
    period: "monthly",
    description: "The complete fitness experience with personalized coaching",
    features: [
      "24/7 premium gym access",
      "Advanced fitness assessment",
      "Priority booking for classes",
      "Weekly personal training session",
      "Customized nutrition plan",
      "Recovery and wellness sessions",
      "Premium progress tracking",
      "Body composition analysis",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
            Membership <span className="text-fitness-red">Plans</span>
          </h2>
          <p className="text-fitness-darkGray mt-4 max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and budget.
            All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-lg overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-fitness-red relative transform md:-translate-y-4"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="bg-fitness-red text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-fitness-darkGray mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-fitness-darkGray">/{plan.period}</span>
                </div>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-fitness-red hover:bg-red-600 text-white"
                      : "bg-white border border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
              <div className="bg-gray-50 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-2">
                        <Check className="h-5 w-5 text-fitness-red" />
                      </div>
                      <span className="text-fitness-darkGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
