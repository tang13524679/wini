import classNames from 'classnames';
import { useState, useMemo } from 'react';

export default function TutorialTabsAndSteps({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const shouldShowTabs = tabs.length > 1;

    const _tabs = useMemo(
        () =>
            tabs.map(({ label }, i) => (
                <button
                    key={label}
                    className={classNames(
                        'px-3 py-1 text-xs rounded-3xl transition cursor-pointer',
                        activeIndex === i ? 'bgMainYellow' : 'bgWhite6'
                    )}
                    onClick={() => setActiveIndex(i)}
                >
                    {label}
                </button>
            )),
        [activeIndex, tabs]
    );
    const _contents = useMemo(
        () =>
            tabs[activeIndex].steps.map(({ title, details, image }) => (
                <div key={title}>
                    <div className="clWhite">{title}</div>
                    <div dangerouslySetInnerHTML={{ __html: details }} />
                    {image && (
                        <div className="mt-3 bgWhite10 bdWhite20 border p-2 md:w-3/5 xl:w-2/5 rounded-xl min-h-[32px]">
                            <img
                                className="rounded-xl"
                                src={`https://firebasestorage.googleapis.com/v0/b/gg8-cdn.appspot.com/o/gg8-internal%2Ftutorials%2F${encodeURIComponent(
                                    image
                                )}?alt=media`}
                                alt="guide"
                            />
                        </div>
                    )}
                </div>
            )),
        [activeIndex, tabs]
    );

    return (
        <>
            {shouldShowTabs && (
                <div className="mt-5 flex flex-wrap gap-4 lg:gap-5">
                    {_tabs}
                </div>
            )}
            <div className="mt-7 space-y-6">{_contents}</div>
        </>
    );
}
