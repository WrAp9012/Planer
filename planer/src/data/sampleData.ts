// types/TaskType.ts

/**
 * Reprezentuje pojedyncze zadanie na liście.
 */
export interface TaskType {
  id: number;
  title: string;
  body?: string;
  isDone: boolean;
}

export const sampleData: TaskType[] = [
  {
    id: 1,
    title: "Nauka Reacta",
    body: "Przerobić komponenty funkcyjne i stan",
    isDone: false,
  },
  {
    id: 2,
    title: "Zrobić zadanie z matmy",
    body: "Zadanie 5 ze strony 123",
    isDone: true,
  },
  {
    id: 3,
    title: "Przeczytać artykuł o TypeScript",
    body: "Na blogu twórców Reacta",
    isDone: false,
  },
  {
    id: 4,
    title: "Ćwiczenia na siłowni",
    body: "Trening FBW + kardio",
    isDone: false,
  },
  {
    id: 5,
    title: "Napisać wpis na bloga",
    body: "Temat: Jak działa useEffect w React",
    isDone: true,
  },
  {
    id: 6,
    title: "Odpoczynek 🧘‍♂️",
    body: "Medytacja lub krótki spacer",
    isDone: false,
  },
];
