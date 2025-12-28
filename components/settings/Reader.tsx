
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsSlider } from '../SettingsShared';

const Reader: React.FC = () => {
    const [keepScreenOn, setKeepScreenOn] = useState(false);
    const [showPageNumber, setShowPageNumber] = useState(true);
    const [flashPageChange, setFlashPageChange] = useState(false);
    
    const [skipRead, setSkipRead] = useState(false);
    const [skipFiltered, setSkipFiltered] = useState(true);
    const [skipDuplicate, setSkipDuplicate] = useState(false);
    const [showTransition, setShowTransition] = useState(true);

    const [cropBorders, setCropBorders] = useState(false);
    const [autoZoomWide, setAutoZoomWide] = useState(true);
    const [panWide, setPanWide] = useState(true);
    const [splitWide, setSplitWide] = useState(false);
    const [rotateWide, setRotateWide] = useState(false);
    const [doubleTapZoom, setDoubleTapZoom] = useState(true);
    const [disableZoomOut, setDisableZoomOut] = useState(false);
    
    const [volumeKeys, setVolumeKeys] = useState(false);
    const [longTapActions, setLongTapActions] = useState(true);
    const [saveToFolders, setSaveToFolders] = useState(false);

    const [showReadingMode, setShowReadingMode] = useState(true);
    const [showTapZones, setShowTapZones] = useState(false);
    const [animateTrans, setAnimateTrans] = useState(true);
    const [fullscreen, setFullscreen] = useState(true);
    const [cutoutArea, setCutoutArea] = useState(true);

    return (
        <div className="pb-10">
            <SettingsHeader>Display</SettingsHeader>
            <SettingsToggle title="Keep screen on" value={keepScreenOn} onToggle={setKeepScreenOn} />
            <SettingsToggle title="Show page number" value={showPageNumber} onToggle={setShowPageNumber} />

            <SettingsHeader>E-Ink</SettingsHeader>
            <SettingsToggle title="Flash on page change" subtitle="Reduces ghosting on e-ink displays" value={flashPageChange} onToggle={setFlashPageChange} />

            <SettingsHeader>Reading</SettingsHeader>
            <SettingsToggle title="Skip chapters marked read" value={skipRead} onToggle={setSkipRead} />
            <SettingsToggle title="Skip filtered chapters" value={skipFiltered} onToggle={setSkipFiltered} />
            <SettingsToggle title="Skip duplicate chapters" value={skipDuplicate} onToggle={setSkipDuplicate} />
            <SettingsToggle title="Always show chapter transition" value={showTransition} onToggle={setShowTransition} />

            <SettingsHeader>Paged</SettingsHeader>
            <SettingsItem title="Tap zones" subtitle="Default" />
            <SettingsItem title="Invert tap zones" subtitle="None" />
            <SettingsItem title="Scale type" subtitle="Fit screen" />
            <SettingsItem title="Zoom start position" subtitle="Automatic" />
            
            <SettingsToggle title="Crop borders" value={cropBorders} onToggle={setCropBorders} />
            <SettingsToggle title="Automatically zoom into wide images" value={autoZoomWide} onToggle={setAutoZoomWide} />
            <SettingsToggle title="Pan wide images" value={panWide} onToggle={setPanWide} />
            <SettingsToggle title="Split wide pages" value={splitWide} onToggle={setSplitWide} />
            <SettingsToggle title="Rotate wide pages to fit" value={rotateWide} onToggle={setRotateWide} />
            <SettingsToggle title="Double tap to zoom" value={doubleTapZoom} onToggle={setDoubleTapZoom} />
            <SettingsToggle title="Disable zoom out" value={disableZoomOut} onToggle={setDisableZoomOut} />

            <SettingsHeader>Navigation</SettingsHeader>
            <SettingsToggle title="Volume keys" value={volumeKeys} onToggle={setVolumeKeys} />

            <SettingsHeader>Actions</SettingsHeader>
            <SettingsToggle title="Show actions on long tap" value={longTapActions} onToggle={setLongTapActions} />
            <SettingsToggle title="Save pages into separate folders" subtitle="Creates folders according to entries' title" value={saveToFolders} onToggle={setSaveToFolders} />

            <SettingsHeader>General</SettingsHeader>
            <SettingsItem title="Default reading mode" subtitle="Paged (right to left)" />
            <SettingsItem title="Double tap animation speed" subtitle="Normal" />
            <SettingsToggle title="Show reading mode" subtitle="Briefly show current mode when reader is opened" value={showReadingMode} onToggle={setShowReadingMode} />
            <SettingsToggle title="Show tap zones overlay" subtitle="Briefly show when reader is opened" value={showTapZones} onToggle={setShowTapZones} />
            <SettingsToggle title="Animate page transitions" value={animateTrans} onToggle={setAnimateTrans} />
            
            <SettingsHeader>Display</SettingsHeader>
            <SettingsItem title="Default rotation" subtitle="Free" />
            <SettingsItem title="Background color" subtitle="Black" />
            <SettingsToggle title="Fullscreen" value={fullscreen} onToggle={setFullscreen} />
            <SettingsToggle title="Show content in cutout area" value={cutoutArea} onToggle={setCutoutArea} />

            <SettingsSlider title="Side padding" value={0} min={0} max={50} onChange={() => {}} label="0%" />
            <SettingsItem title="Sensitivity for hiding menu on scroll" subtitle="Low" />
        </div>
    );
};

export default Reader;
