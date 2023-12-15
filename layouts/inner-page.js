import SideNav from "@/components/SideNav";
import Header from "@/components/header";

export default function InnerPageLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="flex-none">
          <SideNav />
        </div>
        <div className="flex-auto w-full overflow-auto">
          <Header />
          {/* <div
                        id="scrollableDiv"
                        className="overflow-auto"
                        style={{ height: 'calc(100vh - 66px)' }}
                    >
                        <div className="h-4"></div>
                        <div className="container mx-auto">
                            <>{children}</>
                        </div>
                        <div className="h-20 sm:h-4"></div>
                    </div> */}
          <div
            id="scrollableDiv"
            className="overflow-auto"
            // style={{ height: "calc(100vh - 50px)" }}
          >
            {/* <div className="h-4"></div> */}
            <div className="container mx-auto" style={{ padding: "50px 15px" }}>
              <>{children}</>
            </div>
            {/* <div className="h-20 sm:h-4"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
