import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import TriviaPage from "./pages/TriviaPage";
import PageNotFound from "./pages/PageNotFound";
import ADHD from "./pages/ADHD";
import Anxiety from "./pages/Anxiety";
import Bipolar from "./pages/Bipolar";
import Depression from "./pages/Depression";
import PTSD from "./pages/PTSD";
import MhtResult from "./pages/MhtResult";
import MhtResuAnxiety from "./pages/MhtResuAnxiety";
import MhtResuBipolar from "./pages/MhtResuBipolar";
import MhtResuDepression from "./pages/MhtResuDepression";
import MhtResuPTSD from "./pages/MhtResuPTSD";
import TriviaPage from "./pages/TriviaPage";
import Results from "./components/Results";
import TakeTest from "./pages/TakeTest";
import TakeQuiz from "./pages/TakeQuiz";
import MHS from "./pages/More/MHS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mhs" element={<Homepage />} />
        <Route path="/mhs/adhd" element={<ADHD />} />
        <Route path="/mhs/anxiety" element={<Anxiety />} />
        <Route path="/mhs/bipolar" element={<Bipolar />} />
        <Route path="/mhs/depression" element={<Depression />} />
        <Route path="/mhs/trivia" element={<TriviaPage />} />
        <Route path="/mhs/ptsd" element={<PTSD />} />
        <Route path="/mhs/adhd-result" element={<MhtResult />} />
        <Route path="/mhs/anxiety-result" element={<MhtResuAnxiety />} />
        <Route path="/mhs/bipolar-result" element={<MhtResuBipolar />} />
        <Route path="/mhs/test" element={<TakeTest/>} />
        <Route path="/mhs/quiz" element={<TakeQuiz/>} />
        <Route path="/mhs/more/mhs" element={<MHS />} />
        <Route
          path="/mhs/depression-result"
          element={<MhtResuDepression />}
        />
        <Route path="/mhs/trivia" element={<TriviaPage />} />
        <Route path="/mhs/trivia-result" element={<Results />} />
        <Route path="/mhs/ptsd-result" element={<MhtResuPTSD />} />

  
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
