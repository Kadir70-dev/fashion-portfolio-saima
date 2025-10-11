import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Palette, Leaf, Award, Globe } from "lucide-react";

export default function AjrakFabrics() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "100% Handmade",
      description: "Crafted by skilled artisans using traditional techniques",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Organic Dyes",
      description: "Natural, eco-friendly dyes for sustainable fashion",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "7+ Color Variations",
      description: "Rich palette of traditional and contemporary colors",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Export Ready",
      description: "Quality standards for international markets",
    },
  ];

  const fabricPatterns = [
    "Deep Indigo Classic",
    "Earthy Rust Red",
    "Royal Blue Heritage",
    "Natural Ivory",
    "Forest Green",
    "Burgundy Traditional",
    "Mustard Gold",
    "Charcoal Black",
  ];

  return (
    <section id="ajrak-fabrics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Check Out AJRAK FABRIC
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover the timeless beauty of traditional Ajrak printing, where each piece
            tells a story of heritage, craftsmanship, and sustainable artistry.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {/* Column 1: Loom */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/ajrak-loom.png"
              alt="Ajrak Loom Machine"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />

            <img
              src="/images/ajrak-4.png"
              alt="Ajrak Sweater"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />
          </div>

          {/* Column 2: Blocks + Dyeing below */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/ajrak-blocks.jpg"
              alt="Wooden Blocks for Ajrak Printing"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />
            <img
              src="/images/ajrak-dyeing.png"
              alt="Ajrak Dyeing Process"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />
          </div>

          {/* Column 3: Printing + Finished below */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/ajrak-printing.jpg"
              alt="Ajrak Hand Block Printing"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />
            <img
              src="/images/ajrak-finished.jpg"
              alt="Finished Ajrak Fabrics"
              className="rounded-xl shadow-md object-cover w-full aspect-[4/3]"
            />
          </div>

        </motion.div>







        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-100 rounded-full mb-4 text-stone-600">
                  {highlight.icon}
                </div>
                <h3 className="mb-2 text-stone-800">{highlight.title}</h3>
                <p className="text-sm text-stone-600">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Color Variations + Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl mb-8 text-stone-800">
            Available Color Variations
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {fabricPatterns.map((pattern, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-stone-700 border-stone-300 hover:bg-stone-50 transition-colors"
              >
                {pattern}
              </Badge>
            ))}
          </div>

          <div className="bg-stone-50 rounded-2xl p-8">
            <h4 className="text-lg mb-4 text-stone-800">Craftsmanship Promise</h4>
            <p className="text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Each Ajrak fabric is meticulously handcrafted using traditional block
              printing techniques passed down through generations. Our artisans use
              natural indigo and madder dyes, creating unique pieces that celebrate the
              authentic beauty of this ancient craft. Every meter of fabric undergoes
              multiple dyeing processes, ensuring rich colors and patterns that tell the
              story of our cultural heritage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
