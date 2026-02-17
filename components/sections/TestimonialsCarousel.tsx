const REVIEWS = [
  {
    name: "Michael B.",
    text: "In my second month of training with the Full Circle team. I was reasonably knowledgeable about strength training and nutrition before I started. I'm extremely impressed with their training knowledge and guidance. Every question I've had has been thoroughly answered and backed with evidence. I'm learning a lot and will continue to train here. The team has YOUR goals in mind and can work with any age and fitness level.",
  },
  {
    name: "Patty S.",
    text: "I've been working out at Full Circle Function & Fitness for about 2 months. I dreaded the thought of going to the bigger gyms and feeling lost, but here, with the personalized attention, I feel welcomed. I am feeling stronger and more confident already!",
  },
  {
    name: "Erik S.",
    text: "I had a 90min massage session with Becca and it was excellent. She took the time to sit down with me and go through what areas I felt needed focus and what I was hoping to achieve. I requested a deep tissue sport focused session and Becca absolutely delivered.",
  },
  {
    name: "Mark, 63",
    text: "I've been working with Cody for over a year. From the onset he has taken a very holistic approach to my fitness - not just developing an exercise plan tailored to my goals but going far beyond that to help me rectify existing bad habits and prior injuries. I can say without doubt that I have never met a more effective trainer.",
  },
  {
    name: "Jenn, 44",
    text: "I recently began training with Cody to alleviate chronic lower back pain, that after over a year of intensive treatment, failed to improve. After just a little over a month, I can't believe the difference!! Not to mention how much stronger I feel as well! Highly recommend!",
  },
  {
    name: "Amy",
    text: "Becca is wonderful. The space is welcoming. She listens and applies just the right amount of pressure to those areas that require a little extra attention. Her yoga training provides great insight into how the body works. She integrates that knowledge into her massages. I highly recommend her.",
  },
  {
    name: "Lou F.",
    text: "Where do I begin? I signed up for 3 times a week and the first 6 weeks were hard. By the end of the first week I could already feel an improvement. By the 4th week my flexibility & stability had improved and the couple days I didn't feel like going I am glad I did. Elaine and Chris are great trainers and they are very attentive to each persons exercise.",
  },
  {
    name: "Katie A.",
    text: "I am so thankful to have found Full Circle Function & Fitness and cannot say enough good things about the team. As a pediatric cancer survivor now in my mid-30's, with limited range of motion due to joint issues in my ankles and shoulders, I was nervous to begin a new workout routine. After my consult with Cody, I immediately felt comfortable and confident that I was in a safe space and would make steady and significant progress with the right guidance.",
  },
  {
    name: "Recent Client",
    text: "Full Circle Function & Fitness is outstanding! The coaches are knowledgeable, supportive and truly care about your progress. They tailor to individual goals and provide a holistic health approach. It feels like family and the energy is contagious.",
  },
];

// Google "G" icon paths
const GIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

import Container from '@/components/layout/Container';

export default function TestimonialsCarousel() {
  return (
    <section className="section-padding bg-navy-950">
      <Container>
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-h2 text-white">What Our Clients Say</h2>
      </div>

      {/* Masonry grid */}
      <div
        style={{
          columns: '3 280px',
          columnGap: '1.5rem',
        }}
      >
        {REVIEWS.map((review, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-6 bg-white rounded-xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
          >
            {/* Stars + G icon */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#FBBF24] text-base leading-none">★★★★★</span>
              <GIcon />
            </div>

            {/* Review text */}
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              {review.text}
            </p>

            {/* Reviewer */}
            <div>
              <p className="text-gray-900 font-bold text-sm">{review.name}</p>
              <p className="text-gray-400 text-xs mt-0.5">Google Review</p>
            </div>
          </div>
        ))}
      </div>

      {/* Google Reviews badge */}
      <div className="text-center mt-12">
        <a
          href="https://search.google.com/local/reviews?placeid=ChIJ1ct2sFSNNIgRz3b-few4qF0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-2 group"
        >
          <div className="flex items-center gap-2">
            <GIcon />
            <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Google Reviews
            </span>
          </div>
          <p className="text-brand-500 font-bold text-sm tracking-wider">
            ★★★★★&nbsp; 4.9 Stars · 75+ Reviews
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-brand-500 transition-colors">
            See All Reviews
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </a>
      </div>
      </Container>
    </section>
  );
}
