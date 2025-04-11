/**
 * Interfejs `Zadanie` opisuje strukturę pojedynczego zadania
 * wykorzystywanego w aplikacji.
 */
export interface Zadanie {
  /** Unikalny identyfikator zadania */
  id: number;
  /** Tytuł zadania */
  tytul: string;
  /** Szczegółowy opis zadania */
  opis?: string;
  /** Flaga określająca, czy zadanie zostało ukończone */
  wykonane: boolean;
}

/**
 * Tablica przykładowych zadań do wyświetlenia w aplikacji.
 * Służy jako dane testowe do komponentu `TaskList`.
 */
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
    wykonane: false,
  },
  {
    id: 3,
    tytul: "Zliczanie punktów",
    opis: "Za każdym razem, gdy ptak minie rurę, gracz powinien otrzymać 1 punkt.",
    wykonane: false,
  },
];
