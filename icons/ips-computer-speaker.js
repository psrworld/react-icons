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
export const IpsComputerSpeakerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-computer-speaker ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-computer-speaker" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 432l0-16-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l176 0c-10-13.4-16-30-16-48zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l224 0 0-64L64 320 64 96l224 0 0-16c0-18 6-34.6 16-48L64 32zm304 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L368 32zM544 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm64-192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })] })));
};
export default IpsComputerSpeakerIcon;
//# sourceMappingURL=ips-computer-speaker.js.map