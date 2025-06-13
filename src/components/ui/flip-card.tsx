import useLanguage from "@/hooks/use-language";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

const FlipCard = ({
  image,
  question,
  answer,
  children,
  categoryEn,
  categoryRu,
  backDirection,
}: {
  image: string;
  question: string;
  answer: string;
  children?: React.ReactNode;
  categoryEn?: string;
  categoryRu?: string;
  backDirection?: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { lang } = useLanguage();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-[450px] max-h-4/5 relative mt-4 mx-auto aspect-[7/10] select-none">
      <motion.div
        className="w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", transformStyle: "preserve-3d" }}
        onClick={handleFlip}
      >
        {/* Лицевая сторона */}
        <Card
          className="w-full h-full absolute bg-muted shadow-md rounded-lg pattern-bg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardHeader>
            <CardTitle className="text-sm text-primary flex justify-between items-center">
              <span>{lang === "EN" ? "Question" : "Вопрос"}</span>
              {lang === "EN" ? (
                <span>{categoryEn}</span>
              ) : (
                <span>{categoryRu}</span>
              )}
            </CardTitle>
            {/* <CardDescription>{question}</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col gap-18 items-center justify-center h-2/3 text-4xl">
            {image !== "" && (
              <img src={image} alt="card image" width="50%"></img>
            )}
            <p className="text-center">{backDirection ? answer : question}</p>
          </CardContent>
        </Card>

        {/* Обратная сторона */}
        <Card
          className="w-full h-full absolute bg-gradient-to-br from-green-500 to-green-700 text-white shadow-md rounded-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardHeader>
            <CardTitle className="text-sm text-muted flex justify-between items-center">
              <span>{lang === "EN" ? "Answer" : "Ответ"}</span>
              {lang === "EN" ? (
                <span>{categoryEn}</span>
              ) : (
                <span>{categoryRu}</span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8 sm:gap-18 items-center justify-center h-2/3 text-2xl md:text-3xl lg:text-4xl">
            {image !== "" && (
              <img src={image} alt="card image" width="50%"></img>
            )}
            <p className="text-center">{backDirection ? question : answer}</p>
          </CardContent>
          {children && (
            <CardFooter className="justify-center">{children}</CardFooter>
          )}
        </Card>
      </motion.div>
    </div>
  );
};

export default FlipCard;
