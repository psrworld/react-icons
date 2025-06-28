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
export const IpbSpeakerDeckIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon brands-icon ipb-speaker-deck ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-speaker-deck" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M213.86 296H100a100 100 0 0 1 0-200h132.84a40 40 0 0 1 0 80H98c-26.47 0-26.45 40 0 40h113.82a100 100 0 0 1 0 200H40a40 40 0 0 1 0-80h173.86c26.48 0 26.46-40 0-40zM298 416a120.21 120.21 0 0 0 51.11-80h64.55a19.83 19.83 0 0 0 19.66-20V196a19.83 19.83 0 0 0-19.66-20H296.42a60.77 60.77 0 0 0 0-80h136.93c43.44 0 78.65 35.82 78.65 80v160c0 44.18-35.21 80-78.65 80z" })] })));
};
export default IpbSpeakerDeckIcon;
//# sourceMappingURL=ipb-speaker-deck.js.map