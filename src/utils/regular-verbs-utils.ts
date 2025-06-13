import regularVerbRules from "../data/regular-verb-rules.json";
import { VerbForms } from "@/components/ui/verb-form-table";

type RuleType = {
  group: string;
  verbPostfixForms: VerbForms;
};

const rules: RuleType[] = regularVerbRules;

export const prepare = (verb: string, postfix: string): string => {
  return verb.slice(0, -2) + postfix;
};

export const getPostfix = (type: string, pName: keyof VerbForms): string => {
  const rule = rules.find((r) => r.group === type);
  if (!rule) return ""; // Если правило не найдено, возвращаем пустую строку
  return rule.verbPostfixForms[pName as keyof VerbForms] || "";
};
