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
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 py-12 px-4 text-center shadow-lg relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight hover:tracking-wide transition-all duration-500">
            🌟 Twój najlepszy planer
          </h1>
          <p className="mt-4 text-base md:text-xl text-white/90">
            Zarządzaj swoim czasem jak mistrz 🧠
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
          Zmień kolor tła 🎨
        </button> */}
        </div>
      </header>
    </>
  );
}
