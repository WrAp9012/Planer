export interface Zadanie {
  id: number;
  opis: string;
  wykonane: boolean;
}

export interface Projekt {
  id: number;
  nazwa: string;
  opis: string;
  notatka: string;
  zadania: Zadanie[];
}

export const sampleData: Projekt[] = [
  {
    id: 1,
    nazwa: "Flappy Bird",
    opis: "Prosta gra 2D z lataniem między rurami",
    notatka: "Dodać pixelowe UI i dźwięki retro",
    zadania: [
      { id: 1, opis: "Dodaj grawitację ptaka", wykonane: true },
      { id: 2, opis: "Rysuj rury co X sekund", wykonane: false },
      {
        id: 3,
        opis: "Zliczaj punkty po przejściu przez rury",
        wykonane: false,
      },
    ],
  },
  {
    id: 2,
    nazwa: "Hacker Puzzle",
    opis: "Gra logiczna z szyfrowaniem i kodami",
    notatka: "Zainspirowane CTF-ami i cyberbezpieczeństwem",
    zadania: [
      { id: 1, opis: "Dodaj szyfr Cezara jako zagadkę", wykonane: true },
      { id: 2, opis: "Zbuduj ekran zwycięstwa", wykonane: false },
    ],
  },
];
