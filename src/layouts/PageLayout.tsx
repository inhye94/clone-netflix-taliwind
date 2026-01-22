import { PageFooter } from "./PageFooter";
import { PageGNB } from "./PageGNB";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageGNB />
      <main>{children}</main>
      <PageFooter />
    </>
  );
};
