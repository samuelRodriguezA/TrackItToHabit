import React from 'react';

// Placeholder content for pricing data
const pricing = [
  {
    id: 1,
    title: 'Basic',
    description: 'Basic description',
    price: '$0',
    features: ['Log In', 'Calendar', 'Sync Locally'],
    href: '/calendar'
  },
  {
    id: 2,
    title: 'Pro',
    description: 'Get More Perks and receibe notifications to your phone',
    price: '$5',
    features: ['Log In', 'Calendar', 'Notifications'],
    href: 'https://buy.stripe.com/test_fZe6pS0SpgPAcb69AB'
  },
  {
    id: 3,
    title: 'Company Plan',
    description: 'Use Our App for your company',
    price: '$10',
    features: ['Sync With Teams', 'Calendar', 'Notiications'],
    href: 'https://buy.stripe.com/test_eVaaG8cB77f05MI4gg'
  },
];

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="overflow-hidden" id="pricing">
    <div className="container relative z-2">{children}</div>
  </section>
);

const Heading = ({ tag, title }: { tag: string; title: string }) => (
  <div>
    <h2 className="text-3xl font-bold text-white text-align: center">{tag}</h2>
    <h1 className="text-5xl font-bold text-white text-align: center pb-100">{title}</h1>
  </div>
);

const Button = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a
      className="inline-block px-6 py-3 mt-6 text-xs font-bold tracking-wider uppercase border-b border-transparent bg-gray-800 hover:bg-gray-700 text-white"
      href={href}
    >
      {children}
    </a>
  );

const PricingList = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    {pricing.map((item) => (
      <div
        key={item.id}
        className="w-64 px-6 py-8 bg-gray-200 border border-gray-300 rounded-lg text-center"
      >
        <h4 className="text-xl font-bold mb-4">{item.title}</h4>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <div className="flex items-center justify-center h-12 mb-6">
          {item.price && (
            <>
              <div className="text-2xl"></div>
              <div className="text-4xl font-bold">{item.price}</div>
            </>
          )}
        </div>
        <Button href={item.href}>
  {item.price ? 'Get started' : 'Contact us'}
</Button>

        <ul className="text-left mt-6">
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-start py-1">
              <svg
                className="w-4 h-4 mr-2 text-White-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-sm text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Pricing = () => (
  <Section>
    <div className="relative">
      <Heading tag="Get started with Brainwave" title="Pay once, use forever" />
      <PricingList />
    </div>
    <div className="flex justify-center mt-10">
    <a
  href="/calendar"
  className="text-xs font-bold tracking-wider uppercase border-b border-transparent text-white text-align: center hover:border-gray-300"
>
  Go to Calendar
</a>

    </div>
  </Section>
);

export default Pricing;
