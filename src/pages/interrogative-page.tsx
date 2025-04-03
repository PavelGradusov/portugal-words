import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const words = [
  {
    id: 1,
    word: {
      pt: "Quem",
      en: "Who",
      ru: "Кто",
    },
    example: [
      {
        pt: "Quem é o autor deste livro?",
        en: "Who is the author of this book?",
        ru: "Кто автор этой книги?",
      },
      {
        pt: "Quem está falando no telefone?",
        en: "Who is speaking on the phone?",
        ru: "Кто говорит по телефону?",
      },
      {
        pt: "Quem convidou você para a festa?",
        en: "Who invited you to the party?",
        ru: "Кто пригласил тебя на вечеринку?",
      },
      {
        pt: "Quem você viu no parque hoje?",
        en: "Who did you see in the park today?",
        ru: "Кого ты видел в парке сегодня?",
      },
      {
        pt: "Quem é responsável por isso?",
        en: "Who is responsible for this?",
        ru: "Кто за это отвечает?",
      },
    ],
  },
  {
    id: 2,
    word: {
      pt: "O que",
      en: "What",
      ru: "Что",
    },
    example: [
      {
        pt: "O que você quer comer?",
        en: "What do you want to eat?",
        ru: "Что ты хочешь поесть?",
      },
      {
        pt: "O que aconteceu ontem?",
        en: "What happened yesterday?",
        ru: "Что случилось вчера?",
      },
      {
        pt: "O que está dentro da caixa?",
        en: "What is inside the box?",
        ru: "Что находится внутри коробки?",
      },
      {
        pt: "O que você achou do filme?",
        en: "What did you think about the movie?",
        ru: "Что ты думаешь о фильме?",
      },
      {
        pt: "O que está na sua mão?",
        en: "What is in your hand?",
        ru: "Что у тебя в руке?",
      },
    ],
  },
  {
    id: 3,
    word: {
      pt: "Qual",
      en: "Which/What",
      ru: "Какой/Который",
    },
    example: [
      {
        pt: "Qual é o seu endereço?",
        en: "What is your address?",
        ru: "Какой у тебя адрес?",
      },
      {
        pt: "Qual é a sua cor favorita?",
        en: "What is your favorite color?",
        ru: "Какой твой любимый цвет?",
      },
      {
        pt: "Qual desses livros você prefere?",
        en: "Which of these books do you prefer?",
        ru: "Какую из этих книг ты предпочитаешь?",
      },
      {
        pt: "Qual foi o melhor momento do dia?",
        en: "What was the best moment of the day?",
        ru: "Какой момент дня был самым лучшим?",
      },
      {
        pt: "Qual é o seu prato favorito?",
        en: "What is your favorite dish?",
        ru: "Какое блюдо твоё любимое?",
      },
    ],
  },
  {
    id: 4,
    word: {
      pt: "Onde",
      en: "Where",
      ru: "Где",
    },
    example: [
      {
        pt: "Onde está o supermercado mais próximo?",
        en: "Where is the nearest supermarket?",
        ru: "Где находится ближайший супермаркет?",
      },
      {
        pt: "Onde você estava ontem à noite?",
        en: "Where were you last night?",
        ru: "Где ты был вчера вечером?",
      },
      {
        pt: "Onde fica a estação de trem?",
        en: "Where is the train station?",
        ru: "Где находится вокзал?",
      },
      {
        pt: "Onde você costuma almoçar?",
        en: "Where do you usually have lunch?",
        ru: "Где ты обычно обедаешь?",
      },
      {
        pt: "Onde está o seu celular?",
        en: "Where is your phone?",
        ru: "Где твой телефон?",
      },
    ],
  },
  {
    id: 5,
    word: {
      pt: "Quando",
      en: "When",
      ru: "Когда",
    },
    example: [
      {
        pt: "Quando você vai viajar?",
        en: "When are you going to travel?",
        ru: "Когда ты собираешься путешествовать?",
      },
      {
        pt: "Quando começa o filme?",
        en: "When does the movie start?",
        ru: "Когда начинается фильм?",
      },
      {
        pt: "Quando é seu aniversário?",
        en: "When is your birthday?",
        ru: "Когда твой день рождения?",
      },
      {
        pt: "Quando termina o trabalho?",
        en: "When does work end?",
        ru: "Когда заканчивается работа?",
      },
      {
        pt: "Quando você quer encontrar comigo?",
        en: "When do you want to meet me?",
        ru: "Когда ты хочешь встретиться со мной?",
      },
    ],
  },
  {
    id: 6,
    word: {
      pt: "Por que",
      en: "Why",
      ru: "Почему",
    },
    example: [
      {
        pt: "Por que você está cansado?",
        en: "Why are you tired?",
        ru: "Почему ты устал?",
      },
      {
        pt: "Por que você não veio ontem?",
        en: "Why didn't you come yesterday?",
        ru: "Почему ты не пришёл вчера?",
      },
      {
        pt: "Por que você escolheu este curso?",
        en: "Why did you choose this course?",
        ru: "Почему ты выбрал этот курс?",
      },
      {
        pt: "Por que o céu está tão escuro?",
        en: "Why is the sky so dark?",
        ru: "Почему небо такое тёмное?",
      },
      {
        pt: "Por que você está rindo?",
        en: "Why are you laughing?",
        ru: "Почему ты смеёшься?",
      },
    ],
  },
  {
    id: 7,
    word: {
      pt: "Como",
      en: "How",
      ru: "Как",
    },
    example: [
      {
        pt: "Como você chegou aqui?",
        en: "How did you get here?",
        ru: "Как ты сюда добрался?",
      },
      {
        pt: "Como você aprendeu português?",
        en: "How did you learn Portuguese?",
        ru: "Как ты выучил португальский?",
      },
      {
        pt: "Como funciona este dispositivo?",
        en: "How does this device work?",
        ru: "Как работает это устройство?",
      },
      {
        pt: "Como está o tempo hoje?",
        en: "How is the weather today?",
        ru: "Как погода сегодня?",
      },
      {
        pt: "Como posso ajudar você?",
        en: "How can I help you?",
        ru: "Как я могу тебе помочь?",
      },
    ],
  },
  {
    id: 8,
    word: {
      pt: "Quanto",
      en: "How much/How many",
      ru: "Сколько",
    },
    example: [
      {
        pt: "Quanto custa esta camisa?",
        en: "How much does this shirt cost?",
        ru: "Сколько стоит эта рубашка?",
      },
      {
        pt: "Quantas pessoas vão ao evento?",
        en: "How many people are going to the event?",
        ru: "Сколько людей пойдут на мероприятие?",
      },
      {
        pt: "Quantos anos você tem?",
        en: "How old are you?",
        ru: "Сколько тебе лет?",
      },
      {
        pt: "Quantos quilômetros faltam para chegar?",
        en: "How many kilometers are left to arrive?",
        ru: "Сколько километров осталось до прибытия?",
      },
      {
        pt: "Quanto tempo temos para terminar isso?",
        en: "How much time do we have to finish this?",
        ru: "Сколько времени у нас есть, чтобы завершить это?",
      },
    ],
  },
  {
    id: 9,
    word: {
      pt: "Para que",
      en: "For what/Why (purpose)",
      ru: "Зачем",
    },
    example: [
      {
        pt: "Para que serve este botão?",
        en: "What is this button for?",
        ru: "Для чего эта кнопка?",
      },
      {
        pt: "Para que precisamos de tantas coisas?",
        en: "Why do we need so many things?",
        ru: "Зачем нам столько вещей?",
      },
      {
        pt: "Para que você está estudando isso?",
        en: "What are you studying this for?",
        ru: "Для чего ты это изучаешь?",
      },
      {
        pt: "Para que existe essa regra?",
        en: "Why does this rule exist?",
        ru: "Зачем существует это правило?",
      },
      {
        pt: "Para que estamos discutindo?",
        en: "What are we arguing about?",
        ru: "Для чего мы спорим?",
      },
    ],
  },
];

function InterrogativePage() {
  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        Interrogative words
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>A list of regular verb rules</TableCaption>
        <TableHeader className="primary-darker-color">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-24">
              <span className="block">Interrogative word</span>
              <span className="block ">(Translate)</span>
            </TableHead>
            <TableHead className="">Examples</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {words.map((word) => (
            <>
              <TableRow
                key={word.id}
                className={
                  word.id % 2 === 0
                    ? "bg-secondary hover:bg-secondary"
                    : "hover:bg-transparent"
                }
              >
                <TableCell
                  rowSpan={word.example.length}
                  className="whitespace-break-spaces"
                >
                  <span className="block">{word.word.pt}?</span>
                  <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                    ({word.word.en}?)
                  </span>
                </TableCell>
                <TableCell>
                  <span className="block text-wrap">{word.example[0].pt}</span>
                  <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                    ({word.example[0].en})
                  </span>
                </TableCell>
              </TableRow>
              {word.example.map((ex, i) => {
                if (i === 0) {
                  return null;
                }
                return (
                  <TableRow
                    key={ex.pt}
                    className={
                      word.id % 2 === 0
                        ? "bg-secondary hover:bg-secondary"
                        : "hover:bg-transparent"
                    }
                  >
                    <TableCell>
                      {" "}
                      <span className="block text-wrap">{ex.pt}</span>
                      <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                        ({ex.en})
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default InterrogativePage;
