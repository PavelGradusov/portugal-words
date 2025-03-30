import { LightDarkToggle } from "./components/light-dark-toggle";
import { Button } from "./components/ui/button";
import FlipCard from "./components/ui/flip-card";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p className="text-2xl">Quem é o autor deste livro?</p>
        <p className="font-[Winky_Sans] text-2xl">
          Quem é o autor deste livro?
        </p>
        <p className="text-2xl">Who is the author of this book?</p>
        <p className="text-2xl">Кто автор этой книги? jost</p>

        <FlipCard
          question="Что такое React?"
          answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
        />
        <Button variant="default" className="m-2">
          Next
        </Button>
      </div>
      <LightDarkToggle className="fixed top-2 right-2 border-4 rounded-md p-1 border-gray-300 dark:border-gray-700" />
    </>
  );
}

export default App;
