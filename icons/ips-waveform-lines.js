var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsWaveformLinesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-waveform-lines ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-waveform-lines" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448zM544 96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320zM256 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256zm192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192zM160 224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zM0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm576 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" })] })));
};
export default IpsWaveformLinesIcon;
//# sourceMappingURL=ips-waveform-lines.js.map