import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type VerbPostfixForms = {
  i: string;
  you: string;
  heSheIt: string;
  we: string;
  they: string;
};

type RuleType = {
  group: string;
  verbPostfixForms: VerbPostfixForms;
};

const rules: RuleType[] = [
  {
    group: "AR",
    verbPostfixForms: {
      i: "o",
      you: "as",
      heSheIt: "a",
      we: "amos",
      they: "am",
    },
  },
  {
    group: "ER",
    verbPostfixForms: {
      i: "o",
      you: "es",
      heSheIt: "e",
      we: "emos",
      they: "em",
    },
  },
  {
    group: "IR",
    verbPostfixForms: {
      i: "o",
      you: "es",
      heSheIt: "e",
      we: "imos",
      they: "em",
    },
  },
];

type Verb = {
  id: number;
  verb: string;
  translate: string;
  translateRu: string;
  type: string;
  url: string;
};

const verbs: Verb[] = [
  {
    id: 1,
    verb: "falar",
    translate: "to speak",
    translateRu: "говорить",
    type: "AR",
    url: "",
  },
  {
    id: 2,
    verb: "trabalhar",
    translate: "to work",
    translateRu: "работать",
    type: "AR",
    url: "",
  },
  {
    id: 3,
    verb: "estudar",
    translate: "to study",
    translateRu: "учиться",
    type: "AR",
    url: "",
  },
  {
    id: 4,
    verb: "morar",
    translate: "to live",
    translateRu: "жить",
    type: "AR",
    url: "",
  },
  {
    id: 5,
    verb: "amar",
    translate: "to love",
    translateRu: "любить",
    type: "AR",
    url: "",
  },
  {
    id: 6,
    verb: "viajar",
    translate: "to travel",
    translateRu: "путешествовать",
    type: "AR",
    url: "",
  },
  {
    id: 7,
    verb: "cozinhar",
    translate: "to cook",
    translateRu: "готовить",
    type: "AR",
    url: "",
  },
  {
    id: 8,
    verb: "jogar",
    translate: "to play (a game/sport)",
    translateRu: "играть (в игры/спорт)",
    type: "AR",
    url: "",
  },
  {
    id: 9,
    verb: "dançar",
    translate: "to dance",
    translateRu: "танцевать",
    type: "AR",
    url: "",
  },
  {
    id: 10,
    verb: "nadar",
    translate: "to swim",
    translateRu: "плавать",
    type: "AR",
    url: "",
  },
  {
    id: 11,
    verb: "aprender",
    translate: "to learn",
    translateRu: "учить/учиться",
    type: "ER",
    url: "",
  },
  {
    id: 12,
    verb: "viver",
    translate: "to live (be alive)",
    translateRu: "жить (быть живым)",
    type: "ER",
    url: "",
  },
  {
    id: 13,
    verb: "comer",
    translate: "to eat",
    translateRu: "есть",
    type: "ER",
    url: "",
  },
  {
    id: 14,
    verb: "beber",
    translate: "to drink",
    translateRu: "пить",
    type: "ER",
    url: "",
  },
  {
    id: 15,
    verb: "entender",
    translate: "to understand",
    translateRu: "понимать",
    type: "ER",
    url: "",
  },
  {
    id: 16,
    verb: "assistir",
    translate: "to watch / to attend",
    translateRu: "смотреть / присутствовать",
    type: "IR",
    url: "",
  },
  {
    id: 17,
    verb: "abrir",
    translate: "to open",
    translateRu: "открывать",
    type: "IR",
    url: "",
  },
  {
    id: 18,
    verb: "fechar",
    translate: "to close",
    translateRu: "закрывать",
    type: "AR",
    url: "",
  },
  {
    id: 19,
    verb: "esperar",
    translate: "to wait",
    translateRu: "ждать",
    type: "AR",
    url: "",
  },
  {
    id: 20,
    verb: "começar",
    translate: "to start",
    translateRu: "начинать",
    type: "AR",
    url: "",
  },
  {
    id: 21,
    verb: "terminar",
    translate: "to finish",
    translateRu: "заканчивать",
    type: "AR",
    url: "",
  },
  {
    id: 22,
    verb: "chamar",
    translate: "to call",
    translateRu: "звать/вызывать",
    type: "AR",
    url: "",
  },
  {
    id: 23,
    verb: "escutar",
    translate: "to listen",
    translateRu: "слушать",
    type: "AR",
    url: "",
  },
  {
    id: 24,
    verb: "precisar",
    translate: "to need",
    translateRu: "нуждаться",
    type: "AR",
    url: "",
  },
  {
    id: 25,
    verb: "perguntar",
    translate: "to ask",
    translateRu: "спрашивать",
    type: "AR",
    url: "",
  },
  {
    id: 26,
    verb: "responder",
    translate: "to answer",
    translateRu: "отвечать",
    type: "ER",
    url: "",
  },
  {
    id: 27,
    verb: "gostar",
    translate: "to like",
    translateRu: "нравиться",
    type: "AR",
    url: "",
  },
  {
    id: 28,
    verb: "procurar",
    translate: "to search / to look for",
    translateRu: "искать",
    type: "AR",
    url: "",
  },
  {
    id: 29,
    verb: "encontrar",
    translate: "to find",
    translateRu: "находить",
    type: "AR",
    url: "",
  },
  {
    id: 30,
    verb: "comprar",
    translate: "to buy",
    translateRu: "покупать",
    type: "AR",
    url: "",
  },
  {
    id: 31,
    verb: "pagar",
    translate: "to pay",
    translateRu: "платить",
    type: "AR",
    url: "",
  },
  {
    id: 32,
    verb: "usar",
    translate: "to use",
    translateRu: "использовать",
    type: "AR",
    url: "",
  },
  {
    id: 33,
    verb: "ajudar",
    translate: "to help",
    translateRu: "помогать",
    type: "AR",
    url: "",
  },
  {
    id: 34,
    verb: "lembrar",
    translate: "to remember",
    translateRu: "помнить",
    type: "AR",
    url: "",
  },
  {
    id: 35,
    verb: "esquecer",
    translate: "to forget",
    translateRu: "забывать",
    type: "ER",
    url: "",
  },
  {
    id: 36,
    verb: "caminhar",
    translate: "to walk",
    translateRu: "ходить",
    type: "AR",
    url: "",
  },
  {
    id: 37,
    verb: "descansar",
    translate: "to rest",
    translateRu: "отдыхать",
    type: "AR",
    url: "",
  },
  {
    id: 38,
    verb: "brincar",
    translate: "to play (as a child)",
    translateRu: "играть (как ребенок)",
    type: "AR",
    url: "",
  },
  {
    id: 39,
    verb: "enviar",
    translate: "to send",
    translateRu: "отправлять",
    type: "AR",
    url: "",
  },
  {
    id: 40,
    verb: "receber",
    translate: "to receive",
    translateRu: "получать",
    type: "ER",
    url: "",
  },
  {
    id: 41,
    verb: "mudar",
    translate: "to change",
    translateRu: "менять",
    type: "AR",
    url: "",
  },
  {
    id: 42,
    verb: "limpar",
    translate: "to clean",
    translateRu: "убирать",
    type: "AR",
    url: "",
  },
  {
    id: 43,
    verb: "esperar",
    translate: "to hope / to wait",
    translateRu: "надеяться / ждать",
    type: "AR",
    url: "",
  },
  {
    id: 44,
    verb: "parar",
    translate: "to stop",
    translateRu: "останавливаться",
    type: "AR",
    url: "",
  },
  {
    id: 45,
    verb: "ensinar",
    translate: "to teach",
    translateRu: "учить / преподавать",
    type: "AR",
    url: "",
  },
  {
    id: 46,
    verb: "desejar",
    translate: "to wish",
    translateRu: "желать",
    type: "AR",
    url: "",
  },
  {
    id: 47,
    verb: "mostrar",
    translate: "to show",
    translateRu: "показывать",
    type: "AR",
    url: "",
  },
  {
    id: 48,
    verb: "pensar",
    translate: "to think",
    translateRu: "думать",
    type: "AR",
    url: "",
  },
  {
    id: 49,
    verb: "precisar",
    translate: "to need",
    translateRu: "нуждаться",
    type: "AR",
    url: "",
  },
  {
    id: 50,
    verb: "tratar",
    translate: "to deal with / to treat",
    translateRu: "иметь дело / лечить",
    type: "AR",
    url: "",
  },
  {
    id: 51,
    verb: "ajustar",
    translate: "to adjust",
    translateRu: "регулировать",
    type: "AR",
    url: "",
  },
  {
    id: 52,
    verb: "guardar",
    translate: "to keep / to save",
    translateRu: "хранить / сохранять",
    type: "AR",
    url: "",
  },
  {
    id: 53,
    verb: "criar",
    translate: "to create",
    translateRu: "создавать",
    type: "AR",
    url: "",
  },
  {
    id: 54,
    verb: "lutar",
    translate: "to fight",
    translateRu: "бороться",
    type: "AR",
    url: "",
  },
  {
    id: 55,
    verb: "enviar",
    translate: "to send",
    translateRu: "отправлять",
    type: "AR",
    url: "",
  },
  {
    id: 56,
    verb: "aceitar",
    translate: "to accept",
    translateRu: "принимать",
    type: "AR",
    url: "",
  },
  {
    id: 57,
    verb: "trocar",
    translate: "to exchange",
    translateRu: "менять / обменивать",
    type: "AR",
    url: "",
  },
  {
    id: 58,
    verb: "subir",
    translate: "to go up / to climb",
    translateRu: "подниматься / взбираться",
    type: "IR",
    url: "",
  },
  {
    id: 59,
    verb: "descer",
    translate: "to go down / to descend",
    translateRu: "спускаться",
    type: "ER",
    url: "",
  },
  {
    id: 60,
    verb: "pedir",
    translate: "to ask for / to request",
    translateRu: "просить / запрашивать",
    type: "IR",
    url: "",
  },
  {
    id: 61,
    verb: "oferecer",
    translate: "to offer",
    translateRu: "предлагать",
    type: "ER",
    url: "",
  },
  {
    id: 62,
    verb: "convidar",
    translate: "to invite",
    translateRu: "приглашать",
    type: "AR",
    url: "",
  },
  {
    id: 63,
    verb: "organizar",
    translate: "to organize",
    translateRu: "организовывать",
    type: "AR",
    url: "",
  },
  {
    id: 64,
    verb: "decorar",
    translate: "to decorate",
    translateRu: "украшать",
    type: "AR",
    url: "",
  },
  {
    id: 65,
    verb: "cortar",
    translate: "to cut",
    translateRu: "резать",
    type: "AR",
    url: "",
  },
  {
    id: 66,
    verb: "celebrar",
    translate: "to celebrate",
    translateRu: "праздновать",
    type: "AR",
    url: "",
  },
  {
    id: 67,
    verb: "continuar",
    translate: "to continue",
    translateRu: "продолжать",
    type: "AR",
    url: "",
  },
  {
    id: 68,
    verb: "apresentar",
    translate: "to present / to introduce",
    translateRu: "представлять / вводить",
    type: "AR",
    url: "",
  },
  {
    id: 69,
    verb: "aguardar",
    translate: "to wait / to await",
    translateRu: "ждать / ожидать",
    type: "AR",
    url: "",
  },
  {
    id: 70,
    verb: "cobrar",
    translate: "to charge / to collect",
    translateRu: "взимать / собирать",
    type: "AR",
    url: "",
  },
  {
    id: 71,
    verb: "consertar",
    translate: "to fix / to repair",
    translateRu: "чинить / ремонтировать",
    type: "AR",
    url: "",
  },
  {
    id: 72,
    verb: "preparar",
    translate: "to prepare",
    translateRu: "готовить",
    type: "AR",
    url: "",
  },
  {
    id: 73,
    verb: "descobrir",
    translate: "to discover",
    translateRu: "обнаружить",
    type: "IR",
    url: "",
  },
  {
    id: 74,
    verb: "arrumar",
    translate: "to tidy up / to arrange",
    translateRu: "прибирать / упорядочивать",
    type: "AR",
    url: "",
  },
  {
    id: 75,
    verb: "economizar",
    translate: "to save (money)",
    translateRu: "экономить (деньги)",
    type: "AR",
    url: "",
  },
  {
    id: 76,
    verb: "visitar",
    translate: "to visit",
    translateRu: "посещать",
    type: "AR",
    url: "",
  },
  {
    id: 77,
    verb: "apagar",
    translate: "to turn off / to erase",
    translateRu: "выключать / стирать",
    type: "AR",
    url: "",
  },
  {
    id: 78,
    verb: "explicar",
    translate: "to explain",
    translateRu: "объяснять",
    type: "AR",
    url: "",
  },
  {
    id: 79,
    verb: "esperar",
    translate: "to hope / to wait",
    translateRu: "надеяться / ждать",
    type: "AR",
    url: "",
  },
  {
    id: 80,
    verb: "reclamar",
    translate: "to complain",
    translateRu: "жаловаться",
    type: "AR",
    url: "",
  },
  {
    id: 81,
    verb: "corrigir",
    translate: "to correct",
    translateRu: "исправлять",
    type: "IR",
    url: "",
  },
  {
    id: 82,
    verb: "proteger",
    translate: "to protect",
    translateRu: "защищать",
    type: "ER",
    url: "",
  },
  {
    id: 83,
    verb: "exercitar",
    translate: "to exercise",
    translateRu: "упражняться",
    type: "AR",
    url: "",
  },
  {
    id: 84,
    verb: "melhorar",
    translate: "to improve",
    translateRu: "улучшать",
    type: "AR",
    url: "",
  },
  {
    id: 85,
    verb: "verificar",
    translate: "to verify / to check",
    translateRu: "проверять",
    type: "AR",
    url: "",
  },
  {
    id: 86,
    verb: "analisar",
    translate: "to analyze",
    translateRu: "анализировать",
    type: "AR",
    url: "",
  },
  {
    id: 87,
    verb: "imaginar",
    translate: "to imagine",
    translateRu: "представлять",
    type: "AR",
    url: "",
  },
  {
    id: 88,
    verb: "resolver",
    translate: "to resolve / to solve",
    translateRu: "решать",
    type: "ER",
    url: "",
  },
  {
    id: 89,
    verb: "comemorar",
    translate: "to commemorate",
    translateRu: "праздновать / отмечать",
    type: "AR",
    url: "",
  },
  {
    id: 90,
    verb: "informar",
    translate: "to inform",
    translateRu: "информировать",
    type: "AR",
    url: "",
  },
  {
    id: 91,
    verb: "organizar",
    translate: "to organize",
    translateRu: "организовывать",
    type: "AR",
    url: "",
  },
  {
    id: 92,
    verb: "controlar",
    translate: "to control",
    translateRu: "контролировать",
    type: "AR",
    url: "",
  },
  {
    id: 93,
    verb: "explorar",
    translate: "to explore",
    translateRu: "исследовать",
    type: "AR",
    url: "",
  },
  {
    id: 94,
    verb: "apoiar",
    translate: "to support",
    translateRu: "поддерживать",
    type: "AR",
    url: "",
  },
  {
    id: 95,
    verb: "defender",
    translate: "to defend",
    translateRu: "защищать",
    type: "ER",
    url: "",
  },
  {
    id: 96,
    verb: "experimentar",
    translate: "to try / to experiment",
    translateRu: "пробовать / экспериментировать",
    type: "AR",
    url: "",
  },
  {
    id: 97,
    verb: "iniciar",
    translate: "to initiate / to start",
    translateRu: "инициировать / начинать",
    type: "AR",
    url: "",
  },
  {
    id: 98,
    verb: "adicionar",
    translate: "to add",
    translateRu: "добавлять",
    type: "AR",
    url: "",
  },
  {
    id: 99,
    verb: "detalhar",
    translate: "to detail / to explain in detail",
    translateRu: "детализировать / объяснять подробно",
    type: "AR",
    url: "",
  },
  {
    id: 100,
    verb: "calcular",
    translate: "to calculate",
    translateRu: "вычислять",
    type: "AR",
    url: "",
  },
];

function RegularPage() {
  const prepare = (verb: string, postfix: string): string => {
    return verb.slice(0, -2) + postfix;
  };

  const getPostfix = (type: string, pName: keyof VerbPostfixForms): string => {
    const rule = rules.find((r) => r.group === type);
    if (!rule) return ""; // Если правило не найдено, возвращаем пустую строку
    return rule.verbPostfixForms[pName as keyof VerbPostfixForms] || "";
  };

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        Regular verbs
      </div>
      <Table className="text-2xl">
        <TableCaption>A list of regular verbs</TableCaption>
        <TableHeader className="bg-green-700">
          <TableRow>
            <TableHead className="w-32 uppercase">Verb</TableHead>
            <TableHead className="w-32">Translate</TableHead>
            <TableHead className="w-12">type</TableHead>
            <TableHead className="w-24">Eu</TableHead>
            <TableHead className="w-24">Tu</TableHead>
            <TableHead className="w-24">Ele/Ela/Você</TableHead>
            <TableHead className="w-24">Nós</TableHead>
            <TableHead className="">Eles/Elas/Vocês</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {verbs.map((verb: Verb) => {
            return (
              <TableRow
                key={verb.id}
                className={verb.id % 2 === 0 ? "bg-secondary" : ""}
              >
                <TableCell className="uppercase">{verb.verb}</TableCell>
                <TableCell>{verb.translate}</TableCell>
                <TableCell>
                  <span className="p-1.5 bg-primary rounded-xl">
                    {verb.type}
                  </span>
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "i"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "you"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "heSheIt"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "we"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "they"))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default RegularPage;
