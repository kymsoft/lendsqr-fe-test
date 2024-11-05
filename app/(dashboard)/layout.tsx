import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if(!userId){
  //     redirect('/login-in')
  // } redirect to if user is not authenticated

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="children">
          <div className="children-wrapper">{children}</div>
        </div>
        
      </div>
    </>
  );
}
