import MobileHeader from '@/components/mobile-header';
import SideNav from '@/components/SideNav';
import Header from '@/components/header';

export default function WithHeaderLayout({ children }) {
    return (
        <>
            <div className="flex">
                <div className="flex-none">
                    <SideNav />
                </div>
                <div className="flex-auto w-full overflow-auto">
                    <Header />
                    <MobileHeader />
                    <div
                        id="scrollableDiv"
                        className="overflow-auto"
                        style={{ height: 'calc(100vh - 66px)' }}
                    >
                        <div className="container mx-auto">
                            <>{children}</>
                        </div>
                        <div className="h-20 sm:h-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
