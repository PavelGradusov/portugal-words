import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const FlipCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-80 relative" style={{ perspective: "1000px" }}>
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
            <CardTitle className="text-lg text-primary">Question</CardTitle>
            <CardDescription>{question}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-2/3">
            <p className="text-center text-gray-500">
              press to know the answer
            </p>
          </CardContent>
        </Card>

        {/* Обратная сторона */}
        <Card
          className="w-full h-full absolute bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md rounded-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardHeader>
            <CardTitle className="text-lg">Answer</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-2/3">
            <p className="text-center">{answer}</p>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-200">Press to back</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default FlipCard;
