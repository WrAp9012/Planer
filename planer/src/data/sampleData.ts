export interface Zadanie {
  id: number;
  tytul: string;
  opis: string;
  wykonane: boolean;
}
export const sampleData: Zadanie[] = [
  {
    id: 1,
    tytul: "Grawitacja ptaka",
    opis: "Ptak powinien opadać, jeśli gracz nie klika – dodaj efekt grawitacji.",
    wykonane: true,
  },
  {
    id: 2,
    tytul: "Generowanie rur",
    opis: "Co kilka sekund powinny pojawiać się nowe rury przesuwające się w lewo.",
    wykonane: false,
  },
  {
    id: 3,
    tytul: "Zliczanie punktów",
    opis: "Za każdym razem, gdy ptak minie rurę, gracz powinien otrzymać 1 punkt.",
    wykonane: false,
  },
  {
    id: 4,
    tytul: "Szyfr Cezara",
    opis: "Zaimplementuj klasyczny szyfr Cezara jako jedną z zagadek w grze.",
    wykonane: true,
  },
  {
    id: 5,
    tytul: "Ekran zwycięstwa",
    opis: "Po rozwiązaniu wszystkich zagadek pokaż graczowi gratulacje i przycisk resetu.",
    wykonane: false,
  },
];
