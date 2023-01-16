import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './content/Home';
import PageOne from './content/PageOne';
import PageTwo from './content/PageTwo';
import PageThree from './content/PageThree';
import NotFound from './content/NotFound';

const Wrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pageOne" element={<PageOne />} />
        <Route path="pageTwo" element={<PageTwo />} />
        <Route path="pageThree" element={<PageThree />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Wrapper;
