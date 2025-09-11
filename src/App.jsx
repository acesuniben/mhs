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
import MHS from "./pages/More";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/adhd" element={<ADHD />} />
        <Route path="/anxiety" element={<Anxiety />} />
        <Route path="/bipolar" element={<Bipolar />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/trivia" element={<TriviaPage />} />
        <Route path="/ptsd" element={<PTSD />} />
        <Route path="/adhd-result" element={<MhtResult />} />
        <Route path="/anxiety-result" element={<MhtResuAnxiety />} />
        <Route path="/bipolar-result" element={<MhtResuBipolar />} />
        <Route path="/test" element={<TakeTest/>} />
        <Route path="/quiz" element={<TakeQuiz/>} />
        <Route path="/more" element={<MHS />} />
        <Route path="/download" element={<DownloadPage />} />

        <Route
          path="/depression-result"
          element={<MhtResuDepression />}
        />
        <Route path="/trivia" element={<TriviaPage />} />
        <Route path="/trivia-result" element={<Results />} />
        <Route path="/ptsd-result" element={<MhtResuPTSD />} />


        {/* <Route path="trivia" element={<TriviaPage />} /> */}
  
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
