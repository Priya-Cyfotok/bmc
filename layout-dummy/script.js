const testimonials = [
  "Cyfotok gave me the confidence to launch my career in cybersecurity!",
  "The faculty are extremely supportive and the syllabus is practical.",
  "Hands-on projects helped me understand real-world tech problems.",
];

let current = 0;

function showNextTestimonial() {
  current = (current + 1) % testimonials.length;
  document.getElementById("testimonial-text").innerText = testimonials[current];
}

setInterval(showNextTestimonial, 3000);
