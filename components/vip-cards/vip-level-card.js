import { VipLevel1 } from './vip-level-1';
import { VipLevel2 } from './vip-level-2';
import { VipLevel3 } from './vip-level-3';
import { VipLevel4 } from './vip-level-4';
import { VipLevel5 } from './vip-level-5';

export const VipLevelCard = (props) => {
    if (props.level === 1) return <VipLevel1 {...props} />;
    if (props.level === 2) return <VipLevel2 {...props} />;
    if (props.level === 3) return <VipLevel3 {...props} />;
    if (props.level === 4) return <VipLevel4 {...props} />;
    if (props.level === 5) return <VipLevel5 {...props} />;

    return (
        <div className="bg-white rounded p-4 text-black text-center">
            VIP Level &quot;{props.level}&quot; has no card.
        </div>
    );
};
