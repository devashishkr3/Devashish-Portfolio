import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
// import 'App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
