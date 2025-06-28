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
export const IpsCourtSportIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-court-sport ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-court-sport" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M576 480l-240 0 0-113.1c54.3-7.8 96-54.4 96-110.9s-41.7-103.1-96-110.9L336 32l240 0c35.3 0 64 28.7 64 64l0 32-64 0c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l64 0 0 32c0 35.3-28.7 64-64 64zM304 145.1c-54.3 7.8-96 54.4-96 110.9s41.7 103.1 96 110.9L304 480 64 480c-35.3 0-64-28.7-64-64l0-32 64 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64L0 128 0 96C0 60.7 28.7 32 64 32l240 0 0 113.1zm0 189.3c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4l0 156.8zm32 0l0-156.8c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4zM576 160l64 0 0 192-64 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32zM64 352L0 352 0 160l64 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32z" })] })));
};
export default IpsCourtSportIcon;
//# sourceMappingURL=ips-court-sport.js.map