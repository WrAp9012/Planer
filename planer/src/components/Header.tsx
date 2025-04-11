import "../App.css";

//TODO: Implement button to change background color;
/**
 * Header component wyświetla nagłówek aplikacji z gradientowym tłem,
 * tytułem i podtytułem. Używany jako górna część interfejsu użytkownika.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export default function Header() {
  // const [bgColor, setBgColor] = useState("");
  // const handleBgColorChange = () => {
  //   {
  //     setBgColor("white");
  //   }
  // };
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
          Twój najlepszy planer
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/80">
          Dodaj nowe zadanie
        </p>
        {/* <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
          Zmień kolor tła 🎨
        </button> */}
      </div>
    </>
  );
}
