import Footer from "../organisms/footer";
import Header from "../organisms/header";

type FullPageProps = {
  children: React.ReactNode;
};

const FullPage = ({ children }: FullPageProps) => {
  return (
    <div className="h-screen w-screen p-3">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default FullPage;
