import HelpCenter from "./components/ HelpCenter";
import { ColorProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ColorProvider>
      <main className="p-20">
        <HelpCenter />
      </main>
    </ColorProvider>
  );
}
