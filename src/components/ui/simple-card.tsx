import { Verb } from "@/pages/rules/all-verbs-page";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import VerbFormTable from "./verb-form-table";

export default function SimpleCard({
  verbToShow,
  lang,
}: {
  verbToShow: Verb;
  lang: string;
}) {
  const {
    type,
    verb,
    translation,
    translationRu,
    verbForms,
    // url: image,
  } = verbToShow;

  return (
    <Card className="w-full h-full aspect-[7/10] bg-gradient-to-br from-green-500 to-green-700 text-white shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-sm text-muted flex justify-between items-center">
          <span>
            {lang === "EN"
              ? type
              : type == "irregular"
              ? "Неправильный"
              : "Правильный"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 sm:gap-18 items-center justify-center h-2/3 text-4xl">
        {/* {image !== "" && <img src={image} alt="card image" width="50%"></img>} */}
        <p className="text-center">{verb.toUpperCase()}</p>
        <p className="text-center text-2xl">
          {lang === "EN" ? translation : translationRu}
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <VerbFormTable verbForm={verbForms} />
      </CardFooter>
    </Card>
  );
}
