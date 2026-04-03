"use client";

import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ================== BLOG DATA ================== */
const blogsData = [
  {
    id: 1,
    title:
      "Bridging the Gap: How RAG (Retrieval Augmented Generation) is Transforming Generative AI",
    category: "Technology & Business",
    date: "Apr 15",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/rag-l.jpg",

    content: [
      {
        type: "p",
        text: "In recent years, the field of artificial intelligence (AI) has witnessed a remarkable revolution, particularly in generative models. One of the most significant advancements in this realm is the emergence of retrieval augmented generation, which has proven to be a game-changer in enhancing the capabilities of generative AI models. This blog explores the profound impact of retrieval-augmented generation and its role in revolutionising the landscape of generative AI.",
      },
      {
        type: "h1",
        text: "Understanding Retrieval Augmented Generation",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag1.png",
      },
      {
        type: "p",
        text: "Retrieval-augmented generation is a cutting-edge approach that combines the strengths of both retrieval-based and generative models. By using a vast repository of pre-existing data, retrieval-augmented generation enables AI systems to access and incorporate relevant information into the process of generating new content. This dynamic fusion of retrieval and generation empowers AI models to produce more coherent, contextually relevant, and high-quality outputs across various domains.",
      },
      {
        type: "h2",
        text: "Enhancing Creativity and Contextual Understanding",
      },
      {
        type: "p",
        text: "One of the key advantages of retrieval-augmented generation is its ability to enhance the creativity and contextual understanding of AI systems. Unlike traditional generative models, which operate in relative isolation, retrieval-augmented generation enables AI to draw upon a diverse range of external knowledge sources. This results in more nuanced and contextually rich outputs, thereby bridging the gap between AI-generated content and human-level understanding.",
      },
      {
        type: "h2",
        text: "Advancements in Natural Language Processing",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag2.png",
      },
      {
        type: "p",
        text: "In the realm of natural language processing (NLP), retrieval-augmented generation has ushered in a new era of capabilities and possibilities. By enabling AI models to access and integrate relevant information from vast corpora of text, retrieval-augmented generation has significantly improved the coherence, relevance, and fluency of AI-generated language. This has profound implications for a wide range of applications, including chatbots, language translation, content generation, and more.",
      },
      {
        type: "h2",
        text: "Empowering Creative Industries and Content Creation",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag3.png",
      },
      {
        type: "p",
        text: "The impact of retrieval-augmented generation extends beyond the realm of technical advancements, reaching into the creative industries and content creation. With the ability to seamlessly blend existing knowledge with generative capabilities, AI systems powered by retrieval-augmented generation are poised to transform the way content is created across various mediums. From literature and music composition to visual arts and design, the fusion of retrieval and generation opens up unprecedented avenues for creative expression and innovation.",
      },
       {
        type: "h2",
        text: "The Ethical Implications and Future Considerations",
      },
       {
        type: "p",
        text: "As with any revolutionary advancement, retrieval-augmented generation raises important ethical considerations and future implications. The potential for AI systems to generate highly convincing and contextually rich content using retrieval-augmented approaches necessitates careful consideration of issues such as misinformation, intellectual property rights, and content ownership. As this technology continues to evolve, it is crucial to proactively address these ethical considerations and ensure responsible deployment and use of retrieval-augmented generation.",
      },
      {
        type: "h2",
        text: "Revolutionizing Conversational AI",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag4.png",
      },
       {
        type: "p",
        text: "Conversational AI systems empowered by RAG are redefining human-computer interactions. By usiing a wealth of knowledge from diverse sources, RAG-equipped chatbots and virtual assistants can engage in more meaningful and contextually rich conversations. This enables them to provide more accurate and personalized assistance, significantly enhancing the user experience.",
      },
       {
        type: "h2",
        text: "Unleashing the Potential of Large-Scale Knowledge Bases",
      },
       {
        type: "p",
        text: "RAG's integration with large-scale knowledge bases has unlocked unprecedented potential in AI applications. By tapping into extensive repositories of structured and unstructured data, RAG-equipped models can provide comprehensive, well-informed, and contextually relevant responses across a wide range of domains. This capability has far-reaching implications for fields such as education, healthcare, customer service, and beyond.",
      },
      {
        type: "h2",
        text: "Transforming Generative AI for a Brighter Future",
      },
       {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag5.png",
      },
       {
        type: "p",
        text: "The emergence of retrieval-augmented generation represents a significant milestone in the ongoing evolution of generative AI. By harnessing the power of retrieval-augmented approaches, AI systems are poised to revolutionize content generation, creative expression, and contextual understanding across diverse domains. As researchers, developers, and stakeholders continue to explore and refine the capabilities of retrieval-augmented generation, the future holds immense promise for the continued advancement of generative AI and its transformative impact on society.",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag6.png",
      },
      {
        type: "p",
        text: "In conclusion, retrieval augmented generation (RAG) has transformed the field of generative AI by enhancing creativity and contextual understanding. With its integration with large-scale knowledge bases, RAG-equipped models can provide comprehensive, well-informed, and contextually relevant responses across a wide range of domains, unlocking unprecedented potential in AI applications. The fusion of retrieval and generation has far-reaching implications for content creation, conversational AI, and natural language processing, promising a brighter future for society. However, as with any revolutionary advancement, it is crucial to address ethical considerations and ensure responsible deployment and use of retrieval-augmented generation.",
      },
    ],
  },

];

export default function BlogPage() {
  const { id } = useParams();

  const blog = blogsData.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="text-white text-center py-20">Blog not found</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 md:px-16 py-12">
        <div className="grid md:grid-cols-10 gap-6 items-start">
          {/* LEFT SIDE */}
          <div
            className="md:col-span-6 text-white
            [&>h1]:text-[30px] [&>h1]:font-light [&>h1]:mb-[13px] [&>h1]:mt-6
            [&>h2]:text-[20px] [&>h2]:font-bold [&>h2]:mb-[13px] [&>h2]:mt-5
            [&>p]:text-[16px] [&>p]:leading-[1.875] [&>p]:tracking-[0.5px] [&>p]:mt-4 [&>p]:text-white
            [&>img]:rounded-xl [&>img]:my-5 [&>img]:border [&>img]:border-white"
          >
            {/* TOP IMAGE */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-[450px] object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full h-[45%] backdrop-blur-sm bg-black/30"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-md mb-3">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                  <p className="text-sm text-gray-700 font-medium">
                    {blog.category}
                  </p>
                </div>

                <h2 className="text-white text-[22px] font-bold leading-7 mb-2 max-w-[600px]">
                  {blog.title}
                </h2>

                <p className="text-gray-200 text-sm">
                  {blog.date} • {blog.readTime}
                </p>
              </div>
            </div>

            {blog.content.map((item, index) => {
              if (item.type === "h1") {
                return <h1 key={index}>{item.text}</h1>;
              }

              if (item.type === "h2") {
                return <h2 key={index}>{item.text}</h2>;
              }

              if (item.type === "p") {
                return <p key={index}>{item.text}</p>;
              }

              if (item.type === "img") {
                return <img key={index} src={item.src} alt="" />;
              }
if (item.type === "h2") {
                return <h2 key={index}>{item.text}</h2>;
              }
              return null;
            })}

            {/* SHARE SECTION */}
            <div
              className="flex items-center justify-between flex-wrap"
              style={{
                marginTop: "24px",
                padding: "16px 20px",
                backgroundColor: "#f5900d",
                width: "100%",
                borderRadius: "14px",
              }}
            >
              <p style={{ color: "white", fontWeight: "600" }}>
                Like what you see? Share with friends
              </p>

              <div style={{ display: "flex", gap: "12px" }}>
                {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "white",
                      width: "34px",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <Icon style={{ color: "#f5900d" }} />
                  </div>
                ))}
              </div>
            </div>

            <hr className="mt-7 border-t border-gray-300 opacity-50" />

            <h1 className="text-[32px] md:text-[36px] text-white font-black mt-7 ml-2">
              Related Articles
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-[20px] mb-6 font-semibold text-white">
              In this article
            </h2>

            <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f]">
              RAG Transforming generative AI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
