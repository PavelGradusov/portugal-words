import useLanguage from "@/hooks/use-language";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const FlipCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { lang } = useLanguage();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="aspect-[2/3]  h-4/5 relative m-8">
      <motion.div
        className="w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", transformStyle: "preserve-3d" }}
        onClick={handleFlip}
      >
        {/* Лицевая сторона */}
        <Card
          className="w-full h-full absolute bg-muted shadow-md rounded-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardHeader>
            <CardTitle className="text-sm text-primary">
              {lang === "EN" ? "Question" : "Вопрос"}
            </CardTitle>
            {/* <CardDescription>{question}</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center h-2/3 text-2xl ">
            <p className="text-center">{question}</p>
          </CardContent>
        </Card>

        {/* Обратная сторона */}
        <Card
          className="w-full h-full absolute bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md rounded-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardHeader>
            <CardTitle className="text-sm">
              {lang === "EN" ? "Answer" : "Ответ"}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-2/3 text-3xl">
            <p className="text-center">{answer}</p>
          </CardContent>
          {/* <CardFooter className="justify-center">
            <p className="text-sm text-gray-200">Press to back</p>
          </CardFooter> */}
        </Card>
      </motion.div>
    </div>
  );
};

export default FlipCard;
