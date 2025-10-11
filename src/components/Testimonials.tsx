import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Quote } from "lucide-react";

export default function FoundersStatement() {
  const testimonials = [
    {
      content:
        "Saima is exceptionally talented and highly efficient in multitasking. Whether it was managing buyer activation programs, leading marketing initiatives, or driving sales activities, she executed every task with perfection and professionalism. Her efforts in connecting global textile buyers from around the world were truly commendable and added immense value to our show. I am confident that Saima will continue to achieve great success in all her future endeavors.",
      author: "Bhavna Nihalani",
      role: "Show Director – IATF",
    },
  ];

  return (
    <section id="founder-statement" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight mb-6">
            Founder’s Statement
          </h2>
        </motion.div>

        {/* Statement Card */}
        <div className="grid md:grid-cols-1 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 h-full bg-stone-50 hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Quote className="w-10 h-10 text-stone-400 mr-3" />
                  <h3 className="font-serif text-2xl font-bold text-stone-700">
                    Words from Industry Leaders
                  </h3>
                </div>

                <p className="text-stone-700 leading-relaxed text-lg md:text-xl italic">
                  "{t.content}"
                </p>

                <div className="mt-8 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-wide">
                    – {t.author}
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-indigo-600 italic">
                    {t.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
